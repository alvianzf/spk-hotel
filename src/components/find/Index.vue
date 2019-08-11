<template>
<v-layout>
    <v-flex lg6>
        <GMap />
    </v-flex>
        <v-flex lg6>
        <v-layout>
            
        </v-layout>
            <v-text-field
            type="number"
            v-model="harga"
            label="harga"
            autofocus
            placeholder="Harga"
            prepend-icon="money"
            required>
            >
            </v-text-field>
            <v-select
                label= "Fasilitas"
                v-model="key"
                outlined
                prepend-icon="list"
                :items="fasilitas"
                @change="tambahFasilitas"
            >
            </v-select>
            <v-layout>
                <v-flex lg8>
                </v-flex>
                <v-flex lg4>
                    <v-card>
                        <v-card-text v-for="daftar in list" v-bind:key="daftar.data" className="data">
                            {{daftar.data}}
                        </v-card-text>
                    </v-card>
                    
                    <v-btn @click="submit" outline color="primary" ><span>Book</span></v-btn>

                </v-flex>
            </v-layout>
        <v-layout>
        </v-layout>
        </v-flex>
</v-layout>
    
</template>

<script>

var obj = [];
var list = [];
var choices = []

var distMatrix = [],
    rateMatrix = [], 
    preferenceMatrix = [],
    NIS = [],
    PIS = [],
    negDet = [],
    posDet =[],
    finalMatrix =[]
    // matrix =[]

var distanceSq = 0,
    rateSq = 0,
    PrefSq = 0,
    choice = 0,
    index = 0


import GMap from './Map.vue';

export default {
    data: () => ({
        harga: '',
        key: '',
        list: list,
        fasilitas: ['TV', 'Kolam Renang', 'AC', 'Breakfast']
    }),
    methods: {
        submit (e) {
            var data = this.$store

            this.axios.get('https://hotelspk.herokuapp.com/api/topsis', {
                price: this.harga,
                preference: list.length
            })
            .then(function(res) {
                data.commit('choiceResult', res.data.choice)
                data.commit('distance', res.data.distance)
                data.commit('rate', res.data.rate)
                
                window.location.href= 'results'
            }).catch(function(err) {
                console.log(err)
            })
        
        },
        tambahFasilitas(e) {

            if (obj.indexOf(this.key) == -1) {
                list.push({data: this.key})
            }
            obj.push(this.key);
        },
        close(e) {
            console.log(e)
        },
    },
    components: {
        GMap
    }
}
</script>

<style scoped>
</style>
