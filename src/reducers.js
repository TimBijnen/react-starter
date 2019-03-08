import { combineReducers } from "redux";
// imported reducers
import { reducers as home } from "./pages/home/duck";
import { reducers as app } from "./app/duck";
import { reducers as error } from "./components/errorHandler/duck";

const reducers = {
    // combined reducers
    home,
    app,
    error,
};

export default combineReducers( reducers );
