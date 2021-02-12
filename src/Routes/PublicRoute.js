import React from 'react'
import { Route, Redirect } from "react-router-dom";

export default function PublicRoute({ children, ...rest }) {

    const isLoggedIn = false;

    return (
      <Route
        {...rest}
        render={({ location }) =>
            isLoggedIn ? (
            <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
          ) : (
            children
          )
        }
      />
    );
}