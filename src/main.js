import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import router from './router'

import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

new Vue({
  el: '#header',
  render: h => h(Header)
})

new Vue({
  router,
  render: h => h(Main)
}).$mount('#main')

new Vue({
  el: '#footer',
  render: h => h(Footer)
})
