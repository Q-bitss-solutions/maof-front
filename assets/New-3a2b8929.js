import{F as p}from"./FormResident-076bb972.js";import{A as d,T as _}from"./TitleBar-75e5b7b2.js";import{s as u}from"./resident-1c13bcb4.js";import{_ as l,u as f,a as t,o as R,c as b,g as o,b as w}from"./index-7157672d.js";import{S as n}from"./sweetalert2.all-281a79b7.js";import"./InputBase-0e7619c9.js";import"./ButtonBase-05fce0d7.js";import"./SelectBase-5ff92d5e.js";import"./reviewArea-2a072bd2.js";const x={name:"NewResident",components:{FormResident:p,ArrowBack:d,TitleBar:_},setup(){const s=f();return{saveResident:async r=>{try{await u(r),n.fire("¡Éxito!","¡Residente guardado con éxito!","success"),s.push({name:"Resident"})}catch(e){n.fire("Error",`${e.response.data.detail}`,"error")}}}}},h={class:"px-4 mt-10"},k={class:"px-4"};function v(s,a,r,e,B,N){const i=t("arrow-back"),c=t("title-bar"),m=t("form-resident");return R(),b("main",h,[o(i),o(c,{title:"Residente",subtitle:"Nuevo"}),w("section",k,[o(m,{onSubmit:e.saveResident},null,8,["onSubmit"])])])}const C=l(x,[["render",v]]);export{C as default};
