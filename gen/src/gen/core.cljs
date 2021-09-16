(ns gen.core
  (:require [clojure.string :as str] [gen.util :as util]))

(enable-console-print!)

(def media "Follow us on Instagram ► https://www.instagram.com/hardreset.info
Like us on Facebook ► https://www.facebook.com/hardresetinfo/
Tweet us on Twitter ► https://twitter.com/HardResetI
Support us on TikTok ► https://www.tiktok.com/@hardreset.info
Use Reset Guides for many popular Apps ► https://www.hardreset.info/apps/apps/")
(def tags "settings, how, to, game, test, check, gameplay")
;; (def additional-tags ["frames per second" "graphics" "maximum" "details" "technology" "tips" "experience" "tricks" "top"])
(def abouts ["Learn more about {{device}}: {{link}}" "Discover more: {{link}}" "Check out more: {{link}}"])
(def abouts2 ["Learn more about {{device2}}: {{link2}}" "Discover more: {{link2}}" "Check out more about {{device2}}: {{link2}}"])


(defn device-to-tags
  "Converts a device (name, ram and cpu) into a simple strings to use it in the tags section of a description"
  [device]
  (let [name (util/get-or device "device" "device2") cpu (util/get-or device "cpu" "cpu2") ram (util/get-or device "ram" "ram2")]
    (str name ", " cpu ", " ram " GB RAM, ")))


(defn parse
  "Replaces substrings in a string, that match keys available in the device map"
  [string device replacement]
  (loop [s (str/replace string #"\{\{game\}\}|\{\{benchmark\}\}" replacement) i 0]
    (if (< i (count (keys device)))
      (let [key (nth (keys device) i)]
        (recur (str/replace s (str "{{" key "}}") (get device key)) (inc i))) s)))


(defn generate-description-for-game
  "Generates a description for a single game"
  [device sentences titles howtos game-title desc-tags]
  (let [sentence (rand-nth sentences) title (rand-nth titles) howto-str (util/retrieve-till-the-limit howtos (get device "amount"))]
    (parse
     (str
      (str/upper-case game-title) "\n\n"
      title "\n\n"
      (util/get-random-from abouts) "\n"
      sentence "\n"
      media "\n"
      (str/join " " howto-str) "\n"
      (str (get device "spec")) "\n"
      (str (get device "hashtags")) "\n\n"
      tags ", " (device-to-tags device) (str/join ", " (util/retrieve-till-the-limit desc-tags 4)) "\n") device game-title)))


(defn generate-description-for-benchmark
  "Generate a description for a single benchmark"
  [device benchmark-type titles sentences howtos points desc-tags]
  (let [sentence (rand-nth sentences) title (rand-nth titles) howto-str (util/retrieve-till-the-limit howtos (get device "amount")) points-str (util/retrieve-till-the-limit points 3)]
    (parse
     (str
      (str/upper-case benchmark-type) "\n\n"
      title "\n\n"
      (util/get-random-from abouts) "\n"
      sentence "\n"
      media "\n"
      (str/join " " howto-str) "\n"
      (get device "spec") "\n"
      (str/join " " points-str) "\n"
      (get device "hashtags") "\n\n"
      tags ", " (device-to-tags device) (str/join ", " (util/retrieve-till-the-limit desc-tags 4)) "\n") device benchmark-type)))


(defn generate-description-for-versus
  [devices sentences titles howtos benchmark points desc-tags]
  (let
   [sentence (rand-nth sentences)
    title (rand-nth titles)
    howto-str (util/retrieve-till-the-limit howtos (get (get devices 0) "amount"))
    points-str (util/retrieve-till-the-limit points 2)
    first-device (get devices 0)
    second-device (util/transfrom-device-map (get devices 1) 2)]

    (parse
     (parse
      (str
       (str/upper-case benchmark) "\n\n"
       title "\n\n"
       (util/get-random-from abouts) "\n"
       (util/get-random-from abouts2) "\n"
       sentence "\n"
       media "\n"
       (str/join " " howto-str) "\n"
       (str/join " " points-str) "\n"
       (get first-device "hashtags") " " (get second-device "hashtags2") "\n\n"
       tags ", " (device-to-tags first-device) (str/join ", " (util/retrieve-till-the-limit desc-tags 4))
       (device-to-tags second-device) (str/join ", " (util/retrieve-till-the-limit desc-tags 4)) "\n"
       )
      second-device benchmark)
     first-device benchmark)))


(defn generate-for-games ^String
  [device sentences titles howtos games desc-tags]
  (str/join "\n" (map #(generate-description-for-game device sentences titles howtos % desc-tags) games)))


(defn generate-for-benchmarks ^String
  [device benchmarks titles sentences howtos points desc-tags]
  (str/join "\n" (map #(generate-description-for-benchmark device % titles sentences howtos points desc-tags) benchmarks)))


(defn generate-for-versus ^String
  [devices sentences titles howtos benchmarks points desc-tags]
  (str/join "\n" (map  #(generate-description-for-versus devices sentences titles howtos % points desc-tags) benchmarks)))


(defn ^:export generate ^String
  [description-type devices sentences titles howtos games benchmarks points desc-tags]
  (def parsed-devices (js->clj (.parse js/JSON devices)))
  (cond
    (= description-type "game") (generate-for-games (get parsed-devices 0) sentences titles howtos games desc-tags)
    (= description-type "benchmark") (generate-for-benchmarks (get parsed-devices 0) benchmarks titles sentences howtos points desc-tags)
    (= description-type "versus") (generate-for-versus parsed-devices sentences titles howtos benchmarks points desc-tags)))
