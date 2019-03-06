import "typeface-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import Router from "src/router";
import theme, { GlobalStyle } from "src/theme";
import Navigation from "src/components/navigation";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: ${ ( { theme: t } ) => t.appFlexDirection };
    width: 100vw;
    height: 100vh;
`;

const App = ( { isAuthenticated } ) => (
    <ThemeProvider theme={ theme.main }>
        <AppWrapper>
            <GlobalStyle />
            <Router isAuthenticated={ isAuthenticated }>
                <Navigation />
            </Router>
        </AppWrapper>
    </ThemeProvider>
);

App.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

const mSTP = ( { app: { isAuthenticated } } ) => ( { isAuthenticated } );

const mDTP = null;

export default connect( mSTP, mDTP )( App );
