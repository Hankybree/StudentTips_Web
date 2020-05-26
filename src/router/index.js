import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/LoginWindow'
import SignUp from '@/components/SignUpWindow'

Vue.use(Router)

export default new Router({
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