import{T as b}from"./TableBase-d706d569.js";import{f}from"./assingResident-1d5deec7.js";import{A as g}from"./ArrowBack-d5c976a3.js";import{H as u}from"./HomePage-ba747c1b.js";import{B as h}from"./ButtonBase-e63b82f1.js";import{_ as R,u as A,r as w,a as s,o as B,c as k,b as d,g as a}from"./index-47f549d9.js";import{T as x}from"./fetchApi-cca32d48.js";const I={name:"AssignResidentIndex",components:{TableBase:b,ArrowBack:g,HomePage:u,ButtonBase:h,TitleBar:x},setup(){const t=A(),i=[{label:"# Contrato",field:"numero_contrato"},{label:"Id residente",field:"id_residente"},{label:"Nombre Residente",field:"nombre_residente"},{label:"Fecha de inicio",field:"fecha_inicio_asignacion"},{label:"Fecha de fin",field:"fecha_fin_asignacion"},{label:"Estado",field:"estado_asignacion"}],o=w([]),n=async()=>{const{data:e}=await f();o.value=e},c=[{label:"Editar",action:e=>t.push({name:"EditAssignResident",params:{assingResidentId:e.id_asignacion_residente_contrato}})},{label:"Inactivar",action:async e=>t.push({name:"DeleteAssignResident",params:{assingResidentId:e.id_asignacion_residente_contrato}})},{label:"PDF",action:async e=>{window.open(`${e.archivo_asignacion}`,"_blank")}}],r=()=>t.push({name:"NewAssignResident"});return n(),{assingResident:o,featureOptions:c,headers:i,goToNewAssingResident:r,getAssingResident:n}}},N={class:"px-4 mt-10"},v={class:"flex justify-between"},T={class:"px-4"};function y(t,i,o,n,c,r){const e=s("arrow-back"),l=s("home-page"),_=s("title-bar"),m=s("button-base"),p=s("table-base");return B(),k("main",N,[d("div",v,[a(e),a(l)]),a(_,{title:"Asignación Residente",subtitle:"Inicio"}),d("section",T,[a(m,{label:"Nueva  Asignación",onClick:n.goToNewAssingResident,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),a(p,{options:n.featureOptions,headers:n.headers,data:n.assingResident},null,8,["options","headers","data"])])])}const V=R(I,[["render",y]]);export{V as default};
