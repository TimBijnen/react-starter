import React from "react";
import styled from "styled-components";
import logo from "./ai.png";

const StyledLogo = styled.img`
    height: 40px;
    filter: invert(100%);
`;

const Logo = () => <StyledLogo src={ logo } alt="logo" />;

export default Logo;
