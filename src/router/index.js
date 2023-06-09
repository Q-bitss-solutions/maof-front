import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/proyectos",
    name: "Projects",
    component: () => import("./../views/Project/Index.vue"),
  },
  {
    path: "/proyectos/nuevo",
    name: "NewProject",
    component: () => import("./../views/Project/New.vue"),
  },
  {
    path: "/proyectos/:projectId",
    name: "EditProject",
    component: () => import("./../views/Project/Edit.vue"),
  },
  {
    path: "/contratos",
    name: "Contracts",
    component: () => import("./../views/Contract/Index.vue"),
  },
  {
    path: "/contratos/nuevo",
    name: "NewContract",
    component: () => import("./../views/Contract/New.vue"),
  },
  {
    path: "/contratos/:contractId",
    name: "EditContract",
    component: () => import("./../views/Contract/Edit.vue"),
  },
  {
    path: "/areas-revisoras",
    name: "ReviewAreas",
    component: () => import("./../views/ReviewArea/Index.vue"),
  },
  {
    path: "/areas-revisoras/nuevo",
    name: "NewReviewArea",
    component: () => import("./../views/ReviewArea/New.vue"),
  },
  {
    path: "/areas-revisoras/:reviewAreaId",
    name: "EditReviewArea",
    component: () => import("./../views/ReviewArea/Edit.vue"),
  },
  {
    path: "/residente",
    name: "Resident",
    component: () => import("./../views/Resident/Index.vue"),
  },
  {
    path: "/residente/nuevo",
    name: "NewResident",
    component: () => import("./../views/Resident/New.vue"),
  },
  {
    path: "/residente/:residentId",
    name: "EditResident",
    component: () => import("./../views/Resident/Edit.vue"),
  },
  {
    path: "/asginacion-residente",
    name: "AssignResident",
    component: () => import("./../views/AssignResident/Index.vue"),
  },
  {
    path: "/asginacion-residente/nuevo",
    name: "NewAssignResident",
    component: () => import("./../views/AssignResident/New.vue"),
  },
  {
    path: "/asginacion-residente/:assingResidentId",
    name: "EditAssignResident",
    component: () => import("./../views/AssignResident/Edit.vue"),
  },
  {
    path: "/asginacion-residente/delete/:assingResidentId",
    name: "DeleteAssignResident",
    component: () => import("./../views/AssignResident/Delete.vue"),
  },
  {
    path: "/convenio-colaboracion",
    name: "CollaborationAgreements",
    component: () => import("./../views/CollaborationAgreements/Index.vue"),
  },
  {
    path: "/convenio-colaboracion/nuevo",
    name: "NewCollaborationAgreements",
    component: () => import("./../views/CollaborationAgreements/New.vue"),
  },
  {
    path: "/convenio-colaboracion/:collaborationAgreementsId",
    name: "EditCollaborationAgreements",
    component: () => import("./../views/CollaborationAgreements/Edit.vue"),
  },
  {
    path: "/convenio-modificatorio",
    name: "AmendingAgreement",
    component: () => import("./../views/AmendingAgreement/Index.vue"),
  },
  {
    path: "/convenio-modificatorio/nuevo",
    name: "NewAmendingAgreement",
    component: () => import("./../views/AmendingAgreement/New.vue"),
  },
  {
    path: "/convenio-modificatorio/:amendingAgreementId",
    name: "EditAmendingAgreement",
    component: () => import("./../views/AmendingAgreement/Edit.vue"),
  },
  {
    path: "/convenio-modificatorio/detalles/:amendingAgreementId",
    name: "DetallesAmendingAgreement",
    component: () => import("./../views/AmendingAgreement/Detalles.vue"),
  },
  {
    path: "/estimacion-residente",
    name: "ResidentEstimate",
    component: () => import("./../views/ResidentEstimate/Index.vue"),
  },
  {
    path: "/estimacion-residente/nuevo",
    name: "NewResidentEstimate",
    component: () => import("./../views/ResidentEstimate/New.vue"),
  },
  {
    path: "/estimacion-residente/nuevo/:residentEstimateId",
    name: "NewResidentEstimateById",
    component: () => import("./../views/ResidentEstimate/NewById.vue"),
  },
  {
    path: "/estimacion-residente/:residentEstimateId",
    name: "EditResidentEstimate",
    component: () => import("./../views/ResidentEstimate/Edit.vue"),
  },
  {
    path: "/estimacion-residente/files/:residentEstimateId",
    name: "FilesResidentEstimate",
    component: () => import("./../views/ResidentEstimate/Files.vue"),
  },
  {
    path: "/estimacion-residente/historico/:residentEstimateId",
    name: "HistoricoResidentEstimate",
    component: () => import("./../views/ResidentEstimate/Historico.vue"),
  },
  {
    path: "/unidades-maof",
    name: "UnitsMAOF",
    component: () => import("./../views/UnitsMAOF/Index.vue"),
  },
  {
    path: "/unidades-maof/nuevo",
    name: "NewUnitMAOF",
    component: () => import("./../views/UnitsMAOF/New.vue"),
  },
  {
    path: "/unidades-maof/:unityMAOFId",
    name: "EditUnitMAOF",
    component: () => import("./../views/UnitsMAOF/Edit.vue"),
  },
  {
    path: "/usuarios-roles-maof",
    name: "UsersRolesMAOF",
    component: () => import("./../views/UsersAndRolsMAOF/Index.vue"),
  },
  {
    path: "/usuarios-roles-maof/nuevo",
    name: "NewUsersRolesMAOF",
    component: () => import("./../views/UsersAndRolsMAOF/New.vue"),
  },
  {
    path: "/usuarios-roles-maof/:userRolMAOFId",
    name: "EditUsersRolesMAOF",
    component: () => import("./../views/UsersAndRolsMAOF/Edit.vue"),
  },
  {
    path: "/consultas",
    name: "ConsultasMAOF",
    component: () => import("./../views/Consulta/Index.vue"),
  },
  {
    path: "/consultas/pendientes",
    name: "ConsultasPedientesMAOF",
    component: () => import("./../views/Consulta/Pendiente.vue"),
  },
  {
    path: "/consultas/pagadas",
    name: "ConsultasPagadosMAOF",
    component: () => import("./../views/Consulta/Pagada.vue"),
  },
  {
    path: "/consultas/totales",
    name: "ConsultasTotalesMAOF",
    component: () => import("./../views/Consulta/Total.vue"),
  },
  /*
  {
    path: '/areas-revisoras/:reviewAreaId',
    name: 'EditReviewArea',
    component: () => import('./../views/ReviewArea/Edit.vue'),
  }, */
];

const router = createRouter({
  history: createWebHistory(
    import.meta.env.NODE_ENV === 'production'
      ? import.meta.env.VITE_PREFIX_URL
      : '/'
  ),
  routes,
});

export default router;
