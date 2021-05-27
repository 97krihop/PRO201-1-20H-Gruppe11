<template>
  <base-site isDark="true">
    <login @submitLogin="postLogin($event)" :showError="showLoginError" />
  </base-site>
</template>

<script>
import BaseSite from '@/components/Nav/BaseSite.vue';
import Login from '@/components/Login/Login.vue';

const axios = require('axios');

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      showLoginError: false,
    };
  },
  components: {
    BaseSite,
    Login,
  },
  methods: {
    postLogin(user) {
      if (user.username === 'admin' && user.password === 'password') {
        // TODO: Create login exception
      }

      axios
        .post('http://localhost:3000/api/login', user)
        .then((response) => {
          this.$store.commit('login', response.data);
          this.$router.replace({ name: 'Home' })
        })
        .catch((error) => {
          console.log('error', error);
          this.showLoginError = true;
        });
    },
  },
  // setup() {
  // },
};
</script>

<style scoped></style>
