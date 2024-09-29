import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProjetDetail from '../views/ProjetDetailView.vue'

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
    },
    {
      path: '/projets/:slug',
      name: 'ProjetDetail',
      component: ProjetDetail,
      props: true, // Permet de passer des props à la route
    }
  ]
})

export default router
