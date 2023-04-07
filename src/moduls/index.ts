import { combineReducers } from "redux";
import iceProduct from "./iceProduct";
import loginM from "./loginM";
import personal from "./personal";
import brandSelect from "./brand";



const rootReducer = combineReducers({iceProduct, loginM, personal, brandSelect})

export default rootReducer

export type rootState = ReturnType<typeof rootReducer>