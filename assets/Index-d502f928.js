import{T as _}from"./TableBase-922fec4f.js";import{a as b,d as f}from"./users-3c033cee.js";import{A as B}from"./ArrowBack-b91ec425.js";import{B as h}from"./ButtonBase-f765b112.js";import{_ as w,u as v,r as p,a as n,o as A,c as C,g as i,b as E}from"./index-8bbcfa6b.js";import{T as U}from"./fetchApi-82b3411b.js";import{S as t}from"./sweetalert2.all-281a79b7.js";const O={name:"UsersRolesMAOFIndex",components:{TableBase:_,ArrowBack:B,ButtonBase:h,TitleBar:U},setup(){const l=v(),d=[{label:"Id",field:"empleado_maof"},{label:"Nombre",field:"nombre_completo"},{label:"Unidad MAOF",field:"unidad_maof"},{label:"Correo",field:"correo_electronico"},{label:"Rol MAOF",field:"rol_maof"},{label:"Estatus",field:"estatus_empleado"}],c=p([]),o=p({estatus_empleado:""}),r=async()=>{const{data:e}=await b();c.value=e},u=[{label:"Editar",action:e=>{console.log(e),l.push({name:"EditUsersRolesMAOF",params:{userRolMAOFId:e.empleado_maof}})}},{label:"Cambio Estatus",action:async e=>{e.estatus_empleado==="Activo"&&t.fire({title:`Estás seguro que desea inactivar al usuario "${e.nombre_completo}"?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Inactivar!",reverseButtons:!0}).then(async a=>{if(a.isConfirmed)try{o.estatus_empleado=2,await f(e.empleado_maof,o),await r(),t.fire("¡Inactivo!","El usuario se inactivó","success")}catch(s){t.fire("Error",`${s.response.data.detail}`,"error")}}),e.estatus_empleado==="Desactivado"&&t.fire({title:`Estás seguro que desea activar al usuario "${e.nombre_completo}"?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"¡Si, Activar!",reverseButtons:!0}).then(async a=>{if(a.isConfirmed)try{o.estatus_empleado=0,await f(e.id,o),await r(),t.fire("¡Activo!","El usuario se activó","success")}catch(s){t.fire("Error",`${s.response.data.detail}`,"error")}})}}],m=()=>l.push({name:"NewUsersRolesMAOF"});return r(),{userAndRols:c,userAndRolStatus:o,featureOptions:u,headers:d,goToNewUserAndRols:m}}},g={class:"px-4 mt-10"},x={class:"px-4"};function F(l,d,c,o,r,u){const m=n("arrow-back"),e=n("title-bar"),a=n("button-base"),s=n("table-base");return A(),C("main",g,[i(m),i(e,{title:"Usuarios y Roles MAOF",subtitle:"Inicio"}),E("section",x,[i(a,{label:"Alta de Usuarios MAOF",onClick:o.goToNewUserAndRols,class:"mb-3 mr-0 ml-auto"},null,8,["onClick"]),i(s,{options:o.featureOptions,headers:o.headers,data:o.userAndRols},null,8,["options","headers","data"])])])}const S=w(O,[["render",F]]);export{S as default};
