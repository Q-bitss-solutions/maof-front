import{F as H}from"./FormResident-707d3e6c.js";import{A as J}from"./ArrowBack-a258f303.js";import{T as K}from"./TitleBar-47b733ce.js";import{I as M}from"./InputBase-4fe4b93b.js";import{T as Q}from"./TableBase-e07d8feb.js";import{B as W}from"./fetchApi-580c81dd.js";import{L as X}from"./LogoutComponent-4e8f1900.js";import{f as Z,g as $,h as ee,i as ae}from"./residentEstimate-6f935cde.js";import{_ as I,o as f,c as p,d as n,t as x,q as te,u as ie,a as oe,m as ne,r as o,b as u,e as r,g as se,h}from"./index-9f5a0b1b.js";import{S as l}from"./sweetalert2.all-281a79b7.js";import"./SelectBase-32ba122c.js";import"./reviewArea-92e262a4.js";import"./users-18b9150d.js";const re={name:"Banner",props:{title:{type:String,default:""}}},le={class:"relative isolate flex-1 items-center gap-x-6 overflow-hidden bg-gray-50 px-4 py-1.5 sm:px-2.5 sm:before:flex"},ce=n("div",{class:"absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl","aria-hidden":"true"},[n("div",{class:"aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#808080] to-[#808080] opacity-30",style:{"clip-path":"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"}})],-1),de=n("div",{class:"absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl","aria-hidden":"true"},[n("div",{class:"aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#808080] to-[#808080] opacity-30",style:{"clip-path":"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"}})],-1),fe={class:"text-3xl text-center"};function ue(O,m,_,e,t,E){return f(),p("div",le,[ce,de,n("div",null,[n("h2",fe,x(_.title),1)])])}const pe=I(re,[["render",ue]]),me={name:"FilesResidentEstimate",components:{FormResident:H,ArrowBack:J,TitleBar:K,InputBase:M,TableBase:Q,ButtonBase:W,Banner:pe,LogoutComponent:X},setup(){const O=te(),m=ie(),_=oe(),e=[{label:"Id",field:"id_archivo_estimacion"},{label:"Nombre archivo",field:"ruta_archivo_residente"},{label:"Descripción",field:"descripcion_archivo"}],t=ne({file:{id_estimacion:"",file:"",descripcionFile:""},data:{},filesById:[],loading:!0,filesResidente:[],filesAreaRevisora:[],filesFinanzas:[],filesDGPOP:[]}),E=o([]),g=o([]),b=o([]),R=o([]),y=o([]),{rol:i}=_.getAuthData,c=o([]),w=o(!1),F=o(!1),B=o(!1),A=o(!1),N=o([{label:"Descargar",action:async a=>{window.open(`${a.archivo_estimacion}`,"_blank")}}]),D=o([]),z=o([]),P=o([]),T=o([]),S=async()=>{t.loading=!0;const{data:a}=await Z(O.params.residentEstimateId);t.data=a,t.file.id_estimacion=a.id_estimacion,v.append("id_estimacion",t.file.id_estimacion),c.value=q(t.data.estatus_semaforo),V(),U(t.data.estatus_estimacion),k(),t.loading=!1},k=async()=>{const{data:a}=await $(t.file.id_estimacion);a.residente&&(g.value=a.residente),a.area_Revisora&&(b.value=a.area_Revisora),a.finanzas&&(R.value=a.finanzas),a.dgpop&&(y.value=a.dgpop)},j=async a=>{await updateResident(a),l.fire("¡Éxito!","Residente actualizado con éxito!","success"),m.push({name:"Resident"})};let v=new FormData;const G=async()=>{try{const{value:a}=await l.fire({title:"Subir Archivo",input:"file",showCancelButton:!0,reverseButtons:!0,inputAttributes:{accept:"application/pdf","aria-label":"Upload your profile picture"}});if(a!=null){const{value:s}=await l.fire({title:"Descripción del archivo",input:"text",showCancelButton:!0,reverseButtons:!0,inputValidator:d=>{if(!d)return"El campo es requerido"}});if(s!==void 0){t.file.descripcionFile=s,t.file.file=a,v.append("archivo_estimacion ",t.file.file),v.append("descripcion_archivo ",t.file.descripcionFile);try{await ee(v),k(),l.fire("¡Éxito!","!Archivo guardado con éxito!","success"),t.file.file="",t.file.descripcionFile=""}catch(d){l.fire("Error",`${d.response.data.detail}`,"error")}}}else a===null&&l.fire("No selesccionaste ningun archivo","Agrega uno para continuar","warning")}catch{}},q=a=>{var s=!1;return a==="Residente"&&i=="Residente"&&(s=!0),a==="Area Revisora"&&i.includes("Área revisora")&&(s=!0),(a==="Finanzas"||a==="DGPOP")&&i.includes("Finanzas")&&(s=!0),s},V=()=>{w.value=!0,F.value=!0,B.value=!0,A.value=!0},U=a=>{const s=async C=>{window.open(`${C.archivo_estimacion}`,"_blank")},d=async C=>{l.fire({title:"¿Estás seguro que desea eliminar el documento?",text:"Esto quitará el documento",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Eliminar!",reverseButtons:!0}).then(async L=>{if(L.isConfirmed)try{await ae(C.id_archivo_estimacion),await k(),l.fire("Eliminado!","El documento se eliminó","success")}catch(Y){l.fire("Error",`${Y.response.data.detail}`,"error")}})};a==="Pagada"?(w.value=!0,F.value=!0,B.value=!0,A.value=!0,N.value=[{label:"Descargar",action:s}]):(i.includes("Residente")&&(a==="Capturada por Residente"||a==="Autorizada por Residente"||a==="Regresada al Residente")?D.value=[{label:"Descargar",action:s},{label:"Eliminar",action:d}]:D.value=[],i.includes("Obras y Contratos-Titular")||(i.includes("Obras y Contratos-Operación")||i.includes("Área revisora-Titular")||i.includes("Área revisora-Operación"))&&(a==="En validación del área revisora"||a==="Regresada al área revisora")?z.value=[{label:"Descargar",action:s},{label:"Eliminar",action:d}]:z.value=[],(i.includes("Finanzas-Titular")||i.includes("Finanzas-Operación"))&&(a==="En validación de Finanzas"||a==="Regresada a Finanzas"||a==="En trámite de pago")?P.value=[{label:"Descargar",action:s},{label:"Eliminar",action:d}]:P.value=[])};return S(),{app:t,filesById:E,saveResident:j,featureOptions:N,featureOptionsResidente:D,featureOptionsAreaRevisora:z,featureOptionsFianzas:P,featureOptionsTramiteDePago:T,formData:v,headers:e,fileUpload:G,filesResidente:g,filesAreaRevisora:b,filesDGPOP:y,filesFinanzas:R,canAddNew:c,canEditResidente:w,canEditAreaRevisora:F,canEditFinanzas:B,canEditPago:A}}},ve={class:"px-4 mt-10"},he={class:"flex justify-between"},_e={class:"px-4"},ge={class:"flex flex-row justify-between"},be={class:"font-bold text-lg"},Re={class:"font-bold text-lg w-128 text-center"},ye={class:"flex content-start justify-end items-center mb-10"},we={class:"items-center justify-center"},xe=n("h1",{class:"font-bold text-lg text-center"}," Número de la Estimación ",-1),Oe={class:"text-center font-semibold text-lg numEstimacion"},Ee={key:1,class:"flex flex-col py-px"},Fe={key:2},Be={key:3},Ae={key:4};function De(O,m,_,e,t,E){const g=u("arrow-back"),b=u("logout-component"),R=u("title-bar"),y=u("button-base"),i=u("banner"),c=u("table-base");return f(),p("main",ve,[n("div",he,[r(g),r(b)]),r(R,{title:"Estimación Residente",subtitle:"Archivos"}),n("section",_e,[n("div",ge,[n("div",be,x(e.app.data.numero_contrato),1),n("div",Re," Objeto: "+x(e.app.data.objeto_contrato),1),n("div",ye,[n("div",we,[xe,n("p",Oe,x(e.app.data.num_consecutivo_estimacion),1)])])]),e.canAddNew?(f(),se(y,{key:0,label:"Nuevo",onClick:m[0]||(m[0]=w=>e.fileUpload()),class:"mr-0 ml-auto mb-5"})):h("",!0),e.filesResidente.length?(f(),p("div",Ee,[r(i,{title:"Documentos de Residente"}),r(c,{options:e.featureOptionsResidente.length!==0?e.featureOptionsResidente:e.featureOptions,headers:e.headers,data:e.filesResidente,showOptions:e.canEditResidente,tableName:"residente"},null,8,["options","headers","data","showOptions"])])):h("",!0),e.filesAreaRevisora.length?(f(),p("div",Fe,[r(i,{title:"Documentos de Área Revisora"}),r(c,{options:e.featureOptionsAreaRevisora.length!==0?e.featureOptionsAreaRevisora:e.featureOptions,headers:e.headers,data:e.filesAreaRevisora,showOptions:e.canEditAreaRevisora,tableName:"area-revisora"},null,8,["options","headers","data","showOptions"])])):h("",!0),e.filesFinanzas.length?(f(),p("div",Be,[r(i,{title:"Documentos de Finanzas"}),r(c,{options:e.featureOptionsFianzas.length!==0?e.featureOptionsFianzas:e.featureOptions,headers:e.headers,data:e.filesFinanzas,showOptions:e.canEditFinanzas,tableName:"finanzas"},null,8,["options","headers","data","showOptions"])])):h("",!0),e.filesDGPOP.length?(f(),p("div",Ae,[r(i,{title:"Documentos de Registro de Pago"}),r(c,{options:e.featureOptionsTramiteDePago.length!==0?e.featureOptionsTramiteDePago:e.featureOptions,headers:e.headers,data:e.filesDGPOP,showOptions:e.canEditPago,tableName:"pago"},null,8,["options","headers","data","showOptions"])])):h("",!0)])])}const Le=I(me,[["render",De]]);export{Le as default};
