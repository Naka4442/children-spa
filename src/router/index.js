import { createRouter, createWebHistory } from "vue-router";

import Auth from "../views/Auth.vue";
import Cabinet from "../views/Cabinet.vue";

const routes = [
    {
        path : "/auth",
        component : Auth,
        name : "auth"
    },
    {
        path : "/cabinet",
        component : Cabinet,
        name : "cabinet"
    }
];

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
});

export default router;