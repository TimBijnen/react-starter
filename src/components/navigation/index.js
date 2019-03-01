import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../logo";

const StyledLink = styled( Link )`
    display: block;
    background-color: ${ ( { theme } ) => theme.colorPrimary };
    height: 60px;
    color: ${ ( { theme } ) => theme.colorSecondary };
`;

const Nav = styled.nav`
    background-color: ${ ( { theme } ) => theme.colorPrimary };
    height: 100vh;
    width: 200px;
    
    &.top {
        display: flex;
        height: 60px;
        width: 100vw;
    }
`;

const Navigation = ( { Authenticate, isAuthenticated } ) => (
    <Nav>
        <StyledLink to="/"><Logo /></StyledLink>
        <StyledLink to="/">Home</StyledLink>
        { isAuthenticated ? (
            <div onClick={ Authenticate }>Logout</div>
        ) : (
            <StyledLink to="/login">Login</StyledLink>
        ) }
    </Nav>
);

Navigation.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    Authenticate: PropTypes.func.isRequired,
};

export default Navigation;
