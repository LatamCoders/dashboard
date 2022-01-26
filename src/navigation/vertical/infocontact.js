
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
        title: 'Consult clients',
        route: 'second-page',
        icon: 'UserIcon',
        children: [
            {
                title: 'Clients',
                route: 'clients',
            },
            {
                title: 'Call/Chat center',
                route: '/',
            },
        ],
    },
    {
      title: 'Providers',
      route: 'providers',
      icon: 'CheckSquareIcon',
    },
    {
      title: 'Reports',
      route: '/',
      icon: 'CalendarIcon',
    },
    {
        title: 'Support',
        route: '/',
        icon: 'GridIcon',
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
