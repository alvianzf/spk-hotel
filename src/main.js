import Vue from 'vue'
import './plugins/vuetify'
import store from './store/store'
import App from './App.vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from "vue2-google-maps";
import VueSweetalert2 from 'vue-sweetalert2'
import Toasted from 'vue-toasted'


Vue.config.productionTip = true

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
  store,
  render: h => h(App),
}).$mount('#app')
