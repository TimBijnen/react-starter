import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import P404 from "src/pages/404";
// imported routes
import Home from "src/pages/home";

import RestrictedRoute from "./restricted";

const Router = props => (
    <BrowserRouter>
        <Switch>
            <RestrictedRoute exact path="/home" { ...props } component={ p => <Home { ...p } /> } />
            <Route exact path="/" component={ () => <div>UNRESTRICTED</div> } />
            <Route { ...props } path="*" component={ P404 } />
        </Switch>
    </BrowserRouter>
);

Router.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export default Router;
