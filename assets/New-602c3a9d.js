import{F as c}from"./FormResident-b0eb9eb4.js";import{T as d}from"./TitleBar-e4a4b5bb.js";import{s as _}from"./resident-d2bf553c.js";import{_ as u,u as l,b as t,o as f,c as R,e as o,d as x}from"./index-284224ac.js";import{S as n}from"./sweetalert2.all-281a79b7.js";import{C as b}from"./CustomHeaderApp-9682a33e.js";import"./InputBase-c5c29cdd.js";import"./fetchApi-6f7d5678.js";import"./SelectBase-7addb378.js";import"./reviewArea-81537213.js";import"./users-4043abca.js";import"./ArrowBack-8c37bbd5.js";import"./HomePage-45decf19.js";import"./LogoutComponent-990bb1e2.js";import"./ManualComponent-3719973b.js";const h={name:"NewResident",components:{FormResident:c,TitleBar:d,CustomHeaderApp:b},setup(){const s=l();return{saveResident:async r=>{try{await _(r),n.fire("¡Éxito!","¡Residente guardado con éxito!","success"),s.push({name:"Resident"})}catch(e){n.fire("Error",`${e.response.data.detail}`,"error")}}}}},v={class:"px-4 mt-10"},C={class:"px-4"};function N(s,a,r,e,w,B){const i=t("CustomHeaderApp"),m=t("title-bar"),p=t("form-resident");return f(),R("main",v,[o(i),o(m,{title:"Residente",subtitle:"Nuevo"}),x("section",C,[o(p,{onSubmit:e.saveResident},null,8,["onSubmit"])])])}const G=u(h,[["render",N]]);export{G as default};
