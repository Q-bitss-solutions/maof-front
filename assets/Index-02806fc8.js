import{T as B}from"./TableUsers-067a74cb.js";import{a as w,d as f}from"./users-cad8f2a4.js";import{A as v}from"./ArrowBack-e6c8a65f.js";import{H as A}from"./HomePage-f71174c1.js";import{B as g}from"./auth-f1c010b2.js";import{_ as C,u as E,r as _,a as t,o as x,c as O,b as u,d as a}from"./index-9c7881ce.js";import{T as U}from"./TitleBar-a7fd04ba.js";import{S as s}from"./sweetalert2.all-281a79b7.js";import{L as y}from"./LogoutComponent-c8cac54b.js";const F={name:"UsersRolesMAOFIndex",components:{TableBase:B,ArrowBack:v,HomePage:A,ButtonBase:g,TitleBar:U,LogoutComponent:y},setup(){const l=E(),d=[{label:"Id",field:"empleado_maof"},{label:"Nombre",field:"nombre_completo"},{label:"Unidad MAOF",field:"unidad_maof"},{label:"Correo",field:"correo_electronico"},{label:"Rol MAOF",field:"rol_maof"},{label:"Estatus",field:"estatus_empleado"}],c=_([]),o=_({estatus_empleado:""}),i=async()=>{const{data:e}=await w();c.value=e},p=[{label:"Editar",action:e=>{l.push({name:"EditUsersRolesMAOF",params:{userRolMAOFId:e.empleado_maof}})}},{label:"Estatus",action:async e=>{e.estatus_empleado==="Inactivo"&&s.fire({title:`Estás seguro que deseas activar al usuario "${e.nombre_completo}"?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Activar!",reverseButtons:!0}).then(async r=>{if(r.isConfirmed)try{o.estatus_empleado=!0,await f(e.empleado_maof,o),await i(),s.fire("¡Activo!","El usuario se Activó","success")}catch(n){s.fire("Error",`${n.response.data.detail}`,"error")}}),e.estatus_empleado==="Activo"&&s.fire({title:`Estás seguro que desea inactivar al usuario "${e.nombre_completo}"?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Inactivar!",reverseButtons:!0}).then(async r=>{if(r.isConfirmed)try{o.estatus_empleado=!1,await f(e.empleado_maof,o),await i(),s.fire("¡Inactivo!","El usuario se inactivó","success")}catch(n){s.fire("Error",`${n.response.data.detail}`,"error")}})}}],m=()=>l.push({name:"NewUsersRolesMAOF"});return i(),{userAndRols:c,userAndRolStatus:o,featureOptions:p,headers:d,goToNewUserAndRols:m}}},I={class:"px-4 mt-10"},M={class:"flex justify-between"},R={class:"px-4"};function T(l,d,c,o,i,p){const m=t("arrow-back"),e=t("home-page"),r=t("logout-component"),n=t("title-bar"),b=t("button-base"),h=t("table-base");return x(),O("main",I,[u("div",M,[a(m),u("div",null,[a(e),a(r)])]),a(n,{title:"Usuarios y Roles MAOF",subtitle:"Inicio"}),u("section",R,[a(b,{label:"Alta de usuarios MAOF",onClick:o.goToNewUserAndRols,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),a(h,{options:o.featureOptions,headers:o.headers,data:o.userAndRols},null,8,["options","headers","data"])])])}const P=C(F,[["render",T]]);export{P as default};