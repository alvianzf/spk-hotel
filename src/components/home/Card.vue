<template>
    <v-card color="info" dark>
        <v-card-text>
            <h2>
                {{ hotelName }}
            </h2>
            <span class="star">* * *</span> ({{ star }}-Star)
        </v-card-text>
        <v-card-actions>
            <v-btn color="success">
                <span>
                    pesan sekarang
                </span>
            </v-btn>

            <v-btn color="default" outline>
                <span>
                    informasi hotel
                </span>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        hotelName: String,
        star: String
    }

}
</script>

<style scoped>

span {
    text-transform: lowercase;
}

.star {
    color: gold;
}

</style>
