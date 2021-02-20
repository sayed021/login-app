import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { TOKEN_KEY } from './auth';

export default function PrivateRoute({ children, ...rest }) {

    const isLoggedIn = sessionStorage.getItem(TOKEN_KEY) && sessionStorage.getItem(TOKEN_KEY) !== null;

    console.log("seasion storage and not null: ", isLoggedIn)

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