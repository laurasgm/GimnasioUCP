<template>
  <div class="pagination-container">
    <div v-if="loading" class="overflow-auto card card-pagination">
      <p class="mt-3 mb-0 titleTable">Lista de Usuarios</p>
      <p>Pagina {{ currentPage }}</p>

      <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
      >
        <template #cell(Acción)="data">
          <!-- `data.value` is the value after formatted by the Formatter -->
          <button class="btn btn-standar" style="padding: 5px 10px 5px 10px !important; color: white" @click="openModalEdit(data)">
            Editar
          </button>
          <button class="btn btn-danger ml-2" @click="deleteUser(data)">
            Eliminar
          </button>

          <modal :height="700" :name="'modal' + data.index">
            <div class="container-modal">
              <button type="button" class="close" @click="closeModalEdit()" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4>Editar Usuario</h4>
              <div class="form-user mt-5">
                <div class="item ">
                  <small>Recibo de Pago</small>
                  <br>
                    <input type="file" accept=".jpg, .png" @change="onFileSelected" >
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="item ">
                      <small>Nombre</small>
                      <input
                        class="form-control"
                        type="text"
                        v-bind:value="data.item.Nombre"
                        v-on:input="data.item.Nombre = $event.target.value"
                      />
                    </div>

                  </div>
                  <div class="col-md-6">
                    <div class="item">
                      <small>Cédula</small>
                      <input
                        class="form-control"
                        type="number"
                        v-bind:value="data.item.Cedula"
                        v-on:input="data.item.Cedula = $event.target.value"
                      />
                    </div>

                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="item">
                      <small>Dirección</small>
                      <input
                        class="form-control"
                        type="text"
                        v-bind:value="data.item.direccion"
                        v-on:input="data.item.direccion = $event.target.value"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="item">
                      <small>Teléfono</small>
                      <input
                        class="form-control"
                        type="text"
                        v-bind:value="data.item.telefono"
                        v-on:input="data.item.telefono = $event.target.value"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="item">
                      <small>Email</small>
                      <input
                        class="form-control"
                        type="text"
                        v-bind:value="data.item.email"
                        v-on:input="data.item.email = $event.target.value"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="item">
                      <small>Peso</small>
                      <input
                        class="form-control"
                        type="number"
                        v-bind:value="data.item.peso"
                        v-on:input="data.item.peso = $event.target.value"
                      />
                    </div>
                  </div>
                </div>
                <div class="row"> 
                  <div class="col-md-6">
                    <div class="item">
                      <small>Altura</small>
                      <input
                        class="form-control"
                        type="number"
                        v-bind:value="data.item.altura"
                        v-on:input="data.item.altura = $event.target.value"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="item">
                      <small>Talla pecho</small>
                      <input
                        class="form-control"
                        type="number"
                        v-bind:value="data.item.talla_pecho"
                        v-on:input="data.item.talla_pecho = $event.target.value"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="item">
                      <small>Talla cadera</small>
                      <input
                        class="form-control"
                        type="number"
                        v-bind:value="data.item.talla_cadera"
                        v-on:input="data.item.talla_cadera = $event.target.value"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="item">
                      <small>Talla brazo</small>
                      <input
                        class="form-control"
                        type="number"
                        v-bind:value="data.item.talla_brazo"
                        v-on:input="data.item.talla_brazo = $event.target.value"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="item">
                      <small>Talla cintura</small>
                      <input
                        class="form-control"
                        type="number"
                        v-bind:value="data.item.talla_cintura"
                        v-on:input="data.item.talla_cintura = $event.target.value"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="item">
                      <small>Meses Pagados</small>
                      <select name="select" class="form-control" v-bind:value="data.item.Meses_pagados"
                        v-on:input="data.item.Meses_pagados = $event.target.value">
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
                    </div>
                  </div>
                </div>
                <button
                  v-if="!loadingModal"
                  @click="editUser(data.item)"
                  class="btn btn-standar mt-3"
                >
                  Editar
                </button>
                <div v-if="loadingModal" class="text-center mt-3">
                  <b-spinner variant="warning" label="Spinning"></b-spinner>
                </div>
              </div>
            </div>
          </modal>
        </template>
      </b-table>

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
      ></b-pagination>
    </div>
    <div v-if="!loading" class="text-center mt-5">
      <b-spinner variant="warning" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mixins } from '@/mixins'

