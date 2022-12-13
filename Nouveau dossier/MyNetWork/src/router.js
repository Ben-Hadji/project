import Home from './components/Home.vue'
import SignUp from "./components/SignUp.vue"
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        path: "/",
        component: Home,
    },
    {
        name: 'SignUp',
        path: "/Sign-up",
        component: SignUp,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
