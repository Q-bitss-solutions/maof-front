import{F as l}from"./FormResident-b0eb9eb4.js";import{T as _}from"./TitleBar-e4a4b5bb.js";import{a as f,u as R}from"./resident-d2bf553c.js";import{_ as h,q as x,u as B,m as b,b as r,o as d,c as g,e as c,d as y,g as C,h as E}from"./index-284224ac.js";import{S as m}from"./sweetalert2.all-281a79b7.js";import{C as k}from"./CustomHeaderApp-9682a33e.js";import"./InputBase-c5c29cdd.js";import"./fetchApi-6f7d5678.js";import"./SelectBase-7addb378.js";import"./reviewArea-81537213.js";import"./users-4043abca.js";import"./ArrowBack-8c37bbd5.js";import"./HomePage-45decf19.js";import"./LogoutComponent-990bb1e2.js";import"./ManualComponent-3719973b.js";const v={name:"EditResident",components:{FormResident:l,TitleBar:_,CustomHeaderApp:k},setup(){const a=x(),n=B(),e=b({resident:{},loading:!0}),t=async()=>{e.loading=!0;const{data:o}=await f(a.params.residentId);e.resident=o,e.loading=!1},i=async o=>{try{await R(o),m.fire("¡Éxito!","¡Residente actualizado con éxito!","success"),n.push({name:"Resident"})}catch(s){m.fire("Error",`${s.response.data.detail}`,"error")}};return t(),{app:e,saveResident:i}}},S={class:"px-4 mt-10"},w={class:"px-4"};function A(a,n,e,t,i,o){const s=r("CustomHeaderApp"),p=r("title-bar"),u=r("form-resident");return d(),g("main",S,[c(s),c(p,{title:"Residente",subtitle:"Editar"}),y("section",w,[t.app.loading?E("",!0):(d(),C(u,{key:0,onSubmit:t.saveResident,resident:t.app.resident,"edit-mode":""},null,8,["onSubmit","resident"]))])])}const M=h(v,[["render",A]]);export{M as default};
