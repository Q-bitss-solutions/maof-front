import{_ as o,o as s,c as n,b as a,t as r}from"./index-9086ba0d.js";const i={name:"InputBase",props:{id:{type:String,default:""},label:{type:String,default:""},placeholder:{type:String,default:""},modelValue:{type:String,default:""},maxLength:{type:String,default:"100"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"]},u={class:"flex items-center grid-cols-3 gap-3"},c=["for"],_=["id","value","placeholder","maxlength","disabled"];function f(l,t,e,b,g,p){return s(),n("div",u,[a("label",{for:e.id,class:"text-lg font-bold basis-1/3"},r(e.label),9,c),a("textarea",{id:e.id,class:"h-20 py-2 px-3 basis-2/3 bg-white rounded outline-none border border-gray border-solid text-black text-lg focus:border-blue w-full",value:e.modelValue,placeholder:e.placeholder,maxlength:e.maxLength,disabled:e.disabled,onInput:t[0]||(t[0]=d=>l.$emit("update:modelValue",d.target.value))},`
    `,40,_)])}const x=o(i,[["render",f],["__scopeId","data-v-8e6f0d12"]]);export{x as T};