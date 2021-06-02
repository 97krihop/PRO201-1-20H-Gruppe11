import { get, post } from "axios";

const state = {
  data: null
};

const mutations = {
  setData(state, value) {
    state.data = value;
  }
};
const getters = {
  getProductData: state => state.data
};
const actions = {
  fetchProductData: async context => {
    await post(
      "http://localhost:3000/api/login",
      {
        username: "bright",
        password: "admin"
      },
      { withCredentials: true }
    );
    const res = await get(
      "http://localhost:3000/api/statistics/Repairs-by-month",
      {
        withCredentials: true
      }
    );
    if (res.status === 200) context.commit("setData", res.data);
  }
};

export default {
  state,

  mutations,
  getters,
  actions
};
