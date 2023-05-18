import{T as _}from"./TableBase-696e20dd.js";import{f,d as p}from"./SICTUnits-ad357958.js";import{A as b}from"./ArrowBack-9533764d.js";import{B}from"./ButtonBase-1ec2bc1c.js";import{_ as h,u as w,r as C,a as t,o as I,c as T,g as o,b as v}from"./index-8b43d3da.js";import{T as U}from"./fetchApi-b713d3e3.js";import{S as c}from"./sweetalert2.all-281a79b7.js";const x={name:"UnitMAOFIndex",components:{TableBase:_,ArrowBack:b,ButtonBase:B,TitleBar:U},setup(){const n=w(),d=[{label:"Id",field:"clave_unidad"},{label:"Unidad SICT",field:"unidad"},{label:"Estatus",field:"estado_unidad_maof"}],s=C([]),a=async()=>{const{data:e}=await f();s.value=e},l=[{label:"Editar",action:e=>{n.push({name:"EditUnitMAOF",params:{unityMAOFId:e.id_unidad_maof}})}},{label:"Eliminar",action:async e=>{c.fire({title:`Estás seguro que desea inactivar la unidad "${e.unidad}"?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Inactivar!",reverseButtons:!0}).then(async r=>{if(r.isConfirmed)try{await p(e.id_unidad_maof),await a(),c.fire("¡Inactivo!","La unidad se inactivó","success")}catch(i){c.fire("Error",`${i.response.data.detail}`,"error")}})}}],m=()=>n.push({name:"NewUnitMAOF"});return a(),{resident:s,featureOptions:l,headers:d,goToNewResident:m}}},A={class:"px-4 mt-10"},O={class:"px-4"};function k(n,d,s,a,l,m){const e=t("arrow-back"),r=t("title-bar"),i=t("button-base"),u=t("table-base");return I(),T("main",A,[o(e),o(r,{title:"Unidades MAOF",subtitle:"Inicio"}),v("section",O,[o(i,{label:"Nueva Unidad MAOF",onClick:a.goToNewResident,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),o(u,{options:a.featureOptions,headers:a.headers,data:a.resident},null,8,["options","headers","data"])])])}const R=h(x,[["render",k]]);export{R as default};
