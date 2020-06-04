<template>
  <div>
    <br />
    <img alt="Vue logo" src="../assets/logo3.png" />
    <div id="signUpScreen">
      <!--SignUp-->
      <input placeholder="Username" type="text" name="userName" id="userName" />
      <br />
      <input placeholder="Password" type="text" name="passWord" id="passWord" />
      <br />
      <input placeholder="Email" type="text" name="Email" id="Email" />
      <br />
      <input @click="postUser()" type="button" value="Register" id="registerBtn" />
      <br />
      <router-link to="/">Back to login?</router-link>
    </div>
  </div>
</template>
<script>
import { actions } from "../scripts/actions.js";
import { computed } from "../scripts/computed.js";
export default {
  name: "Signup",
  computed: {
    computed,
    actions
  },
  methods: {
    postUser() {
      this.$store.dispatch("postUser");
    }
  }
};
</script>
<style scoped>
#signUpScreen {
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