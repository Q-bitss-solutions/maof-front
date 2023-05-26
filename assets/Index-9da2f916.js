import{T as p}from"./TableBase-d706d569.js";import{f as b}from"./reviewArea-754c4adf.js";import{A as u}from"./ArrowBack-d5c976a3.js";import{H as v}from"./HomePage-ba747c1b.js";import{B as h}from"./ButtonBase-e63b82f1.js";import{_ as w,u as A,r as B,a,o as x,c as g,b as l,g as o}from"./index-47f549d9.js";import{T as k}from"./fetchApi-cca32d48.js";const N={name:"ReviewAreasIndex",components:{TableBase:p,ArrowBack:u,HomePage:v,ButtonBase:h,TitleBar:k},setup(){const r=A(),n=[{label:"Nombre Unidad MAOF",field:"nombre_unidad"},{label:"Estatus",field:"estado_area_revisora"},{label:"Fecha inicio",field:"fecha_inicio_area_revisora"},{label:"Fecha fin",field:"fecha_fin_area_revisora"}],s=B([]),e=async()=>{const{data:t}=await b();s.value=t},i=[],c=()=>r.push({name:"NewReviewArea"});return e(),{reviewAreas:s,featureOptions:i,headers:n,goToNewReviewArea:c}}},R={class:"px-4 mt-10"},T={class:"flex justify-between"},C={class:"px-4"};function F(r,n,s,e,i,c){const t=a("arrow-back"),_=a("home-page"),m=a("title-bar"),d=a("button-base"),f=a("table-base");return x(),g("main",R,[l("div",T,[o(t),o(_)]),o(m,{title:"Áreas revisoras",subtitle:"Inicio"}),l("section",C,[o(d,{label:"Nueva área revisora",onClick:e.goToNewReviewArea,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),o(f,{options:e.featureOptions,headers:e.headers,data:e.reviewAreas},null,8,["options","headers","data"])])])}const M=w(N,[["render",F]]);export{M as default};
