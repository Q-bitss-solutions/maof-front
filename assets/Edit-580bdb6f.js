import{F as l}from"./FormResident-b4b88abc.js";import{T as _}from"./TitleBar-39daad40.js";import{a as f,u as R}from"./resident-94bff9a2.js";import{_ as x,G as B,u as g,r as h,f as r,g as d,l as y,v as c,q as C,j as b,x as v}from"./index-5cc367f2.js";import{S as m}from"./sweetalert2.all-281a79b7.js";import{C as E}from"./CustomHeaderApp-8d94f481.js";import"./InputBase-c469d919.js";import"./fetchApi-c943dcd0.js";import"./SelectBase-dd901550.js";import"./reviewArea-476ce35e.js";import"./users-7900f6be.js";import"./ArrowBack-8ac6e4dd.js";import"./HomePage-555195f2.js";import"./LogoutComponent-f4751eee.js";const k={name:"EditResident",components:{FormResident:l,TitleBar:_,CustomHeaderApp:E},setup(){const a=B(),n=g(),e=h({resident:{},loading:!0}),t=async()=>{e.loading=!0;const{data:o}=await f(a.params.residentId);e.resident=o,e.loading=!1},i=async o=>{try{await R(o),m.fire("¡Éxito!","¡Residente actualizado con éxito!","success"),n.push({name:"Resident"})}catch(s){m.fire("Error",`${s.response.data.detail}`,"error")}};return t(),{app:e,saveResident:i}}},S={class:"px-4 mt-10"},w={class:"px-4"};function A(a,n,e,t,i,o){const s=r("CustomHeaderApp"),p=r("title-bar"),u=r("form-resident");return d(),y("main",S,[c(s),c(p,{title:"Residente",subtitle:"Editar"}),C("section",w,[t.app.loading?v("",!0):(d(),b(u,{key:0,onSubmit:t.saveResident,resident:t.app.resident,"edit-mode":""},null,8,["onSubmit","resident"]))])])}const L=x(k,[["render",A]]);export{L as default};
