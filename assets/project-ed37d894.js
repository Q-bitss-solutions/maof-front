import{f as o}from"./fetchApi-621ceb9d.js";const c=()=>o({url:"proyecto/",method:"GET"}),r=()=>o({url:"proyecto/",method:"GET",params:{estatus_proyecto:3}}),s=t=>o({url:`proyecto/${t}/`,method:"GET"}),a=t=>o({url:"proyecto/",method:"POST",data:t}),d=t=>o({url:`proyecto/${t.id_proyecto}/`,method:"PUT",data:t}),p=t=>o({url:`proyecto/${t}/`,method:"DELETE"});export{s as a,r as b,p as d,c as f,a as s,d as u};
