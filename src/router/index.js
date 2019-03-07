import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// imported routes
import Home from "src/pages/home";
import Login from "src/pages/login";
import P404 from "src/pages/404";

import RestrictedRoute from "./restricted";

const Router = ( { children, ...rest } ) => {
    console.log(rest) 
    return (
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
}

Router.propTypes = {
    children: PropTypes.node,
    isAuthenticated: PropTypes.bool,
};

Router.defaultProps = {
    isAuthenticated: false,
    children: null,
};

export default Router;
