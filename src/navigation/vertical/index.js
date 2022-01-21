

export default [
    {
        title: 'Dashboard corporative',
        route: 'corporate-acount',
        icon: 'HomeIcon',
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
    // {
    //     title: 'Booking center',
    //     route: 'home-corporate-acount',
    //     icon: 'HomeIcon',
    //     meta: {
    //         requiresAuth: true,
    //         permission: '2'
    //     },
    //     children: [
    //         {
    //             title: 'Trips',
    //             route: 'trips',
    //         },
    //         {
    //             title: 'Booking and tracking',
    //             route: 'booking-and-tracking',
    //         },
    //     ],
    // },
    // {
    //     title: 'Clients',
    //     route: 'second-page',
    //     icon: 'UserIcon',
    //     children: [
    //         {
    //             title: 'Profiles',
    //             route: '',
    //         },
    //         {
    //             title: 'Call/Chat center',
    //             route: '/',
    //         },
    //     ],
    // },
    // {
    //   title: 'Providers',
    //   route: '/',
    //   icon: 'CheckSquareIcon',
    // },
    // {
    //   title: 'Reports',
    //   route: '/',
    //   icon: 'CalendarIcon',
    // },
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
