import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { TOKEN_KEY } from './auth';
import { getCookie } from './cookieService';

export default function PublicRoute({ children, ...rest }) {

    const isLoggedIn = getCookie(TOKEN_KEY) //sessionStorage.getItem(TOKEN_KEY) && sessionStorage.getItem(TOKEN_KEY) !== null;

    console.log("seasion storage : ", isLoggedIn);

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