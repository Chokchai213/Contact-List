<template>
  <div class="container">
    <div class="center-content">
      <form>
        <div class="field field-in">
          <div class="form-group">
            <h1 class="login">Login</h1>
            <label for="username">User Account</label>
            <input
              type="email"
              v-model="username"
              class="form-control"
              placeholder="username"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              placeholder="password"
            />
          </div>

          <button type="submit" class="ui green button" @click="signIn">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { SuiSegment, Card } from "vue-fomantic-ui";

export default {
  name: "SignIn",
  props: {},
  components: {
    SuiSegment,
    Card,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      axios
        .post("http://127.0.0.1:5000/login", {
          username: this.username,
          password: this.password,
        })

        .then((res) => {
          console.log('res.data :: ',res.data);
          const token = res.data.token;

          // Save the token to localStorage
          localStorage.setItem("token", token);

          this.$router.replace("/home");
        })
        .catch((err) => {
          console.log('err :: ',err)
          alert(err.response.data.message);
        });
    },
  },
};
</script>

<style>
.container {
  height: 50vh;
  display: flex;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  border: 1px solid rgba(122, 122, 122, 0.22);
}

.center-content {
  margin: 0 auto; /* Auto horizontal margin to center the content */
  min-width: 400px;
}

.field-in {
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
}
</style>
