(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'gen.core
   :output-to "out/gen.js"
   :output-dir "out"})
