import{I as A}from"./InputBase-688a8fd6.js";import{S as B}from"./SelectBase-1e323fe8.js";import{B as R}from"./ButtonBase-99038fe1.js";import{T as F}from"./TableBase-204e19b6.js";import{_ as T,u as I,r as f,a as p,o as t,c as a,b as s,F as g,d as v,e as h,f as r,w as y,v as S,t as M,g as O,h as N,i as x}from"./index-fc54af53.js";const U={name:"Home",components:{InputBase:A,ButtonBase:R,TableBase:F,SelectBase:B},setup(){const l=I(),_=[{labelMenu:"Consulta",submenu:[],routeName:""},{labelMenu:"Estimaciones",submenu:[],routeName:"ResidentEstimate"},{labelMenu:"Obras y Contratos",routeName:"",submenu:[{labelSubMenu:"Medios",subMenu2:[{label:"Proyectos",routeName:"Projects"},{label:"Contratos y Convenios de Colaboración",routeName:"CollaborationAgreements"},{label:"Convenios Modificatorios",routeName:"AmendingAgreement"}]},{labelSubMenu:"Catálogos",subMenu2:[{label:"Área revisora",routeName:"ReviewAreas"},{label:"Residentes",routeName:"Resident"}]},{labelSubMenu:"Asignaciones",subMenu2:[],routeName:"AssignResident"}]},{labelMenu:"Administración MAOF",routeName:"",submenu:[{labelSubMenu:"Usuarios y roles",subMenu2:[],routeName:"UsersRolesMAOF"},{labelSubMenu:"Parámetros",subMenu2:[],routeName:""},{labelSubMenu:"Correcciones",subMenu2:[],routeName:""},{labelSubMenu:"Unidades MAOF",subMenu2:[],routeName:"UnitsMAOF"}]}],u=f(null),o=f(null);return{menu:_,showSubmenu:e=>u.value===e?u.value=null:u.value=e,showSubmenu2:e=>o.value===e?o.value=null:o.value=e,indexActiveSubmenu:u,indexActiveSubmenu2:o,goToRoute:e=>l.push({name:e}),logIn:()=>{localStorage.getItem("acces")===null&&l.push({name:"Login"})}}}},V={class:"px-4 pt-20"},j={class:"flex"},E={class:"flex flex-col bg-white rounded shadow-lg border border-gray-100 border-solid absolute py-1 text-gray-900 text-lg"},P={key:0},D=["onClick"],H={class:"flex flex-col justify-end justify-items-end"};function L(l,_,u,o,k,C){const b=p("button-base"),c=p("router-link");return t(),a("main",V,[s("div",j,[(t(!0),a(g,null,v(o.menu,(e,i)=>(t(),a("div",{key:i},[e.routeName!==""?(t(),h(b,{key:0,label:e.labelMenu,class:"border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white text-lg font-normal relative",onClick:n=>o.goToRoute(e.routeName)},null,8,["label","onClick"])):r("",!0),e.routeName===""?(t(),h(b,{key:1,label:e.labelMenu,class:"border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white text-lg font-normal relative",onClick:n=>o.showSubmenu(i)},null,8,["label","onClick"])):r("",!0),y(s("div",E,[(t(!0),a(g,null,v(e.submenu,(n,m)=>(t(),a("p",{key:m,class:"py-2 px-5 cursor-pointer hover:bg-gray-50"},[n.subMenu2.length!==0?(t(),a("div",P,[s("p",{onClick:d=>o.showSubmenu2(m)},M(n.labelSubMenu),9,D),y(s("div",H,[(t(!0),a(g,null,v(n.subMenu2,(d,w)=>(t(),a("span",{key:w,class:"py-2 px-5 cursor-pointer hover:bg-gray-50 relative"},[O(c,{to:{name:d.routeName}},{default:N(()=>[x(M(d.label),1)]),_:2},1032,["to"])]))),128))],512),[[S,o.indexActiveSubmenu2===m]])])):r("",!0),n.subMenu2.length===0?(t(),h(c,{key:1,to:{name:n.routeName}},{default:N(()=>[x(M(n.labelSubMenu),1)]),_:2},1032,["to"])):r("",!0)]))),128))],512),[[S,o.indexActiveSubmenu===i]])]))),128))])])}const K=T(U,[["render",L]]);export{K as default};