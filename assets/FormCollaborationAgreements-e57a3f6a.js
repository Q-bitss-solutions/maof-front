import{I as b}from"./InputBase-33838ec4.js";import{T as _}from"./TextAreaBase-25822eed.js";import{B as u}from"./ButtonBase-e9b6588b.js";import{S as A}from"./SelectBase-a4a56be3.js";import{f}from"./reviewArea-c9a041c6.js";import{f as g}from"./contractor-24d6a565.js";import{f as v}from"./TitleBar-9ddf3f8e.js";import{f as V}from"./project-96eb56e8.js";import{_ as y,k as C,a as p,o as z,c as x,g as n}from"./index-6b6e47c4.js";const T=()=>v({url:"/cat-tipo-contrato/",method:"GET"});const U={name:"FormCollaborationAgreements",props:{editMode:{type:Boolean,default:!1},collaborationAgreements:{type:Object,default:()=>({})}},components:{InputBase:b,ButtonBase:u,SelectBase:A,TextAreaBase:_},setup(m,{emit:a}){const l=C({collaborationAgreements:{numero_contrato:"",id_proyecto:"",id_contratista:"",id_area_revisora:"",id_tipo_contrato:"",monto_sin_iva:"",plazo_inicio:"",plazo_fin:"",objeto_contrato:""},idAreaRevisora:"",listReviewAreas:[],listProyects:[],listContratista:[],listTypeContracts:[]});m.editMode&&(l.collaborationAgreements=m.collaborationAgreements,delete m.collaborationAgreements.id_contrato_padre,l.collaborationAgreements.plazo_inicio=m.collaborationAgreements.plazo_inicio.split("-").reverse().join("-"),l.collaborationAgreements.plazo_fin=m.collaborationAgreements.plazo_fin.split("-").reverse().join("-"));const o=()=>a("submit",l.collaborationAgreements),c=async()=>{const{data:r}=await V();l.listProyects=r.map(e=>({value:e.id_proyecto,label:`${e.clave_cartera} - ${e.nombre_proyecto}`}))},d=async()=>{const{data:r}=await f();l.listReviewAreas=r.map(e=>({value:e.id,label:`${e.id_unidad_maof} - ${e.nombre_unidad}`})),l.listReviewAreas.sort((e,t)=>e.value>t.value?1:e.value<t.value?-1:0)},i=async()=>{const{data:r}=await g();r.forEach(e=>{e.estatus_contratista==="Activo"&&l.listContratista.push({value:e.id_contratista,label:e.nombre_contratista})})},s=async()=>{const{data:r}=await T();l.listTypeContracts=r.map(e=>({value:e.tipo_contrato,label:`${e.tipo_contrato} - ${e.tipo_contrato_nombre}`}))};return d(),i(),s(),c(),{app:l,sendForm:o,getReviewAreas:d,getContratistas:i,getTypeContracts:s,getProjects:c}}},w={class:"max-w-xl mx-auto"};function B(m,a,l,o,c,d){const i=p("select-base"),s=p("input-base"),r=p("text-area-base"),e=p("button-base");return z(),x("div",w,[n(i,{id:"tipo_contrato",label:"Tipo",options:o.app.listTypeContracts,class:"mb-3",modelValue:o.app.collaborationAgreements.id_tipo_contrato,"onUpdate:modelValue":a[0]||(a[0]=t=>o.app.collaborationAgreements.id_tipo_contrato=t)},null,8,["options","modelValue"]),n(i,{id:"proyecto",label:"Número de proyecto (Cartera de Inversión)",options:o.app.listProyects,class:"mb-3",modelValue:o.app.collaborationAgreements.id_proyecto,"onUpdate:modelValue":a[1]||(a[1]=t=>o.app.collaborationAgreements.id_proyecto=t)},null,8,["options","modelValue"]),n(i,{id:"Contratista",label:"Contratista",options:o.app.listContratista,class:"mb-3",modelValue:o.app.collaborationAgreements.id_contratista,"onUpdate:modelValue":a[2]||(a[2]=t=>o.app.collaborationAgreements.id_contratista=t)},null,8,["options","modelValue"]),n(i,{id:"empleado_sict",label:"Unidad SICT",options:o.app.listReviewAreas,class:"mb-3",modelValue:o.app.collaborationAgreements.id_area_revisora,"onUpdate:modelValue":a[3]||(a[3]=t=>o.app.collaborationAgreements.id_area_revisora=t)},null,8,["options","modelValue"]),n(s,{id:"numero_Contrato",label:"Número de Contrato o Convenio de Colaboración",type:"text",class:"mb-3",modelValue:o.app.collaborationAgreements.numero_contrato,"onUpdate:modelValue":a[4]||(a[4]=t=>o.app.collaborationAgreements.numero_contrato=t)},null,8,["modelValue"]),n(r,{id:"objeto",label:"Objeto",class:"mb-3",modelValue:o.app.collaborationAgreements.objeto_contrato,"onUpdate:modelValue":a[5]||(a[5]=t=>o.app.collaborationAgreements.objeto_contrato=t)},null,8,["modelValue"]),n(s,{id:"monto",label:"Monto sin IVA",type:"number",class:"mb-3",modelValue:o.app.collaborationAgreements.monto_sin_iva,"onUpdate:modelValue":a[6]||(a[6]=t=>o.app.collaborationAgreements.monto_sin_iva=t)},null,8,["modelValue"]),n(s,{id:"plazo_inicio",label:"Plazo (inicio)",type:"date",class:"mb-3",modelValue:o.app.collaborationAgreements.plazo_inicio,"onUpdate:modelValue":a[7]||(a[7]=t=>o.app.collaborationAgreements.plazo_inicio=t)},null,8,["modelValue"]),n(s,{id:"plazo_fin",label:"Plazo (fin)",type:"date",class:"mb-3",modelValue:o.app.collaborationAgreements.plazo_fin,"onUpdate:modelValue":a[8]||(a[8]=t=>o.app.collaborationAgreements.plazo_fin=t)},null,8,["modelValue"]),n(e,{label:"Guardar",onClick:o.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])}const S=y(U,[["render",B]]);export{S as F};
