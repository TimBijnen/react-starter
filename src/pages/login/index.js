import React from "react";
import PropTypes from "prop-types";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import queryString from "query-string";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";

import { actions } from "src/app/duck";

const Wrapper = styled.div`
    width: 100%;
`;

class Login extends React.Component {
    state = { search: {} };

    static getDerivedStateFromProps( props ) {
        const search = queryString.parse( props.location.search );
        return { search };
    }

    componentDidMount() {
        this.authenticateFromQuerystring();
    }

    componentDidUpdate() {
        this.authenticateFromQuerystring();
    }

    authenticateFromQuerystring() {
        const { search } = this.state;
        const { logout } = search;
        let { token } = search;

        if ( logout ) {
            token = false;
        }

        if ( logout || token ) {
            const { Authenticate, history } = this.props;
            history.push( { search: "" } );
            Authenticate( token );
        }
    }

    render() {
        const { isAuthenticated, Authenticate, location } = this.props;

        if ( isAuthenticated ) {
            const search = queryString.parse( location.search );
            return <Redirect to={ search.redirect || "/" } />;
        }

        return (
            <Wrapper>
                <GoogleLogin
                    disabled={ !process.env.REACT_APP_GCLIENT_ID }
                    clientId={ process.env.REACT_APP_GCLIENT_ID }
                    buttonText={ process.env.REACT_APP_GCLIENT_ID ? "Login" : "No client id" }
                    onSuccess={ () => {} }
                    onFailure={ () => {} }
                />
                <hr />
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="with a placeholder"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password placeholder"
                        />
                    </FormGroup>
                    <Button onClick={ () => Authenticate( true ) }>Login</Button>
                </Form>
            </Wrapper>
        );
    }
}

Login.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    Authenticate: PropTypes.func.isRequired,
    history: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
};

const mSTP = ( { app: { isAuthenticated } } ) => ( { isAuthenticated } );

const mDTP = dispatch => ( {
    Authenticate: args => dispatch( actions.authenticate( args ) ),
} );

export default connect( mSTP, mDTP )( Login );
