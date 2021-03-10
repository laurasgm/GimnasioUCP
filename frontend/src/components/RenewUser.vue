<template>
  <div>
    <h2>Renovar Usuario</h2>
    <div class="form-container">
      <input v-model="form.dni" placeholder="Cédula" type="number" />
      <!-- <input
        v-model="form.months"
        type="number"
        placeholder="Meses de Suscripción"
      /> -->
      <select name="select" v-model="form.months">
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
      <button v-if="loading" @click="renewUser" class="btn btn-standar mt-4">
        RENOVAR
      </button>
      <div v-if="!loading" class="text-center mt-5">
        <b-spinner variant="warning" label="Spinning"></b-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RenewUser',
  data() {
    return {
      form: {},
      loading: true,
    }
  },
  created() {
    debugger;
    this.form.months = 0;
  },
  methods: {
    renewUser() {
      if (!this.form.dni || !this.form.months) {
        this.$snotify.error('Error, debes llenar todos los campos.')
      } else if (this.months > 100) {
        this.$snotify.error('Error, cantidad de meses demasiado grande.')
      } else {
        this.loading = false
        const data = {
          pay_months: parseInt(this.form.months),
        }
        axios
          .post(`http://localhost:3000/api/pay/months/${this.form.dni}`, data)
          .then((res) => {
            this.$snotify.success('Usuario renovado satisfactoriamente')
            setTimeout(() => {
              this.$router.go()
              this.loading = true
            }, 1000)
          })
          .catch(() => {
            this.$snotify.error('Error, no se pudo renovar el usuario')
            this.loading = true
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
