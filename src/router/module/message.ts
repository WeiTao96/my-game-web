import { RouteConfig } from 'vue-router'
import Battle from "@/views/message/battle.vue"
import Event from "@/views/message/event.vue"
import Commission from "@/views/message/commission.vue"
import Layout from '@/layout/index.vue'
const messageRoutes: RouteConfig =
{
    path: '/message',
    name: 'Message',
    redirect: '/message/event',
    component: Layout,
    meta: {
        title: '消息'
    },
    children: [
        {
            path: 'event',
            name: 'Event',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Event,
            meta: {
                title: '事件'
            },
        },
        {
            path: 'commission',
            name: 'Commission',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Commission,
            meta: {
                title: '委托'
            },
        },
        {
            path: 'battle',
            name: 'Battle',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Battle,
            meta: {
                title: '战斗结果'
            },
        },
    ]
}


export default messageRoutes
