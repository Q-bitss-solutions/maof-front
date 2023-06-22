import{I as g}from"./InputBase-3936129a.js";import{T as b}from"./TextAreaBase-287aa855.js";import{B as u}from"./fetchApi-08fbfcdf.js";import{S as f}from"./SelectBase-16288218.js";import{f as A}from"./reviewArea-512b5701.js";import{f as v}from"./contractor-458766ac.js";import{a as y,f as V}from"./contract-5285ef34.js";import{f as C}from"./project-b2b7271e.js";import{_ as z,m as x,b as p,o as w,c as B,e as r}from"./index-74a76aef.js";const U={name:"FormAmendingAgreement",props:{editMode:{type:Boolean,default:!1},amendingAgreement:{type:Object,default:()=>({})}},components:{InputBase:g,ButtonBase:u,SelectBase:f,TextAreaBase:b},setup(d,{emit:o}){const n=x({amendingAgreement:{numero_contrato:"",id_contratista:"",id_area_revisora:"",id_proyecto:"",id_contrato_padre:"",id_tipo_contrato:3,monto_sin_iva:"",plazo_inicio:"",plazo_fin:"",objeto_contrato:""},idAreaRevisora:"",listReviewAreas:[],listContratista:[],listConvenioContrato:[],listProyects:[]});d.editMode&&(n.amendingAgreement=d.amendingAgreement,n.amendingAgreement.plazo_inicio=d.amendingAgreement.plazo_inicio.split("-").reverse().join("-"),n.amendingAgreement.plazo_fin=d.amendingAgreement.plazo_fin.split("-").reverse().join("-"));const a=()=>o("submit",n.amendingAgreement),_=async()=>{const{data:t}=await A();n.listReviewAreas=t.map(e=>({value:e.id,label:`${e.id_unidad_maof} - ${e.nombre_unidad}`})),n.listReviewAreas.sort((e,i)=>e.label>i.label?1:e.label<i.label?-1:0)},c=async()=>{const{data:t}=await v();t.forEach(e=>{e.estatus_contratista==="Activo"&&n.listContratista.push({value:e.id_contratista,label:e.nombre_contratista})}),n.listContratista.sort((e,i)=>e.label>i.label?1:e.label<i.label?-1:0)},m=async()=>{const{data:t}=await y(n.amendingAgreement.id_contrato_padre);n.amendingAgreement.id_proyecto=t.id_proyecto,n.amendingAgreement.id_contratista=t.id_contratista,n.amendingAgreement.id_area_revisora=t.id_area_revisora},l=async()=>{const{data:t}=await C();n.listProyects=t.map(e=>({value:e.id_proyecto,label:`${e.clave_cartera} - ${e.nombre_proyecto}`})),n.listProyects.sort((e,i)=>e.label>i.label?1:e.label<i.label?-1:0)},s=async()=>{const{data:t}=await V();n.listConvenioContrato=t.map(e=>({value:e.id_contrato,label:`${e.id_contrato} - ${e.numero_contrato}`})),n.listConvenioContrato.sort((e,i)=>e.label>i.label?1:e.label<i.label?-1:0)};return _(),c(),s(),l(),{app:n,sendForm:a,getReviewAreas:_,getContratistas:c,getContracts:s,getInfoContrato:m,getProjects:l}}},P={class:"max-w-xl mx-auto"};function j(d,o,n,a,_,c){const m=p("select-base"),l=p("input-base"),s=p("text-area-base"),t=p("button-base");return w(),B("div",P,[r(m,{id:"id_area_revisora",label:"Contrato o Convenio de Colaboración",options:a.app.listConvenioContrato,class:"mb-3",modelValue:a.app.amendingAgreement.id_contrato_padre,"onUpdate:modelValue":o[0]||(o[0]=e=>a.app.amendingAgreement.id_contrato_padre=e),onChange:o[1]||(o[1]=e=>a.getInfoContrato())},null,8,["options","modelValue"]),r(m,{id:"id_numero_proyecto",label:"Número de proyecto (Cartera de Inversión)",options:a.app.listProyects,class:"mb-3",modelValue:a.app.amendingAgreement.id_proyecto,"onUpdate:modelValue":o[2]||(o[2]=e=>a.app.amendingAgreement.id_proyecto=e),disabled:""},null,8,["options","modelValue"]),r(m,{id:"id_area_revisora",label:"Contratista",options:a.app.listContratista,class:"mb-3",modelValue:a.app.amendingAgreement.id_contratista,"onUpdate:modelValue":o[3]||(o[3]=e=>a.app.amendingAgreement.id_contratista=e),disabled:""},null,8,["options","modelValue"]),r(m,{id:"id_empleado_maof",label:"Unidad MAOF",options:a.app.listReviewAreas,class:"mb-3",modelValue:a.app.amendingAgreement.id_area_revisora,"onUpdate:modelValue":o[4]||(o[4]=e=>a.app.amendingAgreement.id_area_revisora=e),disabled:""},null,8,["options","modelValue"]),r(l,{id:"fecha_inicio_proyecto",label:"Número de Convenio Modificatorio",type:"text",class:"mb-3",modelValue:a.app.amendingAgreement.numero_contrato,"onUpdate:modelValue":o[5]||(o[5]=e=>a.app.amendingAgreement.numero_contrato=e)},null,8,["modelValue"]),r(s,{id:"fecha_inicio_proyecto",label:"Objeto",class:"mb-3",modelValue:a.app.amendingAgreement.objeto_contrato,"onUpdate:modelValue":o[6]||(o[6]=e=>a.app.amendingAgreement.objeto_contrato=e)},null,8,["modelValue"]),r(l,{id:"fecha_inicio_proyecto",label:"Monto sin IVA",type:"number",class:"mb-3",modelValue:a.app.amendingAgreement.monto_sin_iva,"onUpdate:modelValue":o[7]||(o[7]=e=>a.app.amendingAgreement.monto_sin_iva=e)},null,8,["modelValue"]),r(l,{id:"fecha_inicio_proyecto",label:"Plazo (inicio)",type:"date",class:"mb-3",modelValue:a.app.amendingAgreement.plazo_inicio,"onUpdate:modelValue":o[8]||(o[8]=e=>a.app.amendingAgreement.plazo_inicio=e)},null,8,["modelValue"]),r(l,{id:"fecha_inicio_proyecto",label:"Plazo (fin)",type:"date",class:"mb-3",modelValue:a.app.amendingAgreement.plazo_fin,"onUpdate:modelValue":o[9]||(o[9]=e=>a.app.amendingAgreement.plazo_fin=e)},null,8,["modelValue"]),r(t,{label:"Guardar",onClick:a.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])}const T=z(U,[["render",j]]);export{T as F};
