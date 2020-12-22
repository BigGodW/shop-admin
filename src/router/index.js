import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:'/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})
// 登录校验
router.beforeEach((to,from,next)=>{
  if(to.path !== '/login'){
    if(window.localStorage.getItem('user')){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})


export default router
