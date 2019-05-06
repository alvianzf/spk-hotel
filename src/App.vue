<template>
  <v-app>
    <v-toolbar app dark color="info">
      <v-toolbar-title class="headline">
        <span>Find</span>
        <span class="font-weight-light">Hotel</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        to='/'
      >
        <span class="mr-2">Dashboard</span>
      </v-btn>
      <v-btn flat to='/find-hotel'>
        Cari Hotel
      </v-btn>
      <v-btn flat to='/history'>
        Riwayat
      </v-btn>
      <v-btn flat to='/about'>
        Tentang Aplikasi
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>

import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
