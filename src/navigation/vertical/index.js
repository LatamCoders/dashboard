

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
    {
        title: 'Bookings',
        icon: 'MapPinIcon',
        route: 'bookings'
    },
    {
        title: 'Support',
        route: '/page-construction',
        icon: 'GridIcon',
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
    },
    {
        title: 'Profile',
        route: 'profile',
        icon: 'UserIcon',
    },
]
