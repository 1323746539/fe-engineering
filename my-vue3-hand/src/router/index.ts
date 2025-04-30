import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
const TestTable = () => import('../views/TestTable.vue');
const TestSelect = () => import('../views/TestSelect.vue');
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/test-table',
        name: 'TestTable',
        component: TestTable,
    },
    {
        path: '/test-select',
        name: 'TestSelect',
        component: TestSelect,
    },
];

const router = createRouter({
    history: createWebHistory(), // 使用历史模式
    routes, // （缩写）相当于 routes: routes
});

export default router;
