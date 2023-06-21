import{F as E}from"./FormResidentEstimateSemaforoById-6dd05d38.js";import{A as g}from"./ArrowBack-e6c8a65f.js";import{T as k}from"./TitleBar-a7fd04ba.js";import{_ as y,o as i,c as n,b as e,F as m,e as p,t as a,n as I,g as x,i as w,q as B,u as j,m as A,a as u,d as v,p as H,k as R}from"./index-9c7881ce.js";import{a as C,j as F}from"./residentEstimate-f98c34ff.js";import{S as N}from"./sweetalert2.all-281a79b7.js";import"./InputBase-7b333c5d.js";import"./auth-f1c010b2.js";import"./SelectBase-553526a4.js";import"./TextAreaBase-057fa890.js";import"./index-94304edc.js";const S={name:"TableBase",props:{headers:{type:Array,default:()=>[{label:"Example Header",field:"example"}]},data:{type:Array,default:()=>[{example:"value 1"}]},options:{type:Array,default:[]}},setup(){return{dots:[1,2,3],openActions:s=>{document.getElementById(s).classList.toggle("hidden")}}}},z={class:"border border-solid border-black border-collapse text-gray-900 w-full"},T={key:0},V={key:0,class:"p-2 border border-solid border-gray-100 relative"},D={class:"flex justify-center"},L=["onClick"],M=["id","onMouseleave"],O={class:"flex flex-col"},q=["onClick"];function P(r,h,s,t,f,b){return i(),n("table",z,[e("tr",null,[(i(!0),n(m,null,p(s.headers,(l,o)=>(i(),n("th",{key:o,class:"p-2 border border-b-2 border-solid border-black"},a(l.label),1))),128))]),(i(!0),n(m,null,p(s.data,(l,o)=>(i(),n("tr",{id:"rows",class:I(["",{" bg-gray-100":o%2===0}]),key:o},[(i(!0),n(m,null,p(s.headers,(d,_)=>(i(),n("td",{key:_,class:"p-2 border border-solid border-black"},[d.label==="#"?(i(),n("p",T,a(o+1),1)):x("",!0),w(" "+a(l[d.field]),1)]))),128)),s.options.length?(i(),n("td",V,[e("div",D,[e("div",{class:"p-1 cursor-pointer",onClick:d=>t.openActions(`table-actions-${o}`)},[(i(!0),n(m,null,p(t.dots,(d,_)=>(i(),n("span",{key:_,class:"rounded-full h-1 w-1 block bg-blue mb-1"}))),128))],8,L)]),r.option!==null?(i(),n("div",{key:0,class:"hidden absolute right-4 top-8 bg-white z-10",style:{"box-shadow":"-3px 3px 6px #00000029"},id:`table-actions-${o}`,onMouseleave:d=>t.openActions(`table-actions-${o}`)},[e("div",O,[(i(!0),n(m,null,p(s.options,(d,_)=>(i(),n("div",{key:_,class:"h-8 flex justify-center items-center py-2 px-8"},[e("p",{class:"text-xs border-b border-solid border-gray-100 cursor-pointer hover:border-gray hover:font-medium",onClick:Re=>d.action(l)},a(d.label),9,q)]))),128))])],40,M)):x("",!0)])):x("",!0)],2))),128))])}const G=y(S,[["render",P]]);const J={name:"Historico",components:{FormResidentEstimate:E,ArrowBack:g,TitleBar:k,TableBaseIndex:G},setup(){const r=B(),h=j(),s=A({residentEstimate:{},residentEstimateHistory:[],fecha_recepcion_info_contratista:"",fecha_periodo_inicio_estimacion:"",fecha_periodo_fin_estimacion:"",loading:!0}),t=[{label:"#",field:""},{label:"Fecha",field:"fecha_historial_estimacion"},{label:"Estatus",field:"estatus_historial_estimacion"},{label:"Observaciones",field:"observaciones_residente"}],f=async()=>{s.loading=!0;const{data:o}=await C(r.params.residentEstimateId);s.residentEstimate=o,s.fecha_recepcion_info_contratista=o.fecha_recepcion_info_contratista.split(" ")[0],s.fecha_periodo_inicio_estimacion=o.fecha_periodo_inicio_estimacion.split(" ")[0],s.fecha_periodo_fin_estimacion=o.fecha_periodo_fin_estimacion.split(" ")[0],s.loading=!1},b=async()=>{s.loading=!0;const{data:o}=await F(r.params.residentEstimateId);s.residentEstimateHistory=o,s.loading=!1},l=async o=>{await updateResident(o),N.fire("¡Éxito!","!Estimación residente actualizado con éxito!","success"),h.push({name:"Resident"})};return f(),b(),{app:s,saveResident:l,headers:t}}},c=r=>(H("data-v-11a3b4a8"),r=r(),R(),r),K={class:"px-4 mt-10"},Q={class:"mb-10"},U={class:"flex items-center"},W=c(()=>e("p",{class:"font-semibold text-center"},"Número de contrato (de origen)",-1)),X={class:"text-sm text-center ml-2"},Y=c(()=>e("p",{class:"font-semibold text-center ml-80 text-red"},"Número de la Estimación",-1)),Z={class:"text-xl font-semibold text-red text-center ml-2"},$=c(()=>e("p",{class:"font-semibold text-center ml-10 text-red"},"Días transcurridos",-1)),ee={class:"text-sm font-semibold text-red text-center ml-4"},te={class:"flex items-center"},se=c(()=>e("p",{class:"font-semibold text-center"},"Objeto del contrato",-1)),oe={class:"text-sm text-center ml-4"},ae={class:"flex items-center"},ie=c(()=>e("p",{class:"font-semibold text-center"},"Fecha de recepción",-1)),ne={class:"text-sm text-center ml-2"},ce=c(()=>e("p",{class:"font-semibold text-center ml-2 text-red"},"Fecha de autorización",-1)),re={class:"text-sm text-center ml-2 text-red"},de=c(()=>e("p",{class:"font-semibold text-center ml-2"},"Periodo de la Estimación",-1)),le={class:"text-sm text-center ml-2"},_e=c(()=>e("p",{class:"font-semibold text-center ml-2"},"al",-1)),me={class:"text-sm text-center ml-2"},pe={class:"flex items-center"},he=c(()=>e("p",{class:"font-semibold text-center"},"Importe de la obra ejecutada",-1)),fe={class:"text-sm text-center ml-2"},be=c(()=>e("p",{class:"font-semibold text-center ml-2"},"Importe a pagar",-1)),xe={class:"text-sm text-center ml-2"},ue={class:"flex items-center"},ve=c(()=>e("p",{class:"font-semibold text-center"},"% de avance físico",-1)),ye={class:"text-sm text-center ml-2"},Ee=c(()=>e("p",{class:"font-semibold text-center ml-2"},"% de avance financiero",-1)),ge={class:"text-sm text-center ml-2"},ke=c(()=>e("p",{class:"font-semibold text-center ml-2"},"% de grado de avance",-1)),Ie={class:"text-sm text-center ml-2"},we=c(()=>e("p",{class:"font-semibold text-center ml-2"},"% de avance de la Estimación",-1)),Be={class:"text-sm text-center ml-2"},je=c(()=>e("p",{class:"font-semibold text-center ml-2"},"% de avance de la Estimación acumulado",-1)),Ae={class:"text-sm text-center ml-2"};function He(r,h,s,t,f,b){const l=u("arrow-back"),o=u("title-bar"),d=u("table-base-index");return i(),n("main",K,[v(l),v(o,{title:"Estimación Residente",subtitle:"Histórico"}),e("div",Q,[e("div",U,[W,e("p",X,a(t.app.residentEstimate.numero_contrato),1),Y,e("p",Z,a(t.app.residentEstimate.num_consecutivo_estimacion),1),$,e("p",ee,a(t.app.residentEstimate.dias_transcurridos),1)]),e("div",te,[se,e("p",oe,a(t.app.residentEstimate.objeto_contrato),1)]),e("div",ae,[ie,e("p",ne,a(t.app.fecha_recepcion_info_contratista),1),ce,e("p",re,a(t.app.residentEstimate.fecha_autorizacion_contratista),1),de,e("p",le,a(t.app.fecha_periodo_inicio_estimacion),1),_e,e("p",me,a(t.app.fecha_periodo_fin_estimacion),1)]),e("div",pe,[he,e("p",fe,a(t.app.residentEstimate.frt_importe_obra_ejecutada),1),be,e("p",xe,a(t.app.residentEstimate.frt_importe_pagar),1)]),e("div",ue,[ve,e("p",ye,a(t.app.residentEstimate.porcentaje_Avance_fisico)+"%",1),Ee,e("p",ge,a(t.app.residentEstimate.porcensaje_avance_financiero)+"%",1),ke,e("p",Ie,a(t.app.residentEstimate.grado_avance_obra)+"%",1),we,e("p",Be,a(t.app.residentEstimate.porcentaje_avance_estimacion)+"%",1),je,e("p",Ae,a(t.app.residentEstimate.porcentaje_avance_estimacion_acumulado)+"%",1)])]),v(d,{class:"mb-10",headers:t.headers,data:t.app.residentEstimateHistory,option:[]},null,8,["headers","data"])])}const qe=y(J,[["render",He],["__scopeId","data-v-11a3b4a8"]]);export{qe as default};