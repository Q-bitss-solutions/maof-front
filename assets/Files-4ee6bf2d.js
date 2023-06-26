import{F as I}from"./FormResident-37064222.js";import{A as P}from"./ArrowBack-aeb0a8c5.js";import{T as C}from"./TitleBar-51378683.js";import{I as V}from"./InputBase-1f4a0309.js";import{T as N}from"./TableBase-c22943a8.js";import{B as S}from"./fetchApi-96f6f319.js";import{L as j}from"./LogoutComponent-cb93b0aa.js";import{f as G,g as T,h as q,i as U}from"./residentEstimate-26eb9a60.js";import{_ as A,o as l,c as m,d as o,t as R,q as L,u as Y,a as H,m as J,r as d,b as f,e as a,g as K,h}from"./index-898df0c3.js";import{S as n}from"./sweetalert2.all-281a79b7.js";import"./SelectBase-6620c904.js";import"./reviewArea-9174d054.js";import"./users-d73062e4.js";const M={name:"Banner",props:{title:{type:String,default:""}}},Q={class:"relative isolate flex-1 items-center gap-x-6 overflow-hidden bg-gray-50 px-4 py-1.5 sm:px-2.5 sm:before:flex"},W=o("div",{class:"absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl","aria-hidden":"true"},[o("div",{class:"aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#808080] to-[#808080] opacity-30",style:{"clip-path":"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"}})],-1),X=o("div",{class:"absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl","aria-hidden":"true"},[o("div",{class:"aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#808080] to-[#808080] opacity-30",style:{"clip-path":"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"}})],-1),Z={class:"text-3xl text-center"};function $(B,p,v,t,i,b){return l(),m("div",Q,[W,X,o("div",null,[o("h2",Z,R(v.title),1)])])}const ee=A(M,[["render",$]]),te={name:"FilesResidentEstimate",components:{FormResident:I,ArrowBack:P,TitleBar:C,InputBase:V,TableBase:N,ButtonBase:S,Banner:ee,LogoutComponent:j},setup(){const B=L(),p=Y(),v=H(),t=[{label:"Id",field:"id_archivo_estimacion"},{label:"Nombre Archivo",field:"ruta_archivo_residente"},{label:"Descripción",field:"descripcion_archivo"}],i=J({file:{id_estimacion:"",file:"",descripcionFile:""},data:{},filesById:[],loading:!0,filesResidente:[],filesAreaRevisora:[],filesFinanzas:[],filesDGPOP:[]}),b=d([]),g=d([]),x=d([]),y=d([]),w=d([]),{rol:r}=v.getAuthData,c=d([]),O=async()=>{i.loading=!0;const{data:e}=await G(B.params.residentEstimateId);i.data=e,i.file.id_estimacion=e.id_estimacion,u.append("id_estimacion",i.file.id_estimacion),i.loading=!1,c.value=z(i.data.estatus_semaforo),E()},E=async()=>{const{data:e}=await T(i.file.id_estimacion);b.value=e,e.residente&&(g.value=e.residente),e.area_Revisora&&(x.value=e.area_Revisora),e.finanzas&&(y.value=e.finanzas),e.dgpop&&(w.value=e.dgpop)},D=async e=>{await updateResident(e),n.fire("¡Éxito!","Residente actualizado con éxito!","success"),p.push({name:"Resident"})};let u=new FormData;const F=async()=>{try{const{value:e}=await n.fire({title:"Subir Archivo",input:"file",showCancelButton:!0,reverseButtons:!0,inputAttributes:{accept:"application/pdf","aria-label":"Upload your profile picture"}});if(e!=null){const{value:s}=await n.fire({title:"Descripción del archivo",input:"text",showCancelButton:!0,reverseButtons:!0,inputValidator:_=>{if(!_)return"El campo es requerido"}});if(s!==void 0){i.file.descripcionFile=s,i.file.file=e,u.append("archivo_estimacion ",i.file.file),u.append("descripcion_archivo ",i.file.descripcionFile);try{await q(u),E(),n.fire("¡Éxito!","!Archivo guardado con éxito!","success"),i.file.file="",i.file.descripcionFile=""}catch(_){n.fire("Error",`${_.response.data.detail}`,"error")}}}else e===null&&n.fire("No selesccionaste ningun archivo","Agrega uno para continuar","warning")}catch{}},k=[{label:"Descargar",action:async e=>{window.open(`${e.archivo_estimacion}`,"_blank")}},{label:"Eliminar",action:async e=>{console.log("files: ",e),n.fire({title:"¿Estás seguro que desea eliminar el documento?",text:"Esto quitará el documento",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Eliminar!",reverseButtons:!0}).then(async s=>{if(s.isConfirmed)try{await U(e.id_archivo_estimacion),await E(),n.fire("Eliminado!","El documento se eliminó","success")}catch(_){n.fire("Error",`${_.response.data.detail}`,"error")}})}}],z=e=>{var s=!1;return e==="Residente"&&r=="Residente"&&(s=!0),e==="Area Revisora"&&r.includes("Área revisora")&&(s=!0),(e==="Finanzas"||e==="DGPOP")&&r.includes("Finanzas")&&(s=!0),s};return O(),{app:i,filesById:b,saveResident:D,featureOptions:k,formData:u,headers:t,fileUpload:F,filesResidente:g,filesAreaRevisora:x,filesDGPOP:w,filesFinanzas:y,isValid:c}}},ie={class:"px-4 mt-10"},oe={class:"flex justify-between"},ae={class:"px-4"},se={class:"flex flex-row justify-between"},ne={class:"font-bold text-lg"},re={class:"font-bold text-lg w-128 text-center"},ce={class:"flex content-start justify-end items-center mb-10"},le={class:"items-center justify-center"},de=o("h1",{class:"font-bold text-lg text-center"}," Número de la Estimación ",-1),fe={class:"text-center font-semibold text-lg numEstimacion"},me={key:1,class:"flex flex-col py-px"},pe={key:2},ue={key:3},_e={key:4};function he(B,p,v,t,i,b){const g=f("arrow-back"),x=f("logout-component"),y=f("title-bar"),w=f("button-base"),r=f("banner"),c=f("table-base");return l(),m("main",ie,[o("div",oe,[a(g),a(x)]),a(y,{title:"Estimación Residente",subtitle:"Archivos"}),o("section",ae,[o("div",se,[o("div",ne,R(t.app.data.numero_contrato),1),o("div",re," Objeto: "+R(t.app.data.objeto_contrato),1),o("div",ce,[o("div",le,[de,o("p",fe,R(t.app.data.num_consecutivo_estimacion),1)])])]),t.isValid?(l(),K(w,{key:0,label:"Nuevo",onClick:p[0]||(p[0]=O=>t.fileUpload()),class:"mr-0 ml-auto mb-5"})):h("",!0),t.filesResidente.length?(l(),m("div",me,[a(r,{title:"Documentos de Residente"}),a(c,{options:t.featureOptions,headers:t.headers,data:t.filesResidente,showOptions:t.isValid},null,8,["options","headers","data","showOptions"])])):h("",!0),t.filesAreaRevisora.length?(l(),m("div",pe,[a(r,{title:"Documentos de Área Revisora"}),a(c,{options:t.featureOptions,headers:t.headers,data:t.filesAreaRevisora,showOptions:t.isValid},null,8,["options","headers","data","showOptions"])])):h("",!0),t.filesFinanzas.length?(l(),m("div",ue,[a(r,{title:"Documentos de Finanzas"}),a(c,{options:t.featureOptions,headers:t.headers,data:t.filesFinanzas,showOptions:t.isValid},null,8,["options","headers","data","showOptions"])])):h("",!0),t.filesDGPOP.length?(l(),m("div",_e,[a(r,{title:"Documentos de Registro de Pago"}),a(c,{options:t.featureOptions,headers:t.headers,data:t.filesDGPOP,showOptions:t.isValid},null,8,["options","headers","data","showOptions"])])):h("",!0)])])}const ke=A(te,[["render",he]]);export{ke as default};
