import{F as _}from"./FormCollaborationAgreements-bd203551.js";import{T as u}from"./TitleBar-39daad40.js";import{s as d}from"./contract-0b747e5e.js";import{_ as f,u as b,f as t,g as C,l as g,v as a,q as v}from"./index-5cc367f2.js";import{S as s}from"./sweetalert2.all-281a79b7.js";import{C as A}from"./CustomHeaderApp-8d94f481.js";import"./InputBase-c469d919.js";import"./TextAreaBase-bd244fd9.js";import"./fetchApi-c943dcd0.js";import"./SelectBase-dd901550.js";import"./reviewArea-476ce35e.js";import"./contractor-225c024e.js";import"./project-32c9c971.js";import"./ArrowBack-8ac6e4dd.js";import"./HomePage-555195f2.js";import"./LogoutComponent-f4751eee.js";const x={name:"NewFormCollaborationAgreements",components:{FormCollaborationAgreements:_,TitleBar:u,CustomHeaderApp:A},setup(){const n=b();return{saveCollaborationAgreements:async i=>{try{await d(i),s.fire("¡Éxito!","Convenio de colaboración guardado con éxito!","success"),n.push({name:"CollaborationAgreements"})}catch(o){if(o.response.data.detail)s.fire("Error",`${o.response.data.detail}`,"error");else{let e=[];for(const[m,r]of Object.entries(o.response.data))e.push(`
${m} - ${r}
`);s.fire("Error",`${e}`,"error")}}}}}},$={class:"px-4 mt-10"},h={class:"px-4"};function N(n,c,i,o,e,m){const r=t("CustomHeaderApp"),p=t("title-bar"),l=t("form-collaboration-agreements");return C(),g("main",$,[a(r),a(p,{title:"Contratos y Convenios de colaboración",subtitle:"Nuevo"}),v("section",h,[a(l,{onSubmit:o.saveCollaborationAgreements},null,8,["onSubmit"])])])}const G=f(x,[["render",N]]);export{G as default};
