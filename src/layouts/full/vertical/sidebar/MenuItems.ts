import { uniqueId } from 'lodash';

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  // IconPoint,
  // IconNotes,
  // IconCalendar,
  // IconMail,
  // IconTicket,
  IconUserCircle,
  IconPackage,
  // IconMessage2,
  // IconBasket,
  // IconChartDonut3,
  // IconShoppingCart,
  IconAperture,
} from '@tabler/icons-react';

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconAperture,
    href: '/dashboards',
    chip: '',
    chipColor: 'secondary',
  },
  {
    id: uniqueId(),
    title: 'Users',
    icon: IconUserCircle,
    href: '/users',
    chip: '',
    chipColor: 'secondary',
  },
  {
    navlabel: true,
    subheader: 'Requests',
  },
  {
    id: uniqueId(),
    title: 'Requests',
    icon: IconPackage,
    href: '/requests',
    chip: '73',
    chipColor: 'success',
  },

  // {
  //   id: uniqueId(),
  //   title: 'eCommerce',
  //   icon: IconShoppingCart,
  //   href: '/dashboards/ecommerce',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Apps',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Contacts',
  //   icon: IconPackage,
  //   chip: '',
  //   chipColor: 'secondary',
  //   href: '/apps/contacts',
  // },

  // {
  //   id: uniqueId(),
  //   title: 'Blog',
  //   icon: IconChartDonut3,
  //   href: '/apps/blog/',
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: 'Posts',
  //       icon: IconPoint,
  //       href: '/apps/blog/posts',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'Detail',
  //       icon: IconPoint,
  //       href: '/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow',
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Ecommerce',
  //   icon: IconBasket,
  //   href: '/apps/ecommerce/',
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: 'Shop',
  //       icon: IconPoint,
  //       href: '/apps/ecommerce/shop',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'Detail',
  //       icon: IconPoint,
  //       href: '/apps/ecommerce/detail/1',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'List',
  //       icon: IconPoint,
  //       href: '/apps/ecommerce/eco-product-list',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'Checkout',
  //       icon: IconPoint,
  //       href: '/apps/ecommerce/eco-checkout',
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Chats',
  //   icon: IconMessage2,
  //   href: '/apps/chats',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Users',
  //   icon: IconUserCircle,
  //   href: '/user-profile',
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: 'Profile',
  //       icon: IconPoint,
  //       href: '/user-profile',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'Followers',
  //       icon: IconPoint,
  //       href: '/apps/followers',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'Friends',
  //       icon: IconPoint,
  //       href: '/apps/friends',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'Gallery',
  //       icon: IconPoint,
  //       href: '/apps/gallery',
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Notes',
  //   icon: IconNotes,
  //   href: '/apps/notes',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Calendar',
  //   icon: IconCalendar,
  //   href: '/apps/calendar',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Email',
  //   icon: IconMail,
  //   href: '/apps/email',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Tickets',
  //   icon: IconTicket,
  //   href: '/apps/tickets',
  // },
 
];

export default Menuitems;
