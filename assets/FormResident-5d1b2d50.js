import{I as b}from"./InputBase-3ef7a80f.js";import{B as u}from"./ButtonBase-6f308546.js";import{S as v}from"./SelectBase-c842b064.js";import{f as R}from"./reviewArea-5cdbe662.js";import{f as y}from"./users-cb5ff235.js";import{S as A}from"./sweetalert2.all-281a79b7.js";import{_ as E,k as V,a as n,o as m,c as w,e as c,f as _,g as f}from"./index-813ba7d4.js";const B={name:"FormResident",props:{editMode:{type:Boolean,default:!1},resident:{type:Object,default:()=>({})}},components:{InputBase:b,ButtonBase:u,SelectBase:v},setup(l,{emit:o}){const e=V({resident:{id_empleado_maof:"",fecha_inicio_residente:"",fecha_fin_residente:""},idAreaRevisora:"",disabled:!1,listReviewAreas:[],listEmpleados:[]});l.editMode&&(e.resident=l.resident,e.resident.fecha_inicio_residente=l.resident.fecha_inicio_residente.split("-").reverse().join("-"));const a=()=>o("submit",e.resident),r=async()=>{const{data:i}=await R();console.log(i),e.listReviewAreas=i.map(s=>({value:s.id_unidad_maof,label:s.nombre_unidad})),console.log(e.listReviewAreas)},p=async()=>{try{const{data:i}=await y(e.idAreaRevisora);let s=[];i.forEach(d=>{d.rol_maof==="Residente"&&s.push({value:d.empleado_maof,label:d.nombre_completo})}),e.listEmpleados=s,e.disabled=!1}catch(i){A.fire("Error",`${i.response.data.detail}`,"error"),e.disabled=!0,e.listEmpleados=[]}};return r(),{app:e,sendForm:a,getReviewAreas:r,getEmpleadosSICT:p}}},h={class:"max-w-xl mx-auto"};function k(l,o,e,a,r,p){const i=n("select-base"),s=n("input-base"),d=n("button-base");return m(),w("div",h,[e.editMode!==!0?(m(),c(i,{key:0,id:"id_area_revisora",label:"Área revisora",options:a.app.listReviewAreas,modelValue:a.app.idAreaRevisora,"onUpdate:modelValue":o[0]||(o[0]=t=>a.app.idAreaRevisora=t),onChange:o[1]||(o[1]=t=>a.getEmpleadosSICT()),class:"mb-3"},null,8,["options","modelValue"])):_("",!0),e.editMode!==!0?(m(),c(i,{key:1,id:"id_empleado_maof",label:"Empleado MAOF",options:a.app.listEmpleados,class:"mb-3",modelValue:a.app.resident.id_empleado_maof,"onUpdate:modelValue":o[2]||(o[2]=t=>a.app.resident.id_empleado_maof=t),disabled:a.app.disabled},null,8,["options","modelValue","disabled"])):_("",!0),f(s,{id:"fecha_inicio_proyecto",label:"Fecha inicio del residente",type:"date",class:"mb-3",modelValue:a.app.resident.fecha_inicio_residente,"onUpdate:modelValue":o[3]||(o[3]=t=>a.app.resident.fecha_inicio_residente=t)},null,8,["modelValue"]),f(d,{label:"Guardar",onClick:a.sendForm,class:"mr-0 ml-auto",disabled:a.app.disabled},null,8,["onClick","disabled"])])}const O=E(B,[["render",k]]);export{O as F};