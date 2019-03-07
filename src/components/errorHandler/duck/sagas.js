import axios from "axios";
import { buffers, eventChannel } from "redux-saga";
import {
    takeEvery,
    put,
    call,
    take,
} from "redux-saga/effects";
import actions from "./actions";
import types from "./types";

export const errorWatcher = () => eventChannel( ( emitter ) => {
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

export function* init() {
    const channel = yield call( errorWatcher );

    while ( true ) {
        const { error } = yield take( channel );
        if ( error ) {
            yield put( actions.createError( error ) );
        }
    }
}

export default function* main() {
    yield takeEvery( types.INIT, init );
}
