import '../css/app'

import Vue from 'vue'
import router from './plugins/vue-router'
import store from './plugins/vuex'

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
