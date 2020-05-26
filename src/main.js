import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './LoginView.vue'
import SignUp from './SignUpView.vue'
import Vuex from 'vuex'
import App from './App.vue'
import 'typeface-raleway'
//import components
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: {
        name: "Login"
      }
    },
    {
      path: '/loginwindow',
      name: 'Login',
      component: Login
    },
    {
      path: '/signupwindow',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

const store = new Vuex.Store({
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
