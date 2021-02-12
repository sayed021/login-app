import React from 'react'
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {

    const isLoggedIn = false;

    return (
      <Route
        {...rest}
        render={({ location }) =>
            isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}