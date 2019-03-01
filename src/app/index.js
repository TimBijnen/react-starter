import "typeface-roboto";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import Router from "src/router";
import theme, { GlobalStyle } from "src/theme";
import Navigation from "src/components/navigation";
import { actions } from "./duck";

const AppWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

const App = ( { isAuthenticated, Authenticate } ) => (
    <ThemeProvider theme={ theme }>
        <AppWrapper>
            <GlobalStyle />
            <Router isAuthenticated={ isAuthenticated }>
                <Navigation Logout={ Authenticate } />
            </Router>
        </AppWrapper>
    </ThemeProvider>
);

App.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    Authenticate: PropTypes.func.isRequired,
};

const mSTP = ( { app: { isAuthenticated } } ) => ( {
    isAuthenticated,
} );

const mDTP = dispatch => ( {
    Authenticate: () => dispatch( actions.AUTHENTICATE( false ) ),
} );

export default connect( mSTP, mDTP )( App );
