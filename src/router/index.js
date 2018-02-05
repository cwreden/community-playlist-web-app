import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login'
import Overview from '../components/Overview'
import User from '../components/User'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
