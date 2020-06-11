<template>
  <div>
    <br />
    <img alt="Vue logo" src="../assets/logo3.png" />
    <div id="loginScreen">
      <!--Login-->
      <input placeholder="Username" type="text" name="userName" id="userName" v-model="userName" />
      <br />
      <input placeholder="Password" type="text" name="passWord" id="passWord" v-model="passWord" />
      <br />
      <input type="button" value="Login" id="loginbtn" @click="logIn()" />
      <br />
      <router-link to="/signup" SignUp>Register?</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  methods: {
    logIn() {
      fetch("http://localhost:12001/login")
        .then(response => response.json())
        .then(result => {
          for (let i = 0; i <= result.length; i++) {
            if (this.userName === result[i].userName) {
              if (this.passWord === result[i].userPassword) {
                console.log("you are logged in");
              }
            }
          }
        });
    }
  },
  data() {
    return {
      userName: "",
      passWord: ""
    };
  }
};
</script>
<style scoped>
#loginScreen {
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
