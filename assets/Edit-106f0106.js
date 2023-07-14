import{F as u}from"./FormAmendingAgreement-44f9b90f.js";import{T as f}from"./TitleBar-e4a4b5bb.js";import{a as _,u as A}from"./contract-23dbbb00.js";import{_ as C,q as h,u as v,m as b,b as m,o as p,c as x,e as g,d as B,g as y,h as E}from"./index-284224ac.js";import{S as i}from"./sweetalert2.all-281a79b7.js";import{C as $}from"./CustomHeaderApp-9682a33e.js";import"./InputBase-c5c29cdd.js";import"./TextAreaBase-1df588a3.js";import"./fetchApi-6f7d5678.js";import"./SelectBase-7addb378.js";import"./reviewArea-81537213.js";import"./contractor-711943e7.js";import"./project-a59e577e.js";import"./ArrowBack-8c37bbd5.js";import"./HomePage-45decf19.js";import"./LogoutComponent-990bb1e2.js";import"./ManualComponent-3719973b.js";const k={name:"EditAmendingAgreement",components:{FormAmendingAgreement:u,TitleBar:f,CustomHeaderApp:$},setup(){const s=h(),c=v(),e=b({amendingAgreement:{},loading:!0}),t=async()=>{e.loading=!0;const{data:r}=await _(s.params.amendingAgreementId);e.amendingAgreement=r,e.loading=!1},d=async r=>{try{await A(r),i.fire("¡Éxito!","Convenio modificatorio actualizado con éxito!","success"),c.push({name:"AmendingAgreement"})}catch(o){if(o.response.data.detail)i.fire("Error",`${o.response.data.detail}`,"error");else{let n=[];for(const[a,l]of Object.entries(o.response.data))n.push(`
${a} - ${l}
`);i.fire("Error",`${n}`,"error")}}};return t(),{app:e,saveAmendingAgreement:d}}},S={class:"px-4 mt-10"},w={class:"px-4"};function H(s,c,e,t,d,r){const o=m("CustomHeaderApp"),n=m("title-bar"),a=m("form-amending-agreement");return p(),x("main",S,[g(o),g(n,{title:"Convenio Modificatorio",subtitle:"Editar"}),B("section",w,[t.app.loading?E("",!0):(p(),y(a,{key:0,onSubmit:t.saveAmendingAgreement,amendingAgreement:t.app.amendingAgreement,"edit-mode":""},null,8,["onSubmit","amendingAgreement"]))])])}const Q=C(k,[["render",H]]);export{Q as default};
