import{F as p}from"./FormAmendingAgreement-91c784e2.js";import{A as _,T as d}from"./TitleBar-793bd359.js";import{s as g}from"./contract-ed548451.js";import{_ as u,u as f,a as o,o as l,c as A,g as t,b}from"./index-ce9b0eb4.js";import{S as a}from"./sweetalert2.all-281a79b7.js";import"./InputBase-89edb71c.js";import"./TextAreaBase-4d502363.js";import"./ButtonBase-313575ac.js";import"./SelectBase-2d1bc0d1.js";import"./reviewArea-dc908ded.js";import"./contractor-5f787cd9.js";import"./project-f5429a04.js";const v={name:"NewAmendingAgreement",components:{FormAmendingAgreement:p,ArrowBack:_,TitleBar:d},setup(){const r=f();return{saveAmendingAgreement:async n=>{try{await g(n),a.fire("Exito!","Convenio modificatorio guardado con éxito!","success"),r.push({name:"AmendingAgreement"})}catch(e){a.fire("Error",`${e.response.data.message}`,"error")}}}}},w={class:"px-4 mt-10"},x={class:"px-4"};function h(r,s,n,e,k,B){const m=o("arrow-back"),i=o("title-bar"),c=o("form-amending-agreement");return l(),A("main",w,[t(m),t(i,{title:"Convenio Modificatorio",subtitle:"Nuevo"}),b("section",x,[t(c,{onSubmit:e.saveAmendingAgreement},null,8,["onSubmit"])])])}const q=u(v,[["render",h]]);export{q as default};