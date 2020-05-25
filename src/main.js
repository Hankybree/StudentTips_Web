import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import 'typeface-raleway'

import Map from './views/Map.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [
    // VueRouter routes goes here
    { component: HelloWorld, path: '/' },
    { component: Map, path: '/map' }
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
    pinCoordinates: {},
    pinUser: -1
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
