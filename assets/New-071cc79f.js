import{F as m}from"./FormUnitsMAOF-53f75091.js";import{A as _,T as p}from"./TitleBar-793bd359.js";import{s as u}from"./SICTUnits-a1c1d9e2.js";import{_ as f,u as l,a as t,o as d,c as U,g as o,b}from"./index-ce9b0eb4.js";import{S as w}from"./sweetalert2.all-281a79b7.js";import"./InputBase-89edb71c.js";import"./ButtonBase-313575ac.js";import"./SelectBase-2d1bc0d1.js";const x={name:"NewUnitMAOF",components:{FormUnitsMAOF:m,ArrowBack:_,TitleBar:p},setup(){const s=l();return{saveUnit:async e=>{await u(e),w.fire("¡Éxito!","¡Unidad guardada con éxito!","success"),s.push({name:"UnitsMAOF"})}}}},A={class:"px-4 mt-10"},F={class:"px-4"};function k(s,a,e,n,v,B){const r=t("arrow-back"),i=t("title-bar"),c=t("form-units-m-a-o-f");return d(),U("main",A,[o(r),o(i,{title:"Unidades MAOF",subtitle:"Nuevo"}),b("section",F,[o(c,{onSubmit:n.saveUnit},null,8,["onSubmit"])])])}const C=f(x,[["render",k]]);export{C as default};