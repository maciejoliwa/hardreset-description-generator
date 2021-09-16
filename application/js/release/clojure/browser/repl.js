// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.array');
goog.require('goog.json');
goog.require('goog.userAgent.product');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.repl');

/** @define {string} */
goog.define("clojure.browser.repl.HOST","localhost");

/** @define {number} */
goog.define("clojure.browser.repl.PORT",(9000));
clojure.browser.repl._STAR_repl_STAR_ = null;
clojure.browser.repl.xpc_connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
clojure.browser.repl.parent_connected_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
clojure.browser.repl.print_queue = [];
clojure.browser.repl.flush_print_queue_BANG_ = (function clojure$browser$repl$flush_print_queue_BANG_(conn){
var seq__6043_6049 = cljs.core.seq(clojure.browser.repl.print_queue);
var chunk__6044_6050 = null;
var count__6045_6051 = (0);
var i__6046_6052 = (0);
while(true){
if((i__6046_6052 < count__6045_6051)){
var str_6053 = chunk__6044_6050.cljs$core$IIndexed$_nth$arity$2(null,i__6046_6052);
clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$print,(function (){var G__6047 = ({"repl": clojure.browser.repl._STAR_repl_STAR_, "str": str_6053});
return goog.json.serialize(G__6047);
})());


var G__6054 = seq__6043_6049;
var G__6055 = chunk__6044_6050;
var G__6056 = count__6045_6051;
var G__6057 = (i__6046_6052 + (1));
seq__6043_6049 = G__6054;
chunk__6044_6050 = G__6055;
count__6045_6051 = G__6056;
i__6046_6052 = G__6057;
continue;
} else {
var temp__5457__auto___6058 = cljs.core.seq(seq__6043_6049);
if(temp__5457__auto___6058){
var seq__6043_6059__$1 = temp__5457__auto___6058;
if(cljs.core.chunked_seq_QMARK_(seq__6043_6059__$1)){
var c__4351__auto___6060 = cljs.core.chunk_first(seq__6043_6059__$1);
var G__6061 = cljs.core.chunk_rest(seq__6043_6059__$1);
var G__6062 = c__4351__auto___6060;
var G__6063 = cljs.core.count(c__4351__auto___6060);
var G__6064 = (0);
seq__6043_6049 = G__6061;
chunk__6044_6050 = G__6062;
count__6045_6051 = G__6063;
i__6046_6052 = G__6064;
continue;
} else {
var str_6065 = cljs.core.first(seq__6043_6059__$1);
clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$print,(function (){var G__6048 = ({"repl": clojure.browser.repl._STAR_repl_STAR_, "str": str_6065});
return goog.json.serialize(G__6048);
})());


var G__6066 = cljs.core.next(seq__6043_6059__$1);
var G__6067 = null;
var G__6068 = (0);
var G__6069 = (0);
seq__6043_6049 = G__6066;
chunk__6044_6050 = G__6067;
count__6045_6051 = G__6068;
i__6046_6052 = G__6069;
continue;
}
} else {
}
}
break;
}

return goog.array.clear(clojure.browser.repl.print_queue);
});
clojure.browser.repl.repl_print = (function clojure$browser$repl$repl_print(data){
clojure.browser.repl.print_queue.push(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));

if(cljs.core.truth_(cljs.core.deref(clojure.browser.repl.parent_connected_QMARK_))){
return clojure.browser.repl.flush_print_queue_BANG_(cljs.core.deref(clojure.browser.repl.xpc_connection));
} else {
return null;
}
});
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core.set_print_fn_BANG_(clojure.browser.repl.repl_print);
cljs.core.set_print_err_fn_BANG_(clojure.browser.repl.repl_print);
clojure.browser.repl.get_ua_product = (function clojure$browser$repl$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return cljs.core.cst$kw$safari;
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return cljs.core.cst$kw$chrome;
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return cljs.core.cst$kw$firefox;
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return cljs.core.cst$kw$ie;
} else {
return null;
}
}
}
}
});
/**
 * Process a single block of JavaScript received from the server
 */
