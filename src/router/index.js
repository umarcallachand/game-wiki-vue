import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/pages/HomePage'
import P404 from '../views/components/P404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '*',
      name: '404',
      component: P404
    }
  ]
})
