
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
    route: '/',
    icon: 'UserCheckIcon'
  },
  {
    title: 'Create admin',
    route: 'create-admin',
    icon: 'UserPlusIcon'
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
  },

  {
    title: 'Reports',
    route: '/',
    icon: 'CalendarIcon',
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
  },
  {
    title: 'Billing',
    route: 'billing',
    icon: 'CreditCardIcon',
  },
  {
    title: 'Profile',
    route: 'profile',
    icon: 'UserIcon',
  },
]
