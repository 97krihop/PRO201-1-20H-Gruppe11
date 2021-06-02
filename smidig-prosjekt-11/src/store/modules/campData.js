import { get, post } from "axios";

const state = {
  data: null,
  dataOfSelected: null
};

const mutations = {
  setCampData(state, value) {
    state.data = value;
  },
  setSelectedData(state, value) {
    state.dataOfSelected = value;
  }
};
const getters = {
  getCampData: state => state.data,
  getSelectedData: state => state.dataOfSelected
};
const actions = {
  fetchCampData: async context => {
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
    if (res.status === 200) context.commit("setCampData", res.data);
  },
  fetchSelectedCamp: async (context, value) => {
    const res = await get(
      `http://localhost:3000/api/statistics/repairs-by-camp/${value}`,
      {
        withCredentials: true
      }
    );
    if (res.status === 200) context.commit("setSelectedData", res.data);
  }
};

export default {
  state,

  mutations,
  getters,
  actions
};
