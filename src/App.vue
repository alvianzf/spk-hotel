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
    </v-toolbar>

    <v-content>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
