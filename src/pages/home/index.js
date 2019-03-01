import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { actions } from "./duck";

class Home extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

Home.propTypes = {

};

const mSTP = state => state;

const mDTP = dispatch => ( {
    Load: () => dispatch( actions.load() ),
} );

export default connect( mSTP, mDTP )( Home );
