import "typeface-roboto";
import React from "react";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import Router from "src/router";
import theme, { GlobalStyle } from "src/theme";

import { actions } from "./duck";

const AppWrapper = styled.div`
    text-align: center;
`;

const App = ( { isAuthenticated } ) => (
    <ThemeProvider theme={ theme }>
        <AppWrapper>
            <GlobalStyle />
            <Router isAuthenticated={ isAuthenticated } />
        </AppWrapper>
    </ThemeProvider>
);

const mSTP = ( { app: { isAuthenticated } } ) => ( {
    isAuthenticated,
} );

const mDTP = dispatch => ( {
    Load: () => dispatch( actions.load() ),
} );

export default connect( mSTP, mDTP )( App );
