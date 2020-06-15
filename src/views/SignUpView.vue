<template>
  <div>
    <br />
    <img alt="Vue logo" src="../assets/logo3.png" />
    <div id="signUpScreen">
      <!--SignUp-->

      <!-- added v-model and onClick function -->
      <input placeholder="Username" type="text" name="userName" v-model="userName" id="username" />
      <br />
      <input
        placeholder="Password"
        type="password"
        name="userPassword"
        v-model="userPassword"
        id="password"
      />
      <br />
      <input placeholder="Email" type="text" name="userEmail" v-model="userEmail" id="email" />
      <br />
      <input
        name="userImage"
        id="user-image"
        type="file"
        accept="image/x-png, image/gif, image/jpeg"
      />
      <br />
      <input type="button" value="Register" id="registerbtn" @click="postUser()" />
      <br />
      <router-link to="/">Cancel</router-link>
    </div>
  </div>
</template>


<script>
import { computed } from "../scripts/computed.js";

export default {
  name: "SignUpView",
  computed: computed,
  methods: {
    //methods for user data handling
    postUser() {
      this.$store.dispatch("signup");
      this.$store.commit("setUserName", "");
      this.$store.commit("setUserPassword", "");
      this.$store.commit("setUserEmail", "");
    }
  }
};
</script>


<style scoped>
img {
  margin-bottom: 20px;
}
#signUpScreen {
  background-color: #ff8400;
  width: 50%;
  padding: 20px;
  margin: auto;
}
#username, #password, #email, #user-image, #registerbtn {
  margin: 5px;
}
</style>