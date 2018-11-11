import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/pages/homePage'
import signInPage from '@/components/pages/signInPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },

    {
      path: '/signIn',
      name: 'signIn',
      component: signInPage
    }
  ]
})
