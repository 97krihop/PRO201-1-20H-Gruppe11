<template>
  <base-site isDark="true">
    <login @submitLogin="postLogin($event)" :showError="showLoginError" />
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
      showLoginError: false,
    };
  },
  components: {
    BaseSite,
    Login,
  },
  methods: {
    postLogin(loginValues) {
      this.$store.dispatch('authenticate', loginValues).then((p) => {
        console.log('before warning', p);
        this.$router.push('/');
      });
    },
  },
};
</script>

<style scoped></style>
