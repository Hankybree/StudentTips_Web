<template>
  <div>
    <br />
    <img alt="Vue logo" src="../assets/logo3.png" />
    <div id="signUpScreen">
      <!--SignUp-->
      <input placeholder="Användarnamn" type="text" name="userName" id="userName" />
      <br />
      <input placeholder="Lösenord" type="text" name="passWord" id="passWord" />
      <br />
      <input type="button" value="Registrera dig" id="registerBtn" />
      <br />
      <router-link to="/">Tebax till login?</router-link>
    </div>
  </div>
</template>
<script>
export default {};
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