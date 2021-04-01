(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{26:function(n){n.exports=JSON.parse('[{"title":"React YouTube Playlist","href":"https://github.com/DavidDionise/react-youtube-playlist","description":"React wrapper around the YouTube iframe API for selcting and playing videos from a YouTube playlist"},{"title":"Flow - Static Type Reflection","href":"https://github.com/DavidDionise/babel-plugin-flow-type-getter","description":"Babel plugin that enables access to a classes property types before class instantiation"},{"title":"Material-UI Super Select","href":"https://github.com/DavidDionise/react-material-ui-super-select#readme","description":"Wrapper around Material-UI select that adds multi-value select and dynimac option creation"},{"title":"Schema-Llama","href":"https://www.npmjs.com/package/schema-llama#api","description":"Run-time type checking for Js ES6 class properties"},{"title":"React Google Maps","href":"https://github.com/hailtrace/google-react-maps#readme","description":"React wrapper around the Google Maps Js SDK"}]')},32:function(n,t,e){},33:function(n,t,e){},50:function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i),r=e(13),o=e.n(r),c=(e(32),e(2)),s=e(5),u=(e(33),e(3)),l=e(6);function d(n,t){return Array(t-n).fill(null).map((function(t,e){return e+n}))}function h(n){var t=G.time.facetDurations,e=b(n);return d(e,t[n]+e).map((function(n){return n%24}))}function b(n){var t=G.time,e=t.morningHour,i=t.facetDurations;switch(n){case p.MORNING:return e;case p.MID_DAY:return b(p.MORNING)+i[p.MORNING];case p.EVENING:return b(p.MID_DAY)+i[p.MID_DAY];case p.NIGHT:return b(p.EVENING)+i[p.EVENING]}}var p,m=e(1);!function(n){n[n.MORNING=0]="MORNING",n[n.MID_DAY=1]="MID_DAY",n[n.EVENING=2]="EVENING",n[n.NIGHT=3]="NIGHT"}(p||(p={}));var j,f,O=p.NIGHT,x=Object(i.createContext)({hour:23,facet:O});function g(n){var t=Object(i.useState)(23),e=Object(s.a)(t,2),a=e[0],r=e[1],o=Object(i.useState)(O),c=Object(s.a)(o,2),u=c[0],l=c[1];Object(i.useEffect)((function(){var n=setTimeout((function(){var n=(a+1)%24;r(n),l(function(n){switch(!0){case h(p.MORNING).includes(n):return p.MORNING;case h(p.MID_DAY).includes(n):return p.MID_DAY;case h(p.EVENING).includes(n):return p.EVENING;case h(p.NIGHT).includes(n):return p.NIGHT;default:throw new Error("No day facet found for hour ".concat(n))}}(n))}),1e3*G.time.hourDuration);return function(){return clearTimeout(n)}}),[a]);var d={hour:a,facet:u};return Object(m.jsx)(x.Provider,{value:d,children:n.children})}!function(n){n[n.NONE=0]="NONE",n[n.RAIN=1]="RAIN",n[n.SNOW=2]="SNOW"}(j||(j={})),function(n){n[n.RAIN=0]="RAIN",n[n.SNOW=1]="SNOW"}(f||(f={}));var y,v,N,w,E,D=j.NONE,T=a.a.createContext({weatherType:D});function I(n){var t=Object(i.useContext)(x),e=Object(i.useState)(D),a=Object(s.a)(e,2),r=a[0],o=a[1];return Object(i.useEffect)((function(){switch(t.facet){case p.NIGHT:o(j.RAIN);break;case p.MID_DAY:case p.EVENING:o(j.SNOW);break;default:o(j.NONE)}}),[t.facet]),Object(m.jsx)(T.Provider,{value:{weatherType:r},children:n.children})}!function(n){n[n.MOBILE=480]="MOBILE",n[n.TABLET=768]="TABLET",n[n.DESKTOP_SMALL=1024]="DESKTOP_SMALL",n[n.DESKTOP_LARGE=1366]="DESKTOP_LARGE"}(y||(y={}));var S,L,A,G={ui:{maxWidth:1680,breakpoints:(v={},Object(l.a)(v,y.MOBILE,414),Object(l.a)(v,y.TABLET,768),Object(l.a)(v,y.DESKTOP_SMALL,1024),Object(l.a)(v,y.DESKTOP_LARGE,1440),v),heroImageWidths:(N={},Object(l.a)(N,y.MOBILE,768),Object(l.a)(N,y.TABLET,1024),Object(l.a)(N,y.DESKTOP_SMALL,1440),Object(l.a)(N,y.DESKTOP_LARGE,1680),N),colors:{primary:{dark:"hsl(221, 44%, 28%)",med:"hsl(220, 44%, 36%)",light:"hsl(210, 66%, 70%)"},secondary:{light:"hsl(308, 96%, 90%)",med:"hsl(308, 96%, 41%)",dark:"hsl(308, 86%, 20%)"}},fonts:{title:"Bungee Hairline",regular:"Roboto"}},condensation:(w={},Object(l.a)(w,f.SNOW,{minQuantity:70,maxQuantity:90,dimensions:d(3,8).map((function(n){return{width:n,height:n}})),minFallDuration:4,maxFallDuration:12,numAnimations:10,minHorizontalDisplacement:0,maxHorizontalDisplacement:300,maxDelay:5,minLightness:90,maxLightness:100,minOpacity:.85,maxOpacity:1}),Object(l.a)(w,f.RAIN,{minQuantity:150,maxQuantity:140,dimensions:[{width:.3,height:20},{width:.4,height:30},{width:.6,height:40},{width:.6,height:50}],minFallDuration:1.5,maxFallDuration:2.5,numAnimations:20,minHorizontalDisplacement:0,maxHorizontalDisplacement:0,maxDelay:2,minLightness:75,maxLightness:95,minOpacity:.1,maxOpacity:.6}),w),time:{hourDuration:2.5,weatherTransitionDuration:5,morningHour:4,facetDurations:(E={},Object(l.a)(E,p.MORNING,3),Object(l.a)(E,p.MID_DAY,5),Object(l.a)(E,p.EVENING,7),Object(l.a)(E,p.NIGHT,9),E)}},M=e(8),R=e.n(M);function H(){var n=Object(i.useContext)(x),t=Object(i.useState)(!0),e=Object(s.a)(t,2),a=e[0],r=e[1],o=[p.EVENING,p.NIGHT].includes(n.facet);return Object(i.useEffect)((function(){a&&n.facet===p.NIGHT&&r(!1)}),[n.facet,a]),Object(m.jsx)(P,{className:R()({dark:o,firstDay:a})})}var k,_,z=Object(u.b)(S||(S=Object(c.a)(["\n  from {\n    background-color: ",";\n  }\n\n  to {\n    background-color: ",";\n  }\n"])),G.ui.colors.secondary.light,G.ui.colors.secondary.dark),B=Object(u.b)(L||(L=Object(c.a)(["\n  from {\n    background-color: ",";\n  }\n\n  to {\n    background-color: ",";\n  }\n"])),G.ui.colors.secondary.dark,G.ui.colors.secondary.light),P=u.a.div(A||(A=Object(c.a)(["\n  height: 100%;\n  background-color: ",";\n  &:not(.firstDay) {\n    animation: ","\n      ","s\n      forwards;\n  }\n\n  &.dark {\n    animation: ","\n      ","s\n      forwards;\n  }\n"])),G.ui.colors.secondary.light,B,G.time.facetDurations[p.MORNING]*G.time.hourDuration,z,G.time.facetDurations[p.EVENING]*G.time.hourDuration);function C(n,t){return Math.floor(Math.random()*(t-n+1)+n)}function W(n,t){return Math.random()*(t-n)+n}function K(n){var t=Object(i.useMemo)((function(){return function(n,t,e){var i=G.condensation[t],a=i.dimensions,r=i.minQuantity,o=i.maxQuantity,s=i.minFallDuration,l=i.maxFallDuration,h=i.maxDelay,b=function(n,t){var e=G.condensation[t],i=e.numAnimations,a=e.minHorizontalDisplacement,r=e.maxHorizontalDisplacement;return d(0,i).map((function(t){var e="".concat(t%2===0?"-":"").concat(C(a,r),"px");return Object(u.b)(k||(k=Object(c.a)(["\n        from {\n          transform: translate(0, -150px);\n        }\n\n        to {\n          transform: translate(",", ","px)\n        }\n      "])),e,n+20)}))}(n,t);return d(0,C(r,o)).map((function(n,i){var r=C(0,a.length-1),o=a[r],c=o.width,u=o.height,d=W(s,l),p=C(1,b.length)-1,j=W(0,h);return Object(m.jsx)(V,{animation:b[p],width:c,height:u,duration:d,type:t,delay:j,styledComponent:e},i)}))}(n.containerHeight,n.type,n.styledComponent)}),[n.containerHeight,n.type,n.styledComponent]);return Object(m.jsx)(m.Fragment,{children:t})}function V(n){var t=Object(i.useState)(null),e=Object(s.a)(t,2),a=e[0],r=e[1],o=Object(i.useState)(C(0,window.innerWidth)),c=Object(s.a)(o,2),u=c[0],l=c[1];Object(i.useEffect)((function(){function n(){l(W(0,window.innerWidth))}return a&&a.addEventListener("animationiteration",n),function(){return null===a||void 0===a?void 0:a.addEventListener("animationiteration",n)}}),[a]);var d=function(n){var t=n.minHue,e=n.maxHue,i=n.minSaturation,a=n.maxSaturation,r=n.minLightness,o=n.maxLightness,c=null!=t?W(t,e||t):0,s=null!=i?W(i,a||i):0,u=null!=r?W(r,o||r):100;return"hsl(".concat(c,", ").concat(s,"%, ").concat(u,"%)")}(G.condensation[n.type]),h=function(n){var t=n.minOpacity,e=n.maxOpacity;return null!=t?W(t,e||t):1}(G.condensation[n.type]);return Object(m.jsx)(n.styledComponent,{ref:r,animation:n.animation,duration:n.duration,delay:n.delay,style:{left:"".concat(u,"px"),width:"".concat(n.width,"px"),height:"".concat(n.height,"px"),transform:"translateY(-".concat(n.height+20,"px"),backgroundColor:d,opacity:h}})}function Y(n){return Object(m.jsx)(K,{containerHeight:n.containerHeight,styledComponent:Q,type:f.RAIN})}var F,Q=u.a.div(_||(_=Object(c.a)(["\n  position: absolute;\n  animation: ","\n    ","s infinite linear\n    ","s;\n"])),(function(n){return n.animation}),(function(n){return n.duration}),(function(n){return n.delay}));function J(n){return Object(m.jsx)(K,{containerHeight:n.containerHeight,type:f.SNOW,styledComponent:$})}var U,q,X,Z,$=u.a.div(F||(F=Object(c.a)(["\n  position: absolute;\n  border-radius: 50%;\n  animation: ","\n    ","s infinite linear\n    ","s;\n  box-shadow: 0 0 8px #fff;\n"])),(function(n){return n.animation}),(function(n){return n.duration}),(function(n){return n.delay})),nn=e(24);function tn(n){var t=Object(i.useContext)(T).weatherType,e=G.time.weatherTransitionDuration;return Object(m.jsx)(an,{children:Object(m.jsx)(nn.CSSTransitionGroup,{transitionName:"weather",transitionAppear:!0,transitionEnterTimeout:1e3*e,transitionAppearTimeout:1e3*e,transitionLeaveTimeout:1e3*e,children:en(n.containerHeight,t)})})}function en(n,t){var e=G.time.weatherTransitionDuration;switch(t){case j.RAIN:return Object(m.jsx)(rn,{transitionDuration:e,children:Object(m.jsx)(Y,{containerHeight:n})},"rain");case j.SNOW:return Object(m.jsx)(rn,{transitionDuration:e,children:Object(m.jsx)(J,{containerHeight:n})},"snow");default:return Object(m.jsx)(a.a.Fragment,{},"clear")}}var an=u.a.div(U||(U=Object(c.a)(["\n  position: absolute;\n  z-index: 100;\n  width: 20px;\n  height: 20px;\n"]))),rn=(u.a.button(q||(q=Object(c.a)(["\n  position: absolute;\n  z-index: 100;\n"]))),u.a.div(X||(X=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 400px;\n  background: palevioletred;\n  z-index: 60;\n\n  &.other-weather {\n    background: gold;\n  }\n"]))),u.a.div(Z||(Z=Object(c.a)(["\n  &.weather-enter {\n    opacity: 0;\n  }\n\n  &.weather-enter.weather-enter-active {\n    opacity: 1;\n    transition: opacity ","s\n      ease-in;\n  }\n\n  &.weather-leave {\n    opacity: 1;\n  }\n\n  &.weather-leave.weather-leave-active {\n    opacity: 0;\n    transition: opacity\n      ","s ease-in;\n  }\n\n  &.weather-appear {\n    opacity: 0;\n  }\n\n  &.weather-appear.weather-appear-active {\n    opacity: 1;\n    transition: opacity ","s\n      ease-in;\n  }\n"])),(function(n){return n.transitionDuration}),(function(n){return n.transitionDuration/2}),(function(n){return n.transitionDuration})));function on(n,t){var e=n?"(min-width: ".concat(n,"px)"):null,i=t?"(max-width: ".concat(t,"px)"):null;switch(!0){case null==n&&null==t:throw new Error("Must include either min or max for media query");case null==n:return"@media ".concat(i);case null==t:return"@media ".concat(e);default:return"@media ".concat(e," and ").concat(i)}}var cn,sn,un,ln,dn,hn,bn,pn,mn=e.p+"static/media/mountains.ed04ea77.png";function jn(){var n=Object(i.useState)(null),t=Object(s.a)(n,2),e=t[0],a=t[1],r=Object(i.useState)(!0),o=Object(s.a)(r,2),c=o[0],u=o[1],l=Object(i.useContext)(x),d=[p.EVENING,p.NIGHT].includes(l.facet);return Object(i.useEffect)((function(){c&&l.facet===p.NIGHT&&u(!1)}),[l.facet,c]),Object(m.jsxs)(En,{ref:a,children:[Object(m.jsx)(wn,{children:Object(m.jsx)(H,{})}),Object(m.jsx)(Ln,{className:d?"night":"",children:"David Dionise"}),e?Object(m.jsx)(tn,{containerHeight:e.clientHeight}):null,Object(m.jsx)(Tn,{children:Object(m.jsx)(An,{src:mn,className:R()({dark:d,firstDay:c})})}),Object(m.jsx)("img",{src:"trees.png"})]})}var fn,On,xn,gn,yn,vn,Nn,wn=u.a.div(cn||(cn=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n"]))),En=u.a.div(sn||(sn=Object(c.a)(["\n  position: relative;\n  width: 100%;\n  margin: auto;\n  height: 736px;\n  z-index: 0;\n  overflow: hidden;\n\n  "," {\n    height: 290px;\n  }\n\n  "," {\n    height: 520px;\n  }\n"])),on(null,y.TABLET),on(y.TABLET,y.DESKTOP_SMALL)),Dn=u.a.div(un||(un=Object(c.a)(["\n  width: ","px;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n\n  "," {\n    width: ","px;\n    top: 28px;\n  }\n\n  "," {\n    width: ","px;\n    top: 69px;\n  }\n"])),G.ui.heroImageWidths[y.DESKTOP_LARGE],on(null,y.TABLET),G.ui.heroImageWidths[y.MOBILE],on(y.TABLET,y.DESKTOP_SMALL),G.ui.heroImageWidths[y.TABLET]),Tn=Object(u.a)(Dn)(ln||(ln=Object(c.a)(["\n  position: absolute;\n  z-index: 3;\n"]))),In=Object(u.b)(dn||(dn=Object(c.a)(["\n  from {\n    filter: brightness(100%);\n  }\n\n  to {\n    filter: brightness(50%);\n  }\n"]))),Sn=Object(u.b)(hn||(hn=Object(c.a)(["\n  from {\n    filter: brightness(50%);\n  }\n\n  to {\n    filter: brightness(100%);\n  }\n"]))),Ln=u.a.h1(bn||(bn=Object(c.a)(["\n  font-family: ",";\n  font-weight: bolder;\n  position: absolute;\n  z-index: 4;\n  margin: 0;\n  color: ",";\n  transition: color ","s;\n\n  font-size: 2.5em;\n  top: 10px;\n  left: 30px;\n\n  &.night {\n    color: ",";\n  }\n\n  "," {\n    font-size: 2em;\n    width: 50%;\n  }\n\n  "," {\n    font-size: 2.5em;\n    top: 30px;\n  }\n"])),G.ui.fonts.title,G.ui.colors.secondary.med,3*G.time.hourDuration,G.ui.colors.secondary.light,on(null,y.TABLET),on(y.TABLET,y.DESKTOP_SMALL)),An=u.a.img(pn||(pn=Object(c.a)(["\n  width: 100%;\n  line-height: 0;\n  &:not(.firstDay) {\n    animation: ","\n      ","s\n      forwards;\n  }\n\n  &.dark {\n    animation: ","\n      ","s\n      forwards;\n  }\n"])),Sn,G.time.facetDurations[p.MORNING]*G.time.hourDuration,In,G.time.facetDurations[p.EVENING]*G.time.hourDuration),Gn=e(25),Mn=e(26);function Rn(n){var t=Object(i.useState)(null),e=Object(s.a)(t,2),a=e[0],r=e[1],o=Object(i.useState)(!1),c=Object(s.a)(o,2),u=c[0],l=c[1],d=Object(i.useContext)(ot);return Object(i.useEffect)((function(){function n(){a&&d.appRef&&(a.getBoundingClientRect().y<window.innerHeight&&l(!0))}return d.appRef&&!u&&d.appRef.addEventListener("scroll",n),function(){d.appRef&&!u&&d.appRef.removeEventListener("scroll",n)}}),[d.appRef,a,u]),Object(m.jsx)(Pn,{children:Object(m.jsxs)(Cn,{children:[Object(m.jsxs)(Wn,{children:[Object(m.jsx)(Kn,{target:"_blank",href:n.href,children:n.title}),Object(m.jsx)(Vn,{ref:r,className:u?"show":""})]}),Object(m.jsx)(Yn,{children:Object(m.jsx)(Fn,{children:n.description})})]})})}var Hn,kn,_n,zn,Bn,Pn=u.a.div(fn||(fn=Object(c.a)(["\n  padding: 12px 0;\n"]))),Cn=u.a.div(On||(On=Object(c.a)(["\n  width: 50%;\n  position: relative;\n  border-radius: 8px;\n  background-color: #fff;\n  padding: 0.5em;\n\n  ",' {\n    width: 100%;\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    width: calc(100% + 4px);\n    height: calc(100% + 4px);\n    z-index: -1;\n    top: -2px;\n    left: -2px;\n    border-radius: 10px;\n    background: linear-gradient(\n      -45deg,\n      ',",\n      ","\n    );\n  }\n"])),on(null,y.TABLET),G.ui.colors.primary.light,G.ui.colors.primary.med),Wn=u.a.div(xn||(xn=Object(c.a)(["\n  width: fit-content;\n"]))),Kn=u.a.a(gn||(gn=Object(c.a)(["\n  font-family: ",";\n  text-decoration: none;\n  color: ",";\n  font-weight: bold;\n  font-size: 1.5em;\n"])),G.ui.fonts.title,G.ui.colors.primary.dark),Vn=u.a.hr(yn||(yn=Object(c.a)(["\n  margin: 0;\n  width: 0;\n  border: solid "," 2px;\n  transition: width 2.5s;\n  opacity: 0;\n\n  &.show {\n    opacity: 1;\n    width: 100%;\n  }\n"])),G.ui.colors.secondary.med),Yn=u.a.div(vn||(vn=Object(c.a)([""]))),Fn=u.a.p(Nn||(Nn=Object(c.a)(["\n  font-family: ",";\n  color: ",";\n"])),G.ui.fonts.regular,G.ui.colors.primary.dark);function Qn(){return Object(m.jsxs)($n,{children:[Object(m.jsx)(nt,{children:Object(m.jsxs)(tt,{children:["Open Source Projects ",Object(m.jsx)(et,{children:"&"})," ","Contributions"]})}),Object(m.jsx)(it,{children:Mn.map((function(n){return Object(m.jsx)(Rn,Object(Gn.a)({},n),n.href)}))})]})}var Jn,Un,qn,Xn,Zn,$n=u.a.div(Hn||(Hn=Object(c.a)(["\n  padding: 24px;\n"]))),nt=u.a.div(kn||(kn=Object(c.a)(["\n  width: fit-content;\n"]))),tt=u.a.h2(_n||(_n=Object(c.a)(["\n  font-family: ",";\n  color: ",";\n  margin: 0;\n  font-size: 2em;\n\n  "," {\n    font-size: 1.5em;\n  }\n\n  "," {\n    font-size: 2em;\n  }\n"])),G.ui.fonts.title,G.ui.colors.primary.med,on(null,y.TABLET),on(y.TABLET,y.DESKTOP_SMALL)),et=u.a.span(zn||(zn=Object(c.a)(["\n  color: ",";\n"])),G.ui.colors.secondary.med),it=u.a.div(Bn||(Bn=Object(c.a)(["\n  padding-top: 3em;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n"]))),at=e(27),rt=e(15),ot=a.a.createContext({appRef:null});var ct=u.a.div(Jn||(Jn=Object(c.a)(["\n  max-width: 1680px;\n  position: relative;\n  margin: auto;\n"]))),st=u.a.div(Un||(Un=Object(c.a)(["\n  position: relative;\n  height: 100%;\n  overflow-y: scroll;\n"]))),ut=u.a.footer(qn||(qn=Object(c.a)(["\n  padding: 1.5em 30%;\n  display: flex;\n  justify-content: space-around;\n"]))),lt=u.a.span(Xn||(Xn=Object(c.a)(["\n  width: 2px;\n  line-height: 100%;\n  background-color: ",";\n"])),G.ui.colors.primary.med),dt=Object(u.a)(at.a)(Zn||(Zn=Object(c.a)(["\n  &:hover {\n    color: ",";\n  }\n"])),G.ui.colors.secondary.med),ht=function(){var n=Object(i.useState)(null),t=Object(s.a)(n,2),e=t[0],a=t[1];return Object(m.jsxs)(st,{ref:a,children:[Object(m.jsx)(ct,{children:Object(m.jsxs)(ot.Provider,{value:{appRef:e},children:[Object(m.jsx)(g,{children:Object(m.jsx)(I,{children:Object(m.jsx)(jn,{})})}),Object(m.jsx)(Qn,{})]})}),Object(m.jsxs)(ut,{children:[Object(m.jsx)("a",{href:"https://twitter.com/dionisio_dav",target:"_blank",children:Object(m.jsx)(dt,{color:G.ui.colors.primary.med,icon:rt.b,size:"lg"})}),Object(m.jsx)(lt,{}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/david-dionise-259502b0/",target:"_blank",children:Object(m.jsx)(dt,{color:G.ui.colors.primary.med,icon:rt.a,size:"lg"})})]})]})};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(ht,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.5f69a8cc.chunk.js.map