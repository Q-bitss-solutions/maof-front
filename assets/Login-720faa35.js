import{_ as b,u as f,r as x,a as i,o as w,c as V,d as n,b as m,i as d,t as u}from"./index-9c7881ce.js";import{b as B,B as g,a as I}from"./auth-f1c010b2.js";import{T as h}from"./TitleBar-a7fd04ba.js";import{I as v}from"./InputBase-7b333c5d.js";import"./sweetalert2.all-281a79b7.js";const y=s=>B({url:"user/login",method:"POST",data:s}),T={name:"ResidenteIndex",components:{ButtonBase:g,TitleBar:h,InputBase:v},setup(){const s=f(),e=I(),r=x({email:"",password:""}),o=async()=>{try{const{data:t}=await y(r.value);e.setToLocalStore(t),e.setInfo(),a()}catch(t){console.log("error: ",t)}},a=()=>{e.access!==null&&s.push({name:"Home"})};return a(),{user:r,sendForm:o,logIn:a}}},k={class:"px-4 mt-10 h-[41vh]"},C={class:"px-4"},E={class:"max-w-xl mx-auto"};function L(s,e,r,o,a,t){const p=i("title-bar"),c=i("input-base"),_=i("button-base");return w(),V("main",k,[n(p,{title:"Login",subtitle:"Inicio"}),m("section",C,[m("div",E,[n(c,{id:"email",label:"Email",type:"email",class:"mb-3",modelValue:o.user.email,"onUpdate:modelValue":e[0]||(e[0]=l=>o.user.email=l)},null,8,["modelValue"]),d(" "+u(o.user.email)+" ",1),n(c,{id:"password",label:"Password",type:"password",class:"mb-3",modelValue:o.user.password,"onUpdate:modelValue":e[1]||(e[1]=l=>o.user.password=l)},null,8,["modelValue"]),d(" "+u(o.user.password)+" ",1),n(_,{label:"Enviar",onClick:o.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])])])}const R=b(T,[["render",L]]);export{R as default};