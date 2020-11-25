<template>
  <mdb-container class="container">
    <mdb-row>
      <mdb-col sm="6">
        <mdb-card class="card1">
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="texto" >
                <mdb-icon  icon="chart-pie" />Home</h5>
              <mdb-card-title tag="h3" class="texto"><strong>Ejercicio en Casa</strong></mdb-card-title>
              <p class="textoParrafo1">Estas rutinas para hacer ejercicios en casa son la forma ideal de tonificar, 
                mantenerse en movimiento y trabajar el cuerpo
                de forma fácil, segura y rápida
              </p>
              <mdb-btn class="btn btn-standar"><mdb-icon icon="clone left" />Entrar</mdb-btn>
            </div>
          </div>
        </mdb-card>
      </mdb-col>
      <mdb-col sm="6">
        <mdb-card class="card2">
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="texto" >
                <mdb-icon  icon="chart-pie" />Gym</h5>
              <mdb-card-title tag="h3" class="texto"><strong>Ejercicio en Gimnasio</strong></mdb-card-title>
              <p class="textoParrafo2">Rutinas de Gimnasio . Diferentes entrenamientos y sistemas para alcanzar la forma fisica perfecta. 
                Aprende con estas fantasticas rutinas para el gym
              </p>
              <mdb-btn class="btn btn-standar"><mdb-icon icon="clone left" />Entrar</mdb-btn>
            </div>
          </div>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
	import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
	export default {
		name: 'CardProPage',
		components: {
			mdbContainer,
			mdbRow,
			mdbCol,
			mdbCard,
			mdbCardImage,
			mdbCardHeader,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbCardFooter,
			mdbCardUp,
			mdbCardAvatar,
			mdbCardGroup,
			mdbBtn,
			mdbView,
			mdbMask,
			mdbIcon
		}
	}
</script>


<style lang="scss" scoped>
.container {
  display: block;
  width: 100%;
  background-image: url('../assets/img/1.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
  padding-top: 150px;
  text-align: center;
  .row {
    margin: 0;
    padding: 50px 10% 0px 10%;
  }
}
.card1{
  background-image: url('../assets/img/ejerciciocasa.jpg');
   background-size: 150%;
   background-position: 30% 75%;  
   background-size: cover;
   opacity: 0.9;
}
.card2{
  background-image: url('../assets/img/ejerciciogym.jpg');
  background-size: 120%;
  background-position: 30% 75%;    
  background-size: cover;
  opacity: 0.9;
}
.texto{
  color: black;
  -webkit-text-stroke: 0.4px rgb(255, 249, 249);
}
.textoParrafo1{
  color: rgb(255, 255, 255);
  
}
.textoParrafo2{
  color: rgb(255, 253, 253);
}

@media (max-width: 570px) {
    .card2 {
        margin-top: 20px
    }
    .container{
      background-color: url('../assets/img/1.jpg');
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      height: 100%;
      width: 100% ;
      text-align: center;
    }
}
</style>