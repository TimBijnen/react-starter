PAGE_NAME=$1

mkdir src/pages/$1
touch src/pages/$1/index.js
touch src/pages/$1/index.test.js

mkdir src/pages/$1/duck

## Create actions
echo 'import types from "./types";

export default {};' > src/pages/$1/duck/actions.js

## Create index
echo 'export { default as actions } from "./actions";
export { default as reducers } from "./reducers";
export { default as types } from "./types";
export { default as sagas } from "./sagas";' > src/pages/$1/duck/index.js

## Create reducers
echo 'import { combineReducers } from "redux";
import types from "./types";

export default combineReducers( {} );' > src/pages/$1/duck/reducers.js

## Create sagas
echo 'import {
    put,
    takeEvery,
} from "redux-saga/effects";
import types from "./types";

export default function* main() {
    yield takeEvery( /* ACTION_TYPE, GENERATOR_FUNCTION */ );
}' > src/pages/$1/duck/sagas.js

## Create action types
echo 'import ActionTypes from "redux-action-type-generator";

export default ActionTypes( [] );' > src/pages/$1/duck/types.js

touch src/pages/$1/duck/test.js