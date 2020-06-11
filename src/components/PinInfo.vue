<template>
  <div>
    <div v-if="pinInt === 2" class="GetPin">
      <div id="box">
        <h2>{{$store.state.pinTitle}}</h2>
        <p>{{$store.state.pinDescription}}</p>
      </div>
    </div>
    <div v-if="pinInt === 1" class="PinInfo">
      <div id="post-container">
        <h2>Please create your tip</h2>

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
        <div>
          <input v-model="pinCoordinatesY" />
          <br />
          <input name="pinCoordinates" v-model="pinCoordinatesX" />
        </div>

        <textarea
          id="textarea"
          v-model="pinDescription"
          placeholder="Beskrvning"
          rows="10"
          name="pinDescription"
        />
        <div>
          <input id="input" type="button" value="Post!" @click="postPin()" />
          <input id="input" type="button" value="Back" @click="changePinInt()" />
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
.GetPin {
  display: flex;
  flex-direction: column;
  background-color: aquamarine;
}
#box {
  border: 8px solid cornflowerblue;
}
.PinInfo {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  border: solid 2px black;
}

/*.PinInfo > div > img {
  object-fit: cover;
  object-position: -50% 0;

  width: 100%;
  height: 100%;

  box-shadow: 0px 5px 3px 0px black;
  border-radius: 8px;
}*/
#no-show {
  visibility: hidden;
}

#textarea {
  background-color: #fcbf49;
  font-family: Raleway;
  font-size: 12pt;
  color: black;
}
#input[type="button"] {
  width: 50px;
  border-radius: 8px;
  background-color: #fcbf49;
}
</style>
