import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// imported routes
import Login from "../pages/login";
import Home from "../pages/home";
import P404 from "../pages/404";

import RestrictedRoute from "./restricted";

const Router = ( { children, ...rest } ) => (
    <BrowserRouter>
        <React.Fragment>
            { children }
            <Switch>
                <RestrictedRoute exact path="/" { ...rest } component={ props => <Home { ...rest } { ...props } /> } />
                <Route exact path="/login" { ...rest } component={ props => <Login { ...rest } { ...props } /> } />
                <Route { ...rest } path="*" component={ P404 } />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

Router.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default Router;
