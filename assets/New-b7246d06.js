import{F as p}from"./FormUnitsMAOF-8fcc453e.js";import{A as u}from"./ArrowBack-e6c8a65f.js";import{T as f}from"./TitleBar-a7fd04ba.js";import{s as l}from"./SICTUnits-13f16526.js";import{_ as d,u as b,a as o,o as U,c as w,b as n,d as t}from"./index-9c7881ce.js";import{S as x}from"./sweetalert2.all-281a79b7.js";import{L as v}from"./LogoutComponent-c8cac54b.js";import"./InputBase-7b333c5d.js";import"./auth-f1c010b2.js";import"./SelectBase-553526a4.js";const A={name:"NewUnitMAOF",components:{FormUnitsMAOF:p,ArrowBack:u,TitleBar:f,LogoutComponent:v},setup(){const s=b();return{saveUnit:async e=>{await l(e),x.fire("¡Éxito!","¡Unidad guardada con éxito!","success"),s.push({name:"UnitsMAOF"})}}}},F={class:"px-4 mt-10"},h={class:"flex justify-between"},k={class:"px-4"};function B(s,a,e,r,N,S){const c=o("arrow-back"),i=o("logout-component"),m=o("title-bar"),_=o("form-units-m-a-o-f");return U(),w("main",F,[n("div",h,[t(c),t(i)]),t(m,{title:"Unidades MAOF",subtitle:"Nuevo"}),n("section",k,[t(_,{onSubmit:r.saveUnit},null,8,["onSubmit"])])])}const E=d(A,[["render",B]]);export{E as default};