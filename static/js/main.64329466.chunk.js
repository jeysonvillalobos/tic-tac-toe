(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),i=t(7),r=t.n(i),a=(t(12),t(6)),j=t(2),l=(t(13),t(14),t(15),t(16),t(0));var o=function(e){var c=e.restart,t=e.showPopup;return Object(l.jsx)("div",{className:"Header",children:Object(l.jsxs)("header",{className:"header",children:[Object(l.jsxs)("div",{className:"div_logo",children:[Object(l.jsx)("img",{className:"logo",src:"/images/tic.png",alt:""}),Object(l.jsx)("h1",{children:"Tic tac toe"})]}),Object(l.jsxs)("ul",{className:"nav_ul",children:[Object(l.jsxs)("li",{onClick:function(){return c()},children:[Object(l.jsx)("img",{src:"/images/update-arrow.png",alt:""}),Object(l.jsx)("span",{className:"item",children:"Restart"})]}),Object(l.jsxs)("li",{onClick:function(){return t()},children:[Object(l.jsx)("img",{src:"/images/info.png",alt:""}),Object(l.jsx)("span",{className:"item",children:"About"})]})]})]})})};t(18);var u=function(e){var c=e.type,t=e.onClick;return Object(l.jsx)("div",{onClick:function(){return t()},className:"Square",children:Object(l.jsx)("span",{className:"xCircle",children:c})})};t(19),t(20);var d=function(e){var c=e.winners;return Object(l.jsxs)("div",{className:"register",children:[Object(l.jsx)("div",{className:"register_header",children:Object(l.jsx)("h2",{children:"Registers"})}),Object(l.jsxs)("div",{className:"register_main",children:[0===c.length&&Object(l.jsx)("div",{className:"register_data",children:Object(l.jsx)("ol",{children:Object(l.jsx)("li",{children:"No records"})})}),c.map((function(e,c){return Object(l.jsx)("div",{className:"register_data",children:Object(l.jsx)("ol",{children:Object(l.jsx)("li",{children:"X"===e?"Player 1":"O"===e?"Player 2":"Tie"===e&&"Tie"})})},c)}))]})]})};t(21);var b=function(e){var c=e.visibility,t=e.onClick;return Object(l.jsx)("div",{className:"popup",style:{display:c?"flex":"none"},children:Object(l.jsxs)("div",{className:"message",children:[Object(l.jsx)("div",{className:"message_header",children:Object(l.jsx)("span",{onClick:function(){return t(!1)},children:"X"})}),Object(l.jsx)("div",{className:"message_body",children:Object(l.jsx)("p",{children:"This project was created by Jeyson Villalobos."})})]})})},O=["","","","","","","","",""];var x=function(){var e=Object(n.useState)(!0),c=Object(j.a)(e,2),t=c[0],s=c[1],i=Object(n.useState)([]),r=Object(j.a)(i,2),x=r[0],h=r[1],m=Object(n.useState)(O),f=Object(j.a)(m,2),v=f[0],p=f[1],N=Object(n.useState)(!1),g=Object(j.a)(N,2),y=g[0],k=g[1],C=function(e){var c=Array.from(v);c[e]||(c[e]=t?"X":"O",p(c),s(!t))};Object(n.useEffect)((function(){var e=function(e){for(var c=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<c.length;t++){var n=Object(j.a)(c[t],3),s=n[0],i=n[1],r=n[2];if(e[s]&&e[s]===e[i]&&e[s]===e[r])return e[s]}return null}(v);e&&(w(),h([].concat(Object(a.a)(x),[e]))),v.includes("")||(w(),h([].concat(Object(a.a)(x),["Tie"])))}),[v]);var w=function(){p(O)};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{restart:function(){return w()},showPopup:function(){return k(!0)}}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"turn",children:[Object(l.jsx)("h2",{children:t?"Player 1":"Player 2"}),Object(l.jsx)("h2",{className:"type",children:t?"X":"O"})]}),Object(l.jsxs)("div",{className:"sub_container",children:[Object(l.jsx)(d,{winners:x}),Object(l.jsxs)("div",{className:"game",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(u,{type:v[0],onClick:function(){return C(0)}}),Object(l.jsx)(u,{type:v[1],onClick:function(){return C(1)}}),Object(l.jsx)(u,{type:v[2],onClick:function(){return C(2)}})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(u,{type:v[3],onClick:function(){return C(3)}}),Object(l.jsx)(u,{type:v[4],onClick:function(){return C(4)}}),Object(l.jsx)(u,{type:v[5],onClick:function(){return C(5)}})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(u,{type:v[6],onClick:function(){return C(6)}}),Object(l.jsx)(u,{type:v[7],onClick:function(){return C(7)}}),Object(l.jsx)(u,{type:v[8],onClick:function(){return C(8)}})]})]})]})]}),Object(l.jsx)(b,{visibility:y,onClick:function(e){return k(e)}})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.64329466.chunk.js.map