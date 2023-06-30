import{T as R,D as v}from"./DetailEstimate-e4bdb249.js";import{A as y}from"./ArrowBack-b71575d9.js";import{T as A}from"./TitleBar-74e3189e.js";import{H as N}from"./HomePage-3e9ed152.js";import{B as k}from"./fetchApi-d6252301.js";import{_ as B,a as C,r as p,u as D,b as o,o as u,c as I,d as l,e as r,t as w,g as E,h as g}from"./index-c168c190.js";import"./sweetalert2.all-281a79b7.js";import{a as x}from"./residentEstimate-6f82e677.js";import{c as T}from"./consultas-c4741daa.js";import{L as O}from"./LogoutComponent-cb7cd610.js";import"./contract-63eb2a5b.js";import"./PDF-a4bdfbbc.js";const P={name:"ConsultasPagadosMAOF",components:{TableroEstimacionResidente:R,ArrowBack:y,HomePage:N,ButtonBase:k,TitleBar:A,DetailEstimate:v,LogoutComponent:O},setup(){const b=C(),{rol:i}=b.getAuthData,s=p({pagados:{},loading:!0}),e=[{label:"#",field:""},{label:"Contrato o Convenio de Colaboración",field:"numero_contrato"},{label:"Convenio Modificatorio",field:"numero_contrato_padre"},{label:" ",field:"documents"},{label:"# Estimación",field:"num_consecutivo_estimacion"},{label:"Inicio",field:"fecha_periodo_inicio_estimacion"},{label:"Fin",field:"fecha_periodo_fin_estimacion"},{label:"Alta",field:"fecha_alta"},{label:"Fecha de autorización",field:"fecha_autorizacion_contratista"},{label:"Días transcurridos",field:"dias_transcurridos"},{label:"RESIDENTE",field:"estatus_semaforo"},{label:"ÁREA REVISORA",field:"estatus_semaforo"},{label:"FINANZAS",field:"estatus_semaforo"},{label:"TRÁMITE DE PAGO",field:"estatus_semaforo"},{label:"PAGO",field:"estatus_semaforo"}],h=[{label:"Detalles",action:async t=>{c.value=!c.value;const{data:a}=await x(t.id_estimacion);a.fecha_recepcion_info_contratista=a.fecha_recepcion_info_contratista.split(" ")[0],a.fecha_periodo_inicio_estimacion=a.fecha_periodo_inicio_estimacion.split(" ")[0],a.fecha_periodo_fin_estimacion=a.fecha_periodo_fin_estimacion.split(" ")[0],d.value=a}},{label:"Nuevo",disabled:i!="Residente",action:t=>n.push({name:"NewResidentEstimateById",params:{residentEstimateId:t.contrato_estimacion}})},{label:"Archivo",action:async t=>{n.push({name:"FilesResidentEstimate",params:{residentEstimateId:t.id_estimacion}})}},{label:"Histórico",action:async t=>{n.push({name:"HistoricoResidentEstimate",params:{residentEstimateId:t.id_estimacion}})}}],n=D(),_=T(),d=p([]);let c=p(!1);const f=()=>n.push({name:"NewResidentEstimate"}),m=()=>{s.value.loading=!0,s.value.pagados=_.filtros.pagados,s.value.loading=!1};return m(),{app:s,headers:e,featureOptions:h,detalleEstimacionData:d,detalleEstimacion:c,rol:i,goToNewResidentEstimate:f,getQuery:m}}},S={class:"px-4 mt-10"},F={class:"flex justify-between"},H={class:"flex justify-center items-center"},V={class:"text-black font-semibold mr-4 items-center content-center"},j={class:"px-4"},M={class:"flex justify-end"};function z(b,i,s,e,h,n){const _=o("arrow-back"),d=o("home-page"),c=o("logout-component"),f=o("title-bar"),m=o("detail-estimate"),t=o("button-base"),a=o("tablero-estimacion-residente");return u(),I("main",S,[l("div",F,[r(_),l("div",H,[l("p",V,w(e.rol),1),r(d),r(c)])]),r(f,{title:"Estimación Residente",subtitle:"Pagadas"}),l("section",j,[l("div",M,[r(m,{data:e.detalleEstimacionData,isOpen:e.detalleEstimacion,onSubmit:i[0]||(i[0]=G=>e.detalleEstimacion=!1)},null,8,["data","isOpen"]),e.rol=="Residente"?(u(),E(t,{key:0,label:"Nueva Estimación Residente",onClick:e.goToNewResidentEstimate,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"])):g("",!0)]),e.app.loading?g("",!0):(u(),E(a,{key:0,options:e.featureOptions,headers:e.headers,data:e.app.pagados},null,8,["options","headers","data"]))])])}const te=B(P,[["render",z]]);export{te as default};
