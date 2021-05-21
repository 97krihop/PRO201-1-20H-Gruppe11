<template>
  <div class="container">
    <form @submit="onSubmit">
      <div class="wrapper">
        <div class="input">
          <span>Username : </span>
          <input
            v-model="username"
            type="text"
            placeholder="username"
            required
          />
        </div>
        <div class="input">
          <span>Password : </span>
          <input
            v-model="password"
            type="password"
            placeholder="password"
            required
          />
        </div>
        <div class="input">
          <span>confirm password : </span>
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="password"
            required
          />
        </div>
        <div class="input">
          <span>admin : </span>
          <input v-model="admin" type="checkbox" />
        </div>
        <div>
          <button type="submit" :disabled="isSubmitting">Submit</button>
        </div>
        <div>
          <span>{{ usernameError }}</span>
          <br />
          <span>{{ passwordError }}</span>
          <br />
          <span>{{ CPError }}</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useField, useForm } from "vee-validate";

export default {
  name: "UserAdministrationPage",
  setup() {
    const schema = {
      username(value) {
        return value && value.length >= 6
          ? true
          : "username needs to be 6 or longer";
      },
      password(value) {
        return value && value.length >= 6
          ? true
          : "password needs to be 6 or longer";
      },
      confirmPassword(value) {
        return value === password.value
          ? true
          : "confirmPassword needs to match password";
      }
    };
    const { handleSubmit, isSubmitting } = useForm({
      validationSchema: schema
    });

    const onSubmit = handleSubmit((values, { resetForm }) => {
      console.log(values); // send data to API

      // reset the form and the field values to their initial values
      resetForm();
    });
    const { errorMessage: usernameError, value: username } = useField(
      "username"
    );
    const { errorMessage: passwordError, value: password } = useField(
      "password"
    );
    const { errorMessage: CPError, value: confirmPassword } = useField(
      "confirmPassword"
    );
    const { value: admin } = useField("admin");

    return {
      username,
      usernameError,
      password,
      passwordError,
      confirmPassword,
      CPError,
      isSubmitting,
      onSubmit,
      admin
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

.wrapper {
  background: #7eb46b;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
}

button {
  background: #2c2a29;
}
</style>
