import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

const router = new VueRouter({
  routes: {
    // VueRouter routes goes here
  }
})

const store = new Vuex({
  state: {
    // Vuex variables goes here
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
