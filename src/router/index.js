import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
    // {
    //     path: '*',
    //     redirect: '/404'
    // },
    {
        path: '/404',
        name: 'NotFound',
        component: () => import('@/pages/404.vue')
    },
    {
        path: '/adminsetting',
        name: 'admin-setting',
        component: () => import('@/pages/AdminSetting.vue'),
        children: [
            {
                // /user/user-setting과 일치할 때
                // user-setting은 <router-view 내에 렌더링됩니다.
                path: 'users',
                component: () => import('@/pages/AdminUsersSetting.vue')
            },
            {
                path: 'auth',
                component: () => import('@/pages/AdminAuthSetting.vue')
            },
            {
                path: 'report',
                component: () => import('@/pages/AdminReportSetting.vue')
            },
            {
                path: 'chart',
                component: () => import('@/pages/AdminChartSetting.vue')
            },
            {
                path: 'user',
                component: () => import('@/pages/UserSetting.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'LOGIN',
        component: () => import('@/pages/Login.vue')
    },
    {
        path: '/chart',
        name: 'CHART',
        component: () => import('@/pages/Chart.vue')
    },
    {
        path: '/',
        name: 'FUEL CELL',
        component: () => import('@/pages/Main.vue')
    },
    {
        path: '/group',
        name: 'GROUP',
        component: () => import('@/pages/Group.vue')
    },
    {
        path: '/usersetting',
        name: 'user-setting',
        component: () => import('@/pages/UserSetting.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes
});

export default router;
