import { put, takeEvery } from "redux-saga/effects";
import types from "./types";

function* authenticate( { payload } ) {
    yield put( { type: types.AUTHENTICATE_SUCCESS, payload: { isAuthenticated: payload } } );
}

export default function* main() {
    yield takeEvery( types.AUTHENTICATE, authenticate );
}
