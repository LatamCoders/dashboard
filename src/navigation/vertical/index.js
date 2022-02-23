

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
        title: 'Booked trips',
        icon: 'MapPinIcon'
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
