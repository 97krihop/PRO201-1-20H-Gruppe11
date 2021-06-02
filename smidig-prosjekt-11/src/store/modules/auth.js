import axios from "axios";

const state = {
  authStatus: "",
  regStatus: "",
  userData: null
};

const mutations = {
  // Authentication mutations
  authRequest(state) {
    state.authStatus = 'loading';
  },
  authSuccess(state, userData) {
    state.userData = userData;
    state.authStatus = 'success';
  },
  authError(state) {
    state.authStatus = 'error';
    state.userData = null;
  },
  authLogout(state) {
    state.authStatus = '';
    state.userData = null;
  },
  // Register mutations
  regRequest(state) {
    state.regStatus = 'loading';
  },
  regSuccess(state) {
    state.regStatus = 'success';
  },
  regError(state) {
    state.regStatus = 'error';
  },
};

const actions = {
  async authenticate({ commit }, user) {
    commit("authRequest");
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:3000/api/login", user, { withCredentials: true })
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
  },
  createUser({ commit }, userValues) {
    
    console.log('userValsVuex', userValues);
    commit('regRequest');
    return new Promise((resolve, reject) => {
      axios
        .post('http://localhost:3000/api/register', userValues, { withCredentials: true })
        .then((res) => {
          commit('regSuccess');
          resolve(res);
        })
        .catch((error) => {
          commit('regError');
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
