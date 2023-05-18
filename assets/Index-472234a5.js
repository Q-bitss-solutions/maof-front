import{T as b}from"./TableBase-696e20dd.js";import{f as d}from"./contract-ef4ef94b.js";import{A as p}from"./ArrowBack-9533764d.js";import{B as f}from"./ButtonBase-1ec2bc1c.js";import{_ as u,u as h,r as C,a,o as B,c as k,g as e,b as w}from"./index-8b43d3da.js";import{T as x}from"./fetchApi-b713d3e3.js";const N={name:"ContractsIndex",components:{TableBase:b,ArrowBack:p,ButtonBase:f,TitleBar:x},setup(){const n=h(),r=[{label:"Proyecto",field:"nombre_proyecto"},{label:"Contratista",field:"nombre_contratista"},{label:"Área revisora",field:"nombre_unidad"},{label:"Monto sin IVA",field:"monto_sin_iva"},{label:"Fecha inicio",field:"plazo_inicio"},{label:"Fecha fin",field:"plazo_fin"},{label:"Objeto contrato",field:"objeto_contrato"},{label:"Estatus",field:"estatus_contrato"}],s=C([]),t=async()=>{const{data:o}=await d();s.value=o},c=[{label:"Editar",action:o=>n.push({name:"EditContract",params:{contractId:o.id_contrato}})}],i=()=>n.push({name:"NewContract"});return t(),{contract:s,featureOptions:c,headers:r,goToNewContract:i}}},T={class:"px-4 mt-10"},v={class:"px-4"};function I(n,r,s,t,c,i){const o=a("arrow-back"),l=a("title-bar"),_=a("button-base"),m=a("table-base");return B(),k("main",T,[e(o),e(l,{title:"Contratos",subtitle:"Inicio"}),w("section",v,[e(_,{label:"Nuevo contrato",onClick:t.goToNewContract,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),e(m,{options:t.featureOptions,headers:t.headers,data:t.contract},null,8,["options","headers","data"])])])}const j=u(N,[["render",I]]);export{j as default};
