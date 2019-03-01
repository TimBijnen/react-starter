import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ( { component, isAuthenticated, ...rest } ) => {
    let Component = component;
    if ( isAuthenticated ) {
        Component = ( { location } ) => (
            <Redirect to={ {
                pathname: "/login",
                state: { from: location },
            } }
            />
        );
    }
    return <Route { ...rest } render={ Component } />;
};

ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    location: PropTypes.shape(),
};

export default ProtectedRoute;
