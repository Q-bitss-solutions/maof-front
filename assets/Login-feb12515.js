import{_,u as g,r as b,a as l,o as f,c as w,g as a,b as c,i,t as m}from"./index-be88d765.js";import{B as x}from"./ButtonBase-b7e739f1.js";import{f as V,T as B}from"./fetchApi-3cb91e59.js";import{I}from"./InputBase-c6044481.js";import"./sweetalert2.all-281a79b7.js";const h=t=>V({url:"user/login",method:"POST",data:t}),N={name:"ResidenteIndex",components:{ButtonBase:x,TitleBar:B,InputBase:I},setup(){const t=g(),o=b({email:"",password:""});return{sendForm:async()=>{try{const{data:s}=await h(o.value);console.log(s),localStorage.setItem("acces",s.access),localStorage.setItem("refresh",s.refresh)}catch(s){console.log("error: ",s)}console.log(localStorage.getItem("acces")),console.log(localStorage.getItem("refresh"))},goToNewResident:()=>t.push({name:"NewResident"}),user:o}}},S={class:"px-4 mt-10"},T={class:"px-4"},y={class:"max-w-xl mx-auto"};function R(t,o,d,e,s,k){const u=l("title-bar"),n=l("input-base"),p=l("button-base");return f(),w("main",S,[a(u,{title:"Login",subtitle:"Inicio"}),c("section",T,[c("div",y,[a(n,{id:"email",label:"Email",type:"email",class:"mb-3",modelValue:e.user.email,"onUpdate:modelValue":o[0]||(o[0]=r=>e.user.email=r)},null,8,["modelValue"]),i(" "+m(e.user.email)+" ",1),a(n,{id:"password",label:"Password",type:"password",class:"mb-3",modelValue:e.user.password,"onUpdate:modelValue":o[1]||(o[1]=r=>e.user.password=r)},null,8,["modelValue"]),i(" "+m(e.user.password)+" ",1),a(p,{label:"Enviar",onClick:e.sendForm,class:"mr-0 ml-auto"},null,8,["onClick"])])])])}const L=_(N,[["render",R]]);export{L as default};
