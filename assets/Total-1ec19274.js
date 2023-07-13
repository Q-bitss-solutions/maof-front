import{T as C,D as T}from"./DetailEstimate-ca3939be.js";import{T as A}from"./TitleBar-95cae43a.js";import{B as N}from"./fetchApi-ea3a2dff.js";import{T as y}from"./ToggleSwtich-cdc3bf3b.js";import{_ as B,a as I,r as u,u as D,b as s,o as b,c as w,e as d,d as R,g,h as v}from"./index-ae47c3ce.js";import"./sweetalert2.all-281a79b7.js";import{a as k}from"./residentEstimate-9b67d988.js";import{c as O}from"./consultas-cf193206.js";import{C as x}from"./CustomHeaderApp-790e617d.js";import"./contract-9a9b5be4.js";import"./PDF-a4bdfbbc.js";import"./ArrowBack-858e36ad.js";import"./HomePage-790bb899.js";import"./LogoutComponent-26312cbb.js";const S={name:"ConsultaPendientes",components:{TableroEstimacionResidente:C,ButtonBase:N,TitleBar:A,DetailEstimate:T,ToggleSwitch:y,CustomHeaderApp:x},setup(){const h=I(),{rol:n}=h.getAuthData,t=u({total:{},loading:!0}),e=[{label:"#",field:""},{label:"Contrato o Convenio de Colaboración",field:"numero_contrato"},{label:"Convenio Modificatorio",field:"numero_contrato_padre"},{label:" ",field:"documents"},{label:"# Estimación",field:"num_consecutivo_estimacion"},{label:"Inicio",field:"fecha_periodo_inicio_estimacion"},{label:"Fin",field:"fecha_periodo_fin_estimacion"},{label:"Alta",field:"fecha_alta"},{label:"Fecha de autorización",field:"fecha_autorizacion_contratista"},{label:"Días transcurridos",field:"dias_transcurridos"},{label:"RESIDENTE",field:"estatus_semaforo"},{label:"ÁREA REVISORA",field:"estatus_semaforo"},{label:"FINANZAS",field:"estatus_semaforo"},{label:"TRÁMITE DE PAGO",field:"estatus_semaforo"},{label:"PAGO",field:"estatus_semaforo"}],E=[{label:"Detalles",action:async o=>{r.value=!r.value;const{data:i}=await k(o.id_estimacion);i.fecha_recepcion_info_contratista=i.fecha_recepcion_info_contratista.split(" ")[0],i.fecha_periodo_inicio_estimacion=i.fecha_periodo_inicio_estimacion.split(" ")[0],i.fecha_periodo_fin_estimacion=i.fecha_periodo_fin_estimacion.split(" ")[0],m.value=i}},{label:"Nuevo",disabled:n!="Residente",action:o=>l.push({name:"NewResidentEstimateById",params:{residentEstimateId:o.contrato_estimacion}})},{label:"Archivo",action:async o=>{l.push({name:"FilesResidentEstimate",params:{residentEstimateId:o.id_estimacion}})}},{label:"Histórico",action:async o=>{l.push({name:"HistoricoResidentEstimate",params:{residentEstimateId:o.id_estimacion}})}}],l=D(),c=O(),m=u([]);let r=u(!1),a=!1;const _=async()=>{a=!a,a===!0&&(t.value.total=c.filtros.pendientes),a===!1&&(t.value.total=c.filtros.total)},f=()=>l.push({name:"NewResidentEstimate"}),p=()=>{t.value.loading=!0,t.value.total=c.filtros.total,t.value.loading=!1};return p(),{app:t,procesoVariable:a,headers:e,featureOptions:E,detalleEstimacionData:m,detalleEstimacion:r,rol:n,goToNewResidentEstimate:f,getQuery:p,processo:_}}},H={class:"px-4 mt-10"},V={class:"px-4"},F={class:"flex justify-end"};function P(h,n,t,e,E,l){const c=s("CustomHeaderApp"),m=s("title-bar"),r=s("detail-estimate"),a=s("button-base"),_=s("toggle-switch"),f=s("tablero-estimacion-residente");return b(),w("main",H,[d(c),d(m,{title:"Estimación Residente",subtitle:"Totales"}),R("section",V,[R("div",F,[d(r,{data:e.detalleEstimacionData,isOpen:e.detalleEstimacion,onSubmit:n[0]||(n[0]=p=>e.detalleEstimacion=!1)},null,8,["data","isOpen"]),e.rol=="Residente"?(b(),g(a,{key:0,label:"Nueva Estimación Residente",onClick:e.goToNewResidentEstimate,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"])):v("",!0),d(_,{label:"En Proceso",onChange:e.processo,class:"mb-3 mr-0 ml-10"},null,8,["onChange"])]),e.app.loading?v("",!0):(b(),g(f,{key:0,options:e.featureOptions,headers:e.headers,data:e.app.total},null,8,["options","headers","data"]))])])}const $=B(S,[["render",P]]);export{$ as default};
