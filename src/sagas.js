import { all } from "redux-saga/effects";

// imported sagas

const sagas = [
    // combined sagas
];

export default function* root() { yield all( sagas ); }
