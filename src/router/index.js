import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/pages/HomePage'
import DetailedPage from '../views/pages/DetailedPage'
import Page404 from '../views/components/Page404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/details',
      name: 'details',
      component: DetailedPage
    },
    {
      path: '*',
      name: '404',
      component: Page404
    }
  ]
})
