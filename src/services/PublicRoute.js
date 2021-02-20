import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { TOKEN_KEY } from './auth';

export default function PublicRoute({ children, ...rest }) {

    const isLoggedIn = sessionStorage.getItem(TOKEN_KEY) && sessionStorage.getItem(TOKEN_KEY) !== null;

    return (
      <Route
        {...rest}
        render={({ location }) =>
            isLoggedIn ? (
            <Redirect
                to={{
                  pathname: "/profile",
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