import{F as p}from"./FormReviewArea-a9109649.js";import{T as c}from"./TitleBar-e4a4b5bb.js";import{s as _}from"./reviewArea-81537213.js";import{_ as u,u as v,b as e,o as l,c as d,e as o,d as f}from"./index-284224ac.js";import{S as w}from"./sweetalert2.all-281a79b7.js";import{C as A}from"./CustomHeaderApp-9682a33e.js";import"./fetchApi-6f7d5678.js";import"./SelectBase-7addb378.js";import"./SICTUnits-c6d9d8e7.js";import"./ArrowBack-8c37bbd5.js";import"./HomePage-45decf19.js";import"./LogoutComponent-990bb1e2.js";import"./ManualComponent-3719973b.js";const R={name:"NewReviewArea",components:{FormReviewArea:p,TitleBar:c,CustomHeaderApp:A},setup(){const r=v();return{saveReviewArea:async t=>{await _(t),w.fire("¡Éxito!","¡Área revisora guardada con éxito!","success"),r.push({name:"ReviewAreas"})}}}},x={class:"px-4 mt-10"},b={class:"px-4"};function C(r,a,t,s,N,h){const i=e("CustomHeaderApp"),m=e("title-bar"),n=e("form-review-area");return l(),d("main",x,[o(i),o(m,{title:"Áreas revisoras",subtitle:"Nuevo"}),f("section",b,[o(n,{onSubmit:s.saveReviewArea},null,8,["onSubmit"])])])}const z=u(R,[["render",C]]);export{z as default};
