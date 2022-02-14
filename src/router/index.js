import Vue from 'vue'
import VueRouter from 'vue-router'
// import { canNavigate } from '@/libs/acl/routeProtection'
// import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'

Vue.use(VueRouter)

const router = new VueRouter({
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [
        {
            path: '/home-admin',
            name: 'home-admin',
            component: () => import('@/views/Pages/admin/HomeAdmin.vue'),
            meta: {
                requiresAuth: true,
                permissions: '2',
                pageTitle: 'Home Admin',
                breadcrumb: [
                    {
                        text: 'Home Admin',
                        active: true,
                    },
                ],

            },
        },
        {
            path: '/home-corporate-account',
            name: 'home-corporate-account',
            component: () => import('@/views/Pages/HomeCorporateAcount.vue'),
            meta: {
                pageTitle: 'Welcome to Corporate Account',
                breadcrumb: [
                    {
                        text: 'Home Corporate Account',
                        active: true,
                    },
                ],
                requiresAuth: true,
                permission: '3'
            },
        },
        {
            path: '/all-patient',
            name: 'all-patient',
            component: () => import('@/views/Pages/ListPacientes.vue'),
            meta: {
                pageTitle: 'Patient List',
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
            path: '/trips',
            name: 'trips',
            component: () => import('@/views/Pages/admin/Trips.vue'),
            meta: {
                pageTitle: 'Trips',
            },
        },
        {
            path: '/trips/booked-trips',
            name: 'booked-trips',
            component: () => import('@/views/Pages/admin/BookedTrips.vue'),
            meta: {
                pageTitle: 'Booked Trips',
            },
        },
        {
            path: '/trips/canceled-reservations',
            name: 'canceled-reservations',
            component: () => import('@/views/Pages/admin/CanceledReservations.vue'),
            meta: {
                pageTitle: 'Canceled reservations',
            },
        },
        {
            path: '/trips/reservation-to-accepted',
            name: 'reservation-to-accepted',
            component: () => import('@/views/Pages/admin/ReservationToAccept.vue'),
            meta: {
                pageTitle: 'Reservation to accepted',
            },
        },
        {
            path: '/booking',
            name: 'booking-and-tracking',
            component: () => import('@/views/Pages/admin/BookingAndTracking.vue'),
            meta: {
                pageTitle: 'Booking and Tracking',
            },
        },
        {
            path: '/booking/approve-drivers',
            name: 'approve-drivers',
            component: () => import('@/views/Pages/admin/ApproveDrivers.vue'),
            meta: {
                pageTitle: 'Approve drivers',
            },
        },
        {
            path: '/booking/assign-driver',
            name: 'assign-driver',
            component: () => import('@/views/Pages/admin/AssignDriver.vue'),
            meta: {
                pageTitle: 'Assign driver',
            },
        },
        {
            path: '/booking/assign-driver/details-assign-driver',
            name: 'details-assign-driver',
            component: () => import('@/views/Pages/admin/DetailsAssignDriver.vue'),
            meta: {
                pageTitle: 'Details assign driver',
            },
        },
        {
            path: '/booking/approve-drivers/details',
            name: 'details-driver-view',
            component: () => import('@/views/Pages/admin/DetailsDriver.vue'),
            meta: {
                pageTitle: 'Details driver',
            },
        },
        {
            path: '/providers',
            name: 'providers',
            component: () => import('@/views/Pages/admin/Providers.vue'),
            meta: {
                pageTitle: 'Providers',
            },
        },
        {
            path: '/providers/details-provider/:id',
            name: 'details-provider',
            props: true,
            component: () => import('@/views/Pages/admin/DetailsProviders.vue'),
            meta: {
                pageTitle: 'Details provider',
            },
        },
        {
            path: '/reports',
            name: 'reports',
            component: () => import('@/views/Pages/admin/Reports.vue'),
            meta: {
                pageTitle: 'Reports',
            },
        },
        {
            path: '/',
            name: 'login',
            component: () => import('@/views/Login.vue'),
            meta: {
                layout: 'full',
                // // resource: 'Auth',
                // // redirectIfLoggedIn: false,
                breadcrumb: [
                    {
                        text: 'Login',
                        active: true,
                    },
                ],
            },
        },
        {
            path: '/clients',
            name: 'clients',
            component: () => import('@/views/Pages/admin/Clients.vue'),
            meta: {
                pageTitle: 'Clients',
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
            path: '/profile',
            name: 'profile',
            component: () => import('@/views/Pages/profile/Profile.vue'),
        },
        {
            path: '/billing',
            name: 'billing',
            component: () => import('@/views/Pages/Billing.vue'),
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
