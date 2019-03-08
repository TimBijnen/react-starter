import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NotificationContainer, NotificationManager } from "react-notifications";
import { actions } from "./duck";

class ErrorHandler extends React.Component {
    static propTypes = {
        errors: PropTypes.arrayOf( PropTypes.shape() ).isRequired,
        Init: PropTypes.func.isRequired,
    }

    componentDidMount() {
        const { Init } = this.props;
        Init();
    }

    componentDidUpdate() {
        const { errors } = this.props;
        errors.forEach( ( e ) => {
            NotificationManager.error( e.message );
        } );
    }

    render() {
        return <NotificationContainer />;
    }
}

const mSTP = ( { error: { errors } } ) => ( { errors } );
const mDTP = dispatch => ( {
    Init: args => dispatch( actions.init( args ) ),
} );

export default connect( mSTP, mDTP )( ErrorHandler );
