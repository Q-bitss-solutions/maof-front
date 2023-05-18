import{T as f}from"./TableBase-696e20dd.js";import{f as p,d as u}from"./resident-c2a1205e.js";import{A as b}from"./ArrowBack-9533764d.js";import{B as h}from"./ButtonBase-1ec2bc1c.js";import{_ as B,u as w,r as R,a,o as x,c as E,g as o,b as g}from"./index-8b43d3da.js";import{T as v}from"./fetchApi-b713d3e3.js";import{S as c}from"./sweetalert2.all-281a79b7.js";const C={name:"ResidenteIndex",components:{TableBase:f,ArrowBack:b,ButtonBase:h,TitleBar:v},setup(){const n=w(),d=[{label:"Id",field:"id_residente"},{label:"Nombre",field:"nombre_completo"},{label:"Unidad SICT",field:"unidad_sict"},{label:"Fecha de inicio",field:"fecha_inicio_residente"},{label:"Fecha de fin",field:"fecha_fin_residente"},{label:"Estado",field:"estado_residente"}],s=R([]),t=async()=>{const{data:e}=await p();s.value=e},l=[{label:"Editar",action:e=>{if(e.estado_residente==="Activo")n.push({name:"EditResident",params:{residentId:e.id_residente}});else return""}},{label:"Eliminar",action:async e=>{c.fire({title:`Estás seguro que desea inactivar el residente "${e.nombre_completo}"?`,text:"Esto finalizara las asignaciones del residente",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Inactivar!"}).then(async i=>{if(i.isConfirmed)try{await u(e.id_residente),await t(),c.fire("¡Inactivo!","El residente se inactivó","success")}catch(r){c.fire("Error",`${r.response.data.message}`,"error")}})}}],m=()=>n.push({name:"NewResident"});return t(),{resident:s,featureOptions:l,headers:d,goToNewResident:m}}},I={class:"px-4 mt-10"},T={class:"px-4"};function k(n,d,s,t,l,m){const e=a("arrow-back"),i=a("title-bar"),r=a("button-base"),_=a("table-base");return x(),E("main",I,[o(e),o(i,{title:"Residente",subtitle:"Inicio"}),g("section",T,[o(r,{label:"Nuevo Residente",onClick:t.goToNewResident,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),o(_,{options:t.featureOptions,headers:t.headers,data:t.resident},null,8,["options","headers","data"])])])}const $=B(C,[["render",k]]);export{$ as default};
