import axios from 'axios';
// import router from '../../router';


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
  authLogout(state) {
    state.status = '';
    state.userInfo = null;
  },
};

const actions = {
  authenticate({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('authRequest');
      axios
      .post('http://localhost:3000/api/login', user)
      .then(res => {
        commit('authSuccess', res.data);
        // router.push("/");
        resolve(res);
      })
      .catch((error) => {
          commit('authError');
          reject(error);
      });
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('authLogout');
      axios
        .get('http://localhost:3000/api/logout')
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
      // resolve();
    });
  },
};

const getters = {
  getUserInfo(state) {
    return state.userInfo;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
