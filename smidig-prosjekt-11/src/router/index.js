import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
// import { useStore } from 'vuex';
import store from '../store';




const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/repair",
    name: "Repair",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RepairPage.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfilePage.vue")
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/LoginPage.vue")
  },
  {
    path: "/entry-successful",
    name: "Entry Successful",
    component: () => import("../views/EntrySuccessful.vue")
  },
  {
    path: "/logout",
    name: "Logout page",
    component: () => import("../views/Logout.vue")
  },
  {
    path: "/admin",
    name: "AdminPage",
    component: () => import("../views/AdminPage.vue")
  },
  {
    path: "/notimplemented",
    name: "NotImplemented",
    component: () => import("../views/NotImplementedPage.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});


router.beforeResolve((to, from, next) => {
  if (to.name !== 'LoginPage' && !store.getters.getUserInfo) next({ name: 'LoginPage' });
  else next();
});

export default router;
