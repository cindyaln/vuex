import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import users from "./modules/users";
import tiket from "./modules/tiket";
import product from "./modules/pruduct";
import kategori from "./modules/kategori";

const store = createStore ({
    state: {
        isLoading: false,
    },
    modules: {
        donatur,
        clients,
        transaksi,
        users,
        tiket,
        product,
        kategori,
    },
});

export default store; 