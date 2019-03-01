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
    text-align: center;
`;

const App = ( { isAuthenticated } ) => (
    <ThemeProvider theme={ theme }>
        <AppWrapper>
            <GlobalStyle />
            <Navigation />
            <Router isAuthenticated={ isAuthenticated } />
        </AppWrapper>
    </ThemeProvider>
);

App.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

const mSTP = ( { app: { isAuthenticated } } ) => ( {
    isAuthenticated,
} );

const mDTP = dispatch => ( {
    Load: () => dispatch( actions.load() ),
} );

export default connect( mSTP, mDTP )( App );
