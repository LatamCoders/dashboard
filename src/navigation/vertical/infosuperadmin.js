
export default [
  {
    title: 'Booking center',
    route: 'home-corporate-acount',
    icon: 'HomeIcon',
    meta: {
      requiresAuth: true,
      permission: '2'
    },
    children: [
      {
        title: 'Trips',
        route: 'trips',
      },
      {
        title: 'Booking and tracking',
        route: 'booking-and-tracking',
      },
    ],
  },
  {
    title: 'Assign role',
    route: 'assign-role',
    icon: 'UserCheckIcon',
    meta: {
      requiresAuth: true,
      permission: '2'
    },
  },
  {
    title: 'Create admin',
    route: 'create-admin',
    icon: 'UserPlusIcon',
    meta: {
      requiresAuth: true,
      permission: '2'
    },
  },
  {
    title: 'Consult clients',
    route: 'second-page',
    icon: 'UserIcon',
    children: [
      {
        title: 'Corporate accounts',
        route: 'clients',
      },
      {
        title: 'Drivers',
        route: 'Drivers',
      },
      {
        title: 'Call/Chat center',
        route: '/',
      },
    ],
    meta: {
      requiresAuth: true,
      permission: '2'
    },
  },
  {
    title: 'Reports',
    route: '/',
    icon: 'CalendarIcon',
    meta: {
      requiresAuth: true,
      permission: '2'
    },
  },
  {
    title: 'Support',
    route: '/',
    icon: 'SettingsIcon',
    children: [
      {
        title: 'Difficult cases',
        route: '/',
      },
    ],
    meta: {
      requiresAuth: true,
      permission: '2'
    },
  },
  {
    title: 'Billing',
    route: 'billing',
    icon: 'CreditCardIcon',
    meta: {
      requiresAuth: true,
      permission: '2'
    },
  },
  {
    title: 'Profile',
    route: 'profile',
    icon: 'UserIcon',
    meta: {
      requiresAuth: true,
      permission: '2'
    },
  },
  {
    title: 'Dashboard corporative',
    route: 'corporate-acount',
    icon: 'HomeIcon',
    meta: {
      requiresAuth: true,
      permission: '3'
    },
    children: [
      {
        title: 'Create a patient',
        route: 'create-patient',
      },
      {
        title: 'Request a trip',
        route: 'request-service',
      },
      {
        title: 'View all patient',
        route: 'all-patient',
      },
    ],

  },
  {
    title: 'Bookings',
    icon: 'MapPinIcon',
    route: 'bookings',
    meta: {
      requiresAuth: true,
      permission: '3'
    },
  },
  {
    title: 'Support',
    route: '/page-construction',
    icon: 'SettingsIcon',
    meta: {
      requiresAuth: true,
      permission: '3'
    },
    children: [
      {
        title: 'Difficult cases',
        route: 'page-construction',
      },
    ],
  },
  {
    title: 'Billing',
    route: 'billing',
    icon: 'DollarSignIcon',
    meta: {
      requiresAuth: true,
      permission: '3'
    },
  },
  {
    title: 'Profile',
    route: 'profile',
    icon: 'UserIcon',
    meta: {
      requiresAuth: true,
      permission: '3'
    },
  },
]
