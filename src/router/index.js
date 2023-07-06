import { createRouter, createWebHistory } from "vue-router";
import { parseToken, startLogoutTimer } from "../utils/refreshToken";
import { auth } from "../store/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./../views/Home.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      requiresAuth: false, // No requiere autenticación
    },
  },

  {
    path: "/proyectos",
    name: "Projects",
    component: () => import("./../views/Project/Index.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/proyectos/nuevo",
    name: "NewProject",
    component: () => import("./../views/Project/New.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/proyectos/:projectId",
    name: "EditProject",
    component: () => import("./../views/Project/Edit.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/contratos",
    name: "Contracts",
    component: () => import("./../views/Contract/Index.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/contratos/nuevo",
    name: "NewContract",
    component: () => import("./../views/Contract/New.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/contratos/:contractId",
    name: "EditContract",
    component: () => import("./../views/Contract/Edit.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/areas-revisoras",
    name: "ReviewAreas",
    component: () => import("./../views/ReviewArea/Index.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
      
    },
  },
  {
    path: "/areas-revisoras/nuevo",
    name: "NewReviewArea",
    component: () => import("./../views/ReviewArea/New.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/areas-revisoras/:reviewAreaId",
    name: "EditReviewArea",
    component: () => import("./../views/ReviewArea/Edit.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/residente",
    name: "Resident",
    component: () => import("./../views/Resident/Index.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/residente/nuevo",
    name: "NewResident",
    component: () => import("./../views/Resident/New.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/residente/:residentId",
    name: "EditResident",
    component: () => import("./../views/Resident/Edit.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/asginacion-residente",
    name: "AssignResident",
    component: () => import("./../views/AssignResident/Index.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/asginacion-residente/nuevo",
    name: "NewAssignResident",
    component: () => import("./../views/AssignResident/New.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/asginacion-residente/:assingResidentId",
    name: "EditAssignResident",
    component: () => import("./../views/AssignResident/Edit.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/asginacion-residente/delete/:assingResidentId",
    name: "DeleteAssignResident",
    component: () => import("./../views/AssignResident/Delete.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/convenio-colaboracion",
    name: "CollaborationAgreements",
    component: () => import("./../views/CollaborationAgreements/Index.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
      
    },
  },
  {
    path: "/convenio-colaboracion/nuevo",
    name: "NewCollaborationAgreements",
    component: () => import("./../views/CollaborationAgreements/New.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/convenio-colaboracion/:collaborationAgreementsId",
    name: "EditCollaborationAgreements",
    component: () => import("./../views/CollaborationAgreements/Edit.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/convenio-modificatorio",
    name: "AmendingAgreement",
    component: () => import("./../views/AmendingAgreement/Index.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/convenio-modificatorio/nuevo",
    name: "NewAmendingAgreement",
    component: () => import("./../views/AmendingAgreement/New.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/convenio-modificatorio/:amendingAgreementId",
    name: "EditAmendingAgreement",
    component: () => import("./../views/AmendingAgreement/Edit.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/convenio-modificatorio/detalles/:amendingAgreementId",
    name: "DetallesAmendingAgreement",
    component: () => import("./../views/AmendingAgreement/Detalles.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Obras y Contratos'
    },
  },
  {
    path: "/estimacion-residente",
    name: "ResidentEstimate",
    component: () => import("./../views/ResidentEstimate/Index.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/estimacion-residente/nuevo",
    name: "NewResidentEstimate",
    component: () => import("./../views/ResidentEstimate/New.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Residente'
    },
  },
  {
    path: "/estimacion-residente/nuevo/:residentEstimateId",
    name: "NewResidentEstimateById",
    component: () => import("./../views/ResidentEstimate/NewById.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/estimacion-residente/:residentEstimateId",
    name: "EditResidentEstimate",
    component: () => import("./../views/ResidentEstimate/Edit.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/estimacion-residente/files/:residentEstimateId",
    name: "FilesResidentEstimate",
    component: () => import("./../views/ResidentEstimate/Files.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/estimacion-residente/historico/:residentEstimateId",
    name: "HistoricoResidentEstimate",
    component: () => import("./../views/ResidentEstimate/Historico.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/unidades-maof",
    name: "UnitsMAOF",
    component: () => import("./../views/UnitsMAOF/Index.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Administrador MAOF'
    },
  },
  {
    path: "/unidades-maof/nuevo",
    name: "NewUnitMAOF",
    component: () => import("./../views/UnitsMAOF/New.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Administrador MAOF'
    },
  },
  {
    path: "/unidades-maof/:unityMAOFId",
    name: "EditUnitMAOF",
    component: () => import("./../views/UnitsMAOF/Edit.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Administrador MAOF'
    },
  },
  {
    path: "/usuarios-roles-maof",
    name: "UsersRolesMAOF",
    component: () => import("./../views/UsersAndRolsMAOF/Index.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Administrador MAOF'
    },
  },
  {
    path: "/usuarios-roles-maof/nuevo",
    name: "NewUsersRolesMAOF",
    component: () => import("./../views/UsersAndRolsMAOF/New.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Administrador MAOF'
    },
  },
  {
    path: "/usuarios-roles-maof/:userRolMAOFId",
    name: "EditUsersRolesMAOF",
    component: () => import("./../views/UsersAndRolsMAOF/Edit.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
      requiresRol: 'Administrador MAOF'
    },
  },
  {
    path: "/consultas",
    name: "ConsultasMAOF",
    component: () => import("./../views/Consulta/Index.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/consultas/pendientes",
    name: "ConsultasPedientesMAOF",
    component: () => import("./../views/Consulta/Pendiente.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/consultas/pagadas",
    name: "ConsultasPagadosMAOF",
    component: () => import("./../views/Consulta/Pagada.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/consultas/totales",
    name: "ConsultasTotalesMAOF",
    component: () => import("./../views/Consulta/Total.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/consultas/busqueda",
    name: "ConsultasBusquedaMAOF",
    component: () => import("../views/Consulta/BusquedaResult.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  {
    path: "/consultas/responsable_estimacion",
    name: "ResponsableEstimacionMAOF",
    component: () => import("../views/Consulta/ResponsableEstimacion.vue"),
    meta: {
      requiresAuth: true, // Requiere autenticación
    },
  },
  /*
  {
    path: '/areas-revisoras/:reviewAreaId',
    name: 'EditReviewArea',
    component: () => import('./../views/ReviewArea/Edit.vue'),
  }, */
];

const router = createRouter({
  history: createWebHistory("/maof/"),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth; // Verificar si la ruta requiere autenticación
  const store = auth();
  const requiresRol = to.meta.requiresRol
  store.setInfo()
  const { access, rol } = store.getAuthData; /* verifica si el usuario tiene un token válido */

  if (requiresAuth && !access) {
    // Redireccionar al componente de inicio de sesión
    next({ name: "Login" });
  } else if (access) {
    //Acciones para el tokenRefresh
    const refreshToken = parseToken(access);
    startLogoutTimer(refreshToken.exp);
    if(requiresRol == null || rol.includes(requiresRol))
      next();
    else{
      next({ name: "Home" });
    }
  } else {
    next();
  }
});

export default router;
