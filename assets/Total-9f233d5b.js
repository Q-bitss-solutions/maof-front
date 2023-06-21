import{T as g,D as v}from"./DetailEstimate-ad81c8e5.js";import{A as R}from"./ArrowBack-e6c8a65f.js";import{T}from"./TitleBar-a7fd04ba.js";import{H as w}from"./HomePage-f71174c1.js";import{B as C}from"./auth-f1c010b2.js";import{T as N}from"./ToggleSwtich-ce9b2d62.js";import{_ as B,r as u,u as y,a,o as h,c as A,b as d,d as n,f as I,g as k}from"./index-9c7881ce.js";import"./sweetalert2.all-281a79b7.js";import{a as D}from"./residentEstimate-f98c34ff.js";import{c as x}from"./consultas-635e79d4.js";import{L as O}from"./LogoutComponent-c8cac54b.js";import"./assingResident-cc83d359.js";import"./contract-980fe056.js";import"./PDF-a4bdfbbc.js";const P={name:"ConsultaPendientes",components:{TableroEstimacionResidente:g,ArrowBack:R,HomePage:w,ButtonBase:C,TitleBar:T,DetailEstimate:v,ToggleSwitch:N,LogoutComponent:O},setup(){const i=u({total:{},loading:!0}),c=[{label:"#",field:""},{label:"Contrato o Convenio de Colaboración",field:"numero_contrato"},{label:"Convenio Modificatorio",field:"numero_contrato_padre"},{label:" ",field:"documents"},{label:"# Estimación",field:"num_consecutivo_estimacion"},{label:"Inicio",field:"fecha_periodo_inicio_estimacion"},{label:"Fin",field:"fecha_periodo_fin_estimacion"},{label:"Alta",field:"fecha_alta"},{label:"Fecha de autorización",field:"fecha_autorizacion_contratista"},{label:"Días transcurridos",field:"dias_transcurridos"},{label:"RESIDENTE",field:"estatus_semaforo"},{label:"ÁREA REVISORA",field:"estatus_semaforo"},{label:"FINANZAS",field:"estatus_semaforo"},{label:"TRÁMITE DE PAGO",field:"estatus_semaforo"},{label:"PAGO",field:"estatus_semaforo"}],b=[{label:"Detalles",action:async t=>{l.value=!l.value;const{data:o}=await D(t.id_estimacion);o.fecha_recepcion_info_contratista=o.fecha_recepcion_info_contratista.split(" ")[0],o.fecha_periodo_inicio_estimacion=o.fecha_periodo_inicio_estimacion.split(" ")[0],o.fecha_periodo_fin_estimacion=o.fecha_periodo_fin_estimacion.split(" ")[0],_.value=o}},{label:"Nuevo",action:t=>e.push({name:"NewResidentEstimateById",params:{residentEstimateId:t.contrato_estimacion}})},{label:"Archivo",action:async t=>{e.push({name:"FilesResidentEstimate",params:{residentEstimateId:t.id_estimacion}})}},{label:"Histórico",action:async t=>{e.push({name:"HistoricoResidentEstimate",params:{residentEstimateId:t.id_estimacion}})}}],e=y(),r=x(),_=u([]);let l=u(!1),s=!1;const f=async()=>{s=!s,s===!0&&(i.value.total=r.filtros.pendientes),s===!1&&(i.value.total=r.filtros.total)},p=()=>e.push({name:"NewResidentEstimate"}),m=()=>{i.value.loading=!0,i.value.total=r.filtros.total,i.value.loading=!1};return m(),{app:i,procesoVariable:s,headers:c,featureOptions:b,detalleEstimacionData:_,detalleEstimacion:l,goToNewResidentEstimate:p,getQuery:m,processo:f}}},S={class:"px-4 mt-10"},V={class:"flex justify-between"},F={class:"px-4"},H={class:"flex justify-end"};function j(i,c,b,e,r,_){const l=a("arrow-back"),s=a("home-page"),f=a("logout-component"),p=a("title-bar"),m=a("detail-estimate"),t=a("button-base"),o=a("toggle-switch"),E=a("tablero-estimacion-residente");return h(),A("main",S,[d("div",V,[n(l),d("div",null,[n(s),n(f)])]),n(p,{title:"Estimación Residente",subtitle:"Totales"}),d("section",F,[d("div",H,[n(m,{data:e.detalleEstimacionData,isOpen:e.detalleEstimacion,onSubmit:c[0]||(c[0]=z=>e.detalleEstimacion=!1)},null,8,["data","isOpen"]),n(t,{label:"Nueva Estimación Residente",onClick:e.goToNewResidentEstimate,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),n(o,{label:"En Proceso",onChange:e.processo,class:"mb-3 mr-0 ml-10"},null,8,["onChange"])]),e.app.loading?k("",!0):(h(),I(E,{key:0,options:e.featureOptions,headers:e.headers,data:e.app.total},null,8,["options","headers","data"]))])])}const te=B(P,[["render",j]]);export{te as default};