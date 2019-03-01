import { combineReducers } from "redux";
// imported reducers
import { reducers as home } from "src/pages/home/duck";
import { reducers as app } from "src/app/duck";

const reducers = {
    // combined reducers
    home,
    app,
};

export default combineReducers( reducers );
