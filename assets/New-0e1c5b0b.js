import{F as m}from"./FormUnitsMAOF-f1f1bb90.js";import{A as _}from"./ArrowBack-5fbdef8c.js";import{T as p}from"./fetchApi-cb905fd6.js";import{s as u}from"./SICTUnits-ddea4c2b.js";import{_ as f,u as l,a as o,o as d,c as U,g as t,b}from"./index-3b5ad1a8.js";import{S as w}from"./sweetalert2.all-281a79b7.js";import"./InputBase-aa03d9ee.js";import"./ButtonBase-b74c4a37.js";import"./SelectBase-af5b6c60.js";const x={name:"NewUnitMAOF",components:{FormUnitsMAOF:m,ArrowBack:_,TitleBar:p},setup(){const s=l();return{saveUnit:async e=>{await u(e),w.fire("¡Éxito!","¡Unidad guardada con éxito!","success"),s.push({name:"UnitsMAOF"})}}}},A={class:"px-4 mt-10"},F={class:"px-4"};function k(s,a,e,n,v,B){const r=o("arrow-back"),i=o("title-bar"),c=o("form-units-m-a-o-f");return d(),U("main",A,[t(r),t(i,{title:"Unidades MAOF",subtitle:"Nuevo"}),b("section",F,[t(c,{onSubmit:n.saveUnit},null,8,["onSubmit"])])])}const V=f(x,[["render",k]]);export{V as default};