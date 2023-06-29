import{T as B}from"./TableUsers-4882459a.js";import{a as w,d as f}from"./users-0b56a339.js";import{A}from"./ArrowBack-fd64ea0e.js";import{H as v}from"./HomePage-09835846.js";import{B as g}from"./fetchApi-d28bf2c1.js";import{_ as C,u as E,r as _,b as t,o as O,c as U,d as u,e as a}from"./index-2a48b7f4.js";import{T as x}from"./TitleBar-0949630f.js";import{S as s}from"./sweetalert2.all-281a79b7.js";import{L as F}from"./LogoutComponent-c111ff45.js";const M={name:"UsersRolesMAOFIndex",components:{TableBase:B,ArrowBack:A,HomePage:v,ButtonBase:g,TitleBar:x,LogoutComponent:F},setup(){const c=E(),d=[{label:"Id",field:"empleado_maof"},{label:"Nombre",field:"nombre_completo"},{label:"Unidad MAOF",field:"unidad_maof"},{label:"Correo",field:"correo_electronico"},{label:"Rol MAOF",field:"rol_maof"},{label:"Estatus",field:"estatus_empleado"}],l=_([]),o=_({estatus_empleado:""}),i=async()=>{const{data:e}=await w();l.value=e},p=[{label:"Editar",action:e=>{c.push({name:"EditUsersRolesMAOF",params:{userRolMAOFId:e.empleado_maof}})}},{label:"Estatus",action:async e=>{e.estatus_empleado==="Inactivo"&&s.fire({title:`Estás seguro que deseas activar al usuario "${e.nombre_completo}"?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Activar!",reverseButtons:!0}).then(async r=>{if(r.isConfirmed)try{o.estatus_empleado=!0,await f(e.empleado_maof,o),await i(),s.fire("¡Activo!","El usuario se Activó","success")}catch(n){s.fire("Error",`${n.response.data.detail}`,"error")}}),e.estatus_empleado==="Activo"&&s.fire({title:`Estás seguro que desea inactivar al usuario "${e.nombre_completo}"?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Inactivar!",reverseButtons:!0}).then(async r=>{if(r.isConfirmed)try{o.estatus_empleado=!1,await f(e.empleado_maof,o),await i(),s.fire("¡Inactivo!","El usuario se inactivó","success")}catch(n){s.fire("Error",`${n.response.data.detail}`,"error")}})}}],m=()=>c.push({name:"NewUsersRolesMAOF"});return i(),{userAndRols:l,userAndRolStatus:o,featureOptions:p,headers:d,goToNewUserAndRols:m}}},y={class:"px-4 mt-10"},I={class:"flex justify-between"},R={class:"px-4"};function T(c,d,l,o,i,p){const m=t("arrow-back"),e=t("home-page"),r=t("logout-component"),n=t("title-bar"),b=t("button-base"),h=t("table-base");return O(),U("main",y,[u("div",I,[a(m),u("div",null,[a(e),a(r)])]),a(n,{title:"Usuarios y Roles MAOF",subtitle:"Inicio"}),u("section",R,[a(b,{label:"Alta de usuarios MAOF",onClick:o.goToNewUserAndRols,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),a(h,{description:"Usuarios MAOF",options:o.featureOptions,headers:o.headers,data:o.userAndRols},null,8,["options","headers","data"])])])}const P=C(M,[["render",T]]);export{P as default};
