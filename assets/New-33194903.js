import{F as m}from"./FormResident-588a942f.js";import{A as p,T as _}from"./TitleBar-f1db6dc0.js";import{s as d}from"./resident-11d0c8a1.js";import{_ as u,u as l,a as e,o as f,c as R,g as t,b}from"./index-fa0f6b5e.js";import{S as w}from"./sweetalert2.all-281a79b7.js";import"./InputBase-1e130a99.js";import"./ButtonBase-3f995339.js";import"./SelectBase-42dd2d2d.js";import"./reviewArea-811121f3.js";const x={name:"NewResident",components:{FormResident:m,ArrowBack:p,TitleBar:_},setup(){const o=l();return{saveResident:async s=>{await d(s),w.fire("¡Éxito!","¡Residente guardado con éxito!","success"),o.push({name:"Resident"})}}}},k={class:"px-4 mt-10"},v={class:"px-4"};function B(o,n,s,r,N,h){const a=e("arrow-back"),i=e("title-bar"),c=e("form-resident");return f(),R("main",k,[t(a),t(i,{title:"Residente",subtitle:"Nuevo"}),b("section",v,[t(c,{onSubmit:r.saveResident},null,8,["onSubmit"])])])}const E=u(x,[["render",B]]);export{E as default};
