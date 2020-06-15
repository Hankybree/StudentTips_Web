<template>
  <div>
    <br />
    <img class="animate__animated animate__rollIn" alt="Vue logo" src="../assets/logo3.png" />

    <!-- div showing if NOT logged in -->
    <div v-if="!loggedIn" class="login-screen">
      <!--Login-->
      <form @keyup.enter="logIn()">
        <input
          placeholder="Username..."
          type="text"
          name="userName"
          id="username"
          v-model="userName"
        />
        <br />
        <input
          placeholder="Password..."
          type="password"
          name="passWord"
          id="passWord"
          v-model="userPassword"
        />
        <br />
        <input type="button" value="Login" id="loginbtn" @click="logIn()" />
      </form>
      <br />
      <router-link to="/signup">Don't have an account? Register here!</router-link>
    </div>

    <!-- div showing if logged in -->
    <div v-if="loggedIn" class="loginScreen">
      <div v-if="$store.state.user.userImage !== null">
        <img class="imageStyle" :src="$store.state.user.userImage" />
      </div>
      <div v-else>
        <img class="imageStyle" src="../assets/logo3.png" />
      </div>
      <h2>{{$store.state.user.userName}}</h2>
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
.imageStyle {
  object-fit: scale-down;
  object-position: center;

  max-width: 15vw;
  max-height: 20vh;

  margin-top: 1vh;
}

.loginScreen {
  position: absolute;
  left: 25%;
  margin-top: 5em;
  /*primary color*/
  background-color: #ff8400;
  width: 50%;
  padding: 20px;
  margin: auto;
}

#username,
#password,
#loginbtn {
  margin: 10px;
}
</style>
