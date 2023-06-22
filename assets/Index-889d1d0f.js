import{T as b}from"./TableBase-ce8d7fe9.js";import{a as h,d as B}from"./SICTUnits-b1b49cfc.js";import{A as w}from"./ArrowBack-8b1ae337.js";import{H as v}from"./HomePage-5bca0920.js";import{B as g}from"./fetchApi-08fbfcdf.js";import{_ as C,u as I,r as x,b as o,o as A,c as O,d as c,e as a}from"./index-74a76aef.js";import{T}from"./TitleBar-03fc510a.js";import{S as d}from"./sweetalert2.all-281a79b7.js";import{L as U}from"./LogoutComponent-035f58b7.js";const k={name:"UnitMAOFIndex",components:{TableBase:b,ArrowBack:w,HomePage:v,ButtonBase:g,TitleBar:T,LogoutComponent:U},setup(){const n=I(),l=[{label:"Id",field:"clave_unidad"},{label:"Unidad MAOF",field:"unidad"},{label:"Estatus",field:"estado_unidad_maof"}],s=x([]),t=async()=>{const{data:e}=await h();s.value=e},m=[{label:"Editar",action:e=>{n.push({name:"EditUnitMAOF",params:{unityMAOFId:e.id_unidad_maof}})}},{label:"Inactivar",action:async e=>{d.fire({title:`Estás seguro que deseas inactivar la unidad "${e.unidad}"?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Inactivar!",reverseButtons:!0}).then(async i=>{if(i.isConfirmed)try{await B(e.id_unidad_maof),await t(),d.fire("¡Inactivo!","La unidad se inactivó","success")}catch(r){d.fire("Error",`${r.response.data.detail}`,"error")}})}}],u=()=>n.push({name:"NewUnitMAOF"});return t(),{resident:s,featureOptions:m,headers:l,goToNewResident:u}}},F={class:"px-4 mt-10"},M={class:"flex justify-between"},y={class:"px-4"};function E(n,l,s,t,m,u){const e=o("arrow-back"),i=o("home-page"),r=o("logout-component"),_=o("title-bar"),p=o("button-base"),f=o("table-base");return A(),O("main",F,[c("div",M,[a(e),c("div",null,[a(i),a(r)])]),a(_,{title:"Unidades MAOF",subtitle:"Inicio"}),c("section",y,[a(p,{label:"Nueva Unidad MAOF",onClick:t.goToNewResident,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),a(f,{options:t.featureOptions,headers:t.headers,data:t.resident},null,8,["options","headers","data"])])])}const P=C(k,[["render",E]]);export{P as default};