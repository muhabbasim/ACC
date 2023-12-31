// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* **** ACC Pages***** */
const Users = Loadable(lazy(() => import('../Acc_pages/users/Users')));
const AccDasboard = Loadable(lazy(() => import('../Acc_pages/dashboard/Dashboard')));
const UserDetail = Loadable(lazy(() => import('../Acc_pages/user_details/UserDetails')));
const Requests = Loadable(lazy(() => import('../Acc_pages/requests/Requests')));
const RequestDetail = Loadable(lazy(() => import('../Acc_pages/request_details/RequestDetails')));
const Login = Loadable(lazy(() => import('../Acc_pages/auth/login/Login')));
const ForgotPassword = Loadable(lazy(() => import('../Acc_pages/auth/forget_password/ForgotPassword')));
const NotFound = Loadable(lazy(() => import('../Acc_pages/error/Error')));








// const EcommerceDash = Loadable(lazy(() => import('../views/dashboard/Ecommerce')));

// /* ****Apps***** */
// const Blog = Loadable(lazy(() => import('../views/apps/blog/Blog')));
// const BlogDetail = Loadable(lazy(() => import('../views/apps/blog/BlogPost')));
// const Contacts = Loadable(lazy(() => import('../views/apps/contacts/Contacts')));
// const Chats = Loadable(lazy(() => import('../views/apps/chat/Chat')));
// const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')));
// const Tickets = Loadable(lazy(() => import('../views/apps/tickets/Tickets')));
// const Ecommerce = Loadable(lazy(() => import('../views/apps/eCommerce/Ecommerce')));
// const EcommerceDetail = Loadable(lazy(() => import('../views/apps/eCommerce/EcommerceDetail')));
// const EcomProductList = Loadable(lazy(() => import('../views/apps/eCommerce/EcomProductList')));
// const EcomProductCheckout = Loadable(
//   lazy(() => import('../views/apps/eCommerce/EcommerceCheckout')),
// );
// const Calendar = Loadable(lazy(() => import('../views/apps/calendar/BigCalendar')));
// const UserProfile = Loadable(lazy(() => import('../views/apps/user-profile/UserProfile')));
// const Followers = Loadable(lazy(() => import('../views/apps/user-profile/Followers')));
// const Friends = Loadable(lazy(() => import('../views/apps/user-profile/Friends')));
// const Gallery = Loadable(lazy(() => import('../views/apps/user-profile/Gallery')));
// const Email = Loadable(lazy(() => import('../views/apps/email/Email')));

// // ui components
// const MuiAlert = Loadable(lazy(() => import('../views/ui-components/MuiAlert')));
// const MuiAccordion = Loadable(lazy(() => import('../views/ui-components/MuiAccordion')));
// const MuiAvatar = Loadable(lazy(() => import('../views/ui-components/MuiAvatar')));
// const MuiChip = Loadable(lazy(() => import('../views/ui-components/MuiChip')));
// const MuiDialog = Loadable(lazy(() => import('../views/ui-components/MuiDialog')));
// const MuiList = Loadable(lazy(() => import('../views/ui-components/MuiList')));
// const MuiPopover = Loadable(lazy(() => import('../views/ui-components/MuiPopover')));
// const MuiRating = Loadable(lazy(() => import('../views/ui-components/MuiRating')));
// const MuiTabs = Loadable(lazy(() => import('../views/ui-components/MuiTabs')));
// const MuiTooltip = Loadable(lazy(() => import('../views/ui-components/MuiTooltip')));
// const MuiTransferList = Loadable(lazy(() => import('../views/ui-components/MuiTransferList')));
// const MuiTypography = Loadable(lazy(() => import('../views/ui-components/MuiTypography')));

// // form elements
// const MuiAutoComplete = Loadable(
//   lazy(() => import('../views/forms/form-elements/MuiAutoComplete')),
// );
// const MuiButton = Loadable(lazy(() => import('../views/forms/form-elements/MuiButton')));
// const MuiCheckbox = Loadable(lazy(() => import('../views/forms/form-elements/MuiCheckbox')));
// const MuiRadio = Loadable(lazy(() => import('../views/forms/form-elements/MuiRadio')));
// const MuiSlider = Loadable(lazy(() => import('../views/forms/form-elements/MuiSlider')));
// const MuiDateTime = Loadable(lazy(() => import('../views/forms/form-elements/MuiDateTime')));
// const MuiSwitch = Loadable(lazy(() => import('../views/forms/form-elements/MuiSwitch')));

