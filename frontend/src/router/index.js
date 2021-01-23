import Vue from 'vue'
import VueRouter from 'vue-router'
import multiguard from 'vue-router-multiguard'
import store from '../store'

Vue.use(VueRouter)

const isNotLogged = (to, from, next) => {
  debugger;
  if (!store.getters.tokenAuth) {
    next()
  } 
}

const isLoggedIn = (to, from, next) => {
  debugger;
  if (store.getters.tokenAuth) {
    next()
  } 
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    beforeEnter: multiguard([isNotLogged]),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: multiguard([isNotLogged]),
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
    beforeEnter: multiguard([isLoggedIn]),
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () => import('../views/Inventory.vue'),
    beforeEnter: multiguard([isLoggedIn]),
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue'),
    beforeEnter: multiguard([isLoggedIn]),
  },
  {
    path: '/homeUsuario',
    name: 'HomeUsuario',
    component: () => import('../views/HomeUsuarios.vue'),
    beforeEnter: multiguard([isLoggedIn]),
  },
  {
    path: '/groupExercises/:tipoEjercicio',
    name: 'GroupExercises',
    component: () => import('../views/GroupExercises.vue'),
    beforeEnter: multiguard([isLoggedIn]),
  },
  {
    path: '/exercisesGym/:grupo',
    name: 'ExercisesGym',
    component: () => import('../views/ExercisesGym.vue'),
    beforeEnter: multiguard([isLoggedIn]),
  },
  {
    path: '/homeExercises/:grupo',
    name: 'HomeExercises',
    component: () => import('../views/HomeExercises.vue'),
    beforeEnter: multiguard([isLoggedIn]),
  }
]

const router = new VueRouter({
  routes,
})

export default router