clojure.browser.repl.evaluate_javascript = (function clojure$browser$repl$evaluate_javascript(conn,block){
var result = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,cljs.core.cst$kw$success,cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(block))].join('')], null);
}catch (e6070){var e = e6070;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$ua_DASH_product,clojure.browser.repl.get_ua_product(),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),cljs.core.cst$kw$stacktrace,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
}})();
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
});
clojure.browser.repl.send_result = (function clojure$browser$repl$send_result(connection,url,data){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(connection,url,"POST",data,null,(0));
});
/**
 * Send data to be printed in the REPL. If there is an error, try again
 *   up to 10 times.
 */
clojure.browser.repl.send_print = (function clojure$browser$repl$send_print(var_args){
var G__6072 = arguments.length;
switch (G__6072) {
case 2:
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2 = (function (url,data){
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3(url,data,(0));
});

clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3 = (function (url,data,n){
var conn = clojure.browser.net.xhr_connection();
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$error,((function (conn){
return (function (_){
if((n < (10))){
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3(url,data,(n + (1)));
} else {
return console.log(["Could not send ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)," after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," attempts."].join(''));
}
});})(conn))
);

return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(conn,url,"POST",data,null,(0));
});

clojure.browser.repl.send_print.cljs$lang$maxFixedArity = 3;

clojure.browser.repl.order = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
clojure.browser.repl.wrap_message = (function clojure$browser$repl$wrap_message(repl,t,data){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$repl,repl,cljs.core.cst$kw$type,t,cljs.core.cst$kw$content,data,cljs.core.cst$kw$order,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.order,cljs.core.inc)], null)], 0));
});
/**
 * Start the REPL server connection.
 */
clojure.browser.repl.start_evaluator = (function clojure$browser$repl$start_evaluator(url){
var temp__5455__auto__ = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5455__auto__)){
var repl_connection = temp__5455__auto__;
var connection = clojure.browser.net.xhr_connection();
var repl_connected_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var try_handshake = ((function (connection,repl_connected_QMARK_,repl_connection,temp__5455__auto__){
return (function clojure$browser$repl$start_evaluator_$_try_handshake(){
if(cljs.core.truth_(cljs.core.deref(repl_connected_QMARK_))){
return null;
} else {
clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$start_DASH_handshake,null);

return setTimeout(clojure$browser$repl$start_evaluator_$_try_handshake,(10));
}
});})(connection,repl_connected_QMARK_,repl_connection,temp__5455__auto__))
;
clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,try_handshake);

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$ack_DASH_handshake,((function (connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5455__auto__){
return (function (_){
if(cljs.core.truth_(cljs.core.deref(repl_connected_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(repl_connected_QMARK_,true);

return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(null,cljs.core.cst$kw$ready,"ready"));
}
});})(connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5455__auto__))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(connection,cljs.core.cst$kw$success,((function (connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5455__auto__){
return (function (e){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$evaluate_DASH_javascript,e.currentTarget.getResponseText(cljs.core.List.EMPTY));
});})(connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5455__auto__))
);

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$send_DASH_result,((function (connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5455__auto__){
return (function (json){
var obj = goog.json.parse(json);
var repl = goog.object.get(obj,"repl");
var result = goog.object.get(obj,"result");
return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(repl,cljs.core.cst$kw$result,result));
});})(connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5455__auto__))
);

