<template>
  <div class="PinInfo">
    <div id="img-container">
      <img src="../assets/kockjakob.jpg" alt="hej" />
    </div>
    <h2>Title Goes Here</h2>
    <div id="post-container">
      <input id="pin-image" type="file" name="pinImage" />
      <div id="no-show">don't show me</div>

      <input placeholder="Titel" type="text" name="userName" id="user-name" />
      <div id="no-show">don't show me</div>

      <textarea placeholder="Beskrvning" rows="10" name="userName" id="user-name" />
      <div>
        <input type="button" value="Post!" />
      </div>
    </div>
  </div>
</template>
<script>
//import { computed } from "../scripts/computed.js";

export default {
  name: "PinInfo"
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=raleway+medium);

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
  height: 100%;
}
#no-show {
  visibility: hidden;
}

textarea {
  background-color: #fcbf49;
  font-family: Raleway;
  font-size: 12pt;
  color: black;
}
input[type="button"] {
  width: 50px;
  border-radius: 8px;
}
</style>
