import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";

import entityData from "./modules/entityData";
import progressbarBtn from "./modules/progressbarBtn";

export default createStore({
  modules: {
    entityData,
    progressbarBtn,
    auth
  },
  plugins: [
    createPersistedState({
      paths: ["entityData", "progressbarBtn"],
      key: "bright"
    })
  ]
});
