(this["webpackJsonpmathlive-box"]=this["webpackJsonpmathlive-box"]||[]).push([[0],{42:function(t,e,r){},54:function(t,e,r){"use strict";r.r(e);var o,n,c,i,a=r(4),s=r(0),l=r.n(s),u=r(29),p=r.n(u),f=(r(42),r(22)),b=r(5),j=r(6),x=r(9),O=(r(43),r(2)),h=r(10),y=r.n(h),d=r(44),g=new(o=function(){function t(){Object(b.a)(this,t),Object(f.a)(this,"latex",n,this),Object(f.a)(this,"expression",c,this),Object(f.a)(this,"update",i,this)}return Object(j.a)(t,[{key:"eval",get:function(){try{return this.expression.evaluate().text()}catch(t){return"error"}}},{key:"text",get:function(){try{return this.expression.evaluate().text("fractions")}catch(t){return"error"}}},{key:"variable",get:function(){try{return this.expression.variables()}catch(t){return["error"]}}},{key:"solve",get:function(){try{return this.expression.solveFor("x").toString()}catch(t){return"error"}}},{key:"integrate",get:function(){try{return y.a.integrate(this.expression,"x").evaluate().text("fractions")}catch(t){return"error"}}},{key:"diff",get:function(){try{return y.a.diff(this.expression,"x").evaluate().text("fractions")}catch(t){return"error"}}}]),t}(),n=Object(x.a)(o.prototype,"latex",[O.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),c=Object(x.a)(o.prototype,"expression",[O.m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=Object(x.a)(o.prototype,"update",[O.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.latex=e;try{t.expression=d.convertFromLaTeX(e)}catch(r){t.expression=y()("")}}}}),Object(x.a)(o.prototype,"eval",[O.g],Object.getOwnPropertyDescriptor(o.prototype,"eval"),o.prototype),Object(x.a)(o.prototype,"text",[O.g],Object.getOwnPropertyDescriptor(o.prototype,"text"),o.prototype),Object(x.a)(o.prototype,"variable",[O.g],Object.getOwnPropertyDescriptor(o.prototype,"variable"),o.prototype),Object(x.a)(o.prototype,"solve",[O.g],Object.getOwnPropertyDescriptor(o.prototype,"solve"),o.prototype),Object(x.a)(o.prototype,"integrate",[O.g],Object.getOwnPropertyDescriptor(o.prototype,"integrate"),o.prototype),Object(x.a)(o.prototype,"diff",[O.g],Object.getOwnPropertyDescriptor(o.prototype,"diff"),o.prototype),o),v=l.a.createContext(g),m=function t(){var e=this;Object(b.a)(this,t),this.mfController=void 0,this.setController=function(t){e.mfController=t,e.focus()},this.add=function(t){return e.mfController.insert(t,{focus:!0,format:"latex"})},this.backspace=function(){e.mfController.executeCommand("deletePreviousChar"),e.focus()},this.clear=function(){e.mfController.executeCommand("deleteAll"),e.focus()},this.focus=function(){e.mfController&&e.mfController.focus&&e.mfController.focus()}},C=r(21);function w(){var t=Object(s.useContext)(v),e=new m;return Object(a.jsx)(C.a,{virtualKeyboardMode:"off",onContentDidChange:function(e){return t.update(e.getValue("latex-expanded"))},ref:function(t){t&&(e.setController(t),window.add=e.add,window.backspace=e.backspace,window.clear=e.clear)}})}var k=r(35),P=r(67),D=r(68);function F(t){return Object(a.jsxs)(D.a,{children:[Object(a.jsx)("p",{children:t.title}),Object(a.jsx)(C.a,{value:t.content,readOnly:!0})]})}var T=Object(k.a)((function(){var t=Object(s.useContext)(v);return console.log(t.latex),Object(a.jsxs)(P.a,{children:[Object(a.jsx)(F,{title:"Eval",content:t.eval}),Object(a.jsx)(F,{title:"Text",content:t.text}),Object(a.jsx)(F,{title:"Roots",content:t.solve}),Object(a.jsx)(F,{title:"Int",content:t.integrate}),Object(a.jsx)(F,{title:"Diff",content:t.diff})]})}));function z(){return Object(a.jsxs)(v.Provider,{value:g,children:[Object(a.jsx)(w,{}),Object(a.jsx)(T,{})]})}var I=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,69)).then((function(e){var r=e.getCLS,o=e.getFID,n=e.getFCP,c=e.getLCP,i=e.getTTFB;r(t),o(t),n(t),c(t),i(t)}))};p.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root")),I()}},[[54,1,2]]]);
//# sourceMappingURL=main.194ff077.chunk.js.map