import{F as p}from"./FormAssignResident-ef392f02.js";import{A as _}from"./ArrowBack-940d7802.js";import{T as d}from"./fetchApi-a86708f1.js";import{s as u}from"./assingResident-47a78e33.js";import{_ as l,l as f,u as g,a as e,o as A,c as R,g as t,b}from"./index-023bebbd.js";import{S as n}from"./sweetalert2.all-281a79b7.js";import"./InputBase-c4326da0.js";import"./ButtonBase-408b34bd.js";import"./SelectBase-b2e83c72.js";import"./resident-a2eecfd1.js";import"./contract-22c9c7b2.js";import"./PDF-a4bdfbbc.js";const w={name:"NewAssingResident",components:{FormAssignResident:p,ArrowBack:_,TitleBar:d},setup(){f();const o=g();return{saveAssingResident:async r=>{try{await u(r),n.fire("¡Éxito!","Asignacion guardada con éxito!","success")}catch(s){n.fire("Error",`${s.response.data.detail}`,"error")}o.push({name:"AssignResident"})}}}},x={class:"px-4 mt-10"},h={class:"px-4"};function k(o,a,r,s,v,B){const i=e("arrow-back"),c=e("title-bar"),m=e("form-assign-resident");return A(),R("main",x,[t(i),t(c,{title:"Asignación Residente",subtitle:"Nuevo"}),b("section",h,[t(m,{onSubmit:s.saveAssingResident},null,8,["onSubmit"])])])}const D=l(w,[["render",k]]);export{D as default};
