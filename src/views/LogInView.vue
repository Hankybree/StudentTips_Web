<template>
  <div>
    <br />
    <img alt="Vue logo" src="../assets/logo3.png" />
    <div id="loginScreen">
      <!--Login-->
      <input placeholder="Användarnamn" type="text" name="userName" id="userName" />
      <br />
      <input placeholder="Lösenord" type="text" name="passWord" id="passWord" />
      <br />
      <input type="button" value="Login" id="loginbtn" />
      <br />
      <router-link to="/signup" SignUp>Registrera dig?</router-link>
    </div>
  </div>
</template>
<script>
//import signUp from "./components/SignUpWindow.vue";
export default {};
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
