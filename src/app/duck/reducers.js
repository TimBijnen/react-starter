import { combineReducers } from "redux";
import axios from "axios";
import types from "./types";

const TOKEN = localStorage.getItem( "token" );
const isAuthenticated = ( state = TOKEN, { type, payload } ) => {
    if ( type === types.AUTHENTICATE_SUCCESS ) {
        axios.defaults.headers.common.Authorization = `Bearer ${ payload.token }`;
        return payload.isAuthenticated;
    }
    return state;
};

const INITIALIZED = false;
const init = ( state = INITIALIZED, { type } ) => {
    if ( type === types.INIT ) {
        axios.defaults.headers.common.Authorization = `Bearer ${ TOKEN }`;
        axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
        return true;
    }
    return state;
};

export default combineReducers( {
    init,
    isAuthenticated,
} );
