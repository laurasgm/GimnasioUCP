<template>
  <div class="container-gruop">
    <h1>Grupos de ejercicios</h1>
	<!-- Card -->
  <div class="row">
    <div class="col-md-4">
      <div class="card">
        <!-- Card image -->
        <div class="view overlay">
          <img
            class="card-img-top"
            src="../assets/img/muslos.jpg"
            alt="Card image cap"
          />
          <a>
            <div class="mask rgba-white-slight">
              <!-- Button -->
              <button class="botonF1">
                <span>
                  >>
                </span>
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
            Aumentar la fuerza, la resistencia, fortalecer las articulaciones, o
            mejorar ciertos movimientos serán algunas de las ventajas que
            obtendremos entrenando pierna y que podremos trasladar a cualquier
            deporte que practiquemos fuera del gimnasio.
          </p>
        </div>

        <!-- Card footer -->
        <div class="rounded-bottom mdb-color lighten-3 text-center pt-3"></div>
      </div>
    </div>
	<div class="col-md-4">
      <div class="card">
        <!-- Card image -->
        <div class="view overlay">
          <img
            class="card-img-top"
            src="../assets/img/muslos.jpg"
            alt="Card image cap"
          />
          <a>
            <div class="mask rgba-white-slight">
              <!-- Button -->
              <button class="botonF1">
                <span>
                  >>
                </span>
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
            Aumentar la fuerza, la resistencia, fortalecer las articulaciones, o
            mejorar ciertos movimientos serán algunas de las ventajas que
            obtendremos entrenando pierna y que podremos trasladar a cualquier
            deporte que practiquemos fuera del gimnasio.
          </p>
        </div>

        <!-- Card footer -->
        <div class="rounded-bottom mdb-color lighten-3 text-center pt-3"></div>
      </div>
    </div>
	<div class="col-md-4">
      <div class="card">
        <!-- Card image -->
        <div class="view overlay">
          <img
            class="card-img-top"
            src="../assets/img/muslos.jpg"
            alt="Card image cap"
          />
          <a>
            <div class="mask rgba-white-slight">
              <!-- Button -->
              <button class="botonF1">
                <span>
                  >>
                </span>
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
            Aumentar la fuerza, la resistencia, fortalecer las articulaciones, o
            mejorar ciertos movimientos serán algunas de las ventajas que
            obtendremos entrenando pierna y que podremos trasladar a cualquier
            deporte que practiquemos fuera del gimnasio.
          </p>
        </div>

        <!-- Card footer -->
        <div class="rounded-bottom mdb-color lighten-3 text-center pt-3"></div>
      </div>
    </div>
  </div>
  <!-- Card -->
  </div>
  
</template>

<style lang="scss" scoped>
.container-gruop {
  display: block;
  width: 100%;
  background-image: url("../assets/img/1.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100%;
  height: 100vh;
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
}
</style>
