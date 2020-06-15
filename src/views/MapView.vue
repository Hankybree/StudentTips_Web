<template>
  <div class="content">
    <div id="map">
      <Map></Map>
    </div>
    <PinInfo></PinInfo>
  </div>
</template>

<script>
import Map from "../components/Map.vue";
import PinInfo from "../components/PinInfo.vue";
import { computed } from "../scripts/computed.js";

export default {
  name: "MapView",
  components: {
    Map,
    PinInfo
  },
  computed: computed
};
</script>

<style scoped>
.content {
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

/*.content > #map {
  width: 50vw;
  height: 75vh;
  align-self: center;
}*/

.content > #map {
  width: 50vw;
  height: 75vh;
  background-color: white;
  border-bottom: 2px solid tomato;
  border-left: 2px solid tomato;
  border-top: 2px solid tomato;
  border-right: 2px solid tomato;
  border-radius: 4px;
}

.pin-post-container {
  margin-left: 5px;
  background-color: white;
  border: 2px solid black;
  height: 75vh;
  border-radius: 4px;
}

.pin-post-container > div > input {
  border: 2px dotted black;
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding: 0.2em;
}

/*.map-info-container > div {
  display: flex;
  flex-direction: column;
}*/

#get-info {
  display: flex;
  flex-direction: column;
  margin: 5 px;
  width: 25vw;
}

#patch {
  display: flex;
  flex-direction: column;
  margin: 5px;
}

#delete {
  display: flex;
  flex-direction: column;
  margin: 5px;
}
</style>