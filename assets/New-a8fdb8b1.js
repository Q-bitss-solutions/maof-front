import{F as l}from"./FormCollaborationAgreements-e57a3f6a.js";import{A as p,T as _}from"./TitleBar-9ddf3f8e.js";import{s as b}from"./contract-9db6c95e.js";import{_ as u,u as f,a as e,o as d,c as C,g as r,b as g}from"./index-6b6e47c4.js";import{S as n}from"./sweetalert2.all-281a79b7.js";import"./InputBase-33838ec4.js";import"./TextAreaBase-25822eed.js";import"./ButtonBase-e9b6588b.js";import"./SelectBase-a4a56be3.js";import"./reviewArea-c9a041c6.js";import"./contractor-24d6a565.js";import"./project-96eb56e8.js";const A={name:"NewFormCollaborationAgreements",components:{FormCollaborationAgreements:l,ArrowBack:p,TitleBar:_},setup(){const t=f();return{saveCollaborationAgreements:async a=>{try{await b(a),n.fire("¡Éxito!","Convenio de colaboración guardado con éxito!","success"),t.push({name:"CollaborationAgreements"})}catch(o){n.fire("Error",`${o.response.data.error}`,"error")}}}}},v={class:"px-4 mt-10"},w={class:"px-4"};function x(t,s,a,o,h,k){const c=e("arrow-back"),i=e("title-bar"),m=e("form-collaboration-agreements");return d(),C("main",v,[r(c),r(i,{title:"Contratos y Convenios de colaboración",subtitle:"Nuevo"}),g("section",w,[r(m,{onSubmit:o.saveCollaborationAgreements},null,8,["onSubmit"])])])}const z=u(A,[["render",x]]);export{z as default};
