import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actions } from "./duck";

class __PAGE__ extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                __PAGE__
            </div>
        );
    }
}

__PAGE__.propTypes = {

};

const mSTP = state => state;

const mDTP = dispatch => ( {
    Load: () => dispatch( actions.load() ),
} );

export default connect( mSTP, mDTP )( __PAGE__ );
