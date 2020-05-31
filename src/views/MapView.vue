<template>
  <div class="content">
    <div id="map">
      <Map></Map>
      <!--Här skall kartan/kartviwn inplementeras, man skulle ochskå kunna ha lite eventulla knappar för olika inställningar,
      dock är det nog en sak som kommer med mapbox om jag inte minns fel-->
    </div>
    <div id="map-info-container">
      <div id="get-info">
        <input type="button" value="Get pins" @click="getPins()" />
        <input type="button" value="Get single pin" @click="getSinglePin()" />
      </div>
      <div id="post-info">
        <form action="http://localhost:12001/pins" method="post" enctype="multipart/form-data">
          Post
          <input name="pinTitle" v-model="pinTitle" type="text" placeholder="Title" />
          <input name="pinDescription" v-model="pinDescription" placeholder="Description" />
          <input name="avatar" type="file" />

          <input name="pinUser" v-model="pinUser" />
          <input name="pinCoordinates" v-model="pinCoordinatesX" />
          <!-- <input v-model="pinCoordinates" /> -->
          <input type="submit" value="Upload image" />
        </form>
        <div style="{display: flex; flex-direction: row;}">
          <input v-model="pinTags" type="checkbox" value="mat" /> Mat
          <input v-model="pinTags" type="checkbox" value="bok" /> Bok
          <input v-model="pinTags" type="checkbox" value="öl" /> Öl
        </div>
      </div>
      <div>
        <input type="button" value="Post pin" @click="postPin()" />
        <input type="button" value="Patch pin" @click="patchPin()" />
      </div>
      <div id="patch"></div>
      <div id="delete">
        <input v-model="pinId" />
        <input type="button" value="Delete pin" @click="deletePin()" />
      </div>
      <!-- <input type="button" value="Print" @click="print()" /> -->
    </div>
  </div>
</template>

<script>
import Map from "../components/Map.vue";
import { computed } from "../scripts/computed.js";

export default {
  name: "MapView",
  components: {
    Map
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.content > div {
  width: 50vw;
  height: 80vh;
}

#map {
  background-color: white;
}

#map-info-container {
  background-color: white;
  display: flex;
  flex-direction: row;
}

#post-info {
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 25vw;
}
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