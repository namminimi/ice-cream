import { combineReducers } from "redux";
import iceProduct from "./iceProduct";
import loginM from "./loginM";


const rootReducer = combineReducers({iceProduct, loginM})

export default rootReducer

export type rootState = ReturnType<typeof rootReducer>