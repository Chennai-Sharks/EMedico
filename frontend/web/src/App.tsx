import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AuthPage from 'pages/AuthPage/AuthPage';
import { LinearProgress, withStyles } from '@material-ui/core';

import { scrollBarStyle } from './ScrollBarStyle';
import PrivateRoute from './widgets/PrivateRoute/PrivateRoute';

import './App.css';
import CustomNavBar from 'widgets/CustomNavBar/CustomNavBar';

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Segoe UI',
        'Oxygen',
        '"Helvetica Neue"',
        'Roboto',
        'sans-serif',
      ].join(','),
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Switch>
            <Redirect path='/' exact to='/auth' />
            <Route path='/auth' exact component={AuthPage} />
            <CustomNavBar>
              <React.Suspense fallback={<LinearProgress />}>
                <PrivateRoute path='/home' exact>
                  {lazy(() => import('./pages/HomePage/HomePage'))}
                </PrivateRoute>
                <PrivateRoute path='/mucormycosis/add-patient' exact>
                  {lazy(() => import('./pages/BlackFungus/BFSectionCreate'))}
                </PrivateRoute>
                <PrivateRoute path='/mucormycosis/get-patient' exact>
                  {lazy(() => import('./pages/BlackFungus/BFSearchPatient'))}
                </PrivateRoute>
                <PrivateRoute
                  path='/mucormycosis/get-patient/section1/:patientid'
                  exact
                >
                  {lazy(() => import('./pages/BlackFungus/BFSection1Get'))}
                </PrivateRoute>

                <PrivateRoute
                  path='/mucormycosis/get-patient/section2/:patientid'
                  exact
                >
                  {lazy(() => import('./pages/BlackFungus/BFSection2Get'))}
                </PrivateRoute>

                <PrivateRoute
                  path='/mucormycosis/get-patient/section3/:patientid'
                  exact
                >
                  {lazy(() => import('./pages/BlackFungus/BFSection3Get'))}
                </PrivateRoute>

                <PrivateRoute path='/mucormycosis/surgical-management' exact>
                  {lazy(() => import('./pages/BlackFungus/SurgicalManagement'))}
                </PrivateRoute>
              </React.Suspense>
            </CustomNavBar>
            {/* <Route component={lazy(() => import('./pages/404/404'))} /> */}
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default withStyles(scrollBarStyle)(App);
