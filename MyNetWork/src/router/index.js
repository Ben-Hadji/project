import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'About',
        path: '/',
        component: About,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;