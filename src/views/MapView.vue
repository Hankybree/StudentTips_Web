<template>
  <div class="content">
    <div id="map">
      <Map></Map>
      <!--Här skall kartan/kartviwn inplementeras, man skulle ochskå kunna ha lite eventulla knappar för olika inställningar,
      dock är det nog en sak som kommer med mapbox om jag inte minns fel-->
    </div>

    <PinInfo></PinInfo>

    <div class="pin-post-container">
      <!--<div id="get-info">
        <input type="button" value="Get pins" @click="getPins()" />
        <input type="button" value="Get single pin" @click="getSinglePin()" />
      </div>-->
      <div id="post-form">
        <!-- <form action="http://localhost:12001/pins" method="post" enctype="multipart/form-data"> -->
        <p>Post</p>
        <input name="pinTitle" v-model="pinTitle" placeholder="Title" />

        <input name="pinDescription" v-model="pinDescription" placeholder="Description" />

        <!-- <input name="pinUser" v-model="pinUser" /> -->

        <input v-model="pinCoordinatesY" />
        <input name="pinCoordinates" v-model="pinCoordinatesX" />

        <!-- <input name="avatar" type="file" /> -->
        <!-- <input type="submit" value="Upload image" /> -->
        <!-- </form> -->
        <div id="post-tags">
          <input v-model="pinTags" type="checkbox" value="mat" /> Mat
          <input v-model="pinTags" type="checkbox" value="bok" /> Bok
          <input v-model="pinTags" type="checkbox" value="öl" /> Öl
        </div>
        <div id="post-patch-buttons">
          <input type="button" value="Post pin" @click="postPin()" />
          <!--<input type="button" value="Patch pin" @click="patchPin()" /> -->
        </div>
      </div>

      <!-- <div id="patch"></div>
      <div id="delete">
        <input v-model="pinId" />
        <input type="button" value="Delete pin" @click="deletePin()" />
      </div>-->
      <!-- <input type="button" value="Print" @click="print()" /> -->
    </div>
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
  computed: computed,
  methods: {
    getPins() {
      this.$store.dispatch("getPins");
    },
    getSinglePin() {
      this.$store.dispatch("getSinglePin");
    },
    postPin() {
      this.$store.dispatch("postPin");
    },
    patchPin() {
      this.$store.dispatch("patchPin");
    },
    deletePin() {
      this.$store.dispatch("deletePin");
    },
    print() {
      console.log(this.$store.state.pinTags);
    }
  }
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