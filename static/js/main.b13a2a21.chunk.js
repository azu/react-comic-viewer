(this["webpackJsonpreact-comic-viewer"]=this["webpackJsonpreact-comic-viewer"]||[]).push([[0],{117:function(n,t,e){},118:function(n,t,e){"use strict";e.r(t);var i=e(2),c=e(1),r=e(39),o=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,121)).then((function(t){var e=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;e(n),i(n),c(n),r(n),o(n)}))},a=e(23),u=e(5),s=e(120),j=e(53),b=function(){var n=Object(c.useState)({windowHeight:0,windowWidth:0}),t=Object(u.a)(n,2),e=t[0],i=t[1],r=Object(s.a)((function(){i({windowHeight:window.innerHeight,windowWidth:window.innerWidth})}),100);return Object(j.a)("resize",r.callback),Object(c.useEffect)((function(){r.callback()}),[r]),e},l=e(3),f=e(4);function d(){var n=Object(l.a)(["\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  padding: 12px 12px;\n  position: absolute;\n  right: 0;\n  top: 0;\n"]);return d=function(){return n},n}function h(){var n=Object(l.a)(["\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: #ccc;\n  cursor: pointer;\n  display: grid;\n  font-size: 14px;\n  gap: 8px;\n  grid-template: auto / auto auto;\n  height: 100%;\n"]);return h=function(){return n},n}function O(){var n=Object(l.a)(["\n  display: grid;\n  gap: 8px;\n  grid-auto-flow: column;\n  height: 100%;\n"]);return O=function(){return n},n}function g(){var n=Object(l.a)(["\n  cursor: pointer;\n  max-width: 1024px;\n  transform: rotate(180deg);\n  width: 100%;\n"]);return g=function(){return n},n}function p(){var n=Object(l.a)(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n"]);return p=function(){return n},n}function x(){var n=Object(l.a)(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n"]);return x=function(){return n},n}function v(){var n=Object(l.a)(["\n  bottom: 0;\n  box-sizing: border-box;\n  height: 40px;\n  left: 0;\n  padding: 0 16px;\n  position: absolute;\n  width: 100%;\n"]);return v=function(){return n},n}function m(){var n=Object(l.a)(["\n  height: 100%;\n  object-fit: contain;\n  object-position: ",";\n  width: 100%;\n"]);return m=function(){return n},n}function w(){var n=Object(l.a)(["\n  overflow: hidden;\n  width: ",";\n"]);return w=function(){return n},n}function k(){var n=Object(l.a)(["\n  align-items: center;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  display: flex;\n  height: 100%;\n  justify-content: ",";\n  opacity: 0.5;\n  right: ",";\n  padding: 0;\n  position: absolute;\n  transition: 250ms;\n  width: calc(100% / 3);\n  :hover {\n    opacity: 1;\n  }\n  @media (max-width: 980px) {\n    opacity: 0;\n    :hover {\n      opacity: 0;\n    }\n  }\n"]);return k=function(){return n},n}function y(){var n=Object(l.a)(["\n  direction: rtl;\n  display: grid;\n  grid-auto-flow: column;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  transform: translateX(\n    calc(",")\n  );\n  transition: 250ms;\n"]);return y=function(){return n},n}function C(){var n=Object(l.a)(["\n  height: 100%;\n  position: relative;\n"]);return C=function(){return n},n}function S(){var n=Object(l.a)(["\n  background: #333;\n  color: #fff;\n  display: grid;\n  grid-template: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n  overflow: hidden;\n  position: relative;\n  transition: 250ms;\n"]);return S=function(){return n},n}var M=f.a.div(S(),(function(n){var t=n.isFullScreen;return"1fr ".concat(t?"0":"40px"," / 1fr")}),(function(n){var t=n.height,e=n.isExpansion;return"".concat(t-(e?0:95),"px")}),(function(n){var t=n.height,e=n.isExpansion;return"".concat(e?t:840,"px")}),(function(n){var t=n.isExpansion;return"".concat(t?0:440,"px")})),z=f.a.div(C()),E=f.a.div(y(),(function(n){var t=n.currentPage,e=n.pageWidth;return"".concat(t*e,"px")})),F=f.a.a(k(),(function(n){return"next"===n.navigation?"flex-start":"flex-end"}),(function(n){return"next"===n.navigation?"auto":"0"})),H=f.a.div(w(),(function(n){var t=n.width;return"".concat(t,"px")})),W=f.a.img(m(),(function(n){var t=n.isOdd;return n.isSingleView?"center":t?"left":"right"})),L=f.a.aside(v()),I=f.a.div(x()),P=f.a.div(p()),R=f.a.input(g()),T=f.a.div(O()),B=f.a.button(h()),J=f.a.button(d()),V=e(40),D=e(55),N=e.n(D),X=e(12),q=e(56),A=e(57),G=e(60),K=e(59),Q=e(58),U=e.n(Q),Y=function(n){var t=n.pages,e=n.switchingRatio,r=void 0===e?1:e,o=n.text,s=void 0===o?{expansion:"Expansion",fullScreen:"Full screen",move:"Move",normal:"Normal"}:o,j=Object(c.useMemo)((function(){return s}),[s]),l=j.expansion,f=j.fullScreen,d=j.move,h=j.normal,O=b(),g=O.windowHeight,p=O.windowWidth,x=Object(c.useState)(!1),v=Object(u.a)(x,2),m=v[0],w=v[1],k=Object(V.b)(),y=Object(c.useMemo)((function(){return Object(a.a)({},k)}),[k]),C=y.active,S=y.enter,D=y.exit,Q=Object(c.useCallback)((function(){w((function(n){return!n}))}),[]),Y=Object(c.useCallback)((function(){S()}),[S]),Z=Object(c.useCallback)((function(){D()}),[D]),$=Object(c.useMemo)((function(){return g>p*r?p:p/2}),[r,g,p]),_=Object(c.useMemo)((function(){return m?h:l}),[l,m,h]),nn=Object(c.useMemo)((function(){return m?Object(i.jsx)(X.c,{color:"#fff",size:24}):Object(i.jsx)(X.d,{color:"#fff",size:24})}),[m]),tn=Object(c.useMemo)((function(){return g>p*r}),[r,g,p]),en=Object(c.useMemo)((function(){return t.map((function(n,t){return Object(i.jsx)(H,{width:$,children:"string"===typeof n?Object(i.jsx)(A.LazyLoadComponent,{threshold:0,children:Object(i.jsx)(W,{alt:n,isOdd:!(t%2),isSingleView:tn,src:n})}):n},N()())}))}),[tn,$,t]),cn=Object(c.useState)(),rn=Object(u.a)(cn,2),on=rn[0],an=rn[1],un=Object(c.useState)(0),sn=Object(u.a)(un,2),jn=sn[0],bn=sn[1],ln=Object(c.useMemo)((function(){return tn&&jn>=t.length-1||!tn&&jn>=t.length-2}),[jn,tn,t.length]),fn=Object(c.useCallback)((function(){ln||bn((function(n){return n+(tn?1:2)}))}),[ln,tn]),dn=Object(c.useMemo)((function(){return 0===jn}),[jn]),hn=Object(c.useCallback)((function(){dn||bn((function(n){return n-(tn?1:2)}))}),[dn,tn]),On=Object(c.useState)(!1),gn=Object(u.a)(On,2),pn=gn[0],xn=gn[1],vn=Object(c.useCallback)((function(){xn(!0)}),[]),mn=Object(c.useCallback)((function(n){var t=n.currentTarget.value;bn(tn?parseInt(t,10)-1:2*(parseInt(t,10)-1))}),[tn]),wn=Object(c.useCallback)((function(){xn(!1)}),[]),kn=Object(q.a)(wn),yn=Object(u.a)(kn,1)[0],Cn=Object(K.useSwipeable)({onSwipedLeft:function(){dn||bn((function(n){return n-(tn?1:2)}))},onSwipedRight:function(){ln||bn((function(n){return n+(tn?1:2)}))}});return Object(c.useEffect)((function(){if(!C){if("boolean"!==typeof on)return;return an(void 0),void w(on)}"boolean"!==typeof on&&(an(m),w(!0))}),[C,m,on]),Object(c.useEffect)((function(){tn||bn((function(n){return 2*Math.floor(n/2)}))}),[tn]),Object(i.jsx)(U.a,{children:Object(i.jsx)(V.a,{handle:k,children:Object(i.jsxs)(M,Object(a.a)(Object(a.a)({height:g,isExpansion:m,isFullScreen:C},Cn),{},{children:[Object(i.jsxs)(z,{children:[Object(i.jsx)(E,{currentPage:jn,pageWidth:$,children:en}),ln?null:Object(i.jsx)(F,{navigation:"next",onClick:fn,children:Object(i.jsx)(X.a,{color:"#888",size:64})}),dn?null:Object(i.jsx)(F,{navigation:"prev",onClick:hn,children:Object(i.jsx)(X.b,{color:"#888",size:64})})]}),C?Object(i.jsx)(J,{onClick:Z,children:Object(i.jsx)(G.a,{color:"#fff",size:36})}):Object(i.jsx)(L,{children:pn?Object(i.jsx)(I,{ref:yn,children:Object(i.jsx)(R,{onChange:mn,max:tn?t.length:Math.ceil(t.length/2),min:1,step:1,type:"range",value:tn?jn+1:Math.floor(jn/2)+1})}):Object(i.jsxs)(P,{children:[Object(i.jsxs)(T,{children:[Object(i.jsxs)(B,{onClick:Q,children:[nn,_]}),Object(i.jsxs)(B,{onClick:Y,children:[Object(i.jsx)(X.e,{color:"#fff",size:24}),f]})]}),Object(i.jsxs)(B,{onClick:vn,children:[Object(i.jsx)(X.f,{color:"#fff",size:24}),d]})]})})]}))})})},Z=function(n){var t=n.children,e=b().windowHeight,r=Object(c.useMemo)((function(){return{minHeight:e}}),[e]);return Object(i.jsx)("div",{style:r,children:t})},$=function(){return Object(i.jsxs)(Z,{children:[Object(i.jsx)(Y,{pages:["/comics/0.jpg","/comics/1.jpg","/comics/2.jpg","/comics/3.jpg","/comics/4.jpg","/comics/5.jpg","/comics/6.jpg"],switchingRatio:.75,text:{expansion:"\u62e1\u5927",fullScreen:"\u5168\u753b\u9762",move:"\u79fb\u52d5",normal:"\u901a\u5e38"}}),Object(i.jsxs)("p",{children:["hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge",Object(i.jsx)("br",{}),"hoge"]})]})};e(117);Object(r.render)(Object(i.jsx)(c.StrictMode,{children:Object(i.jsx)($,{})}),document.getElementById("root")),o()}},[[118,1,2]]]);
//# sourceMappingURL=main.b13a2a21.chunk.js.map