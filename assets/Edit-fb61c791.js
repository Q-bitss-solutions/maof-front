import{F as l}from"./FormContract-e8938bc2.js";import{A as u,T as _}from"./TitleBar-9ddf3f8e.js";import{a as f,u as C}from"./contract-9db6c95e.js";import{_ as b,l as k,u as B,k as x,a as r,o as s,c as g,g as i,b as w,e as h,f as y}from"./index-6b6e47c4.js";import{S as v}from"./sweetalert2.all-281a79b7.js";import"./InputBase-33838ec4.js";import"./ButtonBase-e9b6588b.js";import"./SelectBase-a4a56be3.js";import"./project-96eb56e8.js";import"./reviewArea-c9a041c6.js";import"./contractor-24d6a565.js";const E={name:"EditContract",components:{FormContract:l,ArrowBack:u,TitleBar:_},setup(){const c=k(),e=B(),t=x({contract:{},loading:!0}),o=async()=>{t.loading=!0;const{data:a}=await f(c.params.contractId);t.contract=a,t.loading=!1},n=async a=>{await C(a),v.fire("¡Éxito!","Contrato actualizado con éxito!","success"),e.push({name:"Contracts"})};return o(),{app:t,saveContract:n}}},S={class:"px-4 mt-10"},I={class:"px-4"};function N(c,e,t,o,n,a){const m=r("arrow-back"),p=r("title-bar"),d=r("form-contract");return s(),g("main",S,[i(m),i(p,{title:"Contratos",subtitle:"Editar"}),w("section",I,[o.app.loading?y("",!0):(s(),h(d,{key:0,onSubmit:o.saveContract,contract:o.app.contract,"edit-mode":""},null,8,["onSubmit","contract"]))])])}const H=b(E,[["render",N]]);export{H as default};
