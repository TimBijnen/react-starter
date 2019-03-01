import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { actions } from "src/app/duck";

class Login extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                Login
                { this.props.isAuthenticated ? "AUTHENTICATED" : "NOT AUTHENTICATED" }
                <Button onClick={ this.props.Authenticate }>Login</Button>
            </div>
        );
    }
}

Login.propTypes = {

};

const mSTP = ( { app: { isAuthenticated } } ) => ( { isAuthenticated } );

const mDTP = dispatch => ( {
    Authenticate: () => dispatch( actions.AUTHENTICATE() ),
} );

export default connect( mSTP, mDTP )( Login );
