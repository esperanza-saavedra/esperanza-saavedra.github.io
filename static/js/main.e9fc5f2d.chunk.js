(this["webpackJsonpesperanza-site"]=this["webpackJsonpesperanza-site"]||[]).push([[0],{52:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(38),i=n.n(r),s=(n(52),n(19)),j=n(4),o=n(2);function d(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(s.b,{to:"/",children:"Home"}),Object(o.jsx)(s.b,{to:"/matematicas",children:"Matematicas"})]})}function l(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsx)("p",{children:"Home"})]})}var b=n(34),u=n(23),O=n(73),h=n(72);function x(e){var t=e.id,n=e.numerador,c=e.denominador,a=e.changeNumerador,r=e.changeDenominador;return Object(o.jsxs)("div",{children:[Object(o.jsx)(O.a,{item:!0,children:Object(o.jsx)(h.a,{children:Object(o.jsx)("div",{className:"fraction",children:Object(o.jsx)("input",{type:"text",className:"top",value:n[t],onChange:function(e){var n=e.target.value;a(parseInt(n),t)},placeholder:"Inserta Numerador"})})})}),Object(o.jsx)(O.a,{item:!0,children:Object(o.jsx)(h.a,{children:Object(o.jsxs)("div",{className:"fraction",children:[Object(o.jsx)("span",{className:"divisor"}),Object(o.jsx)("input",{type:"text",className:"bottom",value:c[t],onChange:function(e){var n=e.target.value;r(parseInt(n),t)},placeholder:"Inserta Denominador"})]})})})]})}function m(e){var t=e.id,n=e.flag,c=e.result,a=e.changeButton;return Object(o.jsx)("div",{children:Object(o.jsx)(O.a,{item:!0,xs:3,children:Object(o.jsxs)(h.a,{justifyContent:"center",border:1,flexDirection:"row",children:[Object(o.jsx)("div",{className:"fractions",children:Object(o.jsx)("button",{onClick:function(e){var n=e.target.value;a(n,t)},children:"Obtener Resultado"})}),Object(o.jsx)("div",{children:n[t]?"".concat(c[t].numer,"/").concat(c[t].denom):0})]})})})}var f=n(33);n(61);function v(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)([]),s=Object(u.a)(i,2),j=s[0],l=s[1],h=Object(c.useState)([]),v=Object(u.a)(h,2),p=v[0],g=v[1],y=Object(c.useState)([]),N=Object(u.a)(y,2),w=N[0],C=N[1],F=function(e,t){var n=a.slice();n[t]=e,r(n)},I=function(e,t){var n=j.slice();n[t]=e,l(n)},S=function(e,t){var n=p.slice();n[t]=!0,g(n);var c=new f.Fraction(a[t],j[t]),r=new f.Fraction(a[t+1],j[t+1]),i=c.add(r),s=w.slice();s[t]=i,console.log(s),C(s)};return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(O.a,{container:!0,direction:"row",justify:"center",children:[Object(o.jsx)(O.a,{container:!0,justify:"center",children:Object(o.jsx)("h1",{children:"Operaciones"})}),Object(o.jsx)(O.a,{container:!0,children:Object(b.a)(Array(8)).map((function(e,t){return Object(o.jsx)(x,{id:t+1,numerador:a,changeNumerador:F,denominador:j,changeDenominador:I},t)}))})]}),Object(o.jsxs)(O.a,{container:!0,direction:"row",justify:"center",children:[Object(o.jsx)(O.a,{container:!0,item:!0,xs:12,justify:"center",children:Object(o.jsx)("h1",{children:"Resultados"})}),Object(b.a)(Array(4)).map((function(e,t){return Object(o.jsx)(m,{id:t+1,flag:p,result:w,changeButton:S},t)}))]})]})}var p=function(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",children:Object(o.jsx)(l,{})}),Object(o.jsx)(j.a,{path:"/matematicas",children:Object(o.jsx)(v,{})}),Object(o.jsx)(j.a,{path:"/",children:Object(o.jsx)(l,{})})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),g()}},[[62,1,2]]]);
//# sourceMappingURL=main.e9fc5f2d.chunk.js.map