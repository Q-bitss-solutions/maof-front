import{F as p}from"./FormAmendingAgreement-f7a6f23d.js";import{A as d}from"./ArrowBack-5fbdef8c.js";import{T as l}from"./fetchApi-cb905fd6.js";import{_ as g,l as u,u as _,k as A,a as s,o as f,c as b,g as m,b as x}from"./index-3b5ad1a8.js";import{S as B}from"./sweetalert2.all-281a79b7.js";import"./InputBase-aa03d9ee.js";import"./TextAreaBase-65da7864.js";import"./ButtonBase-b74c4a37.js";import"./SelectBase-af5b6c60.js";import"./reviewArea-0f67dd45.js";import"./contractor-133ccc0d.js";import"./contract-eba43625.js";import"./project-39af23c1.js";const k={name:"DetallesCollaborationAgreements",components:{FormAmendingAgreement:p,ArrowBack:d,TitleBar:l},setup(){const o=u(),n=_(),e=A({amendingAgreement:{},loading:!0}),a=async()=>{e.loading=!0;const{data:t}=await fetchAmendingAgreementById(o.params.amendingAgreementId);e.amendingAgreement=t,e.loading=!1},r=async t=>{await updateAmendingAgreement(t),B.fire("¡Éxito!","Residente actualizado con éxito!","success"),n.push({name:"AmendingAgreement"})};return a(),{app:e,saveAmendingAgreement:r}}},w={class:"px-4 mt-10"},h=x("section",{class:"px-4"},null,-1);function v(o,n,e,a,r,t){const i=s("arrow-back"),c=s("title-bar");return f(),b("main",w,[m(i),m(c,{title:"Áreas revisoras",subtitle:"Editar"}),h])}const j=g(k,[["render",v]]);export{j as default};