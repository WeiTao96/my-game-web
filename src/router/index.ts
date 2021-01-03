import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '@/layout/index.vue'

import assetsRoutes from './module/assets'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '门派'
    },
    children: [
      {
        path: 'home',
        name: 'myHome',
        component: Home,
        meta: {
          title: '首页'
        },
      },
      {
        path: 'follower',
        name: 'Follower',
        component: () => import(/* webpackChunkName: "about" */ '@/views/gang/follower.vue'),
        meta: {
          title: '帮众'
        },
      },
      {
        path: 'peopleNetwork',
        name: 'PeopleNetwork',
        component: () => import(/* webpackChunkName: "about" */ '@/views/gang/peopleNetwork.vue'),
        meta: {
          title: '关系谱'
        },
      }
    ]
  },

  assetsRoutes,
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '关于'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
