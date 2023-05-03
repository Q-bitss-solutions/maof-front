import{B as c}from"./ButtonBase-e9b6588b.js";import{S as _}from"./SelectBase-a4a56be3.js";import{f as p}from"./SICTUnits-9b281a2e.js";import{_ as u,k as f,a as i,o as v,c as b,g as r}from"./index-6b6e47c4.js";const w={name:"FormReviewArea",props:{editMode:{type:Boolean,default:!1},reviewArea:{type:Object,default:()=>({})}},components:{ButtonBase:c,SelectBase:_},setup(o,{emit:t}){const a=f({reviewArea:{id_unidad_maof:""},listSICTUnits:[]});o.editMode&&(a.reviewArea={...o.reviewArea,id_unidad_maof:`${o.reviewArea.id_unidad_maof}`});const e=()=>t("submit",a.reviewArea);return(async()=>{const{data:s}=await p();a.listSICTUnits=s.map(n=>({value:n.id_unidad_maof,label:n.unidad}))})(),{app:a,sendForm:e}}},A={class:"max-w-xl mx-auto"};function C(o,t,a,e,d,s){const n=i("select-base"),l=i("button-base");return v(),b("div",A,[r(n,{id:"clave_unidad",label:"Unidad SICT",modelValue:e.app.reviewArea.id_unidad_maof,"onUpdate:modelValue":t[0]||(t[0]=m=>e.app.reviewArea.id_unidad_maof=m),options:e.app.listSICTUnits,class:"mb-3"},null,8,["modelValue","options"]),r(l,{label:"Guardar",onClick:e.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])}const T=u(w,[["render",C]]);export{T as F};
