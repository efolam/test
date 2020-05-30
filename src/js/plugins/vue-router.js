import Vue from "vue"
import VueRouter from "vue-router"

import PageHome from "@pages/PageHome"

Vue.use(VueRouter)

const routes = [
  { path: '/', component: PageHome}
]

export default new VueRouter({
  mode: 'history',
  routes
})
