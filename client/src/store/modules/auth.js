import axios from "axios";

const state = {
  authStatus: "",
  regStatus: "",
  user: null
};

const mutations = {
  // Authentication mutations
  authRequest(state) {
    state.authStatus = "loading";
  },
  authSuccess(state, value) {
    state.user = value;
    state.authStatus = "success";
  },
  authError(state) {
    state.authStatus = "error";
  },
  authLogout(state) {
    state.authStatus = "";
    state.regStatus = "";
    state.user = null;
  },
  // Register mutations
  regRequest(state) {
    state.regStatus = "loading";
  },
  regSuccess(state) {
    state.regStatus = "success";
  },
  regError(state) {
    state.regStatus = "error";
  }
};

const actions = {
  async authenticate({ commit }, user) {
    commit("authRequest");
    return new Promise((resolve, reject) => {
      axios
        .post("https://morning-harbor-19907.herokuapp.com/api/login", user, {
          withCredentials: true
        })
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
        .get("https://morning-harbor-19907.herokuapp.com/api/logout")
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
      resolve();
    });
  },
  createUser({ commit }, userValues) {
    commit("regRequest");
    return new Promise((resolve, reject) => {
      axios
        .post(
          "https://morning-harbor-19907.herokuapp.com/api/register",
          userValues,
          {
            withCredentials: true
          }
        )
        .then(res => {
          commit("regSuccess");
          resolve(res);
        })
        .catch(() => {
          commit("regError");
          reject(null);
        });
      resolve();
    });
  }
};

const getters = {
  getUserData: state => state.user
};

export default {
  state,
  mutations,
  actions,
  getters
};
