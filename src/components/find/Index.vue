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
                        <v-card-text v-for="daftar in list" className="data">
                            {{daftar.data}}
                        </v-card-text>
                    </v-card>
                    
                    <v-btn @click="submit" outline color="primary" ><span>Book</span></v-btn>

                </v-flex>
            </v-layout>
            </v-text-field>
        <v-layout>
        </v-layout>
        </v-flex>
</v-layout>
    
</template>

<script>
    var obj = [];
    var list = [];
 import GMap from './Map.vue'

export default {
    data: () => ({
        harga: '',
        key: '',
        list: list,
        fasilitas: ['TV', 'Kolam Renang', 'AC', 'Breakfast']
    }),
    methods: {
        submit (e) {
            e.preventDefault();

            this.axios.post('http://api.local/find/hotel', {
                harga: this.harga,
                jarak: null,
                fasilitas: list.length
            })
            .then(function(res) {
                console.log(res.data)
            })
        },
        tambahFasilitas(e) {

            if (obj.indexOf(this.key) == -1) {
                list.push({data: this.key})

                console.log(list)
            }

            obj.push(this.key);
            
        },
        close(e) {
            console.log(e)

        }
    },
    components: {
        GMap
    }
}
</script>

<style scoped>
</style>
