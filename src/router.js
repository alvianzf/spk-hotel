import Vue from 'vue'
import Router from 'vue-router'
// import Home from './components/Main.js'
// import Header from './components/Header.js'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            // component: Home
        },
        {
            path: '/history',
            name: 'header',
            // component: Header
        },
        {
            path: '/findhotel',
            name: 'findhotel',
            // component: FindHotel
        },
        {
            path: '/settings',
            name: 'settings',
            // component: Settings
        }
    ]
})