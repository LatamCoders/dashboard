export default [
  {
    title: 'Dashboard corporative',
    route: 'corporate-acount',
    icon: 'HomeIcon',
    children: [
      {
        title: 'Create user',
        route: 'create-patient',
      },
      {
        title: 'Request service',
        route: 'request-service',
      },
      {
        title: 'View patient',
        route: 'all-patient',
      },
    ],
  },
  // {
  //   title: 'Clients',
  //   route: 'second-page',
  //   icon: 'UserIcon',
  //   children: [
  //     {
  //       title: 'Profiles',
  //       route: '',
  //     },
  //     {
  //       title: 'Call/Chat center',
  //       route: '/',
  //     },
  //   ],
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
    route: '/',
    icon: 'CreditCardIcon',
     /* children: [
       {
        title: 'Pending for Payment',
        route: '/',
      },
    ], */
  },
  {
     title: 'Profile',
     route: '/',
    icon: 'UserIcon',
  },
]
