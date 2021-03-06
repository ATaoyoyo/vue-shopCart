import Vue from 'vue'
import VueRouter from 'vue-router'
import Address from '../pages/address'
import Cart from '../pages/cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cart',
    component: Cart
  },
  {
    path: '/address',
    name: 'address',
    component: Address
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
