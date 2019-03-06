import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../logo";

const StyledLink = styled( Link )`
    display: block;
    background-color: ${ ( { theme } ) => theme.colorPrimary };
    height: 60px;
    padding: 0 8px;
    line-height: 60px;
    text-decoration: none;
    color: white;

    &:hover {
        background-color: ${ ( { theme } ) => theme.colorSecondary };
    }
`;

const Wrapper = styled.div`
    background-color: ${ ( { theme } ) => theme.colorPrimary };
    height: ${ ( { theme } ) => theme.navigationHeight };
    min-width: ${ ( { theme } ) => theme.navigationWidth };
    width: ${ ( { theme } ) => theme.navigationWidth };
    display: flex;
    flex-direction: ${ ( { theme } ) => theme.navigationFlexDirection };

    nav {
        height: 100%;
        width: 100%;
        display: ${ ( { theme } ) => theme.navigationNavDisplay };
    }
`;

const Navigation = () => (
    <Wrapper>
        <nav>
            <StyledLink to="/"><Logo /></StyledLink>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/home">Home</StyledLink>
        </nav>
        <StyledLink to="/login?logout=true">Logout</StyledLink>
    </Wrapper>
);

export default Navigation;
