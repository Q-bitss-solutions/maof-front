import{T as d}from"./TableBase-696e20dd.js";import{f}from"./reviewArea-05c2c68c.js";import{A as b}from"./ArrowBack-9533764d.js";import{B as p}from"./ButtonBase-1ec2bc1c.js";import{_ as u,u as v,r as w,a,o as h,c as A,g as o,b as B}from"./index-8b43d3da.js";import{T as k}from"./fetchApi-b713d3e3.js";const x={name:"ReviewAreasIndex",components:{TableBase:d,ArrowBack:b,ButtonBase:p,TitleBar:k},setup(){const r=v(),n=[{label:"Nombre Unidad SICT",field:"nombre_unidad"},{label:"Estatus",field:"estado_area_revisora"},{label:"Fecha inicio",field:"fecha_inicio_area_revisora"},{label:"Fecha fin",field:"fecha_fin_area_revisora"}],s=w([]),e=async()=>{const{data:t}=await f();s.value=t},i=[],c=()=>r.push({name:"NewReviewArea"});return e(),{reviewAreas:s,featureOptions:i,headers:n,goToNewReviewArea:c}}},N={class:"px-4 mt-10"},R={class:"px-4"};function T(r,n,s,e,i,c){const t=a("arrow-back"),l=a("title-bar"),_=a("button-base"),m=a("table-base");return h(),A("main",N,[o(t),o(l,{title:"Áreas revisoras",subtitle:"Inicio"}),B("section",R,[o(_,{label:"Nueva área revisora",onClick:e.goToNewReviewArea,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),o(m,{options:e.featureOptions,headers:e.headers,data:e.reviewAreas},null,8,["options","headers","data"])])])}const V=u(x,[["render",T]]);export{V as default};
