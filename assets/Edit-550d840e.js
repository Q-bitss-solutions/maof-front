import{F as b}from"./FormCollaborationAgreements-ebf6d71a.js";import{T as _}from"./TitleBar-95cae43a.js";import{a as f,u as g}from"./contract-9a9b5be4.js";import{_ as C,q as A,u as h,m as v,b as s,o as p,c as x,e as d,d as y,g as B,h as E}from"./index-ae47c3ce.js";import{S as i}from"./sweetalert2.all-281a79b7.js";import{C as $}from"./CustomHeaderApp-790e617d.js";import"./InputBase-f2420b6e.js";import"./TextAreaBase-0b4c1373.js";import"./fetchApi-ea3a2dff.js";import"./SelectBase-4b15a31f.js";import"./reviewArea-361aa204.js";import"./contractor-b30663c5.js";import"./project-58651c53.js";import"./ArrowBack-858e36ad.js";import"./HomePage-790bb899.js";import"./LogoutComponent-26312cbb.js";const k={name:"EditCollaborationAgreement",components:{FormCollaborationAgreements:b,TitleBar:_,CustomHeaderApp:$},setup(){const c=A(),m=h(),o=v({collaborationAgreements:{},loading:!0}),e=async()=>{o.loading=!0;const{data:r}=await f(c.params.collaborationAgreementsId);o.collaborationAgreements=r,o.loading=!1},l=async r=>{try{await g(r),i.fire("¡Éxito!","Convenio de colaboración actualizado con éxito!","success"),m.push({name:"CollaborationAgreements"})}catch(t){if(t.response.data.detail)i.fire("Error",`${t.response.data.detail}`,"error");else{let a=[];for(const[n,u]of Object.entries(t.response.data))a.push(`
${n} - ${u}
`);i.fire("Error",`${a}`,"error")}}};return e(),{app:o,saveCollaborationAgreement:l}}},S={class:"px-4 mt-10"},w={class:"px-4"};function H(c,m,o,e,l,r){const t=s("CustomHeaderApp"),a=s("title-bar"),n=s("form-collaboration-agreements");return p(),x("main",S,[d(t),d(a,{title:"Contratos y Convenios de colaboración",subtitle:"Editar"}),y("section",w,[e.app.loading?E("",!0):(p(),B(n,{key:0,onSubmit:e.saveCollaborationAgreement,collaborationAgreements:e.app.collaborationAgreements,"edit-mode":""},null,8,["onSubmit","collaborationAgreements"]))])])}const P=C(k,[["render",H]]);export{P as default};
