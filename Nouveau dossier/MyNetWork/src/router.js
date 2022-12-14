import Home from './components/Home.vue'
import Login from './components/Login.vue'
import SignUp from "./components/SignUp.vue"
import Articles from "./components/elements/Articles.vue"
import AddArticle from "./components/AddArticle.vue"
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        name: 'Home',
        path: "/",
        component: Home,
    },
    {
        name: 'Login',
        path: "/login",
        component: Login,
    },
    {
        name: 'SignUp',
        path: "/sign-up",
        component: SignUp,
    },
    {
        name: 'Articles',
        path: "/articles",
        component: Articles,
    },
    {
        name: 'AddArticle',
        path: "/addarticle",
        component: AddArticle,
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
