import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router';
import FormView from '@/views/FormView.vue';
import ProfileView from '@/views/ProfileView.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: { name: 'form' }
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
})

export default router
