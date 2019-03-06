import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { actions } from "./duck";

class ErrorHandler extends React.Component {
    componentDidMount() {
        this.props.Init();
    }

    render() {
        return (
            <div>
                { this.props.errors.map( e => <div>{ e.message }</div> ) }
            </div>
        );
    }
}

const mSTP = ( { error: { errors } } ) => ( { errors } );
const mDTP = dispatch => ( {
    Init: args => dispatch( actions.init( args ) ),
} );

export default connect( mSTP, mDTP )( ErrorHandler );
