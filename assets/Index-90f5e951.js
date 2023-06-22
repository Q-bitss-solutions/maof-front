import{T as O}from"./TableUsers-0ef2e20d.js";import{A as P}from"./ArrowBack-8b1ae337.js";import{H as j}from"./HomePage-5bca0920.js";import{S as A}from"./SelectBase-16288218.js";import{B,a as I}from"./fetchApi-08fbfcdf.js";import{_ as D,m as R,s as N,b as v,o as g,c as V,e as c,d as u,g as x,h as q,n as z,F as G,u as H,r as E,t as w}from"./index-74a76aef.js";import{T as J}from"./TitleBar-03fc510a.js";import{I as L}from"./InputBase-3936129a.js";import{f as S}from"./contract-5285ef34.js";import{f as K}from"./resident-2847c06e.js";import{a as Q}from"./SICTUnits-b1b49cfc.js";import{k as W}from"./residentEstimate-67f5ab71.js";import{S as k}from"./sweetalert2.all-281a79b7.js";import{b as X}from"./project-b2b7271e.js";import{c as Y}from"./consultas-988aeb2a.js";import{L as Z}from"./LogoutComponent-035f58b7.js";const $={name:"FormProject",props:{editMode:{type:Boolean,default:!1},project:{type:Object,default:()=>({})}},components:{InputBase:L,ButtonBase:B,SelectBase:A},setup(_,{emit:a}){const e=R({busqueda:{id_contrato:"",id_residente:"",mes_estimacion:"",año_estimacion:"",estatus_estimacion:"",unidad_maof:"",dias_transcurridos:[],fechas_autorizacion:[]},listMesEstimacion:[{value:1,label:"Enero"},{value:2,label:"Febrero"},{value:3,label:"Marzo"},{value:4,label:"Abril"},{value:5,label:"Mayo"},{value:6,label:"Junio"},{value:7,label:"Julio"},{value:8,label:"Agosto"},{value:9,label:"Septiempbre"},{value:10,label:"Octubre"},{value:11,label:"Noviembre"},{value:12,label:"Diciembre"}],diasInicio:"",diasFin:"",fechaInicio:"",fechaFin:"",listAnios:[],listC_CC_CM:[],listResident:[],listUnitMAOF:[],listStatusEstimate:[]}),t=N(()=>{const{id_contrato:p,id_residente:o,mes_estimacion:f,año_estimacion:s,estatus_estimacion:r,unidad_maof:i}=e.busqueda,{diasInicio:n,diasFin:F,fechaInicio:C,fechaFin:T}=e;return!p&&!o&&!f&&!s&&!r&&!i&&!n&&!F&&!C&&!T}),h=async()=>{const{data:p}=await S();e.listC_CC_CM=p.map(o=>({value:o.id_contrato,label:o.numero_contrato})),e.listC_CC_CM.sort((o,f)=>o.label>f.label?1:o.label<f.label?-1:0)},y=async()=>{const{data:p}=await K();e.listResident=p.map(o=>({value:o.id_residente,label:o.nombre_completo})),e.listResident.sort((o,f)=>o.label>f.label?1:o.label<f.label?-1:0)},d=async()=>{const{data:p}=await Q();e.listUnitMAOF=p.map(o=>({value:o.id_unidad_maof,label:o.unidad})),e.listUnitMAOF.sort((o,f)=>o.label>f.label?1:o.label<f.label?-1:0)},m=async()=>{const{data:p}=await W();e.listStatusEstimate=p.map(o=>({value:o.clave_estatus_estimacion,label:o.estatus_estimacion})),e.listStatusEstimate.sort((o,f)=>o.label>f.label?1:o.label<f.label?-1:0)},b=p=>{for(let o=0;o<p;o++)e.listAnios.push({value:2023+o,label:`${2023+o}`})},l=()=>{e.diasInicio!==""&&(e.busqueda.dias_transcurridos.push(e.diasInicio),e.diasInicio=""),e.diasFin!==""&&(e.busqueda.dias_transcurridos.push(e.diasFin),e.diasFin=""),e.fechaInicio!==""&&(e.busqueda.fechas_autorizacion.push(e.fechaInicio),e.fechaInicio=""),e.fechaFin!==""&&(e.busqueda.fechas_autorizacion.push(e.fechaFin),e.fechaFin=""),a("submit",e.busqueda)};return h(),y(),d(),m(),b(10),{app:e,isFormEmpty:t,sendForm:l,getC_CC_CM:h,getResident:y,getUnitMAOF:d,getStatusEstimate:m,generateAnios:b}}},ee={class:"max-w-6xl pb-10 grow"},te=u("p",{class:"w-[17rem]"},"*Contrato, Convenio de Colaboración, Convenio Modificatorio",-1),ae={class:"grid grid-cols-2"},oe={class:"grid grid-cols-2 pt-3"};function se(_,a,e,t,h,y){const d=v("select-base"),m=v("input-base"),b=v("button-base");return g(),V("div",ee,[te,c(d,{id:"clave_cartera",label:"C, CC, CM*",options:t.app.listC_CC_CM,class:"mb-3",modelValue:t.app.busqueda.id_contrato,"onUpdate:modelValue":a[0]||(a[0]=l=>t.app.busqueda.id_contrato=l)},null,8,["options","modelValue"]),c(d,{id:"nombre_proyecto",label:"Residente",options:t.app.listResident,class:"mb-3",modelValue:t.app.busqueda.id_residente,"onUpdate:modelValue":a[1]||(a[1]=l=>t.app.busqueda.id_residente=l)},null,8,["options","modelValue"]),c(d,{id:"nombre_proyecto",label:"Mes de la Estimación",options:t.app.listMesEstimacion,class:"mb-3",modelValue:t.app.busqueda.mes_estimacion,"onUpdate:modelValue":a[2]||(a[2]=l=>t.app.busqueda.mes_estimacion=l)},null,8,["options","modelValue"]),c(d,{id:"nombre_proyecto",label:"Año de la Estimación",options:t.app.listAnios,class:"mb-3",modelValue:t.app.busqueda.año_estimacion,"onUpdate:modelValue":a[3]||(a[3]=l=>t.app.busqueda.año_estimacion=l)},null,8,["options","modelValue"]),c(d,{id:"nombre_proyecto",label:"Estatus de la Estimación",class:"mb-3",options:t.app.listStatusEstimate,modelValue:t.app.busqueda.estatus_estimacion,"onUpdate:modelValue":a[4]||(a[4]=l=>t.app.busqueda.estatus_estimacion=l)},null,8,["options","modelValue"]),c(d,{id:"nombre_proyecto",label:"Unidad MAOF responsable",options:t.app.listUnitMAOF,class:"mb-3",modelValue:t.app.busqueda.unidad_maof,"onUpdate:modelValue":a[5]||(a[5]=l=>t.app.busqueda.unidad_maof=l)},null,8,["options","modelValue"]),u("div",ae,[c(m,{id:"dias_inicio",label:"Días transcurridos del",type:"number",class:"grow",modelValue:t.app.diasInicio,"onUpdate:modelValue":a[6]||(a[6]=l=>t.app.diasInicio=l)},null,8,["modelValue"]),c(m,{id:"dias_fin",label:"al",type:"number",class:"flex-auto",modelValue:t.app.diasFin,"onUpdate:modelValue":a[7]||(a[7]=l=>t.app.diasFin=l)},null,8,["modelValue"])]),u("div",oe,[c(m,{id:"fecha_inicio",label:"Autorización entre",type:"date",class:"grow",modelValue:t.app.fechaInicio,"onUpdate:modelValue":a[8]||(a[8]=l=>t.app.fechaInicio=l)},null,8,["modelValue"]),c(m,{id:"fecha_fin",label:"y",type:"date",class:"",modelValue:t.app.fechaFin,"onUpdate:modelValue":a[9]||(a[9]=l=>t.app.fechaFin=l)},null,8,["modelValue"])]),c(b,{label:"Buscar",onClick:t.sendForm,class:"mr-0 ml-auto mt-5",disabled:t.isFormEmpty},null,8,["onClick","disabled"])])}const U=D($,[["render",se]]),M=_=>I({url:"/agenda_estimacion/filtros/",method:"GET",params:_||{}}),le=_=>I({url:"/agenda_estimacion/busqueda/",method:"GET",params:_||{}}),ie="/maof-front/assets/Filter-fb6d2bbc.png";const ne={props:{filtro:{type:Object,required:!0},getDocsByType:{type:Function,required:!0},saveFiltro:{type:Function,required:!0},esperandoAccion:{type:Function,required:!1}},components:{SelectBase:A,ButtonBase:B}},re={class:"flex justify-start items-center pb-10"},ue=u("img",{src:ie,alt:"filter",class:"w-10 items-center"},null,-1);function de(_,a,e,t,h,y){const d=v("select-base"),m=v("button-base");return g(),V("div",re,[ue,c(d,{label:"Filtros",class:"text-center w-48 mr-10",id:"filtros",options:e.filtro.listFiltros,modelValue:e.filtro.tipoDocumento,"onUpdate:modelValue":a[0]||(a[0]=b=>e.filtro.tipoDocumento=b),onChange:a[1]||(a[1]=b=>e.getDocsByType(e.filtro.tipoDocumento))},null,8,["options","modelValue"]),e.filtro.listDocsFiltrados!==""&&e.filtro.tipoDocumento!==""?(g(),x(d,{key:0,label:"",class:"text-center w-48 ml-36",id:"filtrosDocs",options:e.filtro.listDocsFiltrados,modelValue:e.filtro.filtroDocValue,"onUpdate:modelValue":a[2]||(a[2]=b=>e.filtro.filtroDocValue=b)},null,8,["options","modelValue"])):q("",!0),e.filtro.listDocsFiltrados!==""&&e.filtro.tipoDocumento!==""?(g(),x(m,{key:1,label:"Aplicar",class:z(["border-gray text-black hover:bg-white hover:text-red",{"ml-[36rem]":e.filtro.tipoDocumento==="1"," ml-[3.7rem]":e.filtro.tipoDocumento!=="1"&&e.filtro.filtroDocValue===""," ml-[0rem]":e.filtro.tipoDocumento!=="1"&&e.filtro.filtroDocValue!==""}]),onClick:a[3]||(a[3]=b=>e.saveFiltro(e.filtro.filtroDocValue,e.filtro.tipoDocumento)),disabled:e.filtro.filtroDocValue===""},null,8,["class","disabled"])):q("",!0),e.filtro.tipoDocumento==="4"?(g(),x(m,{key:2,label:"Aplicar",class:"ml-40 border-gray text-black hover:bg-white hover:text-red",onClick:a[4]||(a[4]=b=>e.esperandoAccion())})):q("",!0)])}const ce=D(ne,[["render",de]]),me="/maof-front/assets/Search-94489079.png",fe={components:{ButtonBase:B,FormConsultaBusqueda:U},props:{showBusquedaValue:{type:Boolean,required:!0},showBusqueda:{type:Function,required:!0},saveBusqueda:{type:Function,required:!0}}},pe={class:"flex justify-start items-center pt-10"},_e=u("img",{src:me,alt:"filter",class:"w-10 items-center"},null,-1),be=u("h1",{class:"text-center font-bold text-lg"},"Búsqueda",-1),ve={class:"flex justify-center"};function ge(_,a,e,t,h,y){const d=v("button-base"),m=v("form-consulta-busqueda");return g(),V(G,null,[u("div",pe,[_e,be,c(d,{label:"Criterio de búsqueda",class:"ml-5 border-gray text-black hover:bg-white hover:text-red",onClick:e.showBusqueda},null,8,["onClick"])]),u("div",ve,[e.showBusquedaValue?(g(),x(m,{key:0,onSubmit:e.saveBusqueda,class:"mt-20"},null,8,["onSubmit"])):q("",!0)])],64)}const he=D(fe,[["render",ge]]);const ye={name:"UsersRolesMAOFIndex",components:{TableBase:O,ArrowBack:P,HomePage:j,ButtonBase:B,TitleBar:J,SelectBase:A,FormConsultaBusqueda:U,Filtro:ce,Busqueda:he,LogoutComponent:Z},setup(){const _=H(),a=Y(),e=E({filtro:{tipoDocumento:"",listFiltros:[{value:2,label:"Contrato o Convenio de Colaboración"},{value:3,label:"Convenio Modificatorio"},{value:1,label:"Proyecto / Cartera de inversión"}],listDocsFiltrados:[],filtroDocValue:"",data:{pendientes:[],pagados:[],totales:[]}},loading:!0});let t=E(!1);const h=(s,r)=>{switch(r){case"pendientes":s.length>0?(a.addPendientes(s),_.push({name:"ConsultasPedientesMAOF"})):k.fire("No hay estimaciones","Intenta con otro filtro","warning");break;case"pagadas":s.length>0?(a.addPagados(s),_.push({name:"ConsultasPagadosMAOF"})):k.fire("No hay estimaciones","Intenta con otro filtro","warning");break;case"totales":s.length>0?(a.addTotal(s),_.push({name:"ConsultasTotalesMAOF"})):k.fire("No hay estimaciones","Intenta con otro filtro","warning");break;default:console.log("opcion invalida");break}},y=async s=>{switch(t.value===!0&&(t.value=!1),s){case"1":e.value.filtro.listDocsFiltrados=[],e.value.filtro.filtroDocValue="",d();break;case"2":e.value.filtro.listDocsFiltrados=[],e.value.filtro.filtroDocValue="",m(s);break;case"3":e.value.filtro.listDocsFiltrados=[],e.value.filtro.filtroDocValue="",m(s);break;case"4":e.value.filtro.listDocsFiltrados=[],e.value.filtro.filtroDocValue="";break;default:console.log("No se encontro nada");break}},d=async()=>{const{data:s}=await X();e.value.filtro.listDocsFiltrados=s.map(r=>({value:r.id_proyecto,label:`${r.clave_cartera}-${r.nombre_proyecto}`}))},m=async s=>{const{data:r}=await S();s==="2"&&(r.forEach(i=>{i.id_tipo_contrato!==3&&e.value.filtro.listDocsFiltrados.push({value:i.id_contrato,label:i.numero_contrato})}),e.value.filtro.listDocsFiltrados.sort((i,n)=>i.label>n.label?1:i.label<n.label?-1:0)),s==="3"&&(r.forEach(i=>{i.id_tipo_contrato===3&&e.value.filtro.listDocsFiltrados.push({value:i.id_contrato,label:i.numero_contrato})}),e.value.filtro.listDocsFiltrados.sort((i,n)=>i.label>n.label?1:i.label<n.label?-1:0))},b=()=>{e.value.filtro.tipoDocumento="",e.value.filtro.filtroDocValue="",t.value=!t.value},l=(s,r,i)=>{a.addPendientes(s),a.addPagados(r),a.addTotal(i)},p=async()=>{e.value.loading=!0;let s=[],r=[];const{data:i}=await M();i.forEach(n=>{n.estatus_semaforo!=="Pago Efectuado"?r.push(n):s.push(n)}),e.value.filtro.data.totales=i,e.value.filtro.data.pagados=s,e.value.filtro.data.pendientes=r,l(r,s,i),e.value.loading=!1},o=async s=>{const r=Object.entries(s).filter(([n,F])=>Array.isArray(F)?F.length>0:F!=="").reduce((n,[F,C])=>(Array.isArray(C)?n[F]=C.join(","):n[F]=C,n),{}),{data:i}=await le(r);a.addBusqueda(i),_.push({name:"ConsultasBusquedaMAOF"})},f=async(s,r)=>{e.value.loading=!0;let i={};r==="1"?i={id_proyecto:s}:(r==="2"||r==="3")&&(i={id_contrato:s});const{data:n}=await M(i);e.value.filtro.data.totales=n.total,e.value.filtro.data.pagados=n.pagadas,e.value.filtro.data.pendientes=n.pendiente,l(n.pendiente,n.pagadas,n.total),e.value.loading=!1};return p(),{app:e,showBusquedaValue:t,getStatusEstimations:h,showBusqueda:b,saveBusqueda:o,saveFiltro:f,getDocsByType:y,getProjects:d,getContracts:m,getFiltroDefault:p,infoToStore:l}}},Fe={class:"px-4 mt-10"},Ce={class:"flex justify-between"},qe={class:"px-4"},Ve={key:0,class:"flex justify-center text-3xl"},xe={class:"text-center"},Be=u("h1",{class:"text-center"},"Pendientes",-1),De={class:"text-center"},we=u("h1",{class:"text-center"},"Pagadas",-1),ke={class:"text-center"},Ae=u("h1",{class:"text-center"},"Total",-1),Ee={class:"flex flex-col mt-20"};function Me(_,a,e,t,h,y){const d=v("arrow-back"),m=v("home-page"),b=v("logout-component"),l=v("title-bar"),p=v("Filtro"),o=v("Busqueda");return g(),V("main",Fe,[u("div",Ce,[c(d),u("div",null,[c(m),c(b)])]),c(l,{title:"Consulta MAOF",subtitle:"Agenda de Estimaciones"}),u("section",qe,[t.app.loading?q("",!0):(g(),V("div",Ve,[u("div",{class:"px-10 text-red cursor-pointer",onClick:a[0]||(a[0]=f=>t.getStatusEstimations(t.app.filtro.data.pendientes,"pendientes"))},[u("p",xe,w(t.app.filtro.data.pendientes.length),1),Be]),u("div",{class:"px-10 text-green cursor-pointer",onClick:a[1]||(a[1]=f=>t.getStatusEstimations(t.app.filtro.data.pagados,"pagadas"))},[u("p",De,w(t.app.filtro.data.pagados.length),1),we]),u("div",{class:"px-10 cursor-pointer",onClick:a[2]||(a[2]=f=>t.getStatusEstimations(t.app.filtro.data.totales,"totales"))},[u("p",ke,w(t.app.filtro.data.totales.length),1),Ae])])),u("div",Ee,[c(p,{filtro:t.app.filtro,getDocsByType:t.getDocsByType,saveFiltro:t.saveFiltro},null,8,["filtro","getDocsByType","saveFiltro"]),c(o,{showBusquedaValue:t.showBusquedaValue,showBusqueda:t.showBusqueda,saveBusqueda:t.saveBusqueda},null,8,["showBusquedaValue","showBusqueda","saveBusqueda"])])])])}const We=D(ye,[["render",Me]]);export{We as default};