import Home from './components/home/Index.vue'
import Register from './components/register/Index.vue'
import About from './components/about/Index.vue'
import Find from './components/find/Index.vue'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/find-hotel',
        component: Find
    }
]