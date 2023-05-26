import{T as p}from"./TableBase-d706d569.js";import{a as b,d as h}from"./SICTUnits-f84b9dad.js";import{A as B}from"./ArrowBack-d5c976a3.js";import{H as w}from"./HomePage-ba747c1b.js";import{B as v}from"./ButtonBase-e63b82f1.js";import{_ as I,u as g,r as x,a,o as A,c as C,b as u,g as o}from"./index-47f549d9.js";import{T as O}from"./fetchApi-cca32d48.js";import{S as c}from"./sweetalert2.all-281a79b7.js";const T={name:"UnitMAOFIndex",components:{TableBase:p,ArrowBack:B,HomePage:w,ButtonBase:v,TitleBar:O},setup(){const n=g(),d=[{label:"Id",field:"clave_unidad"},{label:"Unidad MAOF",field:"unidad"},{label:"Estatus",field:"estado_unidad_maof"}],s=x([]),t=async()=>{const{data:e}=await b();s.value=e},l=[{label:"Editar",action:e=>{n.push({name:"EditUnitMAOF",params:{unityMAOFId:e.id_unidad_maof}})}},{label:"Inactivar",action:async e=>{c.fire({title:`Estás seguro que deseas inactivar la unidad "${e.unidad}"?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Inactivar!",reverseButtons:!0}).then(async i=>{if(i.isConfirmed)try{await h(e.id_unidad_maof),await t(),c.fire("¡Inactivo!","La unidad se inactivó","success")}catch(r){c.fire("Error",`${r.response.data.detail}`,"error")}})}}],m=()=>n.push({name:"NewUnitMAOF"});return t(),{resident:s,featureOptions:l,headers:d,goToNewResident:m}}},U={class:"px-4 mt-10"},k={class:"flex justify-between"},F={class:"px-4"};function M(n,d,s,t,l,m){const e=a("arrow-back"),i=a("home-page"),r=a("title-bar"),_=a("button-base"),f=a("table-base");return A(),C("main",U,[u("div",k,[o(e),o(i)]),o(r,{title:"Unidades MAOF",subtitle:"Inicio"}),u("section",F,[o(_,{label:"Nueva Unidad MAOF",onClick:t.goToNewResident,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),o(f,{options:t.featureOptions,headers:t.headers,data:t.resident},null,8,["options","headers","data"])])])}const j=I(T,[["render",M]]);export{j as default};
