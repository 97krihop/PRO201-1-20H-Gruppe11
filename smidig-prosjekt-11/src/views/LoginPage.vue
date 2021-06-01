<template>
  <base-site isDark="true">
    <login @submitLogin="postLogin($event)" :showError="showLoginError" />
  </base-site>
</template>

<script>
import BaseSite from "@/components/nav/BaseSite.vue";
import Login from "@/components/login/Login.vue";

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
      this.$store
        .dispatch("authenticate", loginValues)
        .then(this.$router.push("/"));
    }
  }
};
</script>

<style scoped></style>
