import{I as h}from"./InputBase-1bb0147f.js";import{B as V}from"./fetchApi-d28bf2c1.js";import{S as w}from"./SelectBase-b0c6035b.js";import{f as y}from"./resident-28ac4dac.js";import{f as F}from"./contract-de1202fb.js";import{_ as B}from"./PDF-a4bdfbbc.js";import{_ as x,m as U,b as g,o as b,c as v,e as d,d as c,t as k,h as N}from"./index-2a48b7f4.js";const A={name:"FormAssignResident",props:{editMode:{type:Boolean,default:!1},assingResident:{type:Object,default:()=>({})}},components:{InputBase:h,ButtonBase:V,SelectBase:w},setup(p,{emit:n}){const a=U({assingResident:{id_contrato:"",id_residente:"",fecha_inicio_asignacion:"",archivo_asignacion:""},fileName:"",fileURl:"",listResident:[],listContract:[]});let e=new FormData;p.editMode&&(a.assingResident=p.assingResident,a.fileURl=a.assingResident.archivo_asignacion,a.fileName=a.assingResident.archivo_asignacion.split("/"),delete a.assingResident.archivo_asignacion,e.append("id_contrato",a.assingResident.id_contrato),e.append("id_residente",a.assingResident.id_residente),e.append("fecha_inicio_asignacion",a.assingResident.fecha_inicio_asignacion));const R=async()=>{e.append("id_contrato",a.assingResident.id_contrato),e.append("id_residente",a.assingResident.id_residente),e.append("fecha_inicio_asignacion",a.assingResident.fecha_inicio_asignacion),n("submit",e)},_=async()=>{const{data:i}=await F();a.listContract=i.map(t=>({value:t.id_contrato,label:t.numero_contrato,idAreaRevisora:t.id_area_revisora})),a.listContract.sort((t,o)=>t.label>o.label?1:t.label<o.label?-1:0),s()},s=async()=>{let i={},t={};const o=a.listContract.filter(f=>f.value==a.assingResident.id_contrato);if(o.length>0){t=o[0];const{idAreaRevisora:f}=t;i={id_area_revisora:f};const{data:C}=await y(i);a.listResident=C.map(l=>({value:l.id_residente,label:l.nombre_completo})),a.listResident.sort((l,u)=>l.label>u.label?1:l.label<u.label?-1:0)}},r=i=>{e.append("archivo_asignacion",i.target.files[0])},m=async()=>{window.open(`${a.fileURl}`,"_blank")};return _(),{app:a,formData:e,sendForm:R,getContracts:_,getResident:s,fileUpload:r,downloadFile:m}}},D={class:"max-w-xl mx-auto"},M={key:0,class:"flex flex-row justify-end"};function S(p,n,a,e,R,_){const s=g("select-base"),r=g("input-base"),m=g("button-base");return b(),v("div",D,[d(s,{id:"id_contrato",label:"Contrato",options:e.app.listContract,modelValue:e.app.assingResident.id_contrato,"onUpdate:modelValue":n[0]||(n[0]=i=>e.app.assingResident.id_contrato=i),class:"mb-3",onChange:n[1]||(n[1]=i=>e.getResident(e.app.assingResident.id_contrato))},null,8,["options","modelValue"]),d(s,{id:"id_residente",label:"Residente",options:e.app.listResident,class:"mb-3",modelValue:e.app.assingResident.id_residente,"onUpdate:modelValue":n[2]||(n[2]=i=>e.app.assingResident.id_residente=i)},null,8,["options","modelValue"]),d(r,{id:"fecha_inicio_asignacion",label:"Fecha de asignación del Residente",type:"date",class:"mb-3",modelValue:e.app.assingResident.fecha_inicio_asignacion,"onUpdate:modelValue":n[3]||(n[3]=i=>e.app.assingResident.fecha_inicio_asignacion=i)},null,8,["modelValue"]),c("div",null,[c("div",null,[d(r,{id:"archivo_asignacion",label:"Carga oficio de designación",type:"file",class:"mb-3",accept:"application/pdf",onChange:e.fileUpload},null,8,["onChange"])]),a.editMode===!0?(b(),v("div",M,[c("span",null,k(e.app.fileName[5]),1),c("img",{src:B,class:"w-12 h-12",onClick:n[4]||(n[4]=(...i)=>e.downloadFile&&e.downloadFile(...i)),alt:"PDF"})])):N("",!0)]),d(m,{label:"Guardar",onClick:e.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])}const z=x(A,[["render",S]]);export{z as F};
