import React from 'react'
import { Route, Redirect } from "react-router-dom";

export default function PublicRoute({ children, ...rest }) {


    const isLoggedIn =JSON.parse(sessionStorage.getItem('BDBOOK_LOGEDIN'));
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