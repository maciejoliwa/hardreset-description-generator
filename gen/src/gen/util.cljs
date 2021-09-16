(ns gen.util)


(defn retrieve-till-the-limit
  [collection ^long limit]
  (as-> (shuffle collection) coll
    (take limit (distinct coll))))


(defn get-random-from
  "Tries to retrieve a random item from a collection, or returns nil if IndexOutOfBoundException has been raised"
  [collection]
  (try
    (rand-nth collection)
    (catch Exception _ nil)))


(defn transfrom-device-map
  [device-map i]
  (let [v (vals device-map)]
    (as-> (keys device-map) k
      (map #(str % i) k) ; Example: (where i = 2): "key" => "key2"
      (zipmap k v))))


(defn get-or
  [mp key1 key2]
  (let [v (get mp key1)]
    (if (nil? v)
      (get mp key2)
      v)))
