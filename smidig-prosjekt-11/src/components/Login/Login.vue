<template>
  <!-- main page to login -->
  <div id="login-container" class="bg-logoBar">
    <!-- from to post -->
    <form @submit.prevent="post">
      <div>
        <!-- username input -->
        <label for="username">Username</label>
        <input
          v-model="username"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
      </div>
      <div>
        <!-- password input -->
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
      </div>

      <div>
        <!-- submit button -->
        <input id="login-submit" type="submit" />
      </div>
    </form>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  //composition API
  setup() {
    const store = useStore();
    const router = useRouter();
    const username = ref("");
    const password = ref("");

    //computed property from store
    const user = computed(() => {
      return store.getters.getUserId;
    });
    //is called on form submit
    function post() {
      login(username.value);
      router.push({ name: "Home" });
    }
    // validate and send data to backend
    function login(userId) {
      //TODO submit to database and validate data
      store.commit("login", userId);
    }

    return {
      username,
      password,
      post,
      user
    };
  }
};
</script>

<style lang="scss" scoped>
#login-container {
  position: relative;
  top: 200px;
  width: 100%;
  max-width: 20rem;
  margin: auto;
  padding: 1.25rem;
  border: 1.5px solid #433149;
  border-radius: 5px;

  form {
    label {
      font-weight: bold;
      color: #a8d598;
      display: block;
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1.5rem;
      color: #433149;
      border-color: #433149;
      border-bottom-width: 2px;
      font-weight: bold;
      outline: none;
    }
  }

  #login-submit {
    background-color: #a8d598;
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;

    &:hover {
      background-color: rgb(231, 241, 227);
    }
  }
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
  #login-container {
    top: 50px;
  }
}
</style>
