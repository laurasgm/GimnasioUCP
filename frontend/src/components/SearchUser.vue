<template>
  <div>
    <h2>CONSULTAR USUARIO</h2>
    <div class="form-container">
      <input v-model="form.dni" placeholder="Cédula" />

      <button @click="searchUser()" class="btn btn-standar mt-4">
        BUSCAR
      </button>
      <div v-if="!loading" class="text-center mt-5">
        <b-spinner variant="warning" label="Spinning"></b-spinner>
      </div>
    </div>

    <modal :width="700" :height="600" name="modal-user">
      <div class="container-modal">
        <button type="button" class="close" @click="closeModalEdit()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h3>Datos de usuario</h3>
        <div class="logo">
          <img
            @click="mostrarRecibo()" 
            src="../assets/icono-recibo.png"
            alt="logo"
          />
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex justify-content-between mt-4">
            <div class="line">
              Cédula:
            </div>
            <p>{{ user.dni }}</p>
          </div>

        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-between mt-4">
            <div class="line">
              Nombre:
            </div>
            <p>{{ user.name_user }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <div class="line">
              Primera Suscripción:
            </div>
            <p>{{ user.date_in }}</p>
          </div>

        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <div class="line">
              Última Suscripción:
            </div>
            <p>{{ user.last_date_in }}</p>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <div class="line">
              Meses de Suscripción:
            </div>
            <p>{{ user.acumulated_suscription }}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <div class="line">
              Dirección:
            </div>
            <p>
              {{ user.direccion }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <div class="line">
              Teléfono:
            </div>
            <p >
              {{ user.telefono }}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <div class="line">
              Email:
            </div>
            <p >
              {{ user.email }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <div class="line">
              Peso:
            </div>
            <p >
              {{ user.peso }} kg
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <div class="line">
              Altura:
            </div>
            <p >
              {{ user.altura }} m
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <div class="line">
              Talla pecho:
            </div>
            <p >
              {{ user.talla_pecho }} cm
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <div class="line">
              Talla cadera:
            </div>
            <p >
              {{ user.talla_cadera }} cm
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <div class="line">
              Talla brazo:
            </div>
            <p >
              {{ user.talla_brazo }} cm
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <div class="line">
              Talla cintura:
            </div>
            <p >
              {{ user.talla_cintura }} cm
            </p>
          </div>
        </div>
      </div>


        <div class="row">
          <div class="col-md-6">
          <div class="d-flex justify-content-between">
            <div class="line">
              Estado:
            </div>
            <p v-bind:class="isActive ? 'text-green' : 'text-red'">
              {{ state }}
            </p>
          </div>
        </div>
        </div>

        
      </div>
    </modal>
    
    <modal :width="700" :height="600" name="modal-recibo">
      <button type="button" class="close" @click="closeModalImage()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
      <img
          width="600" 
          height="500"
        :src= "image" 
        id="testimg"
      />
    </modal>
  </div>
</template>

<script>
import axios from 'axios'
import { mixins } from '@/mixins'

export default {
  mixins: [mixins],
  name: 'SearchUser',
  data() {
    return {
      form: {},
      user: {},
      tieneRecibo: false,
      loading: true,
      state: 'Activa',
      image: ''
    }
  },
  computed: {
    isActive() {
      return this.state === 'Activo'
    },
  },
  methods: {
    searchUser() {
      this.loading = false
      axios
        .get(`http://localhost:3000/api/user/${this.form.dni}`)
        .then((response) => {
          if (response.data.user.id_user) {
            this.user = response.data.user
            this.tieneRecibo = response.data.tieneRecibo;
            this.state = this.getStateSuscription(
              this.user.last_date_in,
              this.user.acumulated_suscription
            )

            this.$modal.show(`modal-user`)
          } else {
            this.$snotify.error('No se encuentra el usuario')
          }
          this.loading = true
        })
        .catch((error) => {
          this.$snotify.error('Error al encontrar usuario')
          this.loading = true
        })
    },
    closeModalEdit() {
      debugger;
      this.$modal.hide(`modal-user`);
    },
     closeModalImage() {
      debugger;
      var timestamp = new Date().getTime();     
      var el = document.getElementById("testimg");     
      el.src = 'http://127.0.0.1:8081/' + this.form.dni + '.png?t=' + timestamp; 
      this.$modal.hide(`modal-recibo`);
    },
    mostrarRecibo(){
     debugger;
      if (this.tieneRecibo) {
        debugger;
        var timestamp = new Date().getTime();     
        this.image = 'http://127.0.0.1:8081/' + this.form.dni + '.png?t='+ timestamp; 
        this.$modal.show(`modal-recibo`);
      } else {
          this.$snotify.error('El usuario no tiene un recibo');
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/theme.scss';
.form-container {
  h2 {
    color: white;
    font-size: 2.5rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 50px;
  }
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  padding: 40px;
  input {
    font-family: 'Muli', sans-serif;

    color: white;
    padding: 10px;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.253);
    margin-top: 10px;
    width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    border: none;
    font-size: 1.2rem;
  }
  input::placeholder {
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 0.9 !important;
    color: rgb(255, 255, 255);
  }
}
 .logo {
    width: 40%;
    display: inline-block;
    color: white;
    img {
      width: 80px;
    }
  }
.container-modal {
  h3 {
    color: $principal-color;
    font-size: 3.4rem;
  }
  padding: 50px;
  font-size: 1rem;
  .d-flex {
    padding: 0 20px 0 20px;
  }
  .line {
    font-weight: 800;
    display: inline;
  }
  .text-green {
    color: $principal-color;
  }
  .text-red {
    color: $secundary-color;
  }
}
</style>
