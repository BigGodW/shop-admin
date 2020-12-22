import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/login.vue'
import Index from "@/views/home/index.vue"
import Users from "@/views/home/users.vue"
import Orders from "@/views/home/orders.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Index',
        component: Index
      },
      {
        path: '/users',
        name: 'Users',
        component: Users
      }, 
      {
        path: '/orders',
        name: 'Orders',
        component: Orders
      },
    ]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})
// 登录校验
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (window.localStorage.getItem('user')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})


export default router
