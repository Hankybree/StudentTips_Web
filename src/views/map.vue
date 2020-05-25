<template>
  <div class="content">
    <div id="map">
      agsg
      <!--Här skall kartan/kartviwn inplementeras, man skulle ochskå kunna ha lite eventulla knappar för olika inställningar,
      dock är det nog en sak som kommer med mapbox om jag inte minns fel-->
    </div>
    <div id="map-info">
      <div id="post">
        <input v-model="pinTitle">
        <input type="button" value="Print" @click="print()">
      </div>
      <div id="patch"></div>
      <div id=delete></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  computed: {
    pinId: {
      get() {
        return this.$store.state.pinId
      },
      set(newId) {
        this.$store.commit('setPinId', newId)
      }
    },
    pinTitle: {
      get() {
        return this.$store.state.pinTitle
      },
      set(newTitle) {
        this.$store.commit('setPinTitle', newTitle)
      }
    },
    pinDescription: {
      get() {
        return this.$store.state.pinDescription
      },
      set(newDescription) {
        this.$store.commit('setPinDescription', newDescription)
      }
    },
    pinImage: {
      get() {
        return this.$store.state.pinImage
      },
      set(newImage) {
        this.$store.commit('setPinImage', newImage)
      }
    },
    pinTags: {
      get() {
        return this.$store.state.pinTags
      },
      set(newTags) {
        this.$store.commit('setPinTags', newTags)
      }
    },
    pinCoordinates: {
      get() {
        return this.$store.state.pinCoordinates
      },
      set(newCoordinates) {
        this.$store.commit('setPinCoordinates', newCoordinates)
      }
    },
    pinUser: {
      get() {
        return this.$store.state.pinUser
      },
      set(newUser) {
        this.$store.commit('setPinUser', newUser)
      }
    }
  },
  methods: {
    print() {
      console.log(this.$store.state.pinTitle)
    }
  }
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