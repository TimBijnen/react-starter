import axios from "axios";
import { buffers, eventChannel } from "redux-saga";
import {
    takeEvery,
    put,
    call,
    take,
} from "redux-saga/effects";
import types from "./types";

function uploadChannel() {
    return eventChannel( ( emitter ) => {
        function errorHandler( error ) {
            emitter( { error } );
            return error;
        }

        axios.interceptors.response.use(
            response => response,
            errorHandler,
        );

        return () => { };
    }, buffers.sliding( 2 ) );
}

function* init() {
    const channel = yield call( uploadChannel );

    while ( true ) {
        const { error } = yield take( channel );
        if ( error ) {
            yield put( { type: types.ERROR, payload: error } );
        }
    }
}

export default function* main() {
    yield takeEvery( types.INIT, init );
}
