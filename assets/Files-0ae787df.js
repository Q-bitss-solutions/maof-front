import{F as V}from"./FormResident-b9d54803.js";import{A as U}from"./ArrowBack-70eddf27.js";import{T as L}from"./TitleBar-5421c6de.js";import{I as Y}from"./InputBase-23d7dd94.js";import{T as H}from"./TableBase-84c2cc39.js";import{B as J}from"./fetchApi-86472177.js";import{L as K}from"./LogoutComponent-152cc52a.js";import{f as M,g as Q,h as W,i as k}from"./residentEstimate-0f7626c1.js";import{_ as N,o as u,c as m,d as s,t as F,q as X,u as Z,a as $,m as ee,r as c,b as f,e as l,g as te,h as b}from"./index-defa86dc.js";import{S as n}from"./sweetalert2.all-281a79b7.js";import"./SelectBase-9a0267ce.js";import"./reviewArea-d64225ae.js";import"./users-daaee440.js";const ae={name:"Banner",props:{title:{type:String,default:""}}},ie={class:"relative isolate flex-1 items-center gap-x-6 overflow-hidden bg-gray-50 px-4 py-1.5 sm:px-2.5 sm:before:flex"},oe=s("div",{class:"absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl","aria-hidden":"true"},[s("div",{class:"aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#808080] to-[#808080] opacity-30",style:{"clip-path":"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"}})],-1),ne=s("div",{class:"absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl","aria-hidden":"true"},[s("div",{class:"aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#808080] to-[#808080] opacity-30",style:{"clip-path":"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"}})],-1),se={class:"text-3xl text-center"};function re(O,p,w,t,i,A){return u(),m("div",ie,[oe,ne,s("div",null,[s("h2",se,F(w.title),1)])])}const ce=N(ae,[["render",re]]),le={name:"FilesResidentEstimate",components:{FormResident:V,ArrowBack:U,TitleBar:L,InputBase:Y,TableBase:H,ButtonBase:J,Banner:ce,LogoutComponent:K},setup(){const O=X(),p=Z(),w=$(),t=[{label:"Id",field:"id_archivo_estimacion"},{label:"Nombre archivo",field:"ruta_archivo_residente"},{label:"Descripción",field:"descripcion_archivo"}],i=ee({file:{id_estimacion:"",file:"",descripcionFile:""},data:{},filesById:[],loading:!0,filesResidente:[],filesAreaRevisora:[],filesFinanzas:[],filesDGPOP:[]}),A=c([]),y=c([]),E=c([]),x=c([]),R=c([]),{rol:o}=w.getAuthData,d=c([]),B=c(!1),C=c(!1),D=c(!1),z=c(!1),P=c([]),I=async()=>{i.loading=!0;const{data:e}=await M(O.params.residentEstimateId);i.data=e,i.file.id_estimacion=e.id_estimacion,_.append("id_estimacion",i.file.id_estimacion),d.value=q(i.data.estatus_semaforo),j(),P.value=G(i.data.estatus_estimacion),h(),i.loading=!1},h=async()=>{const{data:e}=await Q(i.file.id_estimacion);e.residente&&(y.value=e.residente),e.area_Revisora&&(E.value=e.area_Revisora),e.finanzas&&(x.value=e.finanzas),e.dgpop&&(R.value=e.dgpop)},T=async e=>{await updateResident(e),n.fire("¡Éxito!","Residente actualizado con éxito!","success"),p.push({name:"Resident"})};let _=new FormData;const S=async()=>{try{const{value:e}=await n.fire({title:"Subir Archivo",input:"file",showCancelButton:!0,reverseButtons:!0,inputAttributes:{accept:"application/pdf","aria-label":"Upload your profile picture"}});if(e!=null){const{value:r}=await n.fire({title:"Descripción del archivo",input:"text",showCancelButton:!0,reverseButtons:!0,inputValidator:a=>{if(!a)return"El campo es requerido"}});if(r!==void 0){i.file.descripcionFile=r,i.file.file=e,_.append("archivo_estimacion ",i.file.file),_.append("descripcion_archivo ",i.file.descripcionFile);try{await W(_),h(),n.fire("¡Éxito!","!Archivo guardado con éxito!","success"),i.file.file="",i.file.descripcionFile=""}catch(a){n.fire("Error",`${a.response.data.detail}`,"error")}}}else e===null&&n.fire("No selesccionaste ningun archivo","Agrega uno para continuar","warning")}catch{}},q=e=>{var r=!1;return e==="Residente"&&o=="Residente"&&(r=!0),e==="Area Revisora"&&o.includes("Área revisora")&&(r=!0),(e==="Finanzas"||e==="DGPOP")&&o.includes("Finanzas")&&(r=!0),r},j=()=>{B.value=!0,C.value=!0,D.value=!0,z.value=!0},G=e=>{var r=null;return e==="Pagada"?(B.value=!0,C.value=!0,D.value=!0,z.value=!0,r=[{label:"Descargar",action:async a=>{window.open(`${a.archivo_estimacion}`,"_blank")}}]):o.includes("Residente")&&(e==="Capturada por Residente"||e==="Autorizada por Residente"||e==="Regresada al Residente")?r=[{label:"Descargar",action:async a=>{window.open(`${a.archivo_estimacion}`,"_blank")}},{label:"Eliminar",action:async a=>{console.log("files: ",a),n.fire({title:"¿Estás seguro que desea eliminar el documento?",text:"Esto quitará el documento",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Eliminar!",reverseButtons:!0}).then(async v=>{if(v.isConfirmed)try{await k(a.id_archivo_estimacion),await h(),n.fire("Eliminado!","El documento se eliminó","success")}catch(g){n.fire("Error",`${g.response.data.detail}`,"error")}})}}]:o.includes("Obras y Contratos-Titular")||(o.includes("Obras y Contratos-Operación")||o.includes("Área revisora-Titular")||o.includes("Área revisora-Operación"))&&(e==="En validación del área revisora"||e==="Regresada al área revisora")?r=[{label:"Descargar",action:async a=>{window.open(`${a.archivo_estimacion}`,"_blank")}},{label:"Eliminar",action:async a=>{console.log("files: ",a),n.fire({title:"¿Estás seguro que desea eliminar el documento?",text:"Esto quitará el documento",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Eliminar!",reverseButtons:!0}).then(async v=>{if(v.isConfirmed)try{await k(a.id_archivo_estimacion),await h(),n.fire("Eliminado!","El documento se eliminó","success")}catch(g){n.fire("Error",`${g.response.data.detail}`,"error")}})}}]:(o.includes("Finanzas-Titular")||o.includes("Finanzas-Operación"))&&(e==="En validación de Finanzas"||e==="Regresada a Finanzas"||e==="En trámite de pago")?r=[{label:"Descargar",action:async a=>{window.open(`${a.archivo_estimacion}`,"_blank")}},{label:"Eliminar",action:async a=>{console.log("files: ",a),n.fire({title:"¿Estás seguro que desea eliminar el documento?",text:"Esto quitará el documento",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Eliminar!",reverseButtons:!0}).then(async v=>{if(v.isConfirmed)try{await k(a.id_archivo_estimacion),await h(),n.fire("Eliminado!","El documento se eliminó","success")}catch(g){n.fire("Error",`${g.response.data.detail}`,"error")}})}}]:r=[{label:"Descargar",action:async a=>{window.open(`${a.archivo_estimacion}`,"_blank")}}],r};return I(),{app:i,filesById:A,saveResident:T,featureOptions:P,formData:_,headers:t,fileUpload:S,filesResidente:y,filesAreaRevisora:E,filesDGPOP:R,filesFinanzas:x,canAddNew:d,canEditResidente:B,canEditAreaRevisora:C,canEditFinanzas:D,canEditPago:z}}},de={class:"px-4 mt-10"},ue={class:"flex justify-between"},fe={class:"px-4"},me={class:"flex flex-row justify-between"},pe={class:"font-bold text-lg"},he={class:"font-bold text-lg w-128 text-center"},_e={class:"flex content-start justify-end items-center mb-10"},ve={class:"items-center justify-center"},ge=s("h1",{class:"font-bold text-lg text-center"}," Número de la Estimación ",-1),be={class:"text-center font-semibold text-lg numEstimacion"},we={key:1,class:"flex flex-col py-px"},ye={key:2},Ee={key:3},xe={key:4};function Re(O,p,w,t,i,A){const y=f("arrow-back"),E=f("logout-component"),x=f("title-bar"),R=f("button-base"),o=f("banner"),d=f("table-base");return u(),m("main",de,[s("div",ue,[l(y),l(E)]),l(x,{title:"Estimación Residente",subtitle:"Archivos"}),s("section",fe,[s("div",me,[s("div",pe,F(t.app.data.numero_contrato),1),s("div",he," Objeto: "+F(t.app.data.objeto_contrato),1),s("div",_e,[s("div",ve,[ge,s("p",be,F(t.app.data.num_consecutivo_estimacion),1)])])]),t.canAddNew?(u(),te(R,{key:0,label:"Nuevo",onClick:p[0]||(p[0]=B=>t.fileUpload()),class:"mr-0 ml-auto mb-5"})):b("",!0),t.filesResidente.length?(u(),m("div",we,[l(o,{title:"Documentos de Residente"}),l(d,{options:t.featureOptions,headers:t.headers,data:t.filesResidente,showOptions:t.canEditResidente,tableName:"residente"},null,8,["options","headers","data","showOptions"])])):b("",!0),t.filesAreaRevisora.length?(u(),m("div",ye,[l(o,{title:"Documentos de Área Revisora"}),l(d,{options:t.featureOptions,headers:t.headers,data:t.filesAreaRevisora,showOptions:t.canEditAreaRevisora,tableName:"area-revisora"},null,8,["options","headers","data","showOptions"])])):b("",!0),t.filesFinanzas.length?(u(),m("div",Ee,[l(o,{title:"Documentos de Finanzas"}),l(d,{options:t.featureOptions,headers:t.headers,data:t.filesFinanzas,showOptions:t.canEditFinanzas,tableName:"finanzas"},null,8,["options","headers","data","showOptions"])])):b("",!0),t.filesDGPOP.length?(u(),m("div",xe,[l(o,{title:"Documentos de Registro de Pago"}),l(d,{options:t.featureOptions,headers:t.headers,data:t.filesDGPOP,showOptions:t.canEditPago,tableName:"pago"},null,8,["options","headers","data","showOptions"])])):b("",!0)])])}const qe=N(le,[["render",Re]]);export{qe as default};
