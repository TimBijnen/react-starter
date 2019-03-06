import { combineReducers } from "redux";
// imported reducers
import { reducers as home } from "src/pages/home/duck";
import { reducers as app } from "src/app/duck";
import { reducers as error } from "src/components/errorHandler/duck";

const reducers = {
    // combined reducers
    home,
    app,
    error,
};

export default combineReducers( reducers );
