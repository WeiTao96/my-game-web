import { RouteConfig } from 'vue-router'
import ForcesManage from "@/views/forces/manage.vue"

import Layout from '@/layout/index.vue'
const forcesRoutes: RouteConfig =
{
    path: '/forces',
    name: 'Forces',
    redirect: '/forces/forcesmanage',
    component: Layout,
    meta: {
        title: '势力'
    },
    children: [
        {
            path: 'forcesmanage',
            name: 'ForcesManage',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: ForcesManage,
            meta: {
                title: '势力'
            },
        }
    ]
}


export default forcesRoutes
