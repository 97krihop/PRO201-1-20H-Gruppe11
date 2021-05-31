import axios from 'axios';

const state = {
  status: '',
  userInfo: null,
};

const mutations = {
  authRequest(state) {
    state.status = 'loading';
  },
  authSuccess(state, userInfo) {
    state.status = 'success';
    state.userInfo = userInfo;
  },
  authError(state) {
    state.status = 'error';
    state.userInfo = null;
  },
};

const actions = {
  authenticate({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('authRequest');
      axios
        .post('http://localhost:3000/api/login', user)
        .then((res) => {
          commit('authSuccess', res.data);
          resolve(res);
        })
        .catch((error) => {
          commit('authError');
          reject(error)
        });
    });
  },
};

const getters = {
  getUserInfo(state) {
    return state.userInfo;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
