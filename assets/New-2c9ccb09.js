import{F as _}from"./FormReviewArea-195c468d.js";import{A as u}from"./ArrowBack-e6c8a65f.js";import{T as l}from"./TitleBar-a7fd04ba.js";import{s as f}from"./reviewArea-c540debc.js";import{_ as v,u as w,a as e,o as d,c as b,b as a,d as o}from"./index-9c7881ce.js";import{S as A}from"./sweetalert2.all-281a79b7.js";import{L as x}from"./LogoutComponent-c8cac54b.js";import"./auth-f1c010b2.js";import"./SelectBase-553526a4.js";import"./SICTUnits-13f16526.js";const R={name:"NewReviewArea",components:{FormReviewArea:_,ArrowBack:u,TitleBar:l,LogoutComponent:x},setup(){const t=w();return{saveReviewArea:async r=>{await f(r),A.fire("¡Éxito!","¡Área revisora guardada con éxito!","success"),t.push({name:"ReviewAreas"})}}}},h={class:"px-4 mt-10"},k={class:"flex justify-between"},B={class:"px-4"};function N(t,s,r,n,g,S){const c=e("arrow-back"),i=e("logout-component"),m=e("title-bar"),p=e("form-review-area");return d(),b("main",h,[a("div",k,[o(c),o(i)]),o(m,{title:"Áreas revisoras",subtitle:"Nuevo"}),a("section",B,[o(p,{onSubmit:n.saveReviewArea},null,8,["onSubmit"])])])}const z=v(R,[["render",N]]);export{z as default};