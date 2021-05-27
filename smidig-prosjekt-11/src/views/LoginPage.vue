<template>
  <base-site isDark="true">
    <login @submitLogin="postLogin($event)" />
  </base-site>
</template>

<script>
import BaseSite from '@/components/Nav/BaseSite.vue';
import Login from '@/components/Login/Login.vue';

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
      console.log("parent", user)
      if(user.username === "admin" && user.password === "password") {
        // TODO: Create login exception
      }
      
      
    }
  }
};
</script>

<style scoped></style>
