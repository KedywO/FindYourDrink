import {combineReducers} from "redux";
import {showSearchbarReducer} from "./showSearchbarReducer";
import {fraseReducer} from "./fraseReducer";
import {jwtReducer} from "./jwtReducer";


export default combineReducers({
    showSearchbarReducer,
    fraseReducer,
    jwtReducer
});