return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$print,((function (connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5455__auto__){
return (function (json){
var obj = goog.json.parse(json);
var repl = goog.object.get(obj,"repl");
var str = goog.object.get(obj,"str");
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2(url,clojure.browser.repl.wrap_message(repl,cljs.core.cst$kw$print,str));
});})(connection,repl_connected_QMARK_,try_handshake,repl_connection,temp__5455__auto__))
);
} else {
return alert("No 'xpc' param provided to child iframe.");
}
});
clojure.browser.repl.load_queue = null;
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
clojure.browser.repl.bootstrap = (function clojure$browser$repl$bootstrap(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require__ = goog.require;

goog.isProvided_ = (function (name){
return false;
});

goog.constructNamespace_("cljs.user");

goog.writeScriptTag__ = (function (src,opt_sourceText){
var loaded = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var onload = ((function (loaded){
return (function (){
if(cljs.core.truth_((function (){var and__3938__auto__ = clojure.browser.repl.load_queue;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.deref(loaded) === false;
} else {
return and__3938__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.not);

if((clojure.browser.repl.load_queue.length === (0))){
return clojure.browser.repl.load_queue = null;
} else {
return goog.writeScriptTag__.apply(null,clojure.browser.repl.load_queue.shift());
}
} else {
return null;
}
});})(loaded))
;
return document.body.appendChild((function (){var script = document.createElement("script");
var script__$1 = (function (){var G__6074 = script;
goog.object.set(G__6074,"type","text/javascript");

goog.object.set(G__6074,"onload",onload);

goog.object.set(G__6074,"onreadystatechange",onload);

return G__6074;
})();
if((opt_sourceText == null)){
var G__6075 = script__$1;
goog.object.set(G__6075,"src",src);

return G__6075;
} else {
var G__6076 = script__$1;
goog.dom.setTextContext(G__6076,opt_sourceText);

return G__6076;
}
})());
});

goog.writeScriptTag_ = (function (src,opt_sourceText){
if(cljs.core.truth_(clojure.browser.repl.load_queue)){
return clojure.browser.repl.load_queue.push([src,opt_sourceText]);
} else {
clojure.browser.repl.load_queue = [];

return goog.writeScriptTag__(src,opt_sourceText);
}
});

if(cljs.core.truth_(goog.debugLoader_)){
CLOSURE_IMPORT_SCRIPT = goog.writeScriptTag_;
} else {
}

return goog.require = (function (src,reload){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reload,"reload-all")){
goog.cljsReloadAll_ = true;
} else {
}

var reload_QMARK_ = (function (){var or__3949__auto__ = reload;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.cljsReloadAll__;
}
})();
if(cljs.core.truth_(reload_QMARK_)){
if(!((goog.debugLoader_ == null))){
var path_6083 = goog.debugLoader_.getPathFromDeps_(cljs.core.name);
var G__6077_6084 = goog.debugLoader_.written_;
var G__6078_6085 = path_6083;
goog.object.remove(G__6077_6084,G__6078_6085);

var G__6079_6086 = goog.debugLoader_.written_;
var G__6080_6087 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_6083)].join('');
goog.object.remove(G__6079_6086,G__6080_6087);
} else {
var path_6088 = goog.object.get(goog.dependencies_.nameToPath,src);
goog.object.remove(goog.dependencies_.visited,path_6088);

goog.object.remove(goog.dependencies_.written,path_6088);

var G__6081_6089 = goog.dependencies_.written;
var G__6082_6090 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_6088)].join('');
goog.object.remove(G__6081_6089,G__6082_6090);
}
} else {
}

var ret = goog.require__(src);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reload,"reload-all")){
goog.cljsReloadAll_ = false;
} else {
}

return ret;
});
}
});
/**
 * Connects to a REPL server from an HTML document. After the
 *   connection is made, the REPL will evaluate forms in the context of
 *   the document that called this function.
 */
clojure.browser.repl.connect = (function clojure$browser$repl$connect(repl_server_url){
var connected_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var repl_connection = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$peer_uri,repl_server_url], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.xpc_connection,cljs.core.constantly(repl_connection));

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$start_DASH_handshake,((function (connected_QMARK_,repl_connection){
return (function (_){
if(cljs.core.truth_(cljs.core.deref(connected_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(connected_QMARK_,true);

cljs.core.reset_BANG_(clojure.browser.repl.parent_connected_QMARK_,true);

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$ack_DASH_handshake,null);

return clojure.browser.repl.flush_print_queue_BANG_(repl_connection);
}
});})(connected_QMARK_,repl_connection))
);

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$evaluate_DASH_javascript,((function (connected_QMARK_,repl_connection){
return (function (json){
var obj = goog.json.parse(json);
var repl = goog.object.get(obj,"repl");
var form = goog.object.get(obj,"form");
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$send_DASH_result,(function (){var G__6091 = ({"repl": repl, "result": (function (){var _STAR_repl_STAR_6092 = clojure.browser.repl._STAR_repl_STAR_;
clojure.browser.repl._STAR_repl_STAR_ = repl;

try{return clojure.browser.repl.evaluate_javascript(repl_connection,form);
}finally {clojure.browser.repl._STAR_repl_STAR_ = _STAR_repl_STAR_6092;
}})()});
return goog.json.serialize(G__6091);
})());
});})(connected_QMARK_,repl_connection))
);

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constantly(null),((function (connected_QMARK_,repl_connection){
return (function (iframe){
return iframe.style.display = "none";
});})(connected_QMARK_,repl_connection))
);

clojure.browser.repl.bootstrap();

return repl_connection;
});
