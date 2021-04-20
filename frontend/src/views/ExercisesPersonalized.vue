<template>
  <div class="container-gruop">
		<h1>Ejercicios Personalizados</h1>
    <template>
      <div id="contentCard" class="row" v-if="cargar">
        <div class="col-md-4" v-for="(item, index) in this.ejerciciosPersonalizados" :key="index">
				<!--Description-->
				<p class="description"></p>

				<!--Section: Live preview-->
				<section>

					<!--Card-->
					<div class="card card-cascade">

						<!--Card image-->
						<div class="view overlay view-cascade">
							<a href="#!">
								<img v-bind:src="item.img" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
								<div class="mask rgba-white-slight">
									<!-- Button -->
									<button class="botonF1" @click="eliminarEjercicio(index)">
                      <font-awesome-icon icon="trash" class="small"/>
									</button>
								</div>
							</a>
						</div>
						<!--/.Card image-->

						<!--Card content-->
						<div class="card-body text-center card-body-cascade">
							<!--Title-->
							<h4 class="card-title"><strong>{{item.titulo}}</strong></h4>
							<h5>{{item.repeticiones}}</h5>

							<p class="card-text">{{item.descripcion}}
							</p>

							<!--Facebook-->
							<a type="button" class="btn-floating btn-small btn-fb waves-effect waves-light"><i class="fab fa-facebook"></i></a>
							<!--Twitter-->
							<a type="button" class="btn-floating btn-small btn-tw waves-effect waves-light"><i class="fab fa-twitter"></i></a>
							<!--Google +-->
							<a type="button" class="btn-floating btn-small btn-dribbble waves-effect waves-light"><i class="fab fa-dribbble"></i></a>

						</div>
						<!--/.Card content-->

					</div>
					<!--/.Card-->

				</section>
				<!--Section: Live preview-->
			</div>
			
      </div>   
    </template>
  </div>
</template>
<script src="https://kit.fontawesome.com/2a6ca77ca9.js" crossorigin="anonymous"></script>
<script>
require('../plugin/fontawesome');
// require('./plugins/fontawesome');
var ejerciciosPersonalizados = [];
var ejercicios = [];
var usuario;
var indexUsuario;
// cargarEjercicios = CargarEjercicios();
var cargar = false;
export default {
  
  name: 'ExercisesPersonalized',
data : {
  ejerciciosPersonalizados: null
},
  beforeMount() {
	  debugger;
	  this.cargarEjercicios(false);

  },
  methods: {
    cargarEjercicios(renderizar) {
        this.cargar = true;
        this.ejercicios =  JSON.parse(localStorage.getItem('exercises'));
        this.usuario = localStorage.getItem('usuario');
        if (this.ejercicios !== undefined && this.ejercicios !== null) {
          this.indexUsuario = this.ejercicios.findIndex(exercise => exercise.usuario === this.usuario);
          if (this.indexUsuario !== 1) {
              this.ejerciciosPersonalizados = this.ejercicios[this.indexUsuario].ejercicios;
              if (this.ejerciciosPersonalizados.length === 0) {
                  this.$router.replace({name: 'HomeUsuario'});
              } 
              if(renderizar) {
                  this.$forceUpdate();
              }
          }
        }
      },
	  
	  eliminarEjercicio(indexEjercicio) {
		  debugger;
		  this.ejercicios[this.indexUsuario].ejercicios.splice(indexEjercicio, 1);
		  localStorage.removeItem('exercises');
		  const registros = JSON.stringify(this.ejercicios);
		  localStorage.setItem('exercises', registros);
		  this.cargarEjercicios(true);
	  }
  }
}
</script>
<style lang="scss" scoped>
.container-gruop {
  display: block;
  width: 100%;
  background-image: url("../assets/img/1.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 150px;
  text-align: center;
  .row {
    margin: 0;
    padding: 50px 10% 0px 10%;
  }
  button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 50%;
    padding: 5px;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
  .botonF1 {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: #f44336;
    right: 0;
    top: 220px;
    position: absolute;
    // margin-right: 16px;
    // margin-bottom: 30%;
    border: none;
    outline: none;
    color: #fff;
    font-size: 36px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: 0.3s;
  }
  .botonF1:active {
    transform: scale(1.1);
  }
  @media (max-width: 570px) {
    .card {
      margin-top: 20px;
    }
    .container-gruop {
      background-color: url("../assets/img/1.jpg");
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      height: 100%;
      width: 100%;
      text-align: center;
    }
  }
}
</style>
