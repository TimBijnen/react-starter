import { combineReducers } from "redux";
import axios from "axios";
import types from "./types";

const defaultState = {
    isAuthenticated: false,
    token: localStorage.getItem( "token" ),
};

const isAuthenticated = ( state = defaultState.isAuthenticated, { type, payload } ) => {
    if ( type === types.AUTHENTICATE_SUCCESS ) {
        axios.defaults.headers.common.Authorization = `Bearer ${ payload.token }`;
        return payload.isAuthenticated;
    }
    return state;
};

const token = ( state = defaultState.token, { type, payload } ) => {
    if ( type === types.SET_TOKEN ) {
        axios.defaults.headers.common.Authorization = `Bearer ${ payload }`;
        return payload;
    }
    return state;
};

export default combineReducers( {
    isAuthenticated,
    token,
} );
