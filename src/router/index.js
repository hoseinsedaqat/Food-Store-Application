import Vue from 'vue'
import VueRouter from 'vue-router'
import Foods from '../components/Foods.vue'
import Card from '../components/Card.vue'
import User from '../components/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Foods',
    component: Foods
  },
  {
    path: '/Card',
    name: 'Card',
    component: Card
  },
  {
    path: '/User',
    name: 'User',
    component: User
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
