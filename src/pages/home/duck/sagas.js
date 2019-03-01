import { takeEvery } from "redux-saga/effects";
import types from "./types";

function* test( { payload } ) {
    yield console.log( payload );
}

export default function* main() {
    yield takeEvery( types.TEST, test );
}
