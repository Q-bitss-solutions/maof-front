import{I as f}from"./InputBase-89edb71c.js";import{B as b}from"./ButtonBase-313575ac.js";import{S as v}from"./SelectBase-2d1bc0d1.js";import{f as R}from"./reviewArea-dc908ded.js";import{f as V}from"./SCIT_Employees-f4d28cbd.js";import{_ as y,k as B,a as l,o as r,c as C,e as c,f as p,g as _}from"./index-ce9b0eb4.js";const k={name:"FormResident",props:{editMode:{type:Boolean,default:!1},resident:{type:Object,default:()=>({})}},components:{InputBase:f,ButtonBase:b,SelectBase:v},setup(n,{emit:a}){const o=B({resident:{id_empleado_sict:"",fecha_inicio_residente:"",fecha_fin_residente:""},idAreaRevisora:"",listReviewAreas:[],listEmpleados:[]});n.editMode&&(o.resident=n.resident,o.resident.fecha_inicio_residente=n.resident.fecha_inicio_residente.split("-").reverse().join("-"));const e=()=>a("submit",o.resident),d=async()=>{const{data:i}=await R();o.listReviewAreas=i.map(t=>({value:t.id,label:t.nombre_unidad}))},m=async()=>{const{data:i}=await V(o.idAreaRevisora);o.listEmpleados=i.map(t=>({value:t.empleado_sict,label:t.nombre_completo}))};return d(),{app:o,sendForm:e,getReviewAreas:d,getEmpleadosSICT:m}}},A={class:"max-w-xl mx-auto"};function E(n,a,o,e,d,m){const i=l("select-base"),t=l("input-base"),u=l("button-base");return r(),C("div",A,[o.editMode!==!0?(r(),c(i,{key:0,id:"id_area_revisora",label:"Área revisora",options:e.app.listReviewAreas,modelValue:e.app.idAreaRevisora,"onUpdate:modelValue":a[0]||(a[0]=s=>e.app.idAreaRevisora=s),onChange:a[1]||(a[1]=s=>e.getEmpleadosSICT()),class:"mb-3"},null,8,["options","modelValue"])):p("",!0),o.editMode!==!0?(r(),c(i,{key:1,id:"id_empleado_sict",label:"Empleado SICT",options:e.app.listEmpleados,class:"mb-3",modelValue:e.app.resident.id_empleado_sict,"onUpdate:modelValue":a[2]||(a[2]=s=>e.app.resident.id_empleado_sict=s)},null,8,["options","modelValue"])):p("",!0),_(t,{id:"fecha_inicio_proyecto",label:"Fecha inicio del residente",type:"date",class:"mb-3",modelValue:e.app.resident.fecha_inicio_residente,"onUpdate:modelValue":a[3]||(a[3]=s=>e.app.resident.fecha_inicio_residente=s)},null,8,["modelValue"]),_(u,{label:"Guardar",onClick:e.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])}const h=y(k,[["render",E]]);export{h as F};