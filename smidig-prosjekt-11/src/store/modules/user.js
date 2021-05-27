const state = {
  isAdmin: false,
  campName: null,
  username: null
};

const mutations = {
  logout(state) {
    state.userId = null;
  },
  login(state, userData) {
    const { admin, campName, username } = userData;
    state.isAdmin = admin;
    state.campName = campName;
    state.username = username;
  }
};
const getters = {
  getUsername: state => state.username,
  getIsAdmin: state => state.isAdmin
};

export default {
  state,
  mutations,
  getters
};
