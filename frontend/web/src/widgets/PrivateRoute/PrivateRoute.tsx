import React from 'react';
// make this file type safe
import { Route, Redirect } from 'react-router-dom';
import { CheckAuthState } from '../../utils/CheckAuthState';

const PrivateRoute: React.FC = ({ children: Component, ...rest }: any) => {
  const isAuth = CheckAuthState();
  if (isAuth) return <Component {...rest} />;
  else
    return (
      <Route
        {...rest}
        render={({ location }) => {
          return (
            <Redirect
              to={{
                pathname: '/auth',
                state: {
                  goTo: location.pathname,
                },
              }}
            />
          );
        }}
      />
    );
};
export default PrivateRoute;
