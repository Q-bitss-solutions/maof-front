import{F as _}from"./FormUnitsMAOF-7cf94b7b.js";import{T as l}from"./TitleBar-e4a4b5bb.js";import{b as f,u as U}from"./SICTUnits-c6d9d8e7.js";import{_ as A,q as C,u as b,m as g,b as a,o as c,c as h,e as m,d as x,g as y,h as B}from"./index-284224ac.js";import{S as p}from"./sweetalert2.all-281a79b7.js";import{C as F}from"./CustomHeaderApp-9682a33e.js";import"./InputBase-c5c29cdd.js";import"./fetchApi-6f7d5678.js";import"./SelectBase-7addb378.js";import"./index-fa5d7ad9.js";import"./ArrowBack-8c37bbd5.js";import"./HomePage-45decf19.js";import"./LogoutComponent-990bb1e2.js";import"./ManualComponent-3719973b.js";const S={name:"EditUnitMAOF",components:{FormUnitsMAOF:_,TitleBar:l,CustomHeaderApp:F},setup(){const r=C(),s=b(),t=g({unit:{},loading:!0}),o=async()=>{t.loading=!0;const{data:e}=await f(r.params.unityMAOFId);t.unit=e,t.loading=!1},n=async e=>{try{await U(e),p.fire("¡Éxito!","¡Unidad actualizada con éxito!","success"),s.push({name:"UnitsMAOF"})}catch{p.fire("Error","Registro inactivo","error")}};return o(),{app:t,saveUnit:n}}},v={class:"px-4 mt-10"},E={class:"px-4"};function I(r,s,t,o,n,e){const i=a("CustomHeaderApp"),u=a("title-bar"),d=a("form-units-m-a-o-f");return c(),h("main",v,[m(i),m(u,{title:"Unidades MAOF",subtitle:"Editar"}),x("section",E,[o.app.loading?B("",!0):(c(),y(d,{key:0,onSubmit:o.saveUnit,unit:o.app.unit,"edit-mode":""},null,8,["onSubmit","unit"]))])])}const G=A(S,[["render",I]]);export{G as default};
