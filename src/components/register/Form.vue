<template>
    <div>
        <v-form v-model="registration">
            <v-container>
                <v-layout>
                    <v-text-field
                    v-model="name"
                     :rules="nameRules"
                     label="Nama Lengkap"
                     required>
                    </v-text-field>
                </v-layout>
            </v-container>

        </v-form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
