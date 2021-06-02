import { get, post } from "axios";

const state = {
  data: null
};

const mutations = {
  setCampData(state, value) {
    state.data = value;
  }
};
const getters = {
  getCampData: state => state.data
};
const actions = {
  fetchCampData: async ({ commit }) => {
    try {
      await post(
        "http://localhost:3000/api/login",
        {
          username: "bright",
          password: "admin"
        },
        { withCredentials: true }
      );
      const res = await get(
        "http://localhost:3000/api/statistics/repairs-by-camp",
        {
          withCredentials: true
        }
      );

      const data = res.data.map(x => {
        return {
          id: x.name,
          location: x.Country,
          geoloc: x.coordinates,
          campRepairs: x.coordinates
        };
      });
      /*
                return {
                  id: x.name,
                  location: x.Country,
                  geoloc: x.coordinates,
                  campRepairs: data
                };*/

      commit("setCampData", data);
    } catch (e) {
      console.error(e);
    }
  }
};

export default {
  state,

  mutations,
  getters,
  actions
};
