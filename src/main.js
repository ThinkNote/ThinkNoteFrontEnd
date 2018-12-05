// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Entry from '@/components/entry'
import login from './login/login'
import {Cabinet} from './components/cabinet/'
import { note } from './components/note'
import RouterMaps from './components/constraint/router-maps'
import 'iview/dist/styles/iview.css'
Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: RouterMaps["LoginPage"],
      name: 'LoginPage',
      component: login
    },
    {
      path: RouterMaps['MainPage'],
      name: 'MainPage',
      component: Entry,
      meta: {requiresAuth: true},
      children: [
        {
          path: RouterMaps.NotePage,
          name: 'NotePage',
          component: note
        },
        {
          path: RouterMaps.CabinetPage,
          name: 'CabinetPage',
          component: Cabinet
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
