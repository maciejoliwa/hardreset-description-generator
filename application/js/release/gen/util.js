// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('gen.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
gen.util.retrieve_till_the_limit = (function gen$util$retrieve_till_the_limit(collection,limit){
var coll = cljs.core.shuffle(collection);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
});
/**
 * Tries to retrieve a random item from a collection, or returns nil if IndexOutOfBoundException has been raised
 */
gen.util.get_random_from = (function gen$util$get_random_from(collection){
try{return cljs.core.rand_nth(collection);
}catch (e1789){if((e1789 instanceof gen.util.Exception)){
var _ = e1789;
return null;
} else {
throw e1789;

}
}});
gen.util.transfrom_device_map = (function gen$util$transfrom_device_map(device_map,i){
var v = cljs.core.vals(device_map);
var k = cljs.core.keys(device_map);
var k__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (k,v){
return (function (p1__1790_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1790_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
});})(k,v))
,k);
return cljs.core.zipmap(k__$1,v);
});
gen.util.get_or = (function gen$util$get_or(mp,key1,key2){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mp,key1);
if((v == null)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(mp,key2);
} else {
return v;
}
});
gen.util.generate_tags = (function gen$util$generate_tags(device,tags){
var dev_tags = clojure.string.split.cljs$core$IFn$_invoke$arity$2((device.cljs$core$IFn$_invoke$arity$1 ? device.cljs$core$IFn$_invoke$arity$1("device") : device.call(null,"device")),/ /);
var chosen_tags = gen.util.retrieve_till_the_limit(tags,(5));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(dev_tags,chosen_tags));
});
