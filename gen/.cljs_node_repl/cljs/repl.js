// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__8008){
var map__8009 = p__8008;
var map__8009__$1 = ((((!((map__8009 == null)))?(((((map__8009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8009):map__8009);
var m = map__8009__$1;
var n = cljs.core.get.call(null,map__8009__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__8009__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8011_8033 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8012_8034 = null;
var count__8013_8035 = (0);
var i__8014_8036 = (0);
while(true){
if((i__8014_8036 < count__8013_8035)){
var f_8037 = cljs.core._nth.call(null,chunk__8012_8034,i__8014_8036);
cljs.core.println.call(null,"  ",f_8037);


var G__8038 = seq__8011_8033;
var G__8039 = chunk__8012_8034;
var G__8040 = count__8013_8035;
var G__8041 = (i__8014_8036 + (1));
seq__8011_8033 = G__8038;
chunk__8012_8034 = G__8039;
count__8013_8035 = G__8040;
i__8014_8036 = G__8041;
continue;
} else {
var temp__5457__auto___8042 = cljs.core.seq.call(null,seq__8011_8033);
if(temp__5457__auto___8042){
var seq__8011_8043__$1 = temp__5457__auto___8042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8011_8043__$1)){
var c__4351__auto___8044 = cljs.core.chunk_first.call(null,seq__8011_8043__$1);
var G__8045 = cljs.core.chunk_rest.call(null,seq__8011_8043__$1);
var G__8046 = c__4351__auto___8044;
var G__8047 = cljs.core.count.call(null,c__4351__auto___8044);
var G__8048 = (0);
seq__8011_8033 = G__8045;
chunk__8012_8034 = G__8046;
count__8013_8035 = G__8047;
i__8014_8036 = G__8048;
continue;
} else {
var f_8049 = cljs.core.first.call(null,seq__8011_8043__$1);
cljs.core.println.call(null,"  ",f_8049);


var G__8050 = cljs.core.next.call(null,seq__8011_8043__$1);
var G__8051 = null;
var G__8052 = (0);
var G__8053 = (0);
seq__8011_8033 = G__8050;
chunk__8012_8034 = G__8051;
count__8013_8035 = G__8052;
i__8014_8036 = G__8053;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8054 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8054);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8054)))?cljs.core.second.call(null,arglists_8054):arglists_8054));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8015_8055 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8016_8056 = null;
var count__8017_8057 = (0);
var i__8018_8058 = (0);
while(true){
if((i__8018_8058 < count__8017_8057)){
var vec__8019_8059 = cljs.core._nth.call(null,chunk__8016_8056,i__8018_8058);
var name_8060 = cljs.core.nth.call(null,vec__8019_8059,(0),null);
var map__8022_8061 = cljs.core.nth.call(null,vec__8019_8059,(1),null);
var map__8022_8062__$1 = ((((!((map__8022_8061 == null)))?(((((map__8022_8061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8022_8061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8022_8061):map__8022_8061);
var doc_8063 = cljs.core.get.call(null,map__8022_8062__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8064 = cljs.core.get.call(null,map__8022_8062__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_8060);

cljs.core.println.call(null," ",arglists_8064);

if(cljs.core.truth_(doc_8063)){
cljs.core.println.call(null," ",doc_8063);
} else {
}


var G__8065 = seq__8015_8055;
var G__8066 = chunk__8016_8056;
var G__8067 = count__8017_8057;
var G__8068 = (i__8018_8058 + (1));
seq__8015_8055 = G__8065;
chunk__8016_8056 = G__8066;
count__8017_8057 = G__8067;
i__8018_8058 = G__8068;
continue;
} else {
var temp__5457__auto___8069 = cljs.core.seq.call(null,seq__8015_8055);
if(temp__5457__auto___8069){
var seq__8015_8070__$1 = temp__5457__auto___8069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8015_8070__$1)){
var c__4351__auto___8071 = cljs.core.chunk_first.call(null,seq__8015_8070__$1);
var G__8072 = cljs.core.chunk_rest.call(null,seq__8015_8070__$1);
var G__8073 = c__4351__auto___8071;
var G__8074 = cljs.core.count.call(null,c__4351__auto___8071);
var G__8075 = (0);
seq__8015_8055 = G__8072;
chunk__8016_8056 = G__8073;
count__8017_8057 = G__8074;
i__8018_8058 = G__8075;
continue;
} else {
var vec__8024_8076 = cljs.core.first.call(null,seq__8015_8070__$1);
var name_8077 = cljs.core.nth.call(null,vec__8024_8076,(0),null);
var map__8027_8078 = cljs.core.nth.call(null,vec__8024_8076,(1),null);
var map__8027_8079__$1 = ((((!((map__8027_8078 == null)))?(((((map__8027_8078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8027_8078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8027_8078):map__8027_8078);
var doc_8080 = cljs.core.get.call(null,map__8027_8079__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8081 = cljs.core.get.call(null,map__8027_8079__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_8077);

cljs.core.println.call(null," ",arglists_8081);

if(cljs.core.truth_(doc_8080)){
cljs.core.println.call(null," ",doc_8080);
} else {
}


var G__8082 = cljs.core.next.call(null,seq__8015_8070__$1);
var G__8083 = null;
var G__8084 = (0);
var G__8085 = (0);
seq__8015_8055 = G__8082;
chunk__8016_8056 = G__8083;
count__8017_8057 = G__8084;
i__8018_8058 = G__8085;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__8029 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__8030 = null;
var count__8031 = (0);
var i__8032 = (0);
while(true){
if((i__8032 < count__8031)){
var role = cljs.core._nth.call(null,chunk__8030,i__8032);
var temp__5457__auto___8086__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___8086__$1)){
var spec_8087 = temp__5457__auto___8086__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_8087));
} else {
}


var G__8088 = seq__8029;
var G__8089 = chunk__8030;
var G__8090 = count__8031;
var G__8091 = (i__8032 + (1));
seq__8029 = G__8088;
chunk__8030 = G__8089;
count__8031 = G__8090;
i__8032 = G__8091;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__8029);
if(temp__5457__auto____$1){
var seq__8029__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8029__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__8029__$1);
var G__8092 = cljs.core.chunk_rest.call(null,seq__8029__$1);
var G__8093 = c__4351__auto__;
var G__8094 = cljs.core.count.call(null,c__4351__auto__);
var G__8095 = (0);
seq__8029 = G__8092;
chunk__8030 = G__8093;
count__8031 = G__8094;
i__8032 = G__8095;
continue;
} else {
var role = cljs.core.first.call(null,seq__8029__$1);
var temp__5457__auto___8096__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___8096__$2)){
var spec_8097 = temp__5457__auto___8096__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_8097));
} else {
}


var G__8098 = cljs.core.next.call(null,seq__8029__$1);
var G__8099 = null;
var G__8100 = (0);
var G__8101 = (0);
seq__8029 = G__8098;
chunk__8030 = G__8099;
count__8031 = G__8100;
i__8032 = G__8101;
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

//# sourceMappingURL=repl.js.map
