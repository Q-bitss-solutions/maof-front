import{I as F}from"./InputBase-c469d919.js";import{B as V}from"./fetchApi-c943dcd0.js";import{S as k}from"./SelectBase-dd901550.js";import{u as y,c as m,r as c}from"./index-b9b82d3d.js";import{S as B}from"./sweetalert2.all-281a79b7.js";import{_ as g,r as $,c as C,f as p,g as o,l as s,v as l,F as v,m as _,t as f,x as b}from"./index-5cc367f2.js";const M={name:"FormUnitMAOF",props:{editMode:{type:Boolean,default:!1},unit:{type:Object,default:()=>({})}},components:{InputBase:F,ButtonBase:V,SelectBase:k},setup(r,{emit:t}){const n=$({unit:{clave_unidad:"",unidad:""}});r.editMode&&(n.unit=r.unit);const e=async()=>{await d.value.$validate()?t("submit",n.unit):B.fire("Error","Revisa bien los datos","error")},u=C(()=>({clave_unidad:{required:m.withMessage("La Clave es requerida",c)},unidad:{required:m.withMessage("La unidad es requerida",c)}})),d=y(u,n.unit);return{app:n,sendForm:e,v$:d}}},U={class:"max-w-xl mx-auto"};function q(r,t,n,e,u,d){const i=p("input-base"),x=p("button-base");return o(),s("div",U,[l(i,{id:"clave_unidad",label:"Clave Unidad",modelValue:e.app.unit.clave_unidad,"onUpdate:modelValue":t[0]||(t[0]=a=>e.app.unit.clave_unidad=a),class:"mb-3"},null,8,["modelValue"]),e.v$.clave_unidad.$error?(o(!0),s(v,{key:0},_(e.v$.clave_unidad.$errors,a=>(o(),s("span",{key:a,class:"text-red font-semibold text-center ml-80"},f(a.$message),1))),128)):b("",!0),l(i,{id:"id_empleado_maof",label:"Unidad",class:"mb-3",modelValue:e.app.unit.unidad,"onUpdate:modelValue":t[1]||(t[1]=a=>e.app.unit.unidad=a)},null,8,["modelValue"]),e.v$.unidad.$error?(o(!0),s(v,{key:1},_(e.v$.unidad.$errors,a=>(o(),s("span",{key:a,class:"text-red font-semibold text-center ml-80"},f(a.$message),1))),128)):b("",!0),l(x,{label:"Guardar",onClick:e.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])}const I=g(M,[["render",q]]);export{I as F};
