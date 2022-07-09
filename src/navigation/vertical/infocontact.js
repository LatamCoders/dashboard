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
            },
        ],
    },
    // {
    //   title: 'Providers',
    //   route: 'providers',
    //   icon: 'CheckSquareIcon',
    // },
    {
        title: 'Reports',
        icon: 'CalendarIcon',
    },
    {
        title: 'Support',
        icon: 'SettingsIcon',
        children: [
            {
                title: 'Difficult cases',
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
