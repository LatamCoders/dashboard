import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
import VueCardFormat from 'vue-credit-card-validation'


import router from './router'
import store from './store/index'
import App from './App.vue'

import * as VueGoogleMaps from "vue2-google-maps"
// Global Components
import './global-components'

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import axiosIns from "@/libs/axios";

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.use(VueCardFormat);

// Composition API
Vue.use(VueCompositionAPI)

// integración mapa
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC1dIJmjEeVHml0mLlTmYeVqQBKCeNcNBw",
    libraries: "places",
    v: 3.38,
    openNow:true
  }
});

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

axiosIns.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.getters['Users/userToken']}`
  return config;
})


// Redirect if not login
router.beforeEach((to, from, next) => {
  /*Comprobar si esta logueado*/
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters["Users/loggedIn"]) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else {
    next()
  }

  //Entrar corporate account
  if (to.matched.some(record => record.meta.permission === '3')) {
    if (store.getters["Users/userData"].user.role.id === 3) {
      next()
    } else {
      next({
        name: 'login',
      })
    }
  } else {
    next()
  }

  /*Entrar si es admin*/
  if (to.matched.some(record => record.meta.permission === '2')) {
    if (store.getters["Users/userData"].user.role.id  === 2) {
      next()
    } else {
      next({
        name: 'login',
      })
    }
  } else {
    next()
  }
  /*Entrar si es super-admin*/
  if (to.matched.some(record => record.meta.permission === '1')) {
    if (store.getters["Users/userData"].user.role.id === 1) {
      next()
    } else {
      next({
        name: 'login',
      })
    }
  } else {
    next()
  }

});

new Vue({
  store,
  router,
  created() {
    axiosIns.interceptors.response.use(
        response => response,
        error => {
          if (error.response.status === 401) {
            this.$store.dispatch('Users/deleteSessionInfo')

            this.$swal({
              icon: 'error',
              title: "Session expired",
              customClass: {
                confirmButton: 'btn btn-primary',
              },
              buttonsStyling: false,
            })

            this.$router.push({ name: 'login' })
          }
          return Promise.reject(error)
        }
    )
  },
  render: h => h(App),
}).$mount('#app')
