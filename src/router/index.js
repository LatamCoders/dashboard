import Vue from 'vue'
import VueRouter from 'vue-router'
// import { canNavigate } from '@/libs/acl/routeProtection'
// import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
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
                permission: '1 && 2',
                pageTitle: 'Home Admin',
                breadcrumb: [
                    {
                        text: 'Home Admin',
                        active: true,
                    },
                ],

            },
        },

        /***************** INITIO  OPTIONS CORPORATE ACCOUNTS       **********************/

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
                requiresAuth: true,
                permission: '3'
            },
        },
        {
            path: '/create-patient',
            name: 'create-patient',
            component: () => import('@/views/Pages/CreatePatient.vue'),
            meta: {
                pageTitle: 'Create patient',
                requiresAuth: true,
                permission: '3'
            },
        },
        {
            path: '/request-service',
            name: 'request-service',
            component: () => import('@/views/Pages/RequestService.vue'),
            meta: {
                pageTitle: 'Request service',
                requiresAuth: true,
                permission: '3'
            },
        },
        /***************** END OPTIONS CORPORATE ACCOUNTS  *******************/

        /************ INITIO TRIPS ****************/

        {
            path: '/trips',
            name: 'trips',
            component: () => import('@/views/Pages/admin/Trips.vue'),
            meta: {
                pageTitle: 'Trips',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/trips/reservation-in-progress',
            name: 'reservation-in-progress',
            component: () => import('@/views/Pages/admin/BookedTrips.vue'),
            meta: {
                pageTitle: 'Reservation in progress',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/trips/canceled-reservations',
            name: 'canceled-reservations',
            component: () => import('@/views/Pages/admin/CanceledReservations.vue'),
            meta: {
                pageTitle: 'Canceled reservations',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/trips/reservation-to-accepted',
            name: 'reservation-to-accepted',
            component: () => import('@/views/Pages/admin/ReservationToAccept.vue'),
            meta: {
                pageTitle: 'Reservation to accepted',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/trips/reservation-to-accepted/:id/details',
            name: 'details-reservation',
            props: true,
            component: () => import('@/views/Pages/admin/DetailsReservation.vue'),
            meta: {
                pageTitle: 'Reservation details',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/trips/reservation-to-cancel',
            name: 'reservation-to-cancel',
            component: () => import('@/views/Pages/admin/ReservationToCancel.vue'),
            meta: {
                pageTitle: 'Reservation to cancel',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/trips/completed-trips',
            name: 'completed-trips',
            component: () => import('@/views/Pages/admin/ReservationCompleted.vue'),
            meta: {
                pageTitle: 'Reservation completed',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },

        /******************** END RUTAS OF TRIPS       ************************/


        //Rutas para booking

        /*************** INITIO RUTA PARA BOOKING  *******************/
        {
            path: '/booking',
            name: 'booking-and-tracking',
            component: () => import('@/views/Pages/admin/BookingAndTracking.vue'),
            meta: {
                pageTitle: 'Booking and Tracking',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/booking/approve-drivers',
            name: 'approve-drivers',
            component: () => import('@/views/Pages/admin/ApproveDrivers.vue'),
            meta: {
                pageTitle: 'Approve drivers',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/booking/assign-driver',
            name: 'assign-driver',
            component: () => import('@/views/Pages/admin/AssignDriver.vue'),
            meta: {
                pageTitle: 'Assign driver',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/booking/assign-driver/details-assign-driver/:booking_id',
            name: 'details-assign-driver',
            props: true,
            component: () => import('@/views/Pages/admin/DetailsAssignDriver.vue'),
            meta: {
                pageTitle: 'Details assign driver',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/booking/approve-drivers/:id/details',
            name: 'details-driver-view',
            props: true,
            component: () => import('@/views/Pages/admin/DetailsDriver.vue'),
            meta: {
                pageTitle: 'Driver details',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/my-bookings',
            name: 'bookings',
            props: true,
            component: () => import('@/views/Pages/BookingCA.vue'),
            meta: {
                pageTitle: 'List bookings',
                requiresAuth: true,
                permission: '3'
            },
        },

        /*************** END RUTA PARA BOOKING   *******************/

        //Rutas para opción del admin ver clientes

        /*************** INITIO RUTA PARA CLIENT PROVED   *******************/
        {
            path: '/clients/drivers',
            name: 'Drivers',
            props: true,
            component: () => import('@/views/Pages/admin/Drivers.vue'),
            meta: {
                pageTitle: 'Drivers',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/clients/drivers/cma',
            name: 'cma',
            props: true,
            component: () => import('@/views/Pages/admin/CMA.vue'),
            meta: {
                pageTitle: 'CMA',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/clients/drivers/providers',
            name: 'providers',
            props: true,
            component: () => import('@/views/Pages/admin/Providers.vue'),
            meta: {
                pageTitle: 'Providers',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/clients/providers/:driver_id/details-provider',
            name: 'details-provider',
            props: true,
            component: () => import('@/views/Pages/admin/DetailsProviders.vue'),
            meta: {
                pageTitle: 'Details provider',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        /*************** END RUTA PARA CLIENTE PROVEEDOR   *******************/

        /*************** INITIO RUTA PARA CLIENT CORPORATE ACCOUNT   *******************/
        {
            path: '/clients/corporate-account',
            name: 'clients',
            component: () => import('@/views/Pages/admin/Clients.vue'),
            meta: {
                pageTitle: 'Corporate accounts',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        {
            path: '/clients/corporate-account/details/:id',
            name: 'details-corporate-account',
            props: true,
            component: () => import('@/views/Pages/admin/DetailsClientsCorporateAccount.vue'),
            meta: {
                pageTitle: 'Corporate account details',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },
        /*************** END RUTA PARA CLIENT CORPORATE ACCOUNT   *******************/


        {
            path: '/reports',
            name: 'reports',
            component: () => import('@/views/Pages/admin/Reports.vue'),
            meta: {
                pageTitle: 'Reports',
                requiresAuth: true,
                permission: '1 && 2'
            },
        },

        /*************** INITIO ROUTE FOR REGISTERS  *******************/
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/Pages/Register.vue'),
            meta: {
                layout: 'full',
            },
        },
        {
            path: '/create-admin',
            name: 'create-admin',
            component: () => import('@/views/Pages/superadmin/CreateAdmin.vue'),
            meta: {
                pageTitle: 'Create admin',
                requiresAuth: true,
                permission: '1'
            },
        },
        {
            path: '/assign-role',
            name: 'assign-role',
            component: () => import('@/views/Pages/superadmin/AssignRoleUser.vue'),
            meta: {
                pageTitle: 'Assign role',
                requiresAuth: true,
                permission: '1'
            },
        },

        /*************** END ROUTE FOR REGISTERS   *******************/
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: () => import('@/views/Pages/ForgotPassword.vue'),
            meta: {
                layout: 'full',
            },
        },

        {
            path: '/profile',
            name: 'profile',
            component: () => import('@/views/Pages/profile/Profile.vue'),
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/profile/:client_id',
            name: 'profile-patient',
            props: true,
            component: () => import('@/views/Pages/profile/ProfilePatient.vue'),
            meta: {
                requiresAuth: true,
            },
        },

        /******************   Billings       ****************************/

        {
            path: '/billing',
            name: 'billing',
            component: () => import('@/views/Pages/Billing.vue'),
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: '/billing/payments-made',
            name: 'PaymentsMade',
            component: () => import('@/views/Pages/Billings/PaymentsMade.vue'),
            meta: {
                pageTitle: 'Payments made',
                requiresAuth: true,
            },
        },
        {
            path: '/billing/payments-to-be-made',
            name: 'PaymentsToBeMade',
            component: () => import('@/views/Pages/Billings/PaymentsToBeMade.vue'),
            meta: {
                pageTitle: 'Payments To Be Made',
                requiresAuth: true,
            },
        },
        {
            path: '/billing/refused-payments',
            name: 'RefusedPayments',
            component: () => import('@/views/Pages/Billings/RefusedPayments.vue'),
            meta: {
                pageTitle: 'Refused payments',
                requiresAuth: true,
            },
        },
        {
            path: '/billing/payment',
            name: 'Payments',
            component: () => import('@/views/Pages/Billings/Payments.vue'),
            meta: {
                pageTitle: 'Payment',
                requiresAuth: true,
            },
        },

        /************************ End Billing **********************************/
        // {
        //     path: '/',
        //     name: 'page-construction',
        //     component: () => import('@/views/error/PageConstruction.vue'),
        // },
        {
            path: '/login',
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
            path: '/error-404',
            name: 'error-404',
            component: () => import('@/views/error/Error404.vue'),
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
