export default [
  {
    title: 'Booking center',
    route: 'home',
    icon: 'HomeIcon',
    children: [
      {
        title: 'Trips and cancellations',
        route: '/',
      },
      {
        title: 'Booking and tracking',
        route: '/',
      },
    ],
  },
  {
    title: 'Clients',
    route: 'second-page',
    icon: 'UserIcon',
    children: [
      {
        title: 'Profiles',
        route: '',
      },
      {
        title: 'Call/Chat center',
        route: '/',
      },
    ],
  },
  {
    title: 'Providers',
    route: '/',
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
    route: '/',
    icon: 'CreditCardIcon',
    children: [
      {
        title: 'Pending for Payment',
        route: '/',
      },
    ],
  },
  {
    title: 'User',
    route: '/',
    icon: 'UserIcon',
  },
]
