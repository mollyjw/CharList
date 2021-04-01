import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import AllChar from '../views/AllChar.vue';
import About from '../views/About.vue';
import AddChar from '../views/AddChar.vue'
import OneChar from '../views/OneChar.vue'

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
    component: OneChar
  },
  {
    path: '/add',
    name: 'AddChar',
    component: AddChar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: "",
  routes
})

export default router
