<template>
<v-layout>
    <v-flex lg-4>
        <v-card color="info" dark>
            <v-card-text>
                <h3>
                    Halo {{ $store.getters.username }}
                </h3>
                <h2>
                    Hasil anda: {{ $store.getters.choiceResult }}
                </h2>
            </v-card-text>
        </v-card>
    </v-flex>
    <v-flex lg-8>
        <v-card>
            <v-card-text>
                Date: <strong>{{ today }}</strong>
            </v-card-text>
            <v-card-text>
                Distance: <strong>{{ $store.getters.distance }} meter</strong>
            </v-card-text>
            <v-card-text>
                Biaya per malam: Rp. <strong>{{ $store.getters.rate }}</strong>,00
            </v-card-text>
        </v-card>
        <v-btn color="success" outline @click="confirms">Pilih Hotel</v-btn>
        <v-btn color="warning" outline @click="back">Pilih lagi</v-btn>
    </v-flex>
</v-layout>
    
</template>

<script>

import axios from 'vue-axios'

var ts = new Date()
// var hotels = function() {
//     return axios.get('http://hotelspk.herokuapp.com/api/hotel')
// }

// console.log(hotels)

export default {
    data: () => ({
        today: ts.toDateString(),
        // distance : {{ $store.getters.distance }}
    }),
    methods: {
        back (e) {
            window.location.href ="find-hotel"
        },
        confirms (e) {

            var username = this.$store.getters.username
            var selection = this.$store.getters.choiceResult

            this.axios.post('http://hotelspk.herokuapp.com/api/history', {
                user_name : username,
                date: ts.toDateString(),
                selection: selection
            }).then(function (res) {
                console.log(res)
            }).catch(function (err) {
                console.log(err.message)
            })

            window.location.href = 'https://hotelspk.herokuapp.com/api/history'
        }
    }
}
</script>

<style>

</style>
