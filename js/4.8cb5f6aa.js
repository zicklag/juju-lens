(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"29db":function(t,e,a){},"56c6":function(t,e,a){"use strict";a.r(e);var i=a("b7b1"),o=a("60a3"),s=a("4bb5"),n=a("fb60"),l=a("b444"),r=a("6260"),c=a("0831"),d=a("f303"),u=a("18d6"),p=function(t,e,a,i){var o,s=arguments.length,n=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(n=(s<3?o(n):s>3?o(e,a,n):o(e,a))||n);return s>3&&n&&Object.defineProperty(e,a,n),n};const m=Object(s.a)("juju"),f=Object(s.a)("app"),{offset:v}=d.c,{setScrollPosition:h}=c.a;let b=class Index extends o.c{constructor(){super(...arguments),this.loading=!1,this.sortModelsByOptions=["Status","Name"],this.sortModelsBy="Status",this.tab="applications",this.modelsExpanded={},this.activeApplicationId=null,this.showAppInfo=!1,this.pageHeight=0,this.footerVisible=!1,this.footerHeight=50,this.footerTransitioning=!1,this.footerTransitionDuration=300,this.unitVisibleColumnsOptions=["name","actions","agent-status","status","message"],this.unitVisibleColumns=["name","actions","agent-status","status","message"]}get activeApplication(){if(this.activeApplicationId)for(const t of this.controllerModels)for(const e of t.applications)if(e.lensId==this.activeApplicationId)return e;return null}get models(){return"Status"==this.sortModelsBy?this.controllerModels.sort((t,e)=>n.a[e.statusSeverity]-n.a[t.statusSeverity]):this.controllerModels.sort((t,e)=>e.name<t.name?1:-1)}created(){const t=u.a.getItem("sortModelsBy");!t||"Status"!=t&&"Name"!=t||(this.sortModelsBy=t);const e=u.a.getItem("unitVisibleColumns");e&&(this.unitVisibleColumns=e),this.scrollToApp()}onUnitVisibleColumnsChange(){u.a.set("unitVisibleColumns",this.unitVisibleColumns)}get activeApplicationUnitsColumns(){return[{name:"name",label:"Unit",field:"name",headerStyle:"width: auto",align:"left",sortable:!0},{name:"actions",label:"Actions",alight:"left",field:t=>t},{name:"agent-status",label:"Agent",field:"agent-status",headerStyle:"width: 5em",align:"left",sortable:!0},{name:"status",label:"Status",field:t=>t["workload-status"].current,sort:(t,e)=>n.a[e]-n.a[t],headerStyle:"width: 5em",align:"left",sortable:!0},{name:"message",label:"Message",align:"left",headerStyle:"width: 100%",field:t=>t["workload-status"].message}]}unitAgentStatusBadgeColor(t){return"idle"==t?"positive":"active"==t||"executing"==t||"allocating"==t?"warning":"error"==t?"negative":"grey"}unitStatusSeverityBadgeColor(t){const e=n.a[t];return e==n.a.active?"positive":n.a.active<e&&e<n.a.blocked?"warning":"negative"}onResizeContent({height:t}){this.pageHeight=t}resizeFooter(t){const e=t.delta.y/this.pageHeight*100,a=this.footerHeight-e;a>100?this.footerHeight=100:a<2?(this.footerVisible=!1,this.footerHeight=50,this.activeApplicationId=null):this.footerHeight=a}hideFooter(){this.footerTransitioning=!0,this.footerVisible=!1,setTimeout(()=>this.footerTransitioning=!1,this.footerTransitionDuration)}showFooter(){this.footerTransitioning=!0,this.footerVisible=!0,setTimeout(()=>this.footerTransitioning=!1,this.footerTransitionDuration)}onSortModelsByChange(t){u.a.set("sortModelsBy",t)}scrollToElement(t){const e=this.$refs.modelScrollArea,a=e.getScrollTarget(),i=e.getScrollPosition(),o=v(t).top;h(a,i+o-122,100)}scrollToApp(){const t=this.$route.query.unitId;if(!t)return;let e=null,a=!1;for(const i of this.models){if(1==a)break;for(const o of i.applications){if(1==a)break;for(const i of o.units)if(i.lensId==t){e=o,a=!0;break}}}e&&(this.$set(this.modelsExpanded,e["model-uuid"],!0),setTimeout(function t(){if(!e)return;const a=document.getElementById("application-"+e.lensId);a?this.scrollToElement(a):setTimeout(t,100)}.bind(this),1200),this.footerVisible=!0,this.activeApplicationId=e.lensId)}openLogs(t,e){this.addFloatingWindow({unit:t,app:e,kind:l.a.log})}openTerminal(t,e){this.addFloatingWindow({unit:t,app:e,kind:l.a.terminal})}};p([m.State],b.prototype,"currentController",void 0),p([m.State],b.prototype,"controllers",void 0),p([m.Getter("currentControllerModelsFilled")],b.prototype,"controllerModels",void 0),p([f.Action(r.a.addFloatingWindow)],b.prototype,"addFloatingWindow",void 0),p([Object(o.d)("unitVisibleColumns")],b.prototype,"onUnitVisibleColumnsChange",null),p([Object(o.d)("sortModelsBy")],b.prototype,"onSortModelsByChange",null),p([Object(o.d)("$route")],b.prototype,"scrollToApp",null),b=p([Object(o.a)({components:{JujuLoading:i.a}})],b);var g=b,q=(a("ca6e"),a("2877")),y=a("24e8"),C=a("f09f"),w=a("65c6"),_=a("cb32"),S=a("068f"),k=a("6ac5"),x=a("a370"),A=a("0016"),T=a("4b7e"),I=a("9c40"),Q=a("429b"),B=a("7867"),O=a("2c91"),M=a("ddd8"),L=a("3980"),j=a("4983"),V=a("eb85"),z=a("05c0"),H=a("e9c1"),P=a("adad"),F=a("823b"),R=a("1c1c"),E=a("66e5"),$=a("4074"),U=a("4e73"),N=a("d847"),D=a("8f8e"),J=a("0170"),W=a("eaac"),G=a("db86"),Z=a("58a8"),K=a("8572"),X=a("7460"),Y=a("7f67"),tt=a("714f"),et=a("75c3"),at=a("eebe"),it=a.n(at),ot=Object(q.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"models absolute fit flex items-stretch",staticStyle:{overflow:"hidden"}},[t.activeApplication?a("q-dialog",{model:{value:t.showAppInfo,callback:function(e){t.showAppInfo=e},expression:"showAppInfo"}},[a("q-card",{staticStyle:{width:"30em","max-width":"80vw"}},[a("q-toolbar",{staticClass:"row q-my-sm"},[a("q-avatar",[a("q-img",{attrs:{src:t.activeApplication.charmIconUrl}})],1),a("q-toolbar-title",[t._v(t._s(t.activeApplication.name))])],1),a("q-card-section",{staticClass:"q-pt-none text-body1"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-auto text-weight-bold"},[t._v("\n            Charm Version: \n          ")]),a("div",{staticClass:"col-auto"},[a("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:t.activeApplication.charmStoreUrl}},[t._v("\n              "+t._s(t.activeApplication["charm-url"])+"\n              "),a("q-icon",{attrs:{name:"open_in_new"}})],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-auto text-weight-bold"},[t._v("\n            Scale: \n          ")]),a("div",{staticClass:"col-auto"},[t._v("\n            "+t._s(t.activeApplication.units.length)+"\n          ")])])]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Close"}})],1)],1)],1):t._e(),a("div",{staticClass:"fit column"},[a("q-toolbar",{staticClass:"col-auto row items-center"},[a("q-tabs",{staticClass:"model-machine-tabs q-pa-xs",attrs:{"inline-label":"",shrink:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-route-tab",{attrs:{label:"Applications",icon:"share",name:"applications",to:{name:"models"}}}),a("q-route-tab",{attrs:{label:"Machines",icon:"fas fa-server",name:"machines",to:{name:"machines"}}})],1),a("q-space"),a("div",{staticStyle:{flex:"0.1 0.5 10em"},attrs:{id:"sort-models-select"}},[a("q-select",{staticClass:"on-left",attrs:{dense:"",label:"Sort By",options:t.sortModelsByOptions,color:t.$q.dark.isActive?"secondary":"primary",filled:""},model:{value:t.sortModelsBy,callback:function(e){t.sortModelsBy=e},expression:"sortModelsBy"}})],1),a("q-btn",{attrs:{color:"positive",icon:"fas fa-plus"},on:{click:function(e){return t.startCreate()}}})],1),a("div",{staticClass:"col relative-position"},[a("q-resize-observer",{on:{resize:t.onResizeContent}}),a("q-scroll-area",{ref:"modelScrollArea",style:{height:t.footerVisible?100-t.footerHeight+"%":"100%",transition:t.footerTransitioning?"all "+t.footerTransitionDuration/1e3+"s":"unset"},attrs:{"thumb-style":{width:"5px"}}},[a("div",{staticClass:"q-pa-sm"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-grow text-h5 q-mb-md xs"},[t._v("\n              "+t._s("applications"==t.tab?"Applications":"Machines")+"\n            ")]),a("div",{staticStyle:{flex:"0.1 0.5 10em",position:"relative",top:"-0.5em"},attrs:{id:"sort-models-select-mobile"}},[a("q-select",{staticClass:"on-left",attrs:{dense:"",label:"Sort By",options:t.sortModelsByOptions,color:t.$q.dark.isActive?"secondary":"primary",filled:""},model:{value:t.sortModelsBy,callback:function(e){t.sortModelsBy=e},expression:"sortModelsBy"}})],1)]),a("transition-group",{attrs:{name:"model-group-trans",tag:"div"}},t._l(t.models,(function(e){return a("div",{key:e["model-uuid"],staticClass:"q-mb-md full-width"},[a("q-toolbar",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"bg-primary text-white full-width",on:{click:function(a){return t.$set(t.modelsExpanded,e["model-uuid"],!t.modelsExpanded[e["model-uuid"]])}}},[a("q-icon",{style:{color:e.statusIcon.color},attrs:{name:e.statusIcon.icon,size:"1.7em"}}),a("q-separator",{staticClass:"on-right",attrs:{vertical:"",color:"grey-6"}}),a("q-toolbar-title",{staticStyle:{flex:"1 1 0%"}},[a("span",[t._v("\n                    "+t._s(e.name)+"\n                    "),a("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle"}},[t._v("\n                      "+t._s(e.name)+"\n                    ")])],1),t._v("\n                   \n                  "),a("span",{staticClass:"text-weight-light",staticStyle:{"font-size":"1rem"}},[t._v("\n                    "+t._s(e.controller)+"\n                    "),a("q-tooltip",[t._v("Controller")])],1)]),a("div",{staticClass:"avatar-stack"},t._l(e.applications,(function(e){return a("q-avatar",{key:e.id,attrs:{size:"2em"}},[a("q-img",{attrs:{src:e.charmIconUrl}}),a("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle","content-style":"font-size: 0.8em;"}},[t._v("\n                      "+t._s(e.name)+"\n                    ")])],1)})),1),a("q-btn",{staticStyle:{transition:"transform 0.2s"},style:{transform:t.modelsExpanded[e["model-uuid"]]?"rotateZ(180deg)":"none"},attrs:{round:"",dense:"",flat:"",icon:"arrow_downward"}}),a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"more_vert"},on:{click:function(t){t.stopPropagation()}}})],1),a("q-slide-transition",[t.modelsExpanded[e["model-uuid"]]?a("div",[a("q-tab-panels",{staticStyle:{"background-color":"hsla(0, 0%, 0%, 0)"},attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{staticClass:"q-pa-none",staticStyle:{overflow:"hidden"},attrs:{id:"model-"+e["model-uuid"],name:"applications"}},[a("q-list",{attrs:{bordered:"",separator:""}},[a("transition-group",{attrs:{name:"model-group-trans",tag:"div"}},t._l(e.applications,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.lensId,staticClass:"row",class:{"active-application-row":t.activeApplication&&t.activeApplication.lensId==e.lensId},attrs:{clickable:"",id:"application-"+e.lensId},on:{click:function(a){t.activeApplicationId=e.lensId,t.showFooter()}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{style:{color:e.statusIcon.color},attrs:{name:e.statusIcon.icon,size:"1.4em"}})],1),a("q-item-section",{attrs:{avatar:""}},[a("q-img",{staticStyle:{width:"2.5em"},attrs:{src:e.charmIconUrl}})],1),a("q-item-section",[a("div",[t._v("\n                                "+t._s(e.name)+"\n                              ")]),a("div",{staticClass:"row reverse"},t._l(e.units,(function(i){return a("div",{key:i.id},[a("q-icon",{staticClass:"q-ma-xs",style:{color:i.statusIcon.color},attrs:{name:i.statusIcon.icon,size:"1.em"}}),a("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle","content-style":"font-size: 0.8rem;"}},[t._v("\n                                    "+t._s(i["workload-status"].message||"status: "+i["workload-status"].current)+"\n                                  ")]),a("q-menu",{attrs:{"context-menu":"","auto-close":""}},[a("q-list",[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(a){return t.openLogs(i,e)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-file-alt"}})],1),a("q-item-section",[t._v("\n                                          Open Logs\n                                        ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(a){return t.openTerminal(i,e)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-terminal"}})],1),a("q-item-section",[t._v("\n                                          Open Terminal\n                                        ")])],1)],1)],1)],1)})),0)]),a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"more_vert"},on:{click:function(t){t.stopPropagation()}}})],1)],1)})),1),e.applications.length<1?a("div",{staticClass:"text-center q-pa-sm text-body1"},[t._v("\n                          This model has no applications.\n                        ")]):t._e()],1)],1),a("q-tab-panel",{attrs:{name:"machines"}},[a("div",{staticClass:"text-h5"},[t._v("Machine List Comming Soon!")])])],1)],1):t._e()])],1)})),0)],1)]),"applications"==t.tab?a("div",{staticClass:"relative-position",style:{height:t.footerVisible?t.footerHeight+"%":"0%",transition:t.footerTransitioning?"all "+t.footerTransitionDuration/1e3+"s":"unset"}},[t.activeApplication&&(t.footerVisible||t.footerTransitioning)?a("div",{staticClass:"absolute fit column overflow-hidden"},[a("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.up.down.prevent",value:t.resizeFooter,expression:"resizeFooter",modifiers:{mouse:!0,up:!0,down:!0,prevent:!0}}],staticStyle:{position:"absolute",left:"0",right:"0",top:"0",cursor:"ns-resize",height:"0.7em"}}),a("q-bar",{staticClass:"col-auto bg-primary text-white top-border",attrs:{dense:""}},[a("q-icon",{staticClass:"q-mr-xs",style:{color:t.activeApplication.statusIcon.color},attrs:{name:"circle",size:"1em"}}),a("img",{staticStyle:{height:"1em"},attrs:{src:t.activeApplication.charmIconUrl,ratio:1}}),a("div",{staticClass:"text-weight-bold ellipsis on-right"},[t._v("\n              "+t._s(t.activeApplication.name)+"\n            ")]),a("q-btn",{staticClass:"on-right lt-md",attrs:{icon:"info",round:"",flat:""},on:{click:function(e){t.showAppInfo=!t.showAppInfo}}},[a("q-tooltip",[t._v("Application Info")])],1),a("q-space"),a("div",{staticClass:"gt-sm"},[a("span",{staticClass:"on-left"},[a("span",{staticClass:"text-weight-bold"},[t._v("Charm version:")]),a("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:t.activeApplication.charmStoreUrl}},[t._v("\n                  "+t._s(t.activeApplication["charm-url"])+"\n                  "),a("q-icon",{attrs:{name:"open_in_new"}})],1)]),a("span",{staticClass:"on-left"},[a("span",{staticClass:"text-weight-bold"},[t._v("Scale:")]),t._v("\n                "+t._s(t.activeApplication.units.length)+"\n              ")])]),a("q-select",{staticClass:"app-details-footer__column-select on-left",attrs:{dark:"","options-dark":t.$q.dark.isActive,filled:"",dense:"",multiple:"","options-dense":"",options:t.unitVisibleColumnsOptions,"display-value":"Columns"},scopedSlots:t._u([{key:"option",fn:function(e){return[a("q-item",t._g(t._b({},"q-item",e.itemProps,!1),e.itemEvents),[a("q-item-section",{attrs:{side:""}},[a("q-checkbox",{attrs:{color:"secondary",val:e.opt},model:{value:t.unitVisibleColumns,callback:function(e){t.unitVisibleColumns=e},expression:"unitVisibleColumns"}})],1),a("q-item-section",[a("q-item-label",{domProps:{innerHTML:t._s(e.opt)}})],1)],1)]}}],null,!1,2880810978),model:{value:t.unitVisibleColumns,callback:function(e){t.unitVisibleColumns=e},expression:"unitVisibleColumns"}}),a("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-minimize"},on:{click:function(e){return t.hideFooter()}}},[a("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:300}},[t._v("\n                Hide\n              ")])],1)],1),a("div",{staticClass:"col-grow relative-position"},[a("q-scroll-area",{staticClass:"absolute fit",attrs:{"thumb-style":{width:"5px"}}},[a("q-table",{staticStyle:{"border-radius":"0px","box-shadow":"none","margin-bottom":"-3em"},attrs:{dense:"","hide-bottom":"",data:t.activeApplication.units,columns:t.activeApplicationUnitsColumns,"visible-columns":t.unitVisibleColumns,pagination:{rowsPerPage:0},grid:t.$q.screen.xs,"row-key":"index","virtual-scroll":"","binary-state-sort":""},scopedSlots:t._u([{key:"body-cell-agent-status",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("div",[a("q-badge",{attrs:{color:t.unitAgentStatusBadgeColor(e.value.current),label:e.value.current}})],1)])]}},{key:"body-cell-actions",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("q-btn",{attrs:{dense:"",flat:"",size:"0.8em",icon:"fas fa-file-alt"},on:{click:function(a){return t.openLogs(e.value,t.activeApplication)}}},[a("q-tooltip",[t._v("Open Logs")])],1),a("q-btn",{attrs:{dense:"",flat:"",size:"0.8em",icon:"fas fa-terminal"},on:{click:function(a){return t.openTerminal(e.value,t.activeApplication)}}},[a("q-tooltip",[t._v("Open Terminal")])],1)],1)]}},{key:"body-cell-status",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("div",[a("q-badge",{attrs:{color:t.unitStatusSeverityBadgeColor(e.value),label:e.value}})],1)])]}},{key:"item",fn:function(e){return[a("div",{staticClass:"column col-6"},[a("q-card",{staticClass:"q-ma-xs q-pb-xs"},[a("q-card-section",[a("div",{staticClass:"row"},[e.cols.filter((function(t){return"name"==t.name})).length>0?a("div",{staticClass:"col"},[t._v("\n                            "+t._s(e.cols.filter((function(t){return"name"==t.name}))[0].value)+"\n                          ")]):t._e(),a("div",{staticClass:"col",staticStyle:{"text-align":"right"}},[e.cols.filter((function(t){return"status"==t.name})).length>0?a("div",t._l([e.cols.filter((function(t){return"status"==t.name}))[0].value],(function(e){return a("q-badge",{key:e,attrs:{color:t.unitStatusSeverityBadgeColor(e)}},[t._v("\n                                "+t._s(e)+"\n                              ")])})),1):t._e()])])]),a("q-separator"),a("q-list",{attrs:{dense:""}},t._l(e.cols.filter((function(t){return"name"!==t.name&&"status"!==t.name&&t.name})),(function(e){return a("q-item",{key:e.name},[a("q-item-section",[a("q-item-label",[t._v(t._s(e.label))]),"message"==e.name?a("q-item-label",{attrs:{caption:""}},[a("div",{staticClass:"q-ml-xs"},[t._v(t._s(e.value))])]):t._e()],1),"message"!=e.name?a("q-item-section",{attrs:{side:""}},[a("q-item-label",{attrs:{caption:""}},["agent-status"==e.name?a("span",[a("q-badge",{attrs:{color:t.unitAgentStatusBadgeColor(e.value.current)}},[t._v("\n                                  "+t._s(e.value.current)+"\n                                ")])],1):"actions"!=e.name?a("span",[t._v("\n                                "+t._s(e.value)+"\n                              ")]):a("span",[a("q-btn",{staticClass:"q-ma-xs",attrs:{dense:"",flat:"",size:"1em",icon:"fas fa-file-alt"},on:{click:function(a){return t.openLogs(e.value,t.activeApplication)}}},[a("q-tooltip",[t._v("Open Logs")])],1),a("q-btn",{staticClass:"q-ma-xs",attrs:{dense:"",flat:"",size:"1em",icon:"fas fa-terminal"},on:{click:function(a){return t.openTerminal(e.value,t.activeApplication)}}},[a("q-tooltip",[t._v("Open Terminal")])],1)],1)])],1):t._e()],1)})),1)],1)],1)]}}],null,!1,2391813112)})],1)],1)],1):t._e()]):t._e()],1)],1),a("juju-loading",{attrs:{loading:t.loading}})],1)}),[],!1,null,null,null);e.default=ot.exports;it()(ot,"components",{QDialog:y.a,QCard:C.a,QToolbar:w.a,QAvatar:_.a,QImg:S.a,QToolbarTitle:k.a,QCardSection:x.a,QIcon:A.a,QCardActions:T.a,QBtn:I.a,QTabs:Q.a,QRouteTab:B.a,QSpace:O.a,QSelect:M.a,QResizeObserver:L.a,QScrollArea:j.a,QSeparator:V.a,QTooltip:z.a,QSlideTransition:H.a,QTabPanels:P.a,QTabPanel:F.a,QList:R.a,QItem:E.a,QItemSection:$.a,QMenu:U.a,QBar:N.a,QCheckbox:D.a,QItemLabel:J.a,QTable:W.a,QTd:G.a,QBadge:Z.a,QField:K.a,QTab:X.a}),it()(ot,"directives",{ClosePopup:Y.a,Ripple:tt.a,TouchPan:et.a})},b7b1:function(t,e,a){"use strict";var i=a("74f7"),o=a("792f"),s=a("60a3"),n=function(t,e,a,i){var o,s=arguments.length,n=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(n=(s<3?o(n):s>3?o(e,a,n):o(e,a))||n);return s>3&&n&&Object.defineProperty(e,a,n),n};let l=class JujuLoading extends s.c{constructor(){super(...arguments),this.showLoading=!1,this.showLoadingTimeoutHandle=null}created(){this.onLoadingChange(this.loading)}onLoadingChange(t){t||(this.showLoading=!1),!t&&this.showLoadingTimeoutHandle?clearTimeout(this.showLoadingTimeoutHandle):t&&!this.showLoadingTimeoutHandle&&(this.showLoadingTimeoutHandle=setTimeout(()=>this.showLoading=!0,this.delay))}};n([Object(s.b)(Boolean)],l.prototype,"loading",void 0),n([Object(s.b)({type:Number,default:300})],l.prototype,"delay",void 0),n([Object(s.d)("loading")],l.prototype,"onLoadingChange",null),l=n([Object(s.a)({components:{QInnerLoading:i.a,QSpinnerRings:o.a}})],l);var r=l,c=a("2877"),d=a("eebe"),u=a.n(d),p=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("q-inner-loading",{attrs:{showing:this.showLoading}},[e("q-spinner-rings",{attrs:{size:"80%",color:this.$q.dark.isActive?"secondary":"primary"}})],1)}),[],!1,null,null,null);e.a=p.exports;u()(p,"components",{QInnerLoading:i.a,QSpinnerRings:o.a})},ca6e:function(t,e,a){"use strict";var i=a("29db");a.n(i).a}}]);