import { all } from "redux-saga/effects";

// imported sagas
import { sagas as home } from "src/pages/home/duck";
import { sagas as app } from "src/app/duck";

const sagas = [
    // combined sagas
    home(),
    app(),
];

export default function* root() { yield all( sagas ); }
