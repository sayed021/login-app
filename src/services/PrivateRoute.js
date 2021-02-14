import React from 'react'
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {

    // condition or api for login token
    // sessionStorage.setItem("BDBOOK_LOGEDIN", false);


    const isLoggedIn = JSON.parse(sessionStorage.getItem("BDBOOK_LOGEDIN"));

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