<template>
  <div class="PinInfo">
    <div id="img-container">
      <!-- <img src="../assets/kockjakob.jpg" alt="hej" /> -->
    </div>Add image
    <input id="pin-image" type="file" name="pinImage" />

    <ul>
      <li>
        <input placeholder="Användarnamn" type="text" name="userName" id="user-name" />
      </li>
      <li>
        <input placeholder="Användarnamn" type="text" name="userName" id="user-name" />
      </li>
      <li>
        <input placeholder="Användarnamn" type="text" name="userName" id="user-name" />
      </li>
    </ul>
  </div>
</template>
<script>
//import { computed } from "../scripts/computed.js";

export default {
  name: "PinInfo"
};
</script>
<style scoped>
.PinInfo {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  flex-wrap: flex;
  background-color: teal;
  width: 15vw;
  height: 75vh;
  border-radius: 8px;
}

.PinInfo > div {
  border-radius: 8px;
  background-color: yellow;
  height: 130px;
  width: 216px;
}
.PinInfo > div > img {
  object-fit: cover;
  object-position: -50% 0;

  width: 100%;
  height: 100%;
}
</style>
