import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Customers from "../views/Customers.vue"
import Reports from "../views/Reports.vue"
import editCustomer from "../views/editCustomer.vue"
import Calculate from "../views/Calculate.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/customers/:id',
    name: 'editCustomer',
    component: editCustomer,
    props : true
  }
  ,
  {
    path: '/reports',
    name: 'Reports',
    component: Reports
  },
  {
    path: '/calculate',
    name: 'Calculate',
    component: Calculate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
