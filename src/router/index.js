import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/user/index.vue";
import UserCreate from "../views/user/Create.vue"
import Tiket from "../views/Tiket.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Category from "../views/Category.vue";
import FilterPageKategori from "../views/FilterPageKategori.vue";
import Login from "../views/Login.vue";
import store from "../store";

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
        meta: { requiresGuest: false },
    },
    {
        path: "/users/create",
        name: "UserCreate",
        component: UserCreate,
        meta: { requiresGuest: false },
    },
    {
        path: "/tiket",
        name: "Tiket",
        component: Tiket,
    },
    {
        path: "/produk",
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
        name: "Category",
        component: Category,
    },
    {
        path: "/category/:category",
        name: "FilterCategory",
        component: FilterPageKategori,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true },
    },
    
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
        next("/"); // redicet to home
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login"); // redicet to home
    } else {
        next();
    }
});

export default router; 