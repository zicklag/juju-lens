(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"29db":function(t,e,o){},"56c6":function(t,e,o){"use strict";o.r(e);var a=o("b7b1"),i=o("60a3"),s=o("4bb5"),n=o("fb60"),l=o("b444"),r=o("6260"),c=o("0831"),d=o("f303"),u=o("18d6"),p=function(t,e,o,a){var i,s=arguments.length,n=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};const m=Object(s.a)("juju"),f=Object(s.a)("app"),{offset:v}=d.c,{setScrollPosition:h}=c.a;let g=class Index extends i.c{constructor(){super(...arguments),this.loading=!1,this.sortModelsByOptions=["Status","Name"],this.sortModelsBy="Status",this.tab="applications",this.modelsExpanded={},this.activeApplicationId=null,this.pageHeight=0,this.footerVisible=!1,this.footerHeight=50,this.footerTransitioning=!1,this.footerTransitionDuration=300}get activeApplication(){if(this.activeApplicationId)for(const t of this.controllerModels)for(const e of t.applications)if(e.lensId==this.activeApplicationId)return e;return null}get models(){return"Status"==this.sortModelsBy?this.controllerModels.sort((t,e)=>n.a[e.statusSeverity]-n.a[t.statusSeverity]):this.controllerModels.sort((t,e)=>e.name<t.name?1:-1)}created(){const t=u.a.getItem("sortModelsBy");!t||"Status"!=t&&"Name"!=t||(this.sortModelsBy=t),this.scrollToApp()}get activeApplicationUnitsColumns(){return[{name:"name",label:"Unit",field:"name",align:"left",sortable:!0},{name:"actions",label:"Actions",alight:"left",field:t=>t},{name:"agent-status",label:"Workload",field:"agent-status",align:"left",sortable:!0},{name:"status",label:"Status",field:t=>t["workload-status"].current,sort:(t,e)=>n.a[e]-n.a[t],align:"left",sortable:!0},{name:"message",label:"Message",align:"left",field:t=>t["workload-status"].message}]}unitAgentStatusBadgeColor(t){return"idle"==t?"positive":"active"==t?"warning":"negative"}unitStatusSeverityBadgeColor(t){const e=n.a[t];return e==n.a.active?"positive":n.a.active<e&&e<n.a.blocked?"warning":"negative"}onResizeContent({height:t}){this.pageHeight=t}resizeFooter(t){const e=t.delta.y/this.pageHeight*100,o=this.footerHeight-e;o>100?this.footerHeight=100:o<2?(this.footerVisible=!1,this.footerHeight=50):this.footerHeight=o}hideFooter(){this.footerTransitioning=!0,this.footerVisible=!1,setTimeout(()=>this.footerTransitioning=!1,this.footerTransitionDuration)}showFooter(){this.footerTransitioning=!0,this.footerVisible=!0,setTimeout(()=>this.footerTransitioning=!1,this.footerTransitionDuration)}onSortModelsByChange(t){u.a.set("sortModelsBy",t)}scrollToElement(t){const e=this.$refs.modelScrollArea,o=e.getScrollTarget(),a=e.getScrollPosition(),i=v(t).top;h(o,a+i-122,100)}scrollToApp(){const t=this.$route.query.unitId;if(!t)return;let e=null,o=!1;for(const a of this.models){if(1==o)break;for(const i of a.applications){if(1==o)break;for(const a of i.units)if(a.lensId==t){e=i,o=!0;break}}}e&&(this.$set(this.modelsExpanded,e["model-uuid"],!0),console.log("Get ready for it"),setTimeout(function t(){if(!e)return;console.log("looking");const o=document.getElementById("application-"+e.lensId);o?(console.log("Scrolling"),this.scrollToElement(o)):(console.log("Wait..."),setTimeout(t,100))}.bind(this),1200),this.footerVisible=!0,this.activeApplicationId=e.lensId)}openLogs(t,e){this.addFloatingWindow({unit:t,app:e,kind:l.a.log})}openTerminal(t,e){this.addFloatingWindow({unit:t,app:e,kind:l.a.terminal})}};p([m.State],g.prototype,"currentController",void 0),p([m.State],g.prototype,"controllers",void 0),p([m.Getter("currentControllerModelsFilled")],g.prototype,"controllerModels",void 0),p([f.Action(r.a.addFloatingWindow)],g.prototype,"addFloatingWindow",void 0),p([Object(i.d)("sortModelsBy")],g.prototype,"onSortModelsByChange",null),p([Object(i.d)("$route")],g.prototype,"scrollToApp",null),g=p([Object(i.a)({components:{JujuLoading:a.a}})],g);var b=g,y=(o("ca6e"),o("2877")),q=o("65c6"),w=o("429b"),_=o("7867"),C=o("2c91"),S=o("ddd8"),T=o("9c40"),k=o("3980"),x=o("4983"),Q=o("0016"),A=o("eb85"),I=o("6ac5"),B=o("05c0"),M=o("cb32"),O=o("068f"),L=o("e9c1"),j=o("adad"),z=o("823b"),H=o("1c1c"),P=o("66e5"),R=o("4074"),F=o("4e73"),E=o("d847"),$=o("eaac"),N=o("db86"),V=o("58a8"),D=o("f09f"),U=o("a370"),W=o("0170"),J=o("7460"),G=o("714f"),Z=o("75c3"),K=o("eebe"),X=o.n(K),Y=Object(y.a)(b,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"models absolute fit flex items-stretch",staticStyle:{overflow:"hidden"}},[o("div",{staticClass:"fit column"},[o("q-toolbar",{staticClass:"col-auto row items-center"},[o("q-tabs",{staticClass:"model-machine-tabs q-pa-xs",attrs:{"inline-label":"",shrink:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-route-tab",{attrs:{label:"Applications",icon:"share",name:"applications",to:{name:"models"}}}),o("q-route-tab",{attrs:{label:"Machines",icon:"fas fa-server",name:"machines",to:{name:"machines"}}})],1),o("q-space"),o("div",{staticStyle:{flex:"0.1 0.5 10em"},attrs:{id:"sort-models-select"}},[o("q-select",{staticClass:"on-left",attrs:{dense:"",label:"Sort By",options:t.sortModelsByOptions,color:t.$q.dark.isActive?"secondary":"primary",filled:""},model:{value:t.sortModelsBy,callback:function(e){t.sortModelsBy=e},expression:"sortModelsBy"}})],1),o("q-btn",{attrs:{color:"positive",icon:"fas fa-plus"},on:{click:function(e){return t.startCreate()}}})],1),o("div",{staticClass:"col relative-position"},[o("q-resize-observer",{on:{resize:t.onResizeContent}}),o("q-scroll-area",{ref:"modelScrollArea",style:{height:t.footerVisible?100-t.footerHeight+"%":"100%",transition:t.footerTransitioning?"all "+t.footerTransitionDuration/1e3+"s":"unset"},attrs:{"thumb-style":{width:"5px"}}},[o("div",{staticClass:"q-pa-sm"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-grow text-h5 q-mb-md xs"},[t._v("\n              "+t._s("applications"==t.tab?"Applications":"Machines")+"\n            ")]),o("div",{staticStyle:{flex:"0.1 0.5 10em",position:"relative",top:"-0.5em"},attrs:{id:"sort-models-select-mobile"}},[o("q-select",{staticClass:"on-left",attrs:{dense:"",label:"Sort By",options:t.sortModelsByOptions,color:t.$q.dark.isActive?"secondary":"primary",filled:""},model:{value:t.sortModelsBy,callback:function(e){t.sortModelsBy=e},expression:"sortModelsBy"}})],1)]),o("transition-group",{attrs:{name:"model-group-trans",tag:"div"}},t._l(t.models,(function(e){return o("div",{key:e["model-uuid"],staticClass:"q-mb-md full-width"},[o("q-toolbar",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"bg-primary text-white full-width",on:{click:function(o){return t.$set(t.modelsExpanded,e["model-uuid"],!t.modelsExpanded[e["model-uuid"]])}}},[o("q-icon",{style:{color:e.statusIcon.color},attrs:{name:e.statusIcon.icon,size:"1.7em"}}),o("q-separator",{staticClass:"on-right",attrs:{vertical:"",color:"grey-6"}}),o("q-toolbar-title",{staticStyle:{flex:"1 1 0%"}},[o("span",[t._v("\n                    "+t._s(e.name)+"\n                    "),o("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle"}},[t._v("\n                      "+t._s(e.name)+"\n                    ")])],1),t._v("\n                   \n                  "),o("span",{staticClass:"text-weight-light",staticStyle:{"font-size":"1rem"}},[t._v("\n                    "+t._s(e.controller)+"\n                    "),o("q-tooltip",[t._v("Controller")])],1)]),o("div",{staticClass:"avatar-stack"},t._l(e.applications,(function(e){return o("q-avatar",{key:e.id,attrs:{size:"2em"}},[o("q-img",{attrs:{src:e.charmIconUrl}}),o("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle","content-style":"font-size: 0.8em;"}},[t._v("\n                      "+t._s(e.name)+"\n                    ")])],1)})),1),o("q-btn",{staticStyle:{transition:"transform 0.2s"},style:{transform:t.modelsExpanded[e["model-uuid"]]?"rotateZ(180deg)":"none"},attrs:{round:"",dense:"",flat:"",icon:"arrow_downward"}}),o("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"more_vert"},on:{click:function(t){t.stopPropagation()}}})],1),o("q-slide-transition",[t.modelsExpanded[e["model-uuid"]]?o("div",[o("q-tab-panels",{staticStyle:{"background-color":"hsla(0, 0%, 0%, 0)"},attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-tab-panel",{staticClass:"q-pa-none",staticStyle:{overflow:"hidden"},attrs:{id:"model-"+e["model-uuid"],name:"applications"}},[o("q-list",{attrs:{bordered:"",separator:""}},[o("transition-group",{attrs:{name:"model-group-trans",tag:"div"}},t._l(e.applications,(function(e){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.lensId,staticClass:"row",attrs:{clickable:"",id:"application-"+e.lensId},on:{click:function(o){t.activeApplicationId=e.lensId,t.showFooter()}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{style:{color:e.statusIcon.color},attrs:{name:e.statusIcon.icon,size:"1.4em"}})],1),o("q-item-section",{attrs:{avatar:""}},[o("q-img",{staticStyle:{width:"2.5em"},attrs:{src:e.charmIconUrl}})],1),o("q-item-section",[o("div",[t._v("\n                                "+t._s(e.name)+"\n                              ")]),o("div",{staticClass:"row reverse"},t._l(e.units,(function(a){return o("div",{key:a.id},[o("q-icon",{staticClass:"q-ma-xs",style:{color:a.statusIcon.color},attrs:{name:a.statusIcon.icon,size:"1.em"}}),o("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle","content-style":"font-size: 0.8rem;"}},[t._v("\n                                    "+t._s(a["workload-status"].message||"status: "+a["workload-status"].current)+"\n                                  ")]),o("q-menu",{attrs:{"context-menu":"","auto-close":""}},[o("q-list",[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(o){return t.openLogs(a,e)}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"fas fa-file-alt"}})],1),o("q-item-section",[t._v("\n                                          Open Logs\n                                        ")])],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(o){return t.openTerminal(a,e)}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"fas fa-terminal"}})],1),o("q-item-section",[t._v("\n                                          Open Terminal\n                                        ")])],1)],1)],1)],1)})),0)]),o("q-item-section",{attrs:{side:""}},[o("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"more_vert"},on:{click:function(t){t.stopPropagation()}}})],1)],1)})),1),e.applications.length<1?o("div",{staticClass:"text-center q-pa-sm text-body1"},[t._v("\n                          This model has no applications.\n                        ")]):t._e()],1)],1),o("q-tab-panel",{attrs:{name:"machines"}},[o("div",{staticClass:"text-h5"},[t._v("Machine List Comming Soon!")])])],1)],1):t._e()])],1)})),0)],1)]),"applications"==t.tab?o("div",{staticClass:"relative-position",style:{height:t.footerVisible?t.footerHeight+"%":"0%",transition:t.footerTransitioning?"all "+t.footerTransitionDuration/1e3+"s":"unset"}},[t.activeApplication&&(t.footerVisible||t.footerTransitioning)?o("div",{staticClass:"absolute fit column overflow-hidden"},[o("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.up.down.prevent",value:t.resizeFooter,expression:"resizeFooter",modifiers:{mouse:!0,up:!0,down:!0,prevent:!0}}],staticStyle:{position:"absolute",left:"0",right:"0",top:"0",cursor:"ns-resize",height:"0.7em"}}),o("q-bar",{staticClass:"col-auto bg-primary text-white top-border",attrs:{dense:""}},[o("img",{staticStyle:{height:"1em"},attrs:{src:t.activeApplication.charmIconUrl,ratio:1}}),o("div",{staticClass:"text-weight-bold ellipsis"},[t._v("\n              "+t._s(t.activeApplication.name)+"\n            ")]),o("q-space"),o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-minimize"},on:{click:function(e){return t.hideFooter()}}},[o("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:300}},[t._v("\n                Hide\n              ")])],1)],1),o("div",{staticClass:"col-grow relative-position"},[o("q-scroll-area",{staticClass:"absolute fit",attrs:{"thumb-style":{width:"5px"}}},[o("q-table",{staticStyle:{"border-radius":"0px","box-shadow":"none","margin-bottom":"-3em"},attrs:{dense:"","hide-bottom":"",data:t.activeApplication.units,columns:t.activeApplicationUnitsColumns,pagination:{rowsPerPage:0},grid:t.$q.screen.xs,"row-key":"index","virtual-scroll":"","binary-state-sort":""},scopedSlots:t._u([{key:"body-cell-agent-status",fn:function(e){return[o("q-td",{attrs:{props:e}},[o("div",[o("q-badge",{attrs:{color:t.unitAgentStatusBadgeColor(e.value.current),label:e.value.current}})],1)])]}},{key:"body-cell-actions",fn:function(e){return[o("q-td",{attrs:{props:e}},[o("q-btn",{attrs:{dense:"",flat:"",size:"0.8em",icon:"fas fa-file-alt"},on:{click:function(o){return t.openLogs(e.value,t.activeApplication)}}},[o("q-tooltip",[t._v("Open Logs")])],1),o("q-btn",{attrs:{dense:"",flat:"",size:"0.8em",icon:"fas fa-terminal"},on:{click:function(o){return t.openTerminal(e.value,t.activeApplication)}}},[o("q-tooltip",[t._v("Open Terminal")])],1)],1)]}},{key:"body-cell-status",fn:function(e){return[o("q-td",{attrs:{props:e}},[o("div",[o("q-badge",{attrs:{color:t.unitStatusSeverityBadgeColor(e.value),label:e.value}})],1)])]}},{key:"item",fn:function(e){return[o("div",{staticClass:"column col-6"},[o("q-card",{staticClass:"q-ma-xs"},[o("q-card-section",[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[t._v("\n                            "+t._s(e.cols.filter((function(t){return"name"==t.name}))[0].value)+"\n                          ")]),o("div",{staticClass:"col",staticStyle:{"text-align":"right"}},t._l([e.cols.filter((function(t){return"status"==t.name}))[0].value],(function(e){return o("q-badge",{key:e,attrs:{color:t.unitStatusSeverityBadgeColor(e)}},[t._v("\n                              "+t._s(e)+"\n                            ")])})),1)])]),o("q-separator"),o("q-list",{attrs:{dense:""}},t._l(e.cols.filter((function(t){return"name"!==t.name&&"status"!==t.name&&t.name})),(function(e){return o("q-item",{key:e.name},[o("q-item-section",[o("q-item-label",[t._v(t._s(e.label))]),"message"==e.name?o("q-item-label",{attrs:{caption:""}},[t._v("\n                              "+t._s(e.value)+"\n                            ")]):t._e()],1),"message"!=e.name?o("q-item-section",{attrs:{side:""}},[o("q-item-label",{attrs:{caption:""}},["agent-status"==e.name?o("span",[t._v("\n                                "+t._s(e.value.current)+"\n                              ")]):"actions"!=e.name?o("span",[t._v("\n                                "+t._s(e.value)+"\n                              ")]):o("span",[o("q-btn",{staticClass:"q-ma-xs",attrs:{dense:"",flat:"",size:"1em",icon:"fas fa-file-alt"},on:{click:function(o){return t.openLogs(e.value,t.activeApplication)}}},[o("q-tooltip",[t._v("Open Logs")])],1),o("q-btn",{staticClass:"q-ma-xs",attrs:{dense:"",flat:"",size:"1em",icon:"fas fa-terminal"},on:{click:function(o){return t.openTerminal(e.value,t.activeApplication)}}},[o("q-tooltip",[t._v("Open Terminal")])],1)],1)])],1):t._e()],1)})),1)],1)],1)]}}],null,!1,2647744556)})],1)],1)],1):t._e()]):t._e()],1)],1),o("juju-loading",{attrs:{loading:t.loading}})],1)}),[],!1,null,null,null);e.default=Y.exports;X()(Y,"components",{QToolbar:q.a,QTabs:w.a,QRouteTab:_.a,QSpace:C.a,QSelect:S.a,QBtn:T.a,QResizeObserver:k.a,QScrollArea:x.a,QIcon:Q.a,QSeparator:A.a,QToolbarTitle:I.a,QTooltip:B.a,QAvatar:M.a,QImg:O.a,QSlideTransition:L.a,QTabPanels:j.a,QTabPanel:z.a,QList:H.a,QItem:P.a,QItemSection:R.a,QMenu:F.a,QBar:E.a,QTable:$.a,QTd:N.a,QBadge:V.a,QCard:D.a,QCardSection:U.a,QItemLabel:W.a,QTab:J.a}),X()(Y,"directives",{Ripple:G.a,TouchPan:Z.a})},b7b1:function(t,e,o){"use strict";var a=o("74f7"),i=o("792f"),s=o("60a3"),n=function(t,e,o,a){var i,s=arguments.length,n=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n};let l=class JujuLoading extends s.c{constructor(){super(...arguments),this.showLoading=!1,this.showLoadingTimeoutHandle=null}created(){this.onLoadingChange(this.loading)}onLoadingChange(t){t||(this.showLoading=!1),!t&&this.showLoadingTimeoutHandle?clearTimeout(this.showLoadingTimeoutHandle):t&&!this.showLoadingTimeoutHandle&&(this.showLoadingTimeoutHandle=setTimeout(()=>this.showLoading=!0,this.delay))}};n([Object(s.b)(Boolean)],l.prototype,"loading",void 0),n([Object(s.b)({type:Number,default:300})],l.prototype,"delay",void 0),n([Object(s.d)("loading")],l.prototype,"onLoadingChange",null),l=n([Object(s.a)({components:{QInnerLoading:a.a,QSpinnerRings:i.a}})],l);var r=l,c=o("2877"),d=o("eebe"),u=o.n(d),p=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("q-inner-loading",{attrs:{showing:this.showLoading}},[e("q-spinner-rings",{attrs:{size:"80%",color:this.$q.dark.isActive?"secondary":"primary"}})],1)}),[],!1,null,null,null);e.a=p.exports;u()(p,"components",{QInnerLoading:a.a,QSpinnerRings:i.a})},ca6e:function(t,e,o){"use strict";var a=o("29db");o.n(a).a}}]);