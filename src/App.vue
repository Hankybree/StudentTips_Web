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
    <footer id="footer">
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
#sign-out {
  display: flex;
  position: absolute;
  left: 90%;
  top: 25px;
}
</style> 
