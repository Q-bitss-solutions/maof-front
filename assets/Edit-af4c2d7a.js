import{F as l}from"./FormReviewArea-11fbe5fe.js";import{A as v}from"./ArrowBack-8b1ae337.js";import{T as w}from"./TitleBar-03fc510a.js";import{a as u,u as f}from"./reviewArea-512b5701.js";import{_ as A,q as b,m as g,b as t,o as i,c as B,d as c,e as r,g as R,h as k}from"./index-74a76aef.js";import{L as h}from"./LogoutComponent-035f58b7.js";import"./fetchApi-08fbfcdf.js";import"./SelectBase-16288218.js";import"./SICTUnits-b1b49cfc.js";const x={name:"EditReviewArea",components:{FormReviewArea:l,ArrowBack:v,TitleBar:w,LogoutComponent:h},setup(){const s=b(),e=g({reviewArea:{},loading:!0}),n=async()=>{e.loading=!0;const{data:a}=await u(s.params.reviewAreaId);e.reviewArea=a,e.loading=!1},o=async a=>{await f(a)};return n(),{app:e,saveReviewArea:o}}},y={class:"px-4 mt-10"},E={class:"flex justify-between"},C={class:"px-4"};function I(s,e,n,o,a,N){const m=t("arrow-back"),p=t("logout-component"),_=t("title-bar"),d=t("form-review-area");return i(),B("main",y,[c("div",E,[r(m),r(p)]),r(_,{title:"Áreas revisoras",subtitle:"Editar"}),c("section",C,[o.app.loading?k("",!0):(i(),R(d,{key:0,onSubmit:o.saveReviewArea,reviewArea:o.app.reviewArea,"edit-mode":""},null,8,["onSubmit","reviewArea"]))])])}const D=A(x,[["render",I]]);export{D as default};
