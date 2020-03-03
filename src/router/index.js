import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'MarkDownListComponent',
    component: () => import('../components/mark-down/mark-down-list/mark-down-list.vue')
  },
  {
    path: '/markdown-add',
    name: 'MarkDownAddComponent',
    component: () => import('../components/mark-down/mark-down-add/mark-down-add.vue')
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
