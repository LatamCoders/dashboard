import Vue from 'vue'
import VueRouter from 'vue-router'
// import { canNavigate } from '@/libs/acl/routeProtection'
// import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    }, */
    {
      path: '/',
      name: 'home-corporate-acount',
      component: () => import('@/views/Pages/HomeCorporateAcount.vue'),
      meta: {
        pageTitle: 'Home Corporative',
        breadcrumb: [
          {
            text: 'Home Corporative',
            active: true,
          },
        ],
      },
    },
    {
      path: '/all-patient',
      name: 'list-all-patient',
      component: () => import('@/views/Pages/ListPacientes.vue'),
      meta: {
        pageTitle: 'All patient',
      },
    },
    {
      path: '/create-patient',
      name: 'create-patient',
      component: () => import('@/views/Pages/CreatePatient.vue'),
      meta: {
        pageTitle: 'Create patient',
      },
    },
    {
      path: '/request-service',
      name: 'request-service',
      component: () => import('@/views/Pages/RequestService.vue'),
      meta: {
        pageTitle: 'Request service',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
        // // resource: 'Auth',
        // // redirectIfLoggedIn: false,
      },
    },
    {
      path: '/login-corporative',
      name: 'login-corporate-acount',
      component: () => import('@/views/Pages/LoginCorporateAcount.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Pages/Register.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/register-acount-corporative',
      name: 'register-corporative',
      component: () => import('@/views/Pages/RegisterCorporateAcount.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('@/views/Pages/ForgotPassword.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/not-authorized',
      name: 'not-authorized',
      component: () => import('@/views/Pages/NotAuthorized.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// router.beforeEach((to, _, next) => {
//   const isLoggedIn = isUserLoggedIn()
//
//   if (!canNavigate(to)) {
//     // Redirect to login if not logged in
//     if (!isLoggedIn) return next({ name: 'login' })
//
//     // If logged in => not authorized
//     return next({ name: 'not-authorized' })
//   }
//
//   // Redirect if logged in
//   if (to.meta.redirectIfLoggedIn && isLoggedIn) {
//     const userData = getUserData()
//     next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
//   }
//
//   return next()
// })

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
