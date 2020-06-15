<template>
  <div>
    <br />
    <div v-if="!loggedIn">
      <img alt="Vue logo" src="../assets/logo3.png" />

      <!-- div showing if NOT logged in -->
      <div id="login-screen">
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
    </div>

    <!-- div showing if logged in -->
    <div v-if="loggedIn" id="profile-screen">
      <div v-if="$store.state.user.userImage !== null">
        <img class="image-style" :src="$store.state.user.userImage" />
      </div>
      <div v-else>
        <img class="image-style" src="../assets/logo3.png" />
      </div>
      <h2>{{$store.state.user.userName}}</h2>
      <div>Your pins:</div>
      <br />
      <div :key="index" v-for="(pin, index) in pins">
        <div v-if="pin.pinUser === $store.state.activeUser">{{ pin.pinTitle }}</div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "../scripts/computed";
export default {
  beforeCreate() {
    this.pins = null;
  },
  created() {
    fetch("http://116.203.125.0:12001/pins")
      .then(response => response.json())
      .then(result => {
        this.pins = result;
      });
  },
  name: "LogInView",
  data() {
    return {
      pins: null
    };
  },
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
.image-style {
  object-fit: scale-down;
  object-position: center;

  max-width: 15vw;
  max-height: 20vh;

  margin-top: 1vh;
}
img {
  margin-bottom: 20px;
}
#profile-screen {
  position: absolute;
  left: 25%;
  margin-top: 5em;
  /*primary color*/
  background-color: #ff8400;
  width: 50%;
  padding: 20px;
  margin: auto;
}
#login-screen {
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
