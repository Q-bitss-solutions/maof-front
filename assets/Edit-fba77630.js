import{F as u}from"./FormCollaborationAgreements-9183afbd.js";import{A as _}from"./ArrowBack-e7158d5d.js";import{T as f}from"./fetchApi-4e519371.js";import{a as g,u as A}from"./contract-1e190940.js";import{_ as C,l as k,u as v,k as B,a as s,o as p,c as h,g as d,b as x,e as y,f as w}from"./index-f1ccd9d4.js";import{S as c}from"./sweetalert2.all-281a79b7.js";import"./InputBase-23b4853b.js";import"./TextAreaBase-725a2fa5.js";import"./ButtonBase-23f0950b.js";import"./SelectBase-97e64f72.js";import"./reviewArea-59aaf27b.js";import"./contractor-920a3b34.js";import"./project-86fe8680.js";const E={name:"EditCollaborationAgreement",components:{FormCollaborationAgreements:u,ArrowBack:_,TitleBar:f},setup(){const i=k(),l=v(),o=B({collaborationAgreements:{},loading:!0}),e=async()=>{o.loading=!0;const{data:a}=await g(i.params.collaborationAgreementsId);o.collaborationAgreements=a,o.loading=!1},m=async a=>{try{await A(a),c.fire("¡Éxito!","Convenio de colaboración actualizado con éxito!","success"),l.push({name:"CollaborationAgreements"})}catch(t){if(t.response.data.detail)c.fire("Error",`${t.response.data.detail}`,"error");else{let r=[];for(const[n,b]of Object.entries(t.response.data))r.push(`
${n} - ${b}
`);c.fire("Error",`${r}`,"error")}}};return e(),{app:o,saveCollaborationAgreement:m}}},$={class:"px-4 mt-10"},S={class:"px-4"};function I(i,l,o,e,m,a){const t=s("arrow-back"),r=s("title-bar"),n=s("form-collaboration-agreements");return p(),h("main",$,[d(t),d(r,{title:"Contratos y Convenios de colaboración",subtitle:"Editar"}),x("section",S,[e.app.loading?w("",!0):(p(),y(n,{key:0,onSubmit:e.saveCollaborationAgreement,collaborationAgreements:e.app.collaborationAgreements,"edit-mode":""},null,8,["onSubmit","collaborationAgreements"]))])])}const K=C(E,[["render",I]]);export{K as default};