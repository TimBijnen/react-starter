import "typeface-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications/lib/notifications.css";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import Router from "../router";
import theme, { GlobalStyle } from "../theme";
import Navigation from "../components/navigation";
import ErrorHandler from "../components/errorHandler";
import { actions } from "./duck";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: ${ ( { theme: t } ) => t.appFlexDirection };
    width: 100vw;
    height: 100vh;
`;

class App extends React.Component {
    componentDidMount() {
        const { Init } = this.props;
        Init();
    }

    render() {
        const { isAuthenticated } = this.props;
        return (
            <ThemeProvider theme={ theme.primary }>
                <AppWrapper>
                    <GlobalStyle />
                    <ErrorHandler />
                    <Router isAuthenticated={ isAuthenticated }>
                        <Navigation />
                    </Router>
                </AppWrapper>
            </ThemeProvider>
        );
    }
}

App.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    Init: PropTypes.func.isRequired,
};

const mSTP = ( { app: { isAuthenticated } } ) => ( { isAuthenticated } );

const mDTP = dispatch => ( {
    Init: args => dispatch( actions.init( args ) ),
} );

export default connect( mSTP, mDTP )( App );
