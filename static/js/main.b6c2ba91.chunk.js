(this["webpackJsonplive-interface"]=this["webpackJsonplive-interface"]||[]).push([[0],[,,,function(e,t,n){e.exports={root:"Input_root__2tE1E",input:"Input_input__3rPb3",input_icon:"Input_input_icon__2BQ-y",errors:"Input_errors__2hcf4",icon:"Input_icon__YGkpt"}},function(e,t,n){e.exports={root:"AuthScreen_root__5wYj9",title:"AuthScreen_title__3epFJ",form:"AuthScreen_form__19dPK",field:"AuthScreen_field__2hC7Z"}},,,,function(e,t,n){e.exports={root:"PasswordInput_root__1aYfI","show-password":"PasswordInput_show-password__2XW2b"}},,function(e,t,n){e.exports={button:"Button_button__2Lf63","button_auto-width":"Button_button_auto-width__1VQb4"}},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),o=n.n(c),a=n(11),s=n.n(a),i=(n(17),n(2)),u=n(7),l=n.n(u),d=n(10),j=n.n(d),b=function(e){var t=e.onClick,n=e.title,c=e.autoWidth;return Object(r.jsx)("button",{className:l()(j.a.button,c&&j.a["button_auto-width"]),onClick:t,children:n})};b.defaultProps={autoWidth:!1};var f=b,h=n(5),p=n(6),O=o.a.createContext({values:{},setValue:function(e,t){},meta:{touched:!1,errors:{}}}),_=function(e){var t=e.onSubmit,n=e.render,o=e.validators,a=Object(c.useState)(!1),s=Object(p.a)(a,2),u=s[0],l=s[1],d=Object(c.useState)({}),j=Object(p.a)(d,2),b=j[0],f=j[1],_=Object.keys(o).reduce((function(e,t){return Object(i.a)(Object(i.a)({},e),{},Object(h.a)({},t,o[t].map((function(e){return e(b[t])}))))}),{});return Object(r.jsx)(O.Provider,{value:{values:b,setValue:function(e,t){f(Object(i.a)(Object(i.a)({},b),{},Object(h.a)({},e,t)))},meta:{touched:u,errors:_}},children:Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),l(!0),Object.keys(_).some((function(e){return _[e].some((function(e){return!!e}))}))||(t(b),f({}),l(!1))},children:n()})})},m=function(e){var t=e.name,n=e.render,o=e.placeholder,a=Object(c.useContext)(O),s=a.meta,i=a.setValue,u=a.values;return Object(r.jsx)(r.Fragment,{children:n({value:u[t],onChange:function(e){return i(t,e)},meta:{touched:s.touched,errors:s.errors[t]},placeholder:o})})},v=n(3),x=n.n(v),g=function(e){var t=e.onChange,n=e.value,c=e.placeholder,o=e.icon,a=e.meta,s=e.type,i=a.touched,u=a.errors;return Object(r.jsxs)("div",{className:x.a.root,children:[o&&Object(r.jsx)("img",{src:o,alt:"Icon",className:x.a.icon}),Object(r.jsx)("input",{type:s,onChange:function(e){t(e.target.value)},value:n||"",placeholder:c,className:l()(x.a.input,!!o&&x.a.input_icon)}),i&&u&&u.length&&Object(r.jsx)("div",{className:x.a.errors,children:u.map((function(e){return e}))})]})};g.defaultProps={type:"text"};var w=g,N="/live-interface",S=n(8),C=n.n(S),P=function(e){var t=Object(c.useState)(!1),n=Object(p.a)(t,2),o=n[0],a=n[1];return Object(r.jsxs)("div",{className:C.a.root,children:[Object(r.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{type:o?"text":"password"})),Object(r.jsx)("div",{className:C.a["show-password"],onClick:function(){return a(!o)},children:Object(r.jsx)("img",{src:N+"/icons/view.svg",className:C.a.icon,alt:"Toggle password"})})]})},I=n(4),k=n.n(I),y=function(e){return function(t){return t?void 0:e}},F=function(){return Object(r.jsx)("div",{className:k.a.root,children:Object(r.jsxs)("div",{className:k.a.form,children:[Object(r.jsx)("h1",{className:k.a.title,children:"Live interface"}),Object(r.jsx)(_,{onSubmit:function(e){var t=e.login,n=e.password;alert("Email: ".concat(t," Password: ").concat(n))},validators:{login:[y("Login is required")],password:[y("Password is required")]},render:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:k.a.field,children:Object(r.jsx)(m,{name:"login",render:function(e){return Object(r.jsx)(w,Object(i.a)(Object(i.a)({type:"email"},e),{},{icon:N+"/icons/user.svg"}))},placeholder:"Email"})}),Object(r.jsx)("div",{className:k.a.field,children:Object(r.jsx)(m,{name:"password",render:function(e){return Object(r.jsx)(P,Object(i.a)(Object(i.a)({},e),{},{icon:N+"/icons/lock.svg"}))},placeholder:"Password"})}),Object(r.jsx)(f,{title:"Submit",autoWidth:!0})]})}})]})})};n(18);var B=function(){return Object(r.jsx)(F,{})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(B,{})}),document.getElementById("root")),E()}],[[19,1,2]]]);
//# sourceMappingURL=main.b6c2ba91.chunk.js.map