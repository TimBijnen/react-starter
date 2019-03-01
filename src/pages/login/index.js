import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { actions } from "src/app/duck";

class Login extends React.Component {
    componentDidMount() {

    }

    render() {
        const { isAuthenticated, Authenticate } = this.props;
        return (
            <div>
                Login
                { isAuthenticated ? "AUTHENTICATED" : "NOT AUTHENTICATED" }
                <Button onClick={ Authenticate }>Login</Button>
            </div>
        );
    }
}

Login.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    Authenticate: PropTypes.func.isRequired,
};

const mSTP = ( { app: { isAuthenticated } } ) => ( { isAuthenticated } );

const mDTP = dispatch => ( {
    Authenticate: () => dispatch( actions.AUTHENTICATE( true ) ),
} );

export default connect( mSTP, mDTP )( Login );
