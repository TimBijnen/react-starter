import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../logo";

const StyledLink = styled( Link )`
    display: block;
`;

const Navigation = () => (
    <nav>
        <StyledLink to="/"><Logo /></StyledLink>
        <StyledLink to="/home">Home</StyledLink>
    </nav>
);

Navigation.propTypes = {

};

export default Navigation;
