import{F as _}from"./FormAmendingAgreement-44f9b90f.js";import{T as f}from"./TitleBar-e4a4b5bb.js";import{s as l}from"./contract-23dbbb00.js";import{_ as u,u as g,b as r,o as A,c as v,e as n,d as C}from"./index-284224ac.js";import{S as s}from"./sweetalert2.all-281a79b7.js";import{C as b}from"./CustomHeaderApp-9682a33e.js";import"./InputBase-c5c29cdd.js";import"./TextAreaBase-1df588a3.js";import"./fetchApi-6f7d5678.js";import"./SelectBase-7addb378.js";import"./reviewArea-81537213.js";import"./contractor-711943e7.js";import"./project-a59e577e.js";import"./ArrowBack-8c37bbd5.js";import"./HomePage-45decf19.js";import"./LogoutComponent-990bb1e2.js";import"./ManualComponent-3719973b.js";const x={name:"NewAmendingAgreement",components:{FormAmendingAgreement:_,TitleBar:f,CustomHeaderApp:b},setup(){const a=g();return{saveAmendingAgreement:async m=>{try{await l(m),s.fire("Éxito!","Convenio modificatorio guardado con éxito!","success"),a.push({name:"AmendingAgreement"})}catch(e){if(e.response.data.detail)s.fire("Error",`${e.response.data.detail}`,"error");else{let o=[];for(const[i,t]of Object.entries(e.response.data))o.push(`
${i} - ${t}
`);s.fire("Error",`${o}`,"error")}}}}}},$={class:"px-4 mt-10"},h={class:"px-4"};function N(a,p,m,e,o,i){const t=r("CustomHeaderApp"),c=r("title-bar"),d=r("form-amending-agreement");return A(),v("main",$,[n(t),n(c,{title:"Convenio Modificatorio",subtitle:"Nuevo"}),C("section",h,[n(d,{onSubmit:e.saveAmendingAgreement},null,8,["onSubmit"])])])}const G=u(x,[["render",N]]);export{G as default};
