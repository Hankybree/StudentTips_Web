<template>
  <div id="app">
    <header id="head">
      <p id="header-text">Tip Top</p>
      <input type="button" value="Logout" id="signOutbtn" @click="logout()" v-if="!loggedIn" />
      <router-link to="/map">Map</router-link>
    </header>
    <router-view></router-view>
    <footer id="footer">
      <!--footer content, copywrite text?-->
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    logout() {
      localStorage.setItem("token", null);
      window.location.replace("http://localhost:8080/#/");
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
  height: 10vh;
  background-color: #ffb042;
  /*extra bold font*/
  font-weight: 900;
  margin-bottom: 20px;
}
#head > a {
  color: white;
  text-decoration: none;
}
#app {
  font-family: Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#footer {
  position: absolute;
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
#signOutbtn {
  position: absolute;
  left: 95%;
  top: 25px;
}
</style> 
