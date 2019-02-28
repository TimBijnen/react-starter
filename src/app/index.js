import "typeface-roboto";
import React from "react";
import styled from "styled-components";
import Logo from "components/logo";

const AppWrapper = styled.div`
    text-align: center;
`;

const App = () => (
    <AppWrapper>
        <Logo />
        <h3>
            Starter
        </h3>
    </AppWrapper>
);

export default App;
