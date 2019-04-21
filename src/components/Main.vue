<template>

    <div>
        <b-row align-v="center">
            <b-col>
                <b-jumbotron header="FindHotel" lead="Aplikasi pencarian Hotel di Kota Tanjungpinang">
                    <b-button variant="info" href="#">Cari Hotel Sekarang</b-button>
                </b-jumbotron>
            </b-col>
            <b-col cols="4">
                  <br/>
                  <br/>
                  <b-card class="card" text-variant="light" bg-variant="info">
                    <b-card-header>
                      Daftar sekarang untuk melanjutkan
                    </b-card-header>
                    <b-card-body>
                      
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                        id="input-group-1"
                        label="Email:"
                        label-for="input-1"
                        description="Kami tidak akan membagi alamat email anda dengan siapapun juga.">
                        <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="alamat email"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Nama Anda:" label-for="input-2" description="Nama Lengkap yang akan menjadi rujukan pemesanan"
>
                        <b-form-input
                        id="input-2"
                        v-model="form.name"
                        required
                        placeholder="nama lengkap"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Nomor Kontak:" label-for="input-3" description="Nomor kontak disarankan menggunakan kode negara">
                        <b-form-input
                        id="input-2"
                        v-model="form.contact"
                        required
                        placeholder="+62"
                        value="+62"
                        ></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="dark">Daftar</b-button>
                    <b-button type="reset" variant="inverse">Reset</b-button>
                    </b-form>
                    </b-card-body>
                    <b-card-footer>
                      <sup>Sudah mendaftar? <b-link>Masuk</b-link></sup>
                    </b-card-footer>
                  </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  name:'Home',
    data() {
      return {
        form: {
          email: '',
          name: '',
          contact:''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        console.log(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.contact = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

