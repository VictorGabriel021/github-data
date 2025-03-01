import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';
import Navbar from '../Navbar';

type Props = {
  children: React.ReactNode;
  path: string;
}

const PrivateRoute = ({ children, path }: Props) => {
  return (
    <>
      <Route
        path={path}
        render={({ location }) => {
          if (!isAuthenticated()) {
            return (<Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
            )
          } else return children;
        }}
      />
      <Navbar />
    </>
  );
}

export default PrivateRoute;
