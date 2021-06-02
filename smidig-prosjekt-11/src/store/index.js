import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import user from "./modules/user";
import entityData from "./modules/entityData";
import progressbarBtn from "./modules/progressbarBtn";
import dashboardData from "./modules/dashboardData";
import productData from "./modules/productData";

export default createStore({
  modules: {
    productData,
    user,
    entityData,
    progressbarBtn,
    dashboardData
  },
  plugins: [createPersistedState()]
});
