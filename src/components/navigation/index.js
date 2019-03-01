import React from "react";
// import PropTypes from "prop-types";
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

const Navigation = ( { Logout } ) => (
    <Nav>
        <StyledLink to="/"><Logo /></StyledLink>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <div onClick={ Logout }>Logout</div>
    </Nav>
);

Navigation.propTypes = {

};

export default Navigation;
