import { RouteConfig } from 'vue-router'
import Spots from "@/views/travel/spots.vue"

import Layout from '@/layout/index.vue'
const travelRoutes: RouteConfig =
{
    path: '/travel',
    name: 'Travel',
    redirect: '/travel/spots',
    component: Layout,
    meta: {
        title: '游历'
    },
    children: [
        {
            path: 'spots',
            name: 'Spots',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Spots,
            meta: {
                title: '地点'
            },
        }
    ]
}


export default travelRoutes
