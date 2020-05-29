<template>
  <div class="content">
    <div id="map">
      <Map></Map>
        <!--Här skall kartan/kartviwn inplementeras, man skulle ochskå kunna ha lite eventulla knappar för olika inställningar,
      dock är det nog en sak som kommer med mapbox om jag inte minns fel-->
    </div>
    <div id="map-info">
      <input type="button" value="Get pins" @click="getPins()">
      <input type="button" value="Get single pin" @click="getSinglePin()">
      <div id="post">
        <input v-model="pinTitle">
        <input v-model="pinDescription">
        <input v-model="pinImage">
        <input v-model="pinTags" type="checkbox" value="mat"> Mat
        <input v-model="pinTags" type="checkbox" value="bok"> Bok
        <input v-model="pinTags" type="checkbox" value="öl"> Öl
        <input v-model="pinCoordinatesX">
        <input v-model="pinCoordinatesY">
        <input v-model="pinUser">
        <input type="button" value="Post pin" @click="postPin()">
        <input type="button" value="Patch pin" @click="patchPin()">
      </div>
      <div id="patch"></div>
      <div id=delete>
        <input v-model="pinId">
        <input type="button" value="Delete pin" @click="deletePin()">
      </div>
      <input type="button" value="Print" @click="print()">
    </div>
  </div>

</template>

<script>
  import Map from '../components/Map.vue'
  import {computed} from '../computed.js'

  export default {
    name: "MapView",
    components: {
      Map
    },
    computed: computed,
    methods: {
      getPins() {
        fetch('http://116.203.125.0:12001/pins')
          .then(response => response.json())
          .then(result => {
            console.log(result)
          })
      },
      getSinglePin() {
        fetch('http://116.203.125.0:12001/pins/' + this.$store.state.pinId)
          .then(response => response.json())
          .then(result => {
            
            this.$store.commit('setPinTitle', result.pinTitle)
            this.$store.commit('setPinDescription', result.pinDescription)
            this.$store.commit('setPinImage', result.pinImage)
            this.$store.commit('setPinTags', result.pinTags)
            this.$store.commit('setPinCoordinatesX', result.pinCoordinates.x)
            this.$store.commit('setPinCoordinatesY', result.pinCoordinates.y)
            this.$store.commit('setPinUser', result.pinUser)

            console.log(result)
          })
      },
      postPin() {
        fetch('http://116.203.125.0:12001/pins', {
          body: JSON.stringify({
            pinTitle: this.$store.state.pinTitle,
            pinDescription: this.$store.state.pinDescription,
            pinImage: this.$store.state.pinImage,
            pinTags: this.$store.state.pinTags,
            pinCoordinates: this.$store.state.pinCoordinates,
            pinUser: this.$store.state.pinUser
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }).then(response => response)
          .then(result => {
            console.log(result)
          })
      },
      patchPin() {
        fetch('http://116.203.125.0:12001/pins/' + this.$store.state.pinId, {
          body: JSON.stringify({
            pinTitle: this.$store.state.pinTitle,
            pinDescription: this.$store.state.pinDescription,
            pinImage: this.$store.state.pinImage,
            pinTags: this.$store.state.pinTags,
            pinCoordinates: this.$store.state.pinCoordinates
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'PATCH'
        }).then(response => response)
          .then(result => {
            console.log(result)
          })
      },
      deletePin() {
        fetch('http://116.203.125.0:12001/pins/' + this.$store.state.pinId, {
          method: 'DELETE'
        })
          .then(response => response)
          .then(result => {
            console.log(result)
          })
      },
      print() {
        console.log(this.$store.state.pinTags)
      }
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
  }

  .content>div {
    width: 50vw;
    height: 80vh;
  }

  #map {
    background-color: green;
  }

  #map-info {
    background-color: red;
  }

  #post {
    display: flex;
    flex-direction: column;
    margin: 5px;
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