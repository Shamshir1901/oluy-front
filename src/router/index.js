import { createRouter, createWebHistory } from 'vue-router'
import MainRow from "@/components/MainRow.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainRow
    },
    {
      path: '/elonber',
      component: () => import('../pages/ElonBer.vue')
    },
    {
      path: '/sotuv',
      component: () => import('../pages/SotuvPage.vue')
    },
    {
      path: '/yangiUylar',
      component: () => import('../pages/YangiUylar.vue')
    },
    {
      path: "/yordam",
      component: () => import('../pages/YordamPage.vue')
    },
    {
      path: "/signUp",
      component: () => import('../pages/SignUp.vue')
    }
  ]
})

export default router
