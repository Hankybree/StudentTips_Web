<template>
  <div id="app">
    <header id="head">
      <p>Tip Top</p>
      <!--Header content-->
      <!--maybe some sort of navigation menu-->
    </header>
    <!--a logo that we have created?-->
    <!-- <HelloWorld msg="'Welcome to....'" /> -->
    <router-view></router-view>
    <footer id="footer">
      <!--footer content, copywrite text?-->
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
#head {
  height: 2em;
  background-color: #ffb042;
  /*extra bold font*/
  font-weight: 900;
  margin: 0;
  padding: 0;
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
</style> 
