import { combineReducers } from "redux";
import types from "./types";

const IS_AUTHENTICATED = false;
const isAuthenticated = ( state = IS_AUTHENTICATED, { type, payload } ) => {
    if ( type === types.AUTHENTICATE_SUCCESS ) {
        return payload.isAuthenticated;
    }
    return state;
};

export default combineReducers( {
    isAuthenticated,
} );
