import React from "react";
import styled from "styled-components";
import logo from "./ai.png";

const StyledLogo = styled.img`
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
`;

const Logo = () => <StyledLogo src={ logo } alt="logo" />;

export default Logo;
