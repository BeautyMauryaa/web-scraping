var aPageStart = (new Date()).getTime();

var ue_t0=ue_t0||+new Date();


window.ue_ihb = (window.ue_ihb || window.ueinit || 0) + 1;
if (window.ue_ihb === 1) {

var ue_csm = window,
    ue_hob = +new Date();
(function(d){var e=d.ue=d.ue||{},f=Date.now||function(){return+new Date};e.d=function(b){return f()-(b?0:d.ue_t0)};e.stub=function(b,a){if(!b[a]){var c=[];b[a]=function(){c.push([c.slice.call(arguments),e.d(),d.ue_id])};b[a].replay=function(b){for(var a;a=c.shift();)b(a[0],a[1],a[2])};b[a].isStub=1}};e.exec=function(b,a){return function(){try{return b.apply(this,arguments)}catch(c){ueLogError(c,{attribution:a||"undefined",logLevel:"WARN"})}}}})(ue_csm);


    var ue_err_chan = 'jserr-rw';
(function(d,e){function h(f,b){if(!(a.ec>a.mxe)&&f){a.ter.push(f);b=b||{};var c=f.logLevel||b.logLevel;c&&c!==k&&c!==m&&c!==n&&c!==p||a.ec++;c&&c!=k||a.ecf++;b.pageURL=""+(e.location?e.location.href:"");b.logLevel=c;b.attribution=f.attribution||b.attribution;a.erl.push({ex:f,info:b})}}function l(a,b,c,e,g){d.ueLogError({m:a,f:b,l:c,c:""+e,err:g,fromOnError:1,args:arguments},g?{attribution:g.attribution,logLevel:g.logLevel}:void 0);return!1}var k="FATAL",m="ERROR",n="WARN",p="DOWNGRADED",a={ec:0,ecf:0,
pec:0,ts:0,erl:[],ter:[],buffer:[],mxe:50,startTimer:function(){a.ts++;setInterval(function(){d.ue&&a.pec<a.ec&&d.uex("at");a.pec=a.ec},1E4)}};l.skipTrace=1;h.skipTrace=1;h.isStub=1;d.ueLogError=h;d.ue_err=a;e.onerror=l})(ue_csm,window);


var ue_id = 'QV6Z0G1VWWN6RDW0ZTK2',
    ue_url = '/rd/uedata',
    ue_navtiming = 1,
    ue_mid = 'A21TJRUUN4KGV',
    ue_sid = '260-9171825-3931647',
    ue_sn = 'www.amazon.in',
    ue_furl = 'fls-eu.amazon.in',
    ue_surl = 'https://unagi-eu.amazon.com/1/events/com.amazon.csm.nexusclient.prod',
    ue_int = 0,
    ue_fcsn = 1,
    ue_urt = 3,
    ue_rpl_ns = 'cel-rpl',
    ue_ddq = 1,
    ue_fpf = '//fls-eu.amazon.in/1/batch/1/OP/A21TJRUUN4KGV:260-9171825-3931647:QV6Z0G1VWWN6RDW0ZTK2$uedata=s:',
    ue_sbuimp = 1,
    ue_ibft = 0,
    ue_sswmts = 0,
    ue_jsmtf = 0,
    ue_fnt = 0,
    ue_lpsi = 6000,
    ue_no_counters = 1,
    ue_lob = '1',
    ue_sjslob = 0,
    ue_dsbl_cel = 1,

    ue_swi = 1;
var ue_viz=function(){(function(b,f,d){function g(){return(!(p in d)||0<d[p])&&(!(q in d)||0<d[q])}function h(c){if(b.ue.viz.length<w&&!r){var a=c.type;c=c.originalEvent;/^focus./.test(a)&&c&&(c.toElement||c.fromElement||c.relatedTarget)||(a=g()?f[s]||("blur"==a||"focusout"==a?t:u):t,b.ue.viz.push(a+":"+(+new Date-b.ue.t0)),a==u&&(b.ue.isl&&x("at"),r=1))}}for(var r=0,x=b.uex,a,k,l,s,v=["","webkit","o","ms","moz"],e=0,m=1,u="visible",t="hidden",p="innerWidth",q="innerHeight",w=20,n=0;n<v.length&&!e;n++)if(a=
v[n],k=(a?a+"H":"h")+"idden",e="boolean"==typeof f[k])l=a+"visibilitychange",s=(a?a+"V":"v")+"isibilityState";h({});e&&f.addEventListener(l,h,0);m=g()?1:0;d.addEventListener("resize",function(){var a=g()?1:0;m!==a&&(m=a,h({}))},{passive:!0});b.ue&&e&&(b.ue.pageViz={event:l,propHid:k})})(ue_csm,ue_csm.document,ue_csm.window)};window.ue_viz=ue_viz;

(function(d,h,N){function H(a){return a&&a.replace&&a.replace(/^\s+|\s+$/g,"")}function u(a){return"undefined"===typeof a}function B(a,b){for(var c in b)b[v](c)&&(a[c]=b[c])}function I(a){try{var b=N.cookie.match(RegExp("(^| )"+a+"=([^;]+)"));if(b)return b[2].trim()}catch(c){}}function O(k,b,c){var q=(x||{}).type;if("device"!==c||2!==q&&1!==q)k&&(d.ue_id=a.id=a.rid=k,w&&(w=w.replace(/((.*?:){2})(\w+)/,function(a,b){return b+k})),D&&(e("id",D,k),D=0)),b&&(w&&(w=w.replace(/(.*?:)(\w|-)+/,function(a,
c){return c+b})),d.ue_sid=b),c&&a.tag("page-source:"+c),d.ue_fpf=w}function P(){var a={};return function(b){b&&(a[b]=1);b=[];for(var c in a)a[v](c)&&b.push(c);return b}}function y(d,b,c,q){q=q||+new E;var g,m;if(b||u(c)){if(d)for(m in g=b?e("t",b)||e("t",b,{}):a.t,g[d]=q,c)c[v](m)&&e(m,b,c[m]);return q}}function e(d,b,c){var e=b&&b!=a.id?a.sc[b]:a;e||(e=a.sc[b]={});"id"===d&&c&&(Q=1);return e[d]=c||e[d]}function R(d,b,c,e,g){c="on"+c;var m=b[c];"function"===typeof m?d&&(a.h[d]=m):m=function(){};b[c]=
function(a){g?(e(a),m(a)):(m(a),e(a))};b[c]&&(b[c].isUeh=1)}function S(k,b,c,q){function p(b,c){var d=[b],f=0,g={},m,h;c?(d.push("m=1"),g[c]=1):g=a.sc;for(h in g)if(g[v](h)){var q=e("wb",h),p=e("t",h)||{},n=e("t0",h)||a.t0,l;if(c||2==q){q=q?f++:"";d.push("sc"+q+"="+h);for(l in p)u(p[l])||null===p[l]||d.push(l+q+"="+(p[l]-n));d.push("t"+q+"="+p[k]);if(e("ctb",h)||e("wb",h))m=1}}!J&&m&&d.push("ctb=1");return d.join("&")}function m(b,c,f,e,g){if(b){var k=d.ue_err;d.ue_url&&!e&&!g&&b&&0<b.length&&(e=
new Image,a.iel.push(e),e.src=b,a.count&&a.count("postbackImageSize",b.length));w?(g=h.encodeURIComponent)&&b&&(e=new Image,b=""+d.ue_fpf+g(b)+":"+(+new E-d.ue_t0),a.iel.push(e),e.src=b):a.log&&(a.log(b,"uedata",{n:1}),a.ielf.push(b));k&&!k.ts&&k.startTimer();a.b&&(k=a.b,a.b="",m(k,c,f,1))}}function A(b){var c=x?x.type:F,d=2==c||a.isBFonMshop,c=c&&!d,f=a.bfini;if(!Q||a.isBFCache)f&&1<f&&(b+="&bfform=1",c||(a.isBFT=f-1)),d&&(b+="&bfnt=1",a.isBFT=a.isBFT||1),a.ssw&&a.isBFT&&(a.isBFonMshop&&(a.isNRBF=
0),u(a.isNRBF)&&(d=a.ssw(a.oid),d.e||u(d.val)||(a.isNRBF=1<d.val?0:1)),u(a.isNRBF)||(b+="&nrbf="+a.isNRBF)),a.isBFT&&!a.isNRBF&&(b+="&bft="+a.isBFT);return b}if(!a.paused&&(b||u(c))){for(var l in c)c[v](l)&&e(l,b,c[l]);a.isBFonMshop||y("pc",b,c);l="ld"===k&&b&&e("wb",b);var s=e("id",b)||a.id;l||s===a.oid||(D=b,ba(s,(e("t",b)||{}).tc||+e("t0",b),+e("t0",b)));var s=e("id",b)||a.id,t=e("id2",b),f=a.url+"?"+k+"&v="+a.v+"&id="+s,J=e("ctb",b)||e("wb",b),z;J&&(f+="&ctb="+J);t&&(f+="&id2="+t);1<d.ueinit&&
(f+="&ic="+d.ueinit);if(!("ld"!=k&&"ul"!=k||b&&b!=s)){if("ld"==k){try{h[K]&&h[K].isUeh&&(h[K]=null)}catch(I){}if(h.chrome)for(t=0;t<L.length;t++)T(G,L[t]);(t=N.ue_backdetect)&&t.ue_back&&t.ue_back.value++;d._uess&&(z=d._uess());a.isl=1}a._bf&&(f+="&bf="+a._bf());d.ue_navtiming&&g&&(e("ctb",s,"1"),a.isBFonMshop||y("tc",F,F,M));!C||a.isBFonMshop||U||(g&&B(a.t,{na_:g.navigationStart,ul_:g.unloadEventStart,_ul:g.unloadEventEnd,rd_:g.redirectStart,_rd:g.redirectEnd,fe_:g.fetchStart,lk_:g.domainLookupStart,
_lk:g.domainLookupEnd,co_:g.connectStart,_co:g.connectEnd,sc_:g.secureConnectionStart,rq_:g.requestStart,rs_:g.responseStart,_rs:g.responseEnd,dl_:g.domLoading,di_:g.domInteractive,de_:g.domContentLoadedEventStart,_de:g.domContentLoadedEventEnd,_dc:g.domComplete,ld_:g.loadEventStart,_ld:g.loadEventEnd,ntd:("function"!==typeof C.now||u(M)?0:new E(M+C.now())-new E)+a.t0}),x&&B(a.t,{ty:x.type+a.t0,rc:x.redirectCount+a.t0}),U=1);a.isBFonMshop||B(a.t,{hob:d.ue_hob,hoe:d.ue_hoe});a.ifr&&(f+="&ifr=1")}y(k,
b,c,q);var r,n;l||b&&b!==s||ca(b);(c=d.ue_mbl)&&c.cnt&&!l&&(f+=c.cnt());l?e("wb",b,2):"ld"==k&&(a.lid=H(s));for(r in a.sc)if(1==e("wb",r))break;if(l){if(a.s)return;f=p(f,null)}else c=p(f,null),c!=f&&(c=A(c),a.b=c),z&&(f+=z),f=p(f,b||a.id);f=A(f);if(a.b||l)for(r in a.sc)2==e("wb",r)&&delete a.sc[r];z=0;a._rt&&(f+="&rt="+a._rt());c=h.csa;if(!l&&c)for(n in r=e("t",b)||{},c=c("PageTiming"),r)r[v](n)&&c("mark",da[n]||n,r[n]);l||(a.s=0,(n=d.ue_err)&&0<n.ec&&n.pec<n.ec&&(n.pec=n.ec,f+="&ec="+n.ec+"&ecf="+
n.ecf),z=e("ctb",b),"ld"!==k||b||a.markers?a.markers&&a.isl&&!l&&b&&B(a.markers,e("t",b)):(a.markers={},B(a.markers,e("t",b))),e("t",b,{}));a.tag&&a.tag().length&&(f+="&csmtags="+a.tag().join("|"),a.tag=P());n=a.viz||[];(r=n.length)&&(f+="&viz="+n.splice(0,r).join("|"));u(d.ue_pty)||(f+="&pty="+d.ue_pty+"&spty="+d.ue_spty+"&pti="+d.ue_pti);a.tabid&&(f+="&tid="+a.tabid);a.aftb&&(f+="&aftb=1");!a._ui||b&&b!=s||(f+=a._ui());f+="&lob="+(d.ue_lob||"0");a.a=f;m(f,k,z,l,b&&"string"===typeof b&&-1!==b.indexOf("csa:"))}}
function ca(a){var b=h.ue_csm_markers||{},c;for(c in b)b[v](c)&&y(c,a,F,b[c])}function A(a,b,c){c=c||h;if(c[V])c[V](a,b,!1);else if(c[W])c[W]("on"+a,b)}function T(a,b,c){c=c||h;if(c[X])c[X](a,b,!1);else if(c[Y])c[Y]("on"+a,b)}function Z(){function a(){d.onUl()}function b(a){return function(){c[a]||(c[a]=1,S(a))}}var c={},e,g;d.onLd=b("ld");d.onLdEnd=b("ld");d.onUl=b("ul");e={stop:b("os")};h.chrome?(A(G,a),L.push(a)):e[G]=d.onUl;for(g in e)e[v](g)&&R(0,h,g,e[g]);d.ue_viz&&ue_viz();A("load",d.onLd);
y("ue")}function ba(e,b,c){var g=d.ue_mbl,p=h.csa,m=p&&p("SPA"),p=p&&p("PageTiming");g&&g.ajax&&g.ajax(b,c);m&&p&&(m("newPage",{requestId:e,transitionType:"soft"}),p("mark","transitionStart",b));a.tag("ajax-transition")}d.ueinit=(d.ueinit||0)+1;var a=d.ue=d.ue||{};a.t0=h.aPageStart||d.ue_t0;a.id=d.ue_id;a.url=d.ue_url;a.rid=d.ue_id;a.a="";a.b="";a.h={};a.s=1;a.t={};a.sc={};a.iel=[];a.ielf=[];a.viz=[];a.v="0.308054.0";a.paused=!1;var v="hasOwnProperty",G="beforeunload",K="on"+G,V="addEventListener",
X="removeEventListener",W="attachEvent",Y="detachEvent",da={cf:"criticalFeature",af:"aboveTheFold",fn:"functional",fp:"firstPaint",fcp:"firstContentfulPaint",bb:"bodyBegin",be:"bodyEnd",ld:"loaded"},E=h.Date,C=h.performance||h.webkitPerformance,g=(C||{}).timing,x=(C||{}).navigation,M=(g||{}).navigationStart,w=d.ue_fpf,Q=0,U=0,L=[],D=0,F;a.oid=H(a.id);a.lid=H(a.id);a._t0=a.t0;a.tag=P();a.ifr=h.top!==h.self||h.frameElement?1:0;a.markers=null;a.attach=A;a.detach=T;if("000-0000000-8675309"===d.ue_sid){var $=
I("cdn-rid"),aa=I("session-id");$&&aa&&O($,aa,"cdn")}d.uei=Z;d.ueh=R;d.ues=e;d.uet=y;d.uex=S;a.reset=O;a.pause=function(d){a.paused=d};Z()})(ue_csm,ue_csm.window,ue_csm.document);


ue.stub(ue,"event");ue.stub(ue,"onSushiUnload");ue.stub(ue,"onSushiFlush");

ue.stub(ue,"log");ue.stub(ue,"onunload");ue.stub(ue,"onflush");
(function(b){function g(){var a={requestId:b.ue_id||"rid",server:b.ue_sn||"sn",obfuscatedMarketplaceId:b.ue_mid||"mid"};b.ue_sjslob&&(a.lob=b.ue_lob||"0");return a}var a=b.ue,h=1===b.ue_no_counters;a.cv={};a.cv.scopes={};a.cv.buffer=[];a.count=function(b,f,c){var e={},d=a.cv,g=c&&0===c.c;e.counter=b;e.value=f;e.t=a.d();c&&c.scope&&(d=a.cv.scopes[c.scope]=a.cv.scopes[c.scope]||{},e.scope=c.scope);if(void 0===f)return d[b];d[b]=f;d=0;c&&c.bf&&(d=1);h||(ue_csm.ue_sclog||!a.clog||0!==d||g?a.log&&a.log(e,
"csmcount",{c:1,bf:d}):a.clog(e,"csmcount",{bf:d}));a.cv.buffer.push({c:b,v:f})};a.count("baselineCounter2",1);a&&a.event&&(a.event(g(),"csm","csm.CSMBaselineEvent.4"),a.count("nexusBaselineCounter",1,{bf:1}))})(ue_csm);



var ue_hoe = +new Date();
}
window.ueinit = window.ue_ihb;


window.ue && ue.count && ue.count('CSMLibrarySize', 10185)


(function(b,a,c,d){if((b=b.AmazonUIPageJS||b.P)&&b.when&&b.register){c=[];for(a=a.currentScript;a;a=a.parentElement)a.id&&c.push(a.id);return b.log("A copy of P has already been loaded on this page.","FATAL",c.join(" "))}})(window,document,Date);(function(a,b,c,d){"use strict";a._pSetI=function(){return null}})(window,document,Date);(function(d,I,K,L){"use strict";d._sw=function(){var p;return function(w,g,u,B,h,C,q,k,x,y){p||(p=!0,y.execute("RetailPageServiceWorker",function(){function z(a,b){e.controller&&a?(a={feature:"retail_service_worker_messaging",command:a},b&&(a.data=b),e.controller.postMessage(a)):a&&h("sw:sw_message_no_ctrl",1)}function p(a){var b=a.data;if(b&&"retail_service_worker_messaging"===b.feature&&b.command&&b.data){var c=b.data;a=d.ue;var f=d.ueLogError;switch(b.command){case "log_counter":a&&k(a.count)&&
c.name&&a.count(c.name,0===c.value?0:c.value||1);break;case "log_tag":a&&k(a.tag)&&c.tag&&(a.tag(c.tag),b=d.uex,a.isl&&k(b)&&b("at"));break;case "log_error":f&&k(f)&&c.message&&f({message:c.message,logLevel:c.level||"ERROR",attribution:c.attribution||"RetailServiceWorker"});break;case "log_weblab_trigger":if(!c.weblab||!c.treatment)break;a&&k(a.trigger)?a.trigger(c.weblab,c.treatment):(h("sw:wt:miss"),h("sw:wt:miss:"+c.weblab+":"+c.treatment));break;default:h("sw:unsupported_message_command",1)}}}
function v(a,b){return"sw:"+(b||"")+":"+a+":"}function D(a,b){e.register("/service-worker.js").then(function(){h(a+"success")}).catch(function(c){y.logError(c,"[AUI SW] Failed to "+b+" service worker: ","ERROR","RetailPageServiceWorker");h(a+"failure")})}function E(){l.forEach(function(a){q(a)})}function n(a){return a.capabilities.isAmazonApp&&a.capabilities.android}function F(a,b,c){if(b)if(b.mshop&&n(a))a=v(c,"mshop_and"),b=b.mshop.action,l.push(a+"supported"),b(a,c);else if(b.browser){a=u(/Chrome/i)&&
!u(/Edge/i)&&!u(/OPR/i)&&!a.capabilities.isAmazonApp&&!u(new RegExp(B+"bwv"+B+"b"));var f=b.browser;b=v(c,"browser");a?(a=f.action,l.push(b+"supported"),a(b,c)):l.push(b+"unsupported")}}function G(a,b,c){a&&l.push(v("register",c)+"unsupported");b&&l.push(v("unregister",c)+"unsupported");E()}try{var e=navigator.serviceWorker}catch(a){q("sw:nav_err")}(function(){if(e){var a=function(){z("page_loaded",{rid:d.ue_id,mid:d.ue_mid,pty:d.ue_pty,sid:d.ue_sid,spty:d.ue_spty,furl:d.ue_furl})};x(e,"message",
p);z("client_messaging_ready");y.when("load").execute(a);x(e,"controllerchange",function(){z("client_messaging_ready");"complete"===I.readyState&&a()})}})();var l=[],m=function(a,b){var c=d.uex,f=d.uet;a=g(":","aui","sw",a);"ld"===b&&k(c)?c("ld",a,{wb:1}):k(f)&&f(b,a,{wb:1})},J=function(a,b,c){function f(a){b&&k(b.failure)&&b.failure(a)}function H(){l=setTimeout(function(){q(g(":","sw:"+r,t.TIMED_OUT));f({ok:!1,statusCode:t.TIMED_OUT,done:!1});m(r,"ld")},c||4E3)}var t={NO_CONTROLLER:"no_ctrl",TIMED_OUT:"timed_out",
UNSUPPORTED_BROWSER:"unsupported_browser",UNEXPECTED_RESPONSE:"unexpected_response"},r=g(":",a.feature,a.command),l,n=!0;if("MessageChannel"in d&&e&&"controller"in e)if(e.controller){var p=new MessageChannel;p.port1.onmessage=function(c){(c=c.data)&&c.feature===a.feature&&c.command===a.command?(n&&(m(r,"cf"),n=!1),m(r,"af"),clearTimeout(l),c.done||H(),c.ok?b&&k(b.success)&&b.success(c):f(c),c.done&&m(r,"ld")):h(g(":","sw:"+r,t.UNEXPECTED_RESPONSE),1)};H();m(r,"bb");e.controller.postMessage(a,[p.port2])}else q(g(":",
"sw:"+a.feature,t.NO_CONTROLLER)),f({ok:!1,statusCode:t.NO_CONTROLLER,done:!0});else q(g(":","sw:"+a.feature,t.UNSUPPORTED_BROWSER)),f({ok:!1,statusCode:t.UNSUPPORTED_BROWSER,done:!0})};(function(){e?(m("ctrl_changed","bb"),e.addEventListener("controllerchange",function(){q("sw:ctrl_changed");m("ctrl_changed","ld")})):h(g(":","sw:ctrl_changed","sw_unsupp"),1)})();(function(){var a=function(){m(b,"ld");var a=d.uex;J({feature:"page_proxy",command:"request_feature_tags"},{success:function(b){b=b.data;
Array.isArray(b)&&b.forEach(function(a){"string"===typeof a?q(g(":","sw:ppft",a)):h(g(":","sw:ppft","invalid_tag"),1)});h(g(":","sw:ppft","success"),1);C&&C.isl&&k(a)&&a("at")},failure:function(a){h(g(":","sw:ppft","error:"+(a.statusCode||"ppft_error")),1)}})};if("requestIdleCallback"in d){var b=g(":","ppft","callback_ricb");d.requestIdleCallback(a,{timeout:1E3})}else b=g(":","ppft","callback_timeout"),setTimeout(a,0);m(b,"bb")})();var A={reg:{},unreg:{}};A.reg.mshop={action:D};A.reg.browser={action:D};
(function(a){var b=a.reg,c=a.unreg;e&&e.getRegistrations?(w.when("A").execute(function(b){if((a.reg.mshop||a.unreg.mshop)&&"function"===typeof n&&n(b)){var f=a.reg.mshop?"T1":"C",e=d.ue;e&&e.trigger?e.trigger("MSHOP_SW_CLIENT_446196",f):h("sw:mshop:wt:failed")}F(b,c,"unregister")}),x(d,"load",function(){w.when("A").execute(function(a){F(a,b,"register");E()})})):(G(b&&b.browser,c&&c.browser,"browser"),w.when("A").execute(function(a){"function"===typeof n&&n(a)&&G(b&&b.mshop,c&&c.mshop,"mshop_and")}))})(A)}))}}()})(window,
document,Date);(function(b,a,J,C){"use strict";b._pd=function(){var c,v;return function(D,e,g,h,d,E,w,F,G){function x(b){try{return b()}catch(K){return!1}}function p(c){return b.matchMedia?b.matchMedia(c):{matches:!1}}function k(){if(l){var y=c.mobile||c.tablet?q.matches&&m.matches:m.matches;if(z!==y){var a={w:b.innerWidth||d.clientWidth,h:b.innerHeight||d.clientHeight};if(17<Math.abs(r.w-a.w)||50<Math.abs(r.h-a.h))r=a,(z=y)?h(d,"a-ws"):d.className=w(d,"a-ws")}}}function H(b){(l=b===C?!l:!!b)&&k()}function I(){return l}
if(!v){v=!0;var t=function(){var b=["O","ms","Moz","Webkit"],c=a.createElement("div");return{testGradients:function(){return!0},test:function(a){var d=a.charAt(0).toUpperCase()+a.substr(1);a=(b.join(d+" ")+d+" "+a).split(" ");for(d=a.length;d--;)if(""===c.style[a[d]])return!0;return!1},testTransform3d:function(){return!0}}}();g=d.className;var A=/(^| )a-mobile( |$)/.test(g),B=/(^| )a-tablet( |$)/.test(g);c={audio:function(){return!!a.createElement("audio").canPlayType},video:function(){return!!a.createElement("video").canPlayType},
canvas:function(){return!!a.createElement("canvas").getContext},svg:function(){return!!a.createElementNS&&!!a.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect},offline:function(){return navigator.hasOwnProperty&&navigator.hasOwnProperty("onLine")&&navigator.onLine},dragDrop:function(){return"draggable"in a.createElement("span")},geolocation:function(){return!!navigator.geolocation},history:function(){return!(!b.history||!b.history.pushState)},webworker:function(){return!!b.Worker},
autofocus:function(){return"autofocus"in a.createElement("input")},inputPlaceholder:function(){return"placeholder"in a.createElement("input")},textareaPlaceholder:function(){return"placeholder"in a.createElement("textarea")},localStorage:function(){return"localStorage"in b&&null!==b.localStorage},orientation:function(){return"orientation"in b},touch:function(){return"ontouchend"in a},gradients:function(){return t.testGradients()},hires:function(){var a=b.devicePixelRatio&&1.5<=b.devicePixelRatio||
b.matchMedia&&b.matchMedia("(min-resolution:144dpi)").matches;F("hiRes"+(A?"Mobile":B?"Tablet":"Desktop"),a?1:0);return a},transform3d:function(){return t.testTransform3d()},touchScrolling:function(){return e(/Windowshop|android|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|SOFTWARE=([5-9]|[1-9][0-9]+)(.[0-9]{1,2})+.*DEVICE=iPhone|Chrome|Silk|Firefox|Trident.+?; Touch/i)},ios:function(){return e(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i)&&!e(/trident|Edge/i)},android:function(){return e(/android.([1-9]|[L-Z])/i)&&
!e(/trident|Edge/i)},mobile:function(){return A},tablet:function(){return B},rtl:function(){return"rtl"===d.dir}};for(var f in c)c.hasOwnProperty(f)&&(c[f]=x(c[f]));for(var u="textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(" "),n=0;n<u.length;n++)c[u[n]]=x(function(){return t.test(u[n])});var l=!0,r={w:0,h:0},q=p("(orientation:landscape)"),m=c.mobile||c.tablet?p("(min-width:451px)"):p("(min-width:1250px)");q.addListener&&q.addListener(k);m.addListener&&
m.addListener(k);var z;k();d.className=w(d,"a-no-js");h(d,"a-js");!e(/OS [1-8](_[0-9]*)+ like Mac OS X/i)||b.navigator.standalone||e(/safari/i)||h(d,"a-ember");g=[];for(f in c)c.hasOwnProperty(f)&&c[f]&&g.push("a-"+f.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()}));h(d,g.join(" "));d.setAttribute("data-aui-build-date",G);D.register("p-detect",function(){return{capabilities:c,localStorage:c.localStorage&&E,toggleResponsiveGrid:H,responsiveGridEnabled:I}});return c||{}}}}()})(window,document,
Date);(function(g,l,E,F){function G(a){n&&n.tag&&n.tag(p(":","aui",a))}function m(a,b){n&&n.count&&n.count("aui:"+a,0===b?0:b||(n.count("aui:"+a)||0)+1)}function H(a){try{return a.test(navigator.userAgent)}catch(b){return!1}}function I(a){return"function"===typeof a}function u(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent&&a.attachEvent("on"+b,d)}function p(a,b,d,e){b=b&&d?b+a+d:b||d;return e?p(a,b,e):b}function y(a,b,d){try{Object.defineProperty(a,b,{value:d,writable:!1})}catch(e){a[b]=
d}return d}function R(a,b){a.className=S(a,b)+" "+b}function S(a,b){return(" "+a.className+" ").split(" "+b+" ").join(" ").replace(/^ | $/g,"")}function J(a){(a||[]).forEach(function(a){a in z||(z[a]=1,J(T[a]))})}function ha(a,b,d){var e=a.length,f=e,c=function(){f--||((d&&z.hasOwnProperty(d)?A:K).push(b),L||(q?q.set(B):setTimeout(B,0),L=!0))};for(c();e--;)U[a[e]]?c():(v[a[e]]=v[a[e]]||[]).push(c)}function ia(a,b,d,e,f){var c=l.createElement(a?"script":"link");u(c,"error",e);f&&u(c,"load",f);a?(c.type=
"text/javascript",c.async=!0,d&&/AUIClients|images[/]I/.test(b)&&c.setAttribute("crossorigin","anonymous"),c.src=b):(c.rel="stylesheet",c.href=b);l.getElementsByTagName("head")[0].appendChild(c)}function V(a,b){return function(d,e){function f(){ia(b,d,c,function(b){M?m("resource_unload"):c?(c=!1,m("resource_retry"),f()):(m("resource_error"),a.log("Asset failed to load: "+d));b&&b.stopPropagation?b.stopPropagation():g.event&&(g.event.cancelBubble=!0)},e)}if(W[d])return!1;W[d]=!0;m("resource_count");
var c=!0;return!f()}}function ja(a,b,d){for(var e={name:a,guard:function(c){return b.guardFatal(a,c)},guardTime:function(a){return b.guardTime(a)},logError:function(c,d,e){b.logError(c,d,e,a)}},f=[],c=0;c<d.length;c++)C.hasOwnProperty(d[c])&&(f[c]=N.hasOwnProperty(d[c])?N[d[c]](C[d[c]],e):C[d[c]]);return f}function w(a,b,d,e,f){return function(c,k){function n(){var a=null;e?a=k:I(k)&&(q.start=r(),a=k.apply(g,ja(c,h,l)),q.end=r());if(b){C[c]=a;a=c;for(U[a]=!0;(v[a]||[]).length;)v[a].shift()();delete v[a]}q.done=
!0}var h=f||this;I(c)&&(k=c,c=F);b&&(c=c?c.replace(X,""):"__NONAME__",O.hasOwnProperty(c)&&h.error(p(", reregistered by ",p(" by ",c+" already registered",O[c]),h.attribution),c),O[c]=h.attribution);for(var l=T[c]=[],m=0;m<a.length;m++)l[m]=a[m].replace(X,"");var q=x[c||"anon"+ ++ka]={depend:l,registered:r(),namespace:h.namespace};c&&z.hasOwnProperty(c)&&J(l);d?n():ha(l,h.guardFatal(c,n),c);return{decorate:function(a){N[c]=h.guardFatal(c,a)}}}}function Y(a){return function(){var b=Array.prototype.slice.call(arguments);
return{execute:w(b,!1,a,!1,this),register:w(b,!0,a,!1,this)}}}function P(a,b){return function(d,e){e||(e=d,d=F);var f=this.attribution;return function(){h.push(b||{attribution:f,name:d,logLevel:a});var c=e.apply(this,arguments);h.pop();return c}}}function D(a,b){this.load={js:V(this,!0),css:V(this)};y(this,"namespace",b);y(this,"attribution",a)}function Z(){l.body?k.trigger("a-bodyBegin"):setTimeout(Z,20)}"use strict";var t=E.now=E.now||function(){return+new E},r=function(a){return a&&a.now?a.now.bind(a):
t}(g.performance),la=r(),z={},T={},n=g.ue;G();G("aui_build_date:3.25.1-2025-03-13");var aa={getItem:function(a){try{return g.localStorage.getItem(a)}catch(b){}},setItem:function(a,b){try{return g.localStorage.setItem(a,b)}catch(d){}}},q=g._pSetI(),K=[],A=[],L=!1,ma=navigator.scheduling&&"function"===typeof navigator.scheduling.isInputPending;var B=function(){for(var a=q?q.set(B):setTimeout(B,0),b=t();A.length||K.length;)if((A.length?A:K).shift()(),q&&ma){if(150<t()-b&&!navigator.scheduling.isInputPending()||
50<t()-b&&navigator.scheduling.isInputPending())return}else if(50<t()-b)return;q?q.clear(a):clearTimeout(a);L=!1};var U={},v={},W={},M=!1;u(g,"beforeunload",function(){M=!0;setTimeout(function(){M=!1},1E4)});var X=/^prv:/,O={},C={},N={},x={},ka=0,ba=String.fromCharCode(92),h=[],ca=!0,da=g.onerror;g.onerror=function(a,b,d,e,f){f&&"object"===typeof f||(f=Error(a,b,d),f.columnNumber=e,f.stack=b||d||e?p(ba,f.message,"at "+p(":",b,d,e)):F);var c=h.pop()||{};f.attribution=p(":",f.attribution||c.attribution,
c.name);f.logLevel=c.logLevel;f.attribution&&console&&console.log&&console.log([f.logLevel||"ERROR",a,"thrown by",f.attribution].join(" "));h=[];da&&(c=[].slice.call(arguments),c[4]=f,da.apply(g,c))};D.prototype={logError:function(a,b,d,e){b={message:b,logLevel:d||"ERROR",attribution:p(":",this.attribution,e)};if(g.ueLogError)return g.ueLogError(a||b,a?b:null),!0;console&&console.error&&(console.log(b),console.error(a));return!1},error:function(a,b,d,e){a=Error(p(":",e,a,d));a.attribution=p(":",this.attribution,
b);throw a;},guardError:P(),guardFatal:P("FATAL"),guardCurrent:function(a){var b=h[h.length-1];return b?P(b.logLevel,b).call(this,a):a},guardTime:function(a){var b=h[h.length-1],d=b&&b.name;return d&&d in x?function(){var b=r(),f=a.apply(this,arguments);x[d].async=(x[d].async||0)+r()-b;return f}:a},log:function(a,b,d){return this.logError(null,a,b,d)},declare:w([],!0,!0,!0),register:w([],!0),execute:w([]),AUI_BUILD_DATE:"3.25.1-2025-03-13",when:Y(),now:Y(!0),trigger:function(a,b,d){var e=t();this.declare(a,
{data:b,pageElapsedTime:e-(g.aPageStart||NaN),triggerTime:e});d&&d.instrument&&Q.when("prv:a-logTrigger").execute(function(b){b(a)})},handleTriggers:function(){this.log("handleTriggers deprecated")},attributeErrors:function(a){return new D(a)},_namespace:function(a,b){return new D(a,b)},setPriority:function(a){ca?(ca=!1,J(a)):this.log("setPriority only accept the first call.")}};var k=y(g,"AmazonUIPageJS",new D);var Q=k._namespace("PageJS","AmazonUI");Q.declare("prv:p-debug",x);k.declare("p-recorder-events",
[]);k.declare("p-recorder-stop",function(){});y(g,"P",k);Z();if(l.addEventListener){var ea;l.addEventListener("DOMContentLoaded",ea=function(){k.trigger("a-domready");l.removeEventListener("DOMContentLoaded",ea,!1)},!1)}var fa=l.documentElement,na=g._pd(k,H,u,R,fa,aa,S,m,"3.25.1-2025-03-13");H(/UCBrowser/i)||na.localStorage&&R(fa,aa.getItem("a-font-class"));k.declare("a-event-revised-handling",!1);g._sw(Q,p,H,ba,m,n,G,I,u,k);k.declare("a-fix-event-off",!1);m("pagejs:pkgExecTime",r()-la)})(window,
document,Date);
(function(b){function q(a,e,d){function g(a,b,c){var f=Array(e.length);~l&&(f[l]={});~m&&(f[m]=c);for(c=0;c<n.length;c++){var g=n[c],h=a[c];f[g]=h}for(c=0;c<p.length;c++)g=p[c],h=b[c],f[g]=h;a=d.apply(null,f);return~l?f[l]:a}"string"!==typeof a&&b.P.error("C001");-1===a.indexOf("@")&&-1<a.indexOf("/")&&(-1<a.indexOf("es3")||-1<a.indexOf("evergreen"))&&(a=a.substring(0,a.lastIndexOf("/")));if(!r[a]){r[a]=!0;d||(d=e,e=[]);a=a.split(":",2);var c=a[1]?a[0]:void 0,f=(a[1]||a[0]).replace(/@capability\//,
"@c/"),k=c?b.P._namespace(c):b.P,t=!f.lastIndexOf("@c/",0),u=!f.lastIndexOf("@m/",0),n=[];a=[];var p=[],v=[],m=-1,l=-1;for(c=0;c<e.length;c++){var h=e[c];"module"===h&&k.error("C002");"exports"===h?l=c:"require"===h?m=c:h.lastIndexOf("@p/",0)?h.lastIndexOf("@c/",0)&&h.lastIndexOf("@m/",0)?(n.push(c),a.push("mix:"+h)):(p.push(c),v.push(h)):(n.push(c),a.push(h.substr(3)))}k.when.apply(k,a).register("mix:"+f,function(){var a=[].slice.call(arguments);return t||u||~m||p.length?{capabilities:v,cardModuleFactory:function(b,
c){b=g(a,b,c);b.P=k;return b},require:~m?q:void 0}:g(a,[],function(){})});(t||u)&&k.when("mix:@amzn/mix.client-runtime","mix:"+f).execute(function(a,b){a.registerCapabilityModule(f,b)});k.when("mix:"+f).register("xcp:"+f,function(a){return a});var q=function(a,b,c){try{var e=-1<f.indexOf("/")?f.split("/")[0]:f,d=a[0],g=d.lastIndexOf("./",0)?d:e+"/"+d.substr(2),h=g.lastIndexOf("@p/",0)?"mix:"+g:g.substr(3);k.when(h).execute(function(a){try{b(a)}catch(x){c(x)}})}catch(w){c(w)}}}}"use strict";var r=
{};b.mix_d||((b.Promise?P:P.when("3p-promise")).register("@p/promise-is-ready",function(a){b.Promise=b.Promise||a}),(Array.prototype.includes?P:P.when("a-polyfill")).register("@p/polyfill-is-ready",function(){}),b.mix_d=function(a,b,d){P.when("@p/promise-is-ready","@p/polyfill-is-ready").execute("@p/mix-d-deps",function(){q(a,b,d)})},b.xcp_d=b.mix_d,P.when("mix:@amzn/mix.client-runtime").execute(function(a){P.declare("xcp:@xcp/runtime",a)}));b.mixTimeout||(b.mixTimeout=function(a,e,d){b.mixCardInitTimeouts||
(b.mixCardInitTimeouts={});b.mixCardInitTimeouts[e]&&clearTimeout(b.mixCardInitTimeouts[e]);b.mixCardInitTimeouts[e]=setTimeout(function(){P.log("Client-side initialization timeout","WARN",a)},d)});b.mix_csa_map=b.mix_csa_map||{};b.mix_csa_internal=b.mix_csa_internal||function(a,e,d){return b.mix_csa_map[e]=b.mix_csa_map[e]||b.csa(a,d)};b.mix_csa_internal_key=b.mix_csa_internal_key||function(a,b){for(var d="",e=0;e<b.length;e++){var c=b[e];void 0!==a[c]&&"object"!==typeof a[c]&&(d+=c+":"+a[c]+",")}if(!d)throw Error("bad mix-csa key gen.");
return d};b.mix_csa_event=b.mix_csa_event||function(a){try{var e=b.mix_csa_internal_key(a,["producerId"])}catch(d){return P.logError(d,"MIX C005","WARN",void 0),function(){}}try{return b.mix_csa_internal("Events",e,a)}catch(d){return P.logError(d,"MIX C004","WARN",e),function(){}}};b.mix_csa=b.mix_csa||function(a,e){try{e=e||"";var d=document.querySelectorAll(a);if(1<d.length)for(var g=0;g<d.length;g++){if(d[g].querySelector(e)){var c=d[g];break}}else 1===d.length&&(c=d[0]);if(!c)throw Error(" ");
return b.mix_csa_internal("Content",a,{element:c})}catch(f){return P.logError(f,"MIX C004","WARN",a),function(){}}}})(window);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('sp.load.js').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/61xJcNKKLXL.js?AUIClients/AmazonUIjQuery');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/11zuylp74DL._RC|11Y+5x+kkTL.js,51F3LXOLEtL.js,11yKORv-GTL.js,11GgN1+C7hL.js,01+z+uIeJ-L.js,01VRMV3FBdL.js,21u+kGQyRqL.js,012FVc3131L.js,11aD5q6kNBL.js,11rRjDLdAVL.js,51zH7YD-TsL.js,11nAhXzgUmL.js,11dIAzUNpxL.js,1110g-SvlBL.js,116PwN2VXHL.js,21+WA5wfjfL.js,0190vxtlzcL.js,51xvEQZx5oL.js,01JYHc2oIlL.js,31nfKXylf6L.js,01ktRCtOqKL.js,01ASnt2lbqL.js,11bEz2VIYrL.js,31o2NGTXThL.js,01rpauTep4L.js,31N+6dLod0L.js,01tvglXfQOL.js,11+FwJUUPNL.js,014gnDeJDsL.js,11vb6P5C5AL.js,015+pUPweLL.js_.js?AUIClients/AmazonUI');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/51tQKx1B9KL.js?AUIClients/CardJsRuntimeBuzzCopyBuild');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/21rKj0pl6mL._RC|01cOcwrw2+L.js,310-2ScEiIL.js,016G7uDqQML.js_.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/41kJwg9GluL._RC|51WkAakQmDL.js,01wFfxST+ZL.js,018-nGQj6aL.js,11uacn9D5ZL.js,41Debmz01QL.js,01lb9cuSpfL.js,216mhluQMRL.js,110SJ0xcEvL.js,51ci2nQQ5SL.js,21sRWHXHCoL.js,31PxFwobuyL.js,311zP7kfZ8L.js,41RHIDFqOcL.js,41ZZwtBIKHL.js,51kGNtLTyzL.js,31Woe0xBtCL.js,31RdjkYMc0L.js,11a+lhxkUrL.js,11PUEGgF9FL.js,01xGyUiM+9L.js,41FENezNqUL.js,01TQyo0bnIL.js,21pA+P8mhGL.js,61sIo4ZrhsL.js,21LTybXmmzL.js,01GhKb2usNL.js,111zW1Nhl9L.js,013eoEBTVUL.js,51ybHDq4BTL.js,21F+2VGtGTL.js,014kCoIHgIL.js,11y+bwjSdaL.js,11bUDfY98zL.js,31wdyiGPg0L.js,21YblE14ZTL.js,01+oIQ0jY7L.js,41sO6vauZDL.js,31q2l+JtzVL.js,517WRDipG6L.js,31vdilX8zgL.js,516vVF0O2wL.js,31vI2qZfDdL.js,01Iqaokl00L.js,31ioPTd02RL.js,11LSI8IU0NL.js,11K5qCK19CL.js,0126YIoj+oL.js,31QJX79s82L.js,0151WYq70NL.js,01vzW+iAssL.js_.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('aodIngressClick').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/615B0eNaCeL.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('sp.load.js').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/11e6YKvz8HL._RC|61FhxHi06-L.js,61RiUeeyOBL.js,11mVFZW2AcL.js,21Nmk-pXMzL.js,11fWodXpihL.js,11-YCKCUgML.js,11uC0Nyw-gL.js_.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/61UVIvba88L.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/41bxsR+bRkL._RC|41JpFjfemJL.js,31hPw-WKizL.js,614NNJPOITL.js,31DwCDV0WwL.js,413Up9PxCyL.js,01mjV3L7d0L.js,01AyV5VYHYL.js,61dqGNG-JKL.js,31dzV2TisrL.js,41Mb3MIF31L.js,41878Hwie5L.js,41URVeWP1BL.js_.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/01xfTXT-XUL._RC|01kuABC1qtL.js,01N0kAB-QLL.js,01MNSebLxLL.js,01pmcpQBuzL.js,01DZ9e8NciL.js,01nIr9OaNFL.js,31JyIHpJZ5L.js,01aDSGK7b2L.js,01g+krhhVCL.js,01Iq2lf69NL.js,61raIBX66aL.js,21jkRnXwMCL.js,41Ak0-2hqlL.js_.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('useDesktopTwisterMetaAsset').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/51TyLrZRyUL._RC|21rFEFGgt2L.js_.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('sp.load.js').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/51GmnWFDRjL._RC|31yP6n5A+XL.js,31tJKFiAUTL.js,71fBNLGTHCL.js,31l+BtxlN3L.js,21RsH9fH8-L.js_.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/11GTxjinC+L.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/21cH5Q6owuL.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/313sHJh1gZL.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/31hMTQ1KLPL.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/21FJgtVq+eL.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/21+3NfuRrDL.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('useBuyingRulesDpAssets').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/61e6i91+I6L._RC|71LVgqy2ckL.js,31jsB13JlVL.js_.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/01I3s4SlPiL._RC|21Awk0AtTML.js,31V0mJ-srZL.js,11-asXJWfkL.js,01s80TZosWL.js,015gdESSAtL.js,01GJONmvbXL.js,017VcaK0ACL.js,01Gujc1zuyL.js,61BOfyog7bL.js_.js?AUIClients/');
});



(function(e){var a=window.AmazonUIPageJS||window.P,c=a._namespace||a.attributeErrors,b=c?c("DetailPageLatencyClientSideLibraries@timeToInteractive","DetailPageLatencyClientSideLibraries"):a;b.guardFatal?b.guardFatal(e)(b,window):b.execute(function(){e(b,window)})})(function(e,a,c){e.now().execute("dp-create-feature-interactive-api",function(){function b(d,b,a){d={name:d,options:b,type:a,timestamp:+new Date};f?f.updateFeatures([d]):c.push(d)}"function"===typeof uet&&uet("bb","clickToCI",{wb:1});var c=
[],f;a.markFeatureRender=function(d,a){b(d,a,"render")};a.markFeatureInteractive=function(a,c){b(a,c,"interactive")};e.when("dp-time-to-interactive").execute("dp-update-interactive-feature-list",function(a){f=a;c.length&&f.updateFeatures(c)})})});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('injectCalendarOnDetailPage').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/31vB5DAPhsL.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/01rg6Ce9FhL._RC|61DtTiCWsjL.js,01L9nn2zMmL.js_.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('useOffersDebugAssets').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/31FE2k3SYqL.js?AUIClients/');
});



window.ue_ihe = (window.ue_ihe || 0) + 1;
if (window.ue_ihe === 1) {
(function(c){c&&1===c.ue_jsmtf&&"object"===typeof c.P&&"function"===typeof c.P.when&&c.P.when("mshop-interactions").execute(function(e){"object"===typeof e&&"function"===typeof e.addListener&&e.addListener(function(b){"object"===typeof b&&"ORIGIN"===b.dataSource&&"number"===typeof b.clickTime&&"object"===typeof b.events&&"number"===typeof b.events.pageVisible&&(c.ue_jsmtf_interaction={pv:b.events.pageVisible,ct:b.clickTime})})})})(ue_csm);
(function(c,e,b){function m(a){f||(f=d[a.type].id,"undefined"===typeof a.clientX?(h=a.pageX,k=a.pageY):(h=a.clientX,k=a.clientY),2!=f||l&&(l!=h||n!=k)?(r(),g.isl&&e.setTimeout(function(){p("at",g.id)},0)):(l=h,n=k,f=0))}function r(){for(var a in d)d.hasOwnProperty(a)&&g.detach(a,m,d[a].parent)}function s(){for(var a in d)d.hasOwnProperty(a)&&g.attach(a,m,d[a].parent)}function t(){var a="";!q&&f&&(q=1,a+="&ui="+f);return a}var g=c.ue,p=c.uex,q=0,f=0,l,n,h,k,d={click:{id:1,parent:b},mousemove:{id:2,
parent:b},scroll:{id:3,parent:e},keydown:{id:4,parent:b}};g&&p&&(s(),g._ui=t)})(ue_csm,window,document);


(function(s,l){function m(b,e,c){c=c||new Date(+new Date+t);c="expires="+c.toUTCString();n.cookie=b+"="+e+";"+c+";path=/"}function p(b){b+="=";for(var e=n.cookie.split(";"),c=0;c<e.length;c++){for(var a=e[c];" "==a.charAt(0);)a=a.substring(1);if(0===a.indexOf(b))return decodeURIComponent(a.substring(b.length,a.length))}return""}function q(b,e,c){if(!e)return b;-1<b.indexOf("{")&&(b="");for(var a=b.split("&"),f,d=!1,h=!1,g=0;g<a.length;g++)f=a[g].split(":"),f[0]==e?(!c||d?a.splice(g,1):(f[1]=c,a[g]=
f.join(":")),h=d=!0):2>f.length&&(a.splice(g,1),h=!0);h&&(b=a.join("&"));!d&&c&&(0<b.length&&(b+="&"),b+=e+":"+c);return b}var k=s.ue||{},t=3024E7,n=ue_csm.document||l.document,r=null,d;a:{try{d=l.localStorage;break a}catch(u){}d=void 0}k.count&&k.count("csm.cookieSize",document.cookie.length);k.cookie={get:p,set:m,updateCsmHit:function(b,e,c){try{var a;if(!(a=r)){var f;a:{try{if(d&&d.getItem){f=d.getItem("csm-hit");break a}}catch(k){}f=void 0}a=f||p("csm-hit")||"{}"}a=q(a,b,e);r=a=q(a,"t",+new Date);
try{d&&d.setItem&&d.setItem("csm-hit",a)}catch(h){}m("csm-hit",a,c)}catch(g){"function"==typeof l.ueLogError&&ueLogError(Error("Cookie manager: "+g.message),{logLevel:"WARN"})}}}})(ue_csm,window);


(function(l,e){function c(b){b="";var c=a.isBFT?"b":"s",d=""+a.oid,g=""+a.lid,h=d;d!=g&&20==g.length&&(c+="a",h+="-"+g);a.tabid&&(b=a.tabid+"+");b+=c+"-"+h;b!=f&&100>b.length&&(f=b,a.cookie?a.cookie.updateCsmHit(m,b+("|"+ +new Date)):e.cookie="csm-hit="+b+("|"+ +new Date)+n+"; path=/")}function p(){f=0}function d(b){!0===e[a.pageViz.propHid]?f=0:!1===e[a.pageViz.propHid]&&c({type:"visible"})}var n="; expires="+(new Date(+new Date+6048E5)).toGMTString(),m="tb",f,a=l.ue||{},k=a.pageViz&&a.pageViz.event&&
a.pageViz.propHid;a.attach&&(a.attach("click",c),a.attach("keyup",c),k||(a.attach("focus",c),a.attach("blur",p)),k&&(a.attach(a.pageViz.event,d,e),d({})));a.aftb=1})(ue_csm,ue_csm.document);


ue_csm.ue.stub(ue,"impression");


ue.stub(ue,"trigger");


if(window.ue&&uet) { uet('bb'); }

}


window.ue && ue.count && ue.count('CSMLibrarySize', 3172)


window.P && P.register('bb');
if (typeof ues === 'function') {
  ues('t0', 'portal-bb', new Date());
  ues('ctb', 'portal-bb', 1);
}


{"AUI_A11Y_6_837773":"C","AUI_TNR_V2_180836":"C","AUI_TEMPLATE_WEBLAB_CACHE_333406":"C","BW_AUI_CXC_ALERT_MEASUREMENT_1074111":"C","AUI_72554":"C","AUI_KILLSWITCH_CSA_LOGGER_372963":"C","AUI_PCI_RISK_BANNER_210084":"C"}

typeof uex === 'function' && uex('ld', 'portal-bb', {wb: 1})


!function(){function n(n,t){var r=i(n);return t&&(r=r("instance",t)),r}var r=[],c=0,i=function(t){return function(){var n=c++;return r.push([t,[].slice.call(arguments,0),n,{time:Date.now()}]),i(n)}};n._s=r,this.csa=n}();;
csa('Config', {});
if (window.csa) {
    csa("Config", {
        'Application': 'Retail:Prod:www.amazon.in',
        'Events.Namespace': 'csa',
        'ObfuscatedMarketplaceId': 'A21TJRUUN4KGV',
        'Events.SushiEndpoint': 'https://unagi.amazon.in/1/events/com.amazon.csm.csa.prod',
        'CacheDetection.RequestID': "QV6Z0G1VWWN6RDW0ZTK2",
        'CacheDetection.Callback': window.ue && ue.reset,
        'LCP.elementDedup': 1,
        'lob': '1'
    });

    csa("Events")("setEntity", {
        page: {requestId: "QV6Z0G1VWWN6RDW0ZTK2", meaningful: "interactive"},
        session: {id: "260-9171825-3931647"}
    });
}
!function(r){var e,i,o="splice",u=r.csa,f={},c={},a=r.csa._s,s=0,l=0,g=-1,h={},v={},d={},n=Object.keys,p=function(){};function t(n,t){return u(n,t)}function m(n,t){var r=c[n]||{};k(r,t),c[n]=r,l++,S(U,0)}function w(n,t,r){var i=!0;return t=D(t),r&&r.buffered&&(i=(d[n]||[]).every(function(n){return!1!==t(n)})),i?(h[n]||(h[n]=[]),h[n].push(t),function(){!function(n,t){var r=h[n];r&&r[o](r.indexOf(t),1)}(n,t)}):p}function b(n,t){if(t=D(t),n in v)return t(v[n]),p;return w(n,function(n){return t(n),!1})}function y(n,t){if(u("Errors")("logError",n),f.DEBUG)throw t||n}function E(){return Math.abs(4294967295*Math.random()|0).toString(36)}function D(n,t){return function(){try{return n.apply(this,arguments)}catch(n){y(n.message||n,n)}}}function S(n,t){return r.setTimeout(D(n),t)}function U(){for(var n=0;n<a.length;){var t=a[n],r=t[0]in c;if(!r&&!i)return void(s=a.length);r?(a[o](s=n,1),I(t)):n++}g=l}function I(n){var t=c[n[0]],r=n[1],i=r[0];if(!t||!t[i])return y("Undefined function: "+t+"/"+i);e=n[3],c[n[2]]=t[i].apply(t,r.slice(1))||{},e=0}function O(){i=1,U()}function k(t,r){n(r).forEach(function(n){t[n]=r[n]})}b("$beforeunload",O),m("Config",{instance:function(n){k(f,n)}}),u.plugin=D(function(n){n(t)}),t.config=f,t.register=m,t.on=w,t.once=b,t.blank=p,t.emit=function(n,t,r){for(var i=h[n]||[],e=0;e<i.length;)!1===i[e](t)?i[o](e,1):e++;v[n]=t||{},r&&r.buffered&&(d[n]||(d[n]=[]),100<=d[n].length&&d[n].shift(),d[n].push(t||{}))},t.UUID=function(){return[E(),E(),E(),E()].join("-")},t.time=function(n){var t=e?new Date(e.time):new Date;return"ISO"===n?t.toISOString():t.getTime()},t.error=y,t.warn=function(n,t){if(u("Errors")("logWarn",n),f.DEBUG)throw t||n},t.exec=D,t.timeout=S,t.interval=function(n,t){return r.setInterval(D(n),t)},(t.global=r).csa._s.push=function(n){n[0]in c&&(!a.length||i)?(I(n),a.length&&g!==l&&U()):a[o](s++,0,n)},U(),S(function(){S(O,f.SkipMissingPluginsTimeout||5e3)},1)}("undefined"!=typeof window?window:global);csa.plugin(function(o){var f="addEventListener",e="requestAnimationFrame",t=o.exec,r=o.global,u=o.on;o.raf=function(n){if(r[e])return r[e](t(n))},o.on=function(n,e,t,r){if(n&&"function"==typeof n[f]){var i=o.exec(t);return n[f](e,i,r),function(){n.removeEventListener(e,i,r)}}return"string"==typeof n?u(n,e,t,r):o.blank}});csa.plugin(function(o){var t,n,r={},e="localStorage",c="sessionStorage",a="local",i="session",u=o.exec;function s(e,t){var n;try{r[t]=!!(n=o.global[e]),n=n||{}}catch(e){r[t]=!(n={})}return n}function f(){t=t||s(e,a),n=n||s(c,i)}function l(e){return e&&e[i]?n:t}o.store=u(function(e,t,n){f();var o=l(n);return e?t?void(o[e]=t):o[e]:Object.keys(o)}),o.storageSupport=u(function(){return f(),r}),o.deleteStored=u(function(e,t){f();var n=l(t);if("function"==typeof e)for(var o in n)n.hasOwnProperty(o)&&e(o,n[o])&&delete n[o];else delete n[e]})});csa.plugin(function(n){n.types={ovl:function(n){var r=[];if(n)for(var i in n)n.hasOwnProperty(i)&&r.push(n[i]);return r}}});csa.plugin(function(a){var e=a.config,n="Errors",c="fcsmln",s=e["KillSwitch."+n];function r(n){return function(e){a("Metrics",{producerId:"csa",dimensions:{message:e}})("recordMetric",n,1)}}function t(r){var t,o,l=a("Events",{producerId:r.producerId,lob:e.lob||"0"}),i=["name","type","csm","adb"],u={url:"pageURL",file:"f",line:"l",column:"c"};this.log=function(e){if(!s&&!function(e){if(!e)return!0;for(var n in e)return!1;return!0}(e)){var n=r.logOptions||{ent:{page:["pageType","subPageType","requestId"]}};l("log",function(n){return t=a.UUID(),o={messageId:t,schemaId:r.schemaId||"<ns>.Error.6",errorMessage:n.m||null,attribution:n.attribution||null,logLevel:"FATAL",url:null,file:null,line:null,column:null,stack:n.s||[],context:n.cinfo||{},metadata:{}},n.logLevel&&(o.logLevel=""+n.logLevel),i.forEach(function(e){n[e]&&(o.metadata[e]=n[e])}),c in n&&(o.metadata[c]=n[c]+""),"INFO"===n.logLevel||Object.keys(u).forEach(function(e){"number"!=typeof n[u[e]]&&"string"!=typeof n[u[e]]||(o[e]=""+n[u[e]])}),o}(e),n)}}}a.register(n,{instance:function(e){return new t(e||{})},logError:r("jsError"),logWarn:r("jsWarn")})});csa.plugin(function(o){var r,e,n,t,a,i="function",u="willDisappear",f="$app.",p="$document.",c="focus",s="blur",d="active",l="resign",$=o.global,b=o.exec,m=o.config["Transport.AnonymizeRequests"]||!1,g=o("Events"),h=$.location,v=$.document||{},y=$.P||{},P=(($.performance||{}).navigation||{}).type,w=o.on,k=o.emit,E=v.hidden,T={};h&&v&&(w($,"beforeunload",D),w($,"pagehide",D),w(v,"visibilitychange",R(p,function(){return v.visibilityState||"unknown"})),w(v,c,R(p+c)),w(v,s,R(p+s)),y.when&&y.when("mash").execute(function(e){e&&(w(e,"appPause",R(f+"pause")),w(e,"appResume",R(f+"resume")),R(f+"deviceready")(),$.cordova&&$.cordova.platformId&&R(f+cordova.platformId)(),w(v,d,R(f+d)),w(v,l,R(f+l)))}),e=$.app||{},n=b(function(){k(f+"willDisappear"),D()}),a=typeof(t=e[u])==i,e[u]=b(function(){n(),a&&t()}),$.app||($.app=e),"complete"===v.readyState?A():w($,"load",A),E?S():x(),o.on("$app.blur",S),o.on("$app.focus",x),o.on("$document.blur",S),o.on("$document.focus",x),o.on("$document.hidden",S),o.on("$document.visible",x),o.register("SPA",{newPage:I}),I({transitionType:{0:"hard",1:"refresh",2:"back-button"}[P]||"unknown"}));function I(n,e){var t=!!r,a=(e=e||{}).keepPageAttributes;t&&(k("$beforePageTransition"),k("$pageTransition")),t&&!a&&g("removeEntity","page"),r=o.UUID(),a?T.id=r:T={schemaId:"<ns>.PageEntity.2",id:r,url:m?h.href.split("?")[0]:h.href,server:h.hostname,path:h.pathname,referrer:m?v.referrer.split("?")[0]:v.referrer,title:v.title},Object.keys(n||{}).forEach(function(e){T[e]=n[e]}),g("setEntity",{page:T}),k("$pageChange",T,{buffered:1}),t&&k("$afterPageTransition")}function A(){k("$load"),k("$ready"),k("$afterload")}function D(){k("$ready"),k("$beforeunload"),k("$unload"),k("$afterunload")}function S(){E||(k("$visible",!1,{buffered:1}),E=!0)}function x(){E&&(k("$visible",!0,{buffered:1}),E=!1)}function R(n,t){return b(function(){var e=typeof t==i?n+t():n;k(e)})}});csa.plugin(function(c){var e="Events",n="UNKNOWN",s="id",a="all",i="messageId",o="timestamp",u="producerId",r="application",f="obfuscatedMarketplaceId",d="entities",l="schemaId",p="version",v="attributes",g="<ns>",b="lob",t="session",h=c.config,m=(c.global.location||{}).host,I=h[e+".Namespace"]||"csa_other",y=h.Application||"Other"+(m?":"+m:""),O=h["Transport.AnonymizeRequests"]||!1,E=c("Transport"),U={},A=function(e,t){Object.keys(e).forEach(t)};function N(n,i,o){A(i,function(e){var t=o===a||(o||{})[e];e in n||(n[e]={version:1,id:i[e][s]||c.UUID()}),S(n[e],i[e],t)})}function S(t,n,i){A(n,function(e){!function(e,t,n){return"string"!=typeof t&&e!==p?c.error("Attribute is not of type string: "+e):!0===n||1===n||(e===s||!!~(n||[]).indexOf(e))}(e,n[e],i)||(t[e]=n[e])})}function k(o,e,r){A(e,function(e){var t=o[e];if(t[l]){var n={},i={};n[s]=t[s],n[u]=t[u]||r[u],n[l]=t[l],n[p]=t[p]++,n[v]=i,w(n,r),S(i,t,1),D(i),E("log",n)}})}function w(e,t){e[o]=function(e){return"number"==typeof e&&(e=new Date(e).toISOString()),e||c.time("ISO")}(e[o]),e[i]=e[i]||c.UUID(),e[r]=y,e[f]=h.ObfuscatedMarketplaceId||n,e[l]=e[l].replace(g,I),t&&t[b]&&(e[b]=t[b])}function D(e){delete e[p],delete e[l],delete e[u]}function T(o){var r={};this.log=function(e,t){var n={},i=(t||{}).ent;return e?"string"!=typeof e[l]?c.error("A valid schema id is required for the event"):(w(e,o),N(n,U,i),N(n,r,i),N(n,e[d]||{},i),A(n,function(e){D(n[e])}),e[u]=o[u],e[d]=n,t&&t[b]&&(e[b]=t[b]),void E("log",e,t)):c.error("The event cannot be undefined")},this.setEntity=function(e){O&&delete e[t],N(r,e,a),k(r,e,o)}}h["KillSwitch."+e]||c.register(e,{setEntity:function(e){O&&delete e[t],c.emit("$entities.set",e,{buffered:1}),N(U,e,a),k(U,e,{producerId:"csa",lob:h[b]||"0"})},removeEntity:function(e){delete U[e]},instance:function(e){return new T(e)}})});csa.plugin(function(s){var c,g="Transport",l="post",f="preflight",r="csa.cajun.",i="store",a="deleteStored",u="sendBeacon",t="__merge",e="messageId",n=".FlushInterval",o=0,d=s.config[g+".BufferSize"]||2e3,h=s.config[g+".RetryDelay"]||1500,p=s.config[g+".AnonymizeRequests"]||!1,v={},y=0,m=[],E=s.global,R=E.document,b=s.timeout,k=E.Object.keys,w=s.config[g+n]||5e3,I=w,O=s.config[g+n+".BackoffFactor"]||1,S=s.config[g+n+".BackoffLimit"]||3e4,B=0;function T(n){if(864e5<s.time()-+new Date(n.timestamp))return s.warn("Event is too old: "+n);y<d&&(n[e]in v||(v[n[e]]=n,y++),"function"==typeof n[t]&&n[t](v[n[e]]),!B&&o&&(B=b(q,function(){var n=I;return I=Math.min(n*O,S),n}())))}function q(){m.forEach(function(e){var o=[];k(v).forEach(function(n){var t=v[n];e.accepts(t)&&o.push(t)}),o.length&&(e.chunks?e.chunks(o).forEach(function(n){D(e,n)}):D(e,o))}),v={},B=0}function D(t,e){function o(){s[a](r+n)}var n=s.UUID();s[i](r+n,JSON.stringify(e)),[function(n,t,e){var o=E.navigator||{},r=E.cordova||{};if(p)return 0;if(!o[u]||!n[l])return 0;n[f]&&r&&"ios"===r.platformId&&!c&&((new Image).src=n[f]().url,c=1);var i=n[l](t);if(!i.type&&o[u](i.url,i.body))return e(),1},function(n,t,e){if(!n[l])return 0;var o=n[l](t),r=o.url,i=o.body,c=o.type,f=new XMLHttpRequest,a=0;function u(n,t,e){f.open("POST",n),f.withCredentials=!p,e&&f.setRequestHeader("Content-Type",e),f.send(t)}return f.onload=function(){f.status<299?e():s.config[g+".XHRRetries"]&&a<3&&b(function(){u(r,i,c)},++a*h)},u(r,i,c),1}].some(function(n){try{return n(t,e,o)}catch(n){}})}k&&(s.once("$afterload",function(){o=1,function(e){(s[i]()||[]).forEach(function(n){if(!n.indexOf(r))try{var t=s[i](n);s[a](n),JSON.parse(t).forEach(e)}catch(n){s.error(n)}})}(T),s.on(R,"visibilitychange",q,!1),q()}),s.once("$afterunload",function(){o=1,q()}),s.on("$afterPageTransition",function(){y=0,I=w}),s.register(g,{log:T,register:function(n){m.push(n)}}))});csa.plugin(function(n){var r=n.config["Events.SushiEndpoint"];n("Transport")("register",{accepts:function(n){return n.schemaId},post:function(n){var t=n.map(function(n){return{data:n}});return{url:r,body:JSON.stringify({events:t})}},preflight:function(){var n,t=/\/\/(.*?)\//.exec(r);return t&&t[1]&&(n="https://"+t[1]+"/ping"),{url:n}},chunks:function(n){for(var t=[];500<n.length;)t.push(n.splice(0,500));return t.push(n),t}})});csa.plugin(function(n){var t,a,o,r,e=n.config,i="PageViews",d=e[i+".ImpressionMinimumTime"]||1e3,s="hidden",c="innerHeight",l="innerWidth",g="renderedTo",f=g+"Viewed",m=g+"Meaningful",u=g+"Impressed",p=1,h=2,v=3,w=4,P=5,y="loaded",I=7,b=8,T=n.global,S=n.on,E=n("Events",{producerId:"csa",lob:e.lob||"0"}),K=T.document,V={},$={},M=P,R=e["KillSwitch."+i],H=e["KillSwitch.PageRender"],W=e["KillSwitch.PageImpressed"];function j(e){if(!V[I]){if(V[e]=n.time(),e!==v&&e!==y||(t=t||V[e]),t&&M===w){if(a=a||V[e],!R)(i={})[m]=t-o,i[f]=a-o,k("PageView.5",i);r=r||n.timeout(x,d)}var i;if(e!==P&&e!==p&&e!==h||(clearTimeout(r),r=0),e!==p&&e!==h||H||k("PageRender.4",{transitionType:e===p?"hard":"soft"}),e===I&&!W)(i={})[m]=t-o,i[f]=a-o,i[u]=V[e]-o,k("PageImpressed.3",i)}}function k(e,i){$[e]||(i.schemaId="<ns>."+e,E("log",i,{ent:"all"}),$[e]=1)}function q(){0===T[c]&&0===T[l]?(M=b,n("Events")("setEntity",{page:{viewport:"hidden-iframe"}})):M=K[s]?P:w,j(M)}function x(){j(I),r=0}function z(){var e=o?h:p;V={},$={},a=t=0,o=n.time(),j(e),q()}function A(){var e=K.readyState;"interactive"===e&&j(v),"complete"===e&&j(y)}K&&void 0!==K[s]?(z(),S(K,"visibilitychange",q,!1),S(K,"readystatechange",A,!1),S("$afterPageTransition",z),S("$timing:loaded",A),n.once("$load",A)):n.warn("Page visibility not supported")});csa.plugin(function(c){var s=c.config["Interactions.ParentChainLength"]||35,e="click",r="touches",f="timeStamp",o="length",u="pageX",g="pageY",p="pageXOffset",h="pageYOffset",m=250,v=5,d=200,l=.5,t={capture:!0,passive:!0},X=c.global,Y=c.emit,n=c.on,x=X.Math.abs,a=(X.document||{}).documentElement||{},y={x:0,y:0,t:0,sX:0,sY:0},N={x:0,y:0,t:0,sX:0,sY:0};function b(t){if(t.id)return"//*[@id='"+t.id+"']";var e=function(t){var e,n=1;for(e=t.previousSibling;e;e=e.previousSibling)e.nodeName===t.nodeName&&(n+=1);return n}(t),n=t.nodeName;return 1!==e&&(n+="["+e+"]"),t.parentNode&&(n=b(t.parentNode)+"/"+n),n}function I(t,e,n){var a=c("Content",{target:n}),i={schemaId:"<ns>.ContentInteraction.2",interaction:t,interactionData:e,messageId:c.UUID()};if(n){var r=b(n);r&&(i.attribution=r);var o=function(t){for(var e=t,n=e.tagName,a=!1,i=t?t.href:null,r=0;r<s;r++){if(!e||!e.parentElement){a=!0;break}n=(e=e.parentElement).tagName+"/"+n,i=i||e.href}return a||(n=".../"+n),{pc:n,hr:i}}(n);o.pc&&(i.interactionData.parentChain=o.pc),o.hr&&(i.interactionData.href=o.hr)}a("log",i),Y("$content.interaction",{e:i,w:a})}function i(t){I(e,{interactionX:""+t.pageX,interactionY:""+t.pageY},t.target)}function C(t){if(t&&t[r]&&1===t[r][o]){var e=t[r][0];N=y={e:t.target,x:e[u],y:e[g],t:t[f],sX:X[p],sY:X[h]}}}function D(t){if(t&&t[r]&&1===t[r][o]&&y&&N){var e=t[r][0],n=t[f],a=n-N.t,i={e:t.target,x:e[u],y:e[g],t:n,sX:X[p],sY:X[h]};N=i,d<=a&&(y=i)}}function E(t){if(t){var e=x(y.x-N.x),n=x(y.y-N.y),a=x(y.sX-N.sX),i=x(y.sY-N.sY),r=t[f]-y.t;if(m<1e3*e/r&&v<e||m<1e3*n/r&&v<n){var o=n<e;o&&a&&e*l<=a||!o&&i&&n*l<=i||I((o?"horizontal":"vertical")+"-swipe",{interactionX:""+y.x,interactionY:""+y.y,endX:""+N.x,endY:""+N.y},y.e)}}}n(a,e,i,t),n(a,"touchstart",C,t),n(a,"touchmove",D,t),n(a,"touchend",E,t)});csa.plugin(function(s){var a,o,t,c,e,n="MutationObserver",l="observe",i="disconnect",f="_csa_flt",b="_csa_llt",d="_csa_mr",p="_csa_mi",v="lastChild",m="length",h={childList:!0,subtree:!0},_=10,g=25,r=1e3,y=4,u=s.global,k=u.document,w=k.body||k.documentElement,I=Date.now,L=[],O=[],B=[],M=0,x=0,C=0,D=1,E=[],F=[],S=0,V=s.blank;I&&u[n]&&(M=0,o=new u[n]($),(t=new u[n](Y))[l](w,{attributes:!0,subtree:!0,attributeFilter:["src"],attributeOldValue:!0}),V=s.on(u,"scroll",j,{passive:!0}),s.once("$ready",A),D&&(z(),e=s.interval(q,r)),s.register("SpeedIndexBuffers",{getBuffers:function(e){e&&(A(),j(),e(M,E,L,O,B),o&&o[i](),t&&t[i](),V())},registerListener:function(e){a=e},replayModuleIsLive:function(){s.timeout(A,0)}}));function Y(e){L.push({t:I(),m:e})}function $(e){O.push({t:I(),m:e}),C=1,a&&a()}function j(){C&&(B.push({t:I(),y:x}),x=u.pageYOffset,C=0)}function q(){var e=I();(!c||r<e-c)&&z()}function z(){for(var e=w,t=I(),n=[],i=[],r=0,u=0;e;)e[f]?++r:(e[f]=t,n.push(e),u=1),i[m]<y&&i.push(e),e[p]=S,e[b]=t,e=e[v];u&&(r<F[m]&&function(e){for(var t=e,n=F[m];t<n;t++){var i=F[t];if(i){if(i[d])break;if(i[p]<S){i[d]=1,o[l](i,h);break}}}}(r),F=i,E.push({t:t,m:n}),++S,C=u,a&&a()),D&&s.timeout(z,u?_:g),c=t}function A(){D&&(D=0,e&&u.clearInterval(e),e=null,z(),o[l](w,h))}});
csa.plugin(function(b){var a=b.global,c=a.uet,e=a.uex,f=a.ue,a=a.Object,g=0,h={largestContentfulPaint:"lcp",visuallyLoaded50:"vl50",visuallyLoaded90:"vl90",visuallyLoaded100:"vl100"};b&&c&&e&&a.keys&&f&&(b.once("$ditched.beforemitigation",function(){g=1}),a.keys(h).forEach(function(a){b.on("$timing:"+a,function(b){var d=h[a];if(f.isl||g){var k="csa:"+d;c(d,k,void 0,b);e("at",k)}else c(d,void 0,void 0,b)})}))});


window.rx = { 'rid':'QV6Z0G1VWWN6RDW0ZTK2', 'sid':'260-9171825-3931647', 'c':{  'rxp':'/rd/uedata' }};


window.ue && ue.count && ue.count('CSMLibrarySize', 16161)

!function(n){function e(n,e){return{m:n,a:function(n){return[].slice.call(n)}(e)}}document.createElement("header");var r=function(n){function u(n,r,u){n[u]=function(){a._replay.push(r.concat(e(u,arguments)))}}var a={};return a._sourceName=n,a._replay=[],a.getNow=function(n,e){return e},a.when=function(){var n=[e("when",arguments)],r={};return u(r,n,"run"),u(r,n,"declare"),u(r,n,"publish"),u(r,n,"build"),r.depends=n,r.iff=function(){var r=n.concat([e("iff",arguments)]),a={};return u(a,r,"run"),u(a,r,"declare"),u(a,r,"publish"),u(a,r,"build"),a},r},u(a,[],"declare"),u(a,[],"build"),u(a,[],"publish"),u(a,[],"importEvent"),r._shims.push(a),a};r._shims=[],n.$Nav||(n.$Nav=r("rcx-nav")),n.$Nav.make||(n.$Nav.make=r)}(window)


$Nav.importEvent('navbarJS-beaconbelt');
$Nav.declare('img.sprite', {
  'png32': 'https://m.media-amazon.com/images/G/31/gno/sprites/nav-sprite-global-1x-reorg-privacy._CB541718031_.png',
  'png32-2x': 'https://m.media-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-reorg-privacy._CB541718031_.png'
});
$Nav.declare('img.timeline', {
  'timeline-icon-2x': 'https://m.media-amazon.com/images/G/31/gno/sprites/timeline_sprite_2x._CB443580981_.png'
});
window._navbarSpriteUrl = 'https://m.media-amazon.com/images/G/31/gno/sprites/nav-sprite-global-1x-reorg-privacy._CB541718031_.png';
$Nav.declare('img.pixel', 'https://m.media-amazon.com/images/G/31/x-locale/common/transparent-pixel._CB485934990_.gif');


var nav_t_after_preload_sprite = + new Date();


(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('navCF').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/51na2k2njbL._RC|71rYEdus-LL.js,01F+A05ogQL.js,01VfhmbHmKL.js,71m4s8J6XyL.js,01cZ21lATAL.js,01bAfFgS7JL.js,01A2AtmCtlL.js,41jBieyCvYL.js,01wXnKULArL.js,01+pnQJuQ0L.js,21PMP-WgxTL.js,41lXbNNGwGL.js,51HrkAbbpLL.js,31XO9BO1OrL.js,11lw6J7z8iL.js,31NSDarX4TL.js,01VYGE8lGhL.js,01tDwkxEoCL.js_.js?AUIClients/NavDesktopUberAsset#desktop.language-en.in.878681-T1.1079958-T1.1089549-T1.1168233-T1.310484-T1.1104203-T1.1121224-T1');
});



    if(window.navmet===undefined) {
      window.navmet=[];
      if (window.performance && window.performance.timing && window.ue_t0) {
        var t = window.performance.timing;
        var now = + new Date();
        window.navmet.basic = {
          'networkLatency': (t.responseStart - t.fetchStart),
          'navFirstPaint': (now - t.responseStart),
          'NavStart': (now - window.ue_t0)
        };
        window.navmet.push({key:"NavFirstPaintStart",end:+new Date(),begin:window.ue_t0});
      }
    }
    if (window.ue_t0) {
      window.navmet.push({key:"NavMainStart",end:+new Date(),begin:window.ue_t0});
    }


window.navmet.tmp=+new Date();


    // Nav start should be logged at this place only if request is NOT progressively loaded.
    // For progressive loading case this metric is logged as part of skeleton.
    // Presence of skeleton signals that request is progressively loaded.
    if(!document.getElementById("navbar-skeleton")) {
      window.uet && uet('ns');
    }
    window._navbar = (function (o) {
      o.componentLoaded = o.loading = function(){};
      o.browsepromos = {};
      o.issPromos = [];
      return o;
    }(window._navbar || {}));
    window._navbar.declareOnLoad = function () { window.$Nav && $Nav.declare('page.load'); };
    if (window.addEventListener) {
      window.addEventListener("load", window._navbar.declareOnLoad, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", window._navbar.declareOnLoad);
    } else if (window.$Nav) {
      $Nav.when('page.domReady').run("OnloadFallbackSetup", function () {
        window._navbar.declareOnLoad();
      });
    }
    window.$Nav && $Nav.declare('logEvent.enabled',
      'false');

    window.$Nav && $Nav.declare('config.lightningDeals', {});
  


      try {
        window.$Nav && $Nav.when('$').run('defineIsArray', function(jQuery) { if(jQuery.isArray===undefined) { jQuery.isArray=function(param) { if(param.length===undefined) { return false; } return true; }; } }); window.$Nav && $Nav.when('$','$F','config','logEvent','panels','phoneHome','dataPanel','flyouts.renderPromo','flyouts.sloppyTrigger','flyouts.accessibility','util.mouseOut','util.onKey','debug.param').build('flyouts.buildSubPanels',function($,$F,config,logEvent,panels,phoneHome,dataPanel,renderPromo,createSloppyTrigger,a11yHandler,mouseOutUtility,onKey,debugParam){var flyoutDebug=debugParam('navFlyoutClick');return function(flyout,event){var linkKeys=[];$('.nav-item',flyout.elem()).each(function(){var $item=$(this);linkKeys.push({link:$item,panelKey:$item.attr('data-nav-panelkey')});});if(linkKeys.length===0){return;} var visible=false;var $parent=$('<div class=\'nav-subcats\'></div>').appendTo(flyout.elem());var panelGroup=flyout.getName()+'SubCats';var hideTimeout=null;var sloppyTrigger=createSloppyTrigger($parent);var showParent=function(){if(hideTimeout){clearTimeout(hideTimeout);hideTimeout=null;} if(visible){return;} var height=$('#nav-flyout-shopAll').height();$parent.css({'height': height});$parent.animate({width:'show'},{duration:200,complete:function(){$parent.css({overflow:'visible'});}});visible=true;};var hideParentNow=function(){$parent.stop().css({overflow:'hidden',display:'none',width:'auto',height:'auto'});panels.hideAll({group:panelGroup});visible=false;if(hideTimeout){clearTimeout(hideTimeout);hideTimeout=null;}};var hideParent=function(){if(!visible){return;} if(hideTimeout){clearTimeout(hideTimeout);hideTimeout=null;} hideTimeout=setTimeout(hideParentNow,10);};flyout.onHide(function(){sloppyTrigger.disable();hideParentNow();this.elem().hide();});var addPanel=function($link,panelKey){var panel=dataPanel({className:'nav-subcat',dataKey:panelKey,groups:[panelGroup],spinner:false,visible:false});if(!flyoutDebug){var mouseout=mouseOutUtility();mouseout.add(flyout.elem());mouseout.action(function(){panel.hide();});mouseout.enable();} var a11y=a11yHandler({link:$link,onEscape:function(){panel.hide();$link.focus();}});var logPanelInteraction=function(promoID,wlTriggers){var logNow=$F.once().on(function(){var panelEvent=$.extend({},event,{id:promoID});if(config.browsePromos&&!!config.browsePromos[promoID]){panelEvent.bp=1;} logEvent(panelEvent);phoneHome.trigger(wlTriggers);});if(panel.isVisible()&&panel.hasInteracted()){logNow();}else{panel.onInteract(logNow);}};panel.onData(function(data){renderPromo(data.promoID,panel.elem());logPanelInteraction(data.promoID,data.wlTriggers);});panel.onShow(function(){var columnCount=$('.nav-column',panel.elem()).length;panel.elem().addClass('nav-colcount-'+columnCount);showParent();var $subCatLinks=$('.nav-subcat-links > a',panel.elem());var length=$subCatLinks.length;if(length>0){var firstElementLeftPos=$subCatLinks.eq(0).offset().left;for(var i=1;i<length;i++){if(firstElementLeftPos===$subCatLinks.eq(i).offset().left){$subCatLinks.eq(i).addClass('nav_linestart');}} if($('span.nav-title.nav-item',panel.elem()).length===0){var catTitle=$.trim($link.html());catTitle=catTitle.replace(/ref=sa_menu_top/g,'ref=sa_menu');var $subPanelTitle=$('<span class=\'nav-title nav-item\'>'+ catTitle+'</span>');panel.elem().prepend($subPanelTitle);}} $link.addClass('nav-active');});panel.onHide(function(){$link.removeClass('nav-active');hideParent();a11y.disable();sloppyTrigger.disable();});panel.onShow(function(){a11y.elems($('a, area',panel.elem()));});sloppyTrigger.register($link,panel);if(flyoutDebug){$link.click(function(){if(panel.isVisible()){panel.hide();}else{panel.show();}});} var panelKeyHandler=onKey($link,function(){if(this.isEnter()||this.isSpace()){panel.show();}},'keydown',false);$link.focus(function(){panelKeyHandler.bind();}).blur(function(){panelKeyHandler.unbind();});panel.elem().appendTo($parent);};var hideParentAndResetTrigger=function(){hideParent();sloppyTrigger.disable();};for(var i=0;i<linkKeys.length;i++){var item=linkKeys[i];if(item.panelKey){addPanel(item.link,item.panelKey);}else{item.link.mouseover(hideParentAndResetTrigger);}}};});
      } catch ( err ) {
        if ( window.$Nav ) {
          window.$Nav.when('metrics', 'logUeError').run(function(metrics, log) {
            metrics.increment('NavJS:AboveNavInjection:error');
            log(err.toString(), {
              'attribution': 'rcx-nav',
              'logLevel': 'FATAL'
            });
          });
        }
      }
    

window.navmet.push({key:'PreNav',end:+new Date(),begin:window.navmet.tmp});

window.navmet.main=+new Date();

window.navmet.tmp=+new Date();

window.navmet.push({key:'Logo',end:+new Date(),begin:window.navmet.tmp});

window.navmet.tmp=+new Date();

window.navmet.push({key:'Search',end:+new Date(),begin:window.navmet.tmp});

window.navmet.tmp=+new Date();

window.navmet.push({key:'Tools',end:+new Date(),begin:window.navmet.tmp});

window.navmet.tmp=+new Date();


  var hmenu = document.getElementById("nav-hamburger-menu");
  hmenu.setAttribute("href", "javascript: void(0)");
  window.navHamburgerMetricLogger = function() {
    if (window.ue && window.ue.count) {
      var metricName = "Nav:Hmenu:IconClickActionPending";
      window.ue.count(metricName, (ue.count(metricName) || 0) + 1);
    }
    window.$Nav && $Nav.declare("navHMenuIconClicked",!0);
    window.$Nav && $Nav.declare("navHMenuIconClickedNotReadyTimeStamp", Date.now());
  };
  hmenu.addEventListener("click", window.navHamburgerMetricLogger);
  window.$Nav && $Nav.declare('hamburgerMenuIconAvailableOnLoad', false);


window.navmet.push({key:'HamburgerMenuIcon',end:+new Date(),begin:window.navmet.tmp});

window.navmet.tmp=+new Date();

window.navmet.push({key:'CrossShop',end:+new Date(),begin:window.navmet.tmp});

window.navmet.tmp=+new Date();

window.navmet.push({key:'SWM',end:+new Date(),begin:window.navmet.tmp});

window.navmet.tmp=+new Date();

window.navmet.push({key:'Subnav',end:+new Date(),begin:window.navmet.tmp});


(function() {
  var viewportWidth = function() {
    return window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  };

  if (typeof uet === 'function') {  uet('x1', 'ewc', {wb: 1}); }

  window.$Nav && $Nav.declare('config.ewc', (function() {
    var config = {"enablePersistent":true,"viewportWidthForPersistent":1400,"isEWCLogging":1,"isEWCStateExpanded":true,"EWCStateReason":"fixed","isSmallScreenEnabled":true,"isFreshCustomer":false,"errorContent":{"html":"<div class='nav-ewc-error'><span class='nav-title'>Oops!</span><p class='nav-paragraph'>There is a problem loading your cart right now</p><a href='/gp/cart/view.html?ref_=nav_err_ewc_timeout' class='nav-action-button'><span class='nav-action-inner'>Your Cart</span></a></div>"},"url":"/cart/ewc/compact?hostPageType=Detail&hostSubPageType=Glance&hostPageRID=QV6Z0G1VWWN6RDW0ZTK2&prerender=0&storeName=apple-devices","cartCount":0,"freshCartCount":0,"almCartCount":0,"primeWardrobeCartCount":0,"isCompactViewEnabled":true,"isCompactEWCRendered":true,"isWiderCompactEWCRendered":true,"EWCBrowserCacheKey":"EWC_Cache_260-9171825-3931647__INR_en_IN","isContentRepainted":false,"clearCache":false,"loadFromCacheWithDelay":0,"delayRenderingTillATF":false,"EarlyLoadEWCContentTreatment":"T3"};
    var hasAui = window.P && window.P.AUI_BUILD_DATE;
    var isRTLEnabled = (document.dir === 'rtl');
    config.pinnable = config.pinnable && hasAui;
    config.isMigrationTreatment = true;

    config.flyout = (function() {
      var navbelt = document.getElementById('nav-belt');
      var navCart = document.getElementById('nav-cart');
      var ewcFlyout = document.getElementById('nav-flyout-ewc');
      var persistentClassOnBody = 'nav-ewc-persistent-hover nav-ewc-full-height-persistent-hover';
      var flyout = {};

      var getDocumentScrollTop = function() {
        return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      };

      var isWindow = function(obj) {
        return obj != null && obj === obj.window;
      };

      var getWindow = function(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
      };

      var getOffset = function(elem) {
        if (elem.getClientRects && !elem.getClientRects().length) {
          return {top: 0};
        }

        var rect = elem.getBoundingClientRect
          ? elem.getBoundingClientRect()
          : {top: 0};

        if (rect.width || rect.height) {
          var doc = elem.ownerDocument;
          var win = getWindow(doc);
          return {
            top: rect.top + win.pageYOffset - doc.documentElement.clientTop
          };
        }
        return rect;
      };

      flyout.align = function() {
        var newTop = getOffset(navbelt).top - getDocumentScrollTop();
        ewcFlyout.style.top = (newTop > 0 ? newTop + 'px' : 0);
      };

      flyout.hide = function() {
        isRTLEnabled
          ? (ewcFlyout.style.left = '')
          : (ewcFlyout.style.right = '');
      };

      if(typeof config.isCompactEWCRendered === 'undefined') {
        if (
          (config.isSmallScreenEnabled && viewportWidth() < 1400) ||
          (config.isCompactViewEnabled && viewportWidth() >= 1400)
        ) {
          config.isCompactEWCRendered = true;
          config.isEWCStateExpanded = true;
          config.url = config.url.replace("/gp/navcart/sidebar", "/cart/ewc/compact");
        } else {
          config.isCompactEWCRendered = false;
        }
      }

      var viewportQualifyForPersistent = function () {
        return (config.isCompactEWCRendered)
          ? true
          : viewportWidth() >= 1400;
      }

      flyout.hasQualifiedViewportForPersistent = viewportQualifyForPersistent;

      var getEWCRightOffset = function() {
        if (!config.isCompactEWCRendered) {
          return 0;
        }

        var $navbelt = document.getElementById('nav-belt');
        if ($navbelt === undefined || $navbelt === null) {
          return 0;
        }

        var EWCCompactViewWidth = (config.isWiderCompactEWCRendered  && viewportWidth() >= 1280) ? 130 : 100;
        var scrollLeft = (window.pageXOffset !== undefined)
          ? window.pageXOffset
          : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
        var scrollXAxis = Math.abs(scrollLeft);
        var windowWidth = document.documentElement.clientWidth;
        var navbeltWidth = $navbelt.offsetWidth;
        var isPartOfNavbarNotVisible = (navbeltWidth + EWCCompactViewWidth) > windowWidth;

        if (isPartOfNavbarNotVisible) {
          return 0 - (navbeltWidth - scrollXAxis - windowWidth + EWCCompactViewWidth);
        } else {
          return 0;
        }
      }

      flyout.getEWCRightOffsetCssProperty = function () {
        return getEWCRightOffset() + 'px';
      }

      if (config.isCompactEWCRendered) {
        persistentClassOnBody = 'nav-ewc-persistent-hover nav-ewc-compact-view';
        if (config.isWiderCompactEWCRendered) { persistentClassOnBody += ' nav-ewc-wider-compact-view'; }
      }

      flyout.show = function() {
        isRTLEnabled
          ? (ewcFlyout.style.left = flyout.getEWCRightOffsetCssProperty())
          : (ewcFlyout.style.right = flyout.getEWCRightOffsetCssProperty());
      };

      var isIOSDevice = function() {
        return (/iPad|iPhone|iPod/.test(navigator.platform) ||
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
                !window.MSStream;
      }

      var checkForPersistent = function() {
        if (!hasAui) {
          return { result: false, reason: 'noAui' };
        }
        if (!config.enablePersistent) {
          return { result: false, reason: 'config' };
        }
        if (!viewportQualifyForPersistent()) {
          return { result: false, reason: 'viewport' };
        }
        if (isIOSDevice()) {
          return { result: false, reason: 'iOS' };
        }
        if (!config.cartCount > 0) {
          return { result: false, reason: 'emptycart' };
        }
        return { result: true };
      };

      flyout.ableToPersist = function() {
        return checkForPersistent().result;
      };
      var persistentClassRegExp = '(?:^|\\s)' + persistentClassOnBody + '(?!\\S)';
      flyout.applyPageLayoutForPersistent = function() {
        if (!document.documentElement.className.match( new RegExp(persistentClassRegExp) )) {
          document.documentElement.className += ' ' + persistentClassOnBody;
        }
      };

      flyout.unapplyPageLayoutForPersistent = function() {
        document.documentElement.className = document.documentElement.className.replace( new RegExp(persistentClassRegExp, 'g'), '');
      };

      flyout.persist = function() {
        flyout.applyPageLayoutForPersistent();
        flyout.show();
        if (config.isCompactEWCRendered) {
          flyout.align();
        }
      };

      flyout.unpersist = function() {
        flyout.unapplyPageLayoutForPersistent();
        flyout.hide();
      };
      
      var persistentCheck = checkForPersistent();
    

      var resizeCallback = function() {
        
        if (flyout.ableToPersist()) {
          flyout.persist();
        }
        else {
          flyout.unpersist();
        }
      };

      flyout.bindEvents = function() {
        if (window.addEventListener) {
          window.addEventListener('resize', resizeCallback, false);
          
          if (config.isCompactEWCRendered) {
            window.addEventListener('scroll', flyout.align, false);
          }
        }
      };

      flyout.unbindEvents = function() {
        if (window.removeEventListener) {
          window.removeEventListener('resize', resizeCallback, false);
          
          if (config.isCompactEWCRendered) {
            window.removeEventListener('scroll', flyout.align, false);
          }
        }
      };
      
      var ewcDefaultPersistence = function() {
      
        if (persistentCheck.result) {
          flyout.persist();
          if (window.ue && ue.tag) {
            ue.tag('ewc:persist');
          }
        } else {
          if (window.ue && ue.tag) {
            ue.tag('ewc:unpersist');
            if (persistentCheck.reason === 'noAui') {
              ue.tag('ewc:unpersist:noAui');
            }
            if (persistentCheck.reason === 'viewport') {
              ue.tag('ewc:unpersist:viewport');
            }
            if (persistentCheck.reason === 'emptycart') {
              ue.tag('ewc:unpersist:emptycart');
            }
            if (persistentCheck.reason === 'iOS') {
              ue.tag('ewc:unpersist:iOS');
            }
          }
        }
      };
      
      ewcDefaultPersistence();
      
      if (window.ue && ue.tag)  {
        if (flyout.hasQualifiedViewportForPersistent()) {
          ue.tag('ewc:bview');
        }
        else {
          ue.tag('ewc:sview');
        }
      }
      flyout.bindEvents();
      flyout.cache = function () {
    const cache = window.sessionStorage;
    const CACHE_KEY = "EWCBrowserCacheKey";
    const CACHE_EXPIRY = "EWCBrowserCacheExpiry"; 
    const CACHE_VALUE = "EWCBrowserCacheValue"; 
    const isSessionStorageValid = function () {
        return window && cache && cache instanceof Storage;
    };
    const isCachePresent = function (key) {
        return cache.length > 0 && cache.getItem(key);
    }
    const isValidType = function (value) {
        // Prevents accessing empty key-value and internal methods(prototypes) of storage
        // TODO: Log metrics for invalid access;
        return value && value.constructor == String;
    }
    return {
        getCache: function (key) {
            const value = isCachePresent(key);
            return (isValidType(value)) ? value : null;
        },
        setCache: function (key, value) {
            const oldValue = isCachePresent(key);
            const cacheExpiryTime = isCachePresent(CACHE_EXPIRY);
            // Set the expiry when there's no existing cache - to prevent resetting expiry on page navigation
            if (!cacheExpiryTime) {
                var currentTime = new Date();
                cache.setItem(CACHE_EXPIRY, new Date(currentTime.getTime() + 5 * 60000))
            }
            // TODO: Log length of old and new cache values when logMetrics is true
            cache.setItem(key, value);
        },
        updateCacheAndEwcContainer: function (cacheKey, newEwcContent) {
            const $ = $Nav.getNow("$");
            const $currentEwc = $("#ewc-content");
            if (!$currentEwc.length) {
                var $content = $('#nav-flyout-ewc .nav-ewc-content');
                $content.html(newEwcContent);
                this.setCache(CACHE_KEY, cacheKey);
                if (window.ue && window.ue.count) {
                    var current = window.ue.count("ewc-init-cache") || 0;
                    window.ue.count("ewc-init-cache", current + 1);
                }
            } else {
                var $newEwcContent = $('<div />');
                var EWC_CONTENT_BODY_SCROLL_SELECTOR = ".ewc-scroller--selected";
                if (newEwcContent) { // 1. Updates EWC container with new HTML 
        var domParser = new DOMParser();
               var sandboxedEwcContent = domParser.parseFromString(newEwcContent, 'text/html');
               var newEwcHtmlNoScript = sandboxedEwcContent.getElementById('ewc-content');
               const $newEwcHtml = $newEwcContent.html(newEwcHtmlNoScript);
                    const offSet = $currentEwc.find(EWC_CONTENT_BODY_SCROLL_SELECTOR).position().top - $currentEwc.find(".ewc-active-cart--selected").position().top;
                    $currentEwc.html($newEwcHtml.html());
                    $currentEwc.find(EWC_CONTENT_BODY_SCROLL_SELECTOR).scrollTop(offSet);
                    if (typeof window.uex === 'function') {
                        window.uex('ld', 'ewc-reflect-new-state', {wb: 1});
                    }
                } else {
                    // 2. Fetches cached response and updates it's html with new state on EWC Update
                    const cachedEwc = this.getCache(CACHE_VALUE);
                    $newEwcContent = $newEwcContent[0];
                    $(cachedEwc).map(function (elementIndex, element) {
                         $newEwcContent.appendChild((element.id === "ewc-content") ? $currentEwc.clone()[0] : element);
                    });
                    newEwcContent = $newEwcContent.innerHTML;
                    if (window.ue && window.ue.count) {
                        var current = window.ue.count("ewc-update-cache") || 0;
                        window.ue.count("ewc-update-cache", current + 1);
                    }
                }
                $newEwcContent.remove();
            }
            this.setCache(CACHE_VALUE, newEwcContent);
        },
        removeCache: function (key) {
            return cache.removeItem(key);
        }
    }
}
;
      return flyout;
    }());
     
  $Nav.when("config").run('ewc.pageload-content-load-wrapper', function(config) {
    P.register('ewc.pageload-content-loader', function(){
    var isEwcLoadedOnLanding = false;
    if(config.ewc.EarlyLoadEWCContentTreatment){
    return {
      loadContent: function(isFallback) {
        if(!isEwcLoadedOnLanding) {
          if (config.ewc.flyout.ableToPersist()) {
             setTimeout(function() {
               config.ewc.flyout.loadEwcContent();
               $Nav.declare('ewc.loadContent', function() {});
             }, 1000);
          } else {
            $Nav.declare('ewc.loadContent',  config.ewc.flyout.loadEwcContent);
          }
          if(isFallback){
             if (window.ue && window.ue.count) {
                var current = window.ue.count("ewc-load-content-fallback") || 0;
                window.ue.count("ewc-load-content-fallback", current + 1);
           }
         }
        }
        isEwcLoadedOnLanding = true;
      }
    }} else {
    return {}};
    });
   });

     
$Nav.when("config")
.run("ewc.inline.ajax", function(config) {

P.when('A').execute(function(A){
  var $ = A.$;
  var $content = $('#nav-flyout-ewc .nav-ewc-content');
  
  var displayErrorContent = function(){
    $content.html(config.ewc.errorContent.html).addClass('nav-tpl-flyoutError');
  };
  
  var getUrlParams = function(isReloaded) {
    var urlParams = {};
    if (isReloaded) {
      urlParams['isReloaded'] = true;
    } else {
      if (config.ewc.freshCartCount !== undefined) {
        urlParams['freshCartCount'] = config.ewc.freshCartCount;
      }
      if (config.ewc.almCartCount !== undefined) {
        urlParams['almCartCount'] = config.ewc.almCartCount;
      }
      if (config.ewc.primeWardrobeCartCount !== undefined) {
        urlParams['primeWardrobeCartCount'] = config.ewc.primeWardrobeCartCount;
      }
    }
    urlParams.widerCompactView = window.innerWidth > 1280;
    return urlParams;
  };

  config.ewc.flyout.loadEwcContent = function _loadEwcContent(isReloaded) {
    $.ajax({
      url: config.ewc.url,
      data: getUrlParams(isReloaded),
      type: "GET",
      dataType: config.ewc.isCompactEWCRendered ? "html" : "json",
      cache: false,
      timeout: config.ewc.timeout || 30000,
      beforeSend: function() {
        if (!config.ewc.isCompactEWCRendered) {
          $content.addClass('nav-spinner');
          if (typeof window.uet === 'function') {
            window.uet('af', 'ewc', {wb: 1});
          }
        } else {
          if (typeof window.uet === 'function') {
            window.uet('af', 'ewc2-compact', {wb: 1});
          }
        }
      },
      error: displayErrorContent,          
      success: function(result) {
        if (typeof window.uet === 'function') {
          window.uet('bb', 'ewc', {wb: 1});
        }
        if (config.ewc.isCompactEWCRendered) {
          if (!isReloaded) {
            P.register('EWC', function () {
              if (window.EwcP === undefined) {
                window.EwcP = (window.AmazonUIPageJS || P);
              }
              return {
                refresh : function () {
                  if (window.ue && window.ue.count) {
                    window.ue.count("ewc2-refresh", 1);
                  }
                  config.ewc.flyout.loadEwcContent(true);
                  P.when('EWCRefreshCallback').execute(function(callback) {
                    callback.update();
                  });
                }
              }
            });
          } else {
            var cartQuantity = $(result).find('#ewc-total-quantity').val();
            if (window.$Nav && cartQuantity) {
              window.$Nav.when('api.setCartCount').run(function(setCartCount) {
                setCartCount(parseInt(cartQuantity), true);
              });
            };
          }
          
            var cache = config.ewc.flyout.cache();
            cache.updateCacheAndEwcContainer("EWC_Cache_260-9171825-3931647__INR_en_IN", result);
                      
        }
        if (typeof window.uet === 'function') {
          window.uet('be', 'ewc', {wb: 1});
        }
      },
      complete: function() {
        if (!config.ewc.isCompactEWCRendered) {
          $content.removeClass('nav-spinner');
        }
        if (typeof window.uet === 'function') {
          window.uet('cf', 'ewc', {wb: 1});
        }
        if (typeof window.uex === 'function') {
            window.uex('ld', 'ewc', {wb: 1});
        }
      }
    });
  };
 });
(window.P && window.P.AUI_BUILD_DATE) && (window.AmazonUIPageJS ? AmazonUIPageJS : P)
.when('ewc.pageload-content-loader','atf').execute('ewcPageLoadContentLoader' , function(ewcPageLoadContentLoader,atf) {
    if (window.ue && window.ue.count) {
      var current = window.ue.count("ewc-load-content") || 0;
      window.ue.count("ewc-load-content", current + 1);
   }
    ewcPageLoadContentLoader.loadContent(false); 
   });
});

     
const CACHE_KEY = "EWCBrowserCacheKey";
const CACHE_VALUE = "EWCBrowserCacheValue"; 
const CACHE_EXPIRY = "EWCBrowserCacheExpiry"; 
var cache = config.flyout.cache();

const isCacheValid = function () {
  // Check for page types and tenure of the cache
  const clearCache = config.clearCache;
  const cacheExpiryTime = cache.getCache(CACHE_EXPIRY);
  const isCacheExpired = new Date() > new Date(cacheExpiryTime);
  const cacheKey = config.EWCBrowserCacheKey;
  const oldCacheKey = cache.getCache(CACHE_KEY);
  const isCacheValid = !clearCache && !isCacheExpired && cacheKey == oldCacheKey;
  if (!isCacheValid && window.ue && window.ue.count) {
    var current = window.ue.count("ewc-cache-invalidated") || 0;
    window.ue.count("ewc-cache-invalidated", current + 1);
  }
  return isCacheValid;
}
function loadFromCache() {
    if (window.uet && typeof window.uet === 'function') {
        window.uet('bb', 'ewc-loaded-from-cache', {wb: 1});
    }
    if (cache) {
        if (isCacheValid()) {
            var content = cache.getCache(CACHE_VALUE);
            if (content) {
                var $ewcContainer = document.getElementById("nav-flyout-ewc").getElementsByClassName("nav-ewc-content")[0];
                var $ewcContent = document.getElementById("ewc-content");
                if ($ewcContainer && !$ewcContent) {
                    $ewcContainer.innerHTML = content;
                    // Execute scripts from cache
                    const ewcJavascript = document.getElementById("ewc-content").parentNode.querySelectorAll(':scope > script');
                    ewcJavascript.forEach(function (script) {
                        var scriptTag = document.createElement("script");
                        scriptTag.innerHTML = script.innerHTML;
                        document.body.appendChild(scriptTag);
                    });
                    if (typeof window.uex === 'function') {
                        window.uex('ld', 'ewc-loaded-from-cache', {wb: 1});
                    }
                } else if (window.ue && window.ue.count && typeof window.ue.count === 'function') {
                    var currentFailure = window.ue.count("ewc-slow-cache") || 0;
                    window.ue.count("ewc-slow-cache", currentFailure + 1);
                }
            }
        } else {
            cache.removeCache(CACHE_VALUE);
            cache.removeCache(CACHE_KEY);
            cache.removeCache(CACHE_EXPIRY);
        }
    }
}
function delayBy(delayTime) {
    if (delayTime) {
        window.setTimeout(function() {
            loadFromCache();
        }, delayTime)
    } else {
        loadFromCache();
    }
}
if(config.delayRenderingTillATF) {
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('atf').execute("EverywhereCartLoadFromCacheOnAtf", function () {
        delayBy(config.loadFromCacheWithDelay);
    });
} else {
    delayBy(config.loadFromCacheWithDelay);
}

    return config;
  }()));

  if (typeof uet === 'function') {
    uet('x2', 'ewc', {wb: 1});
  }

  if (window.ue && ue.tag) {
    ue.tag('ewc');
    ue.tag('ewc:unrec');
    ue.tag('ewc:cartsize:0');

    if ( window.P && window.P.AUI_BUILD_DATE ) {
      ue.tag('ewc:aui');
    } else {
      ue.tag('ewc:noAui');
    }
  }
}());


window.navmet.push({key:'NavBar',end:+new Date(),begin:window.navmet.main});


  if (window.ue_t0) {
    window.navmet.push({key:"NavMainPaintEnd",end:+new Date(),begin:window.ue_t0});
    window.navmet.push({key:"NavFirstPaintEnd",end:+new Date(),begin:window.ue_t0});
  }



    <!--
    window.$Nav && $Nav.declare('config.fixedBarBeacon',false);
    window.$Nav && $Nav.when("data").run(function(data) { data({"freshTimeout":{"template":{"name":"flyoutError","data":{"error":{"title":"<style>#nav-flyout-fresh{width:269px;padding:0;}#nav-flyout-fresh .nav-flyout-content{padding:0;}</style><a href='/amazonfresh'><img src='https://images-eu.ssl-images-amazon.com/images/G/02/omaha/images/yoda/flyout_72dpi._V270092858_.png' /></a>"}}}},"cartTimeout":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Cart","url":"/gp/cart/view.html?ref_=nav_err_cart_timeout"},"title":"Oops!","paragraph":"There is a problem loading your cart right now"}}}},"primeTimeout":{"template":{"name":"flyoutError","data":{"error":{"title":"<a href='/gp/prime?ref_=nav_prime_btn_fb'><img src='https://images-eu.ssl-images-amazon.com/images/G/02/prime/yourprime/yourprime-widget-piv-fallback._V310089192_.jpg' /></a>"}}}},"ewcTimeout":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Cart","url":"/gp/cart/view.html?ref_=nav_err_ewc_timeout"},"title":"Oops!","paragraph":"There is a problem loading your cart right now"}}}},"errorWishlist":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Wish List","url":"/gp/registry/wishlist/?ref_=nav_err_wishlist"},"title":"Oops!","paragraph":"There is a problem retrieving the list right now"}}}},"emptyWishlist":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Wish List","url":"/gp/registry/wishlist/?ref_=nav_err_empty_wishlist"},"title":"Oops!","paragraph":"Your list is empty"}}}},"yourAccountContent":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Account","url":"/gp/css/homepage.html?ref_=nav_err_youraccount"},"title":"Oops!","paragraph":"There is a problem retrieving the list right now"}}}},"shopAllTimeout":{"template":{"name":"flyoutError","data":{"error":{"paragraph":"There is a problem retrieving the list right now"}}}},"kindleTimeout":{"template":{"name":"flyoutError","data":{"error":{"paragraph":"There is a problem retrieving the list right now"}}}}}); });
window.$Nav && $Nav.when("util.templates").run("FlyoutErrorTemplate", function(templates) {
      templates.add("flyoutError", "<# if(error.title) { #><span class='nav-title'><#=error.title #></span><# } #><# if(error.paragraph) { #><p class='nav-paragraph'><#=error.paragraph #></p><# } #><# if(error.button) { #><a href='<#=error.button.url #>' class='nav-action-button' ><span class='nav-action-inner'><#=error.button.text #></span></a><# } #>");
    });

    if (typeof uet == 'function') {
    uet('bb', 'iss-init-pc', {wb: 1});
  }
  if (!window.$SearchJS && window.$Nav) {
    window.$SearchJS = $Nav.make('sx');
  }

  var opts = {
    host: "completion.amazon.co.uk/search/complete"
  , marketId: "44571"
  , obfuscatedMarketId: "A21TJRUUN4KGV"
  , searchAliases: []
  , filterAliases: []
  , pageType: "Detail"
  , requestId: "QV6Z0G1VWWN6RDW0ZTK2"
  , sessionId: "260-9171825-3931647"
  , language: "en_IN"
  , customerId: ""
  , asin: "B0BDK62PDX"
  , b2b: 0
  , fresh: 0
  , isJpOrCn: 0
  , isUseAuiIss: 1
};

var issOpts = {
    fallbackFlag: 1
  , isDigitalFeaturesEnabled: 0
  , isWayfindingEnabled: 0
  , dropdown: "select.searchSelect"
  , departmentText: "in {department}"
  , suggestionText: "Search suggestions"
  , recentSearchesTreatment: "C"
  , authorSuggestionText: "all books by {author}"
  , translatedStringsMap: {"sx-recent-searches":"Recent searches","sx-your-recent-search":"Inspired by your recent search"}
  , biaTitleText: ""
  , biaPurchasedText: ""
  , biaViewAllText: ""
  , biaViewAllManageText: ""
  , biaAndText: ""
  , biaManageText: ""
  , biaWeblabTreatment: ""
  , issNavConfig: {}
  , np: 0
  , issCorpus: []
  , cf: 1
  , removeDeepNodeISS: ""
  , trendingTreatment: "C"
  , useAPIV2: ""
  , opfSwitch: ""
  , isISSDesktopRefactorEnabled: "1"
  , useServiceHighlighting: "true"
  , isInternal: 0
  , isAPICachingDisabled: true
  , isBrowseNodeScopingEnabled: false
  , isStorefrontTemplateEnabled: false
  , disableAutocompleteOnFocus: ""
};

  if (opts.isUseAuiIss === 1 && window.$Nav) {
  window.$Nav.when('sx.iss').run('iss-mason-init', function(iss){
    var issInitObj = buildIssInitObject(opts, issOpts, true);
    new iss.IssParentCoordinator(issInitObj);

    $SearchJS.declare('canCreateAutocomplete', issInitObj);
  });
} else if (window.$SearchJS) {
  var iss;

  // BEGIN Deprecated globals
  var issHost = opts.host
    , issMktid = opts.marketId
    , issSearchAliases = opts.searchAliases
    , updateISSCompletion = function() { iss.updateAutoCompletion(); };
  // END deprecated globals


  $SearchJS.when('jQuery', 'search-js-autocomplete-lib').run('autocomplete-init', initializeAutocomplete);
  $SearchJS.when('canCreateAutocomplete').run('createAutocomplete', createAutocomplete);

} // END conditional for window.$SearchJS
  function initializeAutocomplete(jQuery) {
  var issInitObj = buildIssInitObject(opts, issOpts);
  $SearchJS.declare("canCreateAutocomplete", issInitObj);
} // END initializeAutocomplete
  function initSearchCsl(searchCSL, issInitObject) {
  searchCSL.init(
    opts.pageType,
    (window.ue && window.ue.rid) || opts.requestId
  );
  $SearchJS.declare("canCreateAutocomplete", issInitObject);
} // END initSearchCsl
  function createAutocomplete(issObject) {
  iss = new AutoComplete(issObject);

  $SearchJS.publish("search-js-autocomplete", iss);

  logMetrics();
} // END createAutocomplete
  function buildIssInitObject(opts, issOpts, isNewIss) {
    var issInitObj = {
        src: opts.host
      , sessionId: opts.sessionId
      , requestId: opts.requestId
      , mkt: opts.marketId
      , obfMkt: opts.obfuscatedMarketId
      , pageType: opts.pageType
      , language: opts.language
      , customerId: opts.customerId
      , fresh: opts.fresh
      , b2b: opts.b2b
      , aliases: opts.searchAliases
      , fb: issOpts.fallbackFlag
      , isDigitalFeaturesEnabled: issOpts.isDigitalFeaturesEnabled
      , isWayfindingEnabled: issOpts.isWayfindingEnabled
      , issPrimeEligible: issOpts.issPrimeEligible
      , deptText: issOpts.departmentText
      , sugText: issOpts.suggestionText
      , filterAliases: opts.filterAliases
      , biaWidgetUrl: opts.biaWidgetUrl
      , recentSearchesTreatment: issOpts.recentSearchesTreatment
      , authorSuggestionText: issOpts.authorSuggestionText
      , translatedStringsMap: issOpts.translatedStringsMap
      , biaTitleText: ""
      , biaPurchasedText: ""
      , biaViewAllText: ""
      , biaViewAllManageText: ""
      , biaAndText: ""
      , biaManageText: ""
      , biaWeblabTreatment: ""
      , issNavConfig: issOpts.issNavConfig
      , cf: issOpts.cf
      , ime: opts.isJpOrCn
      , mktid: opts.marketId
      , qs: opts.isJpOrCn
      , issCorpus: issOpts.issCorpus
      , deepNodeISS: {
          searchAliasAccessor: function($) {
            return (window.SearchPageAccess && window.SearchPageAccess.searchAlias()) ||
                   $('select.searchSelect').children().attr('data-root-alias');
          },
          searchAliasDisplayNameAccessor: function() {
            return (window.SearchPageAccess && window.SearchPageAccess.searchAliasDisplayName());
          }
        }
      , removeDeepNodeISS: issOpts.removeDeepNodeISS
      , trendingTreatment: issOpts.trendingTreatment
      , useAPIV2: issOpts.useAPIV2
      , opfSwitch: issOpts.opfSwitch
      , isISSDesktopRefactorEnabled: issOpts.isISSDesktopRefactorEnabled
      , useServiceHighlighting: issOpts.useServiceHighlighting
      , isInternal: issOpts.isInternal
      , isAPICachingDisabled: issOpts.isAPICachingDisabled
      , isBrowseNodeScopingEnabled: issOpts.isBrowseNodeScopingEnabled
      , isStorefrontTemplateEnabled: issOpts.isStorefrontTemplateEnabled
      , disableAutocompleteOnFocus: issOpts.disableAutocompleteOnFocus
      , asin: opts.asin
    };
  
    // If we aren't using the new ISS then we need to add these properties
    
    if (!isNewIss) {
      issInitObj.dd = issOpts.dropdown; // The element with id searchDropdownBox doesn't exist in C.
      issInitObj.imeSpacing = issOpts.imeSpacing;
      issInitObj.isNavInline = 1;
      issInitObj.triggerISSOnClick = 0;
      issInitObj.sc = 1;
      issInitObj.np = issOpts.np;
    }
  
    return issInitObj;
  } // END buildIssInitObject
  function logMetrics() {
  if (typeof uet == 'function' && typeof uex == 'function') {
      uet('be', 'iss-init-pc',
          {
              wb: 1
          });
      uex('ld', 'iss-init-pc',
          {
              wb: 1
          });
  }
} // END logMetrics
  
    
window.$Nav && $Nav.declare('config.navDeviceType','desktop');

window.$Nav && $Nav.declare('config.navDebugHighres',false);

window.$Nav && $Nav.declare('config.pageType','Detail');
window.$Nav && $Nav.declare('config.subPageType','Glance');

window.$Nav && $Nav.declare('config.dynamicMenuUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Fdynamic\x2Dmenu.html');

window.$Nav && $Nav.declare('config.dismissNotificationUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Fdismissnotification.html');

window.$Nav && $Nav.declare('config.enableDynamicMenus',true);

window.$Nav && $Nav.declare('config.isInternal',false);

window.$Nav && $Nav.declare('config.isBackup',false);

window.$Nav && $Nav.declare('config.isRecognized',false);

window.$Nav && $Nav.declare('config.transientFlyoutTrigger','\x23nav\x2Dtransient\x2Dflyout\x2Dtrigger');

window.$Nav && $Nav.declare('config.subnavFlyoutUrl','\x2Fnav\x2Fajax\x2FsubnavFlyout');
window.$Nav && $Nav.declare('config.isSubnavFlyoutMigrationEnabled',true);

window.$Nav && $Nav.declare('config.recordEvUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Frecordevent.html');
window.$Nav && $Nav.declare('config.recordEvInterval',15000);
window.$Nav && $Nav.declare('config.sessionId','260\x2D9171825\x2D3931647');
window.$Nav && $Nav.declare('config.requestId','QV6Z0G1VWWN6RDW0ZTK2');

window.$Nav && $Nav.declare('config.alexaListEnabled',true);

window.$Nav && $Nav.declare('config.readyOnATF',false);

window.$Nav && $Nav.declare('config.dynamicMenuArgs',{"rid":"QV6Z0G1VWWN6RDW0ZTK2","isFullWidthPrime":0,"isPrime":0,"dynamicRequest":1,"weblabs":"","isFreshRegionAndCustomer":"","primeMenuWidth":310});

window.$Nav && $Nav.declare('config.customerName',false);

window.$Nav && $Nav.declare('config.customerCountryCode','IN');

window.$Nav && $Nav.declare('config.yourAccountPrimeURL',null);

window.$Nav && $Nav.declare('config.yourAccountPrimeHover',true);

window.$Nav && $Nav.declare('config.searchBackState',{});

window.$Nav && $Nav.declare('nav.inline');

(function (i) {
  if(window._navbarSpriteUrl) {
    i.onload = function() {window.uet && uet('ne')};
    i.src = window._navbarSpriteUrl;
  }
}(new Image()));

window.$Nav && $Nav.declare('config.autoFocus',false);

window.$Nav && $Nav.declare('config.responsiveTouchAgents',["ieTouch"]);

window.$Nav && $Nav.declare('config.responsiveGW',false);

window.$Nav && $Nav.declare('config.pageHideEnabled',false);

window.$Nav && $Nav.declare('config.sslTriggerType','null');
window.$Nav && $Nav.declare('config.sslTriggerRetry',0);

window.$Nav && $Nav.declare('config.doubleCart',false);

window.$Nav && $Nav.declare('config.signInOverride',true);

window.$Nav && $Nav.declare('config.signInTooltip',true);

window.$Nav && $Nav.declare('config.isPrimeMember',false);

window.$Nav && $Nav.declare('config.packardGlowTooltip',false);

window.$Nav && $Nav.declare('config.packardGlowFlyout',false);

window.$Nav && $Nav.declare('config.rightMarginAlignEnabled',true);

window.$Nav && $Nav.declare('config.flyoutAnimation',false);

window.$Nav && $Nav.declare('config.campusActivation','null');

window.$Nav && $Nav.declare('config.primeTooltip',false);

window.$Nav && $Nav.declare('config.primeDay',false);

window.$Nav && $Nav.declare('config.disableBuyItAgain',false);

window.$Nav && $Nav.declare('config.enableCrossShopBiaFlyout',false);

window.$Nav && $Nav.declare('config.pseudoPrimeFirstBrowse',null);

window.$Nav && $Nav.declare('config.csYourAccount',false);

window.$Nav && $Nav.declare('config.cartFlyoutDisabled',true);

window.$Nav && $Nav.declare('config.isTabletBrowser',false);

window.$Nav && $Nav.declare('config.HmenuProximityArea',[200,200,200,200]);

window.$Nav && $Nav.declare('config.HMenuIsProximity',true);

window.$Nav && $Nav.declare('config.isPureAjaxALF',false);

window.$Nav && $Nav.declare('config.accountListFlyoutRedesign',false);

window.$Nav && $Nav.declare('config.navfresh',false);

window.$Nav && $Nav.declare('config.isFreshRegion',false);

if (window.ue && ue.tag) { ue.tag('navbar'); };

window.$Nav && $Nav.declare('config.blackbelt',true);

window.$Nav && $Nav.declare('config.beaconbelt',true);

window.$Nav && $Nav.declare('config.accountList',true);

window.$Nav && $Nav.declare('config.iPadTablet',false);

window.$Nav && $Nav.declare('config.searchapiEndpoint',false);

window.$Nav && $Nav.declare('config.timeline',false);

window.$Nav && $Nav.declare('config.timelineAsinPriceEnabled',false);

window.$Nav && $Nav.declare('config.timelineDeleteEnabled',false);



window.$Nav && $Nav.declare('config.extendedFlyout',false);

window.$Nav && $Nav.declare('config.flyoutCloseDelay',600);

window.$Nav && $Nav.declare('config.pssFlag',0);

window.$Nav && $Nav.declare('config.isPrimeTooltipMigrated',false);

window.$Nav && $Nav.declare('config.hashCustomerAndSessionId','f3d1177acd44e10db7992abb5da0656ee8fd9b21');

window.$Nav && $Nav.declare('config.isExportMode',false);

window.$Nav && $Nav.declare('config.languageCode','en_IN');

window.$Nav && $Nav.declare('config.environmentVFI','AmazonNavigationCards\x2Fdevelopment\x40B6302404350\x2DAL2_aarch64');

window.$Nav && $Nav.declare('config.isHMenuBrowserCacheDisable',false);

window.$Nav && $Nav.declare('config.signInUrlWithRefTag','https\x3A\x2F\x2Fwww.amazon.in\x2Fap\x2Fsignin\x3Fopenid.pape.max_auth_age\x3D0\x26openid.return_to\x3Dhttps\x253A\x252F\x252Fwww.amazon.in\x252Fdp\x252FB0BDK62PDX\x252F\x253F_encoding\x253DUTF8\x2526ref_\x253DnavSignInUrlRefTagPlaceHolder\x26openid.identity\x3Dhttp\x253A\x252F\x252Fspecs.openid.net\x252Fauth\x252F2.0\x252Fidentifier_select\x26openid.assoc_handle\x3Dinflex\x26openid.mode\x3Dcheckid_setup\x26openid.claimed_id\x3Dhttp\x253A\x252F\x252Fspecs.openid.net\x252Fauth\x252F2.0\x252Fidentifier_select\x26openid.ns\x3Dhttp\x253A\x252F\x252Fspecs.openid.net\x252Fauth\x252F2.0');

window.$Nav && $Nav.declare('config.regionalStores',[]);

window.$Nav && $Nav.declare('config.isALFRedesignPT2',false);

window.$Nav && $Nav.declare('config.isNavALFRegistryGiftList',false);

window.$Nav && $Nav.declare('config.marketplaceId','A21TJRUUN4KGV');

window.$Nav && $Nav.declare('config.exportTransitionState',null);

window.$Nav && $Nav.declare('config.enableAeeXopFlyout',false);

window.$Nav && $Nav.declare('config.isPrimeFlyoutMigrationEnabled',false);



window.$Nav && $Nav.declare('config.isAjaxPaymentNotificationMigrated',false);

window.$Nav && $Nav.declare('config.isAjaxPaymentSuppressNotificationMigrated',false);

if (window.P && typeof window.P.declare === "function" && typeof window.P.now === "function") {
  window.P.now('packardGlowIngressJsEnabled').execute(function(glowEnabled) {
    if (!glowEnabled) {
      window.P.declare('packardGlowIngressJsEnabled', true);
    }
  });
  window.P.now('packardGlowStoreName').execute(function(storeName) {
    if (!storeName) {
      window.P.declare('packardGlowStoreName','apple\x2Ddevices');
    }
  });
}

window.$Nav && $Nav.declare('configComplete');

    -->


window.navmet.MainEnd = new Date();


    if (window.ue_t0) {
      window.navmet.push({key:"NavMainEnd",end:+new Date(),begin:window.ue_t0});
    }



        P.when('atf').execute(function() {
            P.now('dpJsAssetsLoadMarker').execute(function(markerObj) {
                if (!markerObj) {
                    P.declare('dpJsAssetsLoadMarker', {});
                    if (window.ue && ue.count) {
                        ue.count("DPJsLoadedAfterATFMarkedCount", 1);
                    }
                }
            });
        });
    


(function(d,b,m){function c(a){return"--private-amznjqshim-"+a}function e(a,l){var b=c(l);d.now(b).execute(c(a+"-"+b)+"-"+f++,function(a){void 0===a&&d.declare(b,!0)})}function h(a){e("markRequested","functionality-requested:"+a)}function g(a){e("completedStage","stage-"+a)}b.goN2Debug||(b.goN2Debug={info:function(){}});"use strict";var f=0,k=b.amznJQ=new function(){this.addLogical=this.addStyle=this.addStyles=this.PLNow=this.windowOnLoad=function(){};this.declareAvailable=function(a){e("declaring",
a)};this.available=function(a,b){a=c(a);h(a);d.when(a,c("jQuery")).execute(c("available-"+a)+"-"+f++,b)};this.onReady=function(a,b){a=c(a);h(a);d.when(a,"a-domready",c("jQuery")).execute(c("onReady-"+a)+"-"+f++,b)};this.onCompletion=function(a,b){var e=c("stage-"+a);d.when(e,c("jQuery")).execute(b)};this.completedStage=function(a){g(a)};this.addPL=function(a){d.when("a-preload").execute(c("Preloader")+"-"+f++,function(b){b.preload(a)})};this.strings={};this.chars={}};d.when("load").execute(c("fail-safe-stages"),
function(){g("amznJQ.theFold");g("amznJQ.criticalFeature")});d.when("jQuery").execute("define amznJQ jQuery",function(a){b.jQuery||(b.jQuery=a);k.jQuery||(k.jQuery=a);e("declaring","jQuery")})})(window.P||window.AmazonUIPageJS,window,document);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('atf').execute(function(){
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/41XVFuR4%2BFL.js?AUIClients/AmazonPopoversAUIShim#in');
});
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('useOffersDebugAssets').execute(function(){
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/51wm4ej5ItL._RC|01gKh-6uxaL.js_.js?AUIClients/InContextDetailPageAssets');
});



var iUrl = "https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg";
(function(){var i=new Image; i.src = iUrl;})();


{"deviceType":"web"}

{"widgetSchema":"dp:widget:","dimensionSchema":"dp:dims:"}


    <!--
    function amz_js_PopWin(url,name,options){
      var ContextWindow = window.open(url,name,options);
      ContextWindow.focus();
        if (P && P.log && (typeof P.log === 'function') ) {
            P.log('DP:SITEJSMI:FATAL', 'fatal', 'dp-site-js-mi');
        }
      return false;
    }
    //-->
    



// =============================================================================
// Function Class: Show/Hide product promotions & special offers link
// =============================================================================

function showElement(id) {
  var elm = document.getElementById(id);
  if (elm) {
    elm.style.visibility = 'visible';
    if (elm.getAttribute('name') == 'heroQuickPromoDiv') {
      elm.style.display = 'block';
    }
  }
}
function hideElement(id) {
  var elm = document.getElementById(id);
  if (elm) {
    elm.style.visibility = 'hidden';
    if (elm.getAttribute('name') == 'heroQuickPromoDiv') {
      elm.style.display = 'none';
    }
  }
}
function showHideElement(h_id, div_id) {
  var hiddenTag = document.getElementById(h_id);
  if (hiddenTag) {
    showElement(div_id);
  } else {
    hideElement(div_id);
  }
}

    if(typeof P === 'object' && typeof P.when === 'function'){
    P.register("isLazyLoadWeblabEnabled", function(){
        var  isWeblabEnabled = 1;
        return isWeblabEnabled;
      });
    }

	window.isBowserFeatureCleanup = 0;
	
var touchDeviceDetected = false;



        P.register('sp.load.critical.js');
         P.now('sp.load.js').execute(function(jsObj){
             if(!jsObj){
                 P.declare('sp.load.js', {});
                 if (window.ue && ue.count) {
                     ue.count("jsLoadedAtStartMarkerCount", 1);
                 }
             }
         });


    var CSMReqs={af:{c:2,p:'atf'},cf:{c:2,p:'cf'},x1:{c:1,p:'x1'},x2:{c:1,p:'x2'}};
    var prioritizeCriticalModules = true;
    function setCSMReq(a){
        a=a.toLowerCase();
        var b=CSMReqs[a];
        if(b&&--b.c==0){
            if(typeof uet=='function'){uet(a); (a == 'af') && (typeof replaceImg === 'function') && replaceImg();};
            if (a == 'af' && prioritizeCriticalModules){
                var featureElements = document.getElementsByClassName('dp-cif');
                if(featureElements.length){
                    var priorityModuleList = ["A","jQuery"];
                    var moduleMap = {
                        'A' : 1,
                        'jQuery' : 1
                    };
                    for (var i = 0; i<featureElements.length; i++){
                        if(featureElements[i].dataset && featureElements[i].dataset.dpCriticalJsModules){
                            var criticalJsModules = JSON.parse(featureElements[i].dataset.dpCriticalJsModules);
                            if(criticalJsModules) {
                                criticalJsModules.forEach(function(criticalJsModule,index){
                                    if (!moduleMap[criticalJsModule]){
                                        moduleMap[criticalJsModule] = 1;
                                        priorityModuleList.push(criticalJsModule);
                                    }
                                });
                            }
                        } else if (typeof featureElements[i].dataset === 'undefined'){
                            var criticalJsModules = JSON.parse(featureElements[i].getAttribute('data-dp-critical-js-modules'));
                            if(criticalJsModules) {
                                criticalJsModules.forEach(function(criticalJsModule,index){
                                    if (!moduleMap[criticalJsModule]){
                                        moduleMap[criticalJsModule] = 1;
                                        priorityModuleList.push(criticalJsModule);
                                    }
                                });
                            }
                        }
                    }

                    if (P && P.setPriority && typeof P.setPriority === 'function' ) {
                        prioritizeCriticalModules = false;
                        P.setPriority(priorityModuleList);
                    }
                }
            }
            if(typeof P != 'undefined'){
                P.register(b.p);
                if(a == 'af') {
                    if(typeof uet === 'function') {
                        uet('bb', 'TwisterAUIWait', {wb: 1});
                    }
                }
            };
        }
    }

    if(typeof P != 'undefined') {
        P.when('A').execute(function(A) {
            if(typeof uet === 'function') {
                uet('af', 'TwisterAUIWait', {wb: 1});
            }
        });
    }

var addlongPoleTag = function(marker,customtag){
    marker=marker.toLowerCase();
    var b=CSMReqs[marker];
    if(b.c == 0){
        if(window.ue && typeof ue.tag === 'function') {
            ue.tag(customtag);
        }
    }
};
;(function(_onerror){
  var old_error_handler = _onerror;
  var attributionMap = {
          "BrowserAddon":{
            logLevel: "ERROR",
            files:[
                /^res:\/\//, 
                /^resource:\/\//, /^chrome:\/\//, 
                /^chrome-extension:\/\//, /^extensions\//, 
                /^file:\/\/\//, /^chrome\/RendererExtensionBindings/, 
                /^plugin\/amazon_com_detail\.js/, 
                /^miscellaneous_bindings/, 
              
                // plugin in china
                /^http.?:\/\/([^\s\.]+\.)*qhimg\.com/,
              
                // plugin in India
                /^http.?:\/\/([^\s\.]+\.)*datafastguru\.info/,

                /^http.?:\/\/sc1\.checkpoint\.com\/dev\/abine\/scripts\/inject\.js/,

                /^http.?:\/\/([^\s\.]+\.)*image2play\.com/,

                /^http.?:\/\/([^\s\.]+\.)*wajam\.com/,

                /^http.?:\/\/([^\s\.]+\.)*ydstatic\.com/,

		/^https?:\/\/([^\s\.]+\.)*googleapis\.com\/ajax\/libs\/jquery/,

		/^https?:\/\/www\.superfish\.com\/ws/,

		/^https?:\/\/api.imideo.com\/v2/,

		/^https?:\/\/minibar.iminent.com/,

		/^https?:\/\/translate.googleusercontent.com/,
	
		/^includes\/helper/
            ]
          }
  };

    function findMatch(f){
	for(var attribution in attributionMap){
	    var i=0;
	    var attributionValue = attributionMap[attribution];
	    var files = attributionValue['files'];
	    while(files[i]){
		if(f.match(files[i])){
	            var exception={};
		    exception.attribution = attribution;
		    if(attributionValue.hasOwnProperty("logLevel")){
			exception.logLevel = attributionValue['logLevel'];	
		    }
		return exception;
           	}
		i++;
	    }
        }
	return null;
    }


    function dpOnErrorOverride(message, file, line, col, error){
     var matchingErrorFound = false;
     if(typeof file == "string"){
        try{
	    var jsException = findMatch(file);
	    if(jsException && typeof jsException === "object"){
                jsException.m =  message;
                jsException.f = file;
                jsException.l = line;
                jsException.c =  "" + (col || "");
                jsException.err =  error;
                jsException.fromOnError = 1;
                jsException.args = arguments;
                if(window.ueLogError){
               	    window.ueLogError(jsException);
		    matchingErrorFound = true;
		    if(ue && ue.count){
		        ue.count("dpJavascriptAffectedErrors", (ue.count("dpJavascriptAffectedErrors") || 0) + 1);
		        ue.count("dpJSError" + jsException.attribution, (ue.count("dpJSError" + jsException.attribution) || 0) + 1);
		    }
	        }
            }
	}catch(exception){
	    if(window.ueLogError){
	        window.ueLogError(exception,{message: "dpOnErrorOverride: error occurred - ", logLevel:"FATAL"});
	    }
	}
    }
	if(!matchingErrorFound){ 
          old_error_handler.apply(this, arguments);
	}
        return false;
    }

      dpOnErrorOverride.skipTrace = 1;
      window.onerror = dpOnErrorOverride;
    })(window.onerror);

var gbEnableTwisterJS  = 0;
var isTwisterPage = 0;
  isTwisterPage = 1;


 

(typeof setCSMReq === 'function') && setCSMReq("x1");

                if(typeof uet === 'function'){uet('bb', 'udpV3atfwait', {wb: 1});};
    if(typeof uet === 'function'){uet('be', 'atfClientSideWaitTimeDesktop', {wb: 1});};



    if(typeof uet === 'function'){uet('af', 'atfClientSideWaitTimeDesktop', {wb: 1});};
  

{"landingImageUrl":"https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg"}

    if(typeof uet === 'function'){uet('be', 'udpV3atfwait', {wb: 1});};
                if(typeof uex === 'function'){uex('ld', 'udpV3atfwait', {wb: 1});};



  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/61%2BVi9Pq%2ByL.js?AUIClients/AmazonDevicesDetailPageLegacyAssets');



    window.isTwisterAUI = 1;
    window.DetailPage ={};
    window.gIsNewTwister = true;
    window.DetailPage.useTwisterJsInitFromDPXPartially = 1;
    P.register('twister-js-init-mason-data', function() {
       var dataToReturn = {"twisterUpdateURLInfo":{"immutableURLPrefix":"/gp/twister/ajaxv2?sid=260-9171825-3931647&ptd=CELLULAR_PHONE&sCac=1&twisterView=glance&pgid=premium_ce_brands_display_on_website&rid=QV6Z0G1VWWN6RDW0ZTK2&auiAjax=1&json=1&dpxAjaxFlag=1&isUDPFlag=1&ee=2&parentAsin=B0BDSPPRN8&enPre=1&dcm=1&udpWeblabState=T1&storeID=apple-devices","immutableParams":{"sid":"260-9171825-3931647","ptd":"CELLULAR_PHONE","json":"1","dpxAjaxFlag":"1","sCac":"1","isUDPFlag":"1","twisterView":"glance","ee":"2","pgid":"premium_ce_brands_display_on_website","rid":"QV6Z0G1VWWN6RDW0ZTK2","parentAsin":"B0BDSPPRN8","enPre":"1","dcm":"1","udpWeblabState":"T1","auiAjax":"1","storeID":"apple-devices"},"mutableParams":{}},"isTablet":0,"parent_asin":"B0BDSPPRN8","contextMetaData":{"parent":{"mTypeSpecificURLParams":{},"elementList":[{"isPrefetchable":0,"divToUpdate":"twister-atf-marker_feature_div"},{"isPrefetchable":0,"divToUpdate":"twister-cf-marker_feature_div"},{"divToUpdate":"andon-cord-pulling_feature_div"},{"divToUpdate":"dvd-rental-badge_feature_div"},{"divToUpdate":"qpe-title-tag_feature_div"},{"divToUpdate":"sopp_feature_div"},{"divToUpdate":"btf-content-1_feature_div"},{"divToUpdate":"btf-content-2_feature_div"},{"divToUpdate":"btf-content-3_feature_div"},{"divToUpdate":"btf-content-4_feature_div"},{"divToUpdate":"btf-content-5_feature_div"},{"divToUpdate":"btf-content-6_feature_div"},{"divToUpdate":"btf-content-7_feature_div"},{"divToUpdate":"btf-content-8_feature_div"},{"divToUpdate":"btf-content-9_feature_div"},{"divToUpdate":"btf-content-10_feature_div"},{"divToUpdate":"btf-content-11_feature_div"},{"divToUpdate":"btf-content-12_feature_div"},{"divToUpdate":"btf-content-13_feature_div"},{"divToUpdate":"btf-content-14_feature_div"},{"divToUpdate":"btf-content-15_feature_div"},{"divToUpdate":"btf-content-16_feature_div"},{"divToUpdate":"btf-content-17_feature_div"},{"divToUpdate":"btf-content-18_feature_div"},{"divToUpdate":"btf-content-19_feature_div"},{"divToUpdate":"btf-content-20_feature_div"},{"divToUpdate":"btf-content-21_feature_div"},{"divToUpdate":"btf-content-22_feature_div"},{"divToUpdate":"btf-content-23_feature_div"},{"divToUpdate":"btf-content-24_feature_div"},{"divToUpdate":"btf-content-25_feature_div"},{"divToUpdate":"btf-content-26_feature_div"},{"divToUpdate":"btf-content-27_feature_div"},{"divToUpdate":"btf-content-28_feature_div"},{"divToUpdate":"btf-content-29_feature_div"},{"divToUpdate":"btf-content-30_feature_div"},{"divToUpdate":"btf-content-31_feature_div"},{"divToUpdate":"btf-content-32_feature_div"},{"divToUpdate":"btf-content-33_feature_div"},{"divToUpdate":"btf-content-34_feature_div"},{"divToUpdate":"btf-content-35_feature_div"},{"divToUpdate":"btf-content-36_feature_div"},{"divToUpdate":"btf-content-37_feature_div"},{"divToUpdate":"btf-content-38_feature_div"},{"divToUpdate":"btf-content-39_feature_div"},{"divToUpdate":"btf-content-40_feature_div"},{"divToUpdate":"btf-content-41_feature_div"},{"divToUpdate":"btf-content-42_feature_div"},{"divToUpdate":"btf-content-43_feature_div"},{"divToUpdate":"btf-content-44_feature_div"},{"divToUpdate":"btf-content-45_feature_div"},{"divToUpdate":"btf-content-46_feature_div"},{"divToUpdate":"btf-content-47_feature_div"},{"divToUpdate":"btf-content-48_feature_div"},{"divToUpdate":"btf-content-49_feature_div"},{"divToUpdate":"btf-content-50_feature_div"},{"divToUpdate":"btf-content-51_feature_div"},{"divToUpdate":"btf-content-52_feature_div"},{"divToUpdate":"btf-content-53_feature_div"},{"divToUpdate":"btf-content-54_feature_div"},{"divToUpdate":"btf-content-55_feature_div"},{"divToUpdate":"btf-content-56_feature_div"},{"divToUpdate":"btf-content-57_feature_div"},{"divToUpdate":"btf-content-58_feature_div"},{"divToUpdate":"btf-content-59_feature_div"},{"divToUpdate":"btf-content-60_feature_div"},{"divToUpdate":"btf-content-61_feature_div"},{"divToUpdate":"btf-content-62_feature_div"},{"divToUpdate":"btf-content-63_feature_div"},{"divToUpdate":"btf-content-64_feature_div"},{"divToUpdate":"btf-content-65_feature_div"},{"divToUpdate":"dpx-product-details_feature_div"},{"divToUpdate":"dpx-post-purchase-witb-btf_feature_div"},{"loadingBar":1,"isPrefetchable":0,"divToUpdate":"ask-btf_feature_div"},{"isPrefetchable":0,"divToUpdate":"twister-log-metrics_feature_div"},{"isPrefetchable":0,"divToUpdate":"dp-fast-track-logger_feature_div"}]},"master":{"mTypeSpecificURLParams":{}},"partial":{"mTypeSpecificURLParams":{}},"full":{"mTypeSpecificURLParams":{"psc":1},"elementList":[{"isPrefetchable":0,"divToUpdate":"twister-atf-marker_feature_div"},{"isPrefetchable":0,"divToUpdate":"twister-cf-marker_feature_div"},{"divToUpdate":"andon-cord-pulling_feature_div"},{"divToUpdate":"dvd-rental-badge_feature_div"},{"divToUpdate":"qpe-title-tag_feature_div"},{"divToUpdate":"sopp_feature_div"},{"divToUpdate":"btf-content-1_feature_div"},{"divToUpdate":"btf-content-2_feature_div"},{"divToUpdate":"btf-content-3_feature_div"},{"divToUpdate":"btf-content-4_feature_div"},{"divToUpdate":"btf-content-5_feature_div"},{"divToUpdate":"btf-content-6_feature_div"},{"divToUpdate":"btf-content-7_feature_div"},{"divToUpdate":"btf-content-8_feature_div"},{"divToUpdate":"btf-content-9_feature_div"},{"divToUpdate":"btf-content-10_feature_div"},{"divToUpdate":"btf-content-11_feature_div"},{"divToUpdate":"btf-content-12_feature_div"},{"divToUpdate":"btf-content-13_feature_div"},{"divToUpdate":"btf-content-14_feature_div"},{"divToUpdate":"btf-content-15_feature_div"},{"divToUpdate":"btf-content-16_feature_div"},{"divToUpdate":"btf-content-17_feature_div"},{"divToUpdate":"btf-content-18_feature_div"},{"divToUpdate":"btf-content-19_feature_div"},{"divToUpdate":"btf-content-20_feature_div"},{"divToUpdate":"btf-content-21_feature_div"},{"divToUpdate":"btf-content-22_feature_div"},{"divToUpdate":"btf-content-23_feature_div"},{"divToUpdate":"btf-content-24_feature_div"},{"divToUpdate":"btf-content-25_feature_div"},{"divToUpdate":"btf-content-26_feature_div"},{"divToUpdate":"btf-content-27_feature_div"},{"divToUpdate":"btf-content-28_feature_div"},{"divToUpdate":"btf-content-29_feature_div"},{"divToUpdate":"btf-content-30_feature_div"},{"divToUpdate":"btf-content-31_feature_div"},{"divToUpdate":"btf-content-32_feature_div"},{"divToUpdate":"btf-content-33_feature_div"},{"divToUpdate":"btf-content-34_feature_div"},{"divToUpdate":"btf-content-35_feature_div"},{"divToUpdate":"btf-content-36_feature_div"},{"divToUpdate":"btf-content-37_feature_div"},{"divToUpdate":"btf-content-38_feature_div"},{"divToUpdate":"btf-content-39_feature_div"},{"divToUpdate":"btf-content-40_feature_div"},{"divToUpdate":"btf-content-41_feature_div"},{"divToUpdate":"btf-content-42_feature_div"},{"divToUpdate":"btf-content-43_feature_div"},{"divToUpdate":"btf-content-44_feature_div"},{"divToUpdate":"btf-content-45_feature_div"},{"divToUpdate":"btf-content-46_feature_div"},{"divToUpdate":"btf-content-47_feature_div"},{"divToUpdate":"btf-content-48_feature_div"},{"divToUpdate":"btf-content-49_feature_div"},{"divToUpdate":"btf-content-50_feature_div"},{"divToUpdate":"btf-content-51_feature_div"},{"divToUpdate":"btf-content-52_feature_div"},{"divToUpdate":"btf-content-53_feature_div"},{"divToUpdate":"btf-content-54_feature_div"},{"divToUpdate":"btf-content-55_feature_div"},{"divToUpdate":"btf-content-56_feature_div"},{"divToUpdate":"btf-content-57_feature_div"},{"divToUpdate":"btf-content-58_feature_div"},{"divToUpdate":"btf-content-59_feature_div"},{"divToUpdate":"btf-content-60_feature_div"},{"divToUpdate":"btf-content-61_feature_div"},{"divToUpdate":"btf-content-62_feature_div"},{"divToUpdate":"btf-content-63_feature_div"},{"divToUpdate":"btf-content-64_feature_div"},{"divToUpdate":"btf-content-65_feature_div"},{"divToUpdate":"dpx-product-details_feature_div"},{"divToUpdate":"dpx-post-purchase-witb-btf_feature_div"},{"loadingBar":1,"isPrefetchable":0,"divToUpdate":"ask-btf_feature_div"},{"isPrefetchable":0,"divToUpdate":"twister-log-metrics_feature_div"},{"isPrefetchable":0,"divToUpdate":"dp-fast-track-logger_feature_div"}]}}}; //selectively not escaping this.
       return dataToReturn;
    });


{"landingAsin":"B0BDK62PDX","isUrlRefreshEnable":"1"}



  if(typeof P !== "undefined" && typeof P.when === "function"){
    P.when('cf').execute(function() {
          P.when('navbarJS-jQuery').execute(function(){});
  P.when('finderFitsJS').execute(function(){});
  P.when('twister').execute(function(){});
  P.when('swfjs').execute(function(){});

    });
  }


if(window.mix_csa){window.mix_csa('[cel_widget_id="apple-brand-showcase_DetailPage_2"]', '#CardInstanceIW8JLq3M7m7N2jBeOMr1AQ')('mark', 'bb')}

if(window.uet){window.uet('bb','apple-brand-showcase_DetailPage_2',{wb: 1})}

if(window.mix_csa){window.mix_csa('[cel_widget_id="apple-brand-showcase_DetailPage_2"]', '#CardInstanceIW8JLq3M7m7N2jBeOMr1AQ')('mark', 'be')}

if(window.uet){window.uet('be','apple-brand-showcase_DetailPage_2',{wb: 1})}

if(window.mixTimeout){window.mixTimeout('apple-brand-showcase', 'CardInstanceIW8JLq3M7m7N2jBeOMr1AQ', 90000)};
P.when('mix:@amzn/mix.client-runtime', 'mix:apple-brand-showcase__F5hVHhL-').execute(function (runtime, cardModule) {runtime.registerCardFactory('CardInstanceIW8JLq3M7m7N2jBeOMr1AQ', cardModule).then(function(){if(window.mix_csa){window.mix_csa('[cel_widget_id="apple-brand-showcase_DetailPage_2"]', '#CardInstanceIW8JLq3M7m7N2jBeOMr1AQ')('mark', 'functional')}if(window.uex){window.uex('ld','apple-brand-showcase_DetailPage_2',{wb: 1})}});});


P.load.js('https://images-eu.ssl-images-amazon.com/images/I/21VKNNet92L.js?xcp');


 ue && typeof ue.count === 'function' && ue.count("OIG.csm.common.rendered", 1); 

(function(f) {var _np=(window.P._namespace("DetailPageTellAFriendTemplates"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
            P.when('jQuery','SocialShareWidgetAUI').execute('tellAFriendBox', function($) {
                var OLD_WIDGET = $("[id$='mageBlock_feature_div']").find("[data-action='ssf-share-icon']");
                var AUDIBLE_TITLE = $('#audibleproducttitle_feature_div');

                if(OLD_WIDGET.length) { OLD_WIDGET.remove() }

                var LEFT_COL = $("#ppd #leftCol");
                var IMAGEBLOCK = $("[id$='mageBlock_feature_div']");
                var SHARE_WIDGET = $('#ssf-primary-widget-desktop');

                if(LEFT_COL.css('position') !== "sticky") {
                    IMAGEBLOCK.css('position','relative');
                }

                if (AUDIBLE_TITLE.length) {
                    AUDIBLE_TITLE.prepend(SHARE_WIDGET);
                } else {
                    IMAGEBLOCK.prepend(SHARE_WIDGET);
                }

                P.when('SocialShareWidgetAUI').execute(function(SocialShareWidget){
                    SocialShareWidget.init();
                    if (AUDIBLE_TITLE.length) {
                        SHARE_WIDGET.find('.ssf-background').toggleClass('ssf-background ssf-background-float');
                        SHARE_WIDGET.find('.ssf-share-btn').toggleClass('ssf-share-btn ssf-share-btn-float');
                    }
                });
            });
        }));


  P.when('A', 'a-popover').execute('a-popover-count', function (A) {
    A.on('a:popover:afterShow:fod-cx-learnMore-popover-fodApi', function() {
      ue.count("fodcxLearnmore.popover.fodApi", 1);
    });
  });



P.when("A", "a-expander", "a-truncate", "ready").execute(function(A, expander, truncate) {
    A.on("a:accordion:buybox-accordion:select", function(data) {
        // Change active accordion header price color to red
        A.$("#buyBoxAccordion").find(".accordion-header span.header-price").
            removeClass("a-color-price").addClass("a-color-secondary");
        A.$(data.selectedRow.$row).find(".accordion-header span.header-price").
            removeClass("a-color-secondary").addClass("a-color-price");

        // Change active accordion header prime logo to opaque
        A.$("#buyBoxAccordion").find(".accordion-header i.header-prime-logo").
            addClass("opacity-50");
        A.$(data.selectedRow.$row).find(".accordion-header i.header-prime-logo").
            removeClass("opacity-50");

        //initialize accordion expander
        expander.initializeExpanders();
        if (document.getElementById('truncatedConditionNoteContainer') != null) {
            const truncatedTitleContainer = '#truncatedConditionNoteContainer';
            truncate.manualTruncate(truncatedTitleContainer);
            truncateConditionNote();
        }
    });

    // Record metrics for clicking usedAccordionRow
    A.on("a:accordion:buybox-accordion:usedAccordionRow:select", function(data) {
        var ue = window.ue;
        if (ue && typeof ue.count === 'function') {
            ue.count('dpOffers:buybox:mobile:usedAccordionOpen', (ue.count('dpOffers:buybox:mobile:usedAccordionOpen') || 0) + 1);
        }
    });
});


{"hasValidBuyBackOffers":true,"buyBackMobile":"mobile","vcRequestId":"260-9171825-3931647_1742004132389","memoryVariantExperimentalWeblabAllocation":"T1","dynamicDropDownActionsWeblabAllocation":"T1","dpSessionId":"260-9171825-3931647","chooseButtonText":"Choose phone to exchange","marketPlaceId":"A21TJRUUN4KGV","isbbgOfferAvailable":false,"categoryIdentifier":"1805560031","warrantyWeblabTreatment":"Off","subCategoryName":"1805560031","sellerId":"AJ6SIZC8YQDZX","noOfQuestions":3,"buybackOffersForCategoryURL":"/marketplaces/A21TJRUUN4KGV/taxonomies/buyback/offers-for-category?encryptedProductMerchantId=AJ6SIZC8YQDZX&productPrice=54900.00&productSubcategory=10700907&rbnHierarchyNodes=%5B%221805560031%22%5D","selectOldProductDetailsToolTipText":"Select exchange item details","delayedExchangeWeblabAllocation":"C","gepEligibleCustomer":false,"isB2BExchange":false,"brand":"Apple","buyBoxOfferBuyingPrice":"54900.0","deviceType":"web","memoryVariantGatingWeblabAllocation":"T1","crossCategoryOfferAvailable":"false","aapiCSRFToken":"1@gySGInX5v2DN6/LU3ecyKPjkbweYo87M/+fAJFXurSwJAAAAAQAAAABn1N+kcmF3AAAAABVX8CwXqz42z+J7i/ABqA==@NLD_PURF0I","buyBackPostalCode":"110043","buyBackCategory":"mobile","asin":"B0BDK62PDX","executingFeature":"accordion","currencyCode":"INR","productPrice":54900}

{"shouldUseNatc":true}

(function(f) {var _np=(window.P._namespace("DetailPageBuyBoxTemplate"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
        P.now().execute('dp-mark-atc',function(){
            if (typeof window.markFeatureRender === 'function') {
                window.markFeatureRender('atc',{isInteractive:false});
            }
        });
    }));


    P.when("A", "jQuery").execute(function(A, $) {
        $("#selectQuantity [name='quantity'], #mobileQuantityDropDown").live("change", function (event) {

            if (event.updateDeliveryBlockOnQuantityChange) {
                return;
            }
            event.updateDeliveryBlockOnQuantityChange = 1;

            // "#buybox" is included in this list because if there is no accordion row, then it is a single-offer layout
            // possible id's may include "usedAccordionRow", "newAccordionRow_1", "newAccordionRow_2"
            var accordionRow = $(this).closest('[id$="AccordionRow"], #buybox, [id^="newAccordionRow"]');

            var quantity = $(this).val();
            var asin = accordionRow.find("#deliveryBlockSelectAsin").val();
            var merchantId = accordionRow.find("#deliveryBlockSelectMerchant").val();

            if (!asin || !merchantId) {
                return;
            }

            var params = [];

            params.push("asin=" + asin);
            params.push("quantity=" + quantity);
            params.push("exclusiveMerchantId=" + merchantId);
            params.push("merchantId=" + merchantId);
            params.push("clientId=retailwebsite");
            params.push("deviceType=web");
            params.push("showFeatures=deliveryBlock");
            params.push("ie=UTF8");
            params.push("experienceId=deliveryBlockQuantityRefreshAjaxExperience");

            // Weblab gated addition of Locale and OfferListingId to QuantityRefresh request
            var addLParamsToQuantityRefreshWeblabFlag = false;
            if (addLParamsToQuantityRefreshWeblabFlag) {
                var locale = accordionRow.find("#deliveryBlockSelectLocale").val();
                var offerListingId = accordionRow.find("#deliveryBlockSelectOfferListingId").val();

                // Only add language param if locale is non-null
                if (locale) {
                    params.push("language=" + locale);
                }
                // Only add offerListingId param if value is non-null
                if (offerListingId) {
                    params.push("offerListingId=" + offerListingId);
                }
            }


            $.ajax({
               type: "GET",
               url: "/gp/product/ajax?",
               contentType: 'application/x-www-form-urlencoded;charset=utf-8',
               data: params.join('&'),
               accordionRow: accordionRow,
               dataType: "html",
               success: function(objResponse) {
                // add weblab gating?
                   if (objResponse != null && objResponse != "") {
                        // parse objResponse and extract it into DB Small and DB Large

                         // The specific string to split the HTML content
                         // Split the HTML content using the separator
                         var htmlContentArray = objResponse.split("##split##");

                         var objResponseDbLarge = htmlContentArray[0];
                         var objResponseDbSmall = htmlContentArray[1];

                         // null checks
                         if (objResponseDbLarge != null && objResponseDbLarge != ""){
                             accordionRow.find("#deliveryBlockMessage").replaceWith(objResponseDbLarge);
                         }
                         if (objResponseDbSmall != null && objResponseDbSmall != ""){
                             accordionRow.find("#deliveryBlockSmallMessage").replaceWith(objResponseDbSmall);
                         }
                   }
               }
            });
            return;
        });
    });


(function(f) {var _np=(window.P._namespace("DetailPageWarrantyAssets"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
    P.when('A','mbb').execute(function(A){A.trigger('mbb:loaded',1,{bi:{a:"B0BDK62PDX"},w:[{a:"B0BF4XGNBV"}],cId:"",dt:"web"},'mbb__tsn');});
}));

{"shouldUseNatc":true}

(function(f) {var _np=(window.P._namespace("DetailPageBuyBoxTemplate"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
        P.now().execute('dp-mark-atc',function(){
            if (typeof window.markFeatureRender === 'function') {
                window.markFeatureRender('atc',{isInteractive:false});
            }
        });
    }));

{"heroName":""}

{}

{"turboWeblab":"RCX_CHECKOUT_TURBO_DESKTOP_NONPRIME_87784","holdbackSecondaryPanelsWeblab":"","strings":{"TURBO_CLOSE_TEXT":"Close.","TURBO_CHECKOUT_HEADER":"Buy now: Apple iPhone 14 (128 GB) - Blue","TURBO_LOADING_TEXT":"Loading your order summary"},"additionalWeblabs":"{\"PAX_CHECKOUT_BUY_NOW_GC_TANGO_1121297\":\"\",\"PAX_CHECKOUT_BUY_NOW_TO_TANGO_REMOVE_LEGACY_PIPELINE_PARAMETER_1125072\":\"\",\"PAX_CHECKOUT_BUY_NOW_AMP_TANGO_DESKTOP_1118500\":\"\",\"PAX_CHECKOUT_VAS_ENABLE_BUY_NOW_TANGO_1165794\":\"\",\"PAX_CHECKOUT_BUY_NOW_TO_TANGO_PARAMETER_ELIGIBILITY_REVERSE_DESKTOP_BATCH2_1114232\":\"\",\"UPMT_CHECKOUT_BUY_NOW_GIFT_TANGO_DESKTOP_1044576\":\"\",\"PAX_CHECKOUT_BUY_NOW_TO_TANGO_DESKTOP_EXPERIMENT_NON_PRIME_1088576\":\"\",\"PAX_CHECKOUT_BUY_NOW_UFO_TANGO_DESKTOP_1118473\":\"\",\"F2_MERCH_CHECKOUT_BUY_NOW_TO_TANGO_MEASUREMENT_1122788\":\"\",\"PAX_CHECKOUT_BUY_NOW_TO_TANGO_PARAMETER_ELIGIBILITY_REVERSE_DESKTOP_BATCH3_1146761\":\"\",\"PAX_CHECKOUT_BUY_NOW_TO_TANGO_PARAMETER_ELIGIBILITY_REVERSE_DESKTOP_BATCH4_1146762\":\"\",\"PAX_CHECKOUT_BUY_NOW_TO_TANGO_CUSTOMER_ELIGIBILITY_CHECK_REMOVAL_1134797\":\"\",\"RCX_CHECKOUT_DISABLE_TURBO_FOR_NPA_EXPERIMENT_543201\":\"\",\"PAX_CHECKOUT_BUY_NOW_TO_TANGO_PARAMETER_ELIGIBILITY_REVERSE_DESKTOP_1089853\":\"\",\"PAX_TURBO_INITIATE_MIGRATION_DESKTOP_NON_PRIME_986684\":\"\"}","inputs":{"verificationSessionID":"260-9171825-3931647","a":"B0BDK62PDX","quantity":"1","oid":"","incentivizedCart":"","addressId":""},"configurations":{"isSignInEnabled":true,"initiateSelector":"#buy-now-button","prefetchEnabled":true},"isPrimeCustomer":false,"buttonID":"buy-now","eligibility":{"isEligible":false},"turboWeblabTreatment":"C","isTangoCheckoutEligible":true,"timeout":"5000"}

(function(f) {var _np=(window.P._namespace("TurboClientDetailPage"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
        P.when('cf').execute(function executeTurboAssetsLoadTriggerEvent() {
            P.now('turbo-checkout-assets-load-trigger').execute(function(assetsLoadTrigger) {
                if (assetsLoadTrigger) {
                    logTurboCounter("AssetTriggerDedupe");
                    return;
                }

                try {
                    P.declare('turbo-checkout-assets-load-trigger', true);
                    logTurboCounter('AssetTrigger');
                } catch (e) {
                    logTurboCounter('AssetTriggerException');
                }
            });

            function logTurboCounter(name) {
                var counter = 'turboCheckout' + name;
                if (window.ue && window.ue.count) {
                    window.ue.count(counter, 1);
                }
            }
        });
    }));

(function(f) {var _np=(window.P._namespace("AudibleDetailPageFeatureTemplates"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
    P.when('A').execute(function(A) {
        var $ = A.$;

        A.declarative('aud_title_gift_purchase_action', 'click', function(event) {
            if(event && event.targetTag === "input") {
                if ($(document).data('buttonPressed') !== 'true') {
                    $(document).data('buttonPressed', 'true');
                } else {
                    event.$event.preventDefault();
                }
            }
        });
    });
}));

(function(f) {var _np=(window.P._namespace("ListsDPXJavaScriptBlock"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
window.atwlEarlyClick = function (e) {
    try {
        e.preventDefault();
        if (window.atwlLoaded) {
            return; //if JS is loaded then we can ignore the early click case
        }
        if (window.ue) {
            window.ue.count("Lists:Dpx:atwlEarlyClick:Handled", 1);
        }
        var ADD_TO_LIST_FROM_DETAIL_PAGE_VENDOR_ID = "website.wishlist.detail.add.earlyclick";
        var csrfTokenForm = document.querySelector('input[id="lists-sp-csrf-form-token"]');
        var csrfToken = csrfTokenForm ? csrfTokenForm.value : "";

        var paramMap = {
            "asin": "B0BDK62PDX",
            "vendorId": ADD_TO_LIST_FROM_DETAIL_PAGE_VENDOR_ID,
            "isAjax": "false"
        }

        var url = "/hz/wishlist/additemtolist?ie=UTF8";

        for (var param in paramMap) {
            url += "&" + param + "=" + paramMap[param];
        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, false);
        xhr.setRequestHeader("anti-csrftoken-a2z", csrfToken);
        xhr.onload = function() {
            window.location = xhr.responseURL; //Needed to force a redirect; not supported on IE!
        }
        xhr.send();
    } catch (exception) {
        if (window.ueLogError) {
            window.ueLogError(exception, {
                logLevel: 'FATAL',
                attribution: 'ListsDPXJavaScriptBlock',
                message: 'atwlEarlyClick failed with exception'
            });
        }
    }
};
}));

(function(f) {var _np=(window.P._namespace("ListsDPXJavaScriptBlock"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
    'use strict';

    P.when('A').execute(function(A){
        A.declarative('atwlDropdownClickDeclarative', 'click', function(e){                  
          window.wlArrowEv = e;
          e.$event.preventDefault();
          (function () {
             
             if (window.P && window.atwlLoaded) {
                 window.P.when('A').execute(function (A) {A.trigger('wl-drop-down', window.wlArrowEv);})
                 return;
             }
              
             window.atwlEc = true;
             
             var b = document.getElementById('add-to-wishlist-button-group');
             
             var s = document.getElementById('atwl-dd-spinner-holder');
             
             if (!(s && b)) {
                 return;
             }
             s.classList.remove('a-hidden');
             s.style.position = 'absolute';
             s.style.width = b.clientWidth + 'px';
             s.style.zIndex = 1;
             return;
          })();
          return false;
        });
    });
}));

(function(f) {var _np=(window.P._namespace("ListsDPXJavaScriptBlock"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
    'use strict';

    P.now('A').execute('atwl-a11y-override', function(A){
        
        var addToWishListButtonGroup = document.getElementById('add-to-wishlist-button-group');
        
        if (addToWishListButtonGroup) {
            addToWishListButtonGroup.removeAttribute("role");
        }
        var wishListMainButtonElem = document.getElementById('wishListMainButton');
        if (wishListMainButtonElem) {
            var wishListMainButton = wishListMainButtonElem.querySelector('input');
            if (wishListMainButton) {
                wishListMainButton.setAttribute('role', 'button');
                wishListMainButton.setAttribute('tabindex', '0');
            }
        }
        var wishListDropDownElem = document.getElementById('wishListDropDown');
        if (wishListDropDownElem) {
            var wishListDropDown = wishListDropDownElem.querySelector('input');
            if (wishListDropDown) {
                wishListDropDown.setAttribute('role', 'button');
                wishListDropDown.setAttribute('aria-haspopup', 'dialog');
                wishListDropDown.setAttribute('tabindex', '0');
            }
        }
    });
}));

{"showInlineLink":false,"hzPopover":true,"wishlistButtonId":"add-to-wishlist-button","dropDownHtml":"","inlineJsFix":true,"wishlistButtonSubmitId":"add-to-wishlist-button-submit","maxAjaxFailureCount":"3","asin":"B0BDK62PDX","dropdownAriaLabel":"Select a list from the drop-down","closeButtonAriaLabel":"Close"}

{"formId":"addToCart","showWishListDropDown":false,"wishlistPopoverWidth":206,"isAddToWishListDropDownAuiEnabled":true,"showPopover":false}

(function(f) {var _np=(window.P._namespace("ListsDPXJavaScriptBlock"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
    'use strict';

    
    window.P.now('atwl-ready').execute(function (atwlModule) {
        var isRegistered = (typeof atwlModule !== 'undefined');
        if (!isRegistered) {
            window.P.register('atwl-ready');
        }
    });
}));

(function(f) {var _np=(window.P._namespace("ListsDPXJavaScriptBlock"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
        "use strict";

        window.P.now('atwl-cf').execute(function (module) {
            var isRegistered = (typeof module !== 'undefined');
            if (!isRegistered) {
                window.P.register('atwl-cf');
            }
        });
    }));

(function(f) {var _np=(window.P._namespace("DetailPageBuyBoxTemplate"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
        P.now().execute('dp-mark-od',function(){
            if (typeof window.markFeatureRender === 'function') {
                window.markFeatureRender('od',{isInteractive:false});
            }
        });
    }));


    P.when("A", "load").execute("aod-assets-loaded", function(A){
        function logAssetsNotLoaded() {
            if (window.ueLogError) {
                var customError = { message: 'Failed to load AOD assets for WDG: premium_ce_brands_display_on_website, Device: web' };
                var additionalInfo = {
                    logLevel : 'ERROR',
                    attribution : 'aod_assets_not_loaded'
                };
                ueLogError (customError, additionalInfo);
            }
            if (window.ue && window.ue.count) {
                window.ue.count("aod-assets-not-loaded", 1);
            }
        }

        function verifyAssetsLoaded() {
            var assetsLoadedPageState = A.state('aod:assetsLoaded');
            var logAssetsNotLoadedState = A.state('aod:logAssetsNotLoaded');

            if((assetsLoadedPageState == null || !assetsLoadedPageState.isAodAssetsLoaded)
                && (logAssetsNotLoadedState == null || !logAssetsNotLoadedState.isAodAssetsNotLoadedLogged)) {
                A.state('aod:logAssetsNotLoaded', {isAodAssetsNotLoadedLogged: true});
                logAssetsNotLoaded();
            }
        }

        setTimeout(verifyAssetsLoaded, 50000)
    });


{"shouldRemoveCaption":false}

{"clickstreamNexusMetricsConfig":{"actionType":"DISCOVERY","productId":"B0BDK62PDX","eventOwner":"vsemetrics_playercards","schemaId":"clickstream.CustomerEvent.4","producerId":"vsemetrics_playercards","eventType":"IVEVideoView"},"clientPrefix":"mbsoftlines","ccvDisclosure":"","closedCaptionsConfig":{"captionsOnTexts":{"en":"English (Automated)"},"captionsOffText":"Captions off","languageToLabelTexts":{"English":"English"}},"sushiMetricsConfig":{"isRobot":false,"clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","sessionId":"260-9171825-3931647","refMarkers":"mbSoftlines_ref","placementContext":"ImageBlock","marketplaceId":"A21TJRUUN4KGV","isInternal":false,"endpoint":"https://unagi-eu.amazon.com/1/events/com.amazon.eel.vse.metrics.prod.events.test","requestId":"P2X0N3H0BYN2ZF3EF6A3","pageAsin":"B0BDK62PDX","customerId":"0","sessionType":1},"mimeType":"application/x-mpegURL","nexusMetricsConfig":{"isInternal":false,"widgetMetricsSchemaId":"vse.VSECardsEvents.9","clientId":"VSE-IN","videoAsinList":"","weblabIds":"","pageAsin":"B0BDK62PDX","eventSource":"Player","videoAsin":"","producerId":"vsemetrics_playercards","refMarkers":"mbSoftlines_ref","placementContext":"ImageBlock","playerTSMMetricsSchemaId":"vse.VSECardsPlayerEvents.9"},"videoHeight":0,"videoWidth":0,"videoUrl":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/80b3085c-9309-47a6-9dba-090ec4919eb5/default.jobtemplate.hls.m3u8","metricsEmissionMethod":"nexus","imageUrl":"https://m.media-amazon.com/images/I/31HYKc6vHiL.SX522_.jpg","awaConfig":{"useUpNextComponent":false,"clickstreamNexusMetricsConfig":{"actionType":"DISCOVERY","productId":"B0BDK62PDX","eventOwner":"vsemetrics_playercards","schemaId":"clickstream.CustomerEvent.4","producerId":"vsemetrics_playercards","eventType":"IVEVideoView"},"initialVideo":"","shouldPreload":true,"enableClickBasedAttribution":false,"isChromelessPlayer":false,"closedCaptionsConfig":{"captionsOnTexts":{"en":"English (Automated)"},"captionsOffText":"Captions off","languageToLabelTexts":{"English":"English"}},"enableDynamicBlur":false,"showPlayerPlayButton":false,"isVideoImmersivePlayer":false,"metricsEmissionMethod":"nexus","skipInitialFocus":false,"playerSkin":"none","disabledViewIds":["replayHint"],"includeEarnsComissionDisclosure":false,"customerId":"0","containerId":"mbsoftlines-player-66b1ad65-0815-4b22-856e-aa14ad6296d1","allowCrossOrigin":false,"requestMetadata":{"marketplaceId":"A21TJRUUN4KGV","clientId":"VSE-IN","method":"ImageBlock","requestId":"P2X0N3H0BYN2ZF3EF6A3","pageAsin":"","sessionId":"260-9171825-3931647"},"shouldLoop":false,"shouldDisableControls":false,"alwaysSetInitialVideo":false,"showPlayerCloseButton":false,"clientPrefix":"","useAutoplayFallback":false,"sushiMetricsConfig":{"isRobot":false,"clientId":"VSE-IN","videoAsinList":"","weblabIds":"","eventSource":"Player","sessionId":"260-9171825-3931647","refMarkers":"mbSoftlines_ref","placementContext":"ImageBlock","marketplaceId":"A21TJRUUN4KGV","isInternal":false,"endpoint":"https://unagi-eu.amazon.com/1/events/com.amazon.eel.vse.metrics.prod.events.test","requestId":"P2X0N3H0BYN2ZF3EF6A3","pageAsin":"B0BDK62PDX","customerId":"0","sessionType":1},"ospLinkCode":"","showPosterImage":true,"languageCode":"en","languageLocalization":{"play":"Play","volumeLevel":"Volume Level","subtitles":"Subtitles","volumeSlider":"Volume Slider","fullscreen":"Fullscreen","scrubberBar":"Scrubber bar","mute":"Mute","unmute":"Unmute","pause":"Pause","captions":"Captions","nonfullscreen":"Non-Fullscreen"},"version":"","nexusMetricsConfig":{"isInternal":false,"widgetMetricsSchemaId":"vse.VSECardsEvents.9","clientId":"VSE-IN","videoAsinList":"","weblabIds":"","pageAsin":"B0BDK62PDX","eventSource":"Player","videoAsin":"","producerId":"vsemetrics_playercards","refMarkers":"mbSoftlines_ref","placementContext":"ImageBlock","playerTSMMetricsSchemaId":"vse.VSECardsPlayerEvents.9"},"shouldStartMuted":false,"airyVersion":"VideoJS","languagePreferenceStrings":{},"enableInactiveFocus":true,"isReactFactory":false,"osaInstrumentationConfig":{"schemaId":"csa.VideoInteractions.2","producerId":"vsemetrics_csa_instrumentation"},"enableDelphiAttribution":false,"includeReportWidget":false,"shouldAutoplay":false},"needPlayerFactory":false,"isMobile":false}


        var markFeatureRenderExecuted = false;
        function markFeatureRenderForImageBlock() {
            if (!markFeatureRenderExecuted) {
                markFeatureRenderExecuted = true;
                P.now().execute('dp-mark-imageblock',function(){
                    var options = {
                        hasComponents: true,
                        components: [{
                            name: 'mainimage'
                        }]
                    };
                    if (typeof window.markFeatureRender === 'function') {
                        window.markFeatureRender('imageblock',options);
                    }
                });
            }
        }
    


    var mainImgContainer = document.getElementById("main-image-container");
    var landingImage = document.getElementById("landingImage");
    var imgWrapperDiv = document.getElementById("imgTagWrapperId");
    
    var containerWidth = mainImgContainer.offsetWidth;
    var holderRatio = 0.84;
    var shouldAutoPlay = false;
    var containerHeight = containerWidth/holderRatio;
    containerHeight = Math.min(containerHeight, 700);

    var dynamicImageMaxHeight = 679 ;
    var dynamicImageMaxWidth = 679 ;
    
    var aspectRatio = dynamicImageMaxWidth/dynamicImageMaxHeight;

    var imageMaxHeight = containerHeight;
    var imageMaxWidth = containerWidth;

    if(!shouldAutoPlay && !false) {
        imageMaxHeight = Math.min(imageMaxHeight, dynamicImageMaxHeight);
        imageMaxWidth = Math.min(imageMaxWidth, dynamicImageMaxWidth);
    }

    
    var useImageBlockLeftColCentering = false;
    var rightMargin = 40;

    if(typeof useImageBlockLeftColCentering !== "undefined" && useImageBlockLeftColCentering){
        mainImgContainer.style.marginRight = rightMargin + "px";
    }
    mainImgContainer.style.height = containerHeight + "px";
    
    var imageMaxWidthBasedOnHeight = imageMaxHeight * aspectRatio;
    var imageMaxHeightBasedOnWidth = imageMaxWidth / aspectRatio;
    imageMaxHeight = Math.min(imageMaxHeight, imageMaxHeightBasedOnWidth);
    imageMaxWidth = Math.min(imageMaxWidth, imageMaxWidthBasedOnHeight);

    if(imgWrapperDiv){
        imgWrapperDiv.style.height = containerHeight + "px";
    }

    if(landingImage){
        landingImage.style.maxHeight = imageMaxHeight + "px";
        landingImage.style.maxWidth = imageMaxWidth + "px";
    }

    if(shouldAutoPlay){
        if(landingImage){
            landingImage.style.height = imageMaxHeight + "px";
            landingImage.style.width  = imageMaxWidth + "px";
        }
    }




P.when('A').register("ImageBlockATF", function(A){
    var data = {
                'enableS2WithoutS1': false,
                'notShowVideoCount': false,
                'colorImages': { 'initial': [{"hiRes":"https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/31VjlrbE3bL._SX38_SY50_CR,0,0,38,50_.jpg","large":"https://m.media-amazon.com/images/I/31VjlrbE3bL.jpg","main":{"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX342_.jpg":[342,342],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX385_.jpg":[385,385],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg":[679,679]},"variant":"MAIN","lowRes":null,"shoppableScene":null,"feedbackMetadata":""},{"hiRes":"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/21edR26hwVL._SX38_SY50_CR,0,0,38,50_.jpg","large":"https://m.media-amazon.com/images/I/21edR26hwVL.jpg","main":{"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX342_.jpg":[342,342],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX385_.jpg":[385,385],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX679_.jpg":[679,679]},"variant":"PT01","lowRes":null,"shoppableScene":null,"feedbackMetadata":""},{"hiRes":"https://m.media-amazon.com/images/I/71RFKttvm9L._SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/31g2XUsBxwL._SX38_SY50_CR,0,0,38,50_.jpg","large":"https://m.media-amazon.com/images/I/31g2XUsBxwL.jpg","main":{"https://m.media-amazon.com/images/I/71RFKttvm9L._SX342_.jpg":[342,342],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX385_.jpg":[385,385],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX679_.jpg":[679,679]},"variant":"PT02","lowRes":null,"shoppableScene":null,"feedbackMetadata":""},{"hiRes":"https://m.media-amazon.com/images/I/61UR88veVzL._SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/3121hxxq2WL._SX38_SY50_CR,0,0,38,50_.jpg","large":"https://m.media-amazon.com/images/I/3121hxxq2WL.jpg","main":{"https://m.media-amazon.com/images/I/61UR88veVzL._SX342_.jpg":[342,342],"https://m.media-amazon.com/images/I/61UR88veVzL._SX385_.jpg":[385,385],"https://m.media-amazon.com/images/I/61UR88veVzL._SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/61UR88veVzL._SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/61UR88veVzL._SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/61UR88veVzL._SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/61UR88veVzL._SX679_.jpg":[679,679]},"variant":"PT03","lowRes":null,"shoppableScene":null,"feedbackMetadata":""},{"hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":[342,342],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":[385,385],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":[679,679]},"variant":"PT04","lowRes":null,"shoppableScene":null,"feedbackMetadata":""},{"hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":[342,342],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":[385,385],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":[425,425],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":[466,466],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":[522,522],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":[569,569],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":[679,679]},"variant":"PT05","lowRes":null,"shoppableScene":null,"feedbackMetadata":""}]},
                'colorToAsin': {'initial': {}},
                'holderRatio': 0.84,
                'holderMaxHeight': 700,
                'heroImage': {'initial': []},
                'heroVideo': {'initial': []},
                'spin360ColorData': {'initial': {}},
                'spin360ColorEnabled': {'initial': 0},
                'spin360ConfigEnabled': false,
                'spin360LazyLoadEnabled': false,
                'dimensionIngressEnabled' : false,
                'dimensionIngressThumbURL' : {'initial': ''},
                'dimensionIngressAtfData' : {'initial': {}},
                'playVideoInImmersiveView':true,
                'useTabbedImmersiveView':true,
                'totalVideoCount':'2',
                'videoIngressATFSlateThumbURL':'https://m.media-amazon.com/images/I/31HYKc6vHiL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg',
                'mediaTypeCount':'2',
                'atfEnhancedHoverOverlay' : true,
                'winningAsin': '',
                'weblabs' : {},
                'aibExp3Layout' : 1,
                'aibRuleName' : 'frank-powered',
                'acEnabled' : false,
                'dp60VideoPosition': 2,
                'dp60VariantList': '',
                'dp60VideoThumb': 'https://m.media-amazon.com/images/I/31VjlrbE3bL._SX38_SY50_CR,0,0,38,50_SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg',
                'dp60MainImage': 'https://m.media-amazon.com/images/I/61bK6PMOC3L._SX342_.jpg',
                'imageBlockRenderingStartTime': Date.now(),
                'additionalNumberOfImageAlts': 0,
                'shoppableSceneWeblabEnabled': false,
                'unrolledImageBlockTreatment': 0,
                'additionalNumberOfImageAlts': 0,
                'inlineZoomExperimentTreatment': 0,
                'interactiveCallJSPEnabled': false,
                'unrolledImageBlockLazyLoadEnabled': false,
                'collapsibleThumbnails': false,
                'desktopCollapsibleThumbnailsExperience': 'T1',
                'dp60InLastPositionUnrolledImageBlock': false,
                'tableOfContentsIconImage': 'https://m.media-amazon.com/images/G/01/books-detail-page-table-of-contents/blackback/ToC.png',
                
                'airyConfig' :A.$.parseJSON('{"jsUrl":"https://m.media-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/js/airy.skin._CB485981857_.js","cssUrl":"https://m.media-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/css/beacon._CB485971591_.css","swfUrl":"https://m.media-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/flash/AiryBasicRenderer._CB485925577_.swf","foresterMetadataParams":{"marketplaceId":"A21TJRUUN4KGV","method":"PremiumCeBrands.ImageBlock","requestId":"QV6Z0G1VWWN6RDW0ZTK2","session":"260-9171825-3931647","client":"Dpx"}}')
                
                };
    A.trigger('P.AboveTheFold'); // trigger ATF event.
    return data;
});


{"enableFullScreenByDefault":false,"clickstreamNexusMetricsConfig":{"actionType":"DISCOVERY","productId":"B0BDK62PDX","eventOwner":"vsemetrics_playercards","schemaId":"clickstream.CustomerEvent.4","producerId":"vsemetrics_playercards","eventType":"IVEVideoView"},"videoReferenceId":"VideoCreatorPortal:9063b0194d634869951e6403267c103c","contentId":"B0BDK62PDX","ccvDisclosure":"","closedCaptionsConfig":{"captionsOnTexts":{"en":"English (Automated)"},"captionsOffText":"Captions off","languageToLabelTexts":{"English":"English"}},"mimeType":"application/x-mpegURL","vendorCode":"137GO","videoHeight":480,"videoWidth":854,"initialClosedCaptions":"en,https://m.media-amazon.com/images/S/vse-vms-closed-captions-artifact-eu-west-1-prod/closedCaptions/9976dce1-7d87-4947-a171-0930761d11f0.vtt","videoUrl":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/80b3085c-9309-47a6-9dba-090ec4919eb5/default.jobtemplate.hls.m3u8","metricsEmissionMethod":"nexus","imageUrl":"https://m.media-amazon.com/images/I/31HYKc6vHiL.jpg","isMobile":false,"showHotspots":false,"aciContentId":"amzn1.vse.video.12c6553a19274bff8ac304bf336102a8","creatorType":"Vendor","clientPrefix":"detailpage-imageblock","productAsin":"B0BDK62PDX","labelDetails":{"labelWeblabTreatment":"","labelWeblabName":"","labelType":"","tooltipSelector":"","labelName":"","showLabel":false},"sushiMetricsConfig":{"isRobot":false,"clientId":"VSE-IN","videoAsinList":"","weblabIds":":","eventSource":"Player","sessionId":"260-9171825-3931647","refMarkers":"null_ref","placementContext":"desktop_web.ImageBlock.vse_ib_iv","marketplaceId":"A21TJRUUN4KGV","isInternal":false,"endpoint":"https://unagi-eu.amazon.com/1/events/com.amazon.eel.vse.metrics.prod.events.test","requestId":"QV6Z0G1VWWN6RDW0ZTK2","pageAsin":"B0BDK62PDX","customerId":"0","sessionType":1},"videoTitle":"Apple iPhone 14","vendorName":"Apple India BLR WL","nexusMetricsConfig":{"isInternal":false,"widgetMetricsSchemaId":"vse.VSECardsEvents.9","clientId":"VSE-IN","videoAsinList":"","weblabIds":":","pageAsin":"B0BDK62PDX","eventSource":"Player","videoAsin":"12c6553a19274bff8ac304bf336102a8","producerId":"vsemetrics_playercards","refMarkers":"null_ref","placementContext":"desktop_web.ImageBlock.vse_ib_iv","playerTSMMetricsSchemaId":"vse.VSECardsPlayerEvents.9"},"awaConfig":{"useUpNextComponent":false,"clickstreamNexusMetricsConfig":{"actionType":"DISCOVERY","productId":"B0BDK62PDX","eventOwner":"vsemetrics_playercards","schemaId":"clickstream.CustomerEvent.4","producerId":"vsemetrics_playercards","eventType":"IVEVideoView"},"initialVideo":"12c6553a19274bff8ac304bf336102a8","shouldPreload":true,"enableClickBasedAttribution":false,"isChromelessPlayer":false,"closedCaptionsConfig":{"captionsOnTexts":{"en":"English (Automated)"},"captionsOffText":"Captions off","languageToLabelTexts":{"English":"English"}},"enableDynamicBlur":false,"showPlayerPlayButton":false,"isVideoImmersivePlayer":false,"metricsEmissionMethod":"nexus","skipInitialFocus":false,"playerSkin":"none","disabledViewIds":["replayHint"],"includeEarnsComissionDisclosure":false,"customerId":"0","containerId":"detailpage-imageblock-player-fb19b987-8ed3-4fdc-8aee-4e6edac97faf","allowCrossOrigin":false,"requestMetadata":{"marketplaceId":"A21TJRUUN4KGV","clientId":"VSE-IN","method":"desktop_web.ImageBlock.vse_ib_iv","requestId":"QV6Z0G1VWWN6RDW0ZTK2","pageAsin":"","sessionId":"260-9171825-3931647"},"shouldLoop":false,"shouldDisableControls":false,"alwaysSetInitialVideo":true,"showPlayerCloseButton":false,"clientPrefix":"detailpage-imageblock","useAutoplayFallback":false,"sushiMetricsConfig":{"isRobot":false,"clientId":"VSE-IN","videoAsinList":"","weblabIds":":","eventSource":"Player","sessionId":"260-9171825-3931647","refMarkers":"null_ref","placementContext":"desktop_web.ImageBlock.vse_ib_iv","marketplaceId":"A21TJRUUN4KGV","isInternal":false,"endpoint":"https://unagi-eu.amazon.com/1/events/com.amazon.eel.vse.metrics.prod.events.test","requestId":"QV6Z0G1VWWN6RDW0ZTK2","pageAsin":"B0BDK62PDX","customerId":"0","sessionType":1},"ospLinkCode":"vib","showPosterImage":true,"languageCode":"en","languageLocalization":{"play":"Play","volumeLevel":"Volume Level","subtitles":"Subtitles","volumeSlider":"Volume Slider","fullscreen":"Fullscreen","scrubberBar":"Scrubber bar","mute":"Mute","unmute":"Unmute","pause":"Pause","captions":"Captions","nonfullscreen":"Non-Fullscreen"},"version":"","nexusMetricsConfig":{"isInternal":false,"widgetMetricsSchemaId":"vse.VSECardsEvents.9","clientId":"VSE-IN","videoAsinList":"","weblabIds":":","pageAsin":"B0BDK62PDX","eventSource":"Player","videoAsin":"12c6553a19274bff8ac304bf336102a8","producerId":"vsemetrics_playercards","refMarkers":"null_ref","placementContext":"desktop_web.ImageBlock.vse_ib_iv","playerTSMMetricsSchemaId":"vse.VSECardsPlayerEvents.9"},"shouldStartMuted":false,"airyVersion":"VideoJS","languagePreferenceStrings":{},"enableInactiveFocus":true,"isReactFactory":false,"osaInstrumentationConfig":{"schemaId":"csa.VideoInteractions.2","producerId":"vsemetrics_csa_instrumentation"},"enableDelphiAttribution":false,"includeReportWidget":false,"shouldAutoplay":false}}

{"image":"image_url","shareButton":"SHARE","clientPrefix":"detailpage-imageblock","description":"video_description","id":"detailpage-imageblock-social-share-61129fd6-64e5-4bf5-bfa3-8e8d606c8502","title":"video_title","pageLevelData":{"deviceTypeRef":"dt","clientRef":"lb"},"shareWithFriendsPrompt":"Share this video with friends","url":"https://www.amazon.com/gp/product/B0BDK62PDX"}

{"socialShareModel":{"image":"image_url","shareButton":"SHARE","clientPrefix":"detailpage-imageblock","description":"video_description","id":"detailpage-imageblock-social-share-61129fd6-64e5-4bf5-bfa3-8e8d606c8502","title":"video_title","pageLevelData":{"deviceTypeRef":"dt","clientRef":"lb"},"shareWithFriendsPrompt":"Share this video with friends","url":"https://www.amazon.com/gp/product/B0BDK62PDX"},"customerReviewConfig":{"showCustomerReviewMetadata":false},"ccvDisclosureConfig":{"id":"detailpage-imageblock-ccv-disclosure-61129fd6-64e5-4bf5-bfa3-8e8d606c8502"},"showUploadDate":false,"defaultEntityId":"amzn1.account.AEWJU7DAVAFQQL4MUODBTSRFL7PA","videoVoteConfig":{"experimentWeblab":"","requestId":"QV6Z0G1VWWN6RDW0ZTK2","actionPrefix":"ImageBlock","sessionId":"260-9171825-3931647","page":"DetailPage","placementContext":"vse_ib_iv","forceTreatment":false},"entityType":"customer","entityId":"amzn1.account.AEWJU7DAVAFQQL4MUODBTSRFL7PA","nexusMetricsConfig":{"isInternal":false,"widgetMetricsSchemaId":"vse.VSECardsEvents.9","clientId":"","videoAsinList":"","weblabIds":"","pageAsin":"B0BDK62PDX","eventSource":"ImageBlock","videoAsin":"","producerId":"vsemetrics_playercards","refMarkers":"","placementContext":"desktop_web.ImageBlock.vse_ib_iv","playerTSMMetricsSchemaId":""}}

(function(f) {var _np=(window.P._namespace("DetailPageImageBlockTemplate"));if(_np.guardFatal){_np.guardFatal(f)(_np);}else{f(_np);}}(function(P) {
    P.now().execute('dp-mark-imageblock',function(){
        var options = {
            hasComponents: true,
            components: [{
                name: 'thumbnail'
            }]
        };
        if (typeof window.markFeatureRender === 'function') {
            window.markFeatureRender('imageblock',options);
        }
    });
}));

if(window.mix_csa){window.mix_csa('[cel_widget_id="buffet-high-priority-disclaimers-card_DetailPage_0"]', '#CardInstanceCmNypIAOq1uIPX-3KRaLMA')('mark', 'bb')}

if(window.uet){window.uet('bb','buffet-high-priority-disclaimers-card_DetailPage_0',{wb: 1})}

if(window.mix_csa){window.mix_csa('[cel_widget_id="buffet-high-priority-disclaimers-card_DetailPage_0"]', '#CardInstanceCmNypIAOq1uIPX-3KRaLMA')('mark', 'be')}

if(window.uet){window.uet('be','buffet-high-priority-disclaimers-card_DetailPage_0',{wb: 1})}

if(window.mixTimeout){window.mixTimeout('buffet-high-priority-disclaimers-card', 'CardInstanceCmNypIAOq1uIPX-3KRaLMA', 90000)};
P.when('mix:@amzn/mix.client-runtime', 'mix:buffet-high-priority-disclaimers-card__jkiYVVmg').execute(function (runtime, cardModule) {runtime.registerCardFactory('CardInstanceCmNypIAOq1uIPX-3KRaLMA', cardModule).then(function(){if(window.mix_csa){window.mix_csa('[cel_widget_id="buffet-high-priority-disclaimers-card_DetailPage_0"]', '#CardInstanceCmNypIAOq1uIPX-3KRaLMA')('mark', 'functional')}if(window.uex){window.uex('ld','buffet-high-priority-disclaimers-card_DetailPage_0',{wb: 1})}});});


P.when('ready').execute(function(){P.load.js('https://images-eu.ssl-images-amazon.com/images/I/41cIVdXdLNL.js?xcp');
});


                    
                    var dpAcrHasRegisteredArcLinkClickAction;
                    P.when('A', 'ready').execute(function(A) {
                        if (dpAcrHasRegisteredArcLinkClickAction !== true) {
                            dpAcrHasRegisteredArcLinkClickAction = true;
                            A.declarative(
                                'acrLink-click-metrics', 'click',
                                { "allowLinkDefault": true },
                                function (event) {
                                    if (window.ue) {
                                        ue.count("acrLinkClickCount", (ue.count("acrLinkClickCount") || 0) + 1);
                                    }
                                }
                            );
                        }
                    });
                


            P.when('A', 'cf').execute(function(A) {
                A.declarative('acrStarsLink-click-metrics', 'click', { "allowLinkDefault" : true },  function(event){
                    if(window.ue) {
                        ue.count("acrStarsLinkWithPopoverClickCount", (ue.count("acrStarsLinkWithPopoverClickCount") || 0) + 1);
                    }
                });
            });
        

{"acAsin":"B0BDK62PDX"}

{"isInternal":false,"isRobot":false,"showFaceout":true,"merchantId":"AJ6SIZC8YQDZX","availableBadges":"","loggedIn":false,"asin":"B0BDK62PDX","showBadge":false,"availableFaceouts":"TK_BOUGHT"}


  P.when("A", "jQuery").execute(function(A, $) {
    $("#selectQuantity [name='quantity'], #mobileQuantityDropDown").live("change", function (event) {
      if (event.updatePromiseBadgeOnQuantityChange) {
          return;
      }

      event.updatePromiseBadgeOnQuantityChange = 1;

      // "#buybox" is included in this list because if there is no accordion row, then it is a single-offer layout
      // possible id's may include "usedAccordionRow", "newAccordionRow_1", "newAccordionRow_2"
      var accordionRow = $(this).closest('[id$="AccordionRow"], #buybox, [id^="newAccordionRow"]');

      var quantity = $(this).val();
      // This asin and merchantId will support use case in US marketplace.
      // DDM will be required here to support the feature in IN marketplace
      var asin = accordionRow.find("#deliveryBlockSelectAsin").val();
      var merchantId = accordionRow.find("#deliveryBlockSelectMerchant").val();

      if (!asin) {
        asin = accordionRow.find("#ftSelectAsin").val();
      }
      if (!merchantId) {
        merchantId = accordionRow.find("#ftSelectMerchant").val();
      }

      if (!asin || !quantity) {
        return;
      }

      var params = [];
      params.push("asin=" + asin);
      params.push("quantity=" + quantity);
      params.push("exclusiveMerchantId=" + merchantId);
      params.push("merchantId=" + merchantId);
      params.push("clientId=retailwebsite");
      params.push("deviceType=web");
      params.push("showFeatures=priceBlockMs3Mir");
      params.push("ie=UTF8");
      params.push("experienceId=priceBadgingQuantityRefreshAjaxExperience");

      // Weblab gated addition of Locale to QuantityRefresh request
      var addLocaleToQuantityRefreshWeblabFlag = false;
      if (addLocaleToQuantityRefreshWeblabFlag) {
        var locale = accordionRow.find("#deliveryBlockSelectLocale").val();

        // Only add language param if locale is non-null
        if (locale) {
            params.push("language=" + locale);
        }
      }

      $.ajax({
        type: "GET",
        url: "/gp/product/ajax?",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        data: params.join('&'),
        accordionRow: accordionRow,
        dataType: "html",
        success: function (objResponse) {
          if (objResponse != null && objResponse != "") {
            accordionRow.find("#priceBadging_feature_div").replaceWith(objResponse);

            // If it's a single buying option layout or the new buy box quantity changed, update data outside the buy box
            if ($("#buyBoxAccordion, #buybox").children().length === 1 || accordionRow.attr("id").match(/^newAccordionRow/)) {
              $("#price #priceblock_ourprice_row #ourprice_shippingmessage #priceBadging_feature_div").replaceWith(objResponse);
              $("#newOfferShippingMessage_feature_div #ourPrice_availability #priceBadging_feature_div").replaceWith(objResponse);
              $("#price #priceblock_saleprice_row #saleprice_shippingmessage #priceBadging_feature_div").replaceWith(objResponse);
              $("#price #priceblock_dealprice_row #dealprice_shippingmessage #priceBadging_feature_div").replaceWith(objResponse);
            }
          }
        }
      });

      return;
    });
  });




    P.when('A', 'ready').execute(function (A) {
        var $ = A.$;

        function createNexusEvent(impressionSchema) {
            let attributesMap = {
                buyingOption : impressionSchema.buyingOptionName,
                buyingOptionIndex : String(impressionSchema.buyingOptionIndex),
                robot : "false",
                issuancePlacementShortNm : impressionSchema.issuancePlacementShortNm
            }
            // Event payload for Nexus should contain all the attributes present in schema 'odysseus.Impression'
            let event = {
                sessionId : impressionSchema.sessionId,
                impressionId : impressionSchema.impressionId,
                requestId : impressionSchema.requestId,
                marketplaceId : impressionSchema.marketplaceId,
                attributes : attributesMap,
                lob: window.ue_lob
            };

            return event;
        }

        function publishNexusEvent(asin, index, issuanceOcfSelectorId, requestId){
            let impressionSchema = A.state("impressionSchema_" + requestId + "-" + asin + ":" + index);
            if(impressionSchema) {
                let event = createNexusEvent(impressionSchema);
                ue.event(event, impressionSchema.nexusProducerId, impressionSchema.nexusSchemaId);
                $(issuanceOcfSelectorId).attr('visited', "true");
            }
        }

        // Publish impression metrics to Nexus upon toggling non-landing buying options
        A.on('a:accordion:buybox-accordion:select', function (data){
            let buyingOptionIndex = A.$(data.selectedRow.$row).index();
            let issuanceOcfSelector = '.issuance_ocf_selector#issuanceOcfAccordianRowName_' + buyingOptionIndex;
            if(issuanceOcfSelector) {
                let isVisited = $(issuanceOcfSelector).attr("visited");
                if (isVisited === 'false' && window.ue) {
                    let asin = $(issuanceOcfSelector).attr("asin");
                    let requestId = $(issuanceOcfSelector).attr("requestId");
                    publishNexusEvent(asin, buyingOptionIndex, issuanceOcfSelector, requestId)
                }
            }
        });

        // Publish impression metrics to Nexus upon switching tab
        A.on('a:tabs:offerDisplayGroup_tabs:select', function (data){
            let visitedAccordionRow = $("#issuancePriceblockAmabot_feature_div > .offersConsistencyEnabled").children().filter(function () {
                return $(this).css('display') === 'block';
            });
            let issuanceOcfSelector = $(visitedAccordionRow).find(".issuance_ocf_selector");
            if(issuanceOcfSelector) {
                let isVisited = $(issuanceOcfSelector).attr("visited");
                if (isVisited === 'false' && window.ue) {
                    let asin = $(issuanceOcfSelector).attr("asin");
                    let requestId = $(issuanceOcfSelector).attr("requestId");
                    let buyingOptionIndex = $(issuanceOcfSelector).attr('id').split('_')[1];
                    publishNexusEvent(asin, buyingOptionIndex, issuanceOcfSelector, requestId)
                }
            }
        });
    });



        P.when('A', 'jQuery').execute(function(A, $) {
            var vsxDesktopDivider = $('#vsx-desktop-divider');
            vsxDesktopDivider.removeClass('aok-hidden');
        });
    

{"isInternal":false,"backButtonText":"Back","PAY_ON_DELIVERY":{"isEligible":true},"isRobot":false,"merchantId":"AJ6SIZC8YQDZX","buyingOptionIndex":0,"crossMarkUrl":"https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/cross._CB579894589_.png","RETURNS_POLICY":{"fullReturnPolicyString":"Read Full Return Policy","backButtonText":"Back","moreDetailString":"More details"},"asin":"B0BDK62PDX","numOfShownIcons":8,"skeletonLoadingEnabled":false,"remoteAddress":"27.255.166.167"}


    P.when("A", "load").execute("aod-assets-loaded", function(A){
        function logAssetsNotLoaded() {
            if (window.ueLogError) {
                var customError = { message: 'Failed to load AOD assets for WDG: premium_ce_brands_display_on_website, Device: web' };
                var additionalInfo = {
                    logLevel : 'ERROR',
                    attribution : 'aod_assets_not_loaded'
                };
                ueLogError (customError, additionalInfo);
            }
            if (window.ue && window.ue.count) {
                window.ue.count("aod-assets-not-loaded", 1);
            }
        }

        function verifyAssetsLoaded() {
            var assetsLoadedPageState = A.state('aod:assetsLoaded');
            var logAssetsNotLoadedState = A.state('aod:logAssetsNotLoaded');

            if((assetsLoadedPageState == null || !assetsLoadedPageState.isAodAssetsLoaded)
                && (logAssetsNotLoadedState == null || !logAssetsNotLoadedState.isAodAssetsNotLoadedLogged)) {
                A.state('aod:logAssetsNotLoaded', {isAodAssetsNotLoadedLogged: true});
                logAssetsNotLoaded();
            }
        }

        setTimeout(verifyAssetsLoaded, 50000)
    });



    P.register('twister-plus-desktop-twister-mark-render', function(){
        if (typeof window.markFeatureRender === 'function') {
            var nonSingletonDimensionLength =2;
            var options = {};
            if (nonSingletonDimensionLength === 0) {
                options.isInteractive = false;
            } else {
                var twisterComponent = "twister-plus-new-desktopTwister";
                options.hasComponents = true;
                options.components = [{
                    name: twisterComponent
                }];
            }
            window.markFeatureRender('twister', options);
        }
    });


{"updateCSMPageTypeId":true}


        P.register('twister-js-init-dpx-data', function() {
            var dataToReturn = {

                "isTabletWeb" : false,

                "dimensionSelectionData" : [{"isSelected":1,"isRequired":0},{"isSelected":1,"isRequired":0}],
                  
                "ajaxUrlParams" : "&productTypeDefinition=CELLULAR_PHONE&productGroupId=premium_ce_brands_display_on_website&parentAsin=B0BDSPPRN8&isPrime=0&deviceOs=unrecognized",
                 

                "updateDivLists" : {
                    "full"    : [{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyButtonLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindlePurchaseRestrictionMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookDeviceIdentifier_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksKindleALCPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookUnsupportedCorMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unavailableMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleCountDownDeals_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"copActualPriceMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToEbookCartINUS_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksVatMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"comicsUnlimitedALCMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksDealBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxPaymentMethods_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxJPYouPay_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealOffer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBulkBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBulkQuantityDiscounts_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookBuyboxPromotions_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksReadNowButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"webReaderReadFreeBook_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"webReaderReadNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoAwareness_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookSellerOfRecord_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksSor_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"blindReaderEdition_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"title_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hushpuppyPromo_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxPaymentPreference_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyButtonLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindlePurchaseRestrictionMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookDeviceIdentifier_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksKindleALCPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookUnsupportedCorMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unavailableMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleCountDownDeals_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"copActualPriceMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToEbookCartINUS_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksVatMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"comicsUnlimitedALCMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksDealBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxPaymentMethods_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxJPYouPay_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealOffer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBulkBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBulkQuantityDiscounts_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookBuyboxPromotions_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksReadNowButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"webReaderReadFreeBook_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"webReaderReadNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoAwareness_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookSellerOfRecord_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksSor_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"blindReaderEdition_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"title_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hushpuppyPromo_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxPaymentPreference_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promiseBasedBadgeInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPromiseInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"couponsInBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonGlobal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ehf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsShippingAndIfdInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promotionMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"layawayBuyboxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyButtonLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindlePurchaseRestrictionMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookDeviceIdentifier_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksKindleALCPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookUnsupportedCorMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unavailableMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleCountDownDeals_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"copActualPriceMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToEbookCartINUS_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksVatMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"comicsUnlimitedALCMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksDealBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxPaymentMethods_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxJPYouPay_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealOffer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBulkBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBulkQuantityDiscounts_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookBuyboxPromotions_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksReadNowButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"webReaderReadFreeBook_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"webReaderReadNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoAwareness_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookSellerOfRecord_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksSor_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"blindReaderEdition_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"title_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hushpuppyPromo_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxPaymentPreference_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"KindleALCLegacy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpFastTrack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dynamicDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpInviteButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"KindleALCLegacy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideAccordionHeader2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideAccordionHeader2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideAccordionHeader2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideAccordionHeader2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unifiedLocation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellBtf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellAmabot_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"detailPageGifting_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"oneClick_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"preAddToCartFramework_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asg_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dsvDigitalBuyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityLayoutLow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"desktop_productInsurance_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"mbb_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"scheduledDelivery_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soldByThirdParty_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"businessPricing_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bbop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityLayoutHigh_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tradeInInstantSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hbaLabel_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularPackaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSellerCertifications_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"merchConfigure_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"gestalt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soldByThirdPartyRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreBadgePopoverInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alternativeProductMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addOnMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"invitePlatform_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealProgress_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"KindleALCLegacy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"legacyBorrowButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"limber_buybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"wff_desktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"legacyBorrowButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"prrBorrow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kuBorrow_desktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"legacyBorrowButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"prrUpsell_desktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kuUpsell_desktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"priceBlock-outsideOfForm_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promiseBasedBadgeInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPromiseInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"couponsInBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonGlobal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ehf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsShippingAndIfdInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promotionMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"layawayBuyboxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviatedHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleRentals_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"priceBlock-outsideOfForm_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsShippingAndIfdInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipsFromSoldByAbbreviatedPSUFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeSavingsUpsellCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"renewedAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"renewedAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"renewedAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"renewedAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addonItems_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessCodeWarning_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantity_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"glowContextualIngressPt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpFastTrack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dynamicDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"usedBuyBoxConditionNote_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"usedAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipsFromSoldByMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"replenishmentFrequencyInformation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsSubscribeButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ssbWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"replenishmentFrequency_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsQuantity_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsDeliveryDate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsUpsellMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsCoupon_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsShippingMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"coupons_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryDateLabel_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsCaptionAndDiscountPillAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freshAddToGroceryList_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freshBottleReturnMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freshShipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almInviteList_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almIneligibleBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almAddToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almAvailability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almGlowContextualIngressPtDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almGlowContextualIngressPt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almLogoAndDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freshShipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almLogoAndDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"superSaverBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"originalPackagingMessageInsideAccordionHeader2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"returnPolicyInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"productSupportInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideAccordionHeader2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"newAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"mbbLD_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealAmazonDevicesPreRegistration_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealAppAccess_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealRedemption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealQuantity_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"peDealOfTheDayAvailability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"glowContextualIngressPt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deepCheckPromiseInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPromiseInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpFastTrack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealTradeInstantSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"installmentPaymentCheckbox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealPrimeAccess_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"layawayDealsMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealTimer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealProgress_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"claimBar_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealState_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealHeaderStateMessageFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealsHeaderRegulatoryDepositFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealsHeaderInstallmentMessageFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealsAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promiseBasedBadgeInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPromiseInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"couponsInBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonGlobal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ehf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsShippingAndIfdInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promotionMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"layawayBuyboxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"superSaverBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"mbbLD_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealAmazonDevicesPreRegistration_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealAppAccess_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealRedemption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealQuantity_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"peDealOfTheDayAvailability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"glowContextualIngressPt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deepCheckPromiseInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPromiseInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpFastTrack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealTradeInstantSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"installmentPaymentCheckbox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealPrimeAccess_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"layawayDealsMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealTimer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealProgress_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"claimBar_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealState_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealHeaderStateMessageFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealsHeaderRegulatoryDepositFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealsHeaderInstallmentMessageFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealsAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpInviteButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"marsAccessoryUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpFastTrack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dynamicDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpInviteButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"giftingModule_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"giftingModule_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"giftingModule_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"giftingModule_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"giftingModule_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"giftingModule_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unifiedLocation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellBtf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellAmabot_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"detailPageGifting_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"oneClick_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"preAddToCartFramework_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asg_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dsvDigitalBuyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityLayoutLow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"desktop_productInsurance_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"mbb_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"scheduledDelivery_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soldByThirdParty_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"businessPricing_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bbop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityLayoutHigh_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tradeInInstantSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hbaLabel_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularPackaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSellerCertifications_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"merchConfigure_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"gestalt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soldByThirdPartyRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreBadgePopoverInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alternativeProductMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addOnMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"invitePlatform_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealProgress_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"renewedSingleOfferCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleRentalsAccordionRowHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleFreeTrialAccordionRowHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleALCAccordionRowHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularReturnPolicy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almInviteList_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almIneligibleBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupBuyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupAddToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupQuantity_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupAvailability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almPickupInstructions_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupInstruction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupLocationIngress_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unifiedLocation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellBtf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellAmabot_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"detailPageGifting_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"oneClick_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"preAddToCartFramework_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asg_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dsvDigitalBuyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityLayoutLow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"desktop_productInsurance_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"mbb_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"scheduledDelivery_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soldByThirdParty_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"businessPricing_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bbop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityLayoutHigh_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tradeInInstantSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hbaLabel_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularPackaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSellerCertifications_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"merchConfigure_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"gestalt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soldByThirdPartyRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreBadgePopoverInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alternativeProductMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addOnMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"invitePlatform_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealProgress_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"renewedSingleOfferCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asvCOP_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asvAmountPicker_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asvCOP_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asvAmountPicker_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freshAddToGroceryList_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freshBottleReturnMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almShipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almInviteList_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almIneligibleBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almAddToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almAvailability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almGlowContextualIngressPtDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almGlowContextualIngressPt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almLogoAndDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"priceBlock-outsideOfForm_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalDashLowProminence_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToRegistry_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToWishlist_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"marsAccessoryUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalDashHighProminence_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"superSaverBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsBadgeInsidePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"volumeAwarePricingPriceBlockMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"rebates_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almPrimeSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pep_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"points_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vatMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoMessagingDiscountValue_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"omnibusPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"taxInclusiveMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"volumeAwarePricingTableLoader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bundleLTBSSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonDevicesCustomPriceMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"installmentPaymentPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"oneTimePaymentPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almTaxExclusivePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealTimer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freeReturns_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freeShippingPriceBadging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPriceBadging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsIfdInsidePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"jewelryPriceBreakup_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"basisPriceLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalDashLowProminence_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToRegistry_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToWishlist_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"marsAccessoryUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalDashHighProminence_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"acdSpinnner_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"secureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"acdAddToCartButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"acdValidationErrors_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"acdOrderSummary_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalDashLowProminenceAccordion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToRegistry_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToWishlistAccordion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellAmabotAccordion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellAccordion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"marsAccessoryUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalDashHighProminenceAccordion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unqualifiedBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"partialStateBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almOutOfStockBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"outOfStockBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"installmentPayment_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"businessPricing_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeExclusiveBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"yurekaBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"nlx_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBundleEligibility_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"serviceOptionsIN_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"questServices_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vendorActivationOptions_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoPriceBlockMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonGlobal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportsTaxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityPricingTableSummaryInPriceBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tradeInPriceBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"inemi_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vaipsCombinedDeviceAndPlanExperience_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"delightPricingBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoPriceBlockMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonGlobal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportsTaxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityPricingTableSummaryInPriceBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tradeInPriceBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"superSaverBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsBadgeInsidePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"volumeAwarePricingPriceBlockMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"rebates_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almPrimeSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pep_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"points_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"inemi_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vatMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoMessagingDiscountValue_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"volumeAwarePricingTableLoader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bundleLTBSSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonDevicesCustomPriceMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"installmentPaymentPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"oneTimePaymentPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almTaxExclusivePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freeReturns_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freeShippingPriceBadging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPriceBadging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"loyaltyRewardPointsRedemption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsIfdInsidePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"jewelryPriceBreakup_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"omnibusPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"delightPricingBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"taxInclusiveMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"inemi_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vaipsCombinedDeviceAndPlanExperience_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePriceDisplay_desktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"inemi_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"delightPricingBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNowBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"compatibility_zone_works_with_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"compatibilityFinder_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight6_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sellYoursHere_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"olpLinkWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"fodcx_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"trustMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tellAFriendBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"attachAccessoryModalForIN_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"certifiedBusinessSeller_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter16_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter15_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"productAlert_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"newerVersion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyingOptionNostosBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"product-ads-feedback_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addOnItem_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter14_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter13_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter12_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter11_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"provenanceCertifications_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tellAmazon_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"featurebullets_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"productOverview_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"valuePick_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"warrantyTermsAndConditions_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter10_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter9_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"clickToContact_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"openbox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"holidayAvailabilityMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"specialOffersInformation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter8_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter7_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"businessPricing_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"in_olp_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"productSupportAndReturnPolicy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"iconfarmv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpFastTrack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter6_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freebies_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"loyaltyRewardPointsEarnings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vsxoffers_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soppATF_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alternativeOfferEligibilityMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"issuancePriceblockAmabot_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"b2bUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pmpux_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"applicablePromotionList_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dynamicDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"takeBack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unifiedPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"socialFabric_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"socialProofingAsinFaceout_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"socialProofingBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"zeitgeistBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"climatePledgeFriendlyATF_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonExclusiveBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"acBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ask_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"averageCustomerReviews_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bylineInfo_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"title_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"spin360_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buffetServiceCardAtf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"legalEUAtf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"thumbs-image","customClientFunction":1,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":1,"divToUpdate":"twister-main-image","customClientFunction":1,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"companyCompliancePolicies_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"appleFamilyStripe_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"iesABBanner_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cafdesktopbannercards_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"prime_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"jquery-available_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"early-twister-js-init_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vseVideoWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"productDocuments_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cpsiaProductSafetyWarning_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"storeDisclaimer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"importantInformation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"postPurchaseWhatsInTheBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"productDetails_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent65_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent64_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent63_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent62_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent61_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent60_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent59_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent58_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent57_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent56_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent55_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent54_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent53_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent52_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent51_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent50_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent49_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent48_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent47_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent46_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent45_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent44_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent43_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent42_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent41_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent40_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent39_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent38_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent37_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent36_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent35_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent34_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent33_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent32_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent31_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent30_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent29_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent28_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent27_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent26_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent25_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent24_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent23_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent22_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent21_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent20_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent19_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent18_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent17_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent16_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent15_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent14_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent13_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent12_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent11_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent10_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent9_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent8_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent7_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent6_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"contentGrid_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ajaxBlockComponents_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"aplusBrandStory_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"climatePledgeFriendlyBTF_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"legal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sims-consolidated-1_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"sims-consolidated-2_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"sims-consolidated-3_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"sims-consolidated-4_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"sims-consolidated-5_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"sims-consolidated-6_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"ask-dp-search_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promotions_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"dpx-btf-dpreview-summary_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ad-display-center-2_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-product-details-flash-sale-node-1_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-product-details-flash-sale-node-2_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"qpe-title-tag_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"warranty-request-widget_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dp-ads-center-promo-top_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"va-related-videos-widget_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-btf-hlcx-comparison_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-amazon-sales-rank_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-btf-productDocuments_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ask-btf_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"dp-ads-center-promo_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sac-btf-start_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-hover-board-disclaimer_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"percolate-ui-ilm_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"device-dp-recommendations_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessories-and-compatible-products_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-window-blind-disclaimer_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cpsia-product-safety-warning_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"beautyRecommendations_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-product-details_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"product-details-grid_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"dpx-default-important-information_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-detail-bullets_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0}],
                    "partial" : [{"updateOnHover":0,"divToUpdate":"tellAFriendBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"specialOffersInformation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unifiedPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"zeitgeistBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"climatePledgeFriendlyATF_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"thumbs-image","customClientFunction":1,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":1,"divToUpdate":"twister-main-image","customClientFunction":1,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ajaxBlockComponents_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"climatePledgeFriendlyBTF_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"legal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0}],
                    "parent"  : [{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyButtonLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindlePurchaseRestrictionMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookDeviceIdentifier_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksKindleALCPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookUnsupportedCorMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unavailableMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleCountDownDeals_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"copActualPriceMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToEbookCartINUS_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksVatMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"comicsUnlimitedALCMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksDealBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxPaymentMethods_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxJPYouPay_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealOffer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBulkBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBulkQuantityDiscounts_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookBuyboxPromotions_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksReadNowButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"webReaderReadFreeBook_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"webReaderReadNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoAwareness_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookSellerOfRecord_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksSor_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"blindReaderEdition_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"title_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hushpuppyPromo_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxPaymentPreference_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyButtonLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindlePurchaseRestrictionMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookDeviceIdentifier_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksKindleALCPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookUnsupportedCorMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unavailableMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleCountDownDeals_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"copActualPriceMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToEbookCartINUS_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksVatMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"comicsUnlimitedALCMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksDealBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxPaymentMethods_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxJPYouPay_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealOffer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBulkBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBulkQuantityDiscounts_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookBuyboxPromotions_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksReadNowButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"webReaderReadFreeBook_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"webReaderReadNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoAwareness_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookSellerOfRecord_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksSor_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"blindReaderEdition_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"title_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hushpuppyPromo_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxPaymentPreference_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promiseBasedBadgeInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPromiseInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"couponsInBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonGlobal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ehf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsShippingAndIfdInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promotionMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"layawayBuyboxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyButtonLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindlePurchaseRestrictionMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookDeviceIdentifier_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksKindleALCPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookUnsupportedCorMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unavailableMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleCountDownDeals_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"copActualPriceMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToEbookCartINUS_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksVatMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"comicsUnlimitedALCMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksDealBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxPaymentMethods_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxJPYouPay_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealOffer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBulkBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBulkQuantityDiscounts_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookBuyboxPromotions_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksReadNowButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"webReaderReadFreeBook_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"webReaderReadNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoAwareness_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebookSellerOfRecord_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksSor_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"blindReaderEdition_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"title_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hushpuppyPromo_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ebooksBuyboxPaymentPreference_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"KindleALCLegacy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpFastTrack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dynamicDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpInviteButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"KindleALCLegacy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideAccordionHeader2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideAccordionHeader2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideAccordionHeader2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideAccordionHeader2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unifiedLocation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellBtf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellAmabot_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"detailPageGifting_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"oneClick_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"preAddToCartFramework_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asg_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dsvDigitalBuyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityLayoutLow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"desktop_productInsurance_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"mbb_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"scheduledDelivery_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soldByThirdParty_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"businessPricing_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bbop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityLayoutHigh_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tradeInInstantSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hbaLabel_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularPackaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSellerCertifications_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"merchConfigure_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"gestalt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soldByThirdPartyRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreBadgePopoverInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alternativeProductMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addOnMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"invitePlatform_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealProgress_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cipInsideDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"KindleALCLegacy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"legacyBorrowButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"limber_buybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"wff_desktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"legacyBorrowButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"prrBorrow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kuBorrow_desktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"legacyBorrowButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"prrUpsell_desktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kuUpsell_desktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryBlockAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreImportBadgeAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"creturnsPolicyMessageInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeBadgeAndShippingMessageAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"priceBlock-outsideOfForm_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promiseBasedBadgeInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPromiseInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"couponsInBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonGlobal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ehf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsShippingAndIfdInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promotionMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"layawayBuyboxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviatedHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleRentals_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"priceBlock-outsideOfForm_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsShippingAndIfdInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipsFromSoldByAbbreviatedPSUFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreIfdAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeSavingsUpsellCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"renewedAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"renewedAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"renewedAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"renewedAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addonItems_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessCodeWarning_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantity_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"glowContextualIngressPt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpFastTrack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dynamicDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"usedBuyBoxConditionNote_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"usedAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipsFromSoldByMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"replenishmentFrequencyInformation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsSubscribeButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ssbWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"replenishmentFrequency_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsQuantity_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsDeliveryDate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsUpsellMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsCoupon_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsShippingMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"coupons_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryDateLabel_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"snsCaptionAndDiscountPillAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freshAddToGroceryList_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freshBottleReturnMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freshShipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almInviteList_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almIneligibleBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almAddToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almAvailability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almGlowContextualIngressPtDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almGlowContextualIngressPt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almLogoAndDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freshShipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almLogoAndDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"superSaverBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"originalPackagingMessageInsideAccordionHeader2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"returnPolicyInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"productSupportInsideAccordionHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipFromSoldByAbbreviated_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideAccordionHeader2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"newAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"mbbLD_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealAmazonDevicesPreRegistration_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealAppAccess_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealRedemption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealQuantity_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"peDealOfTheDayAvailability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"glowContextualIngressPt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deepCheckPromiseInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPromiseInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpFastTrack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealTradeInstantSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"installmentPaymentCheckbox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealPrimeAccess_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"layawayDealsMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealTimer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealProgress_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"claimBar_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealState_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealHeaderStateMessageFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealsHeaderRegulatoryDepositFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealsHeaderInstallmentMessageFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealsAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promiseBasedBadgeInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPromiseInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"couponsInBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonGlobal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ehf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsShippingAndIfdInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promotionMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"layawayBuyboxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"superSaverBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"mbbLD_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealAmazonDevicesPreRegistration_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealAppAccess_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealRedemption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealQuantity_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"peDealOfTheDayAvailability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"glowContextualIngressPt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deepCheckPromiseInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPromiseInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpFastTrack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealTradeInstantSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"installmentPaymentCheckbox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealPrimeAccess_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"layawayDealsMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealTimer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealProgress_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"claimBar_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealState_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealHeaderStateMessageFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealsHeaderRegulatoryDepositFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealsHeaderInstallmentMessageFeature_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealsAccordionCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpInviteButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"marsAccessoryUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpFastTrack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dynamicDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpInviteButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hdpDetailInBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shippingMessageInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"giftingModule_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"giftingModule_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"giftingModule_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"giftingModule_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"giftingModule_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"giftingModule_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unifiedLocation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellBtf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellAmabot_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"detailPageGifting_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"oneClick_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"preAddToCartFramework_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asg_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dsvDigitalBuyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityLayoutLow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"desktop_productInsurance_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"mbb_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"scheduledDelivery_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soldByThirdParty_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"businessPricing_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bbop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityLayoutHigh_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tradeInInstantSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hbaLabel_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularPackaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSellerCertifications_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"merchConfigure_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"gestalt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soldByThirdPartyRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreBadgePopoverInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alternativeProductMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addOnMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"invitePlatform_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealProgress_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"renewedSingleOfferCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleRentalsAccordionRowHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleFreeTrialAccordionRowHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"kindleALCAccordionRowHeader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularReturnPolicy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almInviteList_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almIneligibleBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupBuyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupAddToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupQuantity_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupAvailability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almPickupInstructions_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupInstruction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupLocationIngress_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pickupCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pointsInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unifiedLocation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellBtf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellAmabot_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"detailPageGifting_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"oneClick_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"preAddToCartFramework_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asg_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dsvDigitalBuyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityLayoutLow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"desktop_productInsurance_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"mbb_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"scheduledDelivery_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soldByThirdParty_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"businessPricing_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bbop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityLayoutHigh_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tradeInInstantSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"hbaLabel_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularPackaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSellerCertifications_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sfsbLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSFSB_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabular_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tabularSecureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusBuyBoxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"merchConfigure_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportAlternativeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"gestalt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"twisterPlusPriceSubtotalWWDesktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soldByThirdPartyRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityRelocate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"globalStoreBadgePopoverInsideBuybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alternativeProductMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availabilityInsideBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addOnMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"invitePlatform_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealProgress_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"renewedSingleOfferCaption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asvCOP_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asvAmountPicker_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNow_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asvCOP_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"asvAmountPicker_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freshAddToGroceryList_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freshBottleReturnMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almShipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almInviteList_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almIneligibleBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almAddToCart_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almAvailability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almGlowContextualIngressPtDeliveryBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almGlowContextualIngressPt_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almLogoAndDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"priceBlock-outsideOfForm_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalDashLowProminence_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToRegistry_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToWishlist_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"marsAccessoryUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalDashHighProminence_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"superSaverBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsBadgeInsidePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"volumeAwarePricingPriceBlockMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"rebates_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almPrimeSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pep_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"points_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vatMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoMessagingDiscountValue_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"omnibusPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"taxInclusiveMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"volumeAwarePricingTableLoader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bundleLTBSSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonDevicesCustomPriceMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"installmentPaymentPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"oneTimePaymentPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almTaxExclusivePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealTimer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freeReturns_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freeShippingPriceBadging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPriceBadging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsIfdInsidePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"jewelryPriceBreakup_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"basisPriceLegalMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalDashLowProminence_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToRegistry_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToWishlist_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"marsAccessoryUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalDashHighProminence_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"acdSpinnner_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"secureTransaction_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"acdAddToCartButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"acdValidationErrors_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"acdOrderSummary_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalDashLowProminenceAccordion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToRegistry_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addToWishlistAccordion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"audibletitlegiftv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellAmabotAccordion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsellAccordion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"marsAccessoryUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalDashHighProminenceAccordion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unqualifiedBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"partialStateBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almOutOfStockBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"outOfStockBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"installmentPayment_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"businessPricing_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"primeExclusiveBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"yurekaBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"nlx_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"digitalBundleEligibility_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"serviceOptionsIN_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"questServices_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vendorActivationOptions_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoPriceBlockMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonGlobal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportsTaxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityPricingTableSummaryInPriceBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tradeInPriceBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"inemi_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vaipsCombinedDeviceAndPlanExperience_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"delightPricingBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoPriceBlockMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonGlobal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"exportsTaxMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"quantityPricingTableSummaryInPriceBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tradeInPriceBlock_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"superSaverBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsBadgeInsidePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"volumeAwarePricingPriceBlockMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"rebates_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almPrimeSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pep_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"points_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"inemi_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vatMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promoMessagingDiscountValue_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"volumeAwarePricingTableLoader_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bundleLTBSSavings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonDevicesCustomPriceMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"installmentPaymentPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"oneTimePaymentPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"almTaxExclusivePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freeReturns_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freeShippingPriceBadging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"deliveryPriceBadging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"loyaltyRewardPointsRedemption_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"regulatoryDeposit_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"agsIfdInsidePrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"jewelryPriceBreakup_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"omnibusPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"delightPricingBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"taxInclusiveMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"inemi_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vaipsCombinedDeviceAndPlanExperience_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"corePriceDisplay_desktop_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"inemi_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"delightPricingBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dealBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyNowBuyBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"compatibility_zone_works_with_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"compatibilityFinder_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight6_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sellYoursHere_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"olpLinkWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"fodcx_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"trustMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"attachAccessoryModalForIN_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"certifiedBusinessSeller_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter16_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter15_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"productAlert_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"newerVersion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyingOptionNostosBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"product-ads-feedback_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addOnItem_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter14_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter13_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter12_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter11_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"provenanceCertifications_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tellAmazon_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"featurebullets_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"productOverview_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"valuePick_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"warrantyTermsAndConditions_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter10_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter9_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"clickToContact_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"openbox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"holidayAvailabilityMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter8_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter7_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"businessPricing_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"in_olp_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"productSupportAndReturnPolicy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"iconfarmv2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpFastTrack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter6_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"freebies_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"loyaltyRewardPointsEarnings_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vsxoffers_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"soppATF_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alternativeOfferEligibilityMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"issuancePriceblockAmabot_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"b2bUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pmpux_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"applicablePromotionList_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dynamicDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"takeBack_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"socialFabric_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"socialProofingAsinFaceout_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"socialProofingBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonExclusiveBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"acBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ask_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"averageCustomerReviews_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bylineInfo_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"title_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"spin360_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buffetServiceCardAtf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"legalEUAtf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"companyCompliancePolicies_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"appleFamilyStripe_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"iesABBanner_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cafdesktopbannercards_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"prime_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"jquery-available_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"early-twister-js-init_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vseVideoWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"productDocuments_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cpsiaProductSafetyWarning_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"storeDisclaimer_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"importantInformation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"postPurchaseWhatsInTheBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"productDetails_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent65_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent64_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent63_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent62_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent61_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent60_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent59_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent58_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent57_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent56_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent55_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent54_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent53_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent52_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent51_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent50_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent49_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent48_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent47_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent46_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent45_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent44_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent43_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent42_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent41_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent40_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent39_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent38_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent37_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent36_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent35_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent34_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent33_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent32_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent31_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent30_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent29_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent28_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent27_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent26_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent25_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent24_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent23_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent22_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent21_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent20_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent19_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent18_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent17_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent16_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent15_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent14_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent13_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent12_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent11_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent10_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent9_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent8_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent7_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent6_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"contentGrid_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"aplusBrandStory_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sims-consolidated-1_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"sims-consolidated-2_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"sims-consolidated-3_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"sims-consolidated-4_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"sims-consolidated-5_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"sims-consolidated-6_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"ask-dp-search_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promotions_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"dpx-btf-dpreview-summary_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ad-display-center-2_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-product-details-flash-sale-node-1_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-product-details-flash-sale-node-2_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"qpe-title-tag_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"warranty-request-widget_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dp-ads-center-promo-top_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"va-related-videos-widget_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-btf-hlcx-comparison_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-amazon-sales-rank_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-btf-productDocuments_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ask-btf_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"dp-ads-center-promo_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"sac-btf-start_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-hover-board-disclaimer_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"percolate-ui-ilm_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"device-dp-recommendations_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessories-and-compatible-products_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-window-blind-disclaimer_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"cpsia-product-safety-warning_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"beautyRecommendations_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-product-details_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"product-details-grid_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"dpx-default-important-information_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dpx-detail-bullets_feature_div","customClientFunction":0,"isPrefetchable":0,"loadingBar":0}],
                    "master"  : []
                },

                "deviceType" : "web",
                "measurement" : {
                    "atf" : {"marker": "twister-atf-marker_feature_div", "count":2},
                    "cf" : {"marker": "twister-cf-marker_feature_div", "count":2, "longPollImageTag":null, "longPollHtmlTag":null}
                },
                "ajaxTimeout" : 20000,
                "displayConfigStylesData" : {
                    "swatch" : {"available":"swatchAvailable", "selected":"swatchSelect", "invalid":"swatchUnavailable", "unavailable":"swatchCurrentlyUnavailable"},
                    "dropdown" : {"available":"dropdownAvailable", "selected":"dropdownSelect", "invalid":"dropdownUnavailable", "hidden":"dropdownHidden", "unavailable":"dropdownCurrentlyUnavailable"},
                    "singleton" : {"available":"singletonSelect", "selected":"singletonSelect", "invalid":"singletonSelect"},
                },
                "keysToPopulateDetailPageStateController" : [
                    "current_asin", "parent_asin","productGroupID",
                    "storeID", "unselectedDimCount", "currentDimCombID", "reactId",
                    "dimensionSelectionData", "num_total_variations" , "num_variation_dimensions","rps",
                    "view","selected_variations","variation_values", "selected_variation_values", "asin_variation_values"
                ],

                
                "isPWBadgeEnabled" : false,
                "dpEnvironment" : "hardlines",
                "singletonDimensionKeys" : [],

                "twisterUpdateURLAppend" : {
                    
                    "immutableParams": {
                        
                        "parentAsin": "B0BDSPPRN8", 
                        "ee": "2", 
                        "ptd": "CELLULAR_PHONE", 
                        "twisterView": "glance", 
                        "deviceOs": "unrecognized", 
                        "pgid": "premium_ce_brands_display_on_website", 
                        "sCac": "1", 
                        "rid": "QV6Z0G1VWWN6RDW0ZTK2", 
                        "ppl": "", 
                        "sid": "260-9171825-3931647", 
                        "ppw": "", 
                        "dpxAjaxFlag": "1", 
                        "enPre": "1", 
                        "json": "1", 
                        "auiAjax": "1", 
                        "isUDPFlag": "1" 
                    }
                    
                },
                "twisterUpdateURLInfo" : {
                    
                    "immutableURLPrefix": "/gp/twister/ajaxv2",
                    "immutableParams": {
                        
                        "parentAsin": "B0BDSPPRN8", 
                        "ee": "2", 
                        "ptd": "CELLULAR_PHONE", 
                        "twisterView": "glance", 
                        "deviceOs": "unrecognized", 
                        "pgid": "premium_ce_brands_display_on_website", 
                        "sCac": "1", 
                        "rid": "QV6Z0G1VWWN6RDW0ZTK2", 
                        "ppl": "", 
                        "sid": "260-9171825-3931647", 
                        "ppw": "", 
                        "dpxAjaxFlag": "1", 
                        "enPre": "1", 
                        "json": "1", 
                        "auiAjax": "1", 
                        "isUDPFlag": "1" 
                    },
                    "mutableParams": {}
                    
                },
                "contextMetaData" : {
                    "parent" : {
                        "mTypeSpecificURLParams": "{}",
                        "elementList":{}
                    },
                    "master": {"mTypeSpecificURLParams": "{}"},
                    "partial": {"mTypeSpecificURLParams": "{}"},
                    "full": {
                        "mTypeSpecificURLParams": {"psc": 1},
                        "elementList":{}
                    }
                },
                "inlineTwisterData": {"numberOfDimensionsExpanded":-1,"slotsEnabledDimensions":[true],"swatchShape":{"size_name":"SQUARE","color_name":"SQUARE"},"imageDimensionKeysMap":{"color_name":true},"stringTranslationMap":{"twisterDescriptionAnnounce":"Make a ###dimension selection","a11ySizeUnavailabilityText":", currently unavailable in the selected colour","defaultSlotUnavailableString":"See available options","secondaryViewSeeMore":"See all","expanderHeaderAriaLabel":"Selected ###dimension is ###value.","desktopConfiguratorAllOptionsString":"###options Options","desktopConfiguratorDefaultSelectString":"Select","seeAllIngressText":"All ###dimension shades","seeNotFeaturedOptionsIngressLabel":"See ###dimension not featured options","currentlyUnavailableMessage":"Currently unavailable.","tapToExpand":"Tap to expand.","seeNotFeaturedUnavailableOptionsIngressLabel":"See ###dimension options with no featured offers","secondaryViewSeeMoreAriaLabel":"See all ###dimension options","secondaryViewSwatchData":"SwatchData###","hideNotFeaturedUnavailableOptionsIngressLabel":"Hide ###dimension options with no featured offers","lowPriceBadge":"LOW PRICE","autoNotificationCollapsed":"Updated based on the selected ###dimension","selectAShadeSecView":"Select a shade","nonFeaturedOffersSecondaryViewLabel":"Not featured or unavailable options","tapToCollapse":"Tap to collapse.","valuePackBadge":"VALUE PACK","expanderContentAriaLabel":"There are ###value options.","seeNonFeaturedOffersIngressLabel":"See ###dimension not featured or unavailable options","autoNotificationExpanded":"Updated other options based on this selection","desktopConfiguratorUpdatePageString":"Update Page","hideNotFeaturedOptionsIngressLabel":"Hide ###dimension not featured options","secondaryViewDone":"DONE","unselectedDimensionPrompt":"Select ###dimension","seeAllIngressSecViewText":"See all ###dimension shades","desktopConfiguratorSeeLessString":"See less"},"inlineVariationsSize":15,"showFancyPrice":false,"imageResolutionMap":{"configurableHeightS":120,"width":60,"height":60,"configurableWidthS":120},"showModifiedSecondaryViewIngress":true,"showModifiedSecondaryViewIngressBorder":false,"auiPriceSize":"medium_plus","disableCollapseFunctionality":false,"maxNumberOfDimensionsExpanded":-1,"makeUpTwister":"C","beautyModifiedDimensions":null,"numOfRowsPerDimension":5,"desktopConfiguratorSlotsInMainView":null,"desktopConfiguratorSlotsInPopover":["unitCount","price","ms3","twisterPrimeWardrobe","twisterAvailability","deliveryPromise"],"popoverImageResolutionMap":{"configurableHeightS":180,"width":180,"height":180,"configurableWidthS":180},"popoverSlotsEnabledDimensions":[true],"dimsWithSwatchReorderingDisabled":[],"isBusiness":0,"shouldPinBuyBox":false,"textSwatchCSS":"","imageSwatchCSS":"","shouldDelayRegistrationWithTwisterCore":true,"shouldMoveImageSwatchOnTop":false,"setSlotNonSingletonImage":false,"dimensionKeyToShowAsinCompatibilitySlotInfo":null,"clientSideTriggeringWeblabsTreatmentValueMap":{"A2I_CONSUMABLES_TWISTER_LOW_PRICE_BADGE_EXPERIMENT_841033":"C","FO_COLLAPSE_838029":"C","A2I_CONSUMABLES_TWISTER_SORTING_LAUNCH_742993":"T1"},"makeupCompactTwister":"C","exclusiveMerchantId":null,"revampedSecondaryView":"C","slotLimitSecondaryViewImageBlock":8,"imageDimensionInlineTwisterVariationsSize":15,"softlinesDeliveryBadge":"","shouldReadImageMapFromViewAdapter":false,"icdpTwisterExperience":null,"desktopTwisterSlots":["apexPrice","deliveryPromise"],"numberOfSwatchPerDimension":20,"desktopTwisterImageCSS":"image-swatch-button-with-slots","desktopTwisterDisplayStyle":"swatch","sortInvalidBeforeUnavailable":false,"swatchRenderingOptimized":false,"collapseNonFeaturedOffersEnabled":false,"inlineTwisterEnabled":true,"adaptiveTwisterConfigEnabled":false,"invalidVariantsHidden":false,"swatchDimensionRedefined":true,"educationalMessagesEnabled":false,"merchAssembly":false,"availabilityDistinctionEnabled":false,"removeOOSImageSwatchEnabled":false,"hexCodeMakeupTwister":false,"inlineCollapseNonFeaturedOffersEnabled":false,"desktopTwisterEnabled":true,"icdp":false,"haul":false,"softlinesMobile":false},
                "imageHashMap": {"color_name::0":"https://m.media-amazon.com/images/I/11hYeQYRq9L._SS60_.jpg","color_name::2":"https://m.media-amazon.com/images/I/01iHQ9KH-2L._SS60_.jpg","color_name::1":"https://m.media-amazon.com/images/I/11GBhVqn2AL._SS60_.jpg","color_name::4":"https://m.media-amazon.com/images/I/01BqyXaiaVL._SS60_.jpg","color_name::3":"https://m.media-amazon.com/images/I/116GEYTP2ZL._SS60_.jpg","color_name::5":"https://m.media-amazon.com/images/I/11lkLGA0NtL._SS60_.jpg"},
                "reorderedDimensionListKeys": ["color_name","size_name"],
                "dimensionPageLoadUrls": {"size_name":{"256 GB":"/dp/B0BDJ1B1CS/ref=twister_B0BDSPPRN8?_encoding=UTF8&psc=1","512 GB":"/dp/B0BDJH3V3Q/ref=twister_B0BDSPPRN8?_encoding=UTF8&psc=1"},"color_name":{"Red":"/dp/B0BDJ3R6QW/ref=twister_B0BDSPPRN8","Starlight":"/dp/B0BDK8LKPJ/ref=twister_B0BDSPPRN8?_encoding=UTF8&psc=1","Purple":"/dp/B0BDJYHP2H/ref=twister_B0BDSPPRN8","Yellow":"/dp/B0BXQ1ZL9N/ref=twister_B0BDSPPRN8","Midnight":"/dp/B0BDHX8Z63/ref=twister_B0BDSPPRN8?_encoding=UTF8&psc=1"}},

                "shouldUseDPXTwisterData" : 1,

                "currentAsin" : "B0BDK62PDX",
                "parentAsin" : "B0BDSPPRN8",
                "dimensionToAsinMap" : {"0_0":"B0BDK62PDX","0_1":"B0BDJ1B1CS","1_0":"B0BDHX8Z63","0_2":"B0BDJH3V3Q","1_1":"B0BDJ6N5D6","1_2":"B0BDJGX2XZ","2_2":"B0BDJYHP2H","3_1":"B0BDJ3R6QW","4_0":"B0BDK8LKPJ","4_1":"B0BDJS3MRM","4_2":"B0BDJBXLSJ","5_1":"B0BXQ1ZL9N"},
                "variationValues" : {"size_name":["128 GB","256 GB","512 GB"],"color_name":["Blue","Midnight","Purple","Red","Starlight","Yellow"]},
                "selectedVariationValues" : {"size_name":0,"color_name":0},
                "currentDimensionCombinationId" : "0_0",
                "deletedLandingAsinInfo" : {"dimValues":["Please Select","Please Select"],"asin":"B0BDK62PDX"},
                "num_total_variations" : 12,
                "dimensions" : ["color_name","size_name"],
                "dimensionsDisplayType"  : [
                    "swatch","swatch",
                ],
                "unselectedDimCount" : 0,
                "dimensionValuesDisplayData" : {"B0BXQ1ZL9N":["Yellow","256 GB"],"B0BDJH3V3Q":["Blue","512 GB"],"B0BDJYHP2H":["Purple","512 GB"],"B0BDHX8Z63":["Midnight","128 GB"],"B0BDJ1B1CS":["Blue","256 GB"],"B0BDJ3R6QW":["Red","256 GB"],"B0BDJS3MRM":["Starlight","256 GB"],"B0BDK62PDX":["Blue","128 GB"],"B0BDJ6N5D6":["Midnight","256 GB"],"B0BDJGX2XZ":["Midnight","512 GB"],"B0BDJBXLSJ":["Starlight","512 GB"],"B0BDK8LKPJ":["Starlight","128 GB"]},
                "pwASINs" : [],
                "pwUnavailableMessage" : "",
                "variationDisplayLabels" : {"size_name":"Size","color_name":"Colour"},
                "isCurrentlyUnavailableWeblabEnabled" : "false",
                "currentlyUnavailablePopOverStringValue" : "Currently unavailable.", 
                "unavailablePopOverStringValue" : "See available options" 
            };

            return dataToReturn;
        });
        P.when('atf').register('useDesktopTwisterMetaAsset',{});
    


    function logTechTermAssistMetric(nexusSchemaId, metricParameters) {
        if (typeof window.csa !== 'undefined') {
            var ttaEvents = csa("Events", {producerId: "cetech-tta"});

            metricParameters.schemaId = nexusSchemaId;

            metricParameters.asin = 'B0BDK62PDX';
            metricParameters.deviceType = 'web';
            metricParameters.productType = 'CELLULAR_PHONE';
            metricParameters.obfuscatedMarketplaceId = 'A21TJRUUN4KGV';

            ttaEvents("log", metricParameters, { ent: 'all' });
        }
    }

    function logTechTermAssistEvent(nexusSchemaId) {
        logTechTermAssistMetric(nexusSchemaId, {});
    }


{"isProductSummaryAvailable":false,"device":"desktop"}

if(window.mix_csa){window.mix_csa('[cel_widget_id="tell-amazon-desktop_DetailPage_4"]', '#CardInstanceihEL9yW7HVZb3ZKnPnySOA')('mark', 'bb')}

if(window.uet){window.uet('bb','tell-amazon-desktop_DetailPage_4',{wb: 1})}

if(window.mix_csa){window.mix_csa('[cel_widget_id="tell-amazon-desktop_DetailPage_4"]', '#CardInstanceihEL9yW7HVZb3ZKnPnySOA')('mark', 'be')}

if(window.uet){window.uet('be','tell-amazon-desktop_DetailPage_4',{wb: 1})}

if(window.mixTimeout){window.mixTimeout('tell-amazon-desktop', 'CardInstanceihEL9yW7HVZb3ZKnPnySOA', 90000)};
P.when('mix:@amzn/mix.client-runtime', 'mix:tell-amazon-desktop__gO8JxAv6').execute(function (runtime, cardModule) {runtime.registerCardFactory('CardInstanceihEL9yW7HVZb3ZKnPnySOA', cardModule).then(function(){if(window.mix_csa){window.mix_csa('[cel_widget_id="tell-amazon-desktop_DetailPage_4"]', '#CardInstanceihEL9yW7HVZb3ZKnPnySOA')('mark', 'functional')}if(window.uex){window.uex('ld','tell-amazon-desktop_DetailPage_4',{wb: 1})}});});


P.load.js('https://images-eu.ssl-images-amazon.com/images/I/514KtT8JPqL.js?xcp');



    if(window.ue) {
        ue.count("dp_aib_centerCol_height", document.getElementById('centerCol').clientHeight);
    }



  setCSMReq('af');
  addlongPoleTag('af','desktop-html-atf-marker');



P.when('jQuery').register('ImageBlockBTF', function(jQuery){
if(window.performance && performance.now && window.ue && ue.count){
    ue.count('DPIBBTFRegisterTime',window.parseInt(performance.now()));
}
var data = {};
var obj = jQuery.parseJSON('{"dataInJson":null,"alwaysIncludeVideo":true,"autoplayVideo":false,"defaultColor":"initial","mainImageSizes":[["342","445"],["385","500"],["425","550"],["466","606"],["522","679"],["569","741"],["679","879"]],"maxAlts":7,"altsOnLeft":true,"productGroupID":"premium_ce_brands_display_on_website","lazyLoadExperienceDisabled":true,"lazyLoadExperienceOnHoverDisabled":false,"useChromelessVideoPlayer":false,"colorToAsin":{"Blue 256 GB":{"asin":"B0BDJ1B1CS"},"Purple 256 GB":{"asin":"B0BDJB5KHG"},"Yellow 128 GB":{"asin":"B0BXQ2V3NJ"},"Blue 128 GB":{"asin":"B0BDK62PDX"},"Yellow 256 GB":{"asin":"B0BXQ1ZL9N"},"Red 128 GB":{"asin":"B0BDJVSDMY"},"Red 512 GB":{"asin":"B0BDHY3LFJ"},"Red 256 GB":{"asin":"B0BDJ3R6QW"},"Purple 128 GB":{"asin":"B0BDJ213TX"},"Starlight 128 GB":{"asin":"B0BDK8LKPJ"},"Blue 512 GB":{"asin":"B0BDJH3V3Q"},"Purple 512 GB":{"asin":"B0BDJYHP2H"},"Midnight 128 GB":{"asin":"B0BDHX8Z63"},"Starlight 256 GB":{"asin":"B0BDJS3MRM"},"Starlight 512 GB":{"asin":"B0BDJBXLSJ"},"Midnight 512 GB":{"asin":"B0BDJGX2XZ"},"Midnight 256 GB":{"asin":"B0BDJ6N5D6"}},"refactorEnabled":true,"useIV":true,"tabletWeb":false,"views":["ImageBlockMagnifierView","ImageBlockAltImageView","ImageBlockVideoView","ImageBlockTwisterView","ImageBlockImmersiveViewImages","ImageBlockImmersiveViewVideos","ImageBlockImmersiveViewDimensionIngress","ImageBlockImmersiveViewShowroom","ImageBlockImmersiveView360","ImageBlockTabbedImmersiveView","ImageBlockShoppableSceneView"],"enhancedHoverOverlay":false,"landingAsinColor":"Blue 128 GB","colorImages":{"Blue 256 GB":[{"large":"https://m.media-amazon.com/images/I/31VjlrbE3bL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31VjlrbE3bL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/21edR26hwVL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/21edR26hwVL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/31g2XUsBxwL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31g2XUsBxwL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71RFKttvm9L._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/71RFKttvm9L._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/3121hxxq2WL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/3121hxxq2WL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61UR88veVzL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/61UR88veVzL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX342_.jpg":["342","342"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}}],"Purple 256 GB":[{"large":"https://m.media-amazon.com/images/I/31gmva12KHL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31gmva12KHL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/619f09kK7tL._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/619f09kK7tL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX425_.jpg":["425","425"]}},{"large":"https://m.media-amazon.com/images/I/21P8lrw9+-L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/21P8lrw9+-L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/51FNWDM4tAL._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX569_.jpg":["569","569"]}},{"large":"https://m.media-amazon.com/images/I/31JOlFE2UpL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31JOlFE2UpL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71BcQW-u8xL._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31s0FW16DKL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31s0FW16DKL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61heI0fIdJL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/61heI0fIdJL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX385_.jpg":["385","385"]}}],"Yellow 128 GB":[{"large":"https://m.media-amazon.com/images/I/31F7pQ4P6KL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31F7pQ4P6KL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61WAINtWPPL._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/61WAINtWPPL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61WAINtWPPL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61WAINtWPPL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61WAINtWPPL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61WAINtWPPL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61WAINtWPPL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61WAINtWPPL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/31n-dQNLkDL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31n-dQNLkDL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61j5DiK1kNL._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/410kaVAH0sL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/410kaVAH0sL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81mC15lI-2L._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/81mC15lI-2L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81mC15lI-2L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81mC15lI-2L._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81mC15lI-2L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81mC15lI-2L._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81mC15lI-2L._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/81mC15lI-2L._SX522_.jpg":["522","522"]}},{"large":"https://m.media-amazon.com/images/I/41M-wzWI93L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41M-wzWI93L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71iGjdzNjQL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX569_.jpg":["569","569"]}},{"large":"https://m.media-amazon.com/images/I/51qlWKtLACL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51qlWKtLACL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81XBYxy29CL._SL1500_.jpg","variant":"PT07","main":{"https://m.media-amazon.com/images/I/81XBYxy29CL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81XBYxy29CL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/81XBYxy29CL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81XBYxy29CL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81XBYxy29CL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81XBYxy29CL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81XBYxy29CL._SX425_.jpg":["425","425"]}},{"large":"https://m.media-amazon.com/images/I/31M4V+WIpSL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31M4V+WIpSL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61nYJlEhnhL._SL1500_.jpg","variant":"PT09","main":{"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX522_.jpg":["522","522"]}}],"Blue 128 GB":[{"large":"https://m.media-amazon.com/images/I/31VjlrbE3bL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31VjlrbE3bL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/21edR26hwVL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/21edR26hwVL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/31g2XUsBxwL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31g2XUsBxwL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71RFKttvm9L._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/71RFKttvm9L._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/3121hxxq2WL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/3121hxxq2WL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61UR88veVzL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/61UR88veVzL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX342_.jpg":["342","342"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}}],"Yellow 256 GB":[{"large":"https://m.media-amazon.com/images/I/31F7pQ4P6KL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31F7pQ4P6KL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61WAINtWPPL._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/61WAINtWPPL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61WAINtWPPL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61WAINtWPPL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61WAINtWPPL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61WAINtWPPL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61WAINtWPPL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61WAINtWPPL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/31n-dQNLkDL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31n-dQNLkDL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61j5DiK1kNL._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61j5DiK1kNL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/410kaVAH0sL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/410kaVAH0sL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81mC15lI-2L._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/81mC15lI-2L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81mC15lI-2L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81mC15lI-2L._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81mC15lI-2L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81mC15lI-2L._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81mC15lI-2L._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/81mC15lI-2L._SX522_.jpg":["522","522"]}},{"large":"https://m.media-amazon.com/images/I/41M-wzWI93L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41M-wzWI93L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71iGjdzNjQL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71iGjdzNjQL._SX569_.jpg":["569","569"]}},{"large":"https://m.media-amazon.com/images/I/51qlWKtLACL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51qlWKtLACL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81XBYxy29CL._SL1500_.jpg","variant":"PT07","main":{"https://m.media-amazon.com/images/I/81XBYxy29CL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81XBYxy29CL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/81XBYxy29CL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81XBYxy29CL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81XBYxy29CL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81XBYxy29CL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81XBYxy29CL._SX425_.jpg":["425","425"]}},{"large":"https://m.media-amazon.com/images/I/31M4V+WIpSL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31M4V+WIpSL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61nYJlEhnhL._SL1500_.jpg","variant":"PT09","main":{"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61nYJlEhnhL._SX522_.jpg":["522","522"]}}],"Red 128 GB":[{"large":"https://m.media-amazon.com/images/I/31OylC+7FrL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31OylC+7FrL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/611mRs-imxL._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/611mRs-imxL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/21J5NlguH2L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/21J5NlguH2L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61+85l5NkML._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/61+85l5NkML._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX425_.jpg":["425","425"]}},{"large":"https://m.media-amazon.com/images/I/41btuWktRaL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41btuWktRaL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71gApuoaMhL._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/71gApuoaMhL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX569_.jpg":["569","569"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31NxlfpPhbL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31NxlfpPhbL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61tk24KbfBL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/61tk24KbfBL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX569_.jpg":["569","569"]}}],"Red 512 GB":[{"large":"https://m.media-amazon.com/images/I/31OylC+7FrL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31OylC+7FrL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/611mRs-imxL._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/611mRs-imxL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/21J5NlguH2L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/21J5NlguH2L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61+85l5NkML._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/61+85l5NkML._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX425_.jpg":["425","425"]}},{"large":"https://m.media-amazon.com/images/I/41btuWktRaL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41btuWktRaL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71gApuoaMhL._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/71gApuoaMhL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX569_.jpg":["569","569"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31NxlfpPhbL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31NxlfpPhbL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61tk24KbfBL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/61tk24KbfBL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX569_.jpg":["569","569"]}}],"Red 256 GB":[{"large":"https://m.media-amazon.com/images/I/31OylC+7FrL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31OylC+7FrL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/611mRs-imxL._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/611mRs-imxL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/611mRs-imxL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/21J5NlguH2L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/21J5NlguH2L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61+85l5NkML._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/61+85l5NkML._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61+85l5NkML._SX425_.jpg":["425","425"]}},{"large":"https://m.media-amazon.com/images/I/41btuWktRaL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41btuWktRaL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71gApuoaMhL._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/71gApuoaMhL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71gApuoaMhL._SX569_.jpg":["569","569"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31NxlfpPhbL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31NxlfpPhbL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61tk24KbfBL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/61tk24KbfBL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61tk24KbfBL._SX569_.jpg":["569","569"]}}],"Purple 128 GB":[{"large":"https://m.media-amazon.com/images/I/31gmva12KHL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31gmva12KHL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/619f09kK7tL._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/619f09kK7tL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX425_.jpg":["425","425"]}},{"large":"https://m.media-amazon.com/images/I/21P8lrw9+-L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/21P8lrw9+-L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/51FNWDM4tAL._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX569_.jpg":["569","569"]}},{"large":"https://m.media-amazon.com/images/I/31JOlFE2UpL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31JOlFE2UpL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71BcQW-u8xL._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31s0FW16DKL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31s0FW16DKL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61heI0fIdJL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/61heI0fIdJL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX385_.jpg":["385","385"]}}],"Starlight 128 GB":[{"large":"https://m.media-amazon.com/images/I/3144jXPtX4L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/3144jXPtX4L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/618Bb+QzCmL._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31zg7IDRN6L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31zg7IDRN6L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51Tr9tYoIyL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51Tr9tYoIyL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81EuTJJ63xL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31z-GqsQRCL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31z-GqsQRCL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61dJXofPauL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/61dJXofPauL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX425_.jpg":["425","425"]}}],"Blue 512 GB":[{"large":"https://m.media-amazon.com/images/I/31VjlrbE3bL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31VjlrbE3bL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61bK6PMOC3L._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/21edR26hwVL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/21edR26hwVL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/51Sn5X2gfaL._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/31g2XUsBxwL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31g2XUsBxwL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71RFKttvm9L._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/71RFKttvm9L._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/71RFKttvm9L._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/3121hxxq2WL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/3121hxxq2WL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61UR88veVzL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/61UR88veVzL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61UR88veVzL._SX342_.jpg":["342","342"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}}],"Purple 512 GB":[{"large":"https://m.media-amazon.com/images/I/31gmva12KHL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31gmva12KHL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/619f09kK7tL._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/619f09kK7tL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/619f09kK7tL._SX425_.jpg":["425","425"]}},{"large":"https://m.media-amazon.com/images/I/21P8lrw9+-L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/21P8lrw9+-L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/51FNWDM4tAL._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/51FNWDM4tAL._SX569_.jpg":["569","569"]}},{"large":"https://m.media-amazon.com/images/I/31JOlFE2UpL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31JOlFE2UpL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71BcQW-u8xL._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71BcQW-u8xL._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31s0FW16DKL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31s0FW16DKL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61heI0fIdJL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/61heI0fIdJL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61heI0fIdJL._SX385_.jpg":["385","385"]}}],"Midnight 128 GB":[{"large":"https://m.media-amazon.com/images/I/31wacBawB3L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31wacBawB3L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/61cwywLZR-L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX522_.jpg":["522","522"]}},{"large":"https://m.media-amazon.com/images/I/21FpqfoeNSL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/21FpqfoeNSL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/51lRv8lbOVL._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/31syT7VBiLL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31syT7VBiLL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71KdlxeM59L._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/71KdlxeM59L._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX342_.jpg":["342","342"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31aQt0B6CML.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31aQt0B6CML._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61xGIi8VUAL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX522_.jpg":["522","522"]}}],"Starlight 256 GB":[{"large":"https://m.media-amazon.com/images/I/3144jXPtX4L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/3144jXPtX4L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/618Bb+QzCmL._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31zg7IDRN6L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31zg7IDRN6L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51Tr9tYoIyL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51Tr9tYoIyL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81EuTJJ63xL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31z-GqsQRCL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31z-GqsQRCL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61dJXofPauL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/61dJXofPauL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX425_.jpg":["425","425"]}}],"Starlight 512 GB":[{"large":"https://m.media-amazon.com/images/I/3144jXPtX4L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/3144jXPtX4L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/618Bb+QzCmL._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/618Bb+QzCmL._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31zg7IDRN6L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31zg7IDRN6L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61U3Sfb9-BL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51Tr9tYoIyL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51Tr9tYoIyL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81EuTJJ63xL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81EuTJJ63xL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31z-GqsQRCL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31z-GqsQRCL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61dJXofPauL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/61dJXofPauL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61dJXofPauL._SX425_.jpg":["425","425"]}}],"Midnight 512 GB":[{"large":"https://m.media-amazon.com/images/I/31wacBawB3L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31wacBawB3L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/61cwywLZR-L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX522_.jpg":["522","522"]}},{"large":"https://m.media-amazon.com/images/I/21FpqfoeNSL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/21FpqfoeNSL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/51lRv8lbOVL._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/31syT7VBiLL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31syT7VBiLL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71KdlxeM59L._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/71KdlxeM59L._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX342_.jpg":["342","342"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31aQt0B6CML.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31aQt0B6CML._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61xGIi8VUAL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX522_.jpg":["522","522"]}}],"Midnight 256 GB":[{"large":"https://m.media-amazon.com/images/I/31wacBawB3L.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31wacBawB3L._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg","variant":"MAIN","main":{"https://m.media-amazon.com/images/I/61cwywLZR-L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61cwywLZR-L._SX522_.jpg":["522","522"]}},{"large":"https://m.media-amazon.com/images/I/21FpqfoeNSL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/21FpqfoeNSL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/51lRv8lbOVL._SL1500_.jpg","variant":"PT01","main":{"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/51lRv8lbOVL._SX466_.jpg":["466","466"]}},{"large":"https://m.media-amazon.com/images/I/31syT7VBiLL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31syT7VBiLL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/71KdlxeM59L._SL1500_.jpg","variant":"PT02","main":{"https://m.media-amazon.com/images/I/71KdlxeM59L._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/71KdlxeM59L._SX342_.jpg":["342","342"]}},{"large":"https://m.media-amazon.com/images/I/41HXYQ9V9cL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/41HXYQ9V9cL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/711JE+dD1KL._SL1500_.jpg","variant":"PT03","main":{"https://m.media-amazon.com/images/I/711JE+dD1KL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/711JE+dD1KL._SX385_.jpg":["385","385"]}},{"large":"https://m.media-amazon.com/images/I/51pi1Od1wlL.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/51pi1Od1wlL._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/81LtCGVH+dL._SL1500_.jpg","variant":"PT04","main":{"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX522_.jpg":["522","522"],"https://m.media-amazon.com/images/I/81LtCGVH+dL._SX679_.jpg":["679","679"]}},{"large":"https://m.media-amazon.com/images/I/31aQt0B6CML.jpg","feedbackMetadata":"","thumb":"https://m.media-amazon.com/images/I/31aQt0B6CML._SX38_SY50_CR,0,0,38,50_.jpg","hiRes":"https://m.media-amazon.com/images/I/61xGIi8VUAL._SL1500_.jpg","variant":"PT05","main":{"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX385_.jpg":["385","385"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX569_.jpg":["569","569"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX466_.jpg":["466","466"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX425_.jpg":["425","425"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX679_.jpg":["679","679"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX342_.jpg":["342","342"],"https://m.media-amazon.com/images/I/61xGIi8VUAL._SX522_.jpg":["522","522"]}}]},"heroImages":{"Blue 256 GB":null,"Purple 256 GB":null,"Yellow 128 GB":null,"Blue 128 GB":null,"Yellow 256 GB":null,"Red 128 GB":null,"Red 512 GB":null,"Red 256 GB":null,"Purple 128 GB":null,"Starlight 128 GB":null,"Blue 512 GB":null,"Purple 512 GB":null,"Midnight 128 GB":null,"Starlight 256 GB":null,"Starlight 512 GB":null,"Midnight 512 GB":null,"Midnight 256 GB":null},"enable360Map":{},"staticImages":{"hoverZoomIcon":null,"shoppableSceneViewProductsButton":"https://m.media-amazon.com/images/G/31/shopbylook/shoppable-images/view_products._CB403826950_.svg","zoomLensBackground":"https://m.media-amazon.com/images/G/31/apparel/rcxgs/tile._CB483369979_.gif","shoppableSceneDotHighlighted":"https://m.media-amazon.com/images/G/31/shopbylook/shoppable-images/dot_highlighted._CB649097807_.svg","zoomInCur":"https://m.media-amazon.com/images/G/31/detail-page/cursors/zoomIn._CB485921862_.cur","shoppableSceneSideSheetClose":"https://m.media-amazon.com/images/G/31/shopbylook/shoppable-images/close_x_white._CB416326173_.png","shoppableSceneBackToTopArrow":"https://m.media-amazon.com/images/G/31/shopbylook/shoppable-images/back_to_top_arrow._CB403826950_.svg","arrow":"https://m.media-amazon.com/images/G/31/javascripts/lib/popover/images/light/sprite-vertical-popover-arrow._CB485935443_.png","icon360V2":"https://m.media-amazon.com/images/G/31/HomeCustomProduct/imageBlock-360-thumbnail-icon-small._CB610490043_.png","zoomIn":"https://m.media-amazon.com/images/G/31/detail-page/cursors/zoom-in._CB485944620_.bmp","zoomOut":"https://m.media-amazon.com/images/G/31/detail-page/cursors/zoom-out._CB485943846_.bmp","videoThumbIcon":"https://m.media-amazon.com/images/G/31/Quarterdeck/en_US/images/video._CB485935501_SX38_SY50_CR,0,0,38,50_.gif","spinnerNoLabel":"https://m.media-amazon.com/images/G/31/ui/loadIndicators/loading-large._CB485945283_.gif","zoomOutCur":"https://m.media-amazon.com/images/G/31/detail-page/cursors/zoomOut._CB485921702_.cur","videoSWFPath":null,"grabbing":"https://m.media-amazon.com/images/G/31/HomeCustomProduct/grabbingbox._CB485943533_.cur","shoppableSceneDot":"https://m.media-amazon.com/images/G/31/shopbylook/shoppable-images/dot._CB649097807_.svg","icon360":"https://m.media-amazon.com/images/G/31/HomeCustomProduct/360_icon_73x73v2._CB485971317_SX38_SY50_CR,0,0,38,50_.png","grab":"https://m.media-amazon.com/images/G/31/HomeCustomProduct/grabbox._CB485922685_.cur","spinner":"https://m.media-amazon.com/images/G/31/ui/loadIndicators/loading-large_labeled._CB485921387_.gif"},"staticStrings":{"dragToSpin":"Drag to Spin","videos":"Videos","video":"video","shoppableSceneTabsTitleT3":"Shop the collection","shoppableSceneTabsTitle":"Shop similar items","shoppableSceneTabsTitleT2":"Shop this style ","ivImageThumbnailLabelAnnounce":"Thumbnail image ###ivImageThumbnailIndex","rollOverToZoom":"Roll over image to zoom in","singleVideo":"VIDEO","clickSceneTagsToShopProducts":"Click on the dots to view similar items","close":"Close","shoppableSceneViewProductsButton":"Shop similar items","images":"Images","watchMoreVideos":"Click to see more videos","shoppableSceneViewProductsButtonT2":"Shop this style ","shoppableSceneViewProductsButtonT1":"Shop the look","shoppableSceneViewProductsButtonT3":"Shop the collection","allMedia":"All Media","clickToExpand":"Click to open expanded view","shoppableSceneTabsTitleT1":"Shop the look","playVideo":"Click to play video","shoppableSceneNoSuggestions":"No results available","touchToZoom":"Touch the image to zoom in","multipleVideos":"VIDEOS","shoppableSceneSeeMoreString":"See more","pleaseSelect":"Please select","clickForFullView":"Click to see full view","clickToZoom":"Click on image to zoom in"},"useChildVideos":true,"useClickZoom":false,"useHoverZoom":true,"useHoverZoomIpad":false,"visualDimensions":["color_name","size_name"],"mainImageHeightPartitions":null,"mainImageMaxSizes":null,"heroFocalPoint":null,"showMagnifierOnHover":false,"disableHoverOnAltImages":false,"overrideAltImageClickAction":false,"naturalMainImageSize":null,"imgTagWrapperClasses":null,"prioritizeVideos":false,"usePeekHover":false,"fadeMagnifier":false,"repositionHeroImage":false,"heroVideoVariant":null,"videos":[{"creatorProfile":{},"groupType":"IB_G1","aciContentId":"amzn1.vse.video.12c6553a19274bff8ac304bf336102a8","offset":"0","thumb":"https://m.media-amazon.com/images/I/31HYKc6vHiL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg","durationSeconds":52,"marketPlaceID":"A21TJRUUN4KGV","isVideo":true,"isHeroVideo":false,"title":"Apple iPhone 14","languageCode":"en_IN","holderId":"holder12c6553a19274bff8ac304bf336102a8","url":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/80b3085c-9309-47a6-9dba-090ec4919eb5/default.jobtemplate.hls.m3u8","videoHeight":"1080","videoWidth":"1920","durationTimestamp":"00:52","rankingStrategy":"DEFAULT","slateUrl":"https://m.media-amazon.com/images/I/31HYKc6vHiL.SX522_.jpg","minimumAge":0,"variant":"MAIN","slateHash":{"extension":"jpg","physicalID":null,"width":"640","height":"360"},"mediaObjectId":"12c6553a19274bff8ac304bf336102a8","thumbUrl":"https://m.media-amazon.com/images/I/31HYKc6vHiL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg"},{"creatorProfile":{},"groupType":"IB_G1","aciContentId":"amzn1.vse.video.113e2f85a5ef4c3da1016ce09f6811ce","offset":"0","thumb":"https://m.media-amazon.com/images/I/31uYaDqgfXL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg","durationSeconds":49,"marketPlaceID":"A21TJRUUN4KGV","isVideo":true,"isHeroVideo":false,"title":"Apple iPhone 14","languageCode":"en_IN","holderId":"holder113e2f85a5ef4c3da1016ce09f6811ce","url":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/8ef7b58c-ef28-4501-9e43-6feee2f67847/default.jobtemplate.hls.m3u8","videoHeight":"1080","videoWidth":"1920","durationTimestamp":"00:49","rankingStrategy":"DEFAULT","slateUrl":"https://m.media-amazon.com/images/I/31uYaDqgfXL.SX522_.jpg","minimumAge":0,"variant":"MAIN","slateHash":{"extension":"jpg","physicalID":null,"width":"640","height":"360"},"mediaObjectId":"113e2f85a5ef4c3da1016ce09f6811ce","thumbUrl":"https://m.media-amazon.com/images/I/31uYaDqgfXL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg"}],"title":"Apple iPhone 14 (128 GB) - Blue","airyConfigEnabled":false,"airyConfig":null,"vseVideoDataSourceTreatment":"T1","mediaAsin":"B0BDK62PDX","parentAsin":"B0BDSPPRN8","largeSCLVideoThumbnail":false,"displayVideoBanner":false,"useVSEVideos":true,"notShowVideoCount":false,"enableS2WithoutS1":false,"showNewMBLB":false,"useTabbedImmersiveView":true,"dpRequestId":"QV6Z0G1VWWN6RDW0ZTK2","customerId":"","contentWeblab":"","contentWeblabTreatment":"","dp60VideoThumbMap":null,"videoBackgroundChromefulMainView":"black"}');
data["alwaysIncludeVideo"] = obj.alwaysIncludeVideo ? 1 : 0;
data["autoplayVideo"] = obj.autoplayVideo ? 1 : 0;
data["defaultColor"] = obj.defaultColor;
data["maxAlts"] = obj.maxAlts;
data["altsOnLeft"] = obj.altsOnLeft;
data["newVideoMissing"] = obj.newVideoMissing;
data["lazyLoadExperienceDisabled"] = obj.lazyLoadExperienceDisabled;
data["lazyLoadExperienceOnHoverDisabled"] = obj.lazyLoadExperienceOnHoverDisabled;
data["useChromelessVideoPlayer"] = obj.useChromelessVideoPlayer ? 1 : 0;
data["colorToAsin"] = obj.colorToAsin;
data["ivRepresentativeAsin"] = obj.ivRepresentativeAsin;
data["ivImageSetKeys"] = obj.ivImageSetKeys;
data["useIV"] = obj.useIV ? 1 : 0;
data["tabletWeb"] = obj.tabletWeb ? 1 : 0;
data["views"] = obj.views;
data["enhancedHoverOverlay"] = obj.enhancedHoverOverlay;
data["landingAsinColor"] = obj.landingAsinColor;
data["colorImages"] = obj.colorImages;
data["heroImage"] = obj.heroImages;
data["spin360ColorEnabled"] = obj.enable360Map;
data["staticImages"] = obj.staticImages;
data["staticStrings"] = obj.staticStrings;
data["useChildVideos"] = obj.useChildVideos ? 1 : 0;
data["useClickZoom"] = obj.useClickZoom ? 1 : 0;
data["useHoverZoom"] = obj.useHoverZoom ? 1 : 0;
data["useHoverZoomIpad"] = obj.useHoverZoomIpad ? 1 : 0;
data["visualDimensions"] = obj.visualDimensions;
data["isLargeSCLVideoThumbnail"] = obj.largeSCLVideoThumbnail;
data["mainImageSizes"] = obj.mainImageSizes;
data["displayVideoBanner"] = obj.displayVideoBanner;
data["mainImageHeightPartitions"] = obj.mainImageHeightPartitions;
data["mainImageMaxSizes"] = obj.mainImageMaxSizes;
data["heroFocalPoint"] = obj.heroFocalPoint;
data["showMagnifierOnHover"] = obj.showMagnifierOnHover ? 1 : 0;
data["disableHoverOnAltImages"] = obj.disableHoverOnAltImages ? 1 : 0;
data["overrideAltImageClickAction"] = obj.overrideAltImageClickAction ? 1 : 0;
data["naturalMainImageSize"] = obj.naturalMainImageSize;
data["imgTagWrapperClasses"] = obj.imgTagWrapperClasses;
data["prioritizeVideos"] = obj.prioritizeVideos;
data["usePeekHover"] = obj.usePeekHover;
data["fadeMagnifier"] = obj.fadeMagnifier;
data["repositionHeroImage"] = obj.repositionHeroImage;
data["heroVideoVariant"] = obj.heroVideoVariant;
data["videos"] = obj.videos;
data["productGroupID"] = obj.productGroupID;
data["title"] = obj.title;
data["airyConfigEnabled"] = obj.airyConfigEnabled;
if (obj.airyConfigEnabled) {
  data["airyConfig"] = obj.airyConfig;
}
data["isDPXFeatureEnabled"] = true;
data["useTabbedImmersiveView"] = obj.useTabbedImmersiveView;
data["vseVideoDataSourceTreatment"] = obj.vseVideoDataSourceTreatment;
data["rankingStrategy"] = obj.rankingStrategy;
data["contentWeblab"] = obj.contentWeblab;
data["contentWeblabTreatment"] = obj.contentWeblabTreatment;
data["useVSEVideos"] = obj.useVSEVideos;
data["dpRequestId"] = obj.dpRequestId;
data["mediaAsin"] = obj.mediaAsin;
data["parentAsin"] = obj.parentAsin;
data["dp60VideoThumbMap"] = obj.dp60VideoThumbMap;
data["videoBackgroundChromefulMainView"] = obj.videoBackgroundChromefulMainView;
data["notShowVideoCount"] = obj.notShowVideoCount;
data["enableS2WithoutS1"] = obj.enableS2WithoutS1;
data["customerId"] = obj.customerId;
return data;
});



  P.now('dpJsAssetsLoadMarker').execute(function(markerObj) {
      if (!markerObj) {
          P.declare('dpJsAssetsLoadMarker', {});
      }
  });



  P.now('sp.load.js').execute(function(jsObj) {
      if (!jsObj) {
          P.declare('sp.load.js', {});
      }
  });
  


    if(typeof uex === 'function'){uex('ld', 'atfClientSideWaitTimeDesktop', {wb: 1});};
  

{"widgetSchema":"dp:widget:","dimensionSchema":"dp:dims:"}

P.when('cf').execute(function() { ue.count('dp:widget:dpxSize:dpxBTFSize', 112);ue.count('dp:widget:dpxSize:dpxATFSize', 675);});

{"assetNames":["InContextDetailPageAssets"]}

P.when('cf').execute(function() { ue.count('dp:widget:dpxSize:dpxBTFSize', 112);});


P.when('A').execute('triggerVideoAjax', function(A){
var obj = A.$.parseJSON('{"dataInJson":null,"colorImages":{},"videos":[{"creatorProfile":{},"groupType":"IB_G1","aciContentId":"amzn1.vse.video.12c6553a19274bff8ac304bf336102a8","offset":"0","thumb":"https://m.media-amazon.com/images/I/31HYKc6vHiL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg","durationSeconds":52,"marketPlaceID":"A21TJRUUN4KGV","isVideo":true,"isHeroVideo":false,"title":"Apple iPhone 14","languageCode":"en_IN","holderId":"holder12c6553a19274bff8ac304bf336102a8","url":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/80b3085c-9309-47a6-9dba-090ec4919eb5/default.jobtemplate.hls.m3u8","videoHeight":"1080","videoWidth":"1920","durationTimestamp":"00:52","rankingStrategy":"DEFAULT","slateUrl":"https://m.media-amazon.com/images/I/31HYKc6vHiL.SX522_.jpg","minimumAge":0,"variant":"MAIN","slateHash":{"extension":"jpg","physicalID":null,"width":"640","height":"360"},"mediaObjectId":"12c6553a19274bff8ac304bf336102a8","thumbUrl":"https://m.media-amazon.com/images/I/31HYKc6vHiL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg"},{"creatorProfile":{},"groupType":"IB_G1","aciContentId":"amzn1.vse.video.113e2f85a5ef4c3da1016ce09f6811ce","offset":"0","thumb":"https://m.media-amazon.com/images/I/31uYaDqgfXL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg","durationSeconds":49,"marketPlaceID":"A21TJRUUN4KGV","isVideo":true,"isHeroVideo":false,"title":"Apple iPhone 14","languageCode":"en_IN","holderId":"holder113e2f85a5ef4c3da1016ce09f6811ce","url":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/8ef7b58c-ef28-4501-9e43-6feee2f67847/default.jobtemplate.hls.m3u8","videoHeight":"1080","videoWidth":"1920","durationTimestamp":"00:49","rankingStrategy":"DEFAULT","slateUrl":"https://m.media-amazon.com/images/I/31uYaDqgfXL.SX522_.jpg","minimumAge":0,"variant":"MAIN","slateHash":{"extension":"jpg","physicalID":null,"width":"640","height":"360"},"mediaObjectId":"113e2f85a5ef4c3da1016ce09f6811ce","thumbUrl":"https://m.media-amazon.com/images/I/31uYaDqgfXL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg"}],"enableS2WithoutS1":false,"notShowVideoCount":false,"showNewMBLB":false,"lazyLoadExperienceDisabled":true,"lazyLoadExperienceOnHoverDisabled":false,"refactorEnabled":false,"mainImageSizes":[["342","445"],["385","500"],["425","550"],["466","606"],["522","679"],["569","741"],["679","879"]],"colorImage":null}');
A.trigger('enableS2WithoutS1Ajax',obj.enableS2WithoutS1);
A.trigger('triggerVideoAjax',obj.videos);
A.trigger('notShowVideoCountAjax',obj.notShowVideoCount);
});
  


    (function() {
        var performance = window.performance;
        var isApiSupported = performance && performance.mark && performance.measure && performance.getEntriesByName;

        if (isApiSupported) {
            performance.mark('content-grid-widget:1.0' + ':bb');
        } else if (window.ue) {
            window.ue.count('mars:missing-performance-api', 1);
        }
    })();



  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/31Kmc5SMmDL.js?AUIClients/MarsContentGridAssets');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/01AYCAZlSIL.js?AUIClients/MarsUtilityAssets');



    P.when("A", "MarsContentGridImageLoader").execute(function(A, imageLoader) {
        var $ = A.$;
        var images = $(".content-grid-image-lazy-loading");
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            imageLoader.load(image);
        }
    });



    P.when("A", "MarsContentGridImageLoader").execute(function(A, imageLoader) {
        var $ = A.$;
        var images = $(".content-grid-image-lazy-loading");
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            imageLoader.load(image);
        }
    });



    P.when("A", "MarsContentGridImageLoader").execute(function(A, imageLoader) {
        var $ = A.$;
        var images = $(".content-grid-image-lazy-loading");
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            imageLoader.load(image);
        }
    });



    P.when("A", "MarsContentGridImageLoader").execute(function(A, imageLoader) {
        var $ = A.$;
        var images = $(".content-grid-image-lazy-loading");
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            imageLoader.load(image);
        }
    });



    P.when("A", "MarsContentGridImageLoader").execute(function(A, imageLoader) {
        var $ = A.$;
        var images = $(".content-grid-image-lazy-loading");
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            imageLoader.load(image);
        }
    });



    P.when("A", "MarsContentGridImageLoader").execute(function(A, imageLoader) {
        var $ = A.$;
        var images = $(".content-grid-image-lazy-loading");
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            imageLoader.load(image);
        }
    });



    P.when("A", "MarsContentGridImageLoader").execute(function(A, imageLoader) {
        var $ = A.$;
        var images = $(".content-grid-image-lazy-loading");
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            imageLoader.load(image);
        }
    });



    P.when("A", "MarsContentGridImageLoader").execute(function(A, imageLoader) {
        var $ = A.$;
        var images = $(".content-grid-image-lazy-loading");
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            imageLoader.load(image);
        }
    });



    P.when("A", "MarsContentGridImageLoader").execute(function(A, imageLoader) {
        var $ = A.$;
        var images = $(".content-grid-image-lazy-loading");
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            imageLoader.load(image);
        }
    });



        P.when("MarsContentGridAccessibilityProcessor").execute(function (ContentGridA11yProcessor) {
            ContentGridA11yProcessor.getInstance().requestProcessMarkup();
        });
    


    (function() {
        var performance = window.performance;
        var isApiSupported = performance && performance.mark && performance.measure && performance.getEntriesByName;
        if (!isApiSupported) {
            
            return;
        }

        var key = 'content-grid-widget:1.0'
        performance.mark(key + ':be');

        var entry = key + ':clientBodyBeginToEnd';
        performance.measure(entry, key + ':bb', key + ':be');

        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }

        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    })();



    (function() {
        var performance = window.performance;
        var isApiSupported = performance && performance.mark && performance.measure && performance.getEntriesByName;

        if (isApiSupported) {
            performance.mark('mars-device-upgrader-widget:1.0' + ':bb');
        } else if (window.ue) {
            window.ue.count('mars:missing-performance-api', 1);
        }
    })();



  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/216USBCbfBL.js?AUIClients/MarsDeviceUpgraderAssets');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/11rLn7DbSVL.js?AUIClients/CentaurusUIMarkupAssets-CentaurusUIAddToCartButtonAssets');


{"jsonData":["display","camera","front camera","face/touch id","chip","water resistant","charging"]}

{"jsonData":"[]"}

{"jsonData":"\"https://m.media-amazon.com/images/G/31/kindle/dp/2015/mobile/AUI-checkmark-2._CB443723193_.png\""}


    (function() {
        var performance = window.performance;
        var isApiSupported = performance && performance.mark && performance.measure && performance.getEntriesByName;
        if (!isApiSupported) {
            
            return;
        }

        var key = 'mars-device-upgrader-widget:1.0'
        performance.mark(key + ':be');

        var entry = key + ':clientBodyBeginToEnd';
        performance.measure(entry, key + ':bb', key + ':be');

        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }

        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    })();



    (function() {
        var performance = window.performance;
        var isApiSupported = performance && performance.mark && performance.measure && performance.getEntriesByName;

        if (isApiSupported) {
            performance.mark('content-grid-widget:1.0' + ':bb');
        } else if (window.ue) {
            window.ue.count('mars:missing-performance-api', 1);
        }
    })();



  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/31Kmc5SMmDL.js?AUIClients/MarsContentGridAssets');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/01AYCAZlSIL.js?AUIClients/MarsUtilityAssets');



        P.when("MarsContentGridAccessibilityProcessor").execute(function (ContentGridA11yProcessor) {
            ContentGridA11yProcessor.getInstance().requestProcessMarkup();
        });
    


    (function() {
        var performance = window.performance;
        var isApiSupported = performance && performance.mark && performance.measure && performance.getEntriesByName;
        if (!isApiSupported) {
            
            return;
        }

        var key = 'content-grid-widget:1.0'
        performance.mark(key + ':be');

        var entry = key + ':clientBodyBeginToEnd';
        performance.measure(entry, key + ':bb', key + ':be');

        var entries = performance.getEntriesByName(entry);
        if (entries.length === 0) {
            return;
        }

        entries = entries.splice(entries.length - 1, 1);
        var duration = entries[0].duration;
        if (window.ue) {
            window.ue.count(entry, duration);
        }
    })();


if(window.mix_csa){window.mix_csa('[cel_widget_id="buffet-disclaimers-card_DetailPage_2"]', '#CardInstanceBkv8S5zBA_Z-t1HumlJZHw')('mark', 'bb')}

if(window.uet){window.uet('bb','buffet-disclaimers-card_DetailPage_2',{wb: 1})}

if(window.mix_csa){window.mix_csa('[cel_widget_id="buffet-disclaimers-card_DetailPage_2"]', '#CardInstanceBkv8S5zBA_Z-t1HumlJZHw')('mark', 'be')}

if(window.uet){window.uet('be','buffet-disclaimers-card_DetailPage_2',{wb: 1})}

if(window.mixTimeout){window.mixTimeout('buffet-disclaimers-card', 'CardInstanceBkv8S5zBA_Z-t1HumlJZHw', 90000)};
P.when('mix:@amzn/mix.client-runtime', 'mix:buffet-disclaimers-card__D8xPyQie').execute(function (runtime, cardModule) {runtime.registerCardFactory('CardInstanceBkv8S5zBA_Z-t1HumlJZHw', cardModule).then(function(){if(window.mix_csa){window.mix_csa('[cel_widget_id="buffet-disclaimers-card_DetailPage_2"]', '#CardInstanceBkv8S5zBA_Z-t1HumlJZHw')('mark', 'functional')}if(window.uex){window.uex('ld','buffet-disclaimers-card_DetailPage_2',{wb: 1})}});});


P.when('ready').execute(function(){P.load.js('https://images-eu.ssl-images-amazon.com/images/I/41ggnX5zbyL.js?xcp');
});

if(window.mix_csa){window.mix_csa('[cel_widget_id="legal-compliance-card_DetailPage_1"]', '#CardInstancebZiBzZ2TnbFPKnDrVP9SUQ')('mark', 'bb')}

if(window.uet){window.uet('bb','legal-compliance-card_DetailPage_1',{wb: 1})}

if(window.mix_csa){window.mix_csa('[cel_widget_id="legal-compliance-card_DetailPage_1"]', '#CardInstancebZiBzZ2TnbFPKnDrVP9SUQ')('mark', 'be')}

if(window.uet){window.uet('be','legal-compliance-card_DetailPage_1',{wb: 1})}

if(window.mixTimeout){window.mixTimeout('legal-compliance-card', 'CardInstancebZiBzZ2TnbFPKnDrVP9SUQ', 90000)};
P.when('mix:@amzn/mix.client-runtime', 'mix:legal-compliance-card__ZlnG7bNb').execute(function (runtime, cardModule) {runtime.registerCardFactory('CardInstancebZiBzZ2TnbFPKnDrVP9SUQ', cardModule).then(function(){if(window.mix_csa){window.mix_csa('[cel_widget_id="legal-compliance-card_DetailPage_1"]', '#CardInstancebZiBzZ2TnbFPKnDrVP9SUQ')('mark', 'functional')}if(window.uex){window.uex('ld','legal-compliance-card_DetailPage_1',{wb: 1})}});});


P.load.js('https://images-eu.ssl-images-amazon.com/images/I/11vaWz38giL.js?xcp');



  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/312Ac5cTxnL._RC|21K5x2ItMwL.js,41-oTEzlJdL.js_.js?AUIClients/NileInlineCustomerExperienceWidgetDPXRexAssets-rufus');


{"marketplaceId":"A21TJRUUN4KGV","asin":"B0BDK62PDX","blueEnabled":false,"locale":"en_IN","conversationHistoryId":"conv-history","requestId":"QV6Z0G1VWWN6RDW0ZTK2"}

{}


  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/41mdM5MiPcL._RC|01tj0YKAiXL.js,21YS6aRvKmL.js,41Oqkkr7yIL.js,316QnR6nr+L.js,01VSu9SK-XL.js,41l6Ts6x3oL.js_.js?AUIClients/DesktopMedleyFilteringMetaAsset#386124-T1.666973-T1');


if(window.mix_csa){window.mix_csa('[cel_widget_id="cr-ratings-histogram_customer-reviews-detail_0"]', '#CardInstance7RrTk_w5ZzOO7x5i-yMVog')('mark', 'bb')}

if(window.uet){window.uet('bb','cr-ratings-histogram_customer-reviews-detail_0',{wb: 1})}

if(window.mix_csa){window.mix_csa('[cel_widget_id="cr-ratings-histogram_customer-reviews-detail_0"]', '#CardInstance7RrTk_w5ZzOO7x5i-yMVog')('mark', 'be')}

if(window.uet){window.uet('be','cr-ratings-histogram_customer-reviews-detail_0',{wb: 1})}

if(window.mixTimeout){window.mixTimeout('cr-ratings-histogram', 'CardInstance7RrTk_w5ZzOO7x5i-yMVog', 90000)};
P.when('mix:@amzn/mix.client-runtime', 'mix:cr-ratings-histogram__AiLYd_Jo').execute(function (runtime, cardModule) {runtime.registerCardFactory('CardInstance7RrTk_w5ZzOO7x5i-yMVog', cardModule).then(function(){if(window.mix_csa){window.mix_csa('[cel_widget_id="cr-ratings-histogram_customer-reviews-detail_0"]', '#CardInstance7RrTk_w5ZzOO7x5i-yMVog')('mark', 'functional')}if(window.uex){window.uex('ld','cr-ratings-histogram_customer-reviews-detail_0',{wb: 1})}});});


P.load.js('https://images-eu.ssl-images-amazon.com/images/I/11iMNgfhiwL.js?xcp');


if(window.mix_csa){window.mix_csa('[cel_widget_id="cr-product-insights_customer-reviews-product-insights_0"]', '#CardInstance50hn9kgtLHACxZ_oDH0sLA')('mark', 'bb')}

if(window.uet){window.uet('bb','cr-product-insights_customer-reviews-product-insights_0',{wb: 1})}

if(window.mix_csa){window.mix_csa('[cel_widget_id="cr-product-insights_customer-reviews-product-insights_0"]', '#CardInstance50hn9kgtLHACxZ_oDH0sLA')('mark', 'be')}

if(window.uet){window.uet('be','cr-product-insights_customer-reviews-product-insights_0',{wb: 1})}

if(window.mixTimeout){window.mixTimeout('cr-product-insights', 'CardInstance50hn9kgtLHACxZ_oDH0sLA', 90000)};
P.when('mix:@amzn/mix.client-runtime', 'mix:cr-product-insights__abZDackv').execute(function (runtime, cardModule) {runtime.registerCardFactory('CardInstance50hn9kgtLHACxZ_oDH0sLA', cardModule).then(function(){if(window.mix_csa){window.mix_csa('[cel_widget_id="cr-product-insights_customer-reviews-product-insights_0"]', '#CardInstance50hn9kgtLHACxZ_oDH0sLA')('mark', 'functional')}if(window.uex){window.uex('ld','cr-product-insights_customer-reviews-product-insights_0',{wb: 1})}});});


P.load.js('https://images-eu.ssl-images-amazon.com/images/I/41WfSyonGbL.js?xcp');



   function toggleSeeAllRankingView() {
       P.when('A', 'cr-ranking-image-popover-controller').execute(function(A, imagePopoverController) {
          imagePopoverController.toggleSeeAllView(true);
       });
   }


if(window.mix_csa){window.mix_csa('[cel_widget_id="cr-media-carousel_customer-reviews-detail-media_0"]', '#CardInstancekeKtkfOHQs9FAv22epp0Og')('mark', 'bb')}

if(window.uet){window.uet('bb','cr-media-carousel_customer-reviews-detail-media_0',{wb: 1})}

if(window.mix_csa){window.mix_csa('[cel_widget_id="cr-media-carousel_customer-reviews-detail-media_0"]', '#CardInstancekeKtkfOHQs9FAv22epp0Og')('mark', 'be')}

if(window.uet){window.uet('be','cr-media-carousel_customer-reviews-detail-media_0',{wb: 1})}

if(window.mixTimeout){window.mixTimeout('cr-media-carousel', 'CardInstancekeKtkfOHQs9FAv22epp0Og', 90000)};
P.when('mix:@amzn/mix.client-runtime', 'mix:cr-media-carousel__3lY2d4Gd').execute(function (runtime, cardModule) {runtime.registerCardFactory('CardInstancekeKtkfOHQs9FAv22epp0Og', cardModule).then(function(){if(window.mix_csa){window.mix_csa('[cel_widget_id="cr-media-carousel_customer-reviews-detail-media_0"]', '#CardInstancekeKtkfOHQs9FAv22epp0Og')('mark', 'functional')}if(window.uex){window.uex('ld','cr-media-carousel_customer-reviews-detail-media_0',{wb: 1})}});});


P.load.js('https://images-eu.ssl-images-amazon.com/images/I/614y7T76hNL.js?xcp');



        P.when('A', 'cr-ranking-image-popover-controller').execute(function(A, imagePopoverController) {
            A.on("a:popover:beforeShow:widget_customer_image_gallery", function(data) {
                imagePopoverController.loadDataAndInitImageGalleryPopover(data, "B0BDK62PDX", [], "hJp4y3001YTyhEBNUeIJP6k49CFIcJqBUcwK0ZrjBEDdAAAAAGfU36UAAAAB");
            });
        });
    


  var metricsName = "DesktopCredibleBadgesInTopReviewsDetailPageCount"



      if(window.ue) {
        ue.count(metricsName, 0)
      }
    


        (function() {
            P.when('cr-A', 'ready').execute(function(A) {
                if(typeof A.toggleExpanderAriaLabel === 'function') {
                    A.toggleExpanderAriaLabel('review_text_read_more', 'Read more of this review', 'Read less of this review');
                }
            });
        })();
    


  var metricsName = "DesktopCredibleBadgesInTopReviewsDetailPageCount"



      if(window.ue) {
        ue.count(metricsName, 0)
      }
    


  var metricsName = "DesktopCredibleBadgesInTopReviewsDetailPageCount"



      if(window.ue) {
        ue.count(metricsName, 0)
      }
    


  var metricsName = "DesktopCredibleBadgesInTopReviewsDetailPageCount"



      if(window.ue) {
        ue.count(metricsName, 0)
      }
    


  var metricsName = "DesktopCredibleBadgesInTopReviewsDetailPageCount"



      if(window.ue) {
        ue.count(metricsName, 0)
      }
    


  var metricsName = "DesktopCredibleBadgesInTopReviewsDetailPageCount"



      if(window.ue) {
        ue.count(metricsName, 0)
      }
    


  var metricsName = "DesktopCredibleBadgesInTopReviewsDetailPageCount"



      if(window.ue) {
        ue.count(metricsName, 0)
      }
    


   function toggleSeeAllView() {
       P.when('A', 'cr-image-popover-controller').execute(function(A, imagePopoverController) {
          imagePopoverController.toggleSeeAllView(true);
       });
   }



        P.when('A', 'cr-image-popover-controller').execute(function(A, imagePopoverController) {
          A.on("a:popover:beforeShow:R19E2RCZKAIR1D_gallerySection_main", function(data) {
            imagePopoverController.initImagePopover("R19E2RCZKAIR1D", "[https://m.media-amazon.com/images/I/71FSPWxdmxL.jpg]", data);
          });
        });
    


  var metricsName = "DesktopCredibleBadgesInTopReviewsDetailPageCount"



      if(window.ue) {
        ue.count(metricsName, 0)
      }
    


      var lopList = "[fr-CA]";
      var languageOfPreference = "en-IN";
      if(isLoPToAutoTranslateAvailable()) {
          // auto translation will be enabled based on cookie value. For 1 or undefined we auto translate and for others we show original
          // for more details refer: https://w.amazon.com/bin/view/NARX/Projects/FRCX-Customer-Reviews/
          var stickyCookieValue = document.cookie.match(/(?:(?:^|.*;\s*)cm-cr-sticky-translate\s*\=\s*([^;]*).*$)|^.*$/).pop();
          // Cookie value will be 1 when reviews are translated So checking if reviews are already translated on page load
          if (stickyCookieValue === undefined || stickyCookieValue === "1") {
              P.when('jQuery', 'ready', 'cr-generic-declarative-actions').execute(function ($) {
                  $('#cr-translate-1369452100').click();
              });
          }
      }

      function isLoPToAutoTranslateAvailable() {
          for(const lop of lopList.replace('[', '').replace(']', '').split(',')){
              if(lop.trim() === languageOfPreference) {
                  return true;
              }
          }
          return false;
      }
  


  var metricsName = "DesktopCredibleBadgesInTopReviewsDetailPageCount"



      if(window.ue) {
        ue.count(metricsName, 0)
      }
    


        (function() {
            P.when('cr-A', 'ready').execute(function(A) {
                if(typeof A.toggleExpanderAriaLabel === 'function') {
                    A.toggleExpanderAriaLabel('review_text_read_more', 'Read more of this review', 'Read less of this review');
                }
            });
        })();
    


    (function() {
      P.when('jQuery', 'cr-A', 'ready').execute(function ($) {
        var setLangAttr;
        
            setLangAttr = function ($this, lang) {
              $this.closest('li[data-hook="review"]').find('.cr-original-review-content').attr('lang', lang);
            }
          

        $('.cr-translate-this-review-section').each(function () {
          var $this = $(this);
          var data = $this.find('[data-action="reviews:ajax-post"]').data('reviews:ajax-post');

          if (data) {
            try {
              var lang = JSON.parse(data.params.reviews)[0].locale.language;
              if (lang) {
                setLangAttr($this, lang);
              }
            } catch (ex) {
              //fail silently
            }
          }
        });
      });
    })();
  


var isAUI = typeof P === 'object' && typeof P.when === 'function';
  if(typeof setCSMReq == 'function') {
        setCSMReq('cf');
  }else {
     if(typeof uet == 'function') {
        uet('cf');
     }
     if(isAUI){
     	   P.trigger("cf");
     	}else{
     		amznJQ.completedStage('amznJQ.criticalFeature');
     	}
  }



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('cf').execute(function(){
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/21q6fNgsQrL._RC|211TVD3Y9fL.js,11OyIHCq0lL.js,01GhKb2usNL.js_.js?AUIClients/HardlinesFeatureDetailPageMetaAsset');
});



  if(typeof P !== "undefined" && typeof P.when === "function"){
    P.when('cf').execute(function() {
          P.when('navbarJS-jQuery').execute(function(){});
  P.when('finderFitsJS').execute(function(){});
  P.when('twister').execute(function(){});
  P.when('swfjs').execute(function(){});
  P.when('search-js-jq').execute(function(){});
  P.when('amazonShoveler').execute(function(){});
  P.when('simsJS').execute(function(){});
  P.when('cmuAnnotations').execute(function(){});
  P.when('externalJS.tagging').execute(function(){});
  P.when('amzn-ratings-bar').execute(function(){});
  P.when('accessoriesJS').execute(function(){});
  P.when('priceformatterJS').execute(function(){});
  P.when('CustomerPopover').execute(function(){});

    });
  }



// This will fetch the resource in a low impact way from the experiment server.
// executeOnload will prevent fetching the resource until everything else on the page has loaded.
var cloudfrontImg = new Image();
var shouldExecuteOnload = ("1" == "1");
if (shouldExecuteOnload) {
    if (window.addEventListener) {
        window.addEventListener("load", function() {
            setTimeout(function(){ cloudfrontImg.src = "//cloudfront-labs.amazonaws.com/x.png"; }, 400);}, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", function() {
            setTimeout(function(){ cloudfrontImg.src = "//cloudfront-labs.amazonaws.com/x.png"; }, 400);});
    }
} else {
    setTimeout(function(){ cloudfrontImg.src = "//cloudfront-labs.amazonaws.com/x.png"; }, 400);
}



var isAUI = typeof P === 'object' && typeof P.when === 'function';
  if(typeof setCSMReq == 'function') {
        setCSMReq('cf');
  }else {
     if(typeof uet == 'function') {
        uet('cf');
     }
     if(isAUI){
     	   P.trigger("cf");
     	}else{
     		amznJQ.completedStage('amznJQ.criticalFeature');
     	}
  }



         P.when('atf').execute(function(){
            P.now('usePageRefreshAsset').execute(function(dataObj){
                if(!dataObj){
                    P.declare('usePageRefreshAsset', {});
                }
            });
         });



    P.register('page-refresh-js-init-mason-data', function() {
        var dataToReturn = {"divToUpdateData":{"twister":{"btf-content-53":{"divToUpdate":"btf-content-53_feature_div"},"twister-cf-marker":{"divToUpdate":"twister-cf-marker_feature_div"},"btf-content-14":{"divToUpdate":"btf-content-14_feature_div"},"btf-content-6":{"divToUpdate":"btf-content-6_feature_div"},"btf-content-54":{"divToUpdate":"btf-content-54_feature_div"},"btf-content-24":{"divToUpdate":"btf-content-24_feature_div"},"btf-content-9":{"divToUpdate":"btf-content-9_feature_div"},"dpx-post-purchase-witb-btf":{"divToUpdate":"dpx-post-purchase-witb-btf_feature_div"},"dpx-ajax-block-components":{"divToUpdate":"dpx-ajax-block-components_feature_div"},"btf-content-27":{"divToUpdate":"btf-content-27_feature_div"},"btf-content-23":{"divToUpdate":"btf-content-23_feature_div"},"btf-content-63":{"divToUpdate":"btf-content-63_feature_div"},"btf-content-8":{"divToUpdate":"btf-content-8_feature_div"},"btf-content-62":{"divToUpdate":"btf-content-62_feature_div"},"btf-content-10":{"divToUpdate":"btf-content-10_feature_div"},"btf-content-58":{"divToUpdate":"btf-content-58_feature_div"},"btf-content-2":{"divToUpdate":"btf-content-2_feature_div"},"btf-content-26":{"divToUpdate":"btf-content-26_feature_div"},"btf-content-36":{"divToUpdate":"btf-content-36_feature_div"},"btf-content-57":{"divToUpdate":"btf-content-57_feature_div"},"btf-content-46":{"divToUpdate":"btf-content-46_feature_div"},"btf-content-30":{"divToUpdate":"btf-content-30_feature_div"},"qpe-title-tag":{"divToUpdate":"qpe-title-tag_feature_div"},"btf-content-31":{"divToUpdate":"btf-content-31_feature_div"},"twister-atf-marker":{"divToUpdate":"twister-atf-marker_feature_div"},"dpx-legal":{"divToUpdate":"dpx-legal_feature_div"},"ask-btf":{"divToUpdate":"ask-btf_feature_div"},"btf-content-22":{"divToUpdate":"btf-content-22_feature_div"},"btf-content-61":{"divToUpdate":"btf-content-61_feature_div"},"btf-content-50":{"divToUpdate":"btf-content-50_feature_div"},"btf-content-28":{"divToUpdate":"btf-content-28_feature_div"},"btf-content-35":{"divToUpdate":"btf-content-35_feature_div"},"btf-content-7":{"divToUpdate":"btf-content-7_feature_div"},"btf-content-43":{"divToUpdate":"btf-content-43_feature_div"},"dpx-product-details":{"divToUpdate":"dpx-product-details_feature_div"},"dpx-climate-pledge-friendly-btf":{"divToUpdate":"dpx-climate-pledge-friendly-btf_feature_div"},"btf-content-45":{"divToUpdate":"btf-content-45_feature_div"},"btf-content-65":{"divToUpdate":"btf-content-65_feature_div"},"dpx-image-block-variations":{"divToUpdate":"dpx-image-block-variations_feature_div"},"btf-content-11":{"divToUpdate":"btf-content-11_feature_div"},"btf-content-38":{"divToUpdate":"btf-content-38_feature_div"},"btf-content-41":{"divToUpdate":"btf-content-41_feature_div"},"btf-content-4":{"divToUpdate":"btf-content-4_feature_div"},"btf-content-12":{"divToUpdate":"btf-content-12_feature_div"},"btf-content-47":{"divToUpdate":"btf-content-47_feature_div"},"btf-content-42":{"divToUpdate":"btf-content-42_feature_div"},"btf-content-59":{"divToUpdate":"btf-content-59_feature_div"},"btf-content-34":{"divToUpdate":"btf-content-34_feature_div"},"btf-content-33":{"divToUpdate":"btf-content-33_feature_div"},"dp-fast-track-logger":{"divToUpdate":"dp-fast-track-logger_feature_div"},"btf-content-32":{"divToUpdate":"btf-content-32_feature_div"},"btf-content-21":{"divToUpdate":"btf-content-21_feature_div"},"btf-content-44":{"divToUpdate":"btf-content-44_feature_div"},"btf-content-16":{"divToUpdate":"btf-content-16_feature_div"},"btf-content-15":{"divToUpdate":"btf-content-15_feature_div"},"btf-content-56":{"divToUpdate":"btf-content-56_feature_div"},"btf-content-55":{"divToUpdate":"btf-content-55_feature_div"},"dvd-rental-badge":{"divToUpdate":"dvd-rental-badge_feature_div"},"btf-content-5":{"divToUpdate":"btf-content-5_feature_div"},"btf-content-51":{"divToUpdate":"btf-content-51_feature_div"},"btf-content-40":{"divToUpdate":"btf-content-40_feature_div"},"andon-cord-pulling":{"divToUpdate":"andon-cord-pulling_feature_div"},"btf-content-19":{"divToUpdate":"btf-content-19_feature_div"},"btf-content-1":{"divToUpdate":"btf-content-1_feature_div"},"btf-content-25":{"divToUpdate":"btf-content-25_feature_div"},"btf-content-17":{"divToUpdate":"btf-content-17_feature_div"},"btf-content-3":{"divToUpdate":"btf-content-3_feature_div"},"sopp":{"divToUpdate":"sopp_feature_div"},"btf-content-20":{"divToUpdate":"btf-content-20_feature_div"},"btf-content-52":{"divToUpdate":"btf-content-52_feature_div"},"btf-content-18":{"divToUpdate":"btf-content-18_feature_div"},"btf-content-49":{"divToUpdate":"btf-content-49_feature_div"},"twister-log-metrics":{"divToUpdate":"twister-log-metrics_feature_div"},"btf-content-37":{"divToUpdate":"btf-content-37_feature_div"},"btf-content-64":{"divToUpdate":"btf-content-64_feature_div"},"btf-content-39":{"divToUpdate":"btf-content-39_feature_div"},"btf-content-48":{"divToUpdate":"btf-content-48_feature_div"},"btf-content-13":{"divToUpdate":"btf-content-13_feature_div"},"btf-content-60":{"divToUpdate":"btf-content-60_feature_div"},"btf-content-29":{"divToUpdate":"btf-content-29_feature_div"}},"location":{},"rentbuybox":{},"quantity":{},"newbuybox":{},"sndboxbuybox":{},"upsell":{}}}; //selectively not escaping this.
        return dataToReturn;
    });


{"pageRefreshUrlParams":{"sid":"260-9171825-3931647","ptd":"CELLULAR_PHONE","json":"1","dpxAjaxFlag":"1","isUDPFlag":"1","twisterView":"glance","ee":"2","pgid":"premium_ce_brands_display_on_website","rid":"QV6Z0G1VWWN6RDW0ZTK2","parentAsin":"B0BDSPPRN8","dcm":"1","numericGLProductGroupID":"107","udpWeblabState":"T1","asinList":"B0BDK62PDX","auiAjax":"1","storeID":"apple-devices"}}


P.when('A').execute('triggerVideoAjax', function(A){
var obj = A.$.parseJSON('{"dataInJson":null,"colorImages":{},"videos":[{"creatorProfile":{},"groupType":"IB_G1","aciContentId":"amzn1.vse.video.12c6553a19274bff8ac304bf336102a8","offset":"0","thumb":"https://m.media-amazon.com/images/I/31HYKc6vHiL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg","durationSeconds":52,"marketPlaceID":"A21TJRUUN4KGV","isVideo":true,"isHeroVideo":false,"title":"Apple iPhone 14","languageCode":"en_IN","holderId":"holder12c6553a19274bff8ac304bf336102a8","url":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/80b3085c-9309-47a6-9dba-090ec4919eb5/default.jobtemplate.hls.m3u8","videoHeight":"1080","videoWidth":"1920","durationTimestamp":"00:52","rankingStrategy":"DEFAULT","slateUrl":"https://m.media-amazon.com/images/I/31HYKc6vHiL.SX522_.jpg","minimumAge":0,"variant":"MAIN","slateHash":{"extension":"jpg","physicalID":null,"width":"640","height":"360"},"mediaObjectId":"12c6553a19274bff8ac304bf336102a8","thumbUrl":"https://m.media-amazon.com/images/I/31HYKc6vHiL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg"},{"creatorProfile":{},"groupType":"IB_G1","aciContentId":"amzn1.vse.video.113e2f85a5ef4c3da1016ce09f6811ce","offset":"0","thumb":"https://m.media-amazon.com/images/I/31uYaDqgfXL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg","durationSeconds":49,"marketPlaceID":"A21TJRUUN4KGV","isVideo":true,"isHeroVideo":false,"title":"Apple iPhone 14","languageCode":"en_IN","holderId":"holder113e2f85a5ef4c3da1016ce09f6811ce","url":"https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/8ef7b58c-ef28-4501-9e43-6feee2f67847/default.jobtemplate.hls.m3u8","videoHeight":"1080","videoWidth":"1920","durationTimestamp":"00:49","rankingStrategy":"DEFAULT","slateUrl":"https://m.media-amazon.com/images/I/31uYaDqgfXL.SX522_.jpg","minimumAge":0,"variant":"MAIN","slateHash":{"extension":"jpg","physicalID":null,"width":"640","height":"360"},"mediaObjectId":"113e2f85a5ef4c3da1016ce09f6811ce","thumbUrl":"https://m.media-amazon.com/images/I/31uYaDqgfXL._SX35_SY46._CR0,0,35,46_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg"}],"enableS2WithoutS1":false,"notShowVideoCount":false,"showNewMBLB":false,"lazyLoadExperienceDisabled":true,"lazyLoadExperienceOnHoverDisabled":false,"refactorEnabled":false,"mainImageSizes":[["342","445"],["385","500"],["425","550"],["466","606"],["522","679"],["569","741"],["679","879"]],"colorImage":null}');
A.trigger('enableS2WithoutS1Ajax',obj.enableS2WithoutS1);
A.trigger('triggerVideoAjax',obj.videos);
A.trigger('notShowVideoCountAjax',obj.notShowVideoCount);
});
  


    // Only execute if performance object is defined in JS
    if(typeof performance!= "undefined" && typeof performance.getEntries != "undefined") {

    

        var metaAssetNames = [];
        if(metaAssetNames.length > 0)  {
            for(assetIndex = 0; assetIndex < metaAssetNames.length; assetIndex ++) {
	     var metaAssetName = metaAssetNames[assetIndex];
             var re = new RegExp("\\.css\\?AUIClients/" + metaAssetName); 
             for(i = 0; i < performance.getEntries().length; i++) {	   	
                var dpEntry = performance.getEntries()[i];
		var res = dpEntry.name.match(re);
                if(res && dpEntry.initiatorType  && dpEntry.initiatorType == "link") {
                    var dpmaDuration = dpEntry.duration;
                    ue.count(metaAssetName +".duration", dpmaDuration);
                    if(dpmaDuration < 50) {
                        ue.tag(metaAssetName + "Cached");
                    } else {
                        ue.tag(metaAssetName + "NotCached");
                    }
                    ue.count(metaAssetName + ".startTime", dpEntry.startTime);
                }
	      }
	    }
        }
        else {
                ue.count("DPMANoMetaAsset", 1);
        }

        for(i = 0 ; i < performance.getEntries().length ; i++) {
            var name = performance.getEntries()[i].name ;
            var res = name.match(/\.css\?AUIClients\/AmazonUI/);
	    var initiatorType = performance.getEntries()[i].initiatorType;
            if(res && initiatorType && initiatorType == "link") {
                var duration = performance.getEntries()[i].duration ;
                ue.count("aui.duration", duration);
                ue.count("aui.startTime", performance.getEntries()[i].startTime);
                if(duration < 50) {
                    csmTag = "auiCached";
                }
                else {
                    csmTag = "auiNotCached";
                }

                if(window.ue && ue.tag) {
                    ue.tag(csmTag);
                }
                break;
            }
        }
    }



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('A').execute(function(A){
  if(A.preload){
    A.preload('https://m.media-amazon.com/images/I/11zuylp74DL._RC|61xJcNKKLXL.js,11Y+5x+kkTL.js,51F3LXOLEtL.js,11yKORv-GTL.js,11GgN1+C7hL.js,01+z+uIeJ-L.js,01VRMV3FBdL.js,21u+kGQyRqL.js,012FVc3131L.js,11aD5q6kNBL.js,11rRjDLdAVL.js,51zH7YD-TsL.js,11nAhXzgUmL.js,11dIAzUNpxL.js,1110g-SvlBL.js,116PwN2VXHL.js,21+WA5wfjfL.js,0190vxtlzcL.js,51xvEQZx5oL.js,01JYHc2oIlL.js,31nfKXylf6L.js,01ktRCtOqKL.js,01ASnt2lbqL.js,11bEz2VIYrL.js,31o2NGTXThL.js,01rpauTep4L.js,31N+6dLod0L.js,01tvglXfQOL.js,11+FwJUUPNL.js,014gnDeJDsL.js,11vb6P5C5AL.js,015+pUPweLL.js_.js?AUIClients/AmazonUI');
    A.preload('https://m.media-amazon.com/images/I/11EIQ5IGqaL._RC|01ZTHTZObnL.css,51FIeTurRAL.css,31fFxDf00KL.css,11j2+ObrspL.css,01qDClimA1L.css,01pOTCa2wPL.css,413Vvv3GONL.css,11TIuySqr6L.css,01Rw4F+QU6L.css,11JJsNcqOIL.css,01J3raiFJrL.css,01IdKcBuAdL.css,014QJx7nWqL.css,21Otytu1xYL.css,01Sv7-fQIGL.css,51Cfshh2sJL.css,01XPHJk60-L.css,11ChJlzZQoL.css,01UgxIH-BSL.css,01fxuupJToL.css,21+W7u4fDzL.css,01oATFSeEjL.css,21RWaJb6t+L.css,11I+YZzE7kL.css,211Xmr7zN2L.css,01CFUgsA-YL.css,31WWobXdJQL.css,11PDZ29p-PL.css,111bsezNMhL.css,11tNhCU--0L.css,11msBd9oOTL.css,11BO1RWH3kL.css,011ylpySXkL.css,21Dzvx3cZoL.css,11Wb9slw7JL.css,01uDrkI-EcL.css,215Q9RsWvdL.css,113EFChyAjL.css,11hvENnYNUL.css,11Qek6G6pNL.css,01890+Vwk8L.css,014VAMpg+ZL.css,01qiwJ7qDfL.css,21TAMzcrOKL.css,016mfgi+D2L.css,01gU3ljx0fL.css,21l8QuSB5IL.css,013-xYw+SRL.css_.css?AUIClients/AmazonUI#not-trident');
    A.preload('https://m.media-amazon.com/images/I/51wm4ej5ItL._RC|01gKh-6uxaL.js_.js?AUIClients/InContextDetailPageAssets');
    A.preload('https://m.media-amazon.com/images/I/11CKXHwFQgL.css?AUIClients/InContextDetailPageAssets');
  }
});




function prefetchTYPAssets() {
    var imageAssets = new Array();
    var jsCssAssets = new Array();
      imageAssets.push("https://m.media-amazon.com/images/G/31/x-locale/common/buy-buttons/review-1-click-order._CB485945776_.gif");
      imageAssets.push("https://m.media-amazon.com/images/G/31/x-locale/common/buttons/continue-shopping._CB485936085_.gif");
      imageAssets.push("https://m.media-amazon.com/images/G/31/x-locale/common/buy-buttons/thank-you-elbow._CB485935907_.gif");
      imageAssets.push("https://m.media-amazon.com/images/G/31/x-locale/communities/social/snwicons_v2._CB478838660_.png");
      imageAssets.push("https://m.media-amazon.com/images/G/31/checkout/assets/carrot._CB485936886_.gif");
      imageAssets.push("https://m.media-amazon.com/images/G/31/checkout/thank-you-page/assets/yellow-rounded-corner-sprite._CB485934147_.gif");

    // pre-fetching image assets
    for (var i=0; i<imageAssets.length; i++) {
       new Image().src = imageAssets[i];
    }
    // pre-fetching css and js assets based on different browser types
    var isIE = /*@cc_on!@*/0;
    var isFireFox = /Firefox/.test(navigator.userAgent);
    if (isIE) {
      for (var i=0; i<jsCssAssets.length; i++) {
        new Image().src = jsCssAssets[i];
      }
    }
    else if (isFireFox) {
      for (var i=0; i<jsCssAssets.length; i++) {
        var o =  document.createElement("object");
        o.data = jsCssAssets[i];
        o.width = o.height = 0;
        document.body.appendChild(o);
      }
    }
}

    var onload = function () {
        setTimeout(prefetchTYPAssets, 2000);
    };
    if (window.addEventListener) {
        window.addEventListener("load", onload);
    } else if (window.attachEvent) { /* for <= IE 8 */
        window.attachEvent("onload", onload);
    }



var ocInitTimestamp = 1742004133;



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('msxIngressClick').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/51hvQ7imBZL.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/31xaqk138HL.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/21vL+gHZ-lL.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/31qsJu+hfWL.js?AUIClients/');
});



    window.P && P.now('sp.load.js').execute(function(jsObj){
       if(!jsObj){
           P.declare('sp.load.js', {});
       }
    });  



  window.$Nav && $Nav.when("data").run(function (data) {
    data({
      "accountListContent": { "html": "<div id='nav-al-container'><div id='nav-al-signin'><div id='nav-flyout-ya-signin' class='nav-flyout-content nav-flyout-accessibility'><a href='https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fdp%2FB0BDK62PDX%2F%3F_encoding%3DUTF8%26ref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0' rel='nofollow' class='nav-action-signin-button' data-nav-role='signin' data-nav-ref='nav_signin'><span class='nav-action-inner'>Sign in</span></a><div id='nav-flyout-ya-newCust' class='nav_pop_new_cust nav-flyout-content nav-flyout-accessibility'>New customer? <a href='https://www.amazon.in/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fdp%2FB0BDK62PDX%2F%3F_encoding%3DUTF8%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0' rel='nofollow' class='nav-a' aria-label='New to Amazon? Start here to create an account'>Start here.</a></div></div></div><div id='nav-al-wishlist' class='nav-al-column nav-tpl-itemList nav-flyout-content nav-flyout-accessibility'><div class='nav-title' id='nav-al-title' role='heading' aria-level='6'>Your Lists</div><ul><li><a href='/hz/wishlist/ls?triggerElementID=createList&ref_=nav_ListFlyout_navFlyout_createList_lv_redirect' class='nav-link nav-item'><span class='nav-text'>Create a Wish List</span></a></li><li><a href='/wishlist/universal?ref_=nav_ListFlyout_gno_listpop_uwl' class='nav-link nav-item'><span class='nav-text'>Wish from Any Website</span></a></li><li><a href='/baby-reg/homepage?ref_=nav_ListFlyout_gno_listpop_br' class='nav-link nav-item'><span class='nav-text'>Baby Wishlist</span></a></li><li><a href='/discover/?ref_=nav_ListFlyout_sbl' class='nav-link nav-item'><span class='nav-text'>Discover Your Style</span></a></li><li><a href='/showroom?ref_=nav_ListFlyout_srm_your_desk_wl_in' class='nav-link nav-item'><span class='nav-text'>Explore Showroom</span></a></li></ul></div><div id='nav-al-your-account' class='nav-al-column nav-template nav-flyout-content nav-tpl-itemList nav-flyout-accessibility'><div class='nav-title' role='heading' aria-level='6'>Your Account</div><ul><li><a href='/gp/css/homepage.html?ref_=nav_AccountFlyout_ya' class='nav-link nav-item'><span class='nav-text'>Your Account</span></a></li><li><a id='nav_prefetch_yourorders' href='/gp/css/order-history?ref_=nav_AccountFlyout_orders' class='nav-link nav-item'><span class='nav-text'>Your Orders</span></a></li><li><a href='/hz/wishlist/ls?requiresSignIn=1&ref_=nav_AccountFlyout_wl' class='nav-link nav-item'><span class='nav-text'>Your Wish List</span></a></li><li><a href='/gp/yourstore?ref_=nav_AccountFlyout_recs' class='nav-link nav-item'><span class='nav-text'>Your Recommendations</span></a></li><li><a href='/gp/primecentral?ref_=nav_AccountFlyout_prime' class='nav-link nav-item'><span class='nav-text'>Your Prime Membership</span></a></li><li><a href='/gp/redirect.html?location=https%3A%2F%2Fwww.primevideo.com%2F%3Fref_%3D_apv&source=nav_linktree&token=13D4F90D28CD96790B94E6091246BB1B2AE9FA05' class='nav-link nav-item'><span class='nav-text'>Your Prime Video</span></a></li><li><a href='/auto-deliveries?ref_=nav_AccountFlyout_sns' class='nav-link nav-item'><span class='nav-text'>Your Subscribe & Save Items</span></a></li><li><a href='/hz5/yourmembershipsandsubscriptions?ref_=nav_AccountFlyout_digital_subscriptions' class='nav-link nav-item'><span class='nav-text'>Memberships & Subscriptions</span></a></li><li><a href='/b/?node=2838698031&ld=AZINSOAYAFlyout&ref_=nav_AccountFlyout_sell' class='nav-link nav-item'><span class='nav-text'>Your Seller Account</span></a></li><li><a href='/hz/mycd/myx?pageType=content&ref_=nav_AccountFlyout_myk' class='nav-link nav-item'><span class='nav-text'>Manage Your Content and Devices</span></a></li><li><a href='https://www.amazon.in/business/register/org/landing?ref_=nav_ya_flyout_b2b_reg_bottom_create' class='nav-link nav-item'><span class='nav-text'>Register for a free Business Account</span></a></li></ul></div></div>" },
      "tooltipContent": { "html": "" },
      "signinContent": { "html": "<div id='nav-signin-tooltip'><a href='https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fdp%2FB0BDK62PDX%2F%3F_encoding%3DUTF8%26ref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0' class='nav-action-signin-button' data-nav-role='signin' data-nav-ref='nav_custrec_signin'><span class='nav-action-inner'>Sign in</span></a><div class='nav-signin-tooltip-footer'>New customer? <a href='https://www.amazon.in/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fdp%2FB0BDK62PDX%2F%3F_encoding%3DUTF8%26ref_%3Dnav_custrec_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0' class='nav-a' aria-label='New to Amazon? Start here to create an account'>Start here.</a></div></div>" },
      "templates": {"itemList":"<# var hasColumns = (function () {  var checkColumns = function (_items) {    if (!_items) {      return false;    }    for (var i=0; i<_items.length; i++) {      if (_items[i].columnBreak || (_items[i].items && checkColumns(_items[i].items))) {        return true;      }    }    return false;  };  return checkColumns(items);}()); #><# if(hasColumns) { #>  <# if(items[0].image && items[0].image.src) { #>    <div class='nav-column nav-column-first nav-column-image'>  <# } else if (items[0].greeting) { #>    <div class='nav-column nav-column-first nav-column-greeting'>  <# } else { #>    <div class='nav-column nav-column-first'>  <# } #><# } #><# var renderItems = function(items) { #>  <# jQuery.each(items, function (i, item) { #>    <# if(hasColumns && item.columnBreak) { #>      <# if(item.image && item.image.src) { #>        </div><div class='nav-column nav-column-notfirst nav-column-break nav-column-image'>      <# } else if (item.greeting) { #>        </div><div class='nav-column nav-column-notfirst nav-column-break nav-column-greeting'>      <# } else { #>        </div><div class='nav-column nav-column-notfirst nav-column-break'>      <# } #>    <# } #>    <# if(item.dividerBefore) { #>      <div class='nav-divider'></div>    <# } #>    <# if(item.text || item.content) { #>      <# if(item.url) { #>        <a href='<#=item.url #>' class='nav-link      <# } else {#>        <span class='      <# } #>      <# if(item.panelKey) { #>        nav-hasPanel      <# } #>      <# if(item.items) { #>        nav-title      <# } #>      <# if(item.decorate == 'carat') { #>        nav-carat      <# } #>      <# if(item.decorate == 'nav-action-button') { #>        nav-action-button      <# } #>      nav-item'      <# if(item.extra) { #>        <#=item.extra #>      <# } #>      <# if(item.id) { #>        id='<#=item.id #>'      <# } #>      <# if(item.dataNavRole) { #>        data-nav-role='<#=item.dataNavRole #>'      <# } #>      <# if(item.dataNavRef) { #>        data-nav-ref='<#=item.dataNavRef #>'      <# } #>      <# if(item.panelKey) { #>        data-nav-panelkey='<#=item.panelKey #>'        role='navigation'        aria-label='<#=item.text#>'      <# } #>      <# if(item.subtextKey) { #>        data-nav-subtextkey='<#=item.subtextKey #>'      <# } #>      <# if(item.image && item.image.height > 16) { #>        style='line-height:<#=item.image.height #>px;'      <# } #>      >      <# if(item.decorate == 'carat') { #>        <i class='nav-icon'></i>      <# } #>      <# if(item.image && item.image.src) { #>        <img class='nav-image' src='<#=item.image.src #>' style='height:<#=item.image.height #>px; width:<#=item.image.width #>px;' />      <# } #>      <# if(item.text) { #>        <span class='nav-text<# if(item.classname) { #> <#=item.classname #><# } #>'><#=item.text#><# if(item.badgeText) { #>          <span class='nav-badge'><#=item.badgeText#></span>        <# } #></span>      <# } else if (item.content) { #>        <span class='nav-content'><# jQuery.each(item.content, function (j, cItem) { #><# if(cItem.url && cItem.text) { #><a href='<#=cItem.url #>' class='nav-a'><#=cItem.text #></a><# } else if (cItem.text) { #><#=cItem.text#><# } #><# }); #></span>      <# } #>      <# if(item.subtext) { #>        <span class='nav-subtext'><#=item.subtext #></span>      <# } #>      <# if(item.url) { #>        </a>      <# } else {#>        </span>      <# } #>    <# } #>    <# if(item.image && item.image.src) { #>      <# if(item.url) { #>        <a href='<#=item.url #>'>       <# } #>      <img class='nav-image'      <# if(item.id) { #>        id='<#=item.id #>'      <# } #>      src='<#=item.image.src #>' <# if (item.alt) { #> alt='<#= item.alt #>'<# } #>/>      <# if(item.url) { #>        </a>       <# } #>    <# } #>    <# if(item.items) { #>      <div class='nav-panel'> <# renderItems(item.items); #> </div>    <# } #>  <# }); #><# }; #><# renderItems(items); #><# if(hasColumns) { #>  </div><# } #>","subnav":"<# if (obj && obj.type === 'vertical') { #>  <# jQuery.each(obj.rows, function (i, row) { #>    <# if (row.flyoutElement === 'button') { #>      <div class='nav_sv_fo_v_button'        <# if (row.elementStyle) { #>          style='<#= row.elementStyle #>'        <# } #>      >        <a href='<#=row.url #>' class='nav-action-button nav-sprite'>          <#=row.text #>        </a>      </div>    <# } else if (row.flyoutElement === 'list' && row.list) { #>      <# jQuery.each(row.list, function (j, list) { #>        <div class='nav_sv_fo_v_column <#=(j === 0) ? 'nav_sv_fo_v_first' : '' #>'>          <ul class='<#=list.elementClass #>'>          <# jQuery.each(list.linkList, function (k, link) { #>            <# if (k === 0) { link.elementClass += ' nav_sv_fo_v_first'; } #>            <li class='<#=link.elementClass #>'>              <# if (link.url) { #>                <a href='<#=link.url #>' class='nav_a'><#=link.text #></a>              <# } else { #>                <span class='nav_sv_fo_v_span'><#=link.text #></span>              <# } #>            </li>          <# }); #>          </ul>        </div>      <# }); #>    <# } else if (row.flyoutElement === 'link') { #>      <# if (row.topSpacer) { #>        <div class='nav_sv_fo_v_clear'></div>      <# } #>      <div class='<#=row.elementClass #>'>        <a href='<#=row.url #>' class='nav_sv_fo_v_lmargin nav_a'>          <#=row.text #>        </a>      </div>    <# } #>  <# }); #><# } else if (obj) { #>  <div class='nav_sv_fo_scheduled'>    <#= obj #>  </div><# } #>","htmlList":"<# jQuery.each(items, function (i, item) { #>  <div class='nav-item'>    <#=item #>  </div><# }); #>"}
    })
  })



  window.$Nav && $Nav.declare('config.flyoutURL', null);
  window.$Nav && $Nav.declare('btf.lite');
  window.$Nav && $Nav.declare('btf.full');
  window.$Nav && $Nav.declare('btf.exists');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).register('navCF');



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/319Q3s9ndkL.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/21T5HeBxb2L.js?AUIClients/');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('dpJsAssetsLoadMarker').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/21m-Lut3QVL.js?AUIClients/');
});


 { "rhfHandlerParams":{"currentPageType":"Detail","currentSubPageType":"Glance","excludeAsin":"B0BDK62PDX","fieldKeywords":"","k":"","keywords":"","search":"","auditEnabled":"","previewCampaigns":"","forceWidgets":"","searchAlias":""} } 

(function(a,b){a.attachEvent?a.attachEvent("onload",b):a.addEventListener&&a.addEventListener("load",b,!1)})(window,function(){setTimeout(function(){var el=document.getElementById("sis_pixel_r2");el&&(el.innerHTML='<iframe id="DAsis" src="//aax-eu.amazon-adsystem.com/s/iu3?d=amazon.in&slot=navFooter&a2=0101d9bba77588576cadceb96eb287261cdee848202323ef0b326bee6c4dde2bc8d5&old_oo=0&ts=1742004133475&s=AQtylJAZMktTQjhvrLzdTt-jsMx6DIUF1Asnn54azwA-&gdpr_consent=&gdpr_consent_avl=&cb=1742004133475" width="1" height="1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" tabindex="-1" sandbox></iframe>');var event=new Event("SISPixelCardLoaded");document.dispatchEvent(event);},300)});


(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('afterLoad').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/41enQvbo0+L.js?AUIClients/AmazonLightsaberPageAssets#1061544-T1');
});



(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('afterLoad').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/11RhjigBo3L.js?AUIClients/WebFlowIngressJs');
});


if (window.ue && ue.tag) { ue.tag('FWCIMEnabled'); }


(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('afterLoad').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/71EOqyQDjOL.js?AUIClients/FWCIMAssets');
});



window.ue_ibe = (window.ue_ibe || 0) + 1;
if (window.ue_ibe === 1) {
(function(e,c){function h(b,a){f.push([b,a])}function g(b,a){if(b){var c=e.head||e.getElementsByTagName("head")[0]||e.documentElement,d=e.createElement("script");d.async="async";d.src=b;d.setAttribute("crossorigin","anonymous");a&&a.onerror&&(d.onerror=a.onerror);a&&a.onload&&(d.onload=a.onload);c.insertBefore(d,c.firstChild)}}function k(){ue.uels=g;for(var b=0;b<f.length;b++){var a=f[b];g(a[0],a[1])}ue.deffered=1}var f=[];c.ue&&(ue.uels=h,c.ue.attach&&c.ue.attach("load",k))})(document,window);


if (window.ue && window.ue.uels) {
        var cel_widgets = [ { "c":"celwidget" },{ "s":"#nav-swmslot > div", "id_gen":function(elem, index){ return 'nav_sitewide_msg'; } },{ "c":"feature" },{ "id":"detail-ilm_div" } ];

                ue.uels("https://images-eu.ssl-images-amazon.com/images/I/216YVwoRFDL.js");
}
var ue_mbl=ue_csm.ue.exec(function(h,a){function s(c){b=c||{};a.AMZNPerformance=b;b.transition=b.transition||{};b.timing=b.timing||{};if(a.csa){var d;b.timing.transitionStart&&(d=b.timing.transitionStart);b.timing.processStart&&(d=b.timing.processStart);d&&(csa("PageTiming")("mark","nativeTransitionStart",d),csa("PageTiming")("mark","transitionStart",d))}h.ue.exec(t,"csm-android-check")()&&b.tags instanceof Array&&(c=-1!=b.tags.indexOf("usesAppStartTime")||b.transition.type?!b.transition.type&&-1<
b.tags.indexOf("usesAppStartTime")?"warm-start":void 0:"view-transition",c&&(b.transition.type=c));n=null;"reload"===e._nt&&h.ue_orct||"intrapage-transition"===e._nt?u(b):"undefined"===typeof e._nt&&f&&f.timing&&f.timing.navigationStart&&a.history&&"function"===typeof a.History&&"object"===typeof a.history&&a.history.length&&1!=a.history.length&&(b.timing.transitionStart=f.timing.navigationStart);p&&e.ssw(q,""+(b.timing.transitionStart||n||""));c=b.transition;d=e._nt?e._nt:void 0;c.subType=d;a.ue&&
a.ue.tag&&a.ue.tag("has-AMZNPerformance");e.isl&&a.uex&&a.uex("at","csm-timing");v()}function w(c){a.ue&&a.ue.count&&a.ue.count("csm-cordova-plugin-failed",1)}function t(){return a.cordova&&a.cordova.platformId&&"android"==a.cordova.platformId}function u(){if(p){var c=e.ssw(q),a=function(){},x=e.count||a,a=e.tag||a,k=b.timing.transitionStart,g=c&&!c.e&&c.val;n=c=g?+c.val:null;k&&g&&k>c?(x("csm.jumpStart.mtsDiff",k-c||0),a("csm-rld-mts-gt")):k&&g?a("csm-rld-mts-leq"):g?k||a("csm-rld-mts-no-new"):a("csm-rld-mts-no-old")}f&&
f.timing&&f.timing.navigationStart?b.timing.transitionStart=f.timing.navigationStart:delete b.timing.transitionStart}function v(){try{a.P.register("AMZNPerformance",function(){return b})}catch(c){}}function r(){if(!b)return"";ue_mbl.cnt=null;var c=b.timing,d=b.transition,d=["mts",l(c.transitionStart),"mps",l(c.processStart),"mtt",d.type,"mtst",d.subType,"mtlt",d.launchType];a.ue&&a.ue.tag&&(c.fr_ovr&&a.ue.tag("fr_ovr"),c.fcp_ovr&&a.ue.tag("fcp_ovr"),d.push("fr_ovr",l(c.fr_ovr),"fcp_ovr",l(c.fcp_ovr)));
for(var c="",e=0;e<d.length;e+=2){var f=d[e],g=d[e+1];"undefined"!==typeof g&&(c+="&"+f+"="+g)}return c}function l(a){if("undefined"!==typeof a&&"undefined"!==typeof m)return a-m}function y(a,d){b&&(m=d,b.timing.transitionStart=a,b.transition.type="view-transition",b.transition.subType="ajax-transition",b.transition.launchType="normal",ue_mbl.cnt=r)}var e=h.ue||{},m=h.ue_t0,q="csm-last-mts",p=1===h.ue_sswmts,n,f=a.performance,b;if(a.P&&a.P.when&&a.P.register)return 1===a.ue_fnt&&(m=a.aPageStart||
h.ue_t0),a.P.when("CSMPlugin").execute(function(a){a.buildAMZNPerformance&&a.buildAMZNPerformance({successCallback:s,failCallback:w})}),{cnt:r,ajax:y}},"mobile-timing")(ue_csm,ue_csm.window);

(function(d){d._uess=function(){var a="";screen&&screen.width&&screen.height&&(a+="&sw="+screen.width+"&sh="+screen.height);var b=function(a){var b=document.documentElement["client"+a];return"CSS1Compat"===document.compatMode&&b||document.body["client"+a]||b},c=b("Width"),b=b("Height");c&&b&&(a+="&vw="+c+"&vh="+b);return a}})(ue_csm);

(function(a){function d(a){c&&c("log",a)}var b=document.ue_backdetect,c=a.csa&&a.csa("Errors",{producerId:"csa",logOptions:{ent:"all"}});a.ue_err.buffer&&c&&(a.ue_err.buffer.forEach(d),a.ue_err.buffer.push=d);b&&b.ue_back&&a.ue&&(a.ue.bfini=b.ue_back.value);a.uet&&a.uet("be");a.onLdEnd&&(window.addEventListener?window.addEventListener("load",a.onLdEnd,!1):window.attachEvent&&window.attachEvent("onload",a.onLdEnd));a.ueh&&a.ueh(0,window,"load",a.onLd,1);a.ue&&a.ue.tag&&(a.ue_furl?(b=a.ue_furl.replace(/\./g,
"-"),a.ue.tag(b)):a.ue.tag("nofls"))})(ue_csm);

(function(g,h){function d(a,d){var b={};if(!e||!f)try{var c=h.sessionStorage;c?a&&("undefined"!==typeof d?c.setItem(a,d):b.val=c.getItem(a)):f=1}catch(g){e=1}e&&(b.e=1);return b}var b=g.ue||{},a="",f,e,c,a=d("csmtid");f?a="NA":a.e?a="ET":(a=a.val,a||(a=b.oid||"NI",d("csmtid",a)),c=d(b.oid),c.e||(c.val=c.val||0,d(b.oid,c.val+1)),b.ssw=d);b.tabid=a})(ue_csm,ue_csm.window);

(function(a){var e={rc:1,hob:1,hoe:1,ntd:1,rd_:1,_rd:1};"function"===typeof window.addEventListener&&window.addEventListener("pageshow",function(b){if(b&&b.persisted&&(b=+new Date,b={clickTime:b-1,pageVisible:b},"object"===typeof b&&"object"===typeof a.ue.markers&&"object"===typeof a.ue&&"function"===typeof a.uex)){if("function"===typeof a.uet){for(var c in a.ue.markers)!a.ue.markers.hasOwnProperty(c)||c in e||a.uet(c,void 0,void 0,b.pageVisible);a.uet("tc",void 0,void 0,b.clickTime);a.uet("ty",void 0,
void 0,b.clickTime+2)}(c=document.ue_backdetect)&&c.ue_back&&(a.ue.bfini=+c.ue_back.value+1);a.ue.isBFonMshop=!0;a.ue.isBFCache=!0;a.ue.t0=b.clickTime;a.ue.viz=["visible:0"];"function"===typeof a.ue.tag&&(a.ue.tag("cacheSourceMemory"),a.ue.tag("history-navigation-page-cache"));c=ue_csm.csa&&ue_csm.csa("SPA");var d=ue_csm.csa&&ue_csm.csa("PageTiming");c&&d&&(c("newPage",{transitionType:"history-navigation-page-cache"},{keepPageAttributes:!0}),d("mark","transitionStart",b.clickTime));"function"===typeof a.uex&&
a.uex("ld",void 0,void 0,a.ue.t.ld);delete a.ue.isBFonMshop;delete a.ue.isBFCache}})})(ue_csm);

ue_csm.ue.exec(function(e,f){var a=e.ue||{},b=a._wlo,d;if(a.ssw){d=a.ssw("CSM_previousURL").val;var c=f.location,b=b?b:c&&c.href?c.href.split("#")[0]:void 0;c=(b||"")===a.ssw("CSM_previousURL").val;!c&&b&&a.ssw("CSM_previousURL",b);d=c?"reload":d?"intrapage-transition":"first-view"}else d="unknown";a._nt=d},"NavTypeModule")(ue_csm,window);
ue_csm.ue.exec(function(c,a){function g(a){a.run(function(e){d.tag("csm-feature-"+a.name+":"+e);d.isl&&c.uex("at")})}if(a.addEventListener)for(var d=c.ue||{},f=[{name:"touch-enabled",run:function(b){var e=function(){a.removeEventListener("touchstart",c,!0);a.removeEventListener("mousemove",d,!0)},c=function(){b("true");e()},d=function(){b("false");e()};a.addEventListener("touchstart",c,!0);a.addEventListener("mousemove",d,!0)}}],b=0;b<f.length;b++)g(f[b])},"csm-features")(ue_csm,window);


(function(a,e){function d(a){b&&b("recordCounter",a.c,a.v)}var c=e.images,b=a.csa&&a.csa("Metrics",{producerId:"csa"});c&&c.length&&a.ue.count("totalImages",c.length);a.ue.cv.buffer&&b&&(a.ue.cv.buffer.forEach(d),a.ue.cv.buffer.push=d)})(ue_csm,document);
(function(b){function c(){var d=[];a.log&&a.log.isStub&&a.log.replay(function(a){e(d,a)});a.clog&&a.clog.isStub&&a.clog.replay(function(a){e(d,a)});d.length&&(a._flhs+=1,n(d),p(d))}function g(){a.log&&a.log.isStub&&(a.onflush&&a.onflush.replay&&a.onflush.replay(function(a){a[0]()}),a.onunload&&a.onunload.replay&&a.onunload.replay(function(a){a[0]()}),c())}function e(d,b){var c=b[1],f=b[0],e={};a._lpn[c]=(a._lpn[c]||0)+1;e[c]=f;d.push(e)}function n(b){q&&(a._lpn.csm=(a._lpn.csm||0)+1,b.push({csm:{k:"chk",
f:a._flhs,l:a._lpn,s:"inln"}}))}function p(a){if(h)a=k(a),b.navigator.sendBeacon(l,a);else{a=k(a);var c=new b[f];c.open("POST",l,!0);c.setRequestHeader&&c.setRequestHeader("Content-type","text/plain");c.send(a)}}function k(a){return JSON.stringify({rid:b.ue_id,sid:b.ue_sid,mid:b.ue_mid,mkt:b.ue_mkt,sn:b.ue_sn,reqs:a})}var f="XMLHttpRequest",q=1===b.ue_ddq,a=b.ue,r=b[f]&&"withCredentials"in new b[f],h=b.navigator&&b.navigator.sendBeacon,l="//"+b.ue_furl+"/1/batch/1/OE/",m=b.ue_fci_ft||5E3;a&&(r||h)&&
(a._flhs=a._flhs||0,a._lpn=a._lpn||{},a.attach&&(a.attach("beforeunload",a.exec(g,"fcli-bfu")),a.attach("pagehide",a.exec(g,"fcli-ph"))),m&&b.setTimeout(a.exec(c,"fcli-t"),m),a._ffci=a.exec(c))})(window);


(function(k,c){function l(a,b){return a.filter(function(a){return a.initiatorType==b})}function f(a,c){if(b.t[a]){var g=b.t[a]-b._t0,e=c.filter(function(a){return 0!==a.responseEnd&&m(a)<g}),f=l(e,"script"),h=l(e,"link"),k=l(e,"img"),n=e.map(function(a){return a.name.split("/")[2]}).filter(function(a,b,c){return a&&c.lastIndexOf(a)==b}),q=e.filter(function(a){return a.duration<p}),s=g-Math.max.apply(null,e.map(m))<r|0;"af"==a&&(b._afjs=f.length);return a+":"+[e[d],f[d],h[d],k[d],n[d],q[d],s].join("-")}}
function m(a){return a.responseEnd-(b._t0-c.timing.navigationStart)}function n(){var a=c[h]("resource"),d=f("cf",a),g=f("af",a),a=f("ld",a);delete b._rt;b._ld=b.t.ld-b._t0;b._art&&b._art();return[d,g,a].join("_")}var p=20,r=50,d="length",b=k.ue,h="getEntriesByType";b._rre=m;b._rt=c&&c.timing&&c[h]&&n})(ue_csm,window.performance);


(function(c,d){var b=c.ue,a=d.navigator;b&&b.tag&&a&&(a=a.connection||a.mozConnection||a.webkitConnection)&&a.type&&b.tag("netInfo:"+a.type)})(ue_csm,window);


(function(c,d){function h(a,b){for(var c=[],d=0;d<a.length;d++){var e=a[d],f=b.encode(e);if(e[k]){var g=b.metaSep,e=e[k],l=b.metaPairSep,h=[],m=void 0;for(m in e)e.hasOwnProperty(m)&&h.push(m+"="+e[m]);e=h.join(l);f+=g+e}c.push(f)}return c.join(b.resourceSep)}function s(a){var b=a[k]=a[k]||{};b[t]||(b[t]=c.ue_mid);b[u]||(b[u]=c.ue_sid);b[f]||(b[f]=c.ue_id);b.csm=1;a="//"+c.ue_furl+"/1/"+a[v]+"/1/OP/"+a[w]+"/"+a[x]+"/"+h([a],y);if(n)try{n.call(d[p],a)}catch(g){c.ue.sbf=1,(new Image).src=a}else(new Image).src=
a}function q(){g&&g.isStub&&g.replay(function(a,b,c){a=a[0];b=a[k]=a[k]||{};b[f]=b[f]||c;s(a)});l.impression=s;g=null}if(!(1<c.ueinit)){var k="metadata",x="impressionType",v="foresterChannel",w="programGroup",t="marketplaceId",u="session",f="requestId",p="navigator",l=c.ue||{},n=d[p]&&d[p].sendBeacon,r=function(a,b,c,d){return{encode:d,resourceSep:a,metaSep:b,metaPairSep:c}},y=r("","?","&",function(a){return h(a.impressionData,z)}),z=r("/",":",",",function(a){return a.featureName+":"+h(a.resources,
A)}),A=r(",","@","|",function(a){return a.id}),g=l.impression;n?q():(l.attach("load",q),l.attach("beforeunload",q));try{d.P&&d.P.register&&d.P.register("impression-client",function(){})}catch(B){c.ueLogError(B,{logLevel:"WARN"})}}})(ue_csm,window);



var ue_pty = "Detail";

var ue_spty = "Glance";

var ue_pti = "B0BDK62PDX";


var ue_adb = 4;
var ue_adb_rtla = 1;
ue_csm.ue.exec(function(y,a){function t(){if(d&&f){var a;a:{try{a=d.getItem(g);break a}catch(c){}a=void 0}if(a)return b=a,!0}return!1}function u(){if(a.fetch)fetch(m).then(function(a){if(!a.ok)throw Error(a.statusText);return a.text?a.text():null}).then(function(b){b?(-1<b.indexOf("window.ue_adb_chk = 1")&&(a.ue_adb_chk=1),n()):h()})["catch"](h);else e.uels(m,{onerror:h,onload:n})}function h(){b=k;l();if(f)try{d.setItem(g,b)}catch(a){}}function n(){b=1===a.ue_adb_chk?p:k;l();if(f)try{d.setItem(g,
b)}catch(c){}}function q(){a.ue_adb_rtla&&c&&0<c.ec&&!1===r&&(c.elh=null,ueLogError({m:"Hit Info",fromOnError:1},{logLevel:"INFO",adb:b}),r=!0)}function l(){e.tag(b);e.isl&&a.uex&&uex("at",b);s&&s.updateCsmHit("adb",b);c&&0<c.ec?q():a.ue_adb_rtla&&c&&(c.elh=q)}function v(){return b}if(a.ue_adb){a.ue_fadb=a.ue_fadb||10;var e=a.ue,k="adblk_yes",p="adblk_no",m="https://m.media-amazon.com/images/G/01/csm/showads.v2.js?bannerid=-ad-sidebar.",b="adblk_unk",d;a:{try{d=a.localStorage;break a}catch(z){}d=
void 0}var g="csm:adb",c=a.ue_err,s=e.cookie,f=void 0!==a.localStorage,w=Math.random()>1-1/a.ue_fadb,r=!1,x=t();w||!x?u():l();a.ue_isAdb=v;a.ue_isAdb.unk="adblk_unk";a.ue_isAdb.no=p;a.ue_isAdb.yes=k}},"adb")(document,window);




(function(c,l,m){function h(a){if(a)try{if(a.id)return"//*[@id='"+a.id+"']";var b,d=1,e;for(e=a.previousSibling;e;e=e.previousSibling)e.nodeName===a.nodeName&&(d+=1);b=d;var c=a.nodeName;1!==b&&(c+="["+b+"]");a.parentNode&&(c=h(a.parentNode)+"/"+c);return c}catch(f){return"DETACHED"}}function f(a){if(a&&a.getAttribute)return a.getAttribute(k)?a.getAttribute(k):f(a.parentElement)}var k="data-cel-widget",g=!1,d=[];(c.ue||{}).isBF=function(){try{var a=JSON.parse(localStorage["csm-bf"]||"[]"),b=0<=a.indexOf(c.ue_id);
a.unshift(c.ue_id);a=a.slice(0,20);localStorage["csm-bf"]=JSON.stringify(a);return b}catch(d){return!1}}();c.ue_utils={getXPath:h,getFirstAscendingWidget:function(a,b){c.ue_cel&&c.ue_fem?!0===g?b(f(a)):d.push({element:a,callback:b}):b()},notifyWidgetsLabeled:function(){if(!1===g){g=!0;for(var a=f,b=0;b<d.length;b++)if(d[b].hasOwnProperty("callback")&&d[b].hasOwnProperty("element")){var c=d[b].callback,e=d[b].element;"function"===typeof c&&"function"===typeof a&&c(a(e))}d=null}},extractStringValue:function(a){if("string"===
typeof a)return a}}})(ue_csm,window,document);


(function(a){a.ue_cel||(a.ue_cel=function(){function m(a,r){r?r.r=u:r={r:u,c:1};D||(!ue_csm.ue_sclog&&r.clog&&b.clog?b.clog(a,r.ns||s,r):r.glog&&b.glog?b.glog(a,r.ns||s,r):b.log(a,r.ns||s,r))}function n(a,b){"function"===typeof p&&p("log",{schemaId:t+".RdCSI.1",eventType:a,clientData:b},{ent:{page:["requestId"]}})}function c(){var a=q.length;if(0<a){for(var r=[],c=0;c<a;c++){var d=q[c].api;d.ready()?(d.on({ts:b.d,ns:s}),g.push(q[c]),m({k:"mso",n:q[c].name,t:b.d()})):r.push(q[c])}q=r}}function f(){if(!f.executed){for(var a=
0;a<g.length;a++)g[a].api.off&&g[a].api.off({ts:b.d,ns:s});B();m({k:"eod",t0:b.t0,t:b.d()},{c:1,il:1});f.executed=1;for(a=0;a<g.length;a++)q.push(g[a]);g=[];d(v);d(A)}}function B(a){m({k:"hrt",t:b.d()},{c:1,il:1,n:a});y=Math.min(w,e*y);z()}function z(){d(A);A=k(function(){B(!0)},y)}function x(){f.executed||B()}var l=a.window,k=l.setTimeout,d=l.clearTimeout,e=1.5,w=l.ue_cel_max_hrt||3E4,t="robotdetection",q=[],g=[],s=a.ue_cel_ns||"cel",v,A,b=a.ue,F=a.uet,C=a.uex,u=b.rid,D=a.ue_dsbl_cel,h=l.csa,p,y=
l.ue_cel_hrt_int||3E3,E=l.requestAnimationFrame||function(a){a()};h&&(p=h("Events",{producerId:t}));if(b.isBF)m({k:"bft",t:b.d()});else{"function"==typeof F&&F("bb","csmCELLSframework",{wb:1});k(c,0);b.onunload(f);if(b.onflush)b.onflush(x);v=k(f,6E5);z();"function"==typeof C&&C("ld","csmCELLSframework",{wb:1});return{registerModule:function(a,r){q.push({name:a,api:r});m({k:"mrg",n:a,t:b.d()});c()},reset:function(a){m({k:"rst",t0:b.t0,t:b.d()});q=q.concat(g);g=[];for(var r=q.length,e=0;e<r;e++)q[e].api.off(),
q[e].api.reset();u=a||b.rid;c();d(v);v=k(f,6E5);f.executed=0},timeout:function(a,b){return k(function(){E(function(){f.executed||a()})},b)},log:m,csaEventLog:n,off:f}}}())})(ue_csm);
(function(a){a.ue_pdm||!a.ue_cel||a.ue.isBF||(a.ue_pdm=function(){function m(){try{var b=d.screen;if(b){var c={w:b.width,aw:b.availWidth,h:b.height,ah:b.availHeight,cd:b.colorDepth,pd:b.pixelDepth};g&&g.w===c.w&&g.h===c.h&&g.aw===c.aw&&g.ah===c.ah&&g.pd===c.pd&&g.cd===c.cd||(g=c,g.t=t(),g.k="sci",F(g),D&&h("sci",{h:(g.h||"0")+""}))}var k=e.body||{},f=e.documentElement||{},n={w:Math.max(k.scrollWidth||0,k.offsetWidth||0,f.clientWidth||0,f.scrollWidth||0,f.offsetWidth||0),h:Math.max(k.scrollHeight||
0,k.offsetHeight||0,f.clientHeight||0,f.scrollHeight||0,f.offsetHeight||0)};s&&s.w===n.w&&s.h===n.h||(s=n,s.t=t(),s.k="doi",F(s));w=a.ue_cel.timeout(m,q);A+=1}catch(p){d.ueLogError&&ueLogError(p,{attribution:"csm-cel-page-module",logLevel:"WARN"})}}function n(){x("ebl","default",!1)}function c(){x("efo","default",!0)}function f(){x("ebl","app",!1)}function B(){x("efo","app",!0)}function z(){d.setTimeout(function(){e[E]?x("ebl","pageviz",!1):x("efo","pageviz",!0)},0)}function x(a,b,c){v!==c&&(F({k:a,
t:t(),s:b},{ff:!0===c?0:1}),D&&h(a,{t:(t()||"0")+"",s:b}));v=c}function l(){b.attach&&(p&&b.attach(y,z,e),G&&P.when("mash").execute(function(a){a&&a.addEventListener&&(a.addEventListener("appPause",f),a.addEventListener("appResume",B))}),b.attach("blur",n,d),b.attach("focus",c,d))}function k(){b.detach&&(p&&b.detach(y,z,e),G&&P.when("mash").execute(function(a){a&&a.removeEventListener&&(a.removeEventListener("appPause",f),a.removeEventListener("appResume",B))}),b.detach("blur",n,d),b.detach("focus",
c,d))}var d=a.window,e=a.document,w,t,q,g,s,v=null,A=0,b=a.ue,F=a.ue_cel.log,C=a.uet,u=a.uex,D=d.csa,h=a.ue_cel.csaEventLog,p=!!b.pageViz,y=p&&b.pageViz.event,E=p&&b.pageViz.propHid,G=d.P&&d.P.when;"function"==typeof C&&C("bb","csmCELLSpdm",{wb:1});return{on:function(a){q=a.timespan||500;t=a.ts;l();a=d.location;F({k:"pmd",o:a.origin,p:a.pathname,t:t()});m();"function"==typeof u&&u("ld","csmCELLSpdm",{wb:1})},off:function(a){clearTimeout(w);k();b.count&&b.count("cel.PDM.TotalExecutions",A)},ready:function(){return e.body&&
a.ue_cel&&a.ue_cel.log},reset:function(){g=s=null}}}(),a.ue_cel&&a.ue_cel.registerModule("page module",a.ue_pdm))})(ue_csm);
(function(a){a.ue_vpm||!a.ue_cel||a.ue.isBF||(a.ue_vpm=function(){function m(){var a=z(),b={w:k.innerWidth,h:k.innerHeight,x:k.pageXOffset,y:k.pageYOffset};c&&c.w==b.w&&c.h==b.h&&c.x==b.x&&c.y==b.y||(b.t=a,b.k="vpi",c=b,e(c,{clog:1}),s&&v("vpi",{t:(c.t||"0")+"",h:(c.h||"0")+"",y:(c.y||"0")+"",w:(c.w||"0")+"",x:(c.x||"0")+""}));f=0;x=z()-a;l+=1}function n(){f||(f=a.ue_cel.timeout(m,B))}var c,f,B,z,x=0,l=0,k=a.window,d=a.ue,e=a.ue_cel.log,w=a.uet,t=a.uex,q=d.attach,g=d.detach,s=k.csa,v=a.ue_cel.csaEventLog;
"function"==typeof w&&w("bb","csmCELLSvpm",{wb:1});return{on:function(a){z=a.ts;B=a.timespan||100;m();q&&(q("scroll",n),q("resize",n));"function"==typeof t&&t("ld","csmCELLSvpm",{wb:1})},off:function(a){clearTimeout(f);g&&(g("scroll",n),g("resize",n));d.count&&(d.count("cel.VPI.TotalExecutions",l),d.count("cel.VPI.TotalExecutionTime",x),d.count("cel.VPI.AverageExecutionTime",x/l))},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){c=void 0},getVpi:function(){return c}}}(),a.ue_cel&&
a.ue_cel.registerModule("viewport module",a.ue_vpm))})(ue_csm);
(function(a){if(!a.ue_fem&&a.ue_cel&&a.ue_utils){var m=a.ue||{},n=a.window,c=n.document;!m.isBF&&!a.ue_fem&&c.querySelector&&n.getComputedStyle&&[].forEach&&(a.ue_fem=function(){function f(a,b){return a>b?3>a-b:3>b-a}function B(a,b){var c=n.pageXOffset,d=n.pageYOffset,k;a:{try{if(a){var e=a.getBoundingClientRect(),g,m=0===a.offsetWidth&&0===a.offsetHeight;c:{for(var h=a.parentNode,p=e.left||0,w=e.top||0,q=e.width||0,s=e.height||0;h&&h!==document.body;){var l;d:{try{var r=void 0;if(h)var t=h.getBoundingClientRect(),
r={x:t.left||0,y:t.top||0,w:t.width||0,h:t.height||0};else r=void 0;l=r;break d}catch(I){}l=void 0}var u=window.getComputedStyle(h),v="hidden"===u.overflow,x=v||"hidden"===u.overflowX,y=v||"hidden"===u.overflowY,z=w+s-1<l.y+1||w+1>l.y+l.h-1;if((p+q-1<l.x+1||p+1>l.x+l.w-1)&&x||z&&y){g=!0;break c}h=h.parentNode}g=!1}k={x:e.left+c||0,y:e.top+d||0,w:e.width||0,h:e.height||0,d:(m||g)|0}}else k=void 0;break a}catch(J){}k=void 0}if(k&&!a.cel_b)a.cel_b=k,D({n:a.getAttribute(A),w:a.cel_b.w,h:a.cel_b.h,d:a.cel_b.d,
x:a.cel_b.x,y:a.cel_b.y,t:b,k:"ewi",cl:a.className},{clog:1});else{if(c=k)c=a.cel_b,d=k,c=d.d===c.d&&1===d.d?!1:!(f(c.x,d.x)&&f(c.y,d.y)&&f(c.w,d.w)&&f(c.h,d.h)&&c.d===d.d);c&&(a.cel_b=k,D({n:a.getAttribute(A),w:a.cel_b.w,h:a.cel_b.h,d:a.cel_b.d,x:a.cel_b.x,y:a.cel_b.y,t:b,k:"ewi"},{clog:1}))}}function z(d,e){var f;f=d.c?c.getElementsByClassName(d.c):d.id?[c.getElementById(d.id)]:c.querySelectorAll(d.s);d.w=[];for(var g=0;g<f.length;g++){var h=f[g];if(h){if(!h.getAttribute(A)){var l=h.getAttribute("cel_widget_id")||
(d.id_gen||u)(h,g)||h.id;h.setAttribute(A,l)}d.w.push(h);k(Q,h,e)}}!1===C&&(F++,F===b.length&&(C=!0,a.ue_utils.notifyWidgetsLabeled()))}function x(a,b){h.contains(a)||D({n:a.getAttribute(A),t:b,k:"ewd"},{clog:1})}function l(a){K.length&&ue_cel.timeout(function(){if(s){for(var b=R(),c=!1;R()-b<g&&!c;){for(c=S;0<c--&&0<K.length;){var d=K.shift();T[d.type](d.elem,d.time)}c=0===K.length}U++;l(a)}},0)}function k(a,b,c){K.push({type:a,elem:b,time:c})}function d(a,c){for(var d=0;d<b.length;d++)for(var e=
b[d].w||[],h=0;h<e.length;h++)k(a,e[h],c)}function e(){M||(M=a.ue_cel.timeout(function(){M=null;var c=v();d(W,c);for(var e=0;e<b.length;e++)k(X,b[e],c);0===b.length&&!1===C&&(C=!0,a.ue_utils.notifyWidgetsLabeled());l(c)},q))}function w(){M||N||(N=a.ue_cel.timeout(function(){N=null;var a=v();d(Q,a);l(a)},q))}function t(){return y&&E&&h&&h.contains&&h.getBoundingClientRect&&v}var q=50,g=4.5,s=!1,v,A="data-cel-widget",b=[],F=0,C=!1,u=function(){},D=a.ue_cel.log,h,p,y,E,G=n.MutationObserver||n.WebKitMutationObserver||
n.MozMutationObserver,r=!!G,H,I,O="DOMAttrModified",L="DOMNodeInserted",J="DOMNodeRemoved",N,M,K=[],U=0,S=null,W="removedWidget",X="updateWidgets",Q="processWidget",T,V=n.performance||{},R=V.now&&function(){return V.now()}||function(){return Date.now()};"function"==typeof uet&&uet("bb","csmCELLSfem",{wb:1});return{on:function(d){function k(){if(t()){T={removedWidget:x,updateWidgets:z,processWidget:B};if(r){var a={attributes:!0,subtree:!0};H=new G(w);I=new G(e);H.observe(h,a);I.observe(h,{childList:!0,
subtree:!0});I.observe(p,a)}else y.call(h,O,w),y.call(h,L,e),y.call(h,J,e),y.call(p,L,w),y.call(p,J,w);e()}}h=c.body;p=c.head;y=h.addEventListener;E=h.removeEventListener;v=d.ts;b=a.cel_widgets||[];S=d.bs||5;m.deffered?k():m.attach&&m.attach("load",k);"function"==typeof uex&&uex("ld","csmCELLSfem",{wb:1});s=!0},off:function(){t()&&(I&&(I.disconnect(),I=null),H&&(H.disconnect(),H=null),E.call(h,O,w),E.call(h,L,e),E.call(h,J,e),E.call(p,L,w),E.call(p,J,w));m.count&&m.count("cel.widgets.batchesProcessed",
U);s=!1},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){b=a.cel_widgets||[]}}}(),a.ue_cel&&a.ue_fem&&a.ue_cel.registerModule("features module",a.ue_fem))}})(ue_csm);
(function(a){!a.ue_mcm&&a.ue_cel&&a.ue_utils&&!a.ue.isBF&&(a.ue_mcm=function(){function m(a,d){var e=a.srcElement||a.target||{},f={k:n,w:(d||{}).ow||(B.body||{}).scrollWidth,h:(d||{}).oh||(B.body||{}).scrollHeight,t:(d||{}).ots||c(),x:a.pageX,y:a.pageY,p:l.getXPath(e),n:e.nodeName};z&&"function"===typeof z.now&&a.timeStamp&&(f.dt=(d||{}).odt||z.now()-a.timeStamp,f.dt=parseFloat(f.dt.toFixed(2)));a.button&&(f.b=a.button);e.href&&(f.r=l.extractStringValue(e.href));e.id&&(f.i=e.id);e.className&&e.className.split&&
(f.c=e.className.split(/\s+/));x(f,{c:1})}var n="mcm",c,f=a.window,B=f.document,z=f.performance,x=a.ue_cel.log,l=a.ue_utils;return{on:function(k){c=k.ts;a.ue_cel_stub&&a.ue_cel_stub.replayModule(n,m);f.addEventListener&&f.addEventListener("mousedown",m,!0)},off:function(a){f.addEventListener&&f.removeEventListener("mousedown",m,!0)},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){}}}(),a.ue_cel&&a.ue_cel.registerModule("mouse click module",a.ue_mcm))})(ue_csm);
(function(a){a.ue_mmm||!a.ue_cel||a.ue.isBF||(a.ue_mmm=function(m){function n(a,b){var c={x:a.pageX||a.x||0,y:a.pageY||a.y||0,t:l()};!b&&p&&(c.t-p.t<B||c.x==p.x&&c.y==p.y)||(p=c,u.push(c))}function c(){if(u.length){F=H.now();for(var a=0;a<u.length;a++){var c=u[a],d=a;y=u[h];E=c;var e=void 0;if(!(e=2>d)){e=void 0;a:if(u[d].t-u[d-1].t>f)e=0;else{for(e=h+1;e<d;e++){var g=y,k=E,l=u[e];G=(k.x-g.x)*(g.y-l.y)-(g.x-l.x)*(k.y-g.y);if(G*G/((k.x-g.x)*(k.x-g.x)+(k.y-g.y)*(k.y-g.y))>z){e=0;break a}}e=1}e=!e}(r=
e)?h=d-1:D.pop();D.push(c)}C=H.now()-F;s=Math.min(s,C);v=Math.max(v,C);A=(A*b+C)/(b+1);b+=1;q({k:x,e:D,min:Math.floor(1E3*s),max:Math.floor(1E3*v),avg:Math.floor(1E3*A)},{c:1});u=[];D=[];h=0}}var f=100,B=20,z=25,x="mmm1",l,k,d=a.window,e=d.document,w=d.setInterval,t=a.ue,q=a.ue_cel.log,g,s=1E3,v=0,A=0,b=0,F,C,u=[],D=[],h=0,p,y,E,G,r,H=m&&m.now&&m||Date.now&&Date||{now:function(){return(new Date).getTime()}};return{on:function(a){l=a.ts;k=a.ns;t.attach&&t.attach("mousemove",n,e);g=w(c,3E3)},off:function(a){k&&
(p&&n(p,!0),c());clearInterval(g);t.detach&&t.detach("mousemove",n,e)},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){u=[];D=[];h=0;p=null}}}(window.performance),a.ue_cel&&a.ue_cel.registerModule("mouse move module",a.ue_mmm))})(ue_csm);



ue_csm.ue.exec(function(b,c){var e=function(){},f=function(){return{send:function(b,d){if(d&&b){var a;if(c.XDomainRequest)a=new XDomainRequest,a.onerror=e,a.ontimeout=e,a.onprogress=e,a.onload=e,a.timeout=0;else if(c.XMLHttpRequest){if(a=new XMLHttpRequest,!("withCredentials"in a))throw"";}else a=void 0;if(!a)throw"";a.open("POST",b,!0);a.setRequestHeader&&a.setRequestHeader("Content-type","text/plain");a.send(d)}},isSupported:!0}}(),g=function(){return{send:function(c,d){if(c&&d)if(navigator.sendBeacon(c,
d))b.ue_sbuimp&&b.ue&&b.ue.ssw&&b.ue.ssw("eelsts","scs");else throw"";},isSupported:!!navigator.sendBeacon&&!(c.cordova&&c.cordova.platformId&&"ios"==c.cordova.platformId)}}();b.ue._ajx=f;b.ue._sBcn=g},"Transportation-clients")(ue_csm,window);
ue_csm.ue.exec(function(b,k){function B(){for(var a=0;a<arguments.length;a++){var c=arguments[a];try{var g;if(c.isSupported){var f=u.buildPayload(l,e);g=c.send(K,f)}else throw dummyException;return g}catch(d){}}a={m:"All supported clients failed",attribution:"CSMSushiClient_TRANSPORTATION_FAIL",f:"sushi-client.js",logLevel:"ERROR"};C(a,k.ue_err_chan||"jserr");b.ue_err.buffer&&b.ue_err.buffer.push(a)}function m(){if(e.length){for(var a=0;a<n.length;a++)n[a]();B(d._sBcn||{},d._ajx||{});e=[];h={};l=
{};v=w=r=x=0}}function L(){var a=new Date,c=function(a){return 10>a?"0"+a:a};return Date.prototype.toISOString?a.toISOString():a.getUTCFullYear()+"-"+c(a.getUTCMonth()+1)+"-"+c(a.getUTCDate())+"T"+c(a.getUTCHours())+":"+c(a.getUTCMinutes())+":"+c(a.getUTCSeconds())+"."+String((a.getUTCMilliseconds()/1E3).toFixed(3)).slice(2,5)+"Z"}function y(a){try{return JSON.stringify(a)}catch(c){}return null}function D(a,c,g,f){var q=!1;f=f||{};s++;if(s==E){var p={m:"Max number of Sushi Logs exceeded",f:"sushi-client.js",
logLevel:"ERROR",attribution:"CSMSushiClient_MAX_CALLS"};C(p,k.ue_err_chan||"jserr");b.ue_err.buffer&&b.ue_err.buffer.push(p)}if(p=!(s>=E))(p=a&&-1<a.constructor.toString().indexOf("Object")&&c&&-1<c.constructor.toString().indexOf("String")&&g&&-1<g.constructor.toString().indexOf("String"))||M++;p&&(d.count&&d.count("Event:"+g,1),a.producerId=a.producerId||c,a.schemaId=a.schemaId||g,a.timestamp=L(),c=Date.now?Date.now():+new Date,g=Math.random().toString().substring(2,12),a.messageId=b.ue_id+"-"+
c+"-"+g,f&&!f.ssd&&(a.sessionId=a.sessionId||b.ue_sid,a.requestId=a.requestId||b.ue_id,a.obfuscatedMarketplaceId=a.obfuscatedMarketplaceId||b.ue_mid),(c=y(a))?(c=c.length,(e.length==N||r+c>O)&&m(),r+=c,a={data:u.compressEvent(a)},e.push(a),(f||{}).n?0===F?m():v||(v=k.setTimeout(m,F)):w||(w=k.setTimeout(m,P)),q=!0):q=!1);!q&&b.ue_int&&console.error("Invalid JS Nexus API call");return q}function G(){if(!H){for(var a=0;a<z.length;a++)z[a]();for(a=0;a<n.length;a++)n[a]();e.length&&(b.ue_sbuimp&&b.ue&&
b.ue.ssw&&(a=y({dct:l,evt:e}),b.ue.ssw("eeldata",a),b.ue.ssw("eelsts","unk")),B(d._sBcn||{}));H=!0}}function I(a){z.push(a)}function J(a){n.push(a)}var E=1E3,N=499,O=524288,t=function(){},d=b.ue||{},C=d.log||t,Q=b.uex||t;(b.uet||t)("bb","ue_sushi_v1",{wb:1});var K=b.ue_surl||"https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.gamma",R=["messageId","timestamp"],A="#",e=[],h={},l={},r=0,x=0,M=0,s=0,z=[],n=[],H=!1,v,w,F=void 0===b.ue_hpsi?1E3:b.ue_hpsi,P=void 0===b.ue_lpsi?1E4:b.ue_lpsi,
u=function(){function a(a){h[a]=A+x++;l[h[a]]=a;return h[a]}function c(b){if(!(b instanceof Function)){if(b instanceof Array){for(var f=[],d=b.length,e=0;e<d;e++)f[e]=c(b[e]);return f}if(b instanceof Object){f={};for(d in b)b.hasOwnProperty(d)&&(f[h[d]?h[d]:a(d)]=-1===R.indexOf(d)?c(b[d]):b[d]);return f}return"string"===typeof b&&(b.length>(A+x).length||b.charAt(0)===A)?h[b]?h[b]:a(b):b}}return{compressEvent:c,buildPayload:function(){return y({cs:{dct:l},events:e})}}}();(function(){if(d.event&&d.event.isStub){if(b.ue_sbuimp&&
b.ue&&b.ue.ssw){var a=b.ue.ssw("eelsts").val;if(a&&"unk"===a&&(a=b.ue.ssw("eeldata").val)){var c;a:{try{c=JSON.parse(a);break a}catch(g){}c=null}c&&c.evt instanceof Array&&c.dct instanceof Object&&(e=c.evt,l=c.dct,e&&l&&(m(),b.ue.ssw("eeldata","{}"),b.ue.ssw("eelsts","scs")))}}d.event.replay(function(a){a[3]=a[3]||{};a[3].n=1;D.apply(this,a)});d.onSushiUnload.replay(function(a){I(a[0])});d.onSushiFlush.replay(function(a){J(a[0])})}})();d.attach("beforeunload",G);d.attach("pagehide",G);d._cmps=u;d.event=
D;d.event.reset=function(){s=0};d.onSushiUnload=I;d.onSushiFlush=J;try{k.P&&k.P.register&&k.P.register("sushi-client",t)}catch(S){b.ueLogError(S,{logLevel:"WARN"})}Q("ld","ue_sushi_v1",{wb:1})},"Nxs-JS-Client")(ue_csm,window);


ue_csm.ue_unrt = 1500;
(function(d,b,t){function u(a,g){var c=a.srcElement||a.target||{},b={k:v,t:g.t,dt:g.dt,x:a.pageX,y:a.pageY,p:e.getXPath(c),n:c.nodeName};a.button&&(b.b=a.button);c.type&&(b.ty=c.type);c.href&&(b.r=e.extractStringValue(c.href));c.id&&(b.i=c.id);c.className&&c.className.split&&(b.c=c.className.split(/\s+/));h+=1;e.getFirstAscendingWidget(c,function(a){b.wd=a;d.ue.log(b,r)})}function w(a){if(!x(a.srcElement||a.target)){m+=1;n=!0;var g=f=d.ue.d(),c;p&&"function"===typeof p.now&&a.timeStamp&&(c=p.now()-
a.timeStamp,c=parseFloat(c.toFixed(2)));s=b.setTimeout(function(){u(a,{t:g,dt:c})},y)}}function z(a){if(a){var b=a.filter(A);a.length!==b.length&&(q=!0,k=d.ue.d(),n&&q&&(k&&f&&d.ue.log({k:B,t:f,m:Math.abs(k-f)},r),l(),q=!1,k=0))}}function A(a){if(!a)return!1;var b="characterData"===a.type?a.target.parentElement:a.target;if(!b||!b.hasAttributes||!b.attributes)return!1;var c={"class":"gw-clock gw-clock-aria s-item-container-height-auto feed-carousel using-mouse kfs-inner-container".split(" "),id:["dealClock",
"deal_expiry_timer","timer"],role:["timer"]},d=!1;Object.keys(c).forEach(function(a){var e=b.attributes[a]?b.attributes[a].value:"";(c[a]||"").forEach(function(a){-1!==e.indexOf(a)&&(d=!0)})});return d}function x(a){if(!a)return!1;var b=(e.extractStringValue(a.nodeName)||"").toLowerCase(),c=(e.extractStringValue(a.type)||"").toLowerCase(),d=(e.extractStringValue(a.href)||"").toLowerCase();a=(e.extractStringValue(a.id)||"").toLowerCase();var f="checkbox color date datetime-local email file month number password radio range reset search tel text time url week".split(" ");
if(-1!==["select","textarea","html"].indexOf(b)||"input"===b&&-1!==f.indexOf(c)||"a"===b&&-1!==d.indexOf("http")||-1!==["sitbreaderrightpageturner","sitbreaderleftpageturner","sitbreaderpagecontainer"].indexOf(a))return!0}function l(){n=!1;f=0;b.clearTimeout(s)}function C(){b.ue.onunload(function(){ue.count("armored-cxguardrails.unresponsive-clicks.violations",h);ue.count("armored-cxguardrails.unresponsive-clicks.violationRate",h/m*100||0)})}if(b.MutationObserver&&b.addEventListener&&Object.keys&&
d&&d.ue&&d.ue.log&&d.ue_unrt&&d.ue_utils){var y=d.ue_unrt,r="cel",v="unr_mcm",B="res_mcm",p=b.performance,e=d.ue_utils,n=!1,f=0,s=0,q=!1,k=0,h=0,m=0;b.addEventListener&&(b.addEventListener("mousedown",w,!0),b.addEventListener("beforeunload",l,!0),b.addEventListener("visibilitychange",l,!0),b.addEventListener("pagehide",l,!0));b.ue&&b.ue.event&&b.ue.onSushiUnload&&b.ue.onunload&&C();(new MutationObserver(z)).observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}})(ue_csm,window,document);


ue_csm.ue.exec(function(g,e){if(e.ue_err){var f="";e.ue_err.errorHandlers||(e.ue_err.errorHandlers=[]);e.ue_err.errorHandlers.push({name:"fctx",handler:function(a){if(!a.logLevel||"FATAL"===a.logLevel)if(f=g.getElementsByTagName("html")[0].innerHTML){var b=f.indexOf("var ue_t0=ue_t0||+new Date();");if(-1!==b){var b=f.substr(0,b).split(String.fromCharCode(10)),d=Math.max(b.length-10-1,0),b=b.slice(d,b.length-1);a.fcsmln=d+b.length+1;a.cinfo=a.cinfo||{};for(var c=0;c<b.length;c++)a.cinfo[d+c+1+""]=
b[c]}b=f.split(String.fromCharCode(10));a.cinfo=a.cinfo||{};if(!(a.f||void 0===a.l||a.l in a.cinfo))for(c=+a.l-1,d=Math.max(c-5,0),c=Math.min(c+5,b.length-1);d<=c;d++)a.cinfo[d+1+""]=b[d]}}})}},"fatals-context")(document,window);


(function(m,b){function c(k){function f(a){a&&"string"===typeof a&&(a=(a=a.match(/^(?:https?:)?\/\/(.*?)(\/|$)/i))&&1<a.length?a[1]:null,a&&a&&("number"===typeof e[a]?e[a]++:e[a]=1))}function d(a){var e=10,d=+new Date;a&&a.timeRemaining?e=a.timeRemaining():a={timeRemaining:function(){return Math.max(0,e-(+new Date-d))}};for(var c=b.performance.getEntries(),k=e;g<c.length&&k>n;)c[g].name&&f(c[g].name),g++,k=a.timeRemaining();g>=c.length?h(!0):l()}function h(a){if(!a){a=m.scripts;var c;if(a)for(var d=
0;d<a.length;d++)(c=a[d].getAttribute("src"))&&"undefined"!==c&&f(c)}0<Object.keys(e).length&&(p&&ue_csm.ue&&ue_csm.ue.event&&(a={domains:e,pageType:b.ue_pty||null,subPageType:b.ue_spty||null,pageTypeId:b.ue_pti||null},ue_csm.ue_sjslob&&(a.lob=ue_csm.ue_lob||"0"),ue_csm.ue.event(a,"csm","csm.CrossOriginDomains.2")),b.ue_ext=e)}function l(){!0===k?d():b.requestIdleCallback?b.requestIdleCallback(d):b.requestAnimationFrame?b.requestAnimationFrame(d):b.setTimeout(d,100)}function c(){if(b.performance&&
b.performance.getEntries){var a=b.performance.getEntries();!a||0>=a.length?h(!1):l()}else h(!1)}var e=b.ue_ext||{};b.ue_ext||c();return e}function q(){setTimeout(c,r)}var s=b.ue_dserr||!1,p=!0,n=1,r=2E3,g=0;b.ue_err&&s&&(b.ue_err.errorHandlers||(b.ue_err.errorHandlers=[]),b.ue_err.errorHandlers.push({name:"ext",handler:function(b){if(!b.logLevel||"FATAL"===b.logLevel){var f=c(!0),d=[],h;for(h in f){var f=h,g=f.match(/amazon(\.com?)?\.\w{2,3}$/i);g&&1<g.length||-1!==f.indexOf("amazon-adsystem.com")||
-1!==f.indexOf("amazonpay.com")||-1!==f.indexOf("cloudfront-labs.amazonaws.com")||d.push(h)}b.ext=d}}}));b.ue&&b.ue.isl?c():b.ue&&ue.attach&&ue.attach("load",q)})(document,window);





var ue_wtc_c = 3;
ue_csm.ue.exec(function(b,e){function l(){for(var a=0;a<f.length;a++)a:for(var d=s.replace(A,f[a])+g[f[a]]+t,c=arguments,b=0;b<c.length;b++)try{c[b].send(d);break a}catch(e){}g={};f=[];n=0;k=p}function u(){B?l(q):l(C,q)}function v(a,m,c){r++;if(r>w)d.count&&1==r-w&&(d.count("WeblabTriggerThresholdReached",1),b.ue_int&&console.error("Number of max call reached. Data will no longer be send"));else{var h=c||{};h&&-1<h.constructor.toString().indexOf(D)&&a&&-1<a.constructor.toString().indexOf(x)&&m&&-1<
m.constructor.toString().indexOf(x)?(h=b.ue_id,c&&c.rid&&(h=c.rid),c=h,a=encodeURIComponent(",wl="+a+"/"+m),2E3>a.length+p?(2E3<k+a.length&&u(),void 0===g[c]&&(g[c]="",f.push(c)),g[c]+=a,k+=a.length,n||(n=e.setTimeout(u,E))):b.ue_int&&console.error("Invalid API call. The input provided is over 2000 chars.")):d.count&&(d.count("WeblabTriggerImproperAPICall",1),b.ue_int&&console.error("Invalid API call. The input provided does not match the API protocol i.e ue.trigger(String, String, Object)."))}}function F(){d.trigger&&
d.trigger.isStub&&d.trigger.replay(function(a){v.apply(this,a)})}function y(){z||(f.length&&l(q),z=!0)}var t=":1234",s="//"+b.ue_furl+"/1/remote-weblab-triggers/1/OE/"+b.ue_mid+":"+b.ue_sid+":PLCHLDR_RID$s:wl-client-id%3DCSMTriger",A="PLCHLDR_RID",E=b.wtt||1E4,p=s.length+t.length,w=b.mwtc||2E3,G=1===e.ue_wtc_c,B=3===e.ue_wtc_c,H=e.XMLHttpRequest&&"withCredentials"in new e.XMLHttpRequest,x="String",D="Object",d=b.ue,g={},f=[],k=p,n,z=!1,r=0,C=function(){return{send:function(a){if(H){var b=new e.XMLHttpRequest;
b.open("GET",a,!0);G&&(b.withCredentials=!0);b.send()}else throw"";}}}(),q=function(){return{send:function(a){(new Image).src=a}}}();e.encodeURIComponent&&(d.attach&&(d.attach("beforeunload",y),d.attach("pagehide",y)),F(),d.trigger=v)},"client-wbl-trg")(ue_csm,window);


(function(k,d,h){function f(a,c,b){a&&a.indexOf&&0===a.indexOf("http")&&0!==a.indexOf("https")&&l(s,c,a,b)}function g(a,c,b){a&&a.indexOf&&(location.href.split("#")[0]!=a&&null!==a&&"undefined"!==typeof a||l(t,c,a,b))}function l(a,c,b,e){m[b]||(e=u&&e?n(e):"N/A",d.ueLogError&&d.ueLogError({message:a+c+" : "+b,logLevel:v,stack:"N/A"},{attribution:e}),m[b]=1,p++)}function e(a,c){if(a&&c)for(var b=0;b<a.length;b++)try{c(a[b])}catch(d){}}function q(){return d.performance&&d.performance.getEntriesByType?
d.performance.getEntriesByType("resource"):[]}function n(a){if(a.id)return"//*[@id='"+a.id+"']";var c;c=1;var b;for(b=a.previousSibling;b;b=b.previousSibling)b.nodeName==a.nodeName&&(c+=1);b=a.nodeName;1!=c&&(b+="["+c+"]");a.parentNode&&(b=n(a.parentNode)+"/"+b);return b}function w(){var a=h.images;a&&a.length&&e(a,function(a){var b=a.getAttribute("src");f(b,"img",a);g(b,"img",a)})}function x(){var a=h.scripts;a&&a.length&&e(a,function(a){var b=a.getAttribute("src");f(b,"script",a);g(b,"script",a)})}
function y(){var a=h.styleSheets;a&&a.length&&e(a,function(a){if(a=a.ownerNode){var b=a.getAttribute("href");f(b,"style",a);g(b,"style",a)}})}function z(){if(A){var a=q();e(a,function(a){f(a.name,a.initiatorType)})}}function B(){e(q(),function(a){g(a.name,a.initiatorType)})}function r(){var a;a=d.location&&d.location.protocol?d.location.protocol:void 0;"https:"==a&&(z(),w(),x(),y(),B(),p<C&&setTimeout(r,D))}var s="[CSM] Insecure content detected ",t="[CSM] Ajax request to same page detected ",v="WARN",
m={},p=0,D=k.ue_nsip||1E3,C=5,A=1==k.ue_urt,u=!0;ue_csm.ue_disableNonSecure||(d.performance&&d.performance.setResourceTimingBufferSize&&d.performance.setResourceTimingBufferSize(300),r())})(ue_csm,window,document);


var ue_aa_a = "";
if (ue.trigger && (ue_aa_a === "C" || ue_aa_a === "T1")) {
    ue.trigger("UEDATA_AA_SERVERSIDE_ASSIGNMENT_CLIENTSIDE_TRIGGER_190249", ue_aa_a);
}
(function(f,b){function g(){try{b.PerformanceObserver&&"function"===typeof b.PerformanceObserver&&(a=new b.PerformanceObserver(function(b){c(b.getEntries())}),a.observe(d))}catch(h){k()}}function m(){for(var h=d.entryTypes,a=0;a<h.length;a++)c(b.performance.getEntriesByType(h[a]))}function c(a){if(a&&Array.isArray(a)){for(var c=0,e=0;e<a.length;e++){var d=l.indexOf(a[e].name);if(-1!==d){var g=Math.round(b.performance.timing.navigationStart+a[e].startTime);f.uet(n[d],void 0,void 0,g);c++}}l.length===
c&&k()}}function k(){a&&a.disconnect&&"function"===typeof a.disconnect&&a.disconnect()}if("function"===typeof f.uet&&b.performance&&"object"===typeof b.performance&&b.performance.getEntriesByType&&"function"===typeof b.performance.getEntriesByType&&b.performance.timing&&"object"===typeof b.performance.timing&&"number"===typeof b.performance.timing.navigationStart){var d={entryTypes:["paint"]},l=["first-paint","first-contentful-paint"],n=["fp","fcp"],a;try{m(),g()}catch(p){f.ueLogError(p,{logLevel:"ERROR",
attribution:"performanceMetrics"})}}})(ue_csm,window);


if (window.csa) {
    csa("Events")("setEntity", {
        page:{pageType: "Detail", subPageType: "Glance", pageTypeId: "B0BDK62PDX"}
    });
}
csa.plugin(function(c){var m="transitionStart",n="pageVisible",e="PageTiming",t="visibilitychange",s="$latency.visible",i=c.global,r=(i.performance||{}).timing,a=["navigationStart","unloadEventStart","unloadEventEnd","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","secureConnectionStart","requestStart","responseStart","responseEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"],u=c.config,o=i.Math,l=o.max,g=o.floor,d=i.document||{},f=(r||{}).navigationStart,v=f,p=0,S=null;if(i.Object.keys&&[].forEach&&!u["KillSwitch."+e]){if(!r||null===f||f<=0||void 0===f)return c.error("Invalid navigation timing data: "+f);S=new E({schemaId:"<ns>.PageLatency.6",producerId:"csa"}),"boolean"!=typeof d.hidden&&"string"!=typeof d.visibilityState||!d.removeEventListener?c.emit(s):b()?(c.emit(s),I(n,f)):c.on(d,t,function e(){b()&&(v=c.time(),d.removeEventListener(t,e),I(m,v),I(n,v),c.emit(s))}),c.once("$unload",h),c.once("$load",h),c.on("$pageTransition",function(){v=c.time()}),c.register(e,{mark:I,instance:function(e){return new E(e)}})}function E(e){var i,r=null,a=e.ent||{page:["pageType","subPageType","requestId"]},o=e.logger||c("Events",{producerId:e.producerId,lob:u.lob||"0"});if(!e||!e.producerId||!e.schemaId)return c.error("The producer id and schema Id must be defined for PageLatencyInstance.");function d(){return i||v}function n(){r=c.UUID()}this.mark=function(n,t){if(null!=n)return t=t||c.time(),n===m&&(i=t),c.once(s,function(){o("log",{messageId:r,__merge:function(e){e.markers[n]=function(e,n){return l(0,n-(e||v))}(d(),t),e.markerTimestamps[n]=g(t)},markers:{},markerTimestamps:{},navigationStartTimestamp:d()?new Date(d()).toISOString():null,schemaId:e.schemaId},{ent:a})}),t},n(),c.on("$beforePageTransition",n)}function I(e,n){e===m&&(v=n);var t=S.mark(e,n);c.emit("$timing:"+e,t)}function h(){if(!p){for(var e=0;e<a.length;e++)r[a[e]]&&I(a[e],r[a[e]]);p=1}}function b(){return!d.hidden||"visible"===d.visibilityState}});csa.plugin(function(c){var f,u,l="length",a="parentElement",t="target",i="getEntriesByName",e=null,r="_csa_flt",o="_csa_llt",s="previousSibling",d="visuallyLoaded",n="client",g="offset",h="scroll",m="Width",p="Height",v=n+m,y=n+p,E=g+m,S=g+p,x=h+m,O=h+p,b="_osrc",w="_elt",I="_eid",T=10,_=5,L=15,N=100,k=c.global,B=c.timeout,H=k.Math,W=H.max,C=H.floor,F=H.ceil,M=k.document||{},R=M.body||{},Y=M.documentElement||{},P=k.performance||{},X=(P.timing||{}).navigationStart,$=Date.now,D=Object.values||(c.types||{}).ovl,J=c("PageTiming"),V=c("SpeedIndexBuffers"),j=[],q=[],z=[],A=[],G=[],K=[],Q=.1,U=.1,Z=0,ee=0,ne=!0,te=0,ie=0,re=1==c.config["SpeedIndex.ForceReplay"],oe=0,ae=1,fe=0,ce={},ue=[],le=0;function se(){for(var e=$(),n=0;f;){if(0!==f[l]){if(!1!==f.h(f[0])&&f.shift(),n++,!re&&n%T==0&&$()-e>_)break}else f=f.n}Z=0,f&&(Z||(!0===M.hidden?(re=1,se()):c.timeout(se,0)))}function de(e,n,t,i,r){fe=C(e),j=n,q=t,z=i,K=r;var o=M.createTreeWalker(M.body,NodeFilter.SHOW_TEXT,null,null),a={w:k.innerWidth,h:k.innerHeight,x:k.pageXOffset,y:k.pageYOffset};M.body[w]=e,A.push({w:o,vp:a}),G.push({img:M.images,iter:0}),j.h=ge,(j.n=q).h=he,(q.n=z).h=me,(z.n=A).h=pe,(A.n=G).h=ve,(G.n=K).h=ye,f=j,se()}function ge(e){e.m.forEach(function(e){for(var n=e;n&&(e===n||!n[r]||!n[o]);)n[r]||(n[r]=e[r]),n[o]||(n[o]=e[o]),n[w]=n[r]-X,n=n[s]})}function he(e){e.m.forEach(function(e){var n=e[t];b in n||(n[b]=e.oldValue)})}function me(n){n.m.forEach(function(e){e[t][w]=n.t-X})}function pe(e){for(var n,t=e.vp,i=e.w,r=T;(n=i.nextNode())&&0<r;){r-=1;var o=(n[a]||{}).nodeName;"SCRIPT"!==o&&"STYLE"!==o&&"NOSCRIPT"!==o&&"BODY"!==o&&0!==(n.nodeValue||"").trim()[l]&&be(n[a],Ee(n),t)}return!n}function ve(e){for(var n={w:k.innerWidth,h:k.innerHeight,x:k.pageXOffset,y:k.pageYOffset},t=T;e.iter<e.img[l]&&0<t;){var i,r=e.img[e.iter],o=Oe(r),a=o&&Ee(o)||Ee(r);o?(o[w]=a,i=xe(o.querySelector('[aria-posinset="1"] img')||r)||a,r=o):i=xe(r)||a,ie&&u<i&&(i=a),be(r,i,n),e.iter+=1,t-=1}return e.img[l]<=e.iter}function ye(e){var n=[],i=0,r=0,o=ee,t=k.innerHeight||W(R[O]||0,R[S]||0,Y[y]||0,Y[O]||0,Y[S]||0),a=C(e.y/N),f=F((e.y+t)/N);ue.slice(a,f).forEach(function(e){(e.elems||[]).forEach(function(e){e.lt in n||(n[e.lt]={}),e.id in n[e.lt]||(i+=(n[e.lt][e.id]=e).a)})}),D(n).forEach(function(e){D(e).forEach(function(e){var n=1-r/i,t=W(e.lt,o);le+=n*(t-o),o=t,function(e,n){var t;for(;Q<=1&&Q-.01<=e;)we(d+(t=(100*Q).toFixed(0)),n.lt),"50"!==t&&"90"!==t||c("Content",{target:n.e})("mark",d+t,X+F(n.lt||0)),Q+=U}((r+=e.a)/i,e)})}),ee=e.t-X,K[l]<=1&&(we("speedIndex",le),we(d+"0",fe)),ne&&(ne=!1,we("atfSpeedIndex",le))}function Ee(e){for(var n=e[a],t=L;n&&0<t;){if(n[w]||0===n[w])return W(n[w],fe);n=n.parentElement,t-=1}}function Se(e,n){if(e){if(!e.indexOf("data:"))return Ee(n);var t=P[i](e)||[];if(0<t[l])return W(F(t[0].responseEnd||0),fe)}}function xe(e){return Se(e[b],e)||Se(e.currentSrc,e)||Se(e.src,e)}function Oe(e){for(var n=10,t=e.parentElement;t&&0<n;){if(t.classList&&t.classList.contains("a-carousel-viewport"))return t;t=t.parentElement,n-=1}return null}function be(e,n,t){if((n||0===n)&&!e[I]){var i=e.getBoundingClientRect(),r=i.width*i.height,o=t.w||W(R[x]||0,R[E]||0,Y[v]||0,Y[x]||0,Y[E]||0)||i.right,a=i.width/2,f=ae++;if(0!=r&&!(a<i.right-o||i.right<a)){for(var c={e:e,lt:n,a:r,id:f},u=C((i.top+t.y)/N),l=F((i.top+t.y+i.height)/N),s=u;s<=l;s++)s in ue||(ue[s]={elems:[],lt:0}),ue[s].elems.push(c);e[I]=f}}}function we(e,n){J("mark",e,X+F((ce[e]=n)||0))}function Ie(e){oe||(V("getBuffers",de),oe=1)}X&&D&&P[i]&&(V("registerListener",function(){ie&&(clearTimeout(te),te=B(Ie.bind(e,"Mut"),2500))}),c.once("$unload",function(){re=1,Ie()}),c.once("$load",function(){ie=1,u=$()-X,te=B(Ie.bind(e,"Ld"),2500)}),c.once("$timing:functional",Ie.bind(e,"Fn")),V("replayModuleIsLive"),c.register("SpeedIndex",{getMarkers:function(e){e&&e(JSON.parse(JSON.stringify(ce)))}}))});csa.plugin(function(e){var m=!!e.config["LCP.elementDedup"],t=!1,n=e("PageTiming"),r=e.global.PerformanceObserver,a=e.global.performance;function i(){return a.timing.navigationStart}function o(){t||function(o){var l=new r(function(e){var t=e.getEntries();if(0!==t.length){var n=t[t.length-1];if(m&&""!==n.id&&n.element&&"IMG"===n.element.tagName){for(var r={},a=t[0],i=0;i<t.length;i++)t[i].id in r||(""!==t[i].id&&(r[t[i].id]=!0),a.startTime<t[i].startTime&&(a=t[i]));n=a}l.disconnect(),o({startTime:n.startTime,renderTime:n.renderTime,loadTime:n.loadTime})}});try{l.observe({type:"largest-contentful-paint",buffered:!0})}catch(e){}}(function(e){e&&(t=!0,n("mark","largestContentfulPaint",Math.floor(e.startTime+i())),e.renderTime&&n("mark","largestContentfulPaint.render",Math.floor(e.renderTime+i())),e.loadTime&&n("mark","largestContentfulPaint.load",Math.floor(e.loadTime+i())))})}r&&a&&a.timing&&(e.once("$unload",o),e.once("$load",o),e.register("LargestContentfulPaint",{}))});csa.plugin(function(r){var e=r("Metrics",{producerId:"csa"}),n=r.global.PerformanceObserver;n&&(n=new n(function(r){var t=r.getEntries();if(0===t.length||!t[0].processingStart||!t[0].startTime)return;!function(r){r=r||0,n.disconnect(),0<=r?e("recordMetric","firstInputDelay",r):e("recordMetric","firstInputDelay.invalid",1)}(t[0].processingStart-t[0].startTime)}),function(){try{n.observe({type:"first-input",buffered:!0})}catch(r){}}())});csa.plugin(function(d){var e="Metrics",g=d.config,f=0;function r(i){var c,t,e=i.producerId,r=i.logger,o=r||d("Events",{producerId:e,lob:g.lob||"0"}),s=(i||{}).dimensions||{},u={},n=-1;if(!e&&!r)return d.error("Either a producer id or custom logger must be defined");function a(){n!==f&&(c=d.UUID(),t=d.UUID(),u={},n=f)}this.recordMetric=function(r,n){var e=i.logOptions||{ent:{page:["pageType","subPageType","requestId"]}};e.debugMetric=i.debugMetric,a(),o("log",{messageId:c,schemaId:i.schemaId||"<ns>.Metric.4",metrics:{},dimensions:s,__merge:function(e){e.metrics[r]=n}},e)},this.recordCounter=function(r,e){var n=i.logOptions||{ent:{page:["pageType","subPageType","requestId"]}};if("string"!=typeof r||"number"!=typeof e||!isFinite(e))return d.error("Invalid type given for counter name or counter value: "+r+"/"+e);a(),r in u||(u[r]={});var c=u[r];"f"in c||(c.f=e),c.c=(c.c||0)+1,c.s=(c.s||0)+e,c.l=e,o("log",{messageId:t,schemaId:i.schemaId||"<ns>.InternalCounters.3",c:{},__merge:function(e){r in e.c||(e.c[r]={}),c.fs||(c.fs=1,e.c[r].f=c.f),1<c.c&&(e.c[r].s=c.s,e.c[r].l=c.l,e.c[r].c=c.c)}},n)}}g["KillSwitch."+e]||(new r({producerId:"csa"}).recordMetric("baselineMetricEvent",1),d.on("$beforePageTransition",function(){f++}),d.register(e,{instance:function(e){return new r(e||{})}}))});csa.plugin(function(s){var n=s.config,r=(s.global.performance||{}).timing,c=(r||{}).navigationStart||s.time(),g=0;function e(){g+=1}function i(i){i=i||{};var o=s.UUID(),t=g,r=i.producerId,e=i.logger,a=e||s("Events",{producerId:r,lob:n.lob||"0"});if(!r&&!e)return s.error("Either a producer id or custom logger must be defined");this.mark=function(e,r){var n=(void 0===r?s.time():r)-c;t!==g&&(t=g,o=s.UUID()),a("log",{messageId:o,schemaId:i.schemaId||"<ns>.Timer.1",markers:{},__merge:function(r){r.markers[e]=n}},i.logOptions)}}r&&(e(),s.on("$beforePageTransition",e),s.register("Timers",{instance:function(r){return new i(r||{})}}))});csa.plugin(function(t){var e="takeRecords",i="disconnect",n="function",o=t("Metrics",{producerId:"csa"}),c=t("PageTiming"),a=t.global,u=t.timeout,r=t.on,f=a.PerformanceObserver,m=0,l=!1,s=0,d=a.performance,h=a.document,v=null,y=!1,g=t.blank;function p(){l||(l=!0,clearTimeout(v),typeof f[e]===n&&f[e](),typeof f[i]===n&&f[i](),o("recordMetric","documentCumulativeLayoutShift",m),c("mark","cumulativeLayoutShiftLastTimestamp",Math.floor(s+d.timing.navigationStart)))}f&&d&&d.timing&&h&&(f=new f(function(t){v&&clearTimeout(v);t.getEntries().forEach(function(t){t.hadRecentInput||(m+=t.value,s<t.startTime&&(s=t.startTime))}),v=u(p,5e3)}),function(){try{f.observe({type:"layout-shift",buffered:!0}),v=u(p,5e3)}catch(t){}}(),g=r(h,"click",function(t){y||(y=!0,o("recordMetric","documentCumulativeLayoutShiftToFirstInput",m),g())}),r(h,"visibilitychange",function(){"hidden"===h.visibilityState&&p()}),t.once("$unload",p))});csa.plugin(function(e){var t,n=e.global,r=n.PerformanceObserver,c=e("Metrics",{producerId:"csa"}),o=0,i=0,a=-1,l=n.Math,f=l.max,u=l.ceil;if(r){t=new r(function(e){e.getEntries().forEach(function(e){var t=e.duration;o+=t,i+=t,a=f(t,a)})});try{t.observe({type:"longtask",buffered:!0})}catch(e){}t=new r(function(e){0<e.getEntries().length&&(i=0,a=-1)});try{t.observe({type:"largest-contentful-paint",buffered:!0})}catch(e){}e.on("$unload",g),e.on("$beforePageTransition",g)}function g(){c("recordMetric","totalBlockingTime",u(i||0)),c("recordMetric","totalBlockingTimeInclLCP",u(o||0)),c("recordMetric","maxBlockingTime",u(a||0)),i=o=0,a=-1}});csa.plugin(function(o){var e="CacheDetection",r="csa-ctoken-",c=o.store,t=o.deleteStored,n=o.config,i=n[e+".RequestID"],a=n[e+".Callback"],s=o.global,u=s.document||{},d=s.Date,l=o("Events"),f=o("Events",{producerId:"csa",lob:n.lob||"0"});function p(e){try{var c=u.cookie.match(RegExp("(^| )"+e+"=([^;]+)"));return c&&c[2].trim()}catch(e){}}n["KillSwitch."+e]||(function(){var e=function(){var e=p("cdn-rid");if(e)return{r:e,s:"cdn"}}()||function(){if(o.store(r+i))return{r:o.UUID().toUpperCase().replace(/-/g,"").slice(0,20),s:"device"}}()||{},c=e.r,n=e.s;if(!!c){var t=p("session-id");!function(e,c,n,t){l("setEntity",{page:{pageSource:"cache",requestId:e,cacheRequestId:i,cacheSource:t},session:{id:n}})}(c,0,t,n),"device"===n&&f("log",{schemaId:"<ns>.CacheImpression.2"},{ent:"all"}),a&&a(c,t,n)}}(),c(r+i,d.now()+36e5),o.once("$load",function(){var n=d.now();t(function(e,c){return 0==e.indexOf(r)&&parseInt(c)<n})}))});csa.plugin(function(u){var i,t="Content",e="MutationObserver",n="addedNodes",a="querySelectorAll",f="matches",r="getAttributeNames",o="getAttribute",s="dataset",c="widget",l="producerId",d="slotId",h="iSlotId",g={ent:{element:1,page:["pageType","subPageType","requestId"]}},p=5,m=u.config[t+".BubbleUp.SearchDepth"]||35,y=u.config[t+".SearchPage"]||0,v="csaC",b=v+"Id",E="logRender",w={},I=u.config,O=I[t+".Selectors"]||[],C=I[t+".WhitelistedAttributes"]||{href:1,class:1},N=I[t+".EnableContentEntities"],S=I["KillSwitch.ContentRendered"],k=u.global,A=k.document||{},U=A.documentElement,L=k.HTMLElement,R={},_=[],j=function(t,e,n,i){var o=this,r=u("Events",{producerId:t||"csa",lob:I.lob||"0"});e.type=e.type||c,o.id=e.id,o.l=r,o.e=e,o.el=n,o.rt=i,o.dlo=g,o.op=W(n,"csaOp"),o.log=function(t,e){r("log",t,e||g)},o.entities=function(t){t(e)},e.id&&r("setEntity",{element:e})},x=j.prototype;function D(t){var e=(t=t||{}).element,n=t.target;return e?function(t,e){var n;n=t instanceof L?K(t)||Y(e[l],t,z,u.time()):R[t.id]||H(e[l],0,t,u.time());return n}(e,t):n?M(n):u.error("No element or target argument provided.")}function M(t){var e=function(t){var e=null,n=0;for(;t&&n<m;){if(n++,P(t,b)){e=t;break}t=t.parentElement}return e}(t);return e?K(e):new j("csa",{id:null},null,u.time())}function P(t,e){if(t&&t.dataset)return t.dataset[e]}function T(t,e,n){_.push({n:n,e:t,t:e}),B()}function q(){for(var t=u.time(),e=0;0<_.length;){var n=_.shift();if(w[n.n](n.e,n.t),++e%10==0&&u.time()-t>p)break}i=0,_.length&&B()}function B(){i=i||u.raf(q)}function X(t,e,n){return{n:t,e:e,t:n}}function Y(t,e,n,i){var o=u.UUID(),r={id:o},c=M(e);return e[s][b]=o,n(r,e),c&&c.id&&(r.parentId=c.id),H(t,e,r,i)}function $(t){return isNaN(t)?null:Math.round(t)}function H(t,e,n,i){N&&(n.schemaId="<ns>.ContentEntity.2"),n.id=n.id||u.UUID();var o=new j(t,n,e,i);return function(t){return!S&&((t.op||{}).hasOwnProperty(E)||y)}(o)&&function(t,e){var n={},i=u.exec($);t.el&&(n=t.el.getBoundingClientRect()),t.log({schemaId:"<ns>.ContentRender.3",timestamp:e,width:i(n.width),height:i(n.height),positionX:i(n.left+k.pageXOffset),positionY:i(n.top+k.pageYOffset)})}(o,i),u.emit("$content.register",o),R[n.id]=o}function K(t){return R[(t[s]||{})[b]]}function W(n,i){var o={};return r in(n=n||{})&&Object.keys(n[s]).forEach(function(t){if(!t.indexOf(i)&&i.length<t.length){var e=function(t){return(t[0]||"").toLowerCase()+t.slice(1)}(t.slice(i.length));o[e]=n[s][t]}}),o}function z(t,e){r in e&&(function(t,e){var n=W(t,v);Object.keys(n).forEach(function(t){e[t]=n[t]})}(e,t),d in t&&(t[h]=t[d]),function(e,n){(e[r]()||[]).forEach(function(t){t in C&&(n[t]=e[o](t))})}(e,t))}U&&A[a]&&k[e]&&(O.push({selector:"*[data-csa-c-type]",entity:z}),O.push({selector:".celwidget",entity:function(t,e){z(t,e),t[d]=t[d]||e[o]("cel_widget_id")||e.id,t.legacyId=e[o]("cel_widget_id")||e.id,t.type=t.type||c}}),w[1]=function(t,e){t.forEach(function(t){t[n]&&t[n].constructor&&"NodeList"===t[n].constructor.name&&Array.prototype.forEach.call(t[n],function(t){_.unshift(X(2,t,e))})})},w[2]=function(r,c){a in r&&f in r&&O.forEach(function(t){for(var e=t.selector,n=r[f](e),i=r[a](e),o=i.length-1;0<=o;o--)_.unshift(X(3,{e:i[o],s:t},c));n&&_.unshift(X(3,{e:r,s:t},c))})},w[3]=function(t,e){var n=t.e;K(n)||Y("csa",n,t.s.entity,e)},w[4]=function(){u.register(t,{instance:D})},new k[e](function(t){T(t,u.time(),1)}).observe(U,{childList:!0,subtree:!0}),T(U,u.time(),2),T(null,u.time(),4),u.on("$content.export",function(e){Object.keys(e).forEach(function(t){x[t]=e[t]})}))});csa.plugin(function(o){var i,t="ContentImpressions",e="KillSwitch.",n="IntersectionObserver",r="getAttribute",s="dataset",c="intersectionRatio",a="csaCId",m=1e3,l=o.global,f=o.config,u=f[e+t],v=f[e+t+".ContentViews"],g=((l.performance||{}).timing||{}).navigationStart||o.time(),d={};function h(t){t&&(t.v=1,function(t){t.vt=o.time(),t.el.log({schemaId:"<ns>.ContentView.4",timeToViewed:t.vt-t.el.rt,pageFirstPaintToElementViewed:t.vt-g})}(t))}function I(t){t&&!t.it&&(t.i=o.time()-t.is>m,function(t){t.it=o.time(),t.el.log({schemaId:"<ns>.ContentImpressed.3",timeToImpressed:t.it-t.el.rt,pageFirstPaintToElementImpressed:t.it-g})}(t))}!u&&l[n]&&(i=new l[n](function(t){var n=o.time();t.forEach(function(t){var e=function(t){if(t&&t[r])return d[t[s][a]]}(t.target);if(e){o.emit("$content.intersection",{meta:e.el,t:n,e:t});var i=t.intersectionRect;t.isIntersecting&&0<i.width&&0<i.height&&(v||e.v||h(e),.5<=t[c]&&!e.is&&(e.is=n,e.timer=o.timeout(function(){I(e)},m))),t[c]<.5&&!e.it&&e.timer&&(l.clearTimeout(e.timer),e.is=0,e.timer=0)}})},{threshold:[0,.5,.99]}),o.on("$content.register",function(t){var e=t.el;e&&(d[t.id]={el:t,v:0,i:0,is:0,vt:0,it:0},i.observe(e))}))});csa.plugin(function(e){e.config["KillSwitch.ContentLatency"]||e.emit("$content.export",{mark:function(t,n){var o=this;o.t||(o.t=e("Timers",{logger:o.l,schemaId:"<ns>.ContentLatency.4",logOptions:o.dlo})),o.t("mark",t,n)}})});csa.plugin(function(t){function n(i,e,o){var c={};function r(t,n,e){t in c&&o<=n-c[t].s&&(function(n,e,i){if(!p)return;E(function(t){T(n,t),t.w[n][e]=a((t.w[n][e]||0)+i)})}(t,i,n-c[t].d),c[t].d=n),e||delete c[t]}this.update=function(t,n){n.isIntersecting&&e<=n.intersectionRatio?function(t,n){t in c||(c[t]={s:n,d:n})}(t,u()):r(t,u())},this.stopAll=function(t){var n=u();for(var e in c)r(e,n,t)},this.reset=function(){var t=u();for(var n in c)c[n].s=t,c[n].d=t}}var e=t.config,u=t.time,i="ContentInteractionsSummary",o=e[i+".FlushInterval"]||5e3,c=e[i+".FlushBackoff"]||1.5,r=t.global,s=t.on,a=Math.floor,f=(r.document||{}).documentElement||{},l=((r.performance||{}).timing||{}).responseStart||t.time(),d=o,m=0,p=!0,v=t.UUID(),g=t("Events",{producerId:"csa",lob:e.lob||"0"}),w=new n("it0",0,0),I=new n("it50",.5,1e3),h=new n("it100",.99,0),b={},A={};function $(){w.stopAll(!0),I.stopAll(!0),h.stopAll(!0),S()}function C(){w.reset(),I.reset(),h.reset(),S()}function S(){d&&(clearTimeout(m),m=t.timeout($,d),d*=c)}function U(n){E(function(t){T(n,t),t.w[n].mc=(t.w[n].mc||0)+1})}function E(t){g("log",{messageId:v,schemaId:"<ns>.ContentInteractionsSummary.2",w:{},__merge:t},{ent:{page:["requestId"]}})}function T(t,n){t in n.w||(n.w[t]={})}e["KillSwitch."+i]||(s("$content.intersection",function(t){if(t&&t.meta&&t.e){var n=t.meta.id;if(n in b){var e=t.e.boundingClientRect||{};e.width<5||e.height<5||(w.update(n,t.e),I.update(n,t.e),h.update(n,t.e),!t.e.isIntersecting||n in A||(A[n]=1,function(n,e){E(function(t){T(n,t),t.w[n].ttfv=a(e)})}(n,u()-l)))}}}),s("$content.register",function(t){(t.e||{}).slotId&&(b[t.id]={},function(e){E(function(t){var n=e.id;T(n,t),t.w[n].sid=(e.e||{}).slotId,t.w[n].cid=(e.e||{}).contentId})}(t))}),s("$beforePageTransition",function(){$(),C(),v=t.UUID(),S()}),s("$beforeunload",function(){w.stopAll(),I.stopAll(),h.stopAll(),d=null}),s("$visible",function(t){t?C():($(),clearTimeout(m)),p=t},{buffered:1}),s(f,"click",function(t){for(var n=t.target,e=25;n&&0<e;){var i=(n.dataset||{}).csaCId;i&&U(i),n=n.parentElement,e-=1}},{capture:!0,passive:!0}),S())});csa.plugin(function(d){var t,o,e="normal",c="reload",i="history",s="new-tab",n="ajax",r=1,a=2,u="lastActive",l="lastInteraction",f="used",p="csa-tabbed-browsing",y="visibilityState",g="page",v="experience",b="request",I="initialized",m={"back-memory-cache":1,"tab-switch":1,"history-navigation-page-cache":1},h="TabbedBrowsing",T="<ns>."+h+".4",S="visible",w=d.global,x=d.config,P=d("Events",{producerId:"csa",lob:x.lob||"0"}),q=w.location||{},z=w.document,A=w.JSON,C=((w.performance||{}).navigation||{}).type,E=d.store,O=d.on,$=d.storageSupport(),k=!1,R={},j={},B={},J={},K={},M=!1,N=!1,D=!1,F=0,G=x["CSA.isRunningInsideMShop"];function H(e){try{return A.parse(E(p,void 0,{session:e})||"{}")||{}}catch(e){d.error('Could not parse storage value for key "'+p+'": '+e)}return{}}function L(e,i){E(p,A.stringify(i||{}),{session:e})}function Q(e){var i=j.tid||e.id,t={},n=R[u]||{};for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);!G&&t.tid!==i||(t.tid=i,t.pid=e.id,t.ent=K),J={pid:e.id,tid:i,ent:K,lastInteraction:j[l]||{},initialized:!0},B={lastActive:t,lastInteraction:R[l]||{},time:d.time(),initialized:!0}}function U(e){var i=e===s,t=z.referrer,n=!(t&&t.length)||!~t.indexOf(q.origin||""),r=i&&!G&&n,a={type:e,toTabId:J.tid,toPageId:J.pid,transitTime:d.time()-R.time||null};r||function(e,i,t){var n=e===c,r=i||G&&!(j[I]&&j.ent)?R[u]||{}:j,a=R[l]||{},d=j[l]||{},o=i||G&&!(d.id&&!d[f])?a:d;t.fromTabId=r.tid,t.fromPageId=r.pid;var s=r.ent||{};s.rid&&(t.fromRequestId=s.rid||null),s.ety&&(t.fromExperienceType=s.ety||null),s.esty&&(t.fromExperienceSubType=s.esty||null),n||!o.id||o[f]||(t.interactionId=o.id||null,o.sid&&(t.interactionSlotId=o.sid||null),a.id===o.id&&(a[f]=!0),d.id===o.id&&(d[f]=!0))}(e,i,a),P("log",{navigation:a,schemaId:T},{ent:{page:["pageType","subPageType","requestId"]}})}function V(e){D=function(e){return e&&e in m}(e.transitionType),function(){R=H(!1),j=H(!0);var e=R[l],i=j[l],t=!1,n=!1;e&&i&&e.id===i.id&&e[f]!==i[f]&&(t=!e[f],n=!i[f],i[f]=e[f]=!0,t&&L(!1,R),n&&L(!0,j))}(),Q(e),M=!0,function(e){var i,t;i=X(),t=Z(!0),(i||t)&&Q(e)}(e),F=1}function W(){k&&!D?U(n):(k=!0,function(){if(C===a||D)U(i);else if(C===r)U(j[I]?c:s);else{U(j[I]||G&&R[I]?e:s)}}())}function X(){var e=t,i={};return!!(M&&e&&e.e&&e.w)&&(e.w("entities",function(e){i=e||{}}),j[l]={id:e.e.messageId,sid:i.slotId,used:!(R[l]={id:e.e.messageId,sid:i.slotId,used:!1})},!(t=null))}function Y(e,i,t,n){var r=!1,a=e[u];return N?(!a||a.tid!==J.tid||!a[S]||a.pid!==t||!a.ent&&n||n&&function(e,i){var t=e||{},n=i||{};return t.rid!==n.rid||t.ety!==n.ety||t.esty!==n.esty}(a.ent,n))&&(e[u]={visible:!0,pid:t,tid:i,ent:n},r=!0):!G&&a&&a.tid===J.tid&&a[S]&&(r=!(a[S]=!1)),r}function Z(e){var i=!1;if(N=G&&e||z[y]===S,M){var t=R[u]||{};i=Y(R,j.tid||t.tid||J.tid,j.pid||t.pid||J.pid,j.ent||t.ent||J.ent)}return i}x["KillSwitch."+h]||$.local&&$.session&&A&&z&&y in z&&(o=function(){try{return w.self!==w.top}catch(e){return!0}}(),O("$entities.set",function(e){if(!o&&e){var i=(e[b]||{}).id||(e[g]||{}).requestId,t=(e[v]||{}).experienceType||(e[g]||{}).pageType,n=(e[v]||{}).experienceSubType||(e[g]||{}).subPageType,r=!K.rid&&i||!K.ety&&t||!K.esty&&n;if(K.rid=K.rid||i,K.ety=K.ety||t,K.esty=K.esty||n,r&&F){var a=R[u]||{};a.tid===j.tid&&(a.ent=K,L(!1,R)),j.ent=K,L(!0,j)}}},{buffered:1}),O("$pageChange",function(e){o||(V(e),W(),L(!1,B),L(!0,J),j=J,R=B)},{buffered:1}),O("$content.interaction",function(e){t=e,X()&&(L(!1,R),L(!0,j))}),O(z,"visibilitychange",function(){!o&&Z()&&L(!1,R)},{capture:!1,passive:!0}))});csa.plugin(function(c){var e=c("Metrics",{producerId:"csa"});c.on(c.global,"pageshow",function(c){c&&c.persisted&&e("recordMetric","bfCache",1)})});csa.plugin(function(n){var e,t,i,o,r,a,c,u,f,s,l,d,p,g,m,v,h,b,y="hasFocus",S="$app.",T="avail",$="client",w="document",I="inner",P="offset",D="screen",C="scroll",E="Width",F="Height",O=T+E,q=T+F,x=$+E,z=$+F,H=I+E,K=I+F,M=P+E,W=P+F,X=C+E,Y=C+F,j="up",k="down",A="none",B=20,G=n.config,J=G["KillSwitch.PageInteractionsSummary"],L=n("Events",{producerId:"csa",lob:G.lob||"0"}),N=1,Q=n.global||{},R=n.time,U=n.on,V=n.once,Z=Q[w]||{},_=Q[D]||{},nn=Q.Math||{},en=nn.abs,tn=nn.max,on=nn.ceil,rn=((Q.performance||{}).timing||{}).responseStart,an=function(){return Z[y]()},cn=1,un=100,fn={},sn=1,ln=0,dn=0,pn=k,gn=A;function mn(){c=t=o=r=e,i=d=0,a=u=f=s=l=0,pn=k,gn=A,dn=ln=0,yn(),bn()}function vn(){rn&&!o&&(c=on((o=p)-rn),sn=1)}function hn(){var n=m-i;(!t||t&&t<=p)&&(n&&(++a,sn=dn=1),i=m,n),function(){if(gn=d<m?k:j,pn!==gn){var n=en(m-d);B<n&&(++l,ln&&!dn&&++a,pn=gn,sn=ln=1,d=m,dn=0)}else dn=0,d=m}(),t=p+un}function bn(){u=on(tn(u,m+b)),g&&(f=on(tn(f,g+h))),sn=1}function yn(){p=R(),g=en(Q.pageXOffset||0),m=tn(Q.pageYOffset||0,0),v=0<g||0<m,h=Q[H]||0,b=Q[K]||0}function Sn(){yn(),vn(),hn(),bn()}function Tn(){if(r){var n=on(R()-r);s+=n,r=e,sn=0<n}}function $n(){r=r||R()}function wn(n,e,t,i){e[n+E]=on(t||0),e[n+F]=on(i||0)}function In(n){var e=n===fn,t=an();if(t||sn){if(!e){if(!N)return;N=0,t&&Tn()}var i=function(){var n={},e=Z.documentElement||{},t=Z.body||{};return wn("availableScreen",n,_[O],_[q]),wn(w,n,tn(t[X]||0,t[M]||0,e[x]||0,e[X]||0,e[M]||0),tn(t[Y]||0,t[W]||0,e[z]||0,e[Y]||0,e[W]||0)),wn(D,n,_.width,_.height),wn("viewport",n,Q[H],Q[K]),n}(),o=function(){var n={scrollCounts:a,reachedDepth:u,horizontalScrollDistance:f,dwellTime:s,vScrollDirChanges:l};return"number"==typeof c&&(n.clientTimeToFirstScroll=c),n}();e?sn=0:(mn(),rn=R(),t&&(r=rn)),L("log",{activity:o,dimensions:i,schemaId:"<ns>.PageInteractionsSummary.3"},{ent:{page:["pageType","subPageType","requestId"]}})}}function Pn(){Tn(),In(fn)}function Dn(n,e){return function(){cn=e,n()}}function Cn(){an=function(){return cn},cn&&!r&&(r=R())}"function"!=typeof Z[y]||J||(mn(),v&&vn(),U(Q,C,Sn,{passive:!0}),U(Q,"blur",Pn),U(Q,"focus",Dn($n,1)),V(S+"android",Cn),V(S+"ios",Cn),U(S+"pause",Dn(Pn,0)),U(S+"resume",Dn($n,1)),U(S+"resign",Dn(Pn,0)),U(S+"active",Dn($n,1)),an()&&(r=rn||R()),V("$beforeunload",In),U("$beforeunload",In),U("$document.hidden",Pn),U("$beforePageTransition",In),U("$afterPageTransition",function(){sn=N=1}))});csa.plugin(function(e){var o,n,r="Navigator",a="<ns>."+r+".5",i=e.global,c=e.config,d=i.navigator||{},t=d.connection||{},l=i.Math.round,u=e("Events",{producerId:"csa",lob:c.lob||"0"});function v(){o={network:{downlink:void 0,downlinkMax:void 0,rtt:void 0,type:void 0,effectiveType:void 0,saveData:void 0},language:void 0,doNotTrack:void 0,hardwareConcurrency:void 0,deviceMemory:void 0,cookieEnabled:void 0,webdriver:void 0},w(),o.language=d.language||null,o.doNotTrack=function(){switch(d.doNotTrack){case"1":return"enabled";case"0":return"disabled";case"unspecified":return d.doNotTrack;default:return null}}(),o.hardwareConcurrency="hardwareConcurrency"in d?l(d.hardwareConcurrency||0):null,o.deviceMemory="deviceMemory"in d?l(d.deviceMemory||0):null,o.cookieEnabled="cookieEnabled"in d?d.cookieEnabled:null,o.webdriver="webdriver"in d?d.webdriver:null}function k(){u("log",{network:(n={},Object.keys(o.network).forEach(function(e){n[e]=o.network[e]+""}),n),language:o.language,doNotTrack:o.doNotTrack,hardwareConcurrency:o.hardwareConcurrency,deviceMemory:o.deviceMemory,cookieEnabled:o.cookieEnabled,webdriver:o.webdriver,schemaId:a},{ent:{page:["pageType","subPageType","requestId"]}})}function w(){!function(n){Object.keys(o.network).forEach(function(e){o.network[e]=n[e]})}({downlink:"downlink"in t?l(t.downlink||0):null,downlinkMax:"downlinkMax"in t?l(t.downlinkMax||0):null,rtt:"rtt"in t?(t.rtt||0).toFixed():null,type:t.type||null,effectiveType:t.effectiveType||null,saveData:"saveData"in t?t.saveData:null})}function f(){w(),k()}function y(){v(),k()}c["KillSwitch."+r]||(v(),k(),e.on("$afterPageTransition",y),e.on(t,"change",f))});
if (window.ue && window.ue.uels) {
    ue.uels("https://c.amazon-adsystem.com/bao-csm/forensics/a9-tq-forensics-incremental.min.js");
}


ue.exec(function(d,c){function g(e,c){e&&ue.tag(e+c);return!!e}function n(){for(var e=RegExp("^https://(.*\.(images|ssl-images|media)-amazon\.com|"+c.location.hostname+")/images/","i"),d={},h=0,k=c.performance.getEntriesByType("resource"),l=!1,b,a,m,f=0;f<k.length;f++)if(a=k[f],0<a.transferSize&&a.transferSize>=a.encodedBodySize&&(b=e.exec(String(a.name)))&&3===b.length){a:{b=a.serverTiming||[];for(a=0;a<b.length;a++)if("provider"===b[a].name){b=b[a].description;break a}b=void 0}b&&(l||(l=g(b,"_cdn_fr")),
a=d[b]=(d[b]||0)+1,a>h&&(m=b,h=a))}g(m,"_cdn_mp")}d.ue&&"function"===typeof d.ue.tag&&c.performance&&c.location&&n()},"cdnTagging")(ue_csm,window);


}
(n=>{var M,A=(n.Symbol||{}).iterator;n.RXVM=function(r){var o=n([1,function(n){n.u.t[m(n)]=h(n)},2,function(n){n.o[0].t[m(n)]=h(n)},3,h,4,function(n){var r=h(n),t=h(n),n=h(n);d(n)&&(n[t]=r)},5,function(n){var r=h(n),t=m(n);d(r)&&"function"==typeof r[A]&&(n.u.t[t]=r[A]())},6,function(n){var r=n.u.t[m(n)],t=m(n),u=x(n);d(r)&&"function"==typeof r.next&&(!1 in(r=r.next()||{})||r.done?b(n,u):n.u.t[t]=r.value)},10,function(n){n.u.i.push(h(n))},11,function(n){n.u.i.push(n.v)},12,function(n){for(var r=F(n);0<r--;)n.l.push(S(n))},30,function(n){return!h(n)},42,function(){},43,function(n){for(var r=F(n);0<r--;)n.u.t.push(n._.pop())},45,a(!0),44,a(!1),48,v(0,y),49,v(1,y),50,v(2,y),51,v(-1,y),52,v(0,_),53,v(1,_),54,v(2,_),55,v(-1,_),58,function(n){b(n,x(n))},59,l(!0),60,l(!1),64,function(n){var r=x(n),t=p(n,n.u.h);return b(n,r),t},65,function(n){var r=F(n),t=x(n),u=p(n,n.u.h);n.u.t[r]=u,b(n,t)}]),i={40:function(n,r){return"__rx_cls"in n?n.__rx_cls===r.__rx_ref:n instanceof r}},t=(i[20]=Math.pow,s(16,"+"),s(17,"-"),s(18,"*"),s(19,"/"),s(21,"%"),s(22,"&"),s(23,"|"),s(24,"^"),s(25,"<<"),s(26,">>"),s(27,">>>"),s(28,"&&"),s(29,"||"),s(31,">"),s(33,">="),s(32,"<"),s(34,"<="),s(35,"=="),s(36,"==="),s(37,"!="),s(38,"!=="),s(39," in "),n([10,M,11,null,14,!0,15,!1])),u=n([1,function(n){return n.v},17,F,18,function(n){n=m(n)|m(n)<<8|m(n)<<16|m(n)<<24;return n=2147483647<n?-4294967295+n-1:n},19,function(n){for(var r=[],t=0;t<4;t++)r.push(m(n));return new Float32Array(new Uint8Array(r).buffer)[0]},12,S,13,function(n){return n.l[F(n)]},20,function(){return[]},21,function(n){for(var r=F(n),t=[];0<r--;)t.unshift(h(n));return t},24,function(n){for(var r,t,u,o=F(n),i=[];0<o--;)i.unshift((u=t=void 0,r=m(r=n)|m(r)<<8,t=32768&r?-1:1,u=r>>10&31,r&=1023,31!=u?0==u?r/1024*t*6103515625e-14:t*(1+r/1024)*Math.pow(2,u-15):NaN));return i},22,function(){return{}},23,function(n){for(var r=F(n)/2,t={};0<r--;){var u=h(n);t[h(n)]=u}return t},32,function(n){return n.u.t[F(n)]},33,function(n){return n.o[0].t[F(n)]},48,function(n){var r=h(n),n=h(n);return d(n)?("function"==typeof(r=n[r])&&(r.__rx_this=n),r):n},51,function(n){var r=h(n),t=0;return d(r)?function(){return{value:r[t],done:!(t++<r.length)}}:r},50,function(n){return n.u.i.pop()},52,function(n){return typeof h(n)}]);function f(n){for(;(r=n).u&&r.u.h<r.p.length;){r=m(n);n.v=e(r,n)}var r}function e(n,r){var t,u;return n in i?(t=h(r),u=h(r),i[n](u,t)):n in o?o[n](r):void k("e2:"+n+":"+r.u.h)}function c(n,r){return{m:n,h:n,t:[],i:[],F:r}}function n(n){for(var r={},t=0;t<n.length;t+=2)r[n[t]]=n[t+1];return r}function a(o){return function(n){var r=o?h(n):M,t=n.o.pop(),u=M,u=t.F?t.t[0]:r;return n._=[],n.u=n.o[n.o.length-1],w(n,n.u.m),u}}function v(u,o){return function(n){var r=h(n),t=u;for(-1===u&&(t=F(n));0<t--;)n._.push(h(n));if(n.v=M,r)return o(r,n)}}function l(u){return function(n){var r=h(n),t=x(n);(u&&r||!r&&!u)&&b(n,t)}}function s(u,o){i[u]=function(n,r){var t=Function("a","b","return a"+o+"b");return(i[u]=t)(n,r)}}function _(n,r){var t;if(n.__rx_ref&&n.S===r){var u=c(n.__rx_ref,!0);u.t.push({__rx_cls:n.__rx_ref}),r.o.push(u),r.u=u,w(r,u.m)}else if("function"==typeof n){u=r._.reverse().splice(0),u=Function.prototype.bind.apply(n,[null].concat(u));try{t=new u,r._=[]}catch(n){}}else k("e5:"+n+":"+r.u.h);return t}function y(n,r){var t;if(n.__rx_ref&&n.S===r){var u=c(n.__rx_ref);u.t.push(n.__rx_this||this),r.o.push(u),r.u=u,w(r,u.m)}else if("function"==typeof n){u=r._.reverse().splice(0);try{t=n.apply(n.__rx_this||this,u),r._=[]}catch(n){}}else k("e4:"+n);return t}function h(n){var r=m(n);return 0<(128&r)?e(127&r,n):r in t?t[r]:r in u?u[r](n):void k("e3:"+r)}function p(t,u){var n=g(function(){var n=c(u),r=n.t;return r.push(this),r.push.apply(r,arguments),t.o.push(n),t.u=n,w(t,n.m),f(t),t.v});return n.__rx_ref=u,n.S=t,n}function d(n){if(n!==M&&null!==n)return 1;r&&k("e10"+n)}function w(n,r){n.g=r%127+37}function b(n,r){n.u.h+=r}function m(n){return n.p[n.u.h++]^n.g}function x(n){n=m(n)|m(n)<<8;return n=32767<n?-65535+n-1:n}function F(n){for(var r,t=0,u=0,o=n.u.h;t+=(127&(r=n.p[o+u]^n.g))*Math.pow(2,7*u),u+=1,0<(128&r););return b(n,u),t}function S(n){for(var r=F(n),t="";0<r--;)t+=String.fromCharCode(m(n));return t}function g(n){return function(){try{return n.apply(this,arguments)}catch(n){k(n)}}}function k(n){if(r)throw Error(n)}this.execute=g(function(n,r){var t,u;return 82!==n[0]&&88!==n[1]?k("e1"):(n=n,t=3,(u=c(0)).t[0]=(r=r)||{},u.h=t,w(r={p:n,v:0,o:[u],u:u,_:[],l:[],g:0},0),f(t=r),t)})}})("undefined"==typeof window?global:window);
(n=>{for(var t="undefined"==typeof window?n:window,i=0,n="addEventListener",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),u=[],r=t.rx||{},o=r.c||{},f=o.rxp||"/rd/uedata",c=o.fi||1e3,a=1.5,d=1e4,x={},w={},m={},v={},h=0,l=0;l<e.length;l++)u[e[l]]=l;function p(n,r){return function(){try{return n.apply(this,arguments)}catch(n){s(n.message||n,n)}}}function s(n,r){if(m[i]=[(n=(""+(n||"")).substring(0,100)).length].concat((new TextEncoder).encode(n)),o.DEBUG)throw r||n;b()}function y(n,r){r=p(r),n in w||(w[n]=[]),w[n].push(r),n in x&&r()}function g(n,r){n in x||(x[n]=r,(w[n]||[]).forEach(function(n){n(r)}))}function A(n){for(var r=0,t=0,i="",o=0;o<n.length;o+=1)for(t+=8,r=r<<8|n[o];6<=t;)i+=e[r>>t-6],r&=255>>8-(t-=6);return 0<t&&(i+=e[r<<6-t]),i}function U(n){for(var r=0,t=0,i=[],o=0;o<n.length&&"="!==n[o];o+=1)for(t+=6,r=r<<6|u[n[o]];8<=t;)i.push(r>>t-8),r&=255>>8-(t-=8);return new Uint8Array(i)}function b(){!h&&0<c&&(setTimeout(p(I),c),c=Math.min(d,c*a),h=1)}function E(r){let t=[];return Object.keys(r).forEach(n=>{t.push(parseInt(n)),t=t.concat(r[n])}),t}function I(){h=0;var n=E(m);0<n.length&&rx.ep(n,T),m={}}function T(n){n=A(new Uint8Array(n));n=f+"?rid="+rx.rid+"&sid="+rx.sid+"&rx="+n;(new Image).src=n}function j(n){g("load",n)}function L(n){j(n),g("unload",n),I()}(t.rx=r).err=s,r.r=p(y),r.e=p(g),r.exec=p,r.p=p(function(n,r){g("rxm:"+n,r),m[255&n]=r,b()}),r.pc=p(function(n,r){v[255&n]=r,n=E(v),r=rx.ep4(n,rx.fnpb),n=A([rx.fnpv].concat(rx.fnpb,r)),document.cookie="rxc="+n+"; max-age=86400; path=/"}),r.ex64=p(function(r,n){y(n||"init",function(){var n;t.RXVM&&(n=U(r),t.$RX||(t.$RX=new t.RXVM),$RX.execute(n,t))})}),r.e64=p(A),r.d64=p(U),r.erc4=p(function(){var n=rx.fnpb,r=rx.fnpv,t=rx.ep4(E(m),n);return A(new Uint8Array([r].concat(n,t)))}),g("init",{}),"complete"===document.readyState?j({}):n in t&&(t[n]("load",p(j)),t[n]("beforeunload",p(L)),t[n]("pagehide",p(L)))})(window);
rx.ex64("UlgBKT4nV10haERRTSFMSFBJIUFKS0AgU0RJUEAjSUBLQlFNIVFNQEsvSktGSkhVSUBRQC1GRElJR0RGTidCUSBDSUpKVyFhRFFAJktKUi9wTEtRHWRXV0RcJlZAUS5wTEtRFhdkV1dEXCNHUENDQFcjVlBHUUlAIkBLRldcVVEhS0RIQCJkYHYIZmdmI0FMQkBWUSJ2bWQIFxATIGFgZ3BiIUBdQEYmV0xBJlZMQSQkFSglBSUkJ7gzFSkkRgUkJCa4FSkjRldcVVFKBSUVKS1IVmZXXFVRSgUlZCIBJa6EsbWJjtHg/fHA6+bq4eD3pIWGtYmD4Ovm6uHghLSEpYSohGQtoiUFLy8sP8HTmNsjHw8pDi8rLy0oLSo0LhweIyweIy8PLj+f3fPfJ7YOKg4sLywvFM/RLyy2HiMrDi8OLC8strU/Pg4sDiwcHiMsHiMvDy4/xbqBgSYOLC8sLy8strU/Iw4sDiwcHiMsHiMvDy4/m/LkuyIOLC8sLy8strU/Pg4sDiwDtT8uDixkLD4lETk7PgoaOBo7PgoaORo7GjgaOz4aPho5GjsWZC+bJXJbWFpNWF1NWFxIWVhfSFlYXkhZWFFIWWX5SNlbeVFIWV15UXlReVpYUclIWHlRY7+mWFFIWWX5SNlbeVF3WVhczEjZW8lpzGlUXHlbeVF5W8lpeVF5WnlcanhQWnlceVF5WlhRyUhYeVFjkKZceVhQX1BTHFlYXsxI2VvJSFh5XlhfzEjZW8lpeV55WnlfanhQWnlfeV55WmhpVV0pLCoxeV3BacxI2VvJaXlfeVppeV55WnlaeVNj76Z0eV1kLmIlt56gO7ydkZqRnK2skZq8nbyesZ2ms5ygO7ydkZu7nJi8npGUvJ3cj5xsd3ZLTmZGdkpANCM1MyoyZkZql5iukZu8nbG8nbBkKbElQ2pU9fZJbPZJbmloRFhYZWRYZWNJaHt5gG9pY1lYZWJYZWlJaFp1aVhlYVhlaEloaWtpXVhlZUlo+FhlbUhpeWxpbGldWGVnSWh9aUhra1hleGljXVhlZUloWmNZWGVmSGxaWlhlZkhseWxIaVtYZXpYZXlJa2tIbElsf2556GllbUluZGoBHmV8ZXtjWkljSGpaRGQoXCWqg4CDHKCEoYO9H6GDgIGtsbGMjbGMiqCBkpBphoCKsLGMi7GMgKCBs5yAsYyIsYyBoIGAgoC0sYyMoIERsYyEoYCQhYCFgLSxjI6ggZSAoYKCsYyRgIq0sYyMoIGzirCxjI+hhbOzsYyPoYWQhaGAs6CLoYOhhayAZCsiJFR9Tl54X35+fn5OXnhffX59fk1PcmpPcm5efF9+cml0PxZ/iaOXkq+vg6KCo6Cno5GSrqvLz9LN0Nbpx9uSr7ODoae3oK6lxsfB0NvS1q+wrbWmsyKjr6evtq+xgqOuodDD1aniv6JMZmVjR2ZbV2pwRmVrZ2NGY2tiODgCFQxGZkpGY6mQg6mQkI+jdE1edE1Nfnx+TU9yak9ybl58X31yaXQ/VH8MJhUXKyJUS05EQgcmNjc2JyUhJhsXKjAGJSsnIwYhKyJ4eEJVTgYmCgYhdE1edE1Nfnt+Q09yaF59W39OT3N8HhMTT3N4Lw0QEhYMGl5/an1fe198dHtNc3sgIBoNXn5TFBUoPQUkBSkuIRcpJ0BVBSQUFSg9BSQFKC4hFykmQFURBSQUFSg9BSQFLy4hFyknQBEFJBQVKD0FJAUtLiEXKSRNBSQZuRUoPwUkFSg8BSQxJRQVKD0FJAUrFyQVKD8FJBUoPAUk","load");
rx.ex64("UlgBKSInV10hQUpLQCBTRElQQCNJQEtCUU0mVUpSIENJSkpXIFdKUEtBJCQVKSFAXUBGFSglBSUkJxUpIWhEUU0FJSQmFSkja1BIR0BXBSVkITklUnh4e2h5fFl4en96fXN5eHvpWX1Ze0OIhlRZe2QgNSWymKi4nbmYiqmUmrmYmLSYZCNnJQUvHw8rDi8vLC8vLT8uKw4vKigqKzkuHB4jKg8sPyy/DiwOKz4vDi0vLS8UytEfHiIqXV9cWg8svR4jLQ4vDi0DL2QiayVfdXV2RHl3VHVFVXFUdXV3dUVVclR1dXB1RUR5cVV2VHZiZYuLd3V/RUR5cVV2VHdiZYuLd3V/RUR5cVV2VHBiZYuLd3V/d2F3RkZGWXVkLWUlbEZ2ZkBnRkZFRmpSQdFWuEZ3VkVnRd1WT3dWRWdF0Va4RndWRmdF3VZPd1ZGZ0XRVrhGd1ZHZ0XdVk93VkdnRWQs1SWgirq7h4Pi+M3i5eL/7qqIq4qVipaKLYeN5f7m6e75v6uKgLq7h47i+MXqxaqIq4qAlrm5t4qDi6aeiZp3ipqLiomai7crmourioaLiomaCwuJiooaq4qai7cvmourioyLpp6Jmouai7q7h4/n5Oy5qomrioC6u4aOqom5ioiKubuGj6qJq4iaiZiKq4qamoqKmZoLg4qAuruGjaqJuYqPioqIG5qEq4i3KZqLq4iui7m7ho+qiZl5dHR0momYiquKmZoLg4qAuruGjaqJuYqPioqImouKjhyrjxwSmoGriKuJpp6JEZqDq44dmnSKq45kL6glqoCAgxaxkIGhgBiQibGQgKGAgIKQgL0XkAEBg6GDhoGAgpN+fn5+gIUXkJ4bkIuhg4CEF5B+hqGDvSWQnqGFiIGssY2Cz+DPoIK9JZCBoYWcgbOxjIWgg5Nzfn5+kIOTgBMSkAGJoYShgqyAu5yBs7GMhaCDEJCOoYWQg5OAExESkAGJoYSQgKGCrICtFAUkBSIuIRcpJ1ZEFSglBSUUBSQFLS4hFykmVkRHFSglBSUUBSQFLC4hFykhQEMUExUoJQUlFAUkBS8uIRcpIUFDFBMVKCUFJRQFJAUhLiEXKSFEVlBIFSglBSUUBSQFIC4hFykhRERTQhUoJQUlFAUkBSMuIRcpIURWUUEVKCUFJQ==","load");
rx.ex64("UlgBKS8sUkBHQVdMU0BXI2pHT0BGUSFOQFxWIkxLQUBdakMhQUpLQCBTRElQQCBkV1dEXCN2XEhHSkkgdVdKXVwnV10kJDQ1JCc0JCQmuDMVKSxLRFNMQkRRSlcFJSQhuDMVKS1BSkZQSEBLUQUlZCA2JbK1BgaolJLo9Pnh7+rx//DsuZhkIyglGh2tlxEwPTAAPTARM2QiCiVrcHFMQ3FMQGBBYEFEQEBHQENYQXBxTEJhQ01FIiUiHmVQQUB9QENBbE97o75sTmQtuyVeRUR5dkR5dVV0VXRxdXVydXb8dEVEeXdUdnhyKzUGBhUNVWV0dWh10nlyVHZo0ER5clV0RFR2VXR1SHV2dFl6RUR5d1R2eHMrJw0ZFhsYVWV0dWh10nlzVHZo0ER5c1V0RFR2VXR1SHV2dFl6RUR5d1R2eHIrJAYbDA1VZXR1aHXSeXxUdmjQRHl8VXREVHZVdHVIdXZ0WXpOB4tZe2QsBSW9ugowtpebnPT2+/vH//b54/j6MLaXm5/I5//2+eP4+mQv5iUWDQwwMV9OWV1IWXlQWVFZUkgdODA6X11SSl1PPT09DQwwNltZSH9TUkhZREgcPTA5S1leW1A9Pj0Aohw+PjwRMg0MMDBbWUh5REhZUk9VU1IcPjAla3l+e3BjWFleSVtjTllSWFlOWU5jVVJaUz8MMCtpcnF9b3d5eGNueXJ4eW55bmNreX57cD03DQwwMFtZSGxdTl1RWUhZThw+Dj0/PQCYNhw/PjwRMg0MMT8cPzA3b0tVWkhvVF1YWU4dLTw9ET1kLgYlrqkgtIiP7erq4fbM4e3j7PClhLSIj+vx8OH2zOHt4+zwpYRkKQ4lBgGIHCAmRUJCSV57RUhYRA0sHCAnT0BFSUJYe0VIWESxOhwgKE5DSFUNKCQoMC0FKQUuBS8FLAUtBSIFIwUgZCt5JUVubn5vbm1+b2pOYmxpbGtYb15fY2sKFwoMX2JmTm9Pa19ubmpuU8tlT2psb25qYVNPamVvbm749k9tfm5Pbm5t/35uT21Vq5BdX2NuH19iZk5vem1Pbk5tTm5DFxUpJFcVKCwFJQUrKSFJSkRB","load");
rx.ex64("UlgBKS8mVlVBNURBQWBTQEtRaUxWUUBLQFcsSEpQVkBBSlJLIkhKUFZAUFUhQF1ARjZXQEhKU0BgU0BLUWlMVlFAS0BXLFFMSEB2UURIVS5VQFdDSldIREtGQCZLSlIkVyQkNAUkJzQqJCYyISspIkZEVVFQV0ArKSJVRFZWTFNAJCE0zSIkILgzFSktQUpGUEhAS1EFJSQjFSkhaERRTQUlJCIVKSdXXQUlJC0VKS5WQFFsS1FAV1NESQUlJCwVKShGSUBEV2xLUUBXU0RJBSUkLyskLiokKjQlJDQxZDcBJaK0FRapgxapgomIpIqDh7m4hIr76amPqZmDuriFiKmPuqmJpGQ2EyUbAgE8MBA0MhAyED08MwIBPDAQNDIQMhA8PDINATwxEDYjMQABPDUQNhAjOgMQORA1AzM/MB1kMQElQWlhZFhbZm5KbmhKaEpnZmlYW2ZuSm5oSmhKZmZoWkpiSmVHZDAAJbmvDbKZkpO/kZmcoqOfkODy8bKUsoKSkpKho5+S47KUs5Kykr9kMzMlFjwNDTA1DTA6HD0gPA0wOx08Py08EWQyYSV8VmdnWl9nWlB2V0pWZ1pRd1ZWVVZWVMZ2R3dVVVjHRlZ2WFVcWWZnW1MnIiQ/dkZ3VGv2dlV2WF5XZ3ZCZ3ZFZ3ZDexQVKCEFIgUzJCkkFBUoIQUiBTIkKCQXFSgsBSIFNikhSUpEQRcVKCwFIgUwKSNQS0lKREE=","load");
rx.ex64("UlgBKS8mVlVBJ1ZEI0ZKS0ZEUSxISlBWQEhKU0AhQF1ARiZWREchRkBMSSFVUFZNJkRHViRXJCQ0BCQnNO0kJCY02iQkITIhKykiRkRVUVBXQCspIlVEVlZMU0AkIDTNIiQjuDMVKS1BSkZQSEBLUQUlJCIVKSFoRFFNBSUkLRUpJ1ddBSUkLBUpLlZAUWxLUUBXU0RJBSUkLxUpKEZJQERXbEtRQFdTREkFJSQoKyQrKiQ2NCUkMTEkMDFkMxYlTFr7+Edo+EdrZ2ZKZGhpV1ZrZ0duR3NtV1ZrZ0duR3JlVmtkZ1dnVG1UVmtmR25UR2dKZDIcJbeurZGN/Pn52Ov48+nR9O7p+PP477ybnryZvJaQnqGtkJ28lY+drK2QmbyVvIuWr7yUvJivn5GcsWQ9DyVxWVZUaGtXSCk+NjQtPh4tPjUvFzIoLz41Pil6XVh6X3pQVlhqelF6V3dkPBAlo7UXqISIiaWLhIa4uYSMqIGonYiIiLi5hIyogaicgri5hIupiLuIiIi7uYWI+aiBqYioiKVkP3okaEJzc09ALSw0c09IMyYxJSwxLiItICZiQ15Cc09KNyouJhA3Ii4zY0JCQUJCQN5SQ3NPRjMiJCYbY0JCR95SQ3NPRjMiJCYaY0J/3+diUmNH52JTY0BCQ29/39xiQdJiTGNBYkxPQ0FMSUFTSUFSSUFRSX/lSWJMN0Nxc09GIjciLXFiRNJiU2NA0mJSY0dCRkJyc09HMDIxN2JE09dSQdJjQGJT11JB0mNHYlJIcnNORWJEcUJFQn/e52JMY0HnUkNjRUhDcnNORGJXUkN5XkNyc05FYkTRUqtE0NJiTGNBY0VCREJyc05EYldjRH/lSWJRfUNyc05LYkTSYlFjRlJC0XNPQRMKYkRSQUhyc05LYkTSYlFjRkhxc09ALiotYkRxcUJLQnJzTkRiVtFSq0RjS0FQ01JCYlBBTGNBQVNjQEFSY0dBUWNGQU1Nf9xiQGJQSkNzYlpzYlVzYltvFBUoIQUtBT8kLiQXFSgsBS0FMikhSUpEQRcVKCwFLQU8KSNQS0lKREE=","load");
rx.ex64("UlgBKSAnV10mVlVBI1ZGV0pJSSFAXUBGJFckJDQHJCc07SQkJjTaJCQhMiErKSJGRFVRUFdAKykiVURWVkxTQCQgNM0iJCMVKSFoRFFNBSUkIhUoJQUlJC0VKS5WQFFsS1FAV1NESQUlJCwVKShGSUBEV2xLUUBXU0RJBSUkLyskKCokNDQlJDcxZDYCJR4IqaoVOaoVPjU0GDY5OwUEODZHVQQ5NBU0FSY/BgQ5NRUzBhU1GGQxHCV1bG9TTz47OxopOjErEzYsKzoxOi1+X1x+W35UUl1jb1JeflhNX25vUlx+WH5MVG1+V35abV1TXnNkMA8ltp6Wk6+skI/u+fHz6vnZ6vny6ND17+j58vnuvZyfvZi9l5Gerb2VvZCwZDMOJWF31WpBSktnSUFEentHSDgqKXtGS2pLallKSkp5e0dKO3tGS2pLa0pqSmdkMpAlUXtKSnZ5FBUNSnZxCh8IHBUIFxsUGR9bemd7SnZzDhMXHykOGxcKWnt7eHt7eedrekp2fQkZCBUWFiNbekbm5Vt461t0WnhbdHN6eHRweHVweGpwRtxwW3RMektKdnkbGAlbfOtbdVp5e357S0p2fhkfExZbfOhrkn3p61t0Wnhafnt/e0tKdn4KDwkSW2haf3hr6mt7W2t4dFp4eHVaeXh3dEblW3lba3N6SltsSltpSltvVhQVKCYVKCUFJQUyJC4kFxUoIRUoJQUlBTEpIUlKREEXFSghFSglBSUFMykjUEtJSkRB","load");
rx.ex64("UlgBKSghaERRTTZXQEhKU0BgU0BLUWlMVlFAS0BXLEhKUFZASEpTQCBGSUxGTiNWRldKSUkmUURCJ1ddIEZKUEtRIkZJTEBLUX0iRklMQEtRfCJWRldKSUl8IUBdQEY1REFBYFNAS1FpTFZRQEtAVyQkuDMVKS1BSkZQSEBLUQUlJCe4MxUpJ1BABSUkJhUpJlBAXQUlJCEVKSFWVFdRFSglBSUkIBUpJlVKUhUoJQUlJCMVKSZER1YVKCUFJSQiMiErKSJVRFZWTFNAKykiRkRVUVBXQCQtNEEkLDRBJC8uJC4uJCkuJCguJCsuJCouJDU0JSQ0NCVkNwwliJGSr6ODoqGDpYOor6CRkq+jg6Khg6WDqa+hkZKvo4OioYOlg66vpo5kNkAlemxgXVVxUmVQYWBdVXFSXEY4MSN9IyQiPz43fTk+JDUiMTMkOT8+bMxxU2BcUzkjPHFSWVBicVNdVlxSMSRsYF1XcVJLUGJgXVdxUkFRXEEDJCI/PjcZPiQ1IjEzJDk/PmBxQnxkMT8lETsGpqUrOgo3Mxo7pSs6CjcyGjs5OgobKRZkMHMlc1lkxP5TeVb+U3lVdlhqeV1JWsl5VWhVUHhZU2p5XUlayXlWaFVReFlTSGpqU2l5XGpZWllaSch4WnlJZPl5UHlJW1hoeUtaVWhVUHhZWlZoVVF4WXRkMwslGDIPlTgSPCEzAhI1ohI8Az45EjMjMhIjMSMyD5ISOhIjMDMDEiAxPAM+ORIzH2QydiVPVFVoblVoY0RlRHBnb2RUVWhuVWhjRGVEcWduZFRVaG5VaGNEZURzZ2lkVlVoaURlZkRiRG9oZ1ZVaGlEZWZEYkRuaGZWVWhpRGVmRGJEaWhhSRcVKSRXFSgjBSUFMikhSUpEQQ==","load");
rx.ex64("UlgBKScmUURCJ1ddJCS4MxUpLUFKRlBIQEtRBSUkJ7gzFSknUEAFJSQmFSkmUEBdBSVkIWolcFpua1ddCT48HiMrelvLV1NmcwAFYAZwcst7WldecwUne3JQamtXXjY6Lzgza1ddODQ0MDI+elppWllaa2tXXy8pMjZrSll7WUdae1l2WmQgGiUELhMfIi8OLRsvHh8iLw4tvw8uIz1dVwJHRkhHSlxbAk5MW0ZAQRUTsw4sHyMsRlxDDi0mLx0OLCIuIy1OWwNkI3clWENTdn9zc3NzQ0J+dwECHhsGUnN+czJxQmNzc25zUnNzcHNOUnBbckNCfnYTBh0QU3JScHNxc0NCfngRGhMAMR0WFzMGUnFjcnN2c0NTd1J2XhcVKSRXFSgkBSUFIykhSUpEQQ==","load");
/* ◬ */


window.ue && ue.count && ue.count('CSMLibrarySize', 80945)

