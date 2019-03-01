import { put, takeEvery } from "redux-saga/effects";
import types from "./types";

function* authenticate( { payload } ) {
    debugger
    yield put( { type: types.AUTHENTICATE_SUCCESS, payload: { isAuthenticated: true } } );
}

export default function* main() {
    yield takeEvery( types.AUTHENTICATE, authenticate );
}
