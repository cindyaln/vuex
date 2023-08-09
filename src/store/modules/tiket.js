import axios from "axios";

const tiket = {
  namespaced: true,
  state: {
    tiketData: [],
  },
  getters: {
    getTiket: (state) => state.tiketData,
  },
  actions: {
    async fetchTiket({ commit }) {
      try {
        const data = await axios.get(
          "https://booking.kai.id/api/stations2"
        );
        commit("SET_TIKET", data.data);
      } catch (error) {
        alert(error);
        console.log(error)
      }
    },
  },
  mutations: {
    SET_TIKET(state, tiket) {
      state.tiketData = tiket;
    },
  },
};

export default tiket; 