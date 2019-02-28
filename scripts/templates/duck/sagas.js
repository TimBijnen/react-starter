import {
    put,
    takeEvery,
} from "redux-saga/effects";
import types from "./types";

export default function* main() {
    yield takeEvery( /* ACTION_TYPE, GENERATOR_FUNCTION */ );
}
