import{I as R}from"./InputBase-aeccb3b2.js";import{B as b}from"./ButtonBase-0f30a1f8.js";import{S as v}from"./SelectBase-eb5912e9.js";import{f as h}from"./resident-555b7876.js";import{f as C}from"./contract-ded44f6b.js";import{_ as y}from"./PDF-a4bdfbbc.js";import{_ as V,k as w,a as m,o as g,c as u,g as l,b as c,t as F,f as B}from"./index-86322900.js";const k={name:"FormAssignResident",props:{editMode:{type:Boolean,default:!1},assingResident:{type:Object,default:()=>({})}},components:{InputBase:R,ButtonBase:b,SelectBase:v},setup(r,{emit:s}){const i=w({assingResident:{id_contrato:"",id_residente:"",fecha_inicio_asignacion:"",archivo_asignacion:""},fileName:"",fileURl:"",listResident:[],listContract:[]});let e=new FormData;r.editMode&&(i.assingResident=r.assingResident,i.fileURl=i.assingResident.archivo_asignacion,i.fileName=i.assingResident.archivo_asignacion.split("/"),delete i.assingResident.archivo_asignacion,e.append("id_contrato",i.assingResident.id_contrato),e.append("id_residente",i.assingResident.id_residente),e.append("fecha_inicio_asignacion",i.assingResident.fecha_inicio_asignacion));const f=async()=>{e.append("id_contrato",i.assingResident.id_contrato),e.append("id_residente",i.assingResident.id_residente),e.append("fecha_inicio_asignacion",i.assingResident.fecha_inicio_asignacion),s("submit",e)},p=async()=>{const{data:n}=await C();i.listContract=n.map(a=>({value:a.id_contrato,label:a.nombre_proyecto})),i.listContract.sort((a,o)=>a.value>o.value?1:a.value<o.value?-1:0)},t=async()=>{const{data:n}=await h();i.listResident=n.map(a=>({value:a.id_residente,label:a.nombre_completo})),i.listResident.sort((a,o)=>a.value>o.value?1:a.value<o.value?-1:0)},d=n=>{e.append("archivo_asignacion",n.target.files[0])},_=async()=>{window.open(`${i.fileURl}`,"_blank")};return p(),t(),{app:i,formData:e,sendForm:f,getContracts:p,getResident:t,fileUpload:d,downloadFile:_}}},x={class:"max-w-xl mx-auto"},U={key:0,class:"flex flex-row justify-end"};function N(r,s,i,e,f,p){const t=m("select-base"),d=m("input-base"),_=m("button-base");return g(),u("div",x,[l(t,{id:"id_contrato",label:"Contrato",options:e.app.listContract,modelValue:e.app.assingResident.id_contrato,"onUpdate:modelValue":s[0]||(s[0]=n=>e.app.assingResident.id_contrato=n),class:"mb-3"},null,8,["options","modelValue"]),l(t,{id:"id_residente",label:"Residente",options:e.app.listResident,class:"mb-3",modelValue:e.app.assingResident.id_residente,"onUpdate:modelValue":s[1]||(s[1]=n=>e.app.assingResident.id_residente=n)},null,8,["options","modelValue"]),l(d,{id:"fecha_inicio_asignacion",label:"Fecha de asignación del Residente",type:"date",class:"mb-3",modelValue:e.app.assingResident.fecha_inicio_asignacion,"onUpdate:modelValue":s[2]||(s[2]=n=>e.app.assingResident.fecha_inicio_asignacion=n)},null,8,["modelValue"]),c("div",null,[c("div",null,[l(d,{id:"archivo_asignacion",label:"Carga oficio de designación",type:"file",class:"mb-3",accept:"application/pdf",onChange:e.fileUpload},null,8,["onChange"])]),i.editMode===!0?(g(),u("div",U,[c("span",null,F(e.app.fileName[5]),1),c("img",{src:y,class:"w-12 h-12",onClick:s[3]||(s[3]=(...n)=>e.downloadFile&&e.downloadFile(...n))})])):B("",!0)]),l(_,{label:"Guardar",onClick:e.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])}const G=V(k,[["render",N]]);export{G as F};
