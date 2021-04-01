import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import AllChar from '../views/AllChar.vue';
import About from '../views/About.vue';
import AddChar from '../views/AddChar.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/characters/all',
    name: 'All Characters',
    component: AllChar
  },
  {
    path: '/characters/:id',
    name: 'OneChar',
  },
  {
    path: '/characters/add}',
    name: 'AddChar',
    component: AddChar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
