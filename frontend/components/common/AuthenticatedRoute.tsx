import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectIsAuthenticated } from '../../store/currentUserSlice';

export const AuthenticatedRoute: React.FC<any> = ({ children, ...props }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated());
  return (
    <Route
      {...props}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AuthenticatedRoute;
