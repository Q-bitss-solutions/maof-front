import{f as t}from"./fetchApi-621ceb9d.js";const i=()=>t({url:"/estimacion_residente/",method:"GET"}),o=e=>t({url:`/estimacion_residente/${e}/`,method:"GET"}),n=e=>t({url:`/estimacion_residente/${e}/historial_estimacion/`,method:"GET"}),r=e=>t({url:"/estimacion_residente/",method:"POST",data:e}),c=e=>t({url:`/estimacion_residente/${e.id_estimacion}/`,method:"PUT",data:e}),d=(e,s)=>t({url:`/estimacion_residente/${s}/`,method:"PATCH",data:e}),m=e=>t({url:`/estimacion_residente/${e.id_estimacion}/enviar_area_revisora/`,method:"PUT",data:e}),h=e=>t({url:"/archivo_estimacion/",method:"POST",data:e}),_=e=>t({url:"/archivo_estimacion/",method:"GET",params:{estimacion:e,estatus_archivo:1}}),u=e=>t({url:`/archivo_estimacion/${e}/`,method:"DELETE"}),E=()=>t({url:"/estimacion_residente/hoja_viajera/",method:"GET",params:{estatus_booleano:"True"}}),l=e=>t({url:"/estimacion_residente/hoja_viajera/",method:"GET",params:{estatus_estimacion:e,estatus_booleano:1}});export{o as a,l as b,i as c,d,m as e,E as f,_ as g,h,u as i,n as j,r as s,c as u};
