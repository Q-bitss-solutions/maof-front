import{_ as p,u as _,a as b,r as f,b as c,o as x,c as w,e as n,d as m}from"./index-24ec4a05.js";import{a as B,B as V}from"./fetchApi-2015a4cb.js";import{T as I}from"./TitleBar-6bc781cb.js";import{I as g}from"./InputBase-e1a24e20.js";import{S as h}from"./sweetalert2.all-281a79b7.js";const v=s=>B({url:"user/login",method:"POST",data:s}),y={name:"ResidenteIndex",components:{ButtonBase:V,TitleBar:I,InputBase:g},setup(){const s=_(),o=b(),r=f({email:"",password:""}),e=async()=>{try{const{data:t}=await v(r.value);o.setToLocalStore(t),o.setInfo(),a()}catch(t){console.log("error: ",t),h.fire("Error","Usuario y/o contraseña incorrecta","error")}},a=()=>{o.access!==null&&s.push({name:"Home"})};return a(),{user:r,sendForm:e,logIn:a}}},k={class:"px-4 mt-10 h-[41vh]"},E={class:"px-4"},S={class:"max-w-xl mx-auto"};function T(s,o,r,e,a,t){const u=c("title-bar"),i=c("input-base"),d=c("button-base");return x(),w("main",k,[n(u,{title:"Login",subtitle:"Inicio"}),m("section",E,[m("div",S,[n(i,{id:"email",label:"Email",type:"email",class:"mb-3",modelValue:e.user.email,"onUpdate:modelValue":o[0]||(o[0]=l=>e.user.email=l)},null,8,["modelValue"]),n(i,{id:"password",label:"Password",type:"password",class:"mb-3",modelValue:e.user.password,"onUpdate:modelValue":o[1]||(o[1]=l=>e.user.password=l)},null,8,["modelValue"]),n(d,{label:"Enviar",onClick:e.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])])])}const P=p(y,[["render",T]]);export{P as default};
