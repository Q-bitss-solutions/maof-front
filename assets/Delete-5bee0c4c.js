import{I as y}from"./InputBase-52fc7926.js";import{B}from"./ButtonBase-2814ea9b.js";import{S as x}from"./SelectBase-c1480c03.js";import{f as A}from"./resident-a3ab28af.js";import{f as C}from"./contract-64c2117f.js";import{d as V,a as k,u as S}from"./assingResident-39b810af.js";import{_ as R,l as b,u as h,k as v,a as g,o as f,c as u,g as t,b as r,t as E,f as w,e as F}from"./index-51cc57b9.js";import{S as _}from"./sweetalert2.all-281a79b7.js";import{_ as D}from"./PDF-a4bdfbbc.js";import{A as I}from"./ArrowBack-d128ec5d.js";import{T as N}from"./fetchApi-d55dc87c.js";const U={name:"FormAssignResident",props:{editMode:{type:Boolean,default:!1},assingResident:{type:Object,default:()=>({})}},components:{InputBase:y,ButtonBase:B,SelectBase:x},setup(o,{emit:s}){b();const a=h(),e=v({assingResident:{id_contrato:"",id_residente:"",fecha_inicio_asignacion:"",fecha_fin_asignacion:"",archivo_asignacion:""},fileName:"",listResident:[],listContract:[]});let d=new FormData;o.editMode&&(e.assingResident=o.assingResident,e.fileName=o.assingResident.archivo_asignacion.split("/"));const m=async()=>{d.append("fecha_fin_asignacion",e.assingResident.fecha_fin_asignacion),_.fire({title:"Estas seguro que desea inactivar el registro?",text:"Esto inactiva la asignacion!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Inactivar!"}).then(async n=>{if(n.isConfirmed)try{await V(e.assingResident.id_asignacion_residente_contrato,d),_.fire("Eliminado!","La asignacion se inactivo","success"),a.push({name:"AssignResident"})}catch(c){_.fire("Error",`${c.response.data.detail}`,"error"),a.push({name:"AssignResident"})}})},l=async()=>{const{data:n}=await C();e.listContract=n.map(c=>({value:c.id_contrato,label:c.nombre_proyecto}))},i=async()=>{const{data:n}=await A();e.listResident=n.map(c=>({value:c.id_residente,label:c.nombre_completo}))},p=async()=>{window.open(`${e.assingResident.archivo_asignacion}`,"_blank")};return l(),i(),{app:e,formData:d,getContracts:l,getResident:i,downloadFile:p,deleteRegister:m}}},M={class:"max-w-xl mx-auto"},T={key:0,class:"flex flex-row justify-end"},j=r("div",null,[r("h4",{class:"text-2xl mt-4"},"¿Seguro de eliminar el registro?")],-1);function q(o,s,a,e,d,m){const l=g("select-base"),i=g("input-base"),p=g("button-base");return f(),u("div",M,[t(l,{id:"id_contrato",label:"Contrato",options:e.app.listContract,modelValue:e.app.assingResident.id_contrato,"onUpdate:modelValue":s[0]||(s[0]=n=>e.app.assingResident.id_contrato=n),class:"mb-3",disabled:""},null,8,["options","modelValue"]),t(l,{id:"id_residente",label:"Residente",options:e.app.listResident,class:"mb-3",modelValue:e.app.assingResident.id_residente,"onUpdate:modelValue":s[1]||(s[1]=n=>e.app.assingResident.id_residente=n),disabled:""},null,8,["options","modelValue"]),t(i,{id:"fecha_inicio_asignacion",label:"Fecha de asignación del Residente",type:"date",class:"mb-3",modelValue:e.app.assingResident.fecha_inicio_asignacion,"onUpdate:modelValue":s[2]||(s[2]=n=>e.app.assingResident.fecha_inicio_asignacion=n),disabled:""},null,8,["modelValue"]),r("div",null,[r("div",null,[t(i,{id:"archivo_asignacion",label:"Carga oficio de designación",type:"file",class:"mb-3",value:e.app.assingResident.archivo_asignacion,disabled:""},null,8,["value"])]),a.editMode===!0?(f(),u("div",T,[r("span",null,E(e.app.fileName[5]),1),r("img",{src:D,class:"w-12 h-12",onClick:s[3]||(s[3]=(...n)=>e.downloadFile&&e.downloadFile(...n))})])):w("",!0)]),t(i,{id:"fecha_fin_asignacion",label:"Fecha de asignación del Residente",type:"date",class:"mb-3",modelValue:e.app.assingResident.fecha_fin_asignacion,"onUpdate:modelValue":s[4]||(s[4]=n=>e.app.assingResident.fecha_fin_asignacion=n)},null,8,["modelValue"]),j,t(p,{label:"Eliminar",onClick:e.deleteRegister,class:"mr-0 ml-auto"},null,8,["onClick"])])}const L=R(U,[["render",q]]),O={name:"DeleteAssingResident",components:{DeleteAssignResident:L,ArrowBack:I,TitleBar:N},setup(){const o=b(),s=h(),a=v({assingResident:{},loading:!0}),e=async()=>{a.loading=!0;const{data:m}=await k(o.params.assingResidentId);a.assingResident=m,a.loading=!1},d=async m=>{await S(a.assingResident),_.fire("¡Éxito!","Asignacion inhabilitada con éxito!","success"),s.push({name:"AssignResident"})};return e(),{app:a,saveAssingResident:d}}},z={class:"px-4 mt-10"},G={class:"px-4"};function H(o,s,a,e,d,m){const l=g("arrow-back"),i=g("title-bar"),p=g("delete-assign-resident");return f(),u("main",z,[t(l),t(i,{title:"Asignación Residente",subtitle:"Eliminar"}),r("section",G,[e.app.loading?w("",!0):(f(),F(p,{key:0,onSubmit:e.saveAssingResident,assingResident:e.app.assingResident,"edit-mode":""},null,8,["onSubmit","assingResident"]))])])}const se=R(O,[["render",H]]);export{se as default};
