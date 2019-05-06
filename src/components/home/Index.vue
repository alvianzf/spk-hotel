<template>
    <div>
        <v-parallax height="400" src="https://stmed.net/sites/default/files/yellow-blue-wallpapers-25356-7174901.jpg">
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex lg9>
                        <h1>Sistem Pendukung Keputusan</h1>
                        <h2>Pemilihan Hotel di Kota Tanjungpinang</h2>
                        <span>
                            Bingung menginap di mana? 
                            <v-btn small to='/find-hotel' color='default'>
                                <span class="button">
                                    Cari Hotel
                                </span>
                            </v-btn>
                        </span>
                    </v-flex>
                    <v-flex>
                        <v-card color="rgb(225, 255, 255, 0.5">
                            <v-card-title>
                                Form Pendaftaran
                            </v-card-title>
                            <v-card-text>

                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="info" to="/register">
                                    Daftar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-parallax>
        <v-container fluid>
                Hotel pilihan:
            <v-layout row wrap>
                <v-flex lg3>
                    <List hotelName="CK Hotel" star="3" />
                </v-flex>
                <v-flex lg3>
                    <List hotelName="Aston Tanjungpinang" star="2" />
                </v-flex>
                <v-flex lg3>
                    <List hotelName="Furia Hotel" star="0" />
                </v-flex>
                <v-flex lg3>
                    <List hotelName="Comforta Hotel" star="2" />
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
 import List from './Card.vue'

export default {
    components: {
        List
    }
}
</script>

<style scoped>

h2 {
    color: #dddddd;
}
span {
    color: #bababa;
}
.button {
    font-size: 0.9em;
    color: black;
}

.center {
    text-align: center;
    color: black;
}
</style>
