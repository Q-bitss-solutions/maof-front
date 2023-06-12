import{T as E,D as h}from"./DetailEstimate-b5bead4f.js";import{A as g}from"./ArrowBack-5fbdef8c.js";import{T as v}from"./fetchApi-cb905fd6.js";import{H as R}from"./HomePage-4e17e767.js";import{B as N}from"./ButtonBase-b74c4a37.js";import{_ as A,r as _,u as B,a as i,o as u,c as I,b as f,g as n,e as k,f as w}from"./index-3b5ad1a8.js";import"./sweetalert2.all-281a79b7.js";import{a as y}from"./residentEstimate-4377f026.js";import{c as C}from"./consultas-491c6503.js";import"./contract-eba43625.js";import"./PDF-a4bdfbbc.js";const D={name:"ConsultasPagadosMAOF",components:{TableroEstimacionResidente:E,ArrowBack:g,HomePage:R,ButtonBase:N,TitleBar:v,DetailEstimate:h},setup(){const t=_({pagados:{},loading:!0}),l=[{label:"#",field:""},{label:"Contrato o Convenio de Colaboración",field:"numero_contrato"},{label:"Convenio Modificatorio",field:"numero_contrato_padre"},{label:" ",field:"documents"},{label:"# Estimación",field:"num_consecutivo_estimacion"},{label:"Inicio",field:"fecha_periodo_inicio_estimacion"},{label:"Fin",field:"fecha_periodo_fin_estimacion"},{label:"Alta",field:"fecha_alta"},{label:"Fecha de autorización",field:"fecha_autorizacion_contratista"},{label:"Días transcurridos",field:"dias_transcurridos"},{label:"RESIDENTE",field:"estatus_semaforo"},{label:"ÁREA REVISORA",field:"estatus_semaforo"},{label:"FINANZAS",field:"estatus_semaforo"},{label:"TRÁMITE DE PAGO",field:"estatus_semaforo"},{label:"PAGO",field:"estatus_semaforo"}],p=[{label:"Detalles",action:async a=>{s.value=!s.value,console.log(a);const{data:o}=await y(a.id_estimacion);o.fecha_recepcion_info_contratista=o.fecha_recepcion_info_contratista.split(" ")[0],o.fecha_periodo_inicio_estimacion=o.fecha_periodo_inicio_estimacion.split(" ")[0],o.fecha_periodo_fin_estimacion=o.fecha_periodo_fin_estimacion.split(" ")[0],c.value=o,console.log("data: ",o),console.log("detalleEstimacionData: ",c)}},{label:"Nuevo",action:a=>e.push({name:"NewResidentEstimateById",params:{residentEstimateId:a.contrato_estimacion}})},{label:"Archivo",action:async a=>{e.push({name:"FilesResidentEstimate",params:{residentEstimateId:a.id_estimacion}})}},{label:"Histórico",action:async a=>{e.push({name:"HistoricoResidentEstimate",params:{residentEstimateId:a.id_estimacion}})}}],e=B(),d=C(),c=_([]);let s=_(!1);const m=()=>e.push({name:"NewResidentEstimate"}),r=()=>{t.value.loading=!0,t.value.pagados=d.filtros.pagados,console.log(d.filtros.pagados),console.log("Valor del parámetro:",t.value.pagados),t.value.loading=!1};return r(),{app:t,headers:l,featureOptions:p,detalleEstimacionData:c,detalleEstimacion:s,goToNewResidentEstimate:m,getQuery:r}}},T={class:"px-4 mt-10"},O={class:"flex justify-between"},x={class:"px-4"},P={class:"flex justify-end"};function F(t,l,p,e,d,c){const s=i("arrow-back"),m=i("home-page"),r=i("title-bar"),a=i("detail-estimate"),o=i("button-base"),b=i("tablero-estimacion-residente");return u(),I("main",T,[f("div",O,[n(s),n(m)]),n(r,{title:"Estimación Residente",subtitle:"Pagadas"}),f("section",x,[f("div",P,[n(a,{data:e.detalleEstimacionData,isOpen:e.detalleEstimacion,onSubmit:l[0]||(l[0]=V=>e.detalleEstimacion=!1)},null,8,["data","isOpen"]),n(o,{label:"Nueva Estimación Residente",onClick:e.goToNewResidentEstimate,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"])]),e.app.loading?w("",!0):(u(),k(b,{key:0,options:e.featureOptions,headers:e.headers,data:e.app.pagados},null,8,["options","headers","data"]))])])}const L=A(D,[["render",F]]);export{L as default};