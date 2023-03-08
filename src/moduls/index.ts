import { combineReducers } from "redux";
import iceProduct from "./iceProduct";


const rootReducer = combineReducers({iceProduct})

export default rootReducer

export type rootState = ReturnType<typeof rootReducer>