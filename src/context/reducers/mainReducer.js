import {combineReducers} from "redux";
import {showSearchbarReducer} from "./showSearchbarReducer";
import {fraseReducer} from "./fraseReducer";

export default combineReducers({
    showSearchbarReducer,
    fraseReducer
});


