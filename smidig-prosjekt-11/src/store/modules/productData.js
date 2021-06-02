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
  fetchAllParts: async context => {
    console.log("fetchAllParts()");
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
    if (res.status === 200) context.commit("setData", res.data);
  },
  fetchAllCamps: async context => {
    console.log("fetchAllCamps()");
    await post(
      "http://localhost:3000/api/login",
      {
        username: "bright",
        password: "admin"
      },
      { withCredentials: true }
    );
    const res = await get("http://localhost:3000/api/camp", {
      withCredentials: true
    });
    if (res.status === 200) context.commit("setData", res.data);
  }
  /*fetchProductData: async context => {
    console.log("fetchProductData()");
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
  },
  fetchProductDataSingle: async (context, elemId) => {
    console.log("fetchProductDataSingle("+elemId+")");
    await post(
      "http://localhost:3000/api/login",
      {
        username: "bright",
        password: "admin"
      },
      { withCredentials: true }
    );
    const res = await get(
      `http://localhost:3000/api/statistics/Repairs-by-month/${elemId}`,
      {
        withCredentials: true
      }
    );
    if (res.status === 200) context.commit("setData", res.data);
  }*/
};

export default {
  state,
  mutations,
  getters,
  actions
};