export default {
  mixins: [mixins],
  data() {
    return {
      loadingModal: false,
      loading: false,
      perPage: 10,
      currentPage: 1,
      items: [],
      rows: 0,
      edit: {},
      edit_date_in: null,
      edit_last_date_in: null,
      test: '',
      modalOpen: '',
    }
  },
  mounted() {
    this.loadData()
  },

  methods: {
    //guarda el recibo de pago del usuario 
    //nota: el recibo lleva por nombre la cedula del usuario
     onFileSelected (event) 
     {
       debugger;
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        axios
        .post('http://localhost:3000/api/reciboPago', formData)
        .then((res) => {
          this.$snotify.success('Recibo de Pago guardado exitosamente')
        })
        .catch((err) => {
          this.$snotify.error('No se puedo almacenar el Recibo de Pago', err)
        })
    },
    loadData() {
      this.loading = false
      axios
        .get('http://localhost:3000/api/users')
        .then((response) => {
          const data = response.data.users
          const sortData = data.sort(this.compare)
          this.items = this.listUsers(sortData)
          this.rows = this.items.length
          this.loading = true
        })
        .catch((error) => {
          this.loading = true
        })
    },
    compare(a, b) {
      if (a.id_user < b.id_user) {
        return -1
      }
      if (a.id_user > b.id_user) {
        return 1
      }
      return 0
    },
    //Extrae la lista de los usuarios, calculando fecha de expiracion y estado 
    listUsers(listData) {
      let newList = listData.map((index) => {
        const state = this.getStateSuscription(
          index.last_date_in,
          index.acumulated_suscription
        )
        const parts = index.last_date_in.split('/');
        let fechaTmp = new Date(parts[2], parts[1] - 1, parts[0]); 
        fechaTmp.setMonth(fechaTmp.getMonth() + parseInt(index.acumulated_suscription));
        return {
          Nombre: index.name_user,
          Cedula: index.dni,
          Fecha_de_Ingreso: index.date_in,
          Ultima_Fecha_de_Suscripción: index.last_date_in,
          Fecha_de_Expiración: fechaTmp.toLocaleDateString(),
          Meses_pagados: index.acumulated_suscription,
          Estado: state,
          direccion: index.direccion,
          telefono: index.telefono,
          email: index.email,
          peso: index.peso,
          altura: index.altura,
          talla_pecho: index.talla_pecho,
          talla_cadera: index.talla_cadera,
          talla_brazo: index.talla_brazo,
          talla_cintura: index.talla_cintura,
          Acción: 'Eliminar',
        }
      })
      return newList
    },
    openModalEdit(user) {
      this.$modal.show(`modal${user.index}`)
      this.edit.dni = user.item.Cedula
      this.modalOpen = `modal${user.index}`
    },

    closeModalEdit() {
      this.$modal.hide(this.modalOpen)
    },

    editUser(user) {
      this.edit.name_user = user.Nombre
      this.edit.new_dni = user.Cedula
      this.edit.acumulated_suscription = user.Meses_pagados
      this.edit.id_gym = 1;
      this.edit.direccion = user.direccion;
      this.edit.telefono = user.telefono;
      this.edit.email = user.email;
      this.edit.peso = user.peso;
      this.edit.altura = user.altura;
      this.edit.talla_pecho = user.talla_pecho;
      this.edit.talla_cadera = user.talla_cadera;
      this.edit.talla_brazo = user.talla_brazo;
      this.edit.talla_cintura = user.talla_cintura;
      axios
        .put('http://localhost:3000/api/user', this.edit)
        .then((res) => {
          this.$snotify.success('Usuario editado satisfactoriamente')
          this.$modal.hide(this.modalOpen)
          this.loadData()
        })
        .catch((err) => {
          this.$snotify.error('Error editando el usuario: ', err)
          this.$modal.hide(this.modalOpen)

          this.loadData()
        })
    },

    editResource(resource) {
      this.edit.name_resource = resource.Nombre
      this.edit.description = resource.Descripción
      this.edit.reference = resource.Referencia
      this.edit.id_resource = resource.id
      this.edit.id_gym = 1
      axios
        .put('http://localhost:3000/api/resource', this.edit)
        .then((res) => {
          this.$snotify.success('Recurso editado satisfactoriamente')
          this.$modal.hide(this.modalOpen)
          this.loadData()
        })
        .catch((err) => {
          console.log(err)
          this.$snotify.error('Error editando el recurso: ', err)
          this.$modal.hide(this.modalOpen)
          this.loadData()
        })
    },

    deleteUser(data) {
      axios
        .delete(`http://localhost:3000/api/user/${data.item.Cedula}`)
        .then((res) => {
          this.$snotify.success('Usuario eliminado satisfactoriamente')
          this.loadData()
        })
        .catch((err) => {
          console.log(err)
          this.$snotify.error('Error eliminando el usuario: ', err)
          this.loadData()
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.container-modal {
  .item {
    margin-top: 8px !important;
  }
  .datePicker {
    display: block;
  }
  padding: 40px;
  form {
    text-align: left;
    button {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
