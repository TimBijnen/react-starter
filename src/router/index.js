import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import P404 from "src/pages/404";
// imported routes
import Home from "src/pages/home";

import RestrictedRoute from "./restricted";

const Router = ( { children, ...rest } ) => (
    <BrowserRouter>
        <div>
            { children }
            <Switch>
                <RestrictedRoute exact path="/home" { ...rest } component={ () => <Home { ...rest } /> } />
                <Route exact path="/" component={ () => <div>UNRESTRICTED</div> } />
                <Route { ...rest } path="*" component={ P404 } />
            </Switch>
        </div>
    </BrowserRouter>
);

Router.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default Router;