// // forms
// const FormLayouts = Loadable(lazy(() => import('../views/forms/FormLayouts')));
// const FormCustom = Loadable(lazy(() => import('../views/forms/FormCustom')));
// const FormHorizontal = Loadable(lazy(() => import('../views/forms/FormHorizontal')));
// const FormVertical = Loadable(lazy(() => import('../views/forms/FormVertical')));
// const FormWizard = Loadable(lazy(() => import('../views/forms/FormWizard')));
// const FormValidation = Loadable(lazy(() => import('../views/forms/FormValidation')));
// const QuillEditor = Loadable(lazy(() => import('../views/forms/quill-editor/QuillEditor')));

// // pages
// const RollbaseCASL = Loadable(lazy(() => import('../views/pages/rollbaseCASL/RollbaseCASL')));
// const Treeview = Loadable(lazy(() => import('../views/pages/treeview/Treeview')));
// const Faq = Loadable(lazy(() => import('../views/pages/faq/Faq')));
// const Pricing = Loadable(lazy(() => import('../views/pages/pricing/Pricing')));
// const AccountSetting = Loadable(
//   lazy(() => import('../views/pages/account-setting/AccountSetting')),
// );

// // charts
// const AreaChart = Loadable(lazy(() => import('../views/charts/AreaChart')));
// const CandlestickChart = Loadable(lazy(() => import('../views/charts/CandlestickChart')));
// const ColumnChart = Loadable(lazy(() => import('../views/charts/ColumnChart')));
// const DoughnutChart = Loadable(lazy(() => import('../views/charts/DoughnutChart')));
// const GredientChart = Loadable(lazy(() => import('../views/charts/GredientChart')));
// const RadialbarChart = Loadable(lazy(() => import('../views/charts/RadialbarChart')));
// const LineChart = Loadable(lazy(() => import('../views/charts/LineChart')));

// // tables
// const BasicTable = Loadable(lazy(() => import('../views/tables/BasicTable')));
// const EnhanceTable = Loadable(lazy(() => import('../views/tables/EnhanceTable')));
// const PaginationTable = Loadable(lazy(() => import('../views/tables/PaginationTable')));
// const FixedHeaderTable = Loadable(lazy(() => import('../views/tables/FixedHeaderTable')));
// const CollapsibleTable = Loadable(lazy(() => import('../views/tables/CollapsibleTable')));
// const SearchTable = Loadable(lazy(() => import('../views/tables/SearchTable')));

// // widget
// const WidgetCards = Loadable(lazy(() => import('../views/widgets/cards/WidgetCards')));
// const WidgetBanners = Loadable(lazy(() => import('../views/widgets/banners/WidgetBanners')));
// const WidgetCharts = Loadable(lazy(() => import('../views/widgets/charts/WidgetCharts')));

// // authentication
// const Login2 = Loadable(lazy(() => import('../views/authentication/auth2/Login2')));
// const Register = Loadable(lazy(() => import('../views/authentication/auth1/Register')));
// const Register2 = Loadable(lazy(() => import('../views/authentication/auth2/Register2')));
// const ForgotPassword2 = Loadable(
//   lazy(() => import('../views/authentication/auth2/ForgotPassword2')),
// );
// const TwoSteps = Loadable(lazy(() => import('../views/authentication/auth1/TwoSteps')));
// const TwoSteps2 = Loadable(lazy(() => import('../views/authentication/auth2/TwoSteps2')));
// const Error = Loadable(lazy(() => import('../views/authentication/Error')));
// const Maintenance = Loadable(lazy(() => import('../views/authentication/Maintenance')));

// // landingpage
// const Landingpage = Loadable(lazy(() => import('../views/pages/landingpage/Landingpage')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [

      // Acc routes
      { path: '/', element: <Navigate to="/dashboards" /> },
      { path: '/dashboards', exact: true, element: <AccDasboard /> },
      { path: '/users', exact: true, element: <Users /> },
      { path: '/users/user_detail/:id', element: <UserDetail /> },
      { path: '/requests', exact: true, element: <Requests /> },
      { path: '/requests/req_detail/:id', element: <RequestDetail /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [

      // Acc routes
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/forgot_password', element: <ForgotPassword /> },
      { path: '*', element: <NotFound/>},

    ],
  },
];

export default Router;
