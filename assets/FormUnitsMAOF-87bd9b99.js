import{I as u}from"./InputBase-3936129a.js";import{B as m}from"./fetchApi-08fbfcdf.js";import{S as r}from"./SelectBase-16288218.js";import{_ as p,m as c,b as s,o as _,c as b,e as l}from"./index-74a76aef.js";const f={name:"FormUnitMAOF",props:{editMode:{type:Boolean,default:!1},unit:{type:Object,default:()=>({})}},components:{InputBase:u,ButtonBase:m,SelectBase:r},setup(o,{emit:e}){const n=c({unit:{clave_unidad:"",unidad:""}});return o.editMode&&(n.unit=o.unit),{app:n,sendForm:()=>e("submit",n.unit)}}},v={class:"max-w-xl mx-auto"};function B(o,e,n,a,F,V){const d=s("input-base"),i=s("button-base");return _(),b("div",v,[l(d,{id:"clave_unidad",label:"Clave Unidad",modelValue:a.app.unit.clave_unidad,"onUpdate:modelValue":e[0]||(e[0]=t=>a.app.unit.clave_unidad=t),class:"mb-3"},null,8,["modelValue"]),l(d,{id:"id_empleado_maof",label:"Unidad",class:"mb-3",modelValue:a.app.unit.unidad,"onUpdate:modelValue":e[1]||(e[1]=t=>a.app.unit.unidad=t)},null,8,["modelValue"]),l(i,{label:"Guardar",onClick:a.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])}const M=p(f,[["render",B]]);export{M as F};