import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import Tiket from "../views/Tiket.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Kategori from "../views/Kategori.vue";

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
    {
        path: "/product",
        name: "Product",
        component: Product,
    },
    {
        path: "/product/:id",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 