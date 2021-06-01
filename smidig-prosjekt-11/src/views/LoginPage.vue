<template>
  <base-site isDark="true">
    <login @submitLogin="postLogin($event)" :formMessage="formMessage" />
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
      formMessage: ""
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
        .then(res => { 
          console.log("resfromcomponent", res);
          this.$router.push("/")
          })
          .catch(error => {
              switch(error.response.status) {
                case 401:
                   this.formMessage = "Invalid username/password"
                   break;
                case 501:
                  this.formMessage = "Internal server error"
              }
          })
    }
  }
};
</script>

<style scoped></style>
