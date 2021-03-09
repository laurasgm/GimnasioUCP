<template>
  <div class="container-gruop">
      <h1> 
        <div id=nav> 
          <div class="logo">
            <router-link to="/homeUsuarios">
              <img
                @click="this.$router.replace({ name: 'HomeUsuarios' })"
                src="../assets/img/pesa.png"
                alt="logo"
              />
            </router-link>
          </div>
          <div class="logo">
             <router-link>
              <img
                @click="this.$router.replace({name: 'GroupExercises', params: { tipoEjercicio: tipoEjercicio }});"
                src="../assets/img/musculo.jpg"
                alt="logo"
              />
            </router-link>
          </div>
        </div> 
        Grupos de ejercicios
      </h1>
    <!-- Card -->
    <div class="row" style="margin-top: 80px">
      <div class="col-md-4">
        <div class="card">
          <!-- Card image -->
          <div class="view overlay">
            <img
              class="card-img-top"
              src="../assets/img/GruposMusculos/Pierna/muslos.jpg"
              alt="Card image cap"
            />
            <a>
              <div class="mask rgba-white-slight">
                <!-- Button -->
                <button class="botonF1" @click="verEjercicios(1)">
                  <span> >> </span>
                </button>
              </div>
            </a>
          </div>

          <!-- Card content -->
          <div class="card-body">
            <!-- Title -->
            <h4 class="card-title">Pierna</h4>
            <hr />
            <!-- Text -->
            <p class="card-text">
              Aumentar la fuerza, la resistencia, fortalecer las articulaciones,
              o mejorar ciertos movimientos serán algunas de las ventajas que
              obtendremos entrenando pierna y que podremos trasladar a cualquier
              deporte que practiquemos fuera del gimnasio.
            </p>
          </div>

          <!-- Card footer -->
          <div 
            class="rounded-bottom mdb-color lighten-3 text-center pt-3"
          ></div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <!-- Card image -->
          <div class="view overlay">
            <img
              class="card-img-top"
              src="../assets/img/GruposMusculos/Hombro/Hombros.jpg"
              alt="Card image cap"
            />
            <a>
              <div class="mask rgba-white-slight">
                <!-- Button -->
                <button class="botonF1" @click="verEjercicios(2)">
                  <span> >> </span>
                </button>
              </div>
            </a>
          </div>

          <!-- Card content -->
          <div class="card-body">
            <!-- Title -->
            <h4 class="card-title">Hombro</h4>
            <hr />
            <!-- Text -->
            <p class="card-text">
              Entrenar los hombros es muy importante para estar en forma. Los
              músculos de tus hombros son el grupo muscular en la parte superior
              del cuerpo que más usamos. Como ya hemos señalado, los hombros son
              uno de los grupos musculares más comúnmente usados en la parte
              superior del cuerpo.
            </p>
          </div>

          <!-- Card footer -->
          <div
            class="rounded-bottom mdb-color lighten-3 text-center pt-3"
          ></div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <!-- Card image -->
          <div class="view overlay">
            <img
              class="card-img-top"
              src="../assets/img/GruposMusculos/Pecho/pecho.jpg"
              alt="Card image cap"
            />
            <a>
              <div class="mask rgba-white-slight">
                <!-- Button -->
                <button class="botonF1" @click="verEjercicios(3)">
                  <span> >> </span>
                </button>
              </div>
            </a>
          </div>

          <!-- Card content -->
          <div class="card-body">
            <!-- Title -->
            <h4 class="card-title">Pecho</h4>
            <hr />
            <!-- Text -->
            <p class="card-text">
              La musculatura pectoral se coordina con el cuello, brazos, hombros
              y los músculos centrales para producir movimiento y fuerza. Por lo
              tanto, realizar ejercicios para pecho es de vital importancia para
              el bienestar general tanto en el entrenamiento como en acciones de
              la vida cotidiana.
            </p>
          </div>

          <!-- Card footer -->
          <div
            class="rounded-bottom mdb-color lighten-3 text-center pt-3"
          ></div>
        </div>
      </div>
    </div>
    <!-- Card -->

    <!-- Card -->
    <div class="row" style="padding-bottom: 30px;">
      <div class="col-md-4">
        <div class="card">
          <!-- Card image -->
          <div class="view overlay">
            <img
              class="card-img-top"
              src="../assets/img/GruposMusculos/Abdomen/abdomen.jpg"
              alt="Card image cap"
            />
            <a>
              <div class="mask rgba-white-slight">
                <!-- Button -->
                <button class="botonF1" @click="verEjercicios(4)">
                  <span> >> </span>
                </button>
              </div>
            </a>
          </div>

          <!-- Card content -->
          <div class="card-body">
            <!-- Title -->
            <h4 class="card-title">Abdomen</h4>
            <hr />
            <!-- Text -->
            <p class="card-text">
              Ejercitar el abdomen reduce el riesgo de sufrir malestares o
              dolencias posturales tras una larga jornada laboral. Trabajar esta
              parte del cuerpo también ayuda a disminuir la hinchazón en la zona
              abdominal, además mantiene en la posición correcta los órganos
              internos, favoreciendo así el funcionamiento del organismo
            </p>
          </div>

          <!-- Card footer -->
          <div
            class="rounded-bottom mdb-color lighten-3 text-center pt-3"
          ></div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <!-- Card image -->
          <div class="view overlay">
            <img
              class="card-img-top"
              src="../assets/img/GruposMusculos/Brazo/brazo.jpg"
              alt="Card image cap"
            />
            <a>
              <div class="mask rgba-white-slight">
                <!-- Button -->
                <button class="botonF1" @click="verEjercicios(5)">
                  <span> >> </span>
                </button>
              </div>
            </a>
          </div>

          <!-- Card content -->
          <div class="card-body">
            <!-- Title -->
            <h4 class="card-title">Brazo</h4>
            <hr />
            <!-- Text -->
            <p class="card-text">
              El entrenamiento de los antebrazos, muñecas y manos en todas sus
              variantes y movimientos te ayudará a mejorar tu agarre, reducir la
              tensión del codo y la muñeca y aumentar tu flexibilidad y
              destreza.
            </p>
          </div>

          <!-- Card footer -->
          <div
            class="rounded-bottom mdb-color lighten-3 text-center pt-3"
          ></div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <!-- Card image -->
          <div class="view overlay">
            <img
              class="card-img-top"
              src="../assets/img/GruposMusculos/Espalda/espalda.jpg"
              alt="Card image cap"
            />
            <a>
              <div class="mask rgba-white-slight">
                <!-- Button -->
                <button class="botonF1" @click="verEjercicios(6)">
                  <span> >> </span>
                </button>
              </div>
            </a>
          </div>

          <!-- Card content -->
          <div class="card-body">
            <!-- Title -->
            <h4 class="card-title">Espalda</h4>
            <hr />
            <!-- Text -->
            <p class="card-text">
              La musculatura de la espalda así, no sólo contribuye a estabilizar
              el cuerpo como lo hacen otros músculos del core sino también,
              influyen en nuestra postura corporal y dependiendo de cada músculo
              en particular, ayudan a estabilizar la pelvis, permitir
              movimientos de hombros y brazos e incluso, de la cabeza.
            </p>
          </div>

          <!-- Card footer -->
          <div
            class="rounded-bottom mdb-color lighten-3 text-center pt-3"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../router/index'
var tipoEjercicio
var grupoMuscular;
export default {
  
  name: 'GroupExercises',
  created() {
    debugger;
    tipoEjercicio = parseInt(this.$router.currentRoute.params.tipoEjercicio);
  },
  beforeCreate() {
  },
  data: {
  },
  methods: {
    verEjercicios(grupoMuscular) {
      debugger;
      switch (tipoEjercicio) {
        case 1:
          this.$router.replace({name: 'ExercisesGym', params: { grupo: grupoMuscular }});
          break;
      
        case 2:
          this.$router.replace({name: 'HomeExercises', params: { grupo: grupoMuscular }});
          break;
      }
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
    top: 200px;
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
  .texto{
    color: black;
    -webkit-text-stroke: 0.4px rgb(255, 249, 249);
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

#nav {
  .logo {
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 17px;
    margin: 4px 2px;
    cursor: pointer;
    width: 40%;
    display: inline-block;
    color: white;
    img {
      width: 40px;
    }
    .img2{
      width: 40px;
      text-align: left;
    }
  }
  .end {
    width: 60%;
    display: inline-block;
    text-align: right;
  }
  a {
    margin-left: 30px;
    font-weight: bold;
    color: #ffffff;
  }
}
</style>
