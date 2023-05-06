import{I as C}from"./InputBase-89edb71c.js";import{B as I}from"./ButtonBase-313575ac.js";import{S as M}from"./SelectBase-2d1bc0d1.js";import{T as U}from"./TextAreaBase-4d502363.js";import{A as z,T as A}from"./TitleBar-793bd359.js";import{s as F,b as N}from"./residentEstimate-6b5d674a.js";import{_ as j,u as w,k as B,q as T,a as b,o as s,c as r,b as c,t as _,g as i,F as f,d as g,f as v,l as S,e as D}from"./index-ce9b0eb4.js";import{S as h}from"./sweetalert2.all-281a79b7.js";import{u as O,c as m,m as V,a as x}from"./index-4c695438.js";import{a as q}from"./contract-ed548451.js";const G={name:"FormResidentEstimate",props:{editMode:{type:Boolean,default:!1},residentEstimate:{type:Object,default:()=>({})}},components:{InputBase:C,ButtonBase:I,SelectBase:M,TextAreaBase:U},setup(p){const t=w(),o=B({residentEstimate:{id_contrato:"",fecha_recepcion_info_contratista:"",fecha_autorizacion_contratista:"",fecha_periodo_inicio_estimacion:"",fecha_periodo_fin_estimacion:"",importe_obra_ejecutada:"",importe_pagar:"",grado_avance_obra:"",porcentaje_avance_estimacion:"",porcentaje_avance_estimacion_acumulado:"",porcentaje_Avance_fisico:"",porcensaje_avance_financiero:"",observaciones_residente:""},fecha_recepcion_info_contratista:"",fecha_autorizacion_contratista:"",fecha_periodo_inicio_estimacion:"",fecha_periodo_fin_estimacion:"",contratoName:"",fileInfo:{type:Object,default:()=>({})},listReviewAreas:[],listEmpleados:[],listContrato:[]}),e=T(()=>({porcentaje_avance_estimacion:{maxValue:m.withMessage("El valor maximo es 100%",V(100)),minValue:m.withMessage("El valor minimo es 0%",x(0))},porcentaje_avance_estimacion_acumulado:{maxValue:m.withMessage("El valor maximo es 100%",V(100)),minValue:m.withMessage("El valor minimo es 0%",x(0))},porcentaje_Avance_fisico:{maxValue:m.withMessage("El valor maximo es 100%",V(100)),minValue:m.withMessage("El valor minimo es 0%",x(0))},porcensaje_avance_financiero:{maxValue:m.withMessage("El valor maximo es 100%",V(100)),minValue:m.withMessage("El valor minimo es 0%",x(0))},grado_avance_obra:{maxValue:m.withMessage("El valor maximo es 100%",V(100)),minValue:m.withMessage("El valor minimo es 0%",x(0))}}));p.editMode&&(console.log("props.residentEstimate: ",p.residentEstimate),o.residentEstimate=p.residentEstimate);const u=O(e,o.residentEstimate);return{app:o,sendForm:()=>{var d=new Date().toLocaleTimeString("en-GB");console.log(d),o.residentEstimate.fecha_recepcion_info_contratista=o.fecha_recepcion_info_contratista+" "+d,o.fecha_autorizacion_contratista===""?delete o.residentEstimate.fecha_autorizacion_contratista:o.residentEstimate.fecha_autorizacion_contratista=o.fecha_autorizacion_contratista+" "+d,o.residentEstimate.fecha_periodo_inicio_estimacion=o.fecha_periodo_inicio_estimacion+" "+d,o.residentEstimate.fecha_periodo_fin_estimacion=o.fecha_periodo_fin_estimacion+" "+d,h.fire({title:"¿Confirma los cambios ?",icon:"question",showCancelButton:!0,cancelButtonColor:"#d33",confirmButtonColor:"#3085d6",confirmButtonText:"Continuar",reverseButtons:!0}).then(async E=>{if(E.isConfirmed)try{await u.value.$validate()?(delete o.residentEstimate.num_consecutivo_estimacion,console.log("residentEstimate Post: ",o.residentEstimate),await F(o.residentEstimate),h.fire({title:"Registro dado de alta",text:"¿Desea ingresar los documentos?",icon:"success",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si",cancelButtonText:"No",reverseButtons:!0}).then(async k=>{if(k.isConfirmed){const{data:y}=await N(),R=y.length-1;o.fileInfo=y[R],console.log("fileInfo: ",o.fileInfo.id_estimacion),t.push({name:"FilesResidentEstimate",params:{residentEstimateId:o.fileInfo.id_estimacion}})}else t.push({name:"ResidentEstimate"})})):h.fire("Error","Revisa bien los datos","error")}catch(a){console.log("error: ",a.response.data.detail),h.fire("Error",`${a.response.data.detail}`,"error")}})},v$:u}}},L={class:"flex flex-row justify-between"},P={class:"font-bold text-lg"},H={class:"font-bold text-lg w-128"},J={class:"flex content-start justify-end items-center mb-10"},K={class:"items-center justify-center"},Q=c("h1",{class:"font-bold text-lg"}," Número de la Estimación ",-1),W={class:"text-center font-semibold text-lg numEstimacion"},X={class:"max-w-xl mx-auto"},Y={class:"flex flex-row"};function Z(p,t,o,e,u,l){const n=b("input-base"),d=b("text-area-base"),E=b("button-base");return s(),r(f,null,[c("div",L,[c("div",P,_(e.app.residentEstimate.numero_contrato),1),c("div",H," Objeto: "+_(e.app.residentEstimate.objeto_contrato),1),c("div",J,[c("div",K,[Q,c("p",W,_(e.app.residentEstimate.num_consecutivo_estimacion),1)])])]),c("div",X,[i(n,{id:"fecha_recepcion_info_contratista",label:"Fecha de recepción de información del Contratista",type:"date",class:"mb-3",modelValue:e.app.fecha_recepcion_info_contratista,"onUpdate:modelValue":t[0]||(t[0]=a=>e.app.fecha_recepcion_info_contratista=a)},null,8,["modelValue"]),i(n,{id:"fecha_autorizacion_contratista",label:"Fecha de autorización al Contratista",type:"date",class:"mb-3",modelValue:e.app.fecha_autorizacion_contratista,"onUpdate:modelValue":t[1]||(t[1]=a=>e.app.fecha_autorizacion_contratista=a)},null,8,["modelValue"]),c("div",Y,[c("div",null,[i(n,{id:"fecha_periodo_inicio_estimacion",label:"Período de la Estimación",type:"date",modelValue:e.app.fecha_periodo_inicio_estimacion,"onUpdate:modelValue":t[2]||(t[2]=a=>e.app.fecha_periodo_inicio_estimacion=a)},null,8,["modelValue"])]),c("div",null,[i(n,{id:"fecha_periodo_fin_estimacion",label:"al",type:"date",class:"pt-2",modelValue:e.app.fecha_periodo_fin_estimacion,"onUpdate:modelValue":t[3]||(t[3]=a=>e.app.fecha_periodo_fin_estimacion=a)},null,8,["modelValue"])])]),i(n,{id:"importe_obra_ejecutada",label:"Importe de la obra ejecutada",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.importe_obra_ejecutada,"onUpdate:modelValue":t[4]||(t[4]=a=>e.app.residentEstimate.importe_obra_ejecutada=a)},null,8,["modelValue"]),i(n,{id:"importe_pagar",label:"Importe a pagar",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.importe_pagar,"onUpdate:modelValue":t[5]||(t[5]=a=>e.app.residentEstimate.importe_pagar=a)},null,8,["modelValue"]),i(n,{id:"grado_avance_obra",label:"% de grado de avance",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.grado_avance_obra,"onUpdate:modelValue":t[6]||(t[6]=a=>e.app.residentEstimate.grado_avance_obra=a)},null,8,["modelValue"]),e.v$.grado_avance_obra.$error?(s(!0),r(f,{key:0},g(e.v$.grado_avance_obra.$errors,a=>(s(),r("span",{key:a,class:"text-red font-semibold text-center ml-80"},_(a.$message),1))),128)):v("",!0),i(n,{id:"porcentaje_avance_estimacion",label:"% de avance de la Estimación",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.porcentaje_avance_estimacion,"onUpdate:modelValue":t[7]||(t[7]=a=>e.app.residentEstimate.porcentaje_avance_estimacion=a)},null,8,["modelValue"]),e.v$.porcentaje_avance_estimacion.$error?(s(!0),r(f,{key:1},g(e.v$.porcentaje_avance_estimacion.$errors,a=>(s(),r("span",{key:a,class:"text-red font-semibold text-center ml-80"},_(a.$message),1))),128)):v("",!0),i(n,{id:"porcentaje_avance_estimacion_acumulado",label:"% de avance de la Estimación acumulado",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.porcentaje_avance_estimacion_acumulado,"onUpdate:modelValue":t[8]||(t[8]=a=>e.app.residentEstimate.porcentaje_avance_estimacion_acumulado=a)},null,8,["modelValue"]),e.v$.porcentaje_avance_estimacion_acumulado.$error?(s(!0),r(f,{key:2},g(e.v$.porcentaje_avance_estimacion_acumulado.$errors,a=>(s(),r("span",{key:a,class:"text-red font-semibold text-center ml-80"},_(a.$message),1))),128)):v("",!0),i(n,{id:"porcentaje_Avance_fisico",label:"% de avance físico",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.porcentaje_Avance_fisico,"onUpdate:modelValue":t[9]||(t[9]=a=>e.app.residentEstimate.porcentaje_Avance_fisico=a)},null,8,["modelValue"]),e.v$.porcentaje_Avance_fisico.$error?(s(!0),r(f,{key:3},g(e.v$.porcentaje_Avance_fisico.$errors,a=>(s(),r("span",{key:a,class:"text-red font-semibold text-center ml-80"},_(a.$message),1))),128)):v("",!0),i(n,{id:"porcensaje_avance_financiero",label:"% de avance financiero",type:"number",class:"mb-3",modelValue:e.app.residentEstimate.porcensaje_avance_financiero,"onUpdate:modelValue":t[10]||(t[10]=a=>e.app.residentEstimate.porcensaje_avance_financiero=a)},null,8,["modelValue"]),e.v$.porcensaje_avance_financiero.$error?(s(!0),r(f,{key:4},g(e.v$.porcensaje_avance_financiero.$errors,a=>(s(),r("span",{key:a,class:"text-red font-semibold text-center ml-80"},_(a.$message),1))),128)):v("",!0),i(d,{id:"fecha_inicio_proyecto",label:"Observaciones del Residente",class:"mb-3",modelValue:e.app.residentEstimate.observaciones_residente,"onUpdate:modelValue":t[11]||(t[11]=a=>e.app.residentEstimate.observaciones_residente=a)},null,8,["modelValue"]),i(E,{label:"Guardar",onClick:e.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])],64)}const $=j(G,[["render",Z]]),ee={name:"NewResidentbyId",components:{FormResidentEstimate:$,ArrowBack:z,TitleBar:A},setup(){const p=S(),t=w(),o=B({residentEstimate:{id_contrato:"",num_consecutivo_estimacion:"",numero_contrato:"",objeto_contrato:""},loading:!0}),e=async()=>{o.loading=!0;const{data:l}=await q(p.params.residentEstimateId);console.log(l),o.residentEstimate.num_consecutivo_estimacion=l.contador_siguiente_estimacion,o.residentEstimate.numero_contrato=l.numero_contrato,o.residentEstimate.id_contrato=l.id_contrato,o.residentEstimate.objeto_contrato=l.objeto_contrato,console.log("app.residentEstimate",o.residentEstimate),o.loading=!1},u=async l=>{await updateResident(l),h.fire("¡Éxito!","!Estimación residente actualizado con éxito!","success"),t.push({name:"Resident"})};return e(),{app:o,saveResident:u}}},ae={class:"px-4 mt-10"},te={class:"px-4"};function oe(p,t,o,e,u,l){const n=b("arrow-back"),d=b("title-bar"),E=b("form-resident-estimate");return s(),r("main",ae,[i(n),i(d,{title:"Estimación Residente By Id",subtitle:"Nuevo"}),c("section",te,[e.app.loading?v("",!0):(s(),D(E,{key:0,residentEstimate:e.app.residentEstimate,"edit-mode":""},null,8,["residentEstimate"]))])])}const ue=j(ee,[["render",oe]]);export{ue as default};