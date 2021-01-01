import { RouteConfig } from 'vue-router'
import Land from "@/views/assets/land.vue"
import Layout from '@/layout/index.vue'
const assetsRoutes: RouteConfig =
{
    path: '/assets',
    name: 'Assets',
    redirect: '/assets/land',
    component: Layout,
    meta: {
        title: '资产'
    },
    children: [
        {
            path: 'land',
            name: 'Land',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Land,
            meta: {
                title: '土地'
            },
        },
        {
            path: 'treasure',
            name: 'Treasure',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '@/views/assets/treasure.vue'),
            meta: {
                title: '珍宝'
            },
        },
        {
            path: 'good',
            name: 'Good',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '@/views/assets/good.vue'),
            meta: {
                title: '杂物'
            },
        },
    ]
}


export default assetsRoutes
