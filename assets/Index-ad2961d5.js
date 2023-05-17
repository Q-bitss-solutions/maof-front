import{_ as w,a as v,o as n,c as l,e as O,b as t,t as o,g as y,f,T as A,p as I,m as M,u as T,k as E,F as $,d as k,n as j,r as R}from"./index-c3a42c71.js";import{A as N,T as F}from"./TitleBar-38d3e211.js";import{a as D,b as B}from"./contract-7844d158.js";import{B as S}from"./ButtonBase-8c268a40.js";import{_ as P}from"./PDF-a4bdfbbc.js";import{T as z}from"./TableBase-70cf1cdb.js";import{f as V,a as G,b as H}from"./residentEstimate-604c24a5.js";import"./sweetalert2.all-281a79b7.js";const L={name:"ToggleSwitch",components:{ButtonBase:S},props:{data:{type:Object,default:()=>[{example:"value 1"}]},isOpen:{type:Boolean,default:()=>!1}},setup(i,{emit:r}){return{sendStatusModal:()=>r("submit",i.isOpen)}}},g=i=>(I("data-v-67999f79"),i=i(),M(),i),U={class:"root"},Z={key:0,class:"modal items-center justify-center"},q={class:"justify-items-center justify-center items-center"},J={key:0,class:"text-center font-semibold pb-10 pt-5"},K={key:1,class:"text-center font-semibold pb-10 pt-5"},Q={class:"grid grid-cols-2 ml-10 justify-center justify-items-center"},W={class:"grid grid-row"},X=g(()=>t("h1",{class:"font-semibold text-center"},"Clave Cartera de Inversión",-1)),Y={class:"text-sm w-full text-center"},tt={class:"grid grid-row mb-10"},et=g(()=>t("h1",{class:"font-semibold text-center"},"Nombre",-1)),ot={class:"text-sm w-full text-left"},st={class:"grid grid-row"},at=g(()=>t("h1",{class:"font-semibold"},"Número de Contrato",-1)),nt={class:"text-sm w-full text-center"},it={class:"grid grid-rows mb-10"},ct=g(()=>t("h1",{class:"font-semibold ml-10"},"Objeto del Contrato",-1)),lt={class:"text-sm w-full text-left"},dt={class:"flex flex-row justify-between w-full"},rt=g(()=>t("h1",{class:"font-semibold"},"Fecha inicio",-1)),_t={class:"text-sm w-full text-center"},ft=g(()=>t("h1",{class:"font-semibold"},"Fecha fin",-1)),ut={class:"text-sm w-full text-center"},mt={class:"grid grid-rows-2"},ht=g(()=>t("h1",{class:"font-semibold ml-10"},"Unidad SICT",-1)),bt={class:"text-sm w-full text-left"},pt={class:"grid grid-cols-3 ml-10"},xt=g(()=>t("h1",{class:"font-semibold"},"Monto sin IVA",-1)),vt={class:"text-sm w-full text-left ml-5"},yt=g(()=>t("h1",{class:"font-semibold"},"Estatus del Contrato",-1)),gt={class:"text-sm w-full text-left ml-10"},Ct=g(()=>t("h1",{class:"font-semibold"},"¿Existen Convenios Modificatorios?",-1)),wt={class:"text-sm w-full text-left ml-10"};function $t(i,r,e,a,m,h){const b=v("button-base");return n(),l("div",U,[(n(),O(A,{to:"body"},[e.isOpen?(n(),l("div",Z,[t("div",q,[e.data.tipo_contrato==="Convenio de colaboración"?(n(),l("h1",J,"Detalle del Convenio de Colaboración")):(n(),l("h1",K,"Detalle del "+o(e.data.tipo_contrato),1)),t("div",Q,[t("div",W,[t("div",null,[X,t("p",Y,o(e.data.frt_clave_cartera),1)])]),t("div",tt,[t("div",null,[et,t("p",ot,o(e.data.nombre_proyecto),1)])]),t("div",st,[t("div",null,[at,t("p",nt,o(e.data.numero_contrato),1)])]),t("div",it,[t("div",null,[ct,t("p",lt,o(e.data.objeto_contrato),1)])]),t("div",dt,[t("div",null,[rt,t("p",_t,o(e.data.plazo_inicio),1)]),t("div",null,[ft,t("p",ut,o(e.data.plazo_fin),1)])]),t("div",mt,[t("div",null,[ht,t("p",bt,o(e.data.nombre_unidad),1)])])]),t("div",pt,[t("div",null,[xt,t("p",vt," $"+o(e.data.monto_sin_iva),1)]),t("div",null,[yt,t("p",gt,o(e.data.estatus_contrato),1)]),t("div",null,[Ct,t("p",wt,o(e.data.id_contrato_padre===null?"No":"Si"),1)])]),y(b,{label:"Cerrar",onClick:a.sendStatusModal,class:"mr-5 mx-auto my-5"},null,8,["onClick"])])])):f("",!0)]))])}const kt=w(L,[["render",$t],["__scopeId","data-v-67999f79"]]);const Et={name:"ToggleSwitch",components:{ButtonBase:S},props:{data:{type:Object,default:()=>[{example:"value 1"}]},isOpen:{type:Boolean,default:()=>!1}},setup(i,{emit:r}){return{sendStatusModal:()=>r("submit",i.isOpen)}}},u=i=>(I("data-v-4bb3cfaa"),i=i(),M(),i),jt={class:"root"},Ot={key:0,class:"modal flex flex-col items-center justify-center"},It={class:"justify-items-center justify-center items-center verdepastel pb-5"},Mt={class:"text-center font-semibold pb-5 pt-5"},St={class:"grid grid-cols-2 ml-5 justify-center justify-items-center"},Rt={class:"grid grid-row"},At={class:"mr-5"},Dt=u(()=>t("h1",{class:"font-semibold text-center"},"Clave Cartera de Inversión",-1)),Tt={class:"text-sm w-full text-center"},Nt={class:"grid grid-row mb-3"},Ft=u(()=>t("h1",{class:"font-semibold text-center"},"Nombre",-1)),Bt={class:"text-sm w-full text-center"},Pt={class:"grid grid-row"},zt=u(()=>t("h1",{class:"font-semibold"},"Número de Contrato (de origen)",-1)),Vt={class:"text-sm w-full text-center"},Gt={class:"grid grid-rows"},Ht=u(()=>t("h1",{class:"font-semibold text-center"},"Objeto del Contrato",-1)),Lt={class:"text-sm w-full text-left"},Ut={class:"flex flex-row justify-between w-full"},Zt=u(()=>t("h1",{class:"font-semibold text-center"},"Fecha inicio",-1)),qt={class:"text-sm w-full text-center"},Jt=u(()=>t("h1",{class:"font-semibold text-center"},"Fecha fin",-1)),Kt={class:"text-sm w-full text-center"},Qt={class:"grid grid-cols-2"},Wt=u(()=>t("h1",{class:"font-semibold text-center"},"Monto sin IVA",-1)),Xt={class:"text-sm w-full text-center"},Yt=u(()=>t("h1",{class:"font-semibold text-center"},"Estatus del Contrato",-1)),te={class:"text-sm w-full text-center"},ee={class:"justify-center verdeclaro"},oe=u(()=>t("h1",{class:"text-center font-semibold py-2 text-red"},"Convenio Modificatorio",-1)),se={class:"flex justify-around"},ae={class:"flex flex-col justify-around"},ne={class:"py-2"},ie=u(()=>t("h1",{class:"font-semibold text-red text-center"},"Número de Convenio Modificatorio",-1)),ce={class:"text-sm w-full text-center"},le={class:"flex flex-row justify-around"},de={class:"py-2"},re=u(()=>t("h1",{class:"font-semibold text-red"},"Fecha de inicio",-1)),_e={class:"text-sm w-full text-left"},fe={class:"py-2"},ue=u(()=>t("h1",{class:"font-semibold text-red"},"Fecha de fin ",-1)),me={class:"text-sm w-full text-left"},he={class:"justify-items-center py-2"},be=u(()=>t("h1",{class:"font-semibold text-red text-center"},"Monto sin IVA",-1)),pe={class:"text-sm w-full text-center"},xe={class:"flex flex-col ml-10 justify-around"},ve={class:"w-full"},ye=u(()=>t("h1",{class:"font-semibold text-red text-center"},"Objeto del Convenio Modificatorio",-1)),ge={class:"text-sm w-full text-center"},Ce=u(()=>t("h1",{class:"font-semibold text-red text-center"},"Unidad SICT ",-1)),we={class:"text-sm w-full text-center"},$e=u(()=>t("h1",{class:"font-semibold text-red text-center"},"Estatus del Convenio Modificatorio ",-1)),ke={class:"text-sm w-full text-center"};function Ee(i,r,e,a,m,h){const b=v("button-base");return n(),l("div",jt,[(n(),O(A,{to:"body"},[e.isOpen?(n(),l("div",Ot,[t("div",It,[t("h1",Mt,o(e.data.contrato_padre.tipo_contrato==="Convenio de colaboración"?"Convenio de Colaboración":e.data.contrato_padre.tipo_contrato),1),t("div",St,[t("div",Rt,[t("div",At,[Dt,t("p",Tt,o(e.data.contrato_padre.clave_cartera),1)])]),t("div",Nt,[t("div",null,[Ft,t("p",Bt,o(e.data.contrato_padre.nombre_proyecto),1)])]),t("div",Pt,[t("div",null,[zt,t("p",Vt,o(e.data.contrato_padre.numero_contrato),1)])]),t("div",Gt,[t("div",null,[Ht,t("p",Lt,o(e.data.contrato_padre.objeto_contrato),1)])]),t("div",Ut,[t("div",null,[Zt,t("p",qt,o(e.data.contrato_padre.plazo_inicio),1)]),t("div",null,[Jt,t("p",Kt,o(e.data.contrato_padre.plazo_fin),1)])])]),t("div",Qt,[t("div",null,[Wt,t("p",Xt,o(e.data.contrato_padre.monto_sin_iva),1)]),t("div",null,[Yt,t("p",te,o(e.data.contrato_padre.estatus_contrato),1)])])]),t("div",ee,[oe,t("div",se,[t("div",ae,[t("div",ne,[ie,t("p",ce,o(e.data.numero_contrato),1)]),t("div",le,[t("div",de,[re,t("p",_e,o(e.data.plazo_inicio),1)]),t("div",fe,[ue,t("p",me,o(e.data.plazo_fin),1)])]),t("div",he,[be,t("p",pe,o(e.data.monto_sin_iva),1)])]),t("div",xe,[t("div",ve,[ye,t("p",ge,o(e.data.objeto_contrato),1)]),t("div",null,[Ce,t("p",we,o(e.data.unidad_maof),1)]),t("div",null,[$e,t("p",ke,o(e.data.estatus_contrato),1)])])]),y(b,{label:"Cerrar",onClick:a.sendStatusModal,class:"mr-5 mx-auto my-5"},null,8,["onClick"])])])):f("",!0)]))])}const je=w(Et,[["render",Ee],["__scopeId","data-v-4bb3cfaa"]]);const Oe={name:"TableEstimateResident",components:{DetailPop:kt,DetailPopConvenioModificatorio:je},props:{headers:{type:Array,default:()=>[{label:"Example Header",field:"example"}]},data:{type:Array,default:()=>[{example:"value 1"}]},options:{type:Array,default:()=>[{label:"example",action:i=>console.log(i)}]}},setup(){const i=T(),r=[1,2,3];let e=E({isOpen:!1}),a=E({data:{}}),m=E({isOpen:!1}),h=E({data:{},loading:!0});return{dots:r,openActions:d=>{document.getElementById(d).classList.toggle("hidden")},detalleContrato:async d=>{if(e.isOpen=!e.isOpen,d.contrato_padre===null){const{data:_}=await D(d.contrato_estimacion);a.data=_}if(d.contrato_padre!==null){const{data:_}=await D(d.contrato_padre);a.data=_}},semaforo:d=>{i.push({name:"EditResidentEstimate",params:{residentEstimateId:d.id_estimacion}})},downloadFile:async d=>{window.open(`${d.archivo_residente}`,"_blank")},isOpenContratoModal:e,dataContratoConvenio:a,detalleConvenioModificatorio:async d=>{h.loading=!0,m.isOpen=!m.isOpen;const{data:_}=await B(d.contrato_estimacion);h.data=_,h.loading=!1},isOpenConvenioModificatorioModal:m,dataConvenioModificatorio:h}}},Ie={class:"border border-solid border-t-0 border-l-0 border-black border-collapse text-gray-900 w-full"},Me={key:0},Se=["onClick"],Re=["onClick"],Ae=["onClick"],De=["onClick"],Te={key:5},Ne=["onClick"],Fe=["onClick"],Be=["onClick"],Pe=["onClick"],ze=["onClick"],Ve={class:"flex justify-center"},Ge=["onClick"],He=["id","onMouseleave"],Le={class:"flex flex-col"},Ue=["onClick"];function Ze(i,r,e,a,m,h){const b=v("Detail-Pop"),C=v("DetailPopConvenioModificatorio");return n(),l("table",Ie,[y(b,{data:a.dataContratoConvenio.data,isOpen:a.isOpenContratoModal.isOpen,onSubmit:r[0]||(r[0]=c=>a.isOpenContratoModal.isOpen=!1)},null,8,["data","isOpen"]),a.dataConvenioModificatorio.loading?f("",!0):(n(),O(C,{key:0,data:a.dataConvenioModificatorio.data,isOpen:a.isOpenConvenioModificatorioModal.isOpen,onSubmit:r[1]||(r[1]=c=>a.isOpenConvenioModificatorioModal.isOpen=!1)},null,8,["data","isOpen"])),t("tr",null,[(n(!0),l($,null,k(e.headers,(c,p)=>(n(),l("th",{key:p,class:j(["border-b-2 border-l-0 px-2",{"border-r-2":c.label===" "}])},o(c.label),3))),128))]),(n(!0),l($,null,k(e.data,(c,p)=>(n(),l("tr",{id:"rows",class:j(["mx-6",{" bg-gray-100":p%2===0}]),key:p},[(n(!0),l($,null,k(e.headers,(s,d)=>(n(),l("td",{key:d,class:j(["text-center",{"border-r-2 text-center":s.field==="documents","border-l":d==0}])},[s.label==="#"?(n(),l("p",Me,o(p+1),1)):f("",!0),s.field==="documents"&&c.archivo_residente!==null?(n(),l("img",{key:1,src:P,onClick:_=>a.downloadFile(c),class:"cursor-pointer"},null,8,Se)):f("",!0),s.field==="numero_contrato"&&c.contrato_padre===null?(n(),l("p",{key:2,class:"text-blue cursor-pointer contratos",onClick:_=>a.detalleContrato(c)},o(c[s.field]),9,Re)):f("",!0),s.field==="numero_contrato"&&c.contrato_padre!==null?(n(),l("p",{key:3,class:"text-blue cursor-pointer contratos",onClick:_=>a.detalleContrato(c)},o(c.numero_contrato_padre),9,Ae)):f("",!0),s.field==="numero_contrato_padre"&&c.contrato_padre!==null?(n(),l("p",{key:4,class:"text-blue cursor-pointer contratos",onClick:_=>a.detalleConvenioModificatorio(c)},o(c.numero_contrato),9,De)):f("",!0),s.field!=="numero_contrato_padre"&&s.field!=="numero_contrato"&&s.field!=="estatus_semaforo"?(n(),l("p",Te,o(c[s.field]),1)):f("",!0),s.label==="RESIDENTE"&&s.field==="estatus_semaforo"&&c[s.field]==="Residente"?(n(),l("button",{key:6,class:"bg-red rounded-full text-red",onClick:_=>a.semaforo(c)}," abcd",8,Ne)):f("",!0),s.label==="ÁREA REVISORA"&&s.field==="estatus_semaforo"&&c[s.field]==="Area Revisora"?(n(),l("button",{key:7,class:"bg-red rounded-full text-red",onClick:_=>a.semaforo(c)}," abcd",8,Fe)):f("",!0),s.label==="FINANZAS"&&s.field==="estatus_semaforo"&&c[s.field]==="Finanzas"?(n(),l("button",{key:8,class:"bg-red rounded-full text-red",onClick:_=>a.semaforo(c)}," abcd",8,Be)):f("",!0),s.label==="TRÁMITE DE PAGO"&&s.field==="estatus_semaforo"&&c[s.field]==="DGPOP"?(n(),l("button",{key:9,class:"bg-red rounded-full text-red",onClick:_=>a.semaforo(c)}," abcd",8,Pe)):f("",!0),s.label==="PAGO"&&s.field==="estatus_semaforo"&&c[s.field]==="Pago Efectuado"?(n(),l("button",{key:10,class:"bg-green rounded-full text-green",onClick:_=>a.semaforo(c)}," abcd",8,ze)):f("",!0)],2))),128)),e.options.length?(n(),l("td",{key:0,class:j(["p-2 relative",{" border-l-2 border-gray-100":p%2!==0}])},[t("div",Ve,[t("div",{class:"p-1 cursor-pointer",onClick:s=>a.openActions(`table-actions-${p}`)},[(n(!0),l($,null,k(a.dots,(s,d)=>(n(),l("span",{key:d,class:"rounded-full h-1 w-1 block bg-blue mb-1"}))),128))],8,Ge)]),t("div",{class:"hidden absolute right-4 top-8 bg-white z-10",style:{"box-shadow":"-3px 3px 6px #00000029"},id:`table-actions-${p}`,onMouseleave:s=>a.openActions(`table-actions-${p}`)},[t("div",Le,[(n(!0),l($,null,k(e.options,(s,d)=>(n(),l("div",{key:d,class:"h-8 flex justify-center items-center py-2 px-8"},[t("p",{class:"text-xs border-b border-solid border-gray-100 cursor-pointer hover:border-gray hover:font-medium",onClick:_=>s.action(c)},o(s.label),9,Ue)]))),128))])],40,He)],2)):f("",!0)],2))),128))])}const qe=w(Oe,[["render",Ze],["__scopeId","data-v-234f7bc5"]]);const Je={name:"ToggleSwitch",props:{label:{type:String,default:""}}},Ke=i=>(I("data-v-c78a01f0"),i=i(),M(),i),Qe={class:"panel panel-default"},We={class:"panel-heading"},Xe={class:"panel-title"},Ye=Ke(()=>t("div",{class:"panel-body"},[t("label",{class:"switch"},[t("input",{type:"checkbox"}),t("div",{class:"slider round"})])],-1));function to(i,r,e,a,m,h){return n(),l("div",Qe,[t("div",We,[t("h3",Xe,o(e.label),1)]),Ye])}const eo=w(Je,[["render",to],["__scopeId","data-v-c78a01f0"]]);const oo={name:"ToggleSwitch",components:{ButtonBase:S},props:{data:{type:Object,default:()=>[{example:"value 1"}]},isOpen:{type:Boolean,default:()=>!1}},setup(i,{emit:r}){return{sendStatusModal:()=>r("submit",i.isOpen)}}},x=i=>(I("data-v-84fe8ae2"),i=i(),M(),i),so={class:"root"},ao={key:0,class:"modal items-center justify-center"},no={class:"justify-items-center justify-center items-center"},io=x(()=>t("h1",{class:"text-center font-semibold pb-10 pt-5"},"Detalle de la Estimación",-1)),co={class:"flex justify-around"},lo=x(()=>t("h1",{class:"text-center font-semibold"},"Número de Contrato o Convenio de Colaboración",-1)),ro={class:"text-center"},_o=x(()=>t("h1",{class:"text-center font-semibold"},"Objeto",-1)),fo={class:"text-center"},uo={class:"mt-5"},mo={class:"flex justify-center items-center flex-row gap-3 py-1"},ho=x(()=>t("h1",{class:"text-left basis-1/2 font-semibold pr-9"},"Fecha de recepción",-1)),bo={class:"text-center"},po={class:"flex justify-center items-center flex-row gap-3 py-1"},xo=x(()=>t("h1",{class:"text-center basis-1/2 font-semibold pr-32"},"Fecha de autorización",-1)),vo={class:"text-center"},yo={class:"flex justify-center items-center flex-row gap-3 py-1"},go=x(()=>t("h1",{class:"text-right basis-1/3 font-semibold mr-[6.7rem]"},"Período de la Estimación",-1)),Co={class:"text-right"},wo=x(()=>t("h1",{class:"text-right font-semibold"},"al",-1)),$o={class:"text-right"},ko={class:"flex justify-center items-center flex-row gap-3 py-1"},Eo=x(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"Importe de la obra ejecutada",-1)),jo={class:"text-left"},Oo={class:"flex justify-center items-center flex-row gap-3 py-1"},Io=x(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"Importe a pagar",-1)),Mo={class:"text-left"},So={class:"flex justify-center items-center flex-row gap-3 py-1"},Ro=x(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"% de grado de avance",-1)),Ao={class:"text-left"},Do={class:"flex justify-center items-center flex-row gap-3 py-1"},To=x(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"% de avance de la Estimación",-1)),No={class:"text-left"},Fo={class:"flex justify-center items-center flex-row gap-3 py-1"},Bo=x(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"% de avance de la Estimación acumulado",-1)),Po={class:"text-left"},zo={class:"flex justify-center items-center flex-row gap-3 py-1"},Vo=x(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"% de avance físico",-1)),Go={class:"text-left"},Ho={class:"flex justify-center items-center flex-row gap-3 py-1"},Lo=x(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"% de avance financiero",-1)),Uo={class:"text-left"};function Zo(i,r,e,a,m,h){const b=v("button-base");return n(),l("div",so,[(n(),O(A,{to:"body"},[e.isOpen?(n(),l("div",ao,[t("div",no,[io,t("div",co,[t("div",null,[lo,t("p",ro,o(e.data.numero_contrato),1)]),t("div",null,[_o,t("p",fo,o(e.data.objeto_contrato),1)])]),t("div",uo,[t("div",mo,[ho,t("p",bo,o(e.data.fecha_recepcion_info_contratista),1)]),t("div",po,[xo,t("p",vo,o(e.data.fecha_autorizacion_contratista),1)]),t("div",yo,[go,t("p",Co,o(e.data.fecha_periodo_inicio_estimacion),1),wo,t("p",$o,o(e.data.fecha_periodo_fin_estimacion),1)]),t("div",ko,[Eo,t("p",jo,o(e.data.frt_importe_obra_ejecutada),1)]),t("div",Oo,[Io,t("p",Mo,o(e.data.frt_importe_pagar),1)]),t("div",So,[Ro,t("p",Ao,o(e.data.grado_avance_obra)+"% ",1)]),t("div",Do,[To,t("p",No,o(e.data.porcentaje_avance_estimacion)+"% ",1)]),t("div",Fo,[Bo,t("p",Po,o(e.data.porcentaje_avance_estimacion_acumulado)+"% ",1)]),t("div",zo,[Vo,t("p",Go,o(e.data.porcentaje_Avance_fisico)+"% ",1)]),t("div",Ho,[Lo,t("p",Uo,o(e.data.porcensaje_avance_financiero)+"% ",1)])]),y(b,{label:"Cerrar",onClick:a.sendStatusModal,class:"mr-5 mx-auto my-5"},null,8,["onClick"])])])):f("",!0)]))])}const qo=w(oo,[["render",Zo],["__scopeId","data-v-84fe8ae2"]]),Jo={name:"ResidentEstimateIndex",components:{TableroEstimacionResidente:qe,ArrowBack:N,ButtonBase:S,TitleBar:F,TableBase:z,ToggleSwitch:eo,DetailEstimate:qo},setup(){const i=T(),r=[{label:"#",field:""},{label:"Contrato o Convenio de Colaboración",field:"numero_contrato"},{label:"Convenio Modificatorio",field:"numero_contrato_padre"},{label:" ",field:"documents"},{label:"# Estimación",field:"num_consecutivo_estimacion"},{label:"Inicio",field:"fecha_periodo_inicio_estimacion"},{label:"Fin",field:"fecha_periodo_fin_estimacion"},{label:"Alta",field:"fecha_alta"},{label:"Fecha de autorización",field:"fecha_autorizacion_contratista"},{label:"Días transcurridos",field:"dias_transcurridos"},{label:"RESIDENTE",field:"estatus_semaforo"},{label:"ÁREA REVISORA",field:"estatus_semaforo"},{label:"FINANZAS",field:"estatus_semaforo"},{label:"TRÁMITE DE PAGO",field:"estatus_semaforo"},{label:"PAGO",field:"estatus_semaforo"}],e=R([]),a=R([]);let m=!1,h=R(!1);const b=async()=>{const{data:s}=await V();e.value=s},C=[{label:"Detalles",action:async s=>{h.value=!h.value;const{data:d}=await G(s.id_estimacion);d.fecha_recepcion_info_contratista=d.fecha_recepcion_info_contratista.split(" ")[0],d.fecha_periodo_inicio_estimacion=d.fecha_periodo_inicio_estimacion.split(" ")[0],d.fecha_periodo_fin_estimacion=d.fecha_periodo_fin_estimacion.split(" ")[0],a.value=d,console.log("data: ",d),console.log("detalleEstimacionData: ",a)}},{label:"Nuevo",action:s=>i.push({name:"NewResidentEstimateById",params:{residentEstimateId:s.contrato_estimacion}})},{label:"Archivo",action:async s=>{i.push({name:"FilesResidentEstimate",params:{residentEstimateId:s.id_estimacion}})}},{label:"Histórico",action:async s=>{i.push({name:"HistoricoResidentEstimate",params:{residentEstimateId:s.id_estimacion}})}}],c=()=>i.push({name:"NewResidentEstimate"}),p=async()=>{if(m=!m,m===!0){const{data:s}=await H(9);e.value=s}m===!1&&b()};return b(),{residentEstimate:e,featureOptions:C,headers:r,goToNewResidentEstimate:c,getResidentEstimate:b,processo:p,procesoVariable:m,detalleEstimacionData:a,detalleEstimacion:h}}},Ko={class:"px-4 mt-10"},Qo={class:"px-4"},Wo={class:"flex justify-end"};function Xo(i,r,e,a,m,h){const b=v("arrow-back"),C=v("title-bar"),c=v("detail-estimate"),p=v("button-base"),s=v("toggle-switch"),d=v("tablero-estimacion-residente");return n(),l("main",Ko,[y(b),y(C,{title:"Estimación Residente",subtitle:"Inicio"}),t("section",Qo,[t("div",Wo,[y(c,{data:a.detalleEstimacionData,isOpen:a.detalleEstimacion,onSubmit:r[0]||(r[0]=_=>a.detalleEstimacion=!1)},null,8,["data","isOpen"]),y(p,{label:"Nueva Estimación Residente",onClick:a.goToNewResidentEstimate,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),y(s,{label:"En Proceso",onChange:a.processo,class:"mb-3 mr-0 ml-10"},null,8,["onChange"])]),y(d,{options:a.featureOptions,headers:a.headers,data:a.residentEstimate},null,8,["options","headers","data"])])])}const cs=w(Jo,[["render",Xo]]);export{cs as default};
