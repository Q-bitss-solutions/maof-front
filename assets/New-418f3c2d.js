import{F as p}from"./FormUnitsMAOF-81b344a0.js";import{T as c}from"./TitleBar-95cae43a.js";import{s as _}from"./SICTUnits-72dfc181.js";import{_ as u,u as d,b as t,o as f,c as l,e as o,d as U}from"./index-ae47c3ce.js";import{S as x}from"./sweetalert2.all-281a79b7.js";import{C as A}from"./CustomHeaderApp-790e617d.js";import"./InputBase-f2420b6e.js";import"./fetchApi-ea3a2dff.js";import"./SelectBase-4b15a31f.js";import"./index-85c6b0d5.js";import"./ArrowBack-858e36ad.js";import"./HomePage-790bb899.js";import"./LogoutComponent-26312cbb.js";const b={name:"NewUnitMAOF",components:{FormUnitsMAOF:p,TitleBar:c,CustomHeaderApp:A},setup(){const e=d();return{saveUnit:async s=>{await _(s),x.fire("¡Éxito!","¡Unidad guardada con éxito!","success"),e.push({name:"UnitsMAOF"})}}}},C={class:"px-4 mt-10"},F={class:"px-4"};function v(e,n,s,r,N,S){const a=t("CustomHeaderApp"),i=t("title-bar"),m=t("form-units-m-a-o-f");return f(),l("main",C,[o(a),o(i,{title:"Unidades MAOF",subtitle:"Nuevo"}),U("section",F,[o(m,{onSubmit:r.saveUnit},null,8,["onSubmit"])])])}const I=u(b,[["render",v]]);export{I as default};
