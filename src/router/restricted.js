import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const RestrictedRoute = ( { component, isAuthenticated, ...rest } ) => {
    let Component = component;
    if ( !isAuthenticated ) {
        Component = ( { location } ) => (
            <Redirect to={ {
                pathname: "/login",
                state: { from: location },
                search: `?redirect=${ location.pathname }`,
            } }
            />
        );
    }
    return <Route { ...rest } render={ Component } />;
};

RestrictedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    location: PropTypes.shape(),
};

RestrictedRoute.defaultProps = {
    isAuthenticated: false,
    location: {},
};

export default RestrictedRoute;
