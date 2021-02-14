import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import { createBrowserHistory } from "history";

import PrivateRoute from '../services/PrivateRoute';
import PublicRoute from '../services/PublicRoute';

import { Login } from '../Layouts/PublicLayout/index';
import NotFound from '../Layouts/PublicLayout/NotFound';
import TestPage from '../Layouts/testpage';
import Profile from '../Layouts/PrivateLayout/Profile';


const Routes = props => {
    return(
        <Router >
            <Switch>

                <PublicRoute  path='/login'>
                    <Login />
                </PublicRoute>

                <PrivateRoute  path="/profile">
                    <Profile />
                </PrivateRoute>

                <PrivateRoute  path="/test-page">
                    <TestPage />
                </PrivateRoute>

                <Route path="/error">
                    <NotFound />
                </Route>
                
                <PublicRoute path="/">
                    <Redirect to="/login" />
                </PublicRoute>
                
                <Route>
                    <Redirect to="/error" />
                </Route>
            </Switch>
            
        </Router>
    )
}

export default Routes;