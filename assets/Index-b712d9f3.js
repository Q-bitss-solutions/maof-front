import{_ as w,a as v,o as n,c,e as R,b as t,t as o,g,f as u,T,p as O,m as I,u as D,k as E,F as $,d as k,n as j,r as S,i as N}from"./index-5f066c7a.js";import{A as F,T as P}from"./TitleBar-bd0b915b.js";import{a as A}from"./contract-63ff47dc.js";import{B as M}from"./ButtonBase-141e51e4.js";import{_ as B}from"./PDF-a4bdfbbc.js";import{T as V}from"./TableBase-7288698a.js";import{f as z,a as G,b as L}from"./residentEstimate-76c651d2.js";import"./sweetalert2.all-281a79b7.js";const H={name:"ToggleSwitch",components:{ButtonBase:M},props:{data:{type:Object,default:()=>[{example:"value 1"}]},isOpen:{type:Boolean,default:()=>!1}},setup(i,{emit:r}){return{sendStatusModal:()=>r("submit",i.isOpen)}}},y=i=>(O("data-v-38d2f865"),i=i(),I(),i),U={class:"root"},Z={key:0,class:"modal items-center justify-center"},q={class:"justify-items-center justify-center items-center"},J={key:0,class:"text-center font-semibold pb-10 pt-5"},K={key:1,class:"text-center font-semibold pb-10 pt-5"},Q={class:"grid grid-cols-2 ml-10 justify-center justify-items-center"},W={class:"grid grid-row"},X=y(()=>t("h1",{class:"font-semibold text-center"},"Clave Cartera de Inversión",-1)),Y={class:"text-sm w-full text-left"},tt={class:"grid grid-row mb-10"},et=y(()=>t("h1",{class:"font-semibold text-center"},"Nombre",-1)),ot={class:"text-sm w-full text-left"},st={class:"grid grid-row"},at=y(()=>t("h1",{class:"font-semibold"},"Número de Contrato",-1)),nt={class:"text-sm w-full text-center"},it={class:"grid grid-rows mb-10"},lt=y(()=>t("h1",{class:"font-semibold ml-10"},"Objeto del Contrato",-1)),ct={class:"text-sm w-full text-left"},dt={class:"flex flex-row justify-between w-full"},rt=y(()=>t("h1",{class:"font-semibold"},"Fecha inicio",-1)),_t={class:"text-sm w-full text-center"},ft=y(()=>t("h1",{class:"font-semibold"},"Fecha fin",-1)),ut={class:"text-sm w-full text-center"},mt={class:"grid grid-rows-2"},ht=y(()=>t("h1",{class:"font-semibold ml-10"},"Unidad SICT",-1)),bt={class:"text-sm w-full text-left"},pt={class:"grid grid-cols-3 ml-10"},xt=y(()=>t("h1",{class:"font-semibold"},"Monto sin IVA",-1)),vt={class:"text-sm w-full text-left ml-5"},gt=y(()=>t("h1",{class:"font-semibold"},"Estatus del Contrato",-1)),yt={class:"text-sm w-full text-left ml-10"},Ct=y(()=>t("h1",{class:"font-semibold"},"¿Existen Convenios Modificatorios?",-1)),wt={class:"text-sm w-full text-left ml-10"};function $t(i,r,e,a,m,x){const h=v("button-base");return n(),c("div",U,[(n(),R(T,{to:"body"},[e.isOpen?(n(),c("div",Z,[t("div",q,[e.data.tipo_contrato==="Convenio de colaboración"?(n(),c("h1",J,"Detalle del Convenio de Colaboración")):(n(),c("h1",K,"Detalle del "+o(e.data.tipo_contrato),1)),t("div",Q,[t("div",W,[t("div",null,[X,t("p",Y,o(e.data.clave_cartera),1)])]),t("div",tt,[t("div",null,[et,t("p",ot,o(e.data.nombre_proyecto),1)])]),t("div",st,[t("div",null,[at,t("p",nt,o(e.data.numero_contrato),1)])]),t("div",it,[t("div",null,[lt,t("p",ct,o(e.data.objeto_contrato),1)])]),t("div",dt,[t("div",null,[rt,t("p",_t,o(e.data.plazo_inicio),1)]),t("div",null,[ft,t("p",ut,o(e.data.plazo_fin),1)])]),t("div",mt,[t("div",null,[ht,t("p",bt,o(e.data.nombre_unidad),1)])])]),t("div",pt,[t("div",null,[xt,t("p",vt," $"+o(e.data.monto_sin_iva),1)]),t("div",null,[gt,t("p",yt,o(e.data.estatus_contrato),1)]),t("div",null,[Ct,t("p",wt,o(e.data.id_contrato_padre===null?"No":"Si"),1)])]),g(h,{label:"Cerrar",onClick:a.sendStatusModal,class:"mr-5 mx-auto my-5"},null,8,["onClick"])])])):u("",!0)]))])}const kt=w(H,[["render",$t],["__scopeId","data-v-38d2f865"]]);const Et={name:"ToggleSwitch",components:{ButtonBase:M},props:{data:{type:Object,default:()=>[{example:"value 1"}]},isOpen:{type:Boolean,default:()=>!1}},setup(i,{emit:r}){return{sendStatusModal:()=>r("submit",i.isOpen)}}},f=i=>(O("data-v-f2afa920"),i=i(),I(),i),jt={class:"root"},Ot={key:0,class:"modal flex flex-col items-center justify-center"},It={class:"justify-items-center justify-center items-center verdepastel"},Mt={class:"text-center font-semibold pb-5 pt-5"},St={class:"grid grid-cols-2 ml-5 justify-center justify-items-center"},At={class:"grid grid-row"},Rt={class:"mr-5"},Tt=f(()=>t("h1",{class:"font-semibold text-center"},"Clave Cartera de Inversión",-1)),Dt={class:"text-sm w-full text-left"},Nt={class:"grid grid-row mb-3"},Ft=f(()=>t("h1",{class:"font-semibold text-center"},"Nombre",-1)),Pt={class:"text-sm w-full text-left"},Bt={class:"grid grid-row"},Vt=f(()=>t("h1",{class:"font-semibold"},"Número de Contrato",-1)),zt={class:"text-sm w-full text-center"},Gt={class:"grid grid-rows"},Lt=f(()=>t("h1",{class:"font-semibold text-center"},"Objeto del Contrato",-1)),Ht={class:"text-sm w-full text-left"},Ut={class:"flex flex-row justify-between w-full"},Zt=f(()=>t("h1",{class:"font-semibold text-center"},"Fecha inicio",-1)),qt={class:"text-sm w-full text-center"},Jt=f(()=>t("h1",{class:"font-semibold text-center"},"Fecha fin",-1)),Kt={class:"text-sm w-full text-center"},Qt={class:"grid grid-cols-2"},Wt=f(()=>t("h1",{class:"font-semibold text-center"},"Monto sin IVA",-1)),Xt={class:"text-sm w-full text-center"},Yt=f(()=>t("h1",{class:"font-semibold text-center"},"Estatus del Contrato",-1)),te={class:"text-sm w-full text-center"},ee={class:"justify-center verdeclaro"},oe=f(()=>t("h1",{class:"text-center font-semibold pb-5 text-red"},"Convenio Modificatorio",-1)),se={class:"flex justify-around"},ae={class:"flex flex-col justify-around"},ne=f(()=>t("h1",{class:"font-semibold text-red"},"Número de Convenio Modificatorio",-1)),ie={class:"text-sm w-full text-center"},le={class:"flex flex-row justify-around"},ce=f(()=>t("h1",{class:"font-semibold text-red"},"Fecha de inicio",-1)),de={class:"text-sm w-full text-left"},re=f(()=>t("h1",{class:"font-semibold text-red"},"Fecha de fin ",-1)),_e={class:"text-sm w-full text-left"},fe={class:"justify-items-center"},ue=f(()=>t("h1",{class:"font-semibold text-red text-center"},"Monto sin IVA",-1)),me={class:"text-sm w-full text-center"},he={class:"flex flex-col ml-10 justify-around"},be=f(()=>t("div",{class:"w-full"},[t("h1",{class:"font-semibold text-red text-center"},"Objeto del Convenio Modificatorio"),t("p",{class:"text-sm w-full text-cetner"},"Modernización y Ampliación de la Línea 1 del Tren Ligero Guadalajara LTG1")],-1)),pe=f(()=>t("h1",{class:"font-semibold text-red text-center"},"Unidad SICT ",-1)),xe={class:"text-sm w-full text-center"},ve=f(()=>t("h1",{class:"font-semibold text-red text-center"},"Estatus del Convenio Modificatorio ",-1)),ge={class:"text-sm w-full text-center"};function ye(i,r,e,a,m,x){const h=v("button-base");return n(),c("div",jt,[(n(),R(T,{to:"body"},[e.isOpen?(n(),c("div",Ot,[t("div",It,[t("h1",Mt,"Detalle del "+o(e.data.tipo_contrato),1),t("div",St,[t("div",At,[t("div",Rt,[Tt,t("p",Dt,o(e.data.clave_cartera),1)])]),t("div",Nt,[t("div",null,[Ft,t("p",Pt,o(e.data.nombre_proyecto),1)])]),t("div",Bt,[t("div",null,[Vt,t("p",zt,o(e.data.numero_contrato),1)])]),t("div",Gt,[t("div",null,[Lt,t("p",Ht,o(e.data.objeto_contrato),1)])]),t("div",Ut,[t("div",null,[Zt,t("p",qt,o(e.data.plazo_inicio),1)]),t("div",null,[Jt,t("p",Kt,o(e.data.plazo_fin),1)])])]),t("div",Qt,[t("div",null,[Wt,t("p",Xt," $"+o(e.data.monto_sin_iva),1)]),t("div",null,[Yt,t("p",te,o(e.data.estatus_contrato),1)])])]),t("div",ee,[oe,t("div",se,[t("div",ae,[t("div",null,[ne,t("p",ie,o()+"CONVENIO-1",1)]),t("div",le,[t("div",null,[ce,t("p",de,o()+"01/01/2023",1)]),t("div",null,[re,t("p",_e,o()+"01/01/2023",1)])]),t("div",fe,[ue,t("p",me,o()+"$900000",1)])]),t("div",he,[be,t("div",null,[pe,t("p",xe,o()+"13 - Obras y Contratos",1)]),t("div",null,[ve,t("p",ge,o()+"En progreso",1)])])]),g(h,{label:"Cerrar",onClick:a.sendStatusModal,class:"mr-5 mx-auto my-5"},null,8,["onClick"])])])):u("",!0)]))])}const Ce=w(Et,[["render",ye],["__scopeId","data-v-f2afa920"]]);const we={name:"TableEstimateResident",components:{DetailPop:kt,DetailPopConvenioModificatorio:Ce},props:{headers:{type:Array,default:()=>[{label:"Example Header",field:"example"}]},data:{type:Array,default:()=>[{example:"value 1"}]},options:{type:Array,default:()=>[{label:"example",action:i=>console.log(i)}]}},setup(){const i=D(),r=[1,2,3];let e=E({isOpen:!1}),a=E({data:{}}),m=E({isOpen:!1}),x=E({data:{}});return{dots:r,openActions:d=>{document.getElementById(d).classList.toggle("hidden")},detalleContrato:async d=>{if(e.isOpen=!e.isOpen,d.contrato_padre===null){const{data:_}=await A(d.contrato_estimacion);a.data=_}if(d.contrato_padre!==null){const{data:_}=await A(d.contrato_padre);a.data=_}},semaforo:d=>{i.push({name:"EditResidentEstimate",params:{residentEstimateId:d.id_estimacion}})},downloadFile:async d=>{window.open(`${d.archivo_residente}`,"_blank")},isOpenContratoModal:e,dataContratoConvenio:a,detalleConvenioModificatorio:async d=>{m.isOpen=!m.isOpen;const{data:_}=await A(d.contrato_estimacion);x.data=_,console.log("dataContratoConvenio.data: ",x.data)},isOpenConvenioModificatorioModal:m,dataConvenioModificatorio:x}}},$e={class:"border border-solid border-t-0 border-l-0 border-black border-collapse text-gray-900 w-full"},ke={key:0},Ee=["onClick"],je=["onClick"],Oe=["onClick"],Ie=["onClick"],Me={key:5},Se=["onClick"],Ae=["onClick"],Re=["onClick"],Te=["onClick"],De=["onClick"],Ne={class:"flex justify-center"},Fe=["onClick"],Pe=["id","onMouseleave"],Be={class:"flex flex-col"},Ve=["onClick"];function ze(i,r,e,a,m,x){const h=v("Detail-Pop"),C=v("DetailPopConvenioModificatorio");return n(),c("table",$e,[g(h,{data:a.dataContratoConvenio.data,isOpen:a.isOpenContratoModal.isOpen,onSubmit:r[0]||(r[0]=l=>a.isOpenContratoModal.isOpen=!1)},null,8,["data","isOpen"]),g(C,{data:a.dataContratoConvenio.data,isOpen:a.isOpenConvenioModificatorioModal.isOpen,onSubmit:r[1]||(r[1]=l=>a.isOpenConvenioModificatorioModal.isOpen=!1)},null,8,["data","isOpen"]),t("tr",null,[(n(!0),c($,null,k(e.headers,(l,b)=>(n(),c("th",{key:b,class:j(["border-b-2 border-l-0 px-2",{"border-r-2":l.label===" "}])},o(l.label),3))),128))]),(n(!0),c($,null,k(e.data,(l,b)=>(n(),c("tr",{id:"rows",class:j(["mx-6",{" bg-gray-100":b%2===0}]),key:b},[(n(!0),c($,null,k(e.headers,(s,d)=>(n(),c("td",{key:d,class:j(["text-center",{"border-r-2 text-center":s.field==="documents","border-l":d==0}])},[s.label==="#"?(n(),c("p",ke,o(b+1),1)):u("",!0),s.field==="documents"&&l.archivo_residente!==null?(n(),c("img",{key:1,src:B,onClick:_=>a.downloadFile(l),class:"cursor-pointer"},null,8,Ee)):u("",!0),s.field==="numero_contrato"&&l.contrato_padre===null?(n(),c("p",{key:2,class:"text-blue cursor-pointer contratos",onClick:_=>a.detalleContrato(l)},o(l[s.field]),9,je)):u("",!0),s.field==="numero_contrato"&&l.contrato_padre!==null?(n(),c("p",{key:3,class:"text-blue cursor-pointer contratos",onClick:_=>a.detalleContrato(l)},o(l.numero_contrato_padre),9,Oe)):u("",!0),s.field==="numero_contrato_padre"&&l.contrato_padre!==null?(n(),c("p",{key:4,class:"text-blue cursor-pointer contratos",onClick:_=>a.detalleConvenioModificatorio(l)},o(l.numero_contrato),9,Ie)):u("",!0),s.field!=="numero_contrato_padre"&&s.field!=="numero_contrato"&&s.field!=="estatus_semaforo"?(n(),c("p",Me,o(l[s.field]),1)):u("",!0),s.label==="RESIDENTE"&&s.field==="estatus_semaforo"&&l[s.field]==="Residente"?(n(),c("button",{key:6,class:"bg-red rounded-full text-red",onClick:_=>a.semaforo(l)}," abcd",8,Se)):u("",!0),s.label==="ÁREA REVISORA"&&s.field==="estatus_semaforo"&&l[s.field]==="Area Revisora"?(n(),c("button",{key:7,class:"bg-red rounded-full text-red",onClick:_=>a.semaforo(l)}," abcd",8,Ae)):u("",!0),s.label==="FINANZAS"&&s.field==="estatus_semaforo"&&l[s.field]==="Finanzas"?(n(),c("button",{key:8,class:"bg-red rounded-full text-red",onClick:_=>a.semaforo(l)}," abcd",8,Re)):u("",!0),s.label==="TRÁMITE DE PAGO"&&s.field==="estatus_semaforo"&&l[s.field]==="DGPOP"?(n(),c("button",{key:9,class:"bg-red rounded-full text-red",onClick:_=>a.semaforo(l)}," abcd",8,Te)):u("",!0),s.label==="PAGO"&&s.field==="estatus_semaforo"&&l[s.field]==="Pago Efectuado"?(n(),c("button",{key:10,class:"bg-green rounded-full text-green",onClick:_=>a.semaforo(l)}," abcd",8,De)):u("",!0)],2))),128)),e.options.length?(n(),c("td",{key:0,class:j(["p-2 relative",{" border-l-2 border-gray-100":b%2!==0}])},[t("div",Ne,[t("div",{class:"p-1 cursor-pointer",onClick:s=>a.openActions(`table-actions-${b}`)},[(n(!0),c($,null,k(a.dots,(s,d)=>(n(),c("span",{key:d,class:"rounded-full h-1 w-1 block bg-blue mb-1"}))),128))],8,Fe)]),t("div",{class:"hidden absolute right-4 top-8 bg-white z-10",style:{"box-shadow":"-3px 3px 6px #00000029"},id:`table-actions-${b}`,onMouseleave:s=>a.openActions(`table-actions-${b}`)},[t("div",Be,[(n(!0),c($,null,k(e.options,(s,d)=>(n(),c("div",{key:d,class:"h-8 flex justify-center items-center py-2 px-8"},[t("p",{class:"text-xs border-b border-solid border-gray-100 cursor-pointer hover:border-gray hover:font-medium",onClick:_=>s.action(l)},o(s.label),9,Ve)]))),128))])],40,Pe)],2)):u("",!0)],2))),128))])}const Ge=w(we,[["render",ze],["__scopeId","data-v-ec934051"]]);const Le={name:"ToggleSwitch",props:{label:{type:String,default:""}}},He=i=>(O("data-v-c78a01f0"),i=i(),I(),i),Ue={class:"panel panel-default"},Ze={class:"panel-heading"},qe={class:"panel-title"},Je=He(()=>t("div",{class:"panel-body"},[t("label",{class:"switch"},[t("input",{type:"checkbox"}),t("div",{class:"slider round"})])],-1));function Ke(i,r,e,a,m,x){return n(),c("div",Ue,[t("div",Ze,[t("h3",qe,o(e.label),1)]),Je])}const Qe=w(Le,[["render",Ke],["__scopeId","data-v-c78a01f0"]]);const We={name:"ToggleSwitch",components:{ButtonBase:M},props:{data:{type:Object,default:()=>[{example:"value 1"}]},isOpen:{type:Boolean,default:()=>!1}},setup(i,{emit:r}){return{sendStatusModal:()=>r("submit",i.isOpen)}}},p=i=>(O("data-v-45fa08f9"),i=i(),I(),i),Xe={class:"root"},Ye={key:0,class:"modal items-center justify-center"},to={class:"justify-items-center justify-center items-center"},eo=p(()=>t("h1",{class:"text-center font-semibold pb-10 pt-5"},"Detalle de la Estimación",-1)),oo={class:"flex justify-around"},so=p(()=>t("h1",{class:"text-center font-semibold"},"Número de Contrato o Convenio de Colaboración",-1)),ao={class:"text-center"},no=p(()=>t("h1",{class:"text-center font-semibold"},"Objeto",-1)),io={class:"text-center"},lo={class:"mt-5"},co={class:"flex justify-center items-center flex-row gap-3 py-1"},ro=p(()=>t("h1",{class:"text-right basis-1/3 font-semibold"},"Fecha de recepción de información del Contratista",-1)),_o={class:"text-right"},fo={class:"flex justify-center items-center flex-row gap-3 py-1"},uo=p(()=>t("h1",{class:"text-right basis-1/3 font-semibold"},"Fecha de autorización al Contratista",-1)),mo={class:"text-right"},ho={class:"flex justify-center items-center flex-row gap-3 py-1"},bo=p(()=>t("h1",{class:"text-right basis-1/3 font-semibold"},"Período de la Estimación",-1)),po={class:"text-right"},xo=p(()=>t("h1",{class:"text-right font-semibold"},"al",-1)),vo={class:"text-right"},go={class:"flex justify-center items-center flex-row gap-3 py-1"},yo=p(()=>t("h1",{class:"text-right basis-1/3 font-semibold"},"Importe de la obra ejecutada",-1)),Co={class:"text-right"},wo={class:"flex justify-center items-center flex-row gap-3 py-1"},$o=p(()=>t("h1",{class:"text-right basis-1/3 font-semibold"},"Importe a pagar",-1)),ko={class:"text-right"},Eo={class:"flex justify-center items-center flex-row gap-3 py-1"},jo=p(()=>t("h1",{class:"text-right basis-1/3 font-semibold"},"% de grado de avance",-1)),Oo={class:"text-right"},Io={class:"flex justify-center items-center flex-row gap-3 py-1"},Mo=p(()=>t("h1",{class:"text-right basis-1/3 font-semibold"},"% de avance de la Estimación",-1)),So={class:"text-right"},Ao={class:"flex justify-center items-center flex-row gap-3 py-1"},Ro=p(()=>t("h1",{class:"text-right basis-1/3 font-semibold"},"% de avance de la Estimación acumulado",-1)),To={class:"text-right"},Do={class:"flex justify-center items-center flex-row gap-3 py-1"},No=p(()=>t("h1",{class:"text-right basis-1/3 font-semibold"},"% de avance físico",-1)),Fo={class:"text-right"},Po={class:"flex justify-center items-center flex-row gap-3 py-1"},Bo=p(()=>t("h1",{class:"text-right basis-1/3 font-semibold"},"% de avance financiero",-1)),Vo={class:"text-right"};function zo(i,r,e,a,m,x){const h=v("button-base");return n(),c("div",Xe,[(n(),R(T,{to:"body"},[e.isOpen?(n(),c("div",Ye,[t("div",to,[eo,t("div",oo,[t("div",null,[so,t("p",ao,o(e.data.numero_contrato),1)]),t("div",null,[no,t("p",io,o(e.data.objeto_contrato),1)])]),t("div",lo,[t("div",co,[ro,t("p",_o,o(e.data.fecha_recepcion_info_contratista),1)]),t("div",fo,[uo,t("p",mo,o(e.data.fecha_autorizacion_contratista),1)]),t("div",ho,[bo,t("p",po,o(e.data.fecha_periodo_inicio_estimacion),1),xo,t("p",vo,o(e.data.fecha_periodo_fin_estimacion),1)]),t("div",go,[yo,t("p",Co,o(e.data.importe_obra_ejecutada),1)]),t("div",wo,[$o,t("p",ko,o(e.data.importe_pagar),1)]),t("div",Eo,[jo,t("p",Oo,o(e.data.grado_avance_obra),1)]),t("div",Io,[Mo,t("p",So,o(e.data.porcentaje_avance_estimacion),1)]),t("div",Ao,[Ro,t("p",To,o(e.data.porcentaje_avance_estimacion_acumulado),1)]),t("div",Do,[No,t("p",Fo,o(e.data.porcentaje_Avance_fisico),1)]),t("div",Po,[Bo,t("p",Vo,o(e.data.porcensaje_avance_financiero),1)])]),g(h,{label:"Cerrar",onClick:a.sendStatusModal,class:"mr-5 mx-auto my-5"},null,8,["onClick"])])])):u("",!0)]))])}const Go=w(We,[["render",zo],["__scopeId","data-v-45fa08f9"]]),Lo={name:"ResidentEstimateIndex",components:{TableroEstimacionResidente:Ge,ArrowBack:F,ButtonBase:M,TitleBar:P,TableBase:V,ToggleSwitch:Qe,DetailEstimate:Go},setup(){const i=D(),r=[{label:"#",field:""},{label:"Contrato o Convenio de Colaboración",field:"numero_contrato"},{label:"Convenio Modificatorio",field:"numero_contrato_padre"},{label:" ",field:"documents"},{label:"# Estimación",field:"num_consecutivo_estimacion"},{label:"Inicio",field:"fecha_periodo_inicio_estimacion"},{label:"Fin",field:"fecha_periodo_fin_estimacion"},{label:"Alta",field:"fecha_alta"},{label:"Fecha de autorización",field:"fecha_autorizacion_contratista"},{label:"Días transcurridos",field:"dias_transcurridos"},{label:"RESIDENTE",field:"estatus_semaforo"},{label:"ÁREA REVISORA",field:"estatus_semaforo"},{label:"FINANZAS",field:"estatus_semaforo"},{label:"TRÁMITE DE PAGO",field:"estatus_semaforo"},{label:"PAGO",field:"estatus_semaforo"}],e=S([]),a=S([]);let m=!1,x=S(!1);const h=async()=>{const{data:s}=await z();e.value=s},C=[{label:"Detalles",action:async s=>{x.value=!x.value;const{data:d}=await G(s.id_estimacion);a.value=d,console.log("residentEstimate.id_estimacion: ",s.id_estimacion),console.log("detalleEstimacionData: ",a)}},{label:"Nuevo",action:s=>i.push({name:"NewResidentEstimateById",params:{residentEstimateId:s.contrato_estimacion}})},{label:"Archivo",action:async s=>{i.push({name:"FilesResidentEstimate",params:{residentEstimateId:s.id_estimacion}})}}],l=()=>i.push({name:"NewResidentEstimate"}),b=async()=>{if(m=!m,m===!0){const{data:s}=await L(9);e.value=s}m===!1&&h()};return h(),{residentEstimate:e,featureOptions:C,headers:r,goToNewResidentEstimate:l,getResidentEstimate:h,processo:b,detalleEstimacionData:a,detalleEstimacion:x}}},Ho={class:"px-4 mt-10"},Uo={class:"px-4"},Zo={class:"flex justify-end"};function qo(i,r,e,a,m,x){const h=v("arrow-back"),C=v("title-bar"),l=v("detail-estimate"),b=v("button-base"),s=v("toggle-switch"),d=v("tablero-estimacion-residente");return n(),c("main",Ho,[g(h),g(C,{title:"Estimación Residente",subtitle:"Inicio"}),t("section",Uo,[t("div",Zo,[N(o(a.detalleEstimacion)+" ",1),g(l,{data:a.detalleEstimacionData,isOpen:a.detalleEstimacion,onSubmit:r[0]||(r[0]=_=>a.detalleEstimacion=!1)},null,8,["data","isOpen"]),g(b,{label:"Nueva Estimación Residente",onClick:a.goToNewResidentEstimate,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),g(s,{label:"En Proceso",onChange:a.processo,class:"mb-3 mr-0 ml-10"},null,8,["onChange"])]),g(d,{options:a.featureOptions,headers:a.headers,data:a.residentEstimate},null,8,["options","headers","data"])])])}const os=w(Lo,[["render",qo]]);export{os as default};
