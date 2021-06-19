import React from 'react';
// make this file type safe
import { Route, Redirect } from 'react-router-dom';
import { CheckAuthState } from '../../utils/CheckAuthState';

type PrivateRouteProps = any;

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children: Component,
  ...rest
}) => {
  const isAuth = CheckAuthState();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isAuth) return <Component />;
        else
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
