import { takeEvery } from "redux-saga/effects";
import types from "./types";

function* saga( { payload } ) {
    yield console.log( payload );
}

export default function* main() {
    yield takeEvery( types.SAGA, saga );
}
