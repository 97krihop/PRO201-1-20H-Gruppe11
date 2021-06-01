import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import user from "./modules/user";
import auth from "./modules/auth";
import entityData from "./modules/entityData";

export default createStore({
  modules: {
    user,
    entityData,
    auth
  },
  plugins: [
    createPersistedState({
      paths: ["entityData", "user"],
      key: "bright"
    })
  ]
});
