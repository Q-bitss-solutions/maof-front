import{F as i}from"./FormContract-c36ad9a3.js";import{A as p,T as _}from"./TitleBar-75e5b7b2.js";import{s as u}from"./contract-2479833c.js";import{_ as l,u as f,a as t,o as d,c as C,g as o,b}from"./index-7157672d.js";import{S as w}from"./sweetalert2.all-281a79b7.js";import"./InputBase-0e7619c9.js";import"./ButtonBase-05fce0d7.js";import"./SelectBase-5ff92d5e.js";import"./project-06cc81ca.js";import"./reviewArea-2a072bd2.js";import"./contractor-4a4b33ac.js";const x={name:"NewContract",components:{FormContract:i,ArrowBack:p,TitleBar:_},setup(){const r=f();return{saveContract:async a=>{await u(a),w.fire("¡Éxito!","Contrato guardado con éxito!","success"),r.push({name:"Contracts"})}}}},k={class:"px-4 mt-10"},v={class:"px-4"};function B(r,e,a,s,N,h){const n=t("arrow-back"),c=t("title-bar"),m=t("form-contract");return d(),C("main",k,[o(n),o(c,{title:"Contratos",subtitle:"Nuevo"}),b("section",v,[o(m,{onSubmit:s.saveContract},null,8,["onSubmit"])])])}const q=l(x,[["render",B]]);export{q as default};
