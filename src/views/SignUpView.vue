<template>
  <div>
    <br />
    <img alt="Vue logo" src="../assets/logo3.png" />
    <div id="signUpScreen">
      <!--SignUp-->


      <!-- added v-model and onClick function -->
      <input placeholder="Username" type="text" name="userName" v-model="userName" id="userName" />
      <br />
      <input placeholder="Password" type="password" name="userPassword" v-model="userPassword" id="passWord" />
      <br />
      <input placeholder="Email" type="text" name="userEmail" v-model="userEmail" id="Email" />
      <br />
      <input name="userImage" id="user-image" type="file" accept="image/x-png, image/gif, image/jpeg" />
      <br />
      <input type="button" value="Register" id="registerBtn" @click="postUser()"/>
      <br />
      <router-link to="/">Cancel</router-link>
    </div>
  </div>
</template>


<script>
import { computed } from "../scripts/computed.js"

export default {
  name: "SignUpView",
  computed: computed, 
  methods: {
    //methods for user data handling
    postUser() {
      this.$store.dispatch("postUser")
      this.$store.commit('setUserName', "")
      this.$store.commit('setUserPassword', "")
      this.$store.commit('setUserEmail', "")
      
    }
  }
}
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