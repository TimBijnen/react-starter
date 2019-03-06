import { all } from "redux-saga/effects";

// imported sagas
import { sagas as home } from "src/pages/home/duck";
import { sagas as app } from "src/app/duck";
import { sagas as error } from "src/components/errorHandler/duck";

const sagas = [
    // combined sagas
    home(),
    app(),
    error(),
];

export default function* root() { yield all( sagas ); }
