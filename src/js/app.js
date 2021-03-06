import '@/css/app'

import Vue from 'vue'
import router from '@/js/plugins/vue-router'
import store from '@/js/store'
import '@/js/plugins/vue-js-modal'

// Components
import components from './components'
for (let component in components) {
  Vue.component(component, components[component])
}

new Vue({
  el: '#app',
  router,
  store
})
