import { combineReducers } from "redux";
import iceProduct from "./iceProduct";
import loginM from "./loginM";
import personal from "./personal";
import brandSelect from "./brand";
import myPageSelect from "./myPage";



const rootReducer = combineReducers({iceProduct, loginM, personal, brandSelect, myPageSelect})

export default rootReducer

export type rootState = ReturnType<typeof rootReducer>