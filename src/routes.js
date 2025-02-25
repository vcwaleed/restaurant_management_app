import { createWebHistory, createRouter } from 'vue-router'
import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import LoginIn from './components/LoginIn.vue';
import AddRestaurant from './components/AddRestaurant.vue';
import UpdateRestaurant from './components/UpdateRestaurant.vue';

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'SignUp',
        path: '/signup',
        component: SignUp
    },
    {
        name: 'LoginIn',
        path: '/login',
        component: LoginIn
    },
    {
        name: 'AddRestaurant',
        path: '/addrestaurant',
        component: AddRestaurant
    },
    {
        name: 'UpdateRestaurant',
        path: '/updaterestaurant/:id',
        component: UpdateRestaurant
    }


]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
