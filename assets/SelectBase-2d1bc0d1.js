import{_ as r,o as a,c as l,b as d,t as s,f as c,F as u,d as _}from"./index-ce9b0eb4.js";const b={name:"SelectBase",props:{label:{type:String,default:"Example Label"},modelValue:{default:"01"},options:{type:Array,default:()=>[{value:"01",label:"Option 1"}]},id:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"]},m={class:"grid grid-cols-3 gap-3"},f=["for"],g=["id","name","value","disabled"],p={key:0,value:"",disabled:"",selected:""},v=["value"];function y(n,o,e,x,S,h){return a(),l("div",m,[d("label",{for:e.id,class:"text-lg font-bold"},s(e.label),9,f),d("select",{id:e.id,name:e.id,class:"rounded h-10 px-3 w-full border border-gray border-solid outline-none text-lg text-gray-900 cursor-pointer bg-white focus:border-blue col-span-2",value:e.modelValue,onChange:o[0]||(o[0]=t=>n.$emit("update:modelValue",t.target.value)),disabled:e.disabled},[e.modelValue?c("",!0):(a(),l("option",p," Selecciona una opción ")),(a(!0),l(u,null,_(e.options,(t,i)=>(a(),l("option",{key:i,value:t.value},s(t.label),9,v))),128))],40,g)])}const V=r(b,[["render",y],["__scopeId","data-v-cc191027"]]);export{V as S};