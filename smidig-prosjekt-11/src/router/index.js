import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
// import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/repair',
    name: 'Repair',
    component: () =>
      import('../views/RepairPage.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import('../views/ProfilePage.vue'),
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/entry-successful',
    name: 'Entry Successful',
    component: () => import('../views/EntrySuccessful.vue'),
  },
  {
    path: '/logout',
    name: 'Logout page',
    component: () => import('../views/Logout.vue'),
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: () => import('../views/AdminPage.vue'),
  },
  {
    path: '/notimplemented',
    name: 'NotImplemented',
    component: () => import('../views/NotImplementedPage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const userInfo = store.getters.getUserInfo;
//   console.log(userInfo);
//   if (to.path !== '/login' && !userInfo) {
//     next('/login');
//   } else {
//     next();
//   }
// });

// function userInfoExists() {
//   const userInfo = store.getters.getUserInfo;
//   if(userInfo) return true;
//   else return false;
// }

export default router;
