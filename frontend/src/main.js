import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import VModal from 'vue-js-modal'
import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText } from 'mdbvue';
const options = {
  toast: {
    position: SnotifyPosition.rightTop,
  },
}

Vue.use(VModal, {
  dynamicDefaults: {
    draggable: true,
    resizable: true,
    height: 'auto',
  },
})
Vue.use(Snotify, options)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
