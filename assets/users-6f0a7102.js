import{f as e}from"./fetchApi-14e340d1.js";const s=()=>e({url:"/cat_empleados_maof/",method:"GET"}),m=a=>e({url:`/cat_empleados_maof/?unidad_maof=${a}`,method:"GET"}),d=a=>e({url:`/cat_empleados_maof/${a}/`,method:"GET"}),c=a=>e({url:"/cat_empleados_maof/",method:"POST",data:a}),f=a=>e({url:`/cat_empleados_maof/${a.empleado_maof}/`,method:"PUT",data:a}),l=(a,o)=>e({url:`/cat_empleados_maof/${a}/`,method:"PATCH",data:o});export{s as a,d as b,l as d,m as f,c as s,f as u};
