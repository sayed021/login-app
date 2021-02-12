import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import PrivateRoute from '../services/PrivateRoute';
import PublicRoute from '../services/PublicRoute';

import { Login } from '../Layouts/PublicLayout/index';
import NotFound from '../Layouts/PublicLayout/NotFound';
import TestPage from '../Layouts/testpage';
import Profile from '../Layouts/PrivateLayout/Profile';




let logedIn = false;

const Routes = props => {

    return(
        <Router>

            <Switch>

                <PublicRoute exact  path='/login'>
                    {logedIn? <Redirect to="/test-page" /> : <Login /> }
                </PublicRoute>

                <PrivateRoute exact path="/profile:id">
                    <Profile />
                </PrivateRoute>

                <Route exact path='/test-page' component={TestPage} />
                
                <Route exact path="/error">
                    <NotFound />
                </Route>

                <Route to="/">
                    {
                        logedIn?  <Redirect to="/test-page" /> : <Redirect to="/login" />
                    }
                </Route>

                <Route>
                    <Redirect to="/error" />
                </Route>
            </Switch>
            
        </Router>
    )
}

export default Routes;