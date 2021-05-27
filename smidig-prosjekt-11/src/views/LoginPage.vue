<template>
  <base-site isDark="true">
    <login @submitLogin="postLogin($event)" />
  </base-site>
</template>

<script>
import BaseSite from '@/components/Nav/BaseSite.vue';
import Login from '@/components/Login/Login.vue';
import { useStore } from 'vuex';

const axios = require('axios');

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
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

      axios.post('http://localhost:3000/api/login', user)
      .then(response => {
        console.log("response", response)
        
        const store = useStore();
        store.commit('login', response.data);
        })
      .catch(error => console.log(error))
    },
  },
};
</script>

<style scoped></style>
