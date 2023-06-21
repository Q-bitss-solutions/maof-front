import{_ as k,a as C,o as s,c as a,f as j,b as t,t as o,d as O,g as r,T as M,p as E,k as I,u as F,m as w,F as y,e as g,n as $}from"./index-9c7881ce.js";import"./assingResident-cc83d359.js";import{a as D,b as P}from"./contract-980fe056.js";import{B as S}from"./auth-f1c010b2.js";import{_ as B}from"./PDF-a4bdfbbc.js";const N={name:"ToggleSwitch",components:{ButtonBase:S},props:{data:{type:Object,default:()=>[{example:"value 1"}]},isOpen:{type:Boolean,default:()=>!1}},setup(c,{emit:f}){return{sendStatusModal:()=>f("submit",c.isOpen)}}},x=c=>(E("data-v-e1f02189"),c=c(),I(),c),R={class:"root"},T={key:0,class:"modal items-center justify-center"},z={class:"justify-items-center justify-center items-center"},V={key:0,class:"text-center font-semibold pb-10 pt-5"},G={key:1,class:"text-center font-semibold pb-10 pt-5"},L={class:"grid grid-cols-2 ml-10 justify-center justify-items-center"},U={class:"grid grid-row"},H=x(()=>t("h1",{class:"font-semibold text-center"},"Clave Cartera de Inversión",-1)),Z={class:"text-sm w-full text-center"},q={class:"grid grid-row mb-10"},J=x(()=>t("h1",{class:"font-semibold text-center"},"Nombre",-1)),K={class:"text-sm w-full text-left"},Q={class:"grid grid-row"},W=x(()=>t("h1",{class:"font-semibold"},"Número de Contrato",-1)),X={class:"text-sm w-full text-center"},Y={class:"grid grid-rows mb-10"},tt=x(()=>t("h1",{class:"font-semibold ml-10"},"Objeto del Contrato",-1)),et={class:"text-sm w-full text-left"},ot={class:"flex flex-row justify-between w-full"},st=x(()=>t("h1",{class:"font-semibold"},"Fecha inicio",-1)),nt={class:"text-sm w-full text-center"},at=x(()=>t("h1",{class:"font-semibold"},"Fecha fin",-1)),it={class:"text-sm w-full text-center"},lt={class:"grid grid-rows-2"},ct=x(()=>t("h1",{class:"font-semibold ml-10"},"Unidad MAOF",-1)),dt={class:"text-sm w-full text-left"},rt={class:"grid grid-cols-3 ml-10"},_t=x(()=>t("h1",{class:"font-semibold"},"Monto sin IVA",-1)),ft={class:"text-sm w-full text-left ml-5"},ut=x(()=>t("h1",{class:"font-semibold"},"Estatus del Contrato",-1)),mt={class:"text-sm w-full text-left"},ht=x(()=>t("h1",{class:"font-semibold"},"¿Existen Convenios Modificatorios?",-1)),xt={class:"text-sm w-full text-left ml-10"};function bt(c,f,e,i,p,b){const v=C("button-base");return s(),a("div",R,[(s(),j(M,{to:"body"},[e.isOpen?(s(),a("div",T,[t("div",z,[e.data.tipo_contrato==="Convenio de colaboración"?(s(),a("h1",V," Detalle del Convenio de Colaboración")):(s(),a("h1",G,"Detalle del "+o(e.data.tipo_contrato),1)),t("div",L,[t("div",U,[t("div",null,[H,t("p",Z,o(e.data.frt_clave_cartera),1)])]),t("div",q,[t("div",null,[J,t("p",K,o(e.data.nombre_proyecto),1)])]),t("div",Q,[t("div",null,[W,t("p",X,o(e.data.numero_contrato),1)])]),t("div",Y,[t("div",null,[tt,t("p",et,o(e.data.objeto_contrato),1)])]),t("div",ot,[t("div",null,[st,t("p",nt,o(e.data.plazo_inicio),1)]),t("div",null,[at,t("p",it,o(e.data.plazo_fin),1)])]),t("div",lt,[t("div",null,[ct,t("p",dt,o(e.data.nombre_unidad),1)])])]),t("div",rt,[t("div",null,[_t,t("p",ft," $"+o(e.data.monto_sin_iva),1)]),t("div",null,[ut,t("p",mt,o(e.data.estatus_contrato),1)]),t("div",null,[ht,t("p",xt,o(e.data.id_contrato_padre===null?"No":"Si"),1)])]),O(v,{label:"Cerrar",onClick:i.sendStatusModal,class:"mr-5 mx-auto my-5"},null,8,["onClick"])])])):r("",!0)]))])}const vt=k(N,[["render",bt],["__scopeId","data-v-e1f02189"]]);const pt={name:"ToggleSwitch",components:{ButtonBase:S},props:{data:{type:Object,default:()=>[{example:"value 1"}]},isOpen:{type:Boolean,default:()=>!1}},setup(c,{emit:f}){return{sendStatusModal:()=>f("submit",c.isOpen)}}},_=c=>(E("data-v-e1584540"),c=c(),I(),c),yt={class:"root"},gt={key:0,class:"modal flex flex-col items-center justify-center"},Ct={class:"justify-items-center justify-center items-center verdepastel pb-5"},wt={class:"text-center font-semibold pb-5 pt-5"},$t={class:"grid grid-cols-2 ml-5 justify-center justify-items-center"},kt={class:"grid grid-row"},jt={class:"mr-5"},Ot=_(()=>t("h1",{class:"font-semibold text-center"}," Clave Cartera de Inversión ",-1)),Mt={class:"text-sm w-full text-center"},Et={class:"grid grid-row mb-3"},It=_(()=>t("h1",{class:"font-semibold text-center"},"Nombre",-1)),St={class:"text-sm w-full text-center"},At={class:"grid grid-row"},Dt=_(()=>t("h1",{class:"font-semibold"},"Número de Contrato (de origen)",-1)),Ft={class:"text-sm w-full text-center"},Pt={class:"grid grid-rows"},Bt=_(()=>t("h1",{class:"font-semibold text-center"},"Objeto del Contrato",-1)),Nt={class:"text-sm w-full text-left"},Rt={class:"flex flex-row justify-between w-full"},Tt=_(()=>t("h1",{class:"font-semibold text-center"},"Fecha inicio",-1)),zt={class:"text-sm w-full text-center"},Vt=_(()=>t("h1",{class:"font-semibold text-center"},"Fecha fin",-1)),Gt={class:"text-sm w-full text-center"},Lt={class:"grid grid-cols-2"},Ut=_(()=>t("h1",{class:"font-semibold text-center"},"Monto sin IVA",-1)),Ht={class:"text-sm w-full text-center"},Zt=_(()=>t("h1",{class:"font-semibold text-center"},"Estatus del Contrato",-1)),qt={class:"text-sm w-full text-center"},Jt={class:"justify-center verdeclaro"},Kt=_(()=>t("h1",{class:"text-center font-semibold py-2 text-red"}," Convenio Modificatorio ",-1)),Qt={class:"flex justify-around"},Wt={class:"flex flex-col justify-around"},Xt={class:"py-2"},Yt=_(()=>t("h1",{class:"font-semibold text-red text-center"}," Número de Convenio Modificatorio ",-1)),te={class:"text-sm w-full text-center"},ee={class:"flex flex-row justify-around"},oe={class:"py-2"},se=_(()=>t("h1",{class:"font-semibold text-red"},"Fecha de inicio",-1)),ne={class:"text-sm w-full text-left"},ae={class:"py-2"},ie=_(()=>t("h1",{class:"font-semibold text-red"},"Fecha de fin",-1)),le={class:"text-sm w-full text-left"},ce={class:"justify-items-center py-2"},de=_(()=>t("h1",{class:"font-semibold text-red text-center"}," Monto sin IVA ",-1)),re={class:"text-sm w-full text-center"},_e={class:"flex flex-col ml-10 justify-around"},fe={class:"w-full"},ue=_(()=>t("h1",{class:"font-semibold text-red text-center"}," Objeto del Convenio Modificatorio ",-1)),me={class:"text-sm w-full text-center"},he=_(()=>t("h1",{class:"font-semibold text-red text-center"},"Unidad MAOF",-1)),xe={class:"text-sm w-full text-center"},be=_(()=>t("h1",{class:"font-semibold text-red text-center"}," Estatus del Convenio Modificatorio ",-1)),ve={class:"text-sm w-full text-center"};function pe(c,f,e,i,p,b){const v=C("button-base");return s(),a("div",yt,[(s(),j(M,{to:"body"},[e.isOpen?(s(),a("div",gt,[t("div",Ct,[t("h1",wt,o(e.data.contrato_padre.tipo_contrato==="Convenio de colaboración"?"Convenio de Colaboración":e.data.contrato_padre.tipo_contrato),1),t("div",$t,[t("div",kt,[t("div",jt,[Ot,t("p",Mt,o(e.data.contrato_padre.clave_cartera),1)])]),t("div",Et,[t("div",null,[It,t("p",St,o(e.data.contrato_padre.nombre_proyecto),1)])]),t("div",At,[t("div",null,[Dt,t("p",Ft,o(e.data.contrato_padre.numero_contrato),1)])]),t("div",Pt,[t("div",null,[Bt,t("p",Nt,o(e.data.contrato_padre.objeto_contrato),1)])]),t("div",Rt,[t("div",null,[Tt,t("p",zt,o(e.data.contrato_padre.plazo_inicio),1)]),t("div",null,[Vt,t("p",Gt,o(e.data.contrato_padre.plazo_fin),1)])])]),t("div",Lt,[t("div",null,[Ut,t("p",Ht,o(e.data.contrato_padre.monto_sin_iva),1)]),t("div",null,[Zt,t("p",qt,o(e.data.contrato_padre.estatus_contrato),1)])])]),t("div",Jt,[Kt,t("div",Qt,[t("div",Wt,[t("div",Xt,[Yt,t("p",te,o(e.data.numero_contrato),1)]),t("div",ee,[t("div",oe,[se,t("p",ne,o(e.data.plazo_inicio),1)]),t("div",ae,[ie,t("p",le,o(e.data.plazo_fin),1)])]),t("div",ce,[de,t("p",re,o(e.data.monto_sin_iva),1)])]),t("div",_e,[t("div",fe,[ue,t("p",me,o(e.data.objeto_contrato),1)]),t("div",null,[he,t("p",xe,o(e.data.unidad_maof),1)]),t("div",null,[be,t("p",ve,o(e.data.estatus_contrato),1)])])]),O(v,{label:"Cerrar",onClick:i.sendStatusModal,class:"mr-5 mx-auto my-5"},null,8,["onClick"])])])):r("",!0)]))])}const ye=k(pt,[["render",pe],["__scopeId","data-v-e1584540"]]);const ge={name:"TableEstimateResident",components:{DetailPop:vt,DetailPopConvenioModificatorio:ye},props:{headers:{type:Array,default:()=>[{label:"Example Header",field:"example"}]},data:{type:Array,default:()=>[{example:"value 1"}]},options:{type:Array,default:()=>[{label:"example",action:c=>console.log(c)}]}},setup(){const c=F(),f=[1,2,3];let e=w({isOpen:!1}),i=w({data:{}}),p=w({isOpen:!1}),b=w({data:{},loading:!0});return{dots:f,openActions:d=>{document.getElementById(d).classList.toggle("hidden")},detalleContrato:async d=>{if(e.isOpen=!e.isOpen,d.contrato_padre===null){const{data:u}=await D(d.contrato_estimacion);i.data=u}if(d.contrato_padre!==null){const{data:u}=await D(d.contrato_padre);i.data=u}},semaforo:d=>{c.push({name:"EditResidentEstimate",params:{residentEstimateId:d.id_estimacion}})},downloadFile:async d=>{window.open(`${d.archivo_residente}`,"_blank")},isOpenContratoModal:e,dataContratoConvenio:i,detalleConvenioModificatorio:async d=>{b.loading=!0,p.isOpen=!p.isOpen;const{data:u}=await P(d.contrato_estimacion);b.data=u,b.loading=!1},isOpenConvenioModificatorioModal:p,dataConvenioModificatorio:b}}},Ce={class:"border border-solid border-t-0 border-l-0 border-black border-collapse text-gray-900 w-full"},we={key:0},$e=["onClick"],ke=["onClick"],je=["onClick"],Oe=["onClick"],Me={key:5},Ee=["onClick"],Ie=["onClick"],Se=["onClick"],Ae=["onClick"],De=["onClick"],Fe={class:"flex justify-center"},Pe=["onClick"],Be=["id","onMouseleave"],Ne={class:"flex flex-col"},Re=["onClick"];function Te(c,f,e,i,p,b){const v=C("Detail-Pop"),A=C("DetailPopConvenioModificatorio");return s(),a("table",Ce,[O(v,{data:i.dataContratoConvenio.data,isOpen:i.isOpenContratoModal.isOpen,onSubmit:f[0]||(f[0]=l=>i.isOpenContratoModal.isOpen=!1)},null,8,["data","isOpen"]),i.dataConvenioModificatorio.loading?r("",!0):(s(),j(A,{key:0,data:i.dataConvenioModificatorio.data,isOpen:i.isOpenConvenioModificatorioModal.isOpen,onSubmit:f[1]||(f[1]=l=>i.isOpenConvenioModificatorioModal.isOpen=!1)},null,8,["data","isOpen"])),t("tr",null,[(s(!0),a(y,null,g(e.headers,(l,h)=>(s(),a("th",{key:h,class:$(["border-b-2 border-l-0 px-2",{"border-r-2":l.label===" "}])},o(l.label),3))),128))]),(s(!0),a(y,null,g(e.data,(l,h)=>(s(),a("tr",{id:"rows",class:$(["mx-6",{" bg-gray-100":h%2===0}]),key:h},[(s(!0),a(y,null,g(e.headers,(n,d)=>(s(),a("td",{key:d,class:$(["text-center px-2",{"border-r-2 text-center":n.field==="documents","border-l":d==0}])},[n.label==="#"?(s(),a("p",we,o(h+1),1)):r("",!0),n.field==="documents"&&l.archivo_residente!==null?(s(),a("img",{key:1,src:B,onClick:u=>i.downloadFile(l),class:"cursor-pointer"},null,8,$e)):r("",!0),n.field==="numero_contrato"&&l.contrato_padre===null?(s(),a("p",{key:2,class:"text-blue cursor-pointer contratos text-center",onClick:u=>i.detalleContrato(l)},o(l[n.field]),9,ke)):r("",!0),n.field==="numero_contrato"&&l.contrato_padre!==null?(s(),a("p",{key:3,class:"text-blue cursor-pointer contratos text-center",onClick:u=>i.detalleContrato(l)},o(l.numero_contrato_padre),9,je)):r("",!0),n.field==="numero_contrato_padre"&&l.contrato_padre!==null?(s(),a("p",{key:4,class:"text-blue cursor-pointer contratos text-center",onClick:u=>i.detalleConvenioModificatorio(l)},o(l.numero_contrato),9,Oe)):r("",!0),n.field!=="numero_contrato_padre"&&n.field!=="numero_contrato"&&n.field!=="estatus_semaforo"?(s(),a("p",Me,o(l[n.field]),1)):r("",!0),n.label==="RESIDENTE"&&n.field==="estatus_semaforo"&&l[n.field]==="Residente"?(s(),a("button",{key:6,class:"bg-orange rounded-full text-orange w-6",onClick:u=>i.semaforo(l)}," ab",8,Ee)):r("",!0),n.label==="ÁREA REVISORA"&&n.field==="estatus_semaforo"&&l[n.field]==="Area Revisora"?(s(),a("button",{key:7,class:"bg-orange rounded-full text-orange w-6",onClick:u=>i.semaforo(l)}," ab",8,Ie)):r("",!0),n.label==="FINANZAS"&&n.field==="estatus_semaforo"&&l[n.field]==="Finanzas"?(s(),a("button",{key:8,class:"bg-orange rounded-full text-orange w-6",onClick:u=>i.semaforo(l)}," ab",8,Se)):r("",!0),n.label==="TRÁMITE DE PAGO"&&n.field==="estatus_semaforo"&&l[n.field]==="DGPOP"?(s(),a("button",{key:9,class:"bg-orange rounded-full text-orange w-6",onClick:u=>i.semaforo(l)}," ab",8,Ae)):r("",!0),n.label==="PAGO"&&n.field==="estatus_semaforo"&&l[n.field]==="Pago Efectuado"?(s(),a("button",{key:10,class:"bg-green rounded-full text-green w-6",onClick:u=>i.semaforo(l)}," ab",8,De)):r("",!0)],2))),128)),e.options.length?(s(),a("td",{key:0,class:$(["p-2 relative",{" border-l-2 border-gray-100":h%2!==0}])},[t("div",Fe,[t("div",{class:"p-1 cursor-pointer",onClick:n=>i.openActions(`table-actions-${h}`)},[(s(!0),a(y,null,g(i.dots,(n,d)=>(s(),a("span",{key:d,class:"rounded-full h-1 w-1 block bg-blue mb-1"}))),128))],8,Pe)]),t("div",{class:"hidden absolute right-4 top-8 bg-white z-10",style:{"box-shadow":"-3px 3px 6px #00000029"},id:`table-actions-${h}`,onMouseleave:n=>i.openActions(`table-actions-${h}`)},[t("div",Ne,[(s(!0),a(y,null,g(e.options,(n,d)=>(s(),a("div",{key:d,class:"h-8 flex justify-center items-center py-2 px-8"},[t("p",{class:"text-xs border-b border-solid border-gray-100 cursor-pointer hover:border-gray hover:font-medium",onClick:u=>n.action(l)},o(n.label),9,Re)]))),128))])],40,Be)],2)):r("",!0)],2))),128))])}const Bo=k(ge,[["render",Te],["__scopeId","data-v-28ed36aa"]]);const ze={name:"ToggleSwitch",components:{ButtonBase:S},props:{data:{type:Object,default:()=>[{example:"value 1"}]},isOpen:{type:Boolean,default:()=>!1}},setup(c,{emit:f}){return{sendStatusModal:()=>f("submit",c.isOpen)}}},m=c=>(E("data-v-84fe8ae2"),c=c(),I(),c),Ve={class:"root"},Ge={key:0,class:"modal items-center justify-center"},Le={class:"justify-items-center justify-center items-center"},Ue=m(()=>t("h1",{class:"text-center font-semibold pb-10 pt-5"},"Detalle de la Estimación",-1)),He={class:"flex justify-around"},Ze=m(()=>t("h1",{class:"text-center font-semibold"},"Número de Contrato o Convenio de Colaboración",-1)),qe={class:"text-center"},Je=m(()=>t("h1",{class:"text-center font-semibold"},"Objeto",-1)),Ke={class:"text-center"},Qe={class:"mt-5"},We={class:"flex justify-center items-center flex-row gap-3 py-1"},Xe=m(()=>t("h1",{class:"text-left basis-1/2 font-semibold pr-9"},"Fecha de recepción",-1)),Ye={class:"text-center"},to={class:"flex justify-center items-center flex-row gap-3 py-1"},eo=m(()=>t("h1",{class:"text-center basis-1/2 font-semibold pr-32"},"Fecha de autorización",-1)),oo={class:"text-center"},so={class:"flex justify-center items-center flex-row gap-3 py-1"},no=m(()=>t("h1",{class:"text-right basis-1/3 font-semibold mr-[6.7rem]"},"Período de la Estimación",-1)),ao={class:"text-right"},io=m(()=>t("h1",{class:"text-right font-semibold"},"al",-1)),lo={class:"text-right"},co={class:"flex justify-center items-center flex-row gap-3 py-1"},ro=m(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"Importe de la obra ejecutada",-1)),_o={class:"text-left"},fo={class:"flex justify-center items-center flex-row gap-3 py-1"},uo=m(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"Importe a pagar",-1)),mo={class:"text-left"},ho={class:"flex justify-center items-center flex-row gap-3 py-1"},xo=m(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"% de grado de avance",-1)),bo={class:"text-left"},vo={class:"flex justify-center items-center flex-row gap-3 py-1"},po=m(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"% de avance de la Estimación",-1)),yo={class:"text-left"},go={class:"flex justify-center items-center flex-row gap-3 py-1"},Co=m(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"% de avance de la Estimación acumulado",-1)),wo={class:"text-left"},$o={class:"flex justify-center items-center flex-row gap-3 py-1"},ko=m(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"% de avance físico",-1)),jo={class:"text-left"},Oo={class:"flex justify-center items-center flex-row gap-3 py-1"},Mo=m(()=>t("h1",{class:"text-left basis-1/2 font-semibold"},"% de avance financiero",-1)),Eo={class:"text-left"};function Io(c,f,e,i,p,b){const v=C("button-base");return s(),a("div",Ve,[(s(),j(M,{to:"body"},[e.isOpen?(s(),a("div",Ge,[t("div",Le,[Ue,t("div",He,[t("div",null,[Ze,t("p",qe,o(e.data.numero_contrato),1)]),t("div",null,[Je,t("p",Ke,o(e.data.objeto_contrato),1)])]),t("div",Qe,[t("div",We,[Xe,t("p",Ye,o(e.data.fecha_recepcion_info_contratista),1)]),t("div",to,[eo,t("p",oo,o(e.data.fecha_autorizacion_contratista),1)]),t("div",so,[no,t("p",ao,o(e.data.fecha_periodo_inicio_estimacion),1),io,t("p",lo,o(e.data.fecha_periodo_fin_estimacion),1)]),t("div",co,[ro,t("p",_o,o(e.data.frt_importe_obra_ejecutada),1)]),t("div",fo,[uo,t("p",mo,o(e.data.frt_importe_pagar),1)]),t("div",ho,[xo,t("p",bo,o(e.data.grado_avance_obra)+"% ",1)]),t("div",vo,[po,t("p",yo,o(e.data.porcentaje_avance_estimacion)+"% ",1)]),t("div",go,[Co,t("p",wo,o(e.data.porcentaje_avance_estimacion_acumulado)+"% ",1)]),t("div",$o,[ko,t("p",jo,o(e.data.porcentaje_Avance_fisico)+"% ",1)]),t("div",Oo,[Mo,t("p",Eo,o(e.data.porcensaje_avance_financiero)+"% ",1)])]),O(v,{label:"Cerrar",onClick:i.sendStatusModal,class:"mr-5 mx-auto my-5"},null,8,["onClick"])])])):r("",!0)]))])}const No=k(ze,[["render",Io],["__scopeId","data-v-84fe8ae2"]]);export{No as D,Bo as T};
