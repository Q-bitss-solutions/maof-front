import"./fetchApi-08fbfcdf.js";import{_ as n,u as r,a as _,o as p,c as i,d as s,p as l,k as u}from"./index-74a76aef.js";const d=o=>(l("data-v-083b046a"),o=o(),u(),o),m={class:"inline-block justify-end pl-8"},h=d(()=>s("span",{class:"material-icons text-red",title:"Cerrar sesión"}," logout ",-1)),g=[h],f={__name:"LogoutComponent",setup(o){const a=r(),e=_(),c=async()=>{try{await e.clearInfo(),e.clearLocalStore(),a.push({name:"Login"})}catch(t){console.log("error: ",t)}};return(t,v)=>(p(),i("div",m,[s("div",{onClick:c,class:"flex cursor-pointer justify-end"},g)]))}},L=n(f,[["__scopeId","data-v-083b046a"]]);export{L};