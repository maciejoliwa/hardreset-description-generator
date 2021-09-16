// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('gen.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.browser.repl');
goog.require('clojure.string');
goog.require('gen.util');
cljs.core.enable_console_print_BANG_();
gen.core.media = "Follow us on Instagram \u25BA https://www.instagram.com/hardreset.info\nLike us on Facebook \u25BA https://www.facebook.com/hardresetinfo/\nTweet us on Twitter \u25BA https://twitter.com/HardResetI\nSupport us on TikTok \u25BA https://www.tiktok.com/@hardreset.info\nUse Reset Guides for many popular Apps \u25BA https://www.hardreset.info/apps/apps/";
gen.core.tags = "settings, how, to, game, test, check, gameplay";
gen.core.additional_tags = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["frames per second","graphics","maximum","details","technology","tips","experience","tricks","top"], null);
gen.core.abouts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Learn more about {{device}}: {{link}}","Discover more: {{link}}","Check out more: {{link}}"], null);
gen.core.abouts2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Learn more about {{device2}}: {{link2}}","Discover more: {{link2}}","Check out more about {{device2}}: {{link2}}"], null);
/**
 * Converts a device (name, ram and cpu) into a simple strings to use it in the tags section of a description
 */
gen.core.device_to_tags = (function gen$core$device_to_tags(device){
var name = gen.util.get_or(device,"device","device2");
var cpu = gen.util.get_or(device,"cpu","cpu2");
var ram = gen.util.get_or(device,"ram","ram2");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cpu),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ram)," GB RAM, "].join('');
});
/**
 * Replaces substrings in a string, that match keys available in the device map
 */
gen.core.parse = (function gen$core$parse(string,device,replacement){
var s = clojure.string.replace(string,/\{\{game\}\}|\{\{benchmark\}\}/,replacement);
var i = (0);
while(true){
if((i < cljs.core.count(cljs.core.keys(device)))){
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(device),i);
var G__2743 = clojure.string.replace(s,["{{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"}}"].join(''),cljs.core.get.cljs$core$IFn$_invoke$arity$2(device,key));
var G__2744 = (i + (1));
s = G__2743;
i = G__2744;
continue;
} else {
return s;
}
break;
}
});
/**
 * Generates a description for a single game
 */
gen.core.generate_description_for_game = (function gen$core$generate_description_for_game(device,sentences,titles,howtos,game_title,desc_tags){
var sentence = cljs.core.rand_nth(sentences);
var title = cljs.core.rand_nth(titles);
var howto_str = gen.util.retrieve_till_the_limit(howtos,cljs.core.get.cljs$core$IFn$_invoke$arity$2(device,"amount"));
return gen.core.parse([cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(game_title)),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.util.get_random_from(gen.core.abouts)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sentence),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.core.media),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",howto_str)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(device,"spec"))].join('')),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(device,"hashtags"))].join('')),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.core.tags),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.core.device_to_tags(device)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",gen.util.retrieve_till_the_limit(desc_tags,(4)))),"\n"].join(''),device,game_title);
});
/**
 * Generate a description for a single benchmark
 */
gen.core.generate_description_for_benchmark = (function gen$core$generate_description_for_benchmark(device,benchmark_type,titles,sentences,howtos,points,desc_tags){
var sentence = cljs.core.rand_nth(sentences);
var title = cljs.core.rand_nth(titles);
var howto_str = gen.util.retrieve_till_the_limit(howtos,cljs.core.get.cljs$core$IFn$_invoke$arity$2(device,"amount"));
var points_str = gen.util.retrieve_till_the_limit(points,(3));
return gen.core.parse([cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(benchmark_type)),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.util.get_random_from(gen.core.abouts)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sentence),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.core.media),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",howto_str)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(device,"spec")),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",points_str)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(device,"hashtags")),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.core.tags),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.core.device_to_tags(device)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",gen.util.retrieve_till_the_limit(desc_tags,(4)))),"\n"].join(''),device,benchmark_type);
});
gen.core.generate_description_for_versus = (function gen$core$generate_description_for_versus(devices,sentences,titles,howtos,benchmark,points,desc_tags){
var sentence = cljs.core.rand_nth(sentences);
var title = cljs.core.rand_nth(titles);
var howto_str = gen.util.retrieve_till_the_limit(howtos,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(devices,(0)),"amount"));
var points_str = gen.util.retrieve_till_the_limit(points,(2));
var first_device = cljs.core.get.cljs$core$IFn$_invoke$arity$2(devices,(0));
var second_device = gen.util.transfrom_device_map(cljs.core.get.cljs$core$IFn$_invoke$arity$2(devices,(1)),(2));
return gen.core.parse(gen.core.parse([cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(benchmark)),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.util.get_random_from(gen.core.abouts)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.util.get_random_from(gen.core.abouts2)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sentence),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.core.media),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",howto_str)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",points_str)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(first_device,"hashtags"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(second_device,"hashtags2")),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.core.tags),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.core.device_to_tags(first_device)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",gen.util.retrieve_till_the_limit(desc_tags,(4)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(gen.core.device_to_tags(second_device)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",gen.util.retrieve_till_the_limit(desc_tags,(4)))),"\n"].join(''),second_device,benchmark),first_device,benchmark);
});
gen.core.generate_for_games = (function gen$core$generate_for_games(device,sentences,titles,howtos,games,desc_tags){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__2745_SHARP_){
return gen.core.generate_description_for_game(device,sentences,titles,howtos,p1__2745_SHARP_,desc_tags);
}),games));
});
gen.core.generate_for_benchmarks = (function gen$core$generate_for_benchmarks(device,benchmarks,titles,sentences,howtos,points,desc_tags){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__2746_SHARP_){
return gen.core.generate_description_for_benchmark(device,p1__2746_SHARP_,titles,sentences,howtos,points,desc_tags);
}),benchmarks));
});
gen.core.generate_for_versus = (function gen$core$generate_for_versus(devices,sentences,titles,howtos,benchmarks,points,desc_tags){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__2747_SHARP_){
return gen.core.generate_description_for_versus(devices,sentences,titles,howtos,p1__2747_SHARP_,points,desc_tags);
}),benchmarks));
});
gen.core.generate = (function gen$core$generate(description_type,devices,sentences,titles,howtos,games,benchmarks,points,desc_tags){
gen.core.parsed_devices = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(devices));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(description_type,"game")){
return gen.core.generate_for_games(cljs.core.get.cljs$core$IFn$_invoke$arity$2(gen.core.parsed_devices,(0)),sentences,titles,howtos,games,desc_tags);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(description_type,"benchmark")){
return gen.core.generate_for_benchmarks(cljs.core.get.cljs$core$IFn$_invoke$arity$2(gen.core.parsed_devices,(0)),benchmarks,titles,sentences,howtos,points,desc_tags);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(description_type,"versus")){
return gen.core.generate_for_versus(gen.core.parsed_devices,sentences,titles,howtos,benchmarks,points,desc_tags);
} else {
return null;
}
}
}
});
goog.exportSymbol('gen.core.generate', gen.core.generate);
