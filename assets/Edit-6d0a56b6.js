import{F as g}from"./FormAssignResident-ef509870.js";import{A as l}from"./ArrowBack-221845af.js";import{T as _}from"./fetchApi-c54fee2f.js";import{a as u,u as R}from"./assingResident-a72d94c4.js";import{_ as f,l as A,u as b,k,a as n,o as r,c as B,g as c,b as w,e as x,f as h}from"./index-813ba7d4.js";import{S as v}from"./sweetalert2.all-281a79b7.js";import"./InputBase-3ef7a80f.js";import"./ButtonBase-6f308546.js";import"./SelectBase-c842b064.js";import"./resident-e3c16e49.js";import"./contract-0742f353.js";import"./PDF-a4bdfbbc.js";const y={name:"EditAssingResident",components:{FormAssignResident:g,ArrowBack:l,TitleBar:_},setup(){const a=A(),o=b(),s=k({assingResident:{},loading:!0}),e=async()=>{s.loading=!0;const{data:t}=await u(a.params.assingResidentId);s.assingResident=t,s.loading=!1},i=async t=>{await R(s.assingResident,t),v.fire("¡Éxito!","Asignacion actualizada con éxito!","success"),o.push({name:"AssignResident"})};return e(),{app:s,saveAssingResident:i}}},E={class:"px-4 mt-10"},S={class:"px-4"};function I(a,o,s,e,i,t){const d=n("arrow-back"),m=n("title-bar"),p=n("form-assign-resident");return r(),B("main",E,[c(d),c(m,{title:"Asignación Residente",subtitle:"Editar"}),w("section",S,[e.app.loading?h("",!0):(r(),x(p,{key:0,onSubmit:e.saveAssingResident,assingResident:e.app.assingResident,"edit-mode":""},null,8,["onSubmit","assingResident"]))])])}const J=f(y,[["render",I]]);export{J as default};