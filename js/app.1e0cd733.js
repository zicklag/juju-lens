!function(e){function t(t){for(var n,r,i=t[0],c=t[1],s=t[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&m.push(l[r][0]),l[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);m.length;)m.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,r=1;r<o.length;r++){var c=o[r];0!==l[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={1:0},l={1:0},a=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{2:1,3:1,4:1}[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{2:"63363fff",3:"3001a30c",4:"ede8160e",5:"31d6cfe0",6:"31d6cfe0"}[e]+".css",l=i.p+n,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=(d=a[c]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===n||s===l))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){var d;if((s=(d=u[c]).getAttribute("data-href"))===n||s===l)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||l,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete r[e],m.parentNode.removeChild(m),o(a)},m.href=l,document.getElementsByTagName("head")[0].appendChild(m)})).then((function(){r[e]=0})));var o=l[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=l[e]=[t,n]}));t.push(o[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"js/"+({}[e]||e)+"."+{2:"a5be6c7e",3:"b02483ce",4:"b5a459b1",5:"6848f7a1",6:"baf59b90"}[e]+".js"}(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var o=l[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",s.name="ChunkLoadError",s.type=n,s.request=r,o[1](s)}l[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=s;a.push([0,0]),o()}({0:function(e,t,o){e.exports=o("2f39")},"2f39":function(e,t,o){"use strict";o.r(t);o("5319");var n=o("c973"),r=o.n(n),l=(o("573e"),o("7d6e"),o("e54f"),o("62f2"),o("7e6d"),o("2b0e")),a=o("1f91"),i=o("42d2"),c=o("b05d"),s=o("436b"),u=o("18d6"),d=o("2a19");l.a.use(c.a,{config:{dark:"auto",notify:{position:"top-right"}},lang:a.a,iconSet:i.a,plugins:{Dialog:s.a,LocalStorage:u.a,Notify:d.a}});var m=o("60a3"),f=o("b2da"),p=o("4bb5"),g=function(e,t,o,n){var r,l=arguments.length,a=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(l<3?r(a):l>3?r(t,o,a):r(t,o))||a);return l>3&&a&&Object.defineProperty(t,o,a),a},h=function(e,t,o,n){return new(o||(o=Promise))((function(r,l){function a(e){try{c(n.next(e))}catch(e){l(e)}}function i(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,i)}c((n=n.apply(e,t||[])).next())}))};const b=Object(p.a)("juju");let v=class App extends m.c{created(){return h(this,void 0,void 0,(function*(){const e=this.$q.localStorage.getItem("darkMode");null==e||"boolean"!=typeof e&&"auto"!=e||this.$q.dark.set(e),yield this.loadControllers()}))}};g([b.Action(f.a.loadControllers)],v.prototype,"loadControllers",void 0),v=g([m.a],v);var w=v,C=o("2877"),y=Object(C.a)(w,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)}),[],!1,null,null,null).exports,j=o("4bde"),W=o("2f62"),O=o("b444"),x=o("6260");var F={},k=o("f319");var S={namespaced:!0,actions:x.b,getters:F,mutations:k.a,state:O.b},P=o("fb60"),D=o("aaf8");function I(e,t){const o={};for(const n in t){const r=t[n];for(const t in r[e]){const n=r[e][t];o[t]=n}}return o}function A(e){return"All"!=e.currentController?e.controllers[e.currentController]:{models:I("models",e.controllers),units:I("units",e.controllers),applications:I("applications",e.controllers),charms:I("charms",e.controllers),machines:I("machines",e.controllers)}}var q={["currentControllerData"]:e=>A(e),["currentControllerModelsFilled"](e){const t=A(e),o=[];for(const n in t.models){let r="";for(const t in e.controllers){const o=e.controllers[t];0!=Object.keys(o.models).filter(e=>e==n).length&&(r=t)}o.push(Object(D.a)(r,t,n))}return o}},z=o("cf2e");var T={namespaced:!0,actions:f.b,getters:q,mutations:z.a,state:P.b},E=Object(j.store)((function({Vue:e}){e.use(W.a);return new W.a.Store({modules:{app:S,juju:T},strict:!1})})),_=o("8c4f");const L=[{path:"/",component:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"713b")),children:[{path:"",name:"home",redirect:"/models"},{path:"/controllers",component:()=>Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"a7d4")),children:[{path:"",name:"controllers"},{path:"cloud-credentials",name:"cloud-credentials"}]},{path:"/models",component:()=>Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"56c6")),children:[{path:"",name:"models"},{path:"machines",name:"machines"}]},{path:"/welcome",name:"welcome",component:()=>Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"35a8"))}]}];L.push({path:"*",component:()=>Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"e51e"))});var M=L;var V=Object(j.route)((function({Vue:e}){e.use(_.a);const t=new _.a({scrollBehavior:()=>({x:0,y:0}),routes:M,mode:"hash",base:""});return t.beforeEach((e,t,o)=>{if(u.a.getItem("seen-juju-lens-before")||"welcome"==e.name)o();else{o({name:"welcome",query:Object.assign({welcomePageTo:e.fullPath},e.query)});try{u.a.set("seen-juju-lens-before","true")}catch(e){console.error(e)}}}),t})),$=function(){return N.apply(this,arguments)};function N(){return(N=r()((function*(){const e="function"==typeof E?yield E({Vue:l.a}):E,t="function"==typeof V?yield V({Vue:l.a,store:e}):V;e.$router=t;const o={router:t,store:e,render:e=>e(y),el:"#q-app"};return{app:o,store:e,router:t}}))).apply(this,arguments)}var H=o("bc3a"),U=o.n(H),B=Object(j.boot)(({Vue:e})=>{e.prototype.$axios=U.a});function J(){return(J=r()((function*(){const{app:e,store:t,router:o}=yield $();let n=!1;const r=e=>{n=!0;const t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),i=[B];for(let c=0;!1===n&&c<i.length;c++)if("function"==typeof i[c])try{yield i[c]({app:e,router:o,store:t,Vue:l.a,ssrContext:null,redirect:r,urlPath:a,publicPath:""})}catch(e){return e&&e.url?void(window.location.href=e.url):void console.error("[Quasar] boot error:",e)}!0!==n&&new l.a(e)}))).apply(this,arguments)}!function(){J.apply(this,arguments)}()},6260:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o("2b0e"),r=o("b444"),l=o("f319"),a=o("1732");const i={addFloatingWindow:"addFloatingWindow",removeFloatingWindow:"removeFloatingWindow"},c={[i.addFloatingWindow](e,{unit:t,app:o,kind:i}){const c=Object(a.a)(),s={id:c,unit:t,app:o,visible:!1,maximized:!1,zIndex:0,kind:r.a[i]};return e.commit(l.b.addFloatingWindow,s),n.a.nextTick(()=>{e.commit(l.b.toggleFloatingWindowVisible,s.id)}),c},[i.removeFloatingWindow](e,t){e.commit(l.b.hideFloatingWindow,t),n.a.nextTick(()=>{setTimeout(()=>{e.commit(l.b.removeFloatingWindow,t)},400)})}};t.b=c},"7e6d":function(e,t,o){},aaf8:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return p}));var n=o("fb60");function r(e,t,o){return e+"/"+t+(o?"/"+o:"")}const l={icon:"fas fa-check-circle",color:"var(--q-color-positive)"},a={icon:"fas fa-exclamation-triangle",color:"var(--q-color-warning)"},i={icon:"fas fa-exclamation-circle",color:"var(--q-color-negative)"},c={icon:"fas fa-circle",color:"var(--q-color-positive)"},s={icon:"fas fa-circle",color:"var(--q-color-warning)"},u={icon:"fas fa-circle",color:"var(--q-color-negative)"};function d(e,t){const o=n.a[e];return o>=n.a.blocked?t?u:i:o>=n.a.maintenance?t?s:a:t?c:l}function m(e,t){return Object.assign({statusIcon:d(e["workload-status"].current,!0),charmIconUrl:t},e)}function f(e,t){const o=e.applications[t];let r=[],l=o["charm-url"].replace("cs:","https://jaas.ai/");l=l.replace("~","u/"),l=l.replace("-","/");const a=o["charm-url"].replace("cs:","https://api.jujucharms.com/charmstore/v5/")+"/icon.svg";for(const t in e.units){const l=e.units[t];l.name.startsWith(o.name)&&l["model-uuid"]==o["model-uuid"]&&r.push(m(l,a)),r=r.sort((e,t)=>n.a[t["workload-status"].current]-n.a[e["workload-status"].current])}const i=r.map(e=>e["workload-status"].current)[0];return Object.assign({charmIconUrl:a,charmStoreUrl:l,units:r,statusIcon:d(i),statusSeverity:i||"active"},o)}function p(e,t,o){const r=t.models[o];let l=[];for(const e in t.applications){t.applications[e]["model-uuid"]==r["model-uuid"]&&l.push(f(t,e)),l=l.sort((e,t)=>n.a[t.statusSeverity]-n.a[e.statusSeverity])}const a=l.map(e=>e.statusSeverity)[0],i=l.map(e=>e.units).reduce((e,t)=>e.concat(t),[]),c=[];for(const e in t.machines){const o=t.machines[e];o["model-uuid"]==r["model-uuid"]&&c.push(Object.assign({units:i.filter(e=>e["machine-id"]==o.id)},o))}return Object.assign({statusSeverity:a||"active",statusIcon:d(a),applications:l,controller:e,machines:c},r)}},b2da:function(e,t,o){"use strict";o.d(t,"a",(function(){return h}));var n=o("436b"),r=o("2a19"),l=o("cf2e"),a=o("18d6"),i=o("3b3d"),c=o.n(i),s=o("9927"),u=o.n(s),d=o("24f0"),m=o.n(d),f=o("784d"),p=o.n(f),g=o("aaf8");const h={loadControllers:"loadControllers",setCurrentController:"setCurrentController",updateController:"updateController",deleteController:"deleteController",establishControllerConn:"establishControllerConn",commitControllerDelta:"commitControllerDelta",logout:"logout"};function b(e){const t={};for(const o in e.controllers)t[o]={applications:{},charms:{},machines:{},models:{},units:{},username:e.controllers[o].username,password:e.controllers[o].password,host:e.controllers[o].host,port:e.controllers[o].port};const o={currentController:e.currentController,controllers:t};a.a.set("jujuState",o)}const v={[h.setCurrentController](e,t){e.commit(l.b.setCurrentController,t),b(e.state)},[h.loadControllers](e){const t=a.a.getItem("jujuState");if(t){e.commit(l.b.setCurrentController,t.currentController);for(const o in t.controllers)e.dispatch(h.updateController,{name:o,controller:t.controllers[o]})}},[h.updateController](e,{name:t,controller:o}){const n=e.state.controllers[t];n&&n.controllerWatchHandle&&n.controllerWatchHandle.stop(e=>{e&&console.error(e)}),e.commit(l.b.updateController,{name:t,controller:o}),b(e.state),o.conn||o.controllerWatchHandle||e.dispatch(h.establishControllerConn,t)},[h.establishControllerConn](e,t){const o=e.state.controllers[t];if(!o)return;const n={debug:!1,facades:[u.a,m.a],wsclass:WebSocket};c.a.connectAndLogin(`wss://${o.host}:${o.port}/api`,{user:"user-"+o.username,password:o.password},n,(n,r)=>{if(n)return console.error(n),void setTimeout(()=>{e.dispatch(h.establishControllerConn,t)},1e3);const a=r.conn.facades.controller,i=a.watch((o,n)=>{if(o)console.error(o);else for(const o of n.deltas)e.dispatch(h.commitControllerDelta,{name:t,controllerName:t,data:o})});o.conn=a,o.controllerWatchHandle=i,e.commit(l.b.updateController,{name:t,controller:o})})},[h.commitControllerDelta](e,{name:t,controllerName:o,data:[n,r,a]}){if("model"==n){const i=a,s=Object(g.b)(o,i["model-uuid"]),u=e.state.controllers[o];if(!u.models[s]||u.models[s]&&!u.models[s].conn){const s={debug:!1,facades:[p.a],wsclass:WebSocket};c.a.connectAndLogin(`wss://${u.host}:${u.port}/model/${i["model-uuid"]}/api`,{user:"user-"+u.username,password:u.password},s,(c,s)=>{if(c)return console.error(c),void setTimeout(()=>{e.dispatch(h.commitControllerDelta,{name:t,controllerName:o,data:[n,r,a]})},1e3);i.conn=s,e.commit(l.b.commitControllerDelta,{name:t,data:[n,r,a]})})}}e.commit(l.b.commitControllerDelta,{name:t,data:[n,r,a]})},[h.deleteController](e,t){const o=e.state.controllers[t];o&&o.conn&&o.controllerWatchHandle&&o.controllerWatchHandle.stop(e=>{e&&console.error(e)}),e.commit(l.b.deleteController,t),b(e.state)},[h.logout](e){n.a.create({title:"Logout",message:"Are you sure you want to logout of all controllers? You will have to add them manually again to re-connect.",cancel:!0,ok:{color:"negative",label:"Logout"}}).onOk(()=>{e.commit(l.b.clearState),b(e.state),r.a.create({type:"positive",message:"Succesfully logged you out",icon:"logout",position:"bottom-right",timeout:2e3})})}};t.b=v},b444:function(e,t,o){"use strict";var n;o.d(t,"a",(function(){return n})),function(e){e[e.log=0]="log",e[e.terminal=1]="terminal"}(n||(n={}));t.b={debugWindow:{visible:!1,maximized:!1},floatingWindows:[]}},cf2e:function(e,t,o){"use strict";o.d(t,"b",(function(){return l}));var n=o("2b0e"),r=o("aaf8");const l={setCurrentController:"setCurrentController",setControllers:"setControllers",updateController:"updateController",deleteController:"deleteController",commitControllerDelta:"commitControllerDelta",clearState:"clearState"},a={[l.setCurrentController](e,t){e.currentController=t},[l.setControllers](e,t){e.controllers=t},[l.updateController](e,{name:t,controller:o}){n.a.set(e.controllers,t,o)},[l.deleteController](e,t){n.a.delete(e.controllers,t),e.currentController==t&&(e.currentController="All")},[l.commitControllerDelta](e,{name:t,data:[o,l,a]}){if("model"==o){const o=a,i=Object(r.b)(t,o["model-uuid"]);"change"==l?n.a.set(e.controllers[t].models,i,Object.assign(Object.assign({},o),{lensId:i})):"remove"==l&&n.a.delete(e.controllers[t].models,i)}else if("application"==o){const o=a,i=Object(r.b)(t,o["model-uuid"],o.name);"change"==l?n.a.set(e.controllers[t].applications,i,Object.assign(Object.assign({},o),{lensId:i})):"remove"==l&&n.a.delete(e.controllers[t].applications,i)}else if("unit"==o){const o=a,i=Object(r.b)(t,o["model-uuid"],o.name);"change"==l?n.a.set(e.controllers[t].units,i,Object.assign(Object.assign({},o),{lensId:i})):"remove"==l&&n.a.delete(e.controllers[t].units,i)}else if("machine"==o){const o=a,i=Object(r.b)(t,o["model-uuid"],o.id);"change"==l?n.a.set(e.controllers[t].machines,i,Object.assign(Object.assign({},o),{lensId:i})):"remove"==l&&n.a.delete(e.controllers[t].machines,i)}else if("charm"==o){const o=a,i=Object(r.b)(t,o["model-uuid"],o["charm-url"]);"change"==l?n.a.set(e.controllers[t].charms,i,Object.assign(Object.assign({},o),{lensId:i})):"remove"==l&&n.a.delete(e.controllers[t].charms,i)}else console.warn("Unidentified resource type from Juju controller changefeed: "+o)},[l.clearState](e){e.controllers={},e.currentController="All"}};t.a=a},f319:function(e,t,o){"use strict";o.d(t,"b",(function(){return n}));const n={addFloatingWindow:"addFloatingWindow",toggleFloatingWindowMaximized:"toggleFloatingWindowMaximized",toggleFloatingWindowVisible:"toggleFloatingWindowVisible",hideFloatingWindow:"hideFloatingWindow",focusFloatingWindow:"focusFloatingWindow",removeFloatingWindow:"removeFloatingWindow"};function r(e,t){e.floatingWindows.map(e=>{e.id==t?e.zIndex=1:e.zIndex=0})}const l={toggleDebugWindow(e){e.debugWindow.visible=!e.debugWindow.visible},toggleDebugWindowMaximized(e){e.debugWindow.maximized=!e.debugWindow.maximized},[n.addFloatingWindow](e,t){e.floatingWindows.push(t)},[n.toggleFloatingWindowMaximized](e,t){e.floatingWindows.map(e=>{e.id==t&&(e.maximized=!e.maximized)})},[n.toggleFloatingWindowVisible](e,t){let o=!1;e.floatingWindows.map(e=>{e.id==t&&(e.visible=!e.visible,o=e.visible)}),o&&r(e,t)},[n.hideFloatingWindow](e,t){e.floatingWindows.map(e=>{e.id==t&&(e.visible=!1)})},[n.focusFloatingWindow](e,t){r(e,t)},[n.removeFloatingWindow](e,t){e.floatingWindows=e.floatingWindows.filter(e=>e.id!=t)}};t.a=l},fb60:function(e,t,o){"use strict";var n;o.d(t,"a",(function(){return n})),function(e){e[e.active=0]="active",e[e.started=1]="started",e[e.maintenance=2]="maintenance",e[e.unknown=3]="unknown",e[e.waiting=4]="waiting",e[e.blocked=5]="blocked",e[e.error=6]="error",e[e.terminated=7]="terminated"}(n||(n={}));t.b={currentController:"All",controllers:{}}}});