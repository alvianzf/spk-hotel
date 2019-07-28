import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from "vue2-google-maps";
import VueSweetalert2 from 'vue-sweetalert2'
import Toasted from 'vue-toasted'
window.Vue = require('vue');


Vue.config.productionTip = false

Vue.use(Router)
import routes from './routes'

Vue.use(Toasted, {
  duration: 1000
})
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC92LuLz1e32Q8tnSGhiOZ0H-1npj8qbu8",
    libraries: "places" // necessary for places input
  }
});

const router = new Router({
  routes: routes,
  mode: 'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
