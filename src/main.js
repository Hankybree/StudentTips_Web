import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

import 'typeface-raleway'
import { actions } from './scripts/actions.js'

import MapView from './views/MapView.vue'
import LogInView from './views/LogInView.vue'
import SignUpView from './views/SignUpView.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [
    // VueRouter routes goes here
    { component: LogInView, path: '/' },
    { component: SignUpView, path: '/signup' },
    { component: MapView, path: '/map' }
  ]
})

export const store = new Vuex.Store({
  state: {
    // Vuex variables goes here
    pinId: -1,
    pinTitle: "",
    pinDescription: "",
    pinImage: "",
    pinTags: [],
    pinCoordinates: { x: 0, y: 0 },
    pinUser: 1,
    userName: "",
    userPassword: "",
    userEmail: "",
    pinInt: 0,
    loggedIn: false
  },
  mutations: {

    //Mutations for pin data
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
    },

    //Mutations for user data
    setUserName(state, newUserName) {
      state.userName = newUserName
    },
    setUserPassword(state, newUserPassword) {
      state.userPassword = newUserPassword
    },
    setUserEmail(state, newUserEmail) {
      state.userEmail = newUserEmail
    },
    setPinInt(state, newPinInt) {
      state.pinInt = newPinInt
    },
    setLoggedIn(state, newLoggedIn) {
      state.loggedIn = newLoggedIn
    }
  },
  actions: actions
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
