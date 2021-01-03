import { RouteConfig } from 'vue-router'
import MovesManage from "@/views/moves/manage.vue"

import Layout from '@/layout/index.vue'
const movesRoutes: RouteConfig =
{
    path: '/moves',
    name: 'moves',
    redirect: '/moves/movesmanage',
    component: Layout,
    meta: {
        title: '招式'
    },
    children: [
        {
            path: 'movesmanage',
            name: 'movesManage',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: MovesManage,
            meta: {
                title: '招式'
            },
        }
    ]
}


export default movesRoutes
