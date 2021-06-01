import axios from "axios";
// import router from '../../router';

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
    // await axios({
    //   method: 'post',
    //   url: 'http://localhost:3000/api/login',
    //   data: user
    // }).then(res => {
    //   const ud = { admin: res.data.admin, campName: res.data.campName, username: res.data.username };
    //   console.log(ud);
    //   commit("authSuccess", ud);
    //   router.push('/');
    // })

    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:3000/api/login", user)
        .then(res => {
          commit("authSuccess", res.data);
          // router.push("/");
          resolve(res);
        })
        .catch(error => {
          console.log(error);
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
      // resolve();
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
