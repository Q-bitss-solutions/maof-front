import{F as l}from"./FormContract-5d247a8b.js";import{A as u}from"./ArrowBack-e7158d5d.js";import{T as _}from"./fetchApi-4e519371.js";import{a as f,u as C}from"./contract-1e190940.js";import{_ as b,l as k,u as B,k as x,a as r,o as s,c as g,g as i,b as w,e as h,f as y}from"./index-f1ccd9d4.js";import{S as v}from"./sweetalert2.all-281a79b7.js";import"./InputBase-23b4853b.js";import"./ButtonBase-23f0950b.js";import"./SelectBase-97e64f72.js";import"./project-86fe8680.js";import"./reviewArea-59aaf27b.js";import"./contractor-920a3b34.js";const E={name:"EditContract",components:{FormContract:l,ArrowBack:u,TitleBar:_},setup(){const c=k(),e=B(),t=x({contract:{},loading:!0}),o=async()=>{t.loading=!0;const{data:a}=await f(c.params.contractId);t.contract=a,t.loading=!1},n=async a=>{await C(a),v.fire("¡Éxito!","Contrato actualizado con éxito!","success"),e.push({name:"Contracts"})};return o(),{app:t,saveContract:n}}},S={class:"px-4 mt-10"},I={class:"px-4"};function N(c,e,t,o,n,a){const m=r("arrow-back"),p=r("title-bar"),d=r("form-contract");return s(),g("main",S,[i(m),i(p,{title:"Contratos",subtitle:"Editar"}),w("section",I,[o.app.loading?y("",!0):(s(),h(d,{key:0,onSubmit:o.saveContract,contract:o.app.contract,"edit-mode":""},null,8,["onSubmit","contract"]))])])}const J=b(E,[["render",N]]);export{J as default};