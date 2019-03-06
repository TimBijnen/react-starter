import { combineReducers } from "redux";
import types from "./types";

const ERROR = [];
const errors = ( state = ERROR, { type, payload } ) => {
    if ( type === types.ERROR ) {
        return [ ...state, payload ];
    }
    return state;
};

export default combineReducers( {
    errors,
} );
