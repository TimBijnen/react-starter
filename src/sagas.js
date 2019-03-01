import { all } from "redux-saga/effects";

// imported sagas
import { sagas as home } from "src/pages/home/duck";

const sagas = [
    // combined sagas
    home(),
];

export default function* root() { yield all( sagas ); }
