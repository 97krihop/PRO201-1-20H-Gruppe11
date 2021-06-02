import { post, get } from "axios";

const state = {
  allRepairs: []
};

const mutations = {
  addRepairs(state, payload) {
    state.allRepairs = payload;
  },
  emptyArray(state) {
    state.allRepairs = [];
  }
};

const getters = {
  getAllRepairs(state) {
    return state.allRepairs;
  }
};

const actions = {
  fetchAllRepairs: async function({ commit }) {
    try {
      await post(
        "http://localhost:3000/api/login",
        {
          username: "bright",
          password: "admin"
        },
        { withCredentials: true }
      );
      const res = await get("http://localhost:3000/api/parts", {
        withCredentials: true
      });
      const data = res.data;
      commit("addRepairs", data);
      return res.status === 200;
    } catch (e) {
      return false;
    }
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
