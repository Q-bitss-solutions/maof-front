import{I as F}from"./InputBase-f2420b6e.js";import{B as U}from"./fetchApi-ea3a2dff.js";import{S as I}from"./SelectBase-4b15a31f.js";import{T as A}from"./TextAreaBase-0b4c1373.js";import{f as T,a as S}from"./contract-9a9b5be4.js";import{s as D,c as H}from"./residentEstimate-9b67d988.js";import{_ as M,u as N,m as L,s as O,b as g,o,c as n,d as _,t as f,h as l,g as R,e as r,F as v,f as V}from"./index-ae47c3ce.js";import{S as x}from"./sweetalert2.all-281a79b7.js";import{u as G,c,m as h,a as y}from"./index-85c6b0d5.js";import{T as q}from"./TitleBar-95cae43a.js";import{s as P}from"./resident-e7679e41.js";import{C as Y}from"./CustomHeaderApp-790e617d.js";import"./ArrowBack-858e36ad.js";import"./HomePage-790bb899.js";import"./LogoutComponent-26312cbb.js";const J={name:"FormResidentEstimate",props:{editMode:{type:Boolean,default:!1},residentEstimate:{type:Object,default:()=>({})}},components:{InputBase:F,ButtonBase:U,SelectBase:I,TextAreaBase:A},setup(p,{emit:t}){const m=N(),e=L({residentEstimate:{id_contrato:"",fecha_recepcion_info_contratista:"",fecha_autorizacion_contratista:"",fecha_periodo_inicio_estimacion:"",fecha_periodo_fin_estimacion:"",importe_obra_ejecutada:"",importe_pagar:"",grado_avance_obra:"",porcentaje_avance_estimacion:"",porcentaje_avance_estimacion_acumulado:"",porcentaje_avance_fisico:"",porcensaje_avance_financiero:""},fecha_recepcion_info_contratista:"",fecha_autorizacion_contratista:"",fecha_periodo_inicio_estimacion:"",fecha_periodo_fin_estimacion:"",contratoName:"",contador_siguiente_estimacion:"",fileInfo:{type:Object,default:()=>({})},listReviewAreas:[],listEmpleados:[],listContrato:[]}),C=()=>{let d=new Date;var s=("0"+d.getDate()).slice(-2),u=("0"+(d.getMonth()+1)).slice(-2),j=d.getFullYear(),B=j+"-"+u+"-"+s;return!(e.fecha_autorizacion_contratista>B)},w=O(()=>({porcentaje_avance_estimacion:{maxValue:c.withMessage("El valor maximo es 100%",h(100)),minValue:c.withMessage("El valor minimo es 0%",y(0))},porcentaje_avance_estimacion_acumulado:{maxValue:c.withMessage("El valor maximo es 100%",h(100)),minValue:c.withMessage("El valor minimo es 0%",y(0))},porcentaje_avance_fisico:{maxValue:c.withMessage("El valor maximo es 100%",h(100)),minValue:c.withMessage("El valor minimo es 0%",y(0))},porcensaje_avance_financiero:{maxValue:c.withMessage("El valor maximo es 100%",h(100)),minValue:c.withMessage("El valor minimo es 0%",y(0))},grado_avance_obra:{maxValue:c.withMessage("El valor maximo es 100%",h(100)),minValue:c.withMessage("El valor minimo es 0%",y(0))},fecha_autorizacion_contratista:{fechaActualFunction:c.withMessage("La fecha es mayor al dia de hoy",C)}})),b=G(w,e.residentEstimate);p.editMode&&(e.resident=p.resident,e.resident.fecha_inicio_residente=p.resident.fecha_inicio_residente.split("-").reverse().join("-"));const i=()=>{var s=new Date().toLocaleTimeString("en-GB");e.residentEstimate.fecha_recepcion_info_contratista=e.fecha_recepcion_info_contratista+" "+s,e.fecha_autorizacion_contratista===""?delete e.residentEstimate.fecha_autorizacion_contratista:e.residentEstimate.fecha_autorizacion_contratista=e.fecha_autorizacion_contratista+" "+s,e.residentEstimate.fecha_periodo_inicio_estimacion=e.fecha_periodo_inicio_estimacion+" "+s,e.residentEstimate.fecha_periodo_fin_estimacion=e.fecha_periodo_fin_estimacion+" "+s,x.fire({title:"¿Confirma los cambios ?",icon:"question",showCancelButton:!0,cancelButtonColor:"#d33",confirmButtonColor:"#3085d6",confirmButtonText:"Continuar",reverseButtons:!0}).then(async u=>{if(u.isConfirmed)try{await b.value.$validate()?(await D(e.residentEstimate),x.fire({title:"Registro dado de alta",text:"¿Desea ingresar los documentos?",icon:"success",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sí",cancelButtonText:"No",reverseButtons:!0}).then(async B=>{if(B.isConfirmed){const{data:k}=await H(),z=k.length-1;e.fileInfo=k[z],m.push({name:"FilesResidentEstimate",params:{residentEstimateId:e.fileInfo.id_estimacion}})}else m.push({name:"ResidentEstimate"})})):x.fire("Error","Revisa bien los datos","error")}catch(j){x.fire("Error",`${j.response.data.detail}`,"error")}})},E=async()=>{const d={activate_filters:!0};try{const{data:s}=await T(d);e.listContrato=s.map(u=>({value:u.id_contrato,label:u.numero_contrato,name:u.objeto_contrato}))}catch{}},a=async d=>{const{data:s}=await S(d);e.contratoName=s.objeto_contrato,e.contador_siguiente_estimacion=s.contador_siguiente_estimacion};return E(),{app:e,sendForm:i,getContratos:E,getName:a,v$:b}}},K={key:0,class:"flex content-start justify-end items-center mb-10"},Q={class:"items-center justify-center"},W=_("h1",{class:"font-bold text-lg"}," Número de la Estimación ",-1),X={class:"text-center font-semibold text-lg numEstimacion"},Z={class:"max-w-xl mx-auto"},$={class:"flex flex-row"};function ee(p,t,m,e,C,w){const b=g("select-base"),i=g("input-base"),E=g("button-base");return o(),n(v,null,[e.app.residentEstimate.id_contrato!==""?(o(),n("div",K,[_("div",Q,[W,_("p",X,f(e.app.contador_siguiente_estimacion),1)])])):l("",!0),_("div",Z,[m.editMode!==!0?(o(),R(b,{key:0,id:"id_contrato",label:"Número de Contrato(de origen)",options:e.app.listContrato,modelValue:e.app.residentEstimate.id_contrato,"onUpdate:modelValue":t[0]||(t[0]=a=>e.app.residentEstimate.id_contrato=a),class:"mb-3",onChange:t[1]||(t[1]=a=>e.getName(e.app.residentEstimate.id_contrato))},null,8,["options","modelValue"])):l("",!0),m.editMode!==!0?(o(),R(i,{key:1,id:"id_area_revisora",label:"Objeto del Contrato",type:"text",modelValue:e.app.contratoName,"onUpdate:modelValue":t[2]||(t[2]=a=>e.app.contratoName=a),class:"mb-3",disabled:""},null,8,["modelValue"])):l("",!0),r(i,{id:"fecha_recepcion_info_contratista",label:"Fecha de recepción de información del Contratista",type:"date",class:"mb-3",modelValue:e.app.fecha_recepcion_info_contratista,"onUpdate:modelValue":t[3]||(t[3]=a=>e.app.fecha_recepcion_info_contratista=a)},null,8,["modelValue"]),r(i,{id:"fecha_autorizacion_contratista",label:"Fecha de autorización al Contratista",type:"date",class:"mb-3",modelValue:e.app.fecha_autorizacion_contratista,"onUpdate:modelValue":t[4]||(t[4]=a=>e.app.fecha_autorizacion_contratista=a)},null,8,["modelValue"]),e.v$.fecha_autorizacion_contratista.$error?(o(!0),n(v,{key:2},V(e.v$.fecha_autorizacion_contratista.$errors,a=>(o(),n("span",{key:a,class:"text-red font-semibold text-center ml-80"},f(a.$message),1))),128)):l("",!0),_("div",$,[_("div",null,[r(i,{id:"fecha_periodo_inicio_estimacion",label:"Período de la Estimación",type:"date",modelValue:e.app.fecha_periodo_inicio_estimacion,"onUpdate:modelValue":t[5]||(t[5]=a=>e.app.fecha_periodo_inicio_estimacion=a)},null,8,["modelValue"])]),_("div",null,[r(i,{id:"fecha_periodo_fin_estimacion",label:"al",type:"date",class:"pt-2",modelValue:e.app.fecha_periodo_fin_estimacion,"onUpdate:modelValue":t[6]||(t[6]=a=>e.app.fecha_periodo_fin_estimacion=a)},null,8,["modelValue"])])]),r(i,{id:"importe_obra_ejecutada",label:"Importe de la obra ejecutada",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.importe_obra_ejecutada,"onUpdate:modelValue":t[7]||(t[7]=a=>e.app.residentEstimate.importe_obra_ejecutada=a)},null,8,["modelValue"]),r(i,{id:"importe_pagar",label:"Importe a pagar",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.importe_pagar,"onUpdate:modelValue":t[8]||(t[8]=a=>e.app.residentEstimate.importe_pagar=a)},null,8,["modelValue"]),r(i,{id:"grado_avance_obra",label:"% de grado de avance",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.grado_avance_obra,"onUpdate:modelValue":t[9]||(t[9]=a=>e.app.residentEstimate.grado_avance_obra=a)},null,8,["modelValue"]),e.v$.grado_avance_obra.$error?(o(!0),n(v,{key:3},V(e.v$.grado_avance_obra.$errors,a=>(o(),n("span",{key:a,class:"text-red font-semibold text-center ml-80"},f(a.$message),1))),128)):l("",!0),r(i,{id:"porcentaje_avance_estimacion",label:"% de avance de la Estimación",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.porcentaje_avance_estimacion,"onUpdate:modelValue":t[10]||(t[10]=a=>e.app.residentEstimate.porcentaje_avance_estimacion=a)},null,8,["modelValue"]),e.v$.porcentaje_avance_estimacion.$error?(o(!0),n(v,{key:4},V(e.v$.porcentaje_avance_estimacion.$errors,a=>(o(),n("span",{key:a,class:"text-red font-semibold text-center ml-80"},f(a.$message),1))),128)):l("",!0),r(i,{id:"porcentaje_avance_estimacion_acumulado",label:"% de avance de la Estimación acumulado",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.porcentaje_avance_estimacion_acumulado,"onUpdate:modelValue":t[11]||(t[11]=a=>e.app.residentEstimate.porcentaje_avance_estimacion_acumulado=a)},null,8,["modelValue"]),e.v$.porcentaje_avance_estimacion_acumulado.$error?(o(!0),n(v,{key:5},V(e.v$.porcentaje_avance_estimacion_acumulado.$errors,a=>(o(),n("span",{key:a,class:"text-red font-semibold text-center ml-80"},f(a.$message),1))),128)):l("",!0),r(i,{id:"porcentaje_avance_fisico",label:"% de avance físico",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.porcentaje_avance_fisico,"onUpdate:modelValue":t[12]||(t[12]=a=>e.app.residentEstimate.porcentaje_avance_fisico=a)},null,8,["modelValue"]),e.v$.porcentaje_avance_fisico.$error?(o(!0),n(v,{key:6},V(e.v$.porcentaje_avance_fisico.$errors,a=>(o(),n("span",{key:a,class:"text-red font-semibold text-center ml-80"},f(a.$message),1))),128)):l("",!0),r(i,{id:"porcensaje_avance_financiero",label:"% de avance financiero",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.porcensaje_avance_financiero,"onUpdate:modelValue":t[13]||(t[13]=a=>e.app.residentEstimate.porcensaje_avance_financiero=a)},null,8,["modelValue"]),e.v$.porcensaje_avance_financiero.$error?(o(!0),n(v,{key:7},V(e.v$.porcensaje_avance_financiero.$errors,a=>(o(),n("span",{key:a,class:"text-red font-semibold text-center ml-80"},f(a.$message),1))),128)):l("",!0),r(E,{label:"Guardar",onClick:e.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])],64)}const ae=M(J,[["render",ee]]),te={name:"NewResident",components:{FormResidentEstimate:ae,TitleBar:q,CustomHeaderApp:Y},setup(){const p=N();return{saveResident:async m=>{await P(m),x.fire("¡Éxito!","Residente guardado con éxito!","success"),p.push({name:"Resident"})}}}},oe={class:"px-4 mt-10"},ie={class:"px-4"};function ne(p,t,m,e,C,w){const b=g("CustomHeaderApp"),i=g("title-bar"),E=g("form-resident-estimate");return o(),n("main",oe,[r(b),r(i,{title:"Estimación Residente",subtitle:"Nuevo"}),_("section",ie,[r(E)])])}const he=M(te,[["render",ne]]);export{he as default};
