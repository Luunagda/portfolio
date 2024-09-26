import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
    {
      path: '/a-propos',
      name: 'a-propos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AProposView.vue')
    },
    {
      path: '/projets',
      name: 'projets',
      component: () => import('../views/ProjetsView.vue')
    }
  ]
})

export default router
