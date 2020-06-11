<template>
  <div>
    <div v-if="pinInt === 1" class="PinInfo">
      <div id="img-container">
        <img src alt="Här finns ingen bild bild" />
      </div>
      <h2>Title Goes Here</h2>
      <div id="post-container">
        <input
          name="pinImage"
          id="pin-image"
          type="file"
          accept="image/x-png, image/gif, image/jpeg"
        />

        <div id="no-show">d</div>

        <input
          v-model="pinTitle"
          placeholder="Titel"
          type="text"
          name="userName"
          id="user-name"
          required
        />
        <div id="no-show">don't show me</div>

        <input v-model="pinCoordinatesY" />
        <input name="pinCoordinates" v-model="pinCoordinatesX" />

        <textarea
          v-model="pinDescription"
          placeholder="Beskrvning"
          rows="10"
          name="userName"
          id="user-name"
        />
        <div>
          <input type="button" value="Post!" @click="postPin()" />
          <input type="button" value="Back" @click="changePinInt()" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "../scripts/computed.js";
//import { store } from "../main.js";

export default {
  name: "PinInfo",

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
      this.$store.commit("setPinTitle", "");
      this.$store.commit("setPinDescription", "");
      this.$store.commit("setPinCoordinatesX", 0);
      this.$store.commit("setPinCoordinatesY", 0);
      this.$store.commit("setPinTags", []);
    },
    patchPin() {
      this.$store.dispatch("patchPin");
    },
    deletePin() {
      this.$store.dispatch("deletePin");
    },
    changePinInt() {
      this.$store.dispatch("changePinInt");
    },
    print() {
      console.log(this.$store.state.pinTags);
    }
  }
};
</script>


<style scoped>
.PinInfo {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: flex;
  background-color: white;
  width: 15vw;
  height: 75vh;
  border-radius: 8px;
  border: solid 2px black;
}

.PinInfo > #img-container {
  border-radius: 8px;
  background-color: yellow;
  height: 130px;
  width: 216px;
}
#post-container {
  display: flex;
  flex-direction: column;
  padding: 5px;
}
.PinInfo > div > img {
  object-fit: cover;
  object-position: -50% 0;

  width: 100%;
  height: 100%;

  box-shadow: 0px 5px 3px 0px black;
  border-radius: 8px;
}
.PinInfo > ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style-type: none;
}
#no-show {
  visibility: hidden;
}

textarea {
  background-color: #fcbf49;
  font-family: Raleway;
  font-size: 12pt;
  color: black;
  position: relative;
}
input[type="button"] {
  width: 50px;
  border-radius: 8px;
}
</style>
