<template>
  <div>
    <h2>Agregar Nuevo Usuario</h2>
    <div class="form-container">
      <input v-model="form.name_user" placeholder="Nombre" />
      <input v-model="form.dni" placeholder="Cédula" />
      <!-- <input
        v-model="form.acumulated_suscription"
        placeholder="Meses de Suscripción"
      /> -->
      <select name="select" v-model="form.acumulated_suscription">
        <option hidden selected value="0">Meses de Suscripción</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <button @click="addNewUser" class="btn btn-standar mt-4">
        AGREGAR
      </button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import { validateName, validateNumber } from '../utils/validations'
export default {
  name: 'RegisterUser',
  data() {
    debugger;
    return {
      form: {},
      dniSearch: '',
    }
  },
  created() {
    debugger;
    this.form.acumulated_suscription = 0;
  },
  methods: {
    addNewUser() {
      if (
        !this.form.name_user ||
        !this.form.dni ||
        !this.form.acumulated_suscription
      ) {
        this.$snotify.error('Error, debes llenar todos los campos.')
      } else if (!validateName(this.form.name_user)) {
        this.$snotify.error('El nombre ingresado no es válido.')
      } else if (!validateNumber(this.form.dni)) {
        this.$snotify.error('La cédula ingresada no es válida.')
      } else if (!validateNumber(this.form.acumulated_suscription)) {
        this.$snotify.error('Los méses ingresados no son válidos')
      } else {
        this.form.date_in = moment().format('DD/MM/YYYY')
        this.form.last_date_in = moment().format('DD/MM/YYYY')
        this.form.id_gym = 1
        axios
          .post('http://localhost:3000/api/user', this.form)
          .then(() => {
            this.$snotify.success('Usuario registrado satisfactoriamente')
            this.$router.go()
          })
          .catch((error) => {
            console.log(error)
            this.$snotify.error('El usuario ya existe')
          })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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
  input, select {
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
  option { 
    color:black; 
    background-color: rgba(134, 125, 125, 0.253); 
  }
}
</style>
