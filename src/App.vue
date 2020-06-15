<template>
  <div id="app">
    <header id="head">
      <p id="header-text">Tip Top</p>
      <div id="sign-out" v-if="$store.state.loggedIn">
        <router-link to="/map">Map</router-link>
        <router-link to="/">{{ $store.state.user.userName }}</router-link>
        <input type="button" value="Logout" @click="logout()">
      </div>
    </header>
    <router-view></router-view>
    <div id="spacer"></div>
    <footer id="footer">
      ©TipTop, All rights reserved
      <!--footer content, copywrite text?-->
    </footer>
  </div>
</template>

<script>
export default {
  created() {
    if (localStorage.getItem('token')) {
      this.$store.dispatch('getSession')
    }
  },
  name: "App",
  methods: {
    logout(){
    this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
#head {
  padding-top: 15px;
  height: 10vh;
  background-color: #ffb042;
  /*extra bold font*/
  font-weight: 900;
  margin-bottom: 20px;
}
#sign-out > a {
  color: white;
  text-decoration: none;
  margin-right: 5px;
}
#app {
  font-family: Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#spacer {
  flex-grow: 1;
}
#footer {
  color: white;
  text-align: left;
  padding: 5px;
  bottom: 0px;
  height: 25px;
  width: 100%;
  background-color: #f3771f;
}
#header-text {
  margin: 0;
  padding: 0;
  font-size: 27pt;
}
#sign-out {
  display: flex;
  justify-content: flex-end;
}
input[type="button"] {
  width: 50px;
  border-radius: 8px;
  background-color: rgb(127, 38, 46);
  color: white;
}
</style> 
