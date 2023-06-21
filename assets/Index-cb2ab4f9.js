import{T as b}from"./TableBase-6582d812.js";import{f as h,d as B}from"./resident-62cf8c8b.js";import{A as w}from"./ArrowBack-e6c8a65f.js";import{H as g}from"./HomePage-f71174c1.js";import{B as v}from"./auth-f1c010b2.js";import{_ as R,u as x,r as C,a as o,o as E,c as I,b as c,d as n}from"./index-9c7881ce.js";import{T as k}from"./TitleBar-a7fd04ba.js";import{S as d}from"./sweetalert2.all-281a79b7.js";import{L as N}from"./LogoutComponent-c8cac54b.js";const T={name:"ResidenteIndex",components:{TableBase:b,ArrowBack:w,HomePage:g,ButtonBase:v,TitleBar:k,LogoutComponent:N},setup(){const a=x(),l=[{label:"Id",field:"id_residente"},{label:"Nombre",field:"nombre_completo"},{label:"Unidad MAOF",field:"unidad_maof"},{label:"Fecha de inicio",field:"fecha_inicio_residente"},{label:"Fecha de fin",field:"fecha_fin_residente"},{label:"Estado",field:"estado_residente"}],s=C([]),t=async()=>{const{data:e}=await h();s.value=e},m=[{label:"Editar",action:e=>{if(e.estado_residente==="Activo")a.push({name:"EditResident",params:{residentId:e.id_residente}});else return""}},{label:"Inactivar",action:async e=>{d.fire({title:`Estás seguro que deseas inactivar el residente "${e.nombre_completo}"?`,text:"Esto finalizara las asignaciones del residente",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Inactivar!",reverseButtons:!0}).then(async i=>{if(i.isConfirmed)try{await B(e.id_residente),await t(),d.fire("¡Inactivo!","El residente se inactivó","success")}catch(r){d.fire("Error",`${r.response.data.detail}`,"error")}})}}],_=()=>a.push({name:"NewResident"});return t(),{resident:s,featureOptions:m,headers:l,goToNewResident:_}}},y={class:"px-4 mt-10"},A={class:"flex justify-between"},F={class:"px-4"};function O(a,l,s,t,m,_){const e=o("arrow-back"),i=o("home-page"),r=o("logout-component"),f=o("title-bar"),p=o("button-base"),u=o("table-base");return E(),I("main",y,[c("div",A,[n(e),c("div",null,[n(i),n(r)])]),n(f,{title:"Residente",subtitle:"Inicio"}),c("section",F,[n(p,{label:"Nuevo Residente",onClick:t.goToNewResident,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),n(u,{options:t.featureOptions,headers:t.headers,data:t.resident},null,8,["options","headers","data"])])])}const P=R(T,[["render",O]]);export{P as default};