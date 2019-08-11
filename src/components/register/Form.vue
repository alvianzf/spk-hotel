<template>
    <div>
        <v-form v-model="valid">
            <v-container>
                <v-layout>
                    <v-text-field
                    v-model="fullname"
                     :rules="nameRules"
                     label="Nama Lengkap"
                     autofocus
                     placeholder="Nama Lengkap"
                     prepend-icon="group"
                     required>
                    </v-text-field>
                    
                    <v-text-field
                    v-model="email"
                    :rules="nameRules"
                    label="e-mail"
                    prepend-icon="mail"
                    placeholder="email"

                    required>

                    </v-text-field>
                    <v-text-field
                    v-model="password"
                    type="password"
                    label="password"
                    prepend-icon="lock"
                    placeholder="password"

                    required>

                    </v-text-field>
                </v-layout>
                <v-layout>
                    <v-btn @click="submit" outline color="primary" flat><span>Submit</span></v-btn>
                    <v-snackbar
                    v-model="snackbar"
                    >
                    {{ text }}
                        <v-btn
                            color="pink"
                            text
                            @click="snackbar = false"
                        >
                            Close
                        </v-btn>

                    </v-snackbar>
                    <v-snackbar
                    v-model="errbar"
                    >
                    {{ errtext }}
                        <v-btn
                            color="pink"
                            text
                            @click="errbar = false"
                        >
                            Close
                        </v-btn>

                    </v-snackbar>
                </v-layout>
            </v-container>

        </v-form>
    </div>
</template>

<script>
export default {
    data: () => ({
        valid: false,
        fullname: '',
        email: '',
        password: '',
        success: '',
        snackbar: false,
        text: 'Berhasil mendaftarkan',
        errbar: false,
        errtext: 'gagal mendaftarkan',
        nameRules: [
            v => !!v || 'Mohon isi nama anda',
            v => v.length >=4 || 'Nama harus minimal 4 karakter'
        ],
    }),
    methods: {
        submit (e) {
            this.snackbar = true

            e.preventDefault();
            
            this.axios.post('https://hotelspk.herokuapp.com/api/users', {
                name: this.fullname,
                email: this.email,
                password: this.password,
            })
            .then(function(res) {
                console.log(res)
                window.location.href = 'find-hotel'
            })
            .catch(function(err) {
                console.log(err)
                e.errbar = true
            })
        }
    }
}
</script>

<style scoped>

span {
    color: rgb(0, 0, 0, 0.5)fff;
}

</style>
