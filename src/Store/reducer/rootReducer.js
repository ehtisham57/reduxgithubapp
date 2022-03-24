import { combineReducers } from "redux";
import { getProfileReducer } from "./GetProfileReducer";

const  rootReducer = combineReducers({
    getProfileReducer,
})

export default rootReducer