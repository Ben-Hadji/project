import Home from './components/Home.vue';
import SignUp from './components/Signup.vue';
import Add from './components/Add.vue';
import { createRouter, createWebHistory } from "vue-router";
import Update from './components/Update.vue';

const routes = [
    {
        name: "Home",
        path: '/',
        component: Home
    },
    {
        name: 'Add',
        path: '/add',
        component: Add
    },
    {
        name: 'SignUp',
        path: '/signup',
        component: SignUp
    },
    {
        name: 'Update',
        path: '/update',
        component: Update
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

//import dayjs from 'dayjs';

//export default {
//    methods: {
//        formatDate(dateString) {
//            const date = dayjs(dateString);
//            // Then specify how you want your dates to be formatted
//            return date.format('dddd MMMM D, YYYY');
//        }
//    }
//}
