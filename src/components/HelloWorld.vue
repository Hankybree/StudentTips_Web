<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="loginScreen">
      <!--Login-->
      <input placeholder="Användarnamn" type="text" name="userName" id="userName" />
      <br />
      <input placeholder="Lösenord" type="text" name="passWord" id="passWord" />
      <br />
      <input type="button" value="Login" id="loginbtn" />
      <!--Maybe some forgot password functionality -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
