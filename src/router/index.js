import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./../views/Home.vue'),
  },
  {
    path: '/proyectos',
    name: 'Projects',
    component: () => import('./../views/Project/Index.vue'),
  },
  {
    path: '/proyectos/nuevo',
    name: 'NewProject',
    component: () => import('./../views/Project/New.vue'),
  },
  {
    path: '/proyectos/:projectId',
    name: 'EditProject',
    component: () => import('./../views/Project/Edit.vue'),
  },
  {
    path: '/contratos',
    name: 'Contracts',
    component: () => import('./../views/Contract/Index.vue'),
  },
  {
    path: '/contratos/nuevo',
    name: 'NewContract',
    component: () => import('./../views/Contract/New.vue'),
  },
  {
    path: '/contratos/:contractId',
    name: 'EditContract',
    component: () => import('./../views/Contract/Edit.vue'),
  },
  {
    path: '/areas-revisoras',
    name: 'ReviewAreas',
    component: () => import('./../views/ReviewArea/Index.vue'),
  },
  {
    path: '/areas-revisoras/nuevo',
    name: 'NewReviewArea',
    component: () => import('./../views/ReviewArea/New.vue'),
  },
  {
    path: '/areas-revisoras/:reviewAreaId',
    name: 'EditReviewArea',
    component: () => import('./../views/ReviewArea/Edit.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
