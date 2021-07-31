import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { RouteConfig, RouteConfigComponentProps } from 'react-router-config';
import CustomNavBar from 'widgets/CustomNavBar/CustomNavBar';

import AuthPage from 'pages/AuthPage/AuthPage';
import PrivacyPage from 'pages/Privacy/Privacy';
import Page404 from 'pages/404/404';
import PrivateRoute from 'widgets/PrivateRoute/PrivateRoute';

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to='/auth' />,
  },
  {
    path: '/auth',
    exact: true,
    component: AuthPage,
  },
  {
    path: '/privacy',
    exact: true,
    component: () => <PrivacyPage />,
  },
  {
    path: '/error/404',
    exact: true,
    component: () => <Page404 />,
  },
  {
    route: '*',
    component: CustomNavBar,
    routes: [
      {
        path: '/home',
        exact: true,
        render: (props: RouteConfigComponentProps<any>) => (
          <PrivateRoute {...props}>
            {lazy(() => import('pages/HomePage/HomePage'))}
          </PrivateRoute>
        ),
      },
      {
        path: '/mucormycosis/add-patient',
        exact: true,
        render: (props: RouteConfigComponentProps<any>) => (
          <PrivateRoute {...props}>
            {lazy(() => import('pages/BlackFungus/BFSectionCreate'))}
          </PrivateRoute>
        ),
      },
      {
        path: '/mucormycosis/get-patient',
        exact: true,

        render: (props: RouteConfigComponentProps<any>) => (
          <PrivateRoute {...props}>
            {lazy(() => import('pages/BlackFungus/BFSearchPatient'))}
          </PrivateRoute>
        ),
      },
      {
        path: '/mucormycosis/get-patient/section1/:patientid',
        exact: true,

        render: (props: RouteConfigComponentProps<any>) => (
          <PrivateRoute {...props}>
            {lazy(() => import('pages/BlackFungus/BFSection1Get'))}
          </PrivateRoute>
        ),
      },
      {
        path: '/mucormycosis/get-patient/section2/:patientid',
        exact: true,

        render: (props: RouteConfigComponentProps<any>) => (
          <PrivateRoute {...props}>
            {lazy(() => import('pages/BlackFungus/BFSection2Get'))}
          </PrivateRoute>
        ),
      },
      {
        path: '/mucormycosis/get-patient/section3/:patientid',
        exact: true,

        render: (props: RouteConfigComponentProps<any>) => (
          <PrivateRoute {...props}>
            {lazy(() => import('pages/BlackFungus/BFSection3Get'))}
          </PrivateRoute>
        ),
      },
      {
        path: '/mucormycosis/get-patient/section4/:patientid',
        exact: true,

        render: (props: RouteConfigComponentProps<any>) => (
          <PrivateRoute {...props}>
            {lazy(() => import('pages/BlackFungus/BFSection4Get'))}
          </PrivateRoute>
        ),
      },
      {
        path: '/mucormycosis/surgical-management',
        exact: true,

        render: (props: RouteConfigComponentProps<any>) => (
          <PrivateRoute {...props}>
            {lazy(() => import('pages/BlackFungus/SurgicalManagement'))}
          </PrivateRoute>
        ),
      },
      {
        component: () => <Redirect to='/error/404' />,
      },
    ],
  },

  {
    component: () => <Redirect to='/error/404' />,
  },
];

export default routes;
