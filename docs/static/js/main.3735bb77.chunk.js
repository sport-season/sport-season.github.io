(this["webpackJsonpstravastat.github.io"]=this["webpackJsonpstravastat.github.io"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={chartSection:"styles_chartSection__2n3tO",chartSectionHeader:"styles_chartSectionHeader__1AR-7",chart:"styles_chart__KX0c9",daysName:"styles_daysName__1xnkH",main:"styles_main__mTcN9",container:"styles_container__1gyZW",empty_point:"styles_empty_point__3P7SR",point:"styles_point__2iiZd",monthsBar:"styles_monthsBar__11mUz",month:"styles_month__3TTon",m1:"styles_m1__bGJ4r",m2:"styles_m2__2eEdd",m3:"styles_m3__32_1E",m4:"styles_m4__3fGZe",m5:"styles_m5__3NOq4",m6:"styles_m6__ia_pf"}},,,function(e,t,n){e.exports={form:"styles_form__3wXzo",dates:"styles_dates__3xppy",floatButton:"styles_floatButton__k3PFU",rotation:"styles_rotation__RGWBT",loader:"styles_loader__1yqEV"}},,,,function(e,t,n){e.exports={header:"styles_header__3dYHD",menu:"styles_menu__2zk7v",content:"styles_content__3ARWw",footer:"styles_footer__2fvSx"}},,,function(e,t,n){e.exports={ava:"styles_ava__3uCq3",prof:"styles_prof__xcgdj",name:"styles_name__LOOD9"}},function(e,t,n){e.exports={card:"styles_card__2aJrc",cardTitle:"styles_cardTitle__QB308",cardContent:"styles_cardContent__77HFA"}},,function(e,t,n){e.exports={item:"styles_item__3ySkU",row:"styles_row__25V3P"}},function(e,t,n){e.exports={overlay:"styles_overlay__3oWw8",modal:"styles_modal__2-EUv"}},,,function(e,t,n){e.exports={widgetContainer:"style_widgetContainer__KFcYd"}},function(e,t,n){e.exports={loader:"styles_loader__3fFaH","sk-chase":"styles_sk-chase__1mpkW","sk-chase-dot":"styles_sk-chase-dot__-bkOX","sk-chase-dot-before":"styles_sk-chase-dot-before__2vwSD"}},function(e,t,n){e.exports={fullScreen:"styles_fullScreen__1VkY_"}},,,,,,,,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){!function(t){var a;e.exports=((a=n(7)).Control.Fullscreen=a.Control.extend({options:{position:"topleft",title:{false:"View Fullscreen",true:"Exit Fullscreen"}},onAdd:function(e){var t=a.DomUtil.create("div","leaflet-control-fullscreen leaflet-bar leaflet-control");return this.link=a.DomUtil.create("a","leaflet-control-fullscreen-button leaflet-bar-part",t),this.link.href="#",this._map=e,this._map.on("fullscreenchange",this._toggleTitle,this),this._toggleTitle(),a.DomEvent.on(this.link,"click",this._click,this),t},_click:function(e){a.DomEvent.stopPropagation(e),a.DomEvent.preventDefault(e),this._map.toggleFullscreen(this.options)},_toggleTitle:function(){this.link.title=this.options.title[this._map.isFullscreen()]}}),a.Map.include({isFullscreen:function(){return this._isFullscreen||!1},toggleFullscreen:function(e){var t=this.getContainer();this.isFullscreen()?e&&e.pseudoFullscreen?this._disablePseudoFullscreen(t):document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():this._disablePseudoFullscreen(t):e&&e.pseudoFullscreen?this._enablePseudoFullscreen(t):t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):t.msRequestFullscreen?t.msRequestFullscreen():this._enablePseudoFullscreen(t)},_enablePseudoFullscreen:function(e){a.DomUtil.addClass(e,"leaflet-pseudo-fullscreen"),this._setFullscreen(!0),this.fire("fullscreenchange")},_disablePseudoFullscreen:function(e){a.DomUtil.removeClass(e,"leaflet-pseudo-fullscreen"),this._setFullscreen(!1),this.fire("fullscreenchange")},_setFullscreen:function(e){this._isFullscreen=e;var t=this.getContainer();e?a.DomUtil.addClass(t,"leaflet-fullscreen-on"):a.DomUtil.removeClass(t,"leaflet-fullscreen-on"),this.invalidateSize()},_onFullscreenChange:function(e){var t=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;t!==this.getContainer()||this._isFullscreen?t!==this.getContainer()&&this._isFullscreen&&(this._setFullscreen(!1),this.fire("fullscreenchange")):(this._setFullscreen(!0),this.fire("fullscreenchange"))}}),a.Map.mergeOptions({fullscreenControl:!1}),a.Map.addInitHook((function(){var e;if(this.options.fullscreenControl&&(this.fullscreenControl=new a.Control.Fullscreen(this.options.fullscreenControl),this.addControl(this.fullscreenControl)),"onfullscreenchange"in document?e="fullscreenchange":"onmozfullscreenchange"in document?e="mozfullscreenchange":"onwebkitfullscreenchange"in document?e="webkitfullscreenchange":"onmsfullscreenchange"in document&&(e="MSFullscreenChange"),e){var t=a.bind(this._onFullscreenChange,this);this.whenReady((function(){a.DomEvent.on(document,e,t)})),this.on("unload",(function(){a.DomEvent.off(document,e,t)}))}})),void(a.control.fullscreen=function(e){return new a.Control.Fullscreen(e)}))}()},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),s=n.n(c),i=(n(32),n(2)),o=n.n(i),l=n(3),u=n(4),d=(n(34),n(27)),h=["athlete"],j=59766,f="b7893c2f78225337f8ac6852e5c2fe313948c8f7",m="SportSeasonStravaTokenData",b="SportSeasonStravaUserData";function v(){var e={client_id:j,redirect_uri:window.location.origin,response_type:"code",approval_prompt:"auto",scope:"activity:read"},t=new URLSearchParams(e);return"https://www.strava.com/oauth/authorize?".concat(t.toString())}function p(){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem(m))||!t.length){e.next=20;break}if(!((n=JSON.parse(t)).expires_at&&1e3*n.expires_at>Date.now())){e.next=5;break}return e.abrupt("return",n.access_token);case 5:if(!n.refresh_token){e.next=17;break}return e.prev=6,e.next=9,fetch("https://www.strava.com/api/v3/oauth/token",{body:new URLSearchParams({client_id:j,client_secret:f,refresh_token:n.refresh_token,grant_type:"refresh_token"}).toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"}).then((function(e){return e.json()}));case 9:return a=e.sent,localStorage.setItem(m,JSON.stringify(a)),e.abrupt("return",a.access_token);case 14:throw e.prev=14,e.t0=e.catch(6),new Error(e.t0);case 17:throw new Error("no token");case 20:throw new Error("no stored token data");case 21:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}function g(e){return _.apply(this,arguments)}function _(){return(_=Object(l.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.strava.com/api/v3/oauth/token",{body:new URLSearchParams({client_id:j,client_secret:f,code:t,grant_type:"authorization_code"}).toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"}).then((function(e){return e.json()}));case 3:return n=e.sent,console.log({result:n}),a=n.athlete,r=Object(d.a)(n,h),localStorage.setItem(b,JSON.stringify(a)),localStorage.setItem(m,JSON.stringify(r)),e.abrupt("return",n.access_token);case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function O(){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",e.prev=1,e.next=4,fetch("https://www.strava.com/oauth/deauthorize?".concat(new URLSearchParams({access_token:""}).toString()),{method:"POST"}).then((function(e){return e.json()}));case 4:return localStorage.clear(),e.abrupt("return",Promise.resolve({success:!0}));case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function y(){return JSON.parse(localStorage.getItem(b))}var S=n(15),k=n.n(S),C=n(0),D=function(e){var t=y();return Object(C.jsxs)("div",{className:k.a.prof,children:[Object(C.jsx)("img",{src:t.profile_medium,className:k.a.ava}),Object(C.jsxs)("div",{className:k.a.name,children:[t.lastname,Object(C.jsx)("strong",{children:t.firstname})]})]})},F=n(14),N=n(6),E=n(7),T=n(11),A=n.n(T),P=n(26),z=n(20),R=n(21),I=n(25),L=new(function(){function e(t,n){Object(z.a)(this,e),this.isReady=!1}return Object(R.a)(e,[{key:"init",value:function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)(t,n,{upgrade:function(e){e.createObjectStore("activities",{keyPath:"id"}).createIndex("start_date","start_date")}});case 2:this.db=e.sent,this.isReady=!0;case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"addActivities",value:function(e){var t=this.db.transaction("activities","readwrite");t.objectStore("activities");return Array.isArray(e)?Promise.all([].concat(Object(P.a)(e.map((function(e){return t.store.add(e)}))),[t.done])):t.add("activities",e)}},{key:"getAllActivity",value:function(){return this.db.transaction("activities").objectStore("activities").getAll()}},{key:"clear",value:function(){return this.db.transaction("activities","readwrite").objectStore("activities").clear()}}]),e}());function M(e,t,n){return B.apply(this,arguments)}function B(){return(B=Object(l.a)(o.a.mark((function e(t,n,a){var r,c,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>3&&void 0!==s[3]?s[3]:1,c=s.length>4&&void 0!==s[4]?s[4]:100,e.next=4,fetch("https://www.strava.com/api/v3/athlete/activities?before=".concat(a,"&after=").concat(n,"&page=").concat(r,"&per_page=").concat(c),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return"-";var n=e>1e3?[parseFloat(e/1e3).toFixed(2),"\u043a\u043c"]:[parseFloat(e).toFixed(2),"\u043c"];return t?n:n.join("\u202f")}var H=n(18),q=n.n(H),J=function(e){var t=e.activity,n=Date.parse(t.start_date_local)-1e3*t.utc_offset,a=new Date(n),r=new Date(n+1e3*t.elapsed_time),c=new Date(1e3*(t.moving_time-t.utc_offset));return Object(C.jsxs)("a",{href:"https://www.strava.com/activities/".concat(t.id),rel:"noreferrer",target:"_blank",className:q.a.item,children:[Object(C.jsxs)("div",{className:q.a.row,children:[Object(C.jsx)("strong",{children:t.name}),Object(C.jsx)("strong",{children:U(t.distance)})]}),Object(C.jsxs)("small",{children:[a.toLocaleString().substr(0,17),"-",a.toLocaleDateString()!==r.toLocaleDateString()&&r.toLocaleDateString(),r.toLocaleTimeString().substr(0,5),", \u0432 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0438: ",c.toLocaleTimeString().substr(0,5)]}),Object(C.jsx)("br",{}),"\u0412\u044b\u0441\u043e\u0442\u0430 \u043c\u0430\u043a\u0441: ",t.elev_high,", \u043c\u0438\u043d: ",t.elev_low,";"," ",t.average_heartrate&&Object(C.jsxs)(C.Fragment,{children:["\u041f\u0443\u043b\u044c\u0441: \u0441\u0440\u0435\u0434\u043d: ",t.average_heartrate,", \u043c\u0430\u043a\u0441: ",t.max_heartrate,";"]})," ","\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c ",t.average_speed,";"]})};var V,W=n(8),X=n.n(W),Y=Object(a.createContext)(null),Z=n(5),G=n.n(Z),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:600;return clearTimeout(V),new Promise((function(t){V=setTimeout((function(){return t()}),e)}))},Q=n(19),$=n.n(Q),ee=function(e){var t=e.children,n=e.onClose;return Object(a.useEffect)((function(){return document.body.style.overflow="hidden",function(){return document.body.style.overflow=""}}),[]),Object(C.jsx)("div",{className:$.a.overlay,onClick:n,children:Object(C.jsx)("div",{className:$.a.modal,onClick:function(e){return e.stopPropagation()},children:"function"===typeof t?t(n):t})})},te=function(e){var t=document.createElement("div");document.body.appendChild(t),c.render(Object(C.jsx)(ee,Object(N.a)(Object(N.a)({},e),{},{onClose:function(){c.unmountComponentAtNode(t),document.body.removeChild(t)}})),t)},ne=function(e){return"".concat(["\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a"][e.getMonth()].toUpperCase(),"'").concat(e.getFullYear().toString().substr(-2))},ae=function(e){var t=e.activities,n=Object(a.useState)(+localStorage.getItem("stravastatZoom")||16),r=Object(u.a)(n,2),c=r[0],s=r[1];if(Object(a.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",localStorage.setItem("stravastatZoom",c));case 1:case"end":return e.stop()}}),e)}))),[c]),!t[0])return"\ud83d\udc31\u200d\ud83d\ude80";for(var i=new Date(Date.parse(t[0].start_date)),d=new Date(Date.parse(t[t.length-1].start_date)+864e5),h=0===i.getDay()?6:i.getDay()-1,j=[],f=[],m=i.getTime(),b=0;m<d.getTime();){var v=t.filter((function(e){return new Date(Date.parse(e.start_date)).toISOString().substr(0,10)===new Date(m).toISOString().substr(0,10)}));6===new Date(m).getDay()&&(b+=1),new Date(m).getMonth()!==new Date(m+864e5).getMonth()&&(f.push({m:ne(new Date(m)),w:b}),b=0),j.push({date:m,cou:v.length,acts:v,dist:v.reduce((function(e,t){return t.distance+e}),0)}),m+=864e5}f.push({m:ne(new Date(m)),w:b}),b=0;var p=j.filter((function(e){return e.dist>0}));if(!(null===p||void 0===p?void 0:p.length))return null;var x=p.reduce((function(e,t){return e.dist>t.dist?e.dist:t.dist})),g=function(e){return Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K(100);case 2:s((function(t){return t+e}));case 3:case"end":return t.stop()}}),t)})))};return Object(C.jsxs)("section",{className:G.a.chartSection,children:[Object(C.jsxs)("header",{className:G.a.chartSectionHeader,children:[Object(C.jsx)("h3",{children:"\u041a\u0430\u0440\u0442\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438"}),Object(C.jsxs)("div",{children:[c>16&&Object(C.jsx)("button",{onClick:g(-2),children:Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-zoom-out",viewBox:"0 0 16 16",children:[Object(C.jsx)("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}),Object(C.jsx)("path",{d:"M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"}),Object(C.jsx)("path",{fillRule:"evenodd",d:"M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"})]})}),Object(C.jsx)("button",{onClick:g(2),children:Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-zoom-in",viewBox:"0 0 16 16",children:[Object(C.jsx)("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}),Object(C.jsx)("path",{d:"M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"}),Object(C.jsx)("path",{fillRule:"evenodd",d:"M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"})]})})]})]}),Object(C.jsxs)("div",{className:G.a.chart,style:{fontSize:c+"px"},children:[Object(C.jsxs)("div",{className:G.a.daysName,children:[Object(C.jsx)("div",{children:Object(C.jsx)("small",{children:"\u043f\u043d"})}),Object(C.jsx)("div",{children:Object(C.jsx)("small",{children:"\u0432\u0442"})}),Object(C.jsx)("div",{children:Object(C.jsx)("small",{children:"\u0441\u0440"})}),Object(C.jsx)("div",{children:Object(C.jsx)("small",{children:"\u0447\u0442"})}),Object(C.jsx)("div",{children:Object(C.jsx)("small",{children:"\u043f\u0442"})}),Object(C.jsx)("div",{children:Object(C.jsx)("small",{children:"\u0441\u0431"})}),Object(C.jsx)("div",{children:Object(C.jsx)("small",{children:"\u0432\u0441"})})]}),Object(C.jsxs)("div",{className:G.a.main,children:[Object(C.jsx)("div",{className:G.a.monthsBar,children:f.map((function(e){return Object(C.jsx)("div",{className:G.a.month+" "+G.a["m"+e.w],children:Object(C.jsx)("small",{children:e.m})},e.m)}))}),Object(C.jsxs)("div",{className:G.a.container,children:[h>0&&new Array(h).fill(!0).map((function(e,t){return Object(C.jsx)("div",{className:G.a.empty_point},t)})),j.map((function(e,t){return Object(C.jsx)("div",{title:new Date(e.date),className:e.cou>0?G.a.point:G.a.empty_point,style:e.dist>0?{backgroundColor:"rgba(252,82,0,".concat(e.dist/x,")")}:{},onClick:e.dist>0?function(){return function(e){te({children:Object(C.jsx)("div",{children:e.acts.map((function(e){return Object(C.jsx)(J,{activity:e},e.id)}))})})}(e)}:function(){},children:Object(C.jsx)("small",{children:new Date(e.date).getDate()})},e.date)}))]})]})]})]})},re=n(16),ce=n.n(re),se=function(e){var t=e.title,n=e.children,a=e.unit;return Object(C.jsxs)("div",{className:ce.a.card,children:[Object(C.jsx)("h3",{className:ce.a.cardTitle,children:t}),Object(C.jsxs)("div",{className:ce.a.cardContent,children:[n,a&&Object(C.jsxs)(C.Fragment,{children:["\u2009",Object(C.jsx)("small",{children:a})]})]})]})},ie=n(22),oe=n.n(ie),le=function(e){var t=e.distance,n=e.elev_high,a=e.elev_low,r=e.moving_time,c=U(t,!0),s=Object(u.a)(c,2),i=s[0],o=s[1],l=U(n,!0),d=Object(u.a)(l,2),h=d[0],j=d[1],f=U(a,!0),m=Object(u.a)(f,2),b=m[0],v=m[1];return Object(C.jsxs)("section",{className:oe.a.widgetContainer,children:[Object(C.jsx)(se,{title:"\u0414\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044f",unit:o,children:i}),Object(C.jsx)(se,{title:"\u041d\u0430\u0431\u043e\u0440",unit:j,children:h}),Object(C.jsx)(se,{title:"\u0421\u0431\u0440\u043e\u0441",unit:v,children:b}),Object(C.jsx)(se,{title:"\u0412 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0438",unit:"\u0447",children:(r/60/60).toFixed(2)})]})},ue=n(23),de=n.n(ue),he=function(){return Object(C.jsxs)("div",{className:de.a.loader,children:[Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{})]})},je=(n(36),n(37),n(38),n.p+"static/media/long-512_orange.6e6363f9.png"),fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"stravastat",n='\n<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n<gpx xmlns="http://www.topografix.com/GPX/1/1" creator="https://stravastat.github.io" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" version="1.1">\n    <metadata>\n        <time>2021-09-15T19:05:49.078Z</time>\n    </metadata>\n    <trk>\n        <name>'.concat(t,"</name>\n        <trkseg>\n            ").concat(e.map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return'<trkpt lat="'.concat(n,'" lon="').concat(a,'"><time>1970-01-01T00:00:01.000Z</time></trkpt>')})).join("\r\n"),"\n        </trkseg>\n    </trk>\n</gpx>"),a="data:application/gpx+xml;charset=utf-8,"+n.trim();return a},me=function(e){var t=e.map.summary_polyline,n=document.createElement("div");n.innerText="".concat(new Date(Date.parse(e.start_date_local)-1e3*e.utc_offset).toLocaleString(),"\n                    ").concat(e.name," (").concat(U(e.distance),")");var a=document.createElement("footer");if(a.style.marginTop="12px",null===t||void 0===t?void 0:t.length){var r=document.createElement("button");if(r.innerText="\u21e9 GPX",r.style.marginRight="10px",r.onclick=function(){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"stravastat",n=fe(e,t),a=document.createElement("a");a.download="".concat(t,".gpx"),a.href=n,a.click()}(A.a.decode(t),"".concat(e.name," ").concat(U(e.distance)))},a.appendChild(r),window.navigator.canShare){var c=document.createElement("button");c.innerText="Share",c.style.marginRight="10px",c.onclick=function(){(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"stravastat";return fetch(fe(e,t)).then((function(e){return e.blob()})).then((function(e){return new File([e],t,{type:"application/gpx+xml"})}))})(A.a.decode(t),"".concat(e.name," ").concat(U(e.distance))).then((function(t){var n={files:[t]};navigator.canShare&&navigator.canShare(n)?(n.title="".concat(e.name," ").concat(U(e.distance)),console.log(n),navigator.share(n).then((function(){return console.log("Share was successful.")})).catch((function(e){return console.log("Sharing failed",e)}))):console.log("Your system doesn't support sharing files.")}))},a.appendChild(c)}}var s=document.createElement("a");return s.href="https://www.strava.com/activities/".concat(e.id),s.rel="noreferrer",s._target="_blank",s.innerText="\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 Strava",a.appendChild(s),n.appendChild(a),n},be=new Date,ve=new Date(be.getFullYear(),0,1,4,0,0,1),pe=new Date(be.getFullYear(),11,31,23,59,59,999),xe=function(e){var t=e.token,n=Object(a.useState)(localStorage.getItem("stravastatD1")||ve.toISOString().substr(0,10)),r=Object(u.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(localStorage.getItem("stravastatD2")||pe.toISOString().substr(0,10)),d=Object(u.a)(i,2),h=d[0],j=d[1],f=Object(a.useState)([]),m=Object(u.a)(f,2),b=m[0],v=m[1],p=Object(a.useState)(!1),x=Object(u.a)(p,2),g=x[0],_=x[1],O=Object(a.useState)(localStorage.getItem("stravastatType")||""),w=Object(u.a)(O,2),y=w[0],S=w[1],k=Object(a.useState)(null),D=Object(u.a)(k,2),T=D[0],P=D[1],z=Object(a.useRef)(),R=Object(a.useRef)(),I=Object(a.useContext)(Y);Object(a.useEffect)((function(){L.getAllActivity().then((function(e){P(e),e.length||V(!0)}))}),[V]),Object(a.useEffect)((function(){return localStorage.setItem("stravastatD1",c)}),[c]),Object(a.useEffect)((function(){return localStorage.setItem("stravastatD2",h)}),[h]),Object(a.useEffect)((function(){return localStorage.setItem("stravastatType",y)}),[y]),Object(a.useEffect)((function(){(null===T||void 0===T?void 0:T.length)&&v(T.reduce((function(e,t){var n=t.type;return Object(N.a)(Object(N.a)({},e),{},Object(F.a)({},n,(e[n]||0)+1))}),{}))}),[T]),Object(a.useEffect)((function(){if(null===R||void 0===R?void 0:R.current){(null===z||void 0===z?void 0:z.current)||(z.current=E.map(R.current,{fullscreenControl:{pseudoFullscreen:!1}}).setView([53.20066,45.00464],12),E.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:' | <a href="http://openstreetmap.org">OpenStreetMap</a> | <b><a href="https://stravastat.github.io">stravastat.github.io</a></b>',maxZoom:20,id:"osm"}).addTo(z.current),E.Control.Watermark=E.Control.extend({onAdd:function(e){var t=E.DomUtil.create("img");return t.src=je,t.style.height="24px",t.style.opacity="0.64",t},onRemove:function(e){}}),E.control.watermark=function(e){return new E.Control.Watermark(e)},E.control.watermark({position:"bottomleft"}).addTo(z.current));var e,t=[];(e=z.current).eachLayer((function(t){var n=!(t.getAttribution&&t.getAttribution()),a=!t.getAttribution;(n||a)&&e.removeLayer(t)}));var n=T&&T.filter((function(e){var t=Date.parse(e.start_date_local),n=Date.parse(c),a=Date.parse(h);return(!y||e.type===y)&&t>=n&&t<=a}));null===n||void 0===n||n.forEach((function(e){var n=e.map.summary_polyline;if(null===n||void 0===n?void 0:n.length){var a=A.a.decode(n);E.polyline(a).setStyle({color:"rgba(255, 0, 0,0.5)"}).bindPopup(me(e)).addTo(z.current),t.push(a)}}));var a=E.latLngBounds(t);(null===t||void 0===t?void 0:t.length)&&z.current.fitBounds(a)}}),[R,T,y,c,h]);var B=T&&T.filter((function(e){var t=Date.parse(e.start_date_local),n=Date.parse(c),a=Date.parse(h);return(!y||e.type===y)&&t>=n&&t<=a})),U=null===B||void 0===B?void 0:B.reduce((function(e,t){return{distance:e.distance+t.distance,elev_high:e.elev_high+t.elev_high||0,elev_low:e.elev_low+t.elev_low||0,elapsed_time:e.elapsed_time+t.elapsed_time,moving_time:e.moving_time+t.moving_time}}),{distance:0,elev_high:0,elev_low:0,elapsed_time:0,moving_time:0}),H=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,e.next=3,K();case 3:s(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,e.next=3,K();case 3:j(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=Object(a.useCallback)(Object(l.a)(o.a.mark((function e(){var n,a,r,c,s,i,l=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=l.length>0&&void 0!==l[0]&&l[0],_(!0),c=(null===(n=r=T)||void 0===n?void 0:n.length)?new Date(Date.parse(r[r.length-1].start_date)):new Date(Date.parse(I.created_at)),s=0;case 5:if(!(0===s||(null===(i=r)||void 0===i?void 0:i.length)>0)){e.next=17;break}return s++,console.log("page",s),e.next=10,M(t,Math.floor(c.getTime()/1e3),Math.floor((new Date).getTime()/1e3),s,50);case 10:return r=e.sent,console.time("addDB"),e.next=14,L.addActivities(r).catch((function(e){return console.error(e)}));case 14:console.timeEnd("addDB"),e.next=5;break;case 17:a&&window.location.reload(),_(!1);case 19:case"end":return e.stop()}}),e)}))),[T,t]);return g&&!(null===T||void 0===T?void 0:T.length)?Object(C.jsxs)("div",{className:X.a.loader,children:[Object(C.jsx)(he,{}),Object(C.jsxs)("p",{align:"center",children:["\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",Object(C.jsx)("br",{}),"\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0435\u0439"]})]}):Object(C.jsxs)("div",{children:[Object(C.jsx)("button",{className:X.a.floatButton,disabled:g,onClick:V,children:Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16",children:[Object(C.jsx)("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),Object(C.jsx)("path",{d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})]})}),Object(C.jsxs)("div",{className:X.a.form,children:[Object(C.jsxs)("div",{className:X.a.dates,children:[Object(C.jsx)("input",{type:"date",value:c,min:I.created_at.substr(0,10),max:h.substr(0,10),onChange:H}),"-",Object(C.jsx)("input",{type:"date",value:h,min:c.substr(0,10),max:(new Date).toISOString().substr(0,10),onChange:q})]})," \xa0 ",Object(C.jsxs)("select",{onChange:function(e){return S(e.target.value)},value:y,children:[Object(C.jsx)("option",{value:"",children:"\u0412\u0441\u0435 \u0432\u0438\u0434\u044b \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0435\u0439"}),b&&Object.entries(b).map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(C.jsxs)("option",{value:n,children:[n," (",a,")"]},n)}))]})]}),U&&Object(C.jsx)(le,{distance:U.distance,elev_high:U.elev_high,elev_low:U.elev_low,moving_time:U.moving_time}),(null===B||void 0===B?void 0:B.length)>0&&Object(C.jsx)(ae,{activities:B}),!T&&Object(C.jsx)("div",{className:X.a.loader,children:Object(C.jsx)(he,{})}),B&&Object(C.jsx)("div",{ref:R,style:{height:"300px"}}),Object(C.jsx)("section",{children:B&&B.map((function(e){return Object(C.jsx)(J,{activity:e},e.id)}))})]})},ge=n(24),_e=n.n(ge),Oe=function(e){var t=e.children,n=e.className;return Object(C.jsx)("section",{className:[_e.a.fullScreen,n].join(" "),children:t})},we=function(){return Object(C.jsx)(Oe,{children:Object(C.jsxs)("p",{align:"center",children:["\u042d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043a\u0430\u0436\u0435\u0442",Object(C.jsx)("br",{}),"\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u0432\u0430\u0448\u0438\u0445 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0435\u0439",Object(C.jsx)("br",{}),"\u0432 \u043d\u043e\u0432\u043e\u043c \u0432\u0438\u0434\u0435 \ud83d\ude0e",Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"\u0414\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u044f \u043d\u0443\u0436\u043d\u043e",Object(C.jsx)("br",{}),Object(C.jsx)("button",{className:"bigButton",onClick:function(){return window.location.href=v()},children:"\u0412\u043e\u0439\u0442\u0438 \u0432 Strava"})]})})},ye=n(12),Se=n.n(ye),ke=function(e){var t=e.onClose,n=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.target.disabled=!0,e.next=3,O();case 3:return e.next=5,L.clear();case 5:window.location.reload();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)("div",{className:Se.a.menu,children:[Object(C.jsxs)("header",{className:Se.a.header,children:[Object(C.jsx)("strong",{children:"STRAVASTAT"}),Object(C.jsx)("button",{onClick:t,children:"\xd7"})]}),Object(C.jsxs)("section",{className:Se.a.content,children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{children:Object(C.jsx)("b",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a Strava"})}),Object(C.jsxs)("p",{children:["\u041c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f:",Object(C.jsxs)("ul",{children:[Object(C.jsxs)("li",{children:["\u041a\u0430\u043a \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 ",Object(C.jsx)("a",{href:"https://stravastat.github.io/",target:"_blank",children:"stravastat.github.io"})," \u043d\u0430 \u043b\u044e\u0431\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435"]}),Object(C.jsxs)("li",{children:["\u041a\u0430\u043a \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043d\u043e\u0435 \u0432\u0435\u0431 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 (PWA) \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c\u043e\u0435 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0441\u0442\u0432\u043e (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d \u043d\u0430 android)",Object(C.jsx)("br",{}),Object(C.jsxs)("small",{children:["\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441 \u0441\u0430\u0439\u0442\u0430 ",Object(C.jsx)("a",{href:"https://stravastat.github.io/",target:"_blank",children:"stravastat.github.io"})," \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0432 ",Object(C.jsx)("b",{children:"Stravastat"})," \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 "]})]})]})]}),Object(C.jsxs)("p",{children:["\u0421\u0435\u0440\u0432\u0438\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044f\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ",Object(C.jsx)("a",{href:"https://www.strava.com/",target:"_blank",children:"www.strava.com"})]}),Object(C.jsxs)("p",{children:["\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u0430\u0436\u0435 ",Object(C.jsx)("b",{children:"offline"})," ",Object(C.jsx)("br",{}),Object(C.jsxs)("small",{children:["\u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f ",Object(C.jsx)("a",{href:"https://osmand.net/ru/",target:"_blank",children:"osmand"})," \u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043a\u0430\u0440\u0442\u0430\u043c\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u0442\u0440\u0435\u043a\u0438 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a \u043d\u0430 \u043a\u0430\u0440\u0442\u0435 \u0431\u0435\u0437 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0443"]})]}),Object(C.jsxs)("p",{children:["Based on API ",Object(C.jsx)("a",{href:"https://www.strava.com/",target:"_blank",children:"strava"})," and ",Object(C.jsx)("a",{href:"https://www.openstreetmap.org/",target:"_blank",children:"openstreetmap"})]})]}),window.navigator.share&&Object(C.jsx)("button",{onClick:function(){navigator.share({title:"stravastat",text:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a Strava",url:"https://stravastat.github.io/"}).then((function(){console.log("Shareing successfull")})).catch((function(){console.log("Sharing failed")}))},children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"})]}),Object(C.jsxs)("footer",{className:Se.a.footer,children:[Object(C.jsx)("button",{onClick:n,style:{backgroundColor:"#adadad",borderColor:"#777777"},children:"\u0412\u044b\u0439\u0442\u0438 \u0438 \u0440\u0430\u0437\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441 \u0432 strava"}),"2021 ",Object(C.jsxs)("p",{children:["\xa9 Created by ",Object(C.jsx)("a",{href:"https://www.strava.com/athletes/12602406",target:"_blank",children:"Fedoseev Nikolay"})]})]})]})};var Ce=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!0),s=Object(u.a)(c,2),i=s[0],d=s[1],h=Object(a.useState)(!0),j=Object(u.a)(h,2),f=j[0],m=j[1],b=Object(a.useState)(null),x=Object(u.a)(b,2),_=x[0],O=x[1];return Object(a.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("code");if(null===e||void 0===e?void 0:e.length)return function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.prev=1,t.next=4,g(e);case 4:window.history.pushState({},"","/"),window.location.reload(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),O(t.t0.message),window.location.href=v();case 12:return t.prev=12,d(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})));return function(){return t.apply(this,arguments)}}()();(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,p();case 4:t=e.sent,r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){m(!0),L.init("stravastat",1).then((function(){})).catch((function(){return O("\u041e\u0448\u0438\u0431\u043a\u0430 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0411\u0414")})).finally((function(){return m(!1)}))}),[]),i||f?Object(C.jsx)(Oe,{children:Object(C.jsx)(he,{})}):Object(C.jsxs)("div",{className:"App",children:[_&&Object(C.jsx)("p",{children:_}),n&&Object(C.jsxs)(Y.Provider,{value:y(),children:[Object(C.jsxs)("header",{className:"header",children:[Object(C.jsx)(D,{}),Object(C.jsx)("button",{onClick:function(){te({children:function(e){return Object(C.jsx)(ke,{onClose:e})}})},children:"\u2630"})]}),Object(C.jsx)(xe,{token:n})]}),!n&&Object(C.jsx)(we,{})]})};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(Ce,{})}),document.getElementById("root"))}],[[39,1,2]]]);
//# sourceMappingURL=main.3735bb77.chunk.js.map