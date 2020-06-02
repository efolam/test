import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@pages/Home'
import TaskGroups from '@pages/TaskGroups'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home},
  { path: '/task-groups', component: TaskGroups}
]

export default new VueRouter({
  routes
})
