import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import user from "./modules/user";
import entityData from "./modules/entityData";
import progressbarBtn from "./modules/progressbarBtn";
import dashboardData from "./modules/dashboardData";
import productData from "./modules/productData";
import campData from "./modules/campData";

export default createStore({
  modules: {
    campData,
    productData,
    user,
    entityData,
    progressbarBtn,
    dashboardData
  },
  plugins: [createPersistedState()]
});
