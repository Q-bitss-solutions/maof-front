import{_ as h,o as e,c as t,d as l,F as d,f as c,t as b,n as y,h as i}from"./index-2a48b7f4.js";const f={name:"TableBase",props:{headers:{type:Array,default:()=>[{label:"Example Header",field:"example"}]},data:{type:Array,default:()=>[{example:"value 1"}]},options:{type:Array,default:[]}},setup(){return{dots:[1,2,3],openActions:o=>{document.getElementById(o).classList.toggle("hidden")}}}},k={class:"border border-solid border-black border-collapse text-gray-900 w-full"},v=l("caption",null,"Usuarios MAOF",-1),m={key:0,class:"p-2 border border-solid border-gray-100 relative"},g={class:"flex justify-center"},x=["onClick"],A=["id","onMouseleave"],E={class:"flex flex-col"},B=["onClick"],C={key:0},w={key:1},F={key:2};function I(_,p,o,u,M,T){return e(),t("table",k,[v,l("tr",null,[(e(!0),t(d,null,c(o.headers,(r,a)=>(e(),t("th",{key:a,class:"p-2 border border-b-2 border-solid border-black"},b(r.label),1))),128))]),(e(!0),t(d,null,c(o.data,(r,a)=>(e(),t("tr",{id:"rows",class:y(["",{" bg-gray-100":a%2===0}]),key:a},[(e(!0),t(d,null,c(o.headers,(s,n)=>(e(),t("td",{key:n,class:"p-2 border border-solid border-black"},b(r[s.field]),1))),128)),o.options.length?(e(),t("td",m,[l("div",g,[l("div",{class:"p-1 cursor-pointer",onClick:s=>u.openActions(`table-actions-${a}`)},[(e(!0),t(d,null,c(u.dots,(s,n)=>(e(),t("span",{key:n,class:"rounded-full h-1 w-1 block bg-blue mb-1"}))),128))],8,x)]),l("div",{class:"hidden absolute right-4 top-8 bg-white z-10",style:{"box-shadow":"-3px 3px 6px #00000029"},id:`table-actions-${a}`,onMouseleave:s=>u.openActions(`table-actions-${a}`)},[l("div",E,[(e(!0),t(d,null,c(o.options,(s,n)=>(e(),t("div",{key:n,class:"h-8 flex justify-center items-center py-2 px-8"},[l("p",{class:"text-xs border-b border-solid border-gray-100 cursor-pointer hover:border-gray hover:font-medium",onClick:j=>s.action(r)},[r.estatus_empleado==="Activo"&&s.label==="Editar"?(e(),t("span",C," Editar ")):i("",!0),r.estatus_empleado==="Activo"&&s.label==="Estatus"?(e(),t("span",w," Inactivar ")):i("",!0),r.estatus_empleado==="Inactivo"&&s.label==="Estatus"?(e(),t("span",F," Activar ")):i("",!0)],8,B)]))),128))])],40,A)])):i("",!0)],2))),128))])}const L=h(f,[["render",I]]);export{L as T};
