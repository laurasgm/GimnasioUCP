<template>
  <div class="container">
    <div class="row">
    <div class="container-form text-center">
      <h1 class="title">BIENVENIDO</h1>
      <h1>JOSÉ SPORT GYM</h1>

      <div @click="$router.push('/login')" class="btn btn-standar mr-4">
        INICIAR SESION
      </div>
      <div @click="$router.push('/register')" class="btn btn-standar">
        REGISTRARSE
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.container-form {
  display: block;
  width: 100%;
  background-image: url('../assets/img/1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
}

h1 {
  color: white;
  font-size: 2.5rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 50px;
}
.title {
  font-size: 8rem;
}
</style>
