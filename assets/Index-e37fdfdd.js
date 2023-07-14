import{T as _}from"./TableBase-19c16f3b.js";import{f as d}from"./reviewArea-81537213.js";import{B as f}from"./fetchApi-6f7d5678.js";import{_ as u,u as b,r as v,b as a,o as h,c as w,e as o,d as A}from"./index-284224ac.js";import{T as B}from"./TitleBar-e4a4b5bb.js";import{C as x}from"./CustomHeaderApp-9682a33e.js";import"./ArrowBack-8c37bbd5.js";import"./HomePage-45decf19.js";import"./LogoutComponent-990bb1e2.js";import"./ManualComponent-3719973b.js";const C={name:"ReviewAreasIndex",components:{TableBase:_,ButtonBase:f,TitleBar:B,CustomHeaderApp:x},setup(){const r=b(),n=[{label:"Nombre Unidad MAOF",field:"nombre_unidad"},{label:"Estatus",field:"estado_area_revisora"},{label:"Fecha inicio",field:"fecha_inicio_area_revisora"},{label:"Fecha fin",field:"fecha_fin_area_revisora"}],t=v([]),e=async()=>{const{data:s}=await d();t.value=s},i=[],c=()=>r.push({name:"NewReviewArea"});return e(),{reviewAreas:t,featureOptions:i,headers:n,goToNewReviewArea:c}}},N={class:"px-4 mt-10"},R={class:"px-4"};function T(r,n,t,e,i,c){const s=a("CustomHeaderApp"),l=a("title-bar"),m=a("button-base"),p=a("table-base");return h(),w("main",N,[o(s),o(l,{title:"Áreas revisoras",subtitle:"Inicio"}),A("section",R,[o(m,{label:"Nueva área revisora",onClick:e.goToNewReviewArea,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),o(p,{description:"Áreas revisoras",options:e.featureOptions,headers:e.headers,data:e.reviewAreas},null,8,["options","headers","data"])])])}const U=u(C,[["render",T]]);export{U as default};
