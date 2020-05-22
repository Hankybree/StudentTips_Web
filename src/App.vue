<template>
  <div id="app">
    <header id="head">
      <p>Jag testar nu fonten</p>
      <!--Header content-->
      <!--maybe some sort of navigation menu-->
    </header>
    <!--a logo that we have created?-->
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="'Welcome to'" />
    <footer id="footer">
      <!--footer content copywrite text?-->
    </footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#head {
  height: 2em;
  background-color: #bd5000;
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
  margin: 0.25em;
  bottom: 0px;
  height: 25px;
  width: 100%;
  background-color: #ffb042;
}
</style> 
