import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import 'typeface-raleway'

import MapView from './views/MapView.vue'
<<<<<<< HEAD
import LogInView from './components/LogInView.vue'
=======
import LogInView from './views/LogInView.vue'
import SignUpView from './views/SignUpView.vue'
>>>>>>> 8c7e93f066c3563a8ed3fe1347ff7344da17c5f2

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [
    // VueRouter routes goes here
<<<<<<< HEAD
    { component: LogInView, path: '/' },
=======
    { component: LogInView, path: '/' },
    { component: SignUpView, path: '/signup'},
>>>>>>> 8c7e93f066c3563a8ed3fe1347ff7344da17c5f2
    { component: MapView, path: '/map' }
  ]
})

const store = new Vuex.Store({
  state: {
    // Vuex variables goes here
    pinId: -1,
    pinTitle: "",
    pinDescription: "",
    pinImage: "",
    pinTags: [],
    pinCoordinates: { x: 0, y: 0 },
    pinUser: -1
  },
  mutations: {
    setPinId(state, newId) {
      state.pinId = newId
    },
    setPinTitle(state, newTitle) {
      state.pinTitle = newTitle
    },
    setPinDescription(state, newDescription) {
      state.pinDescription = newDescription
    },
    setPinImage(state, newImage) {
      state.pinImage = newImage
    },
    setPinTags(state, newTags) {
      state.pinTags = newTags
    },
    setPinCoordinatesX(state, newCoordinatesX) {
      state.pinCoordinates.x = newCoordinatesX
    },
    setPinCoordinatesY(state, newCoordinatesY) {
      state.pinCoordinates.y = newCoordinatesY
    },
    setPinUser(state, newUser) {
      state.pinUser = newUser
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
