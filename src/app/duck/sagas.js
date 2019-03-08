import { put, takeEvery } from "redux-saga/effects";
import types from "./types";
import actions from "./actions";
import axios from "axios";

function* authenticate( { payload } ) {
    yield put( { type: types.AUTHENTICATE_SUCCESS, payload: { isAuthenticated: !!payload } } );
    yield put( actions.setToken( payload ) );
}

function* init() {
    axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

    yield setTimeout( () => {
        axios.get('/test');
    }, 3000 );
    yield setTimeout( () => {
        axios.get('/test2');
    }, 6000 );
    yield setTimeout( () => {
        axios.get('/test3');
    }, 7000 );
}

export default function* main() {
    yield takeEvery( types.AUTHENTICATE, authenticate );
    yield takeEvery( types.INIT, init );
}
