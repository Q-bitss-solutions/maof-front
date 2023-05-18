import{T as _}from"./TableBase-696e20dd.js";import{f,d as u}from"./contract-ef4ef94b.js";import{A as p}from"./ArrowBack-9533764d.js";import{B as C}from"./ButtonBase-1ec2bc1c.js";import{_ as g,u as B,r as h,a as t,o as v,c as w,g as a,b as A}from"./index-8b43d3da.js";import{T as x}from"./fetchApi-b713d3e3.js";import{S as s}from"./sweetalert2.all-281a79b7.js";const T={name:"CollaborationAgreementsIndex",components:{TableBase:_,ArrowBack:p,ButtonBase:C,TitleBar:x},setup(){const n=B(),c=[{label:"Id",field:"id_contrato"},{label:"Tipo",field:"tipo_contrato"},{label:"Proyecto padre (Cartera de inversión)",field:"clave_cartera"},{label:"Contratista",field:"nombre_contratista"},{label:"Unidad SICT",field:"nombre_unidad"},{label:"Número",field:"numero_contrato"},{label:"Objeto",field:"objeto_contrato"},{label:"Monto (sin IVA)",field:"monto_sin_iva"},{label:"Plazo de inicio",field:"plazo_inicio"},{label:"Plazo de fin",field:"plazo_fin"},{label:"Estatus",field:"estatus_contrato"}],r=h([]),o=async()=>{const{data:e}=await f();r.value=e},d=[{label:"Editar",action:e=>n.push({name:"EditCollaborationAgreements",params:{collaborationAgreementsId:e.id_contrato}})},{label:"Eliminar",action:async e=>{s.fire({title:"Se finalizará el Contrato o Convenio de Colaboración...",text:"¿Está usted seguro?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, !Finalizar!",reverseButtons:!0}).then(async i=>{if(i.isConfirmed)try{await u(e.id_contrato),await o(),s.fire("Inactivo!","El contrato o convenio de colaboración se inactivó","success")}catch(l){s.fire("Error",`${l.response.data.detail}`,"error")}})}}],m=()=>n.push({name:"NewCollaborationAgreements"});return o(),{collaborationAgreements:r,featureOptions:d,headers:c,goToNewCollaborationAgreements:m}}},E={class:"px-4 mt-10"},I={class:"px-4"};function k(n,c,r,o,d,m){const e=t("arrow-back"),i=t("title-bar"),l=t("button-base"),b=t("table-base");return v(),w("main",E,[a(e),a(i,{title:"Contratos y Convenios de Colaboración",subtitle:"Inicio"}),A("section",I,[a(l,{label:"Nuevo Contrato o Convenio de Colaboración",onClick:o.goToNewCollaborationAgreements,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),a(b,{options:o.featureOptions,headers:o.headers,data:o.collaborationAgreements},null,8,["options","headers","data"])])])}const j=g(T,[["render",k]]);export{j as default};
