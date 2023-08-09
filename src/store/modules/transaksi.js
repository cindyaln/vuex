const transaksi = {
    namespaced: true,
    state: {
        listTransaksi: [
            {
                id: "TRX1P1",
                donatur: "anugrah sandi",
                bantuan: "gempa lombok",
                jumlah: 100000,
            },
            {
                id: "TRX1P2",
                donatur: "darma",
                bantuan: "banjir bandang",
                jumlah: 250000,
            },
            {
                id: "TRX1P3",
                donatur: "asis ramadhan",
                bantuan: "beasiswa pendidikan",
                jumlah: 300000,
            },
        ],
    },
    mutations: {
        ADD_DONASI: (state, payload) => {
            state.listTransaksi.push(payload);
        },
    },
    actions: {
        save_donasi({ commit, rootState }, payload) {
            rootState.isLoading = true;
            setTimeout(() => {
                commit("ADD_DONASI", payload);
                rootState.isLoading = false;
            }, 1000);
        },
    },
};

export default transaksi;