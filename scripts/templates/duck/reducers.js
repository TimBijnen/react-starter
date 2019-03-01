import { combineReducers } from "redux";
import types from "./types";

const test = ( state = false, { type, payload } ) => {
    if ( type === types.TEST ) {
        return "TEST";
    }
    return state;
};

export default combineReducers( {
    test,
} );
