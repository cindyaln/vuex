import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import Tiket from "../views/Tiket.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/users",
        name: "Users",
        component: Users,
    },
    {
        path: "/tiket",
        name: "Tiket",
        component: Tiket,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 