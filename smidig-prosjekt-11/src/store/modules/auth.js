import axios from "axios";

const state = {
  status: "",
  userData: null
};

const mutations = {
  authRequest(state) {
    state.status = "loading";
  },
  authSuccess(state, userData) {
    state.userData = userData;
    state.status = "success";
  },
  authError(state) {
    state.status = "error";
    state.userData = null;
  },
  authLogout(state) {
    state.status = "";
    state.userData = null;
  }
};

const actions = {
  async authenticate({ commit }, user) {
    commit("authRequest");
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:3000/api/login", user)
        .then(res => {
          commit("authSuccess", res.data);
          resolve(res);
        })
        .catch(error => {
          commit("authError");
          reject(error);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit("authLogout");
      axios
        .get("http://localhost:3000/api/logout")
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
      resolve();
    });
  }
};

const getters = {
  getUserData(state) {
    return state.userData;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
