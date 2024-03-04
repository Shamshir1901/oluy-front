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
    }
  ]
})

export default router
