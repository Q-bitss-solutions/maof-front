import{I as _}from"./InputBase-ab780e4b.js";import{T as b}from"./TextAreaBase-0f0f8e9b.js";import{B as u}from"./ButtonBase-0e6a63e9.js";import{S as f}from"./SelectBase-4983151f.js";import{f as A}from"./reviewArea-38c84c4c.js";import{f as g}from"./contractor-747e829e.js";import{f as V}from"./fetchApi-6cee2dfc.js";import{b as v}from"./project-3aaf16e8.js";import{_ as y,k as C,a as d,o as z,c as x,g as l}from"./index-5a10a7e2.js";const U=()=>V({url:"/cat-tipo-contrato/",method:"GET"});const B={name:"FormCollaborationAgreements",props:{editMode:{type:Boolean,default:!1},collaborationAgreements:{type:Object,default:()=>({})}},components:{InputBase:_,ButtonBase:u,SelectBase:f,TextAreaBase:b},setup(m,{emit:e}){const n=C({collaborationAgreements:{numero_contrato:"",id_proyecto:"",id_contratista:"",id_area_revisora:"",id_tipo_contrato:"",monto_sin_iva:"",plazo_inicio:"",plazo_fin:"",objeto_contrato:""},idAreaRevisora:"",listReviewAreas:[],listProyects:[],listContratista:[],listTypeContracts:[]});m.editMode&&(n.collaborationAgreements=m.collaborationAgreements,delete m.collaborationAgreements.id_contrato_padre,n.collaborationAgreements.plazo_inicio=m.collaborationAgreements.plazo_inicio.split("-").reverse().join("-"),n.collaborationAgreements.plazo_fin=m.collaborationAgreements.plazo_fin.split("-").reverse().join("-"));const o=()=>e("submit",n.collaborationAgreements),p=async()=>{const{data:i}=await v();n.listProyects=i.map(a=>({value:a.id_proyecto,label:`${a.clave_cartera} - ${a.nombre_proyecto}`}))},c=async()=>{const{data:i}=await A();n.listReviewAreas=i.map(a=>({value:a.id,label:`${a.id_unidad_maof} - ${a.nombre_unidad}`,id_unit_maof:a.id_unidad_maof})),n.listReviewAreas.sort((a,t)=>a.id_unit_maof>t.id_unit_maof?1:a.id_unit_maof<t.id_unit_maof?-1:0)},r=async()=>{const{data:i}=await g();i.forEach(a=>{a.estatus_contratista==="Activo"&&n.listContratista.push({value:a.id_contratista,label:a.nombre_contratista})})},s=async()=>{const{data:i}=await U();i.forEach(a=>{a.tipo_contrato_nombre!=="Convenio Modificatorio"&&n.listTypeContracts.push({value:a.tipo_contrato,label:`${a.tipo_contrato} - ${a.tipo_contrato_nombre}`})})};return c(),r(),s(),p(),{app:n,sendForm:o,getReviewAreas:c,getContratistas:r,getTypeContracts:s,getProjects:p}}},T={class:"max-w-xl mx-auto"};function j(m,e,n,o,p,c){const r=d("select-base"),s=d("input-base"),i=d("text-area-base"),a=d("button-base");return z(),x("div",T,[l(r,{id:"tipo_contrato",label:"Tipo",options:o.app.listTypeContracts,class:"mb-3",modelValue:o.app.collaborationAgreements.id_tipo_contrato,"onUpdate:modelValue":e[0]||(e[0]=t=>o.app.collaborationAgreements.id_tipo_contrato=t)},null,8,["options","modelValue"]),l(r,{id:"proyecto",label:"Número de proyecto (Cartera de Inversión)",options:o.app.listProyects,class:"mb-3",modelValue:o.app.collaborationAgreements.id_proyecto,"onUpdate:modelValue":e[1]||(e[1]=t=>o.app.collaborationAgreements.id_proyecto=t)},null,8,["options","modelValue"]),l(r,{id:"Contratista",label:"Contratista",options:o.app.listContratista,class:"mb-3",modelValue:o.app.collaborationAgreements.id_contratista,"onUpdate:modelValue":e[2]||(e[2]=t=>o.app.collaborationAgreements.id_contratista=t)},null,8,["options","modelValue"]),l(r,{id:"empleado_maof",label:"Unidad MAOF",options:o.app.listReviewAreas,class:"mb-3",modelValue:o.app.collaborationAgreements.id_area_revisora,"onUpdate:modelValue":e[3]||(e[3]=t=>o.app.collaborationAgreements.id_area_revisora=t)},null,8,["options","modelValue"]),l(s,{id:"numero_Contrato",label:"Número de Contrato o Convenio de Colaboración",type:"text",class:"mb-3",modelValue:o.app.collaborationAgreements.numero_contrato,"onUpdate:modelValue":e[4]||(e[4]=t=>o.app.collaborationAgreements.numero_contrato=t)},null,8,["modelValue"]),l(i,{id:"objeto",label:"Objeto",class:"mb-3",modelValue:o.app.collaborationAgreements.objeto_contrato,"onUpdate:modelValue":e[5]||(e[5]=t=>o.app.collaborationAgreements.objeto_contrato=t)},null,8,["modelValue"]),l(s,{id:"monto",label:"Monto sin IVA",type:"number",class:"mb-3",modelValue:o.app.collaborationAgreements.monto_sin_iva,"onUpdate:modelValue":e[6]||(e[6]=t=>o.app.collaborationAgreements.monto_sin_iva=t)},null,8,["modelValue"]),l(s,{id:"plazo_inicio",label:"Plazo (inicio)",type:"date",class:"mb-3",modelValue:o.app.collaborationAgreements.plazo_inicio,"onUpdate:modelValue":e[7]||(e[7]=t=>o.app.collaborationAgreements.plazo_inicio=t)},null,8,["modelValue"]),l(s,{id:"plazo_fin",label:"Plazo (fin)",type:"date",class:"mb-3",modelValue:o.app.collaborationAgreements.plazo_fin,"onUpdate:modelValue":e[8]||(e[8]=t=>o.app.collaborationAgreements.plazo_fin=t)},null,8,["modelValue"]),l(a,{label:"Guardar",onClick:o.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])}const O=y(B,[["render",j]]);export{O as F};
