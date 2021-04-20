import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome)
library.add(faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)