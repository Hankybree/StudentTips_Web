<template>
  <div id="app">
    <header id="head">
      <p>Testar fonten</p>
      <!--Header content-->
      <!--maybe some sort of navigation menu-->
    </header>
    <!--a logo that we have created?-->
    <img alt="Vue logo" src="./assets/logo.png" />
    <log-in-window></log-in-window>
    <footer id="footer">
      <!--footer content, copywrite text?-->
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#head {
  height: 2em;
  background-color: #ffb042;
  /*extra bold font*/
  font-weight: 900;
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
  width: 98.3%;
  background-color: #f3771f;
}
</style> 
