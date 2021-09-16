// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__5947){
var map__5948 = p__5947;
var map__5948__$1 = ((((!((map__5948 == null)))?(((((map__5948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5948):map__5948);
var m = map__5948__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5948__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5948__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__5950_5972 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__5951_5973 = null;
var count__5952_5974 = (0);
var i__5953_5975 = (0);
while(true){
if((i__5953_5975 < count__5952_5974)){
var f_5976 = chunk__5951_5973.cljs$core$IIndexed$_nth$arity$2(null,i__5953_5975);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_5976], 0));


var G__5977 = seq__5950_5972;
var G__5978 = chunk__5951_5973;
var G__5979 = count__5952_5974;
var G__5980 = (i__5953_5975 + (1));
seq__5950_5972 = G__5977;
chunk__5951_5973 = G__5978;
count__5952_5974 = G__5979;
i__5953_5975 = G__5980;
continue;
} else {
var temp__5457__auto___5981 = cljs.core.seq(seq__5950_5972);
if(temp__5457__auto___5981){
var seq__5950_5982__$1 = temp__5457__auto___5981;
if(cljs.core.chunked_seq_QMARK_(seq__5950_5982__$1)){
var c__4351__auto___5983 = cljs.core.chunk_first(seq__5950_5982__$1);
var G__5984 = cljs.core.chunk_rest(seq__5950_5982__$1);
var G__5985 = c__4351__auto___5983;
var G__5986 = cljs.core.count(c__4351__auto___5983);
var G__5987 = (0);
seq__5950_5972 = G__5984;
chunk__5951_5973 = G__5985;
count__5952_5974 = G__5986;
i__5953_5975 = G__5987;
continue;
} else {
var f_5988 = cljs.core.first(seq__5950_5982__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_5988], 0));


var G__5989 = cljs.core.next(seq__5950_5982__$1);
var G__5990 = null;
var G__5991 = (0);
var G__5992 = (0);
seq__5950_5972 = G__5989;
chunk__5951_5973 = G__5990;
count__5952_5974 = G__5991;
i__5953_5975 = G__5992;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_5993 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_5993], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_5993)))?cljs.core.second(arglists_5993):arglists_5993)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__5954_5994 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__5955_5995 = null;
var count__5956_5996 = (0);
var i__5957_5997 = (0);
while(true){
if((i__5957_5997 < count__5956_5996)){
var vec__5958_5998 = chunk__5955_5995.cljs$core$IIndexed$_nth$arity$2(null,i__5957_5997);
var name_5999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5958_5998,(0),null);
var map__5961_6000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5958_5998,(1),null);
var map__5961_6001__$1 = ((((!((map__5961_6000 == null)))?(((((map__5961_6000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5961_6000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5961_6000):map__5961_6000);
var doc_6002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5961_6001__$1,cljs.core.cst$kw$doc);
var arglists_6003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5961_6001__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_5999], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_6003], 0));

if(cljs.core.truth_(doc_6002)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_6002], 0));
} else {
}


var G__6004 = seq__5954_5994;
var G__6005 = chunk__5955_5995;
var G__6006 = count__5956_5996;
var G__6007 = (i__5957_5997 + (1));
seq__5954_5994 = G__6004;
chunk__5955_5995 = G__6005;
count__5956_5996 = G__6006;
i__5957_5997 = G__6007;
continue;
} else {
var temp__5457__auto___6008 = cljs.core.seq(seq__5954_5994);
if(temp__5457__auto___6008){
var seq__5954_6009__$1 = temp__5457__auto___6008;
if(cljs.core.chunked_seq_QMARK_(seq__5954_6009__$1)){
var c__4351__auto___6010 = cljs.core.chunk_first(seq__5954_6009__$1);
var G__6011 = cljs.core.chunk_rest(seq__5954_6009__$1);
var G__6012 = c__4351__auto___6010;
var G__6013 = cljs.core.count(c__4351__auto___6010);
var G__6014 = (0);
seq__5954_5994 = G__6011;
chunk__5955_5995 = G__6012;
count__5956_5996 = G__6013;
i__5957_5997 = G__6014;
continue;
} else {
var vec__5963_6015 = cljs.core.first(seq__5954_6009__$1);
var name_6016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5963_6015,(0),null);
var map__5966_6017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5963_6015,(1),null);
var map__5966_6018__$1 = ((((!((map__5966_6017 == null)))?(((((map__5966_6017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5966_6017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5966_6017):map__5966_6017);
var doc_6019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5966_6018__$1,cljs.core.cst$kw$doc);
var arglists_6020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5966_6018__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_6016], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_6020], 0));

if(cljs.core.truth_(doc_6019)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_6019], 0));
} else {
}


var G__6021 = cljs.core.next(seq__5954_6009__$1);
var G__6022 = null;
var G__6023 = (0);
var G__6024 = (0);
seq__5954_5994 = G__6021;
chunk__5955_5995 = G__6022;
count__5956_5996 = G__6023;
i__5957_5997 = G__6024;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__5968 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__5969 = null;
var count__5970 = (0);
var i__5971 = (0);
while(true){
if((i__5971 < count__5970)){
var role = chunk__5969.cljs$core$IIndexed$_nth$arity$2(null,i__5971);
var temp__5457__auto___6025__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___6025__$1)){
var spec_6026 = temp__5457__auto___6025__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_6026)], 0));
} else {
}


var G__6027 = seq__5968;
var G__6028 = chunk__5969;
var G__6029 = count__5970;
var G__6030 = (i__5971 + (1));
seq__5968 = G__6027;
chunk__5969 = G__6028;
count__5970 = G__6029;
i__5971 = G__6030;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__5968);
if(temp__5457__auto____$1){
var seq__5968__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__5968__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__5968__$1);
var G__6031 = cljs.core.chunk_rest(seq__5968__$1);
var G__6032 = c__4351__auto__;
var G__6033 = cljs.core.count(c__4351__auto__);
var G__6034 = (0);
seq__5968 = G__6031;
chunk__5969 = G__6032;
count__5970 = G__6033;
i__5971 = G__6034;
continue;
} else {
var role = cljs.core.first(seq__5968__$1);
var temp__5457__auto___6035__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___6035__$2)){
var spec_6036 = temp__5457__auto___6035__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_6036)], 0));
} else {
}


var G__6037 = cljs.core.next(seq__5968__$1);
var G__6038 = null;
var G__6039 = (0);
var G__6040 = (0);
seq__5968 = G__6037;
chunk__5969 = G__6038;
count__5970 = G__6039;
i__5971 = G__6040;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
