<template>
  <div class="content">
    <div id="map">
      agsg
      <!--Här skall kartan/kartviwn inplementeras, man skulle ochskå kunna ha lite eventulla knappar för olika inställningar,
      dock är det nog en sak som kommer med mapbox om jag inte minns fel-->
    </div>
    <div id="map-info">
      <div id="post"></div>
      <div id="patch"></div>
      <div id=delete></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map"
}
</script>

<style scoped>
  .content {
    display: flex;
  }
  .content > div {
    width: 50vw;
    height: 80vh;
  }
  #map {
    background-color: green;
  }
  #map-info {
    background-color: red;
  }
</style>