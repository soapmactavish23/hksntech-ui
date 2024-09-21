import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('@/views/home/HomeView.vue')
                },
                {
                    path: '/who',
                    name: 'who',
                    component: () => import('@/views/WhoView.vue')
                },
                {
                    path: '/values',
                    name: 'values',
                    component: () => import('@/views/ValueView.vue')
                }
            ]
        }
    ]
});

export default router;
