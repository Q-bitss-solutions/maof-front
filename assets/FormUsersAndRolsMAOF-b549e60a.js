import{I as V}from"./InputBase-3936129a.js";import{a as g,B as x}from"./fetchApi-08fbfcdf.js";import{S as y}from"./SelectBase-16288218.js";import{f as U}from"./SICTUnits-b1b49cfc.js";import{f as k}from"./reviewArea-512b5701.js";import{u as w,c as t,r as u,e as O}from"./index-555acf91.js";import{S as q}from"./sweetalert2.all-281a79b7.js";import{_ as B,m as E,s as $,b as F,o as s,c as n,e as d,F as c,f as p,t as f,h as _}from"./index-74a76aef.js";const C=()=>g({url:"/cat_rol_maof/",method:"GET"}),S={name:"FormUnitMAOF",props:{editMode:{type:Boolean,default:!1},userAndRols:{type:Object,default:()=>({})}},components:{InputBase:V,ButtonBase:x,SelectBase:y},setup(b,{emit:l}){const a=E({userAndRols:{correo_electronico:"",nombre:"",apellido_materno:"",apellido_paterno:"",rol_maof:"",unidad_maof:""},listUnitsMAOF:[],listRolesMAOF:[]});b.editMode&&(a.userAndRols=b.userAndRols,a.userAndRols.rol_maof=b.userAndRols.rol_maof_id,a.userAndRols.unidad_maof=b.userAndRols.unidad_maof_id);const o=$(()=>({correo_electronico:{required:t.withMessage("El email es requerido",u),correo_electronico:t.withMessage("No es un correo valido",O)},nombre:{required:t.withMessage("El nombre es requerido",u)},apellido_paterno:{required:t.withMessage("El apellido paterno es requerido",u)},apellido_materno:{required:t.withMessage("El apellido materno es requerido",u)},rol_maof:{required:t.withMessage("El rol es requerido",u)},unidad_maof:{required:t.withMessage("La unidad es requerido",u)}})),v=w(o,a.userAndRols),M=async m=>{if(a.listUnitsMAOF=[],m!=="2"){const{data:e}=await U();a.listUnitsMAOF=e.map(r=>({value:r.id_unidad_maof,label:r.unidad})),a.listUnitsMAOF.sort((r,A)=>r.label>A.label?1:r.label<A.label?-1:0)}else{const{data:e}=await k();a.listUnitsMAOF=e.map(r=>({value:r.id,label:r.nombre_unidad})),a.listUnitsMAOF.sort((r,A)=>r.label>A.label?1:r.label<A.label?-1:0)}},i=async()=>{const{data:m}=await C();a.listRolesMAOF=m.map(e=>({value:e.rol_maof,label:e.nombre_rol_maof})),a.listRolesMAOF.sort((e,r)=>e.label>r.label?1:e.label<r.label?-1:0)},R=async()=>{await v.value.$validate()?l("submit",a.userAndRols):q.fire("Error","Revisa bien los datos","error")};return i(),M(),{app:a,v$:v,sendForm:R,getUnitsAndReviewArea:M}}},I={class:"max-w-xl mx-auto"};function N(b,l,a,o,v,M){const i=F("input-base"),R=F("select-base"),m=F("button-base");return s(),n("div",I,[d(i,{id:"aPaterno",label:"Apellido Paterno",class:"mb-3",modelValue:o.app.userAndRols.apellido_paterno,"onUpdate:modelValue":l[0]||(l[0]=e=>o.app.userAndRols.apellido_paterno=e)},null,8,["modelValue"]),o.v$.apellido_paterno.$error?(s(!0),n(c,{key:0},p(o.v$.apellido_paterno.$errors,e=>(s(),n("span",{key:e,class:"text-red font-semibold text-center ml-80"},f(e.$message),1))),128)):_("",!0),d(i,{id:"aMaterno",label:"Apellido Materno",class:"mb-3",modelValue:o.app.userAndRols.apellido_materno,"onUpdate:modelValue":l[1]||(l[1]=e=>o.app.userAndRols.apellido_materno=e)},null,8,["modelValue"]),o.v$.apellido_materno.$error?(s(!0),n(c,{key:1},p(o.v$.apellido_materno.$errors,e=>(s(),n("span",{key:e,class:"text-red font-semibold text-center ml-80"},f(e.$message),1))),128)):_("",!0),d(i,{id:"nombre",label:"Nombre(s)",class:"mb-3",modelValue:o.app.userAndRols.nombre,"onUpdate:modelValue":l[2]||(l[2]=e=>o.app.userAndRols.nombre=e)},null,8,["modelValue"]),o.v$.nombre.$error?(s(!0),n(c,{key:2},p(o.v$.nombre.$errors,e=>(s(),n("span",{key:e,class:"text-red font-semibold text-center ml-80"},f(e.$message),1))),128)):_("",!0),d(R,{id:"id_rol_maof",label:"Rol en el sistema",options:o.app.listRolesMAOF,class:"mb-3",modelValue:o.app.userAndRols.rol_maof,"onUpdate:modelValue":l[3]||(l[3]=e=>o.app.userAndRols.rol_maof=e),onChange:l[4]||(l[4]=e=>o.getUnitsAndReviewArea(o.app.userAndRols.rol_maof))},null,8,["options","modelValue"]),o.v$.rol_maof.$error?(s(!0),n(c,{key:3},p(o.v$.rol_maof.$errors,e=>(s(),n("span",{key:e,class:"text-red font-semibold text-center ml-80"},f(e.$message),1))),128)):_("",!0),d(R,{id:"id_unidad_maof",label:"Unidad MAOF",options:o.app.listUnitsMAOF,modelValue:o.app.userAndRols.unidad_maof,"onUpdate:modelValue":l[5]||(l[5]=e=>o.app.userAndRols.unidad_maof=e),class:"mb-3"},null,8,["options","modelValue"]),o.v$.unidad_maof.$error?(s(!0),n(c,{key:4},p(o.v$.unidad_maof.$errors,e=>(s(),n("span",{key:e,class:"text-red font-semibold text-center ml-80"},f(e.$message),1))),128)):_("",!0),d(i,{id:"email",label:"Correo electrónico",class:"mb-3",type:"email",modelValue:o.app.userAndRols.correo_electronico,"onUpdate:modelValue":l[6]||(l[6]=e=>o.app.userAndRols.correo_electronico=e)},null,8,["modelValue"]),o.v$.correo_electronico.$error?(s(!0),n(c,{key:5},p(o.v$.correo_electronico.$errors,e=>(s(),n("span",{key:e,class:"text-red font-semibold text-center ml-80"},f(e.$message),1))),128)):_("",!0),d(m,{label:"Guardar",onClick:o.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])}const H=B(S,[["render",N]]);export{H as F};
