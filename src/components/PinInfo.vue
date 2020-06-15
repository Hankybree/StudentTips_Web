<template>
  <div>
    <div v-if="pinInt === 2" class="GetPin">
      <div id="box">
        <div v-if="$store.state.pinImage !== 'null'">
          <img :src="$store.state.pinImage" />
        </div>
        <div v-else>
          <img src="../assets/logo3.png" alt="Logo" />
        </div>
        <h2>{{$store.state.pinTitle}}</h2>
        <div v-if="$store.state.pinCreator === $store.state.activeUser">
          <input type="button" value="Update" @click="$store.commit('setPinInt', 3)" />
          <input type="button" value="Delete" @click="deletePin()" />
        </div>
      </div>

      <div id="box" style="min-height: 37vh;">
        <p>{{$store.state.pinDescription}}</p>
      </div>
      <input type="button" value="Close" @click="changePinInt()" />
    </div>
    <div v-if="pinInt === 1 || pinInt === 3" class="PinInfo">
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
          <div v-if="pinInt === 1">
            <input type="button" value="Post!" @click="postPin()" />
          </div>
          <div v-else>
            <input type="button" value="Save changes" @click="patchPin()" />
          </div>
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
    postPin() {
      this.$store.dispatch("postPin");
      this.$store.commit("setPinTitle", "");
      this.$store.commit("setPinDescription", "");
      this.$store.commit("setPinCoordinatesX", 0);
      this.$store.commit("setPinCoordinatesY", 0);
      this.$store.commit("setPinTags", []);

      //Testing
      this.$store.commit("setCenter", [
        this.$store.state.pinCoordinates.x,
        this.$store.state.pinCoordinates.y
      ]);
      window.location.reload;
    },
    patchPin() {
      console.log("pressed patch");
      this.$store.dispatch("patchPin");
    },
    deletePin() {
      this.$store.dispatch("deletePin");
    },
    changePinInt() {
      this.$store.dispatch("changePinInt");
    },
    print() {
      console.log(this.$store.state.pinImage);
    }
  }
};
</script>


<style scoped>
.GetPin {
  display: flex;
  flex-direction: column;
  background-color: #fcbf49;
  border-radius: 8px;
  min-width: 15vw;
  max-width: 25vh;
  min-height: 71vh;
  max-width: 200px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}
#box {
  border: 6px solid #f77f00;
  border-radius: 8px;
}
p {
  word-break: break-all;
}
h2 {
  word-break: break-all;
}

.PinInfo {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  border: solid 2px black;
}

#box > div > img {
  /* object-fit: cover; */
  object-fit: scale-down;
  object-position: -40% 10;

  max-width: 25vw;
  max-height: 24vh;

  width: 100%;
  height: 100%;

  box-shadow: 0px 5px 3px 0px black;
  border-radius: 8px;
}
#no-show {
  visibility: hidden;
}

#textarea {
  background-color: #fcbf49;
  font-family: Raleway;
  font-size: 12pt;
  color: black;
}
</style>
