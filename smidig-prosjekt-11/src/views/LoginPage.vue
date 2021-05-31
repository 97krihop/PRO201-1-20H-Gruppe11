<template>
  <base-site isDark="true">
    <login @submitLogin="postLogin($event)" :showError="showLoginError" />
  </base-site>
</template>

<script>
import BaseSite from "@/components/Nav/BaseSite.vue";
import Login from "@/components/Login/Login.vue";

// const axios = require("axios");

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      showLoginError: false
    };
  },
  components: {
    BaseSite,
    Login
  },
  methods: {
    postLogin(loginValues) {
      this.$store.dispatch("authenticate", loginValues).then(() => {
        console.log("before routerpush...");
        this.$router.push({ name: 'Home' });
      });
    }
  }
};
</script>

<style scoped></style>
