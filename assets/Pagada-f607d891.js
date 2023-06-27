import{T as v,D as R}from"./DetailEstimate-57967e6e.js";import{A}from"./ArrowBack-d9027e34.js";import{T as N}from"./TitleBar-4aceab6d.js";import{H as B}from"./HomePage-dc81efef.js";import{B as k}from"./fetchApi-f7a148df.js";import{_ as y,a as C,r as p,u as I,b as o,o as u,c as w,d,e as l,g as E,h as g}from"./index-0101a678.js";import"./sweetalert2.all-281a79b7.js";import{f as D}from"./residentEstimate-9627171c.js";import{c as T}from"./consultas-33221ba2.js";import{L as O}from"./LogoutComponent-16cf5774.js";import"./contract-5e7c25e1.js";import"./PDF-a4bdfbbc.js";const x={name:"ConsultasPagadosMAOF",components:{TableroEstimacionResidente:v,ArrowBack:A,HomePage:B,ButtonBase:k,TitleBar:N,DetailEstimate:R,LogoutComponent:O},setup(){const b=C(),{rol:c}=b.getAuthData,i=p({pagados:{},loading:!0}),e=[{label:"#",field:""},{label:"Contrato o Convenio de Colaboración",field:"numero_contrato"},{label:"Convenio Modificatorio",field:"numero_contrato_padre"},{label:" ",field:"documents"},{label:"# Estimación",field:"num_consecutivo_estimacion"},{label:"Inicio",field:"fecha_periodo_inicio_estimacion"},{label:"Fin",field:"fecha_periodo_fin_estimacion"},{label:"Alta",field:"fecha_alta"},{label:"Fecha de autorización",field:"fecha_autorizacion_contratista"},{label:"Días transcurridos",field:"dias_transcurridos"},{label:"RESIDENTE",field:"estatus_semaforo"},{label:"ÁREA REVISORA",field:"estatus_semaforo"},{label:"FINANZAS",field:"estatus_semaforo"},{label:"TRÁMITE DE PAGO",field:"estatus_semaforo"},{label:"PAGO",field:"estatus_semaforo"}],h=[{label:"Detalles",action:async a=>{n.value=!n.value;const{data:t}=await D(a.id_estimacion);t.fecha_recepcion_info_contratista=t.fecha_recepcion_info_contratista.split(" ")[0],t.fecha_periodo_inicio_estimacion=t.fecha_periodo_inicio_estimacion.split(" ")[0],t.fecha_periodo_fin_estimacion=t.fecha_periodo_fin_estimacion.split(" ")[0],r.value=t}},{label:"Nuevo",action:a=>s.push({name:"NewResidentEstimateById",params:{residentEstimateId:a.contrato_estimacion}})},{label:"Archivo",action:async a=>{s.push({name:"FilesResidentEstimate",params:{residentEstimateId:a.id_estimacion}})}},{label:"Histórico",action:async a=>{s.push({name:"HistoricoResidentEstimate",params:{residentEstimateId:a.id_estimacion}})}}],s=I(),_=T(),r=p([]);let n=p(!1);const f=()=>s.push({name:"NewResidentEstimate"}),m=()=>{i.value.loading=!0,i.value.pagados=_.filtros.pagados,i.value.loading=!1};return m(),{app:i,headers:e,featureOptions:h,detalleEstimacionData:r,detalleEstimacion:n,rol:c,goToNewResidentEstimate:f,getQuery:m}}},P={class:"px-4 mt-10"},F={class:"flex justify-between"},S={class:"px-4"},H={class:"flex justify-end"};function V(b,c,i,e,h,s){const _=o("arrow-back"),r=o("home-page"),n=o("logout-component"),f=o("title-bar"),m=o("detail-estimate"),a=o("button-base"),t=o("tablero-estimacion-residente");return u(),w("main",P,[d("div",F,[l(_),d("div",null,[l(r),l(n)])]),l(f,{title:"Estimación Residente",subtitle:"Pagadas"}),d("section",S,[d("div",H,[l(m,{data:e.detalleEstimacionData,isOpen:e.detalleEstimacion,onSubmit:c[0]||(c[0]=M=>e.detalleEstimacion=!1)},null,8,["data","isOpen"]),e.rol=="Residente"?(u(),E(a,{key:0,label:"Nueva Estimación Residente",onClick:e.goToNewResidentEstimate,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"])):g("",!0)]),e.app.loading?g("",!0):(u(),E(t,{key:0,options:e.featureOptions,headers:e.headers,data:e.app.pagados},null,8,["options","headers","data"]))])])}const Y=y(x,[["render",V]]);export{Y as default};
