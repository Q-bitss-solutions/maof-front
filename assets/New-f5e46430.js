import{F as p}from"./FormResident-8ace04e3.js";import{A as d}from"./ArrowBack-b91ec425.js";import{T as _}from"./fetchApi-82b3411b.js";import{s as u}from"./resident-737f8423.js";import{_ as l,u as f,a as t,o as R,c as b,g as o,b as w}from"./index-8bbcfa6b.js";import{S as n}from"./sweetalert2.all-281a79b7.js";import"./InputBase-beff4699.js";import"./ButtonBase-f765b112.js";import"./SelectBase-9d47c8d3.js";import"./reviewArea-13e5f26a.js";import"./users-3c033cee.js";const x={name:"NewResident",components:{FormResident:p,ArrowBack:d,TitleBar:_},setup(){const r=f();return{saveResident:async s=>{try{await u(s),n.fire("¡Éxito!","¡Residente guardado con éxito!","success"),r.push({name:"Resident"})}catch(e){n.fire("Error",`${e.response.data.detail}`,"error")}}}}},h={class:"px-4 mt-10"},k={class:"px-4"};function v(r,a,s,e,B,N){const i=t("arrow-back"),c=t("title-bar"),m=t("form-resident");return R(),b("main",h,[o(i),o(c,{title:"Residente",subtitle:"Nuevo"}),w("section",k,[o(m,{onSubmit:e.saveResident},null,8,["onSubmit"])])])}const q=l(x,[["render",v]]);export{q as default};
