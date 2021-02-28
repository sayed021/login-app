import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { TOKEN_KEY } from './auth';
import { getCookie } from './cookieService';

export default function PrivateRoute({ children, ...rest }) {
  
    const isLoggedIn =  getCookie(TOKEN_KEY);

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