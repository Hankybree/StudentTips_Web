<template>
  <div>
    <br />
    <img alt="Vue logo" src="../assets/logo3.png" />

    <!-- div showing if NOT logged in -->
    <div v-if="!loggedIn" class="loginScreen">
      <!--Login-->
      <input placeholder="Username" type="text" name="userName" id="userName" v-model="userName" />
      <br />
      <input
        placeholder="Password"
        type="password"
        name="passWord"
        id="passWord"
        v-model="userPassword"
      />
      <br />
      <input type="button" value="Login" id="loginbtn" @click="logIn()" />
      <br />
      <router-link to="/signup" SignUp>Register?</router-link>
    </div>

    <!-- div showing if logged in -->
    <div v-if="loggedIn" class="loginScreen">
      <!-- Visa profiluppgifter
      visa profilbild
      Logga ut-alternativ-->

      <input placeholder="Password" type="text" name="passWord" id="passWord" />
    </div>
  </div>
</template>


<script>
import { computed } from "../scripts/computed";
export default {
  name: "loginView",
  methods: {
    logIn() {
      this.$store.dispatch("login");
      this.$store.commit("setUserName", "");
      this.$store.commit("setUserPassword", "");
    }
  },
  computed: computed
};
</script>


<style scoped>
.loginScreen {
  position: absolute;
  left: 25%;
  margin-top: 5em;
  /*primary color*/
  background-color: #ff8400;
  width: 50%;
  height: 200px;
}
#userName {
  margin-top: 2em;
}
#passWord {
  margin-top: 2em;
}
</style>
