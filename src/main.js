import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './components/Hello'

const routes = [
  { path: '/foo', component: Hello }
]

/* eslint-disable no-new */
new Vue({
  routes,
  el: '#app',
  template: '<App/>',
  components: { App }
})

Vue.use(VueRouter)

