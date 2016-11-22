import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Offer from '../components/Offer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/top', component: Home },
    { path: '/offer/:id', name: 'offer', component: Offer },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/', redirect: '/top' }
  ]
})
