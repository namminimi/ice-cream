import { AxiosError } from "axios";
import { Dispatch } from "redux";
import { iceCreamData } from "../api/dataType";

//액션타입
const GET_DATAS = "iceProduct/GET_DATAS" as const;
const GET_DATAS_SUCCESS = "iceProduct/GET_DATAS_SUCCESS" as const;
const GET_DATAS_ERROR = "iceProduct/GET_DATAS_ERROR" as const;

const GET_DATA = "iceProduct/GET_DATA" as const;
const GET_DATA_SUCCESS = "iceProduct/GET_DATA_SUCCESS" as const;
const GET_DATA_ERROR = "iceProduct/GET_DATA_ERROR" as const;

//액션함수
export const getDatas = () => ({type: GET_DATAS})
export const getDatasSuccess = (data: iceCreamData) => ({type: GET_DATAS_SUCCESS, payload: data})
export const getDatasError = (error: AxiosError) => ({type: GET_DATAS_ERROR, payload: error})

export const getData = () => ({type: GET_DATA})
export const getDataSuccess = (data: iceCreamData) => ({type: GET_DATA_SUCCESS, payload: data})
export const getDataError = (error: AxiosError) => ({type: GET_DATA_ERROR, payload: error})


type DataAction = ReturnType<typeof getDatas>
| ReturnType<typeof getDatasSuccess>
| ReturnType<typeof getDatasError>
| ReturnType<typeof getData>
| ReturnType<typeof getDataSuccess>
| ReturnType<typeof getDataError>


//상태 타입
export type DataState = {
    iceProducts: {
        loading: boolean;
        data: null | iceCreamData;
        error: null | Error;
    },
    iceProduct: {
        loading: boolean;
        data: null | iceCreamData;
        error: null | Error;
    }
}

//초기값
const initialState: DataState = {
    iceProducts: {
        loading: false,
        data: null,
        error: null
    },
    iceProduct: {
        loading: false,
        data: null,
        error: null
    },
}

/* type CallbackType = {
    callback: () => void
} */

//thunk함수
export const getDatasF = (callback:Function) => async (dispatch: Dispatch) =>{
    dispatch({type: GET_DATAS})
    try{
        const response = await callback();
        const data = response.data
        console.log(data)
        dispatch({
            type: GET_DATAS_SUCCESS, payload: data
        })
    }
    catch(e){
        dispatch({type: GET_DATAS_ERROR, error: e})
    }
}
export const getDataF = (callback:Function) => async (dispatch: Dispatch) => {
    dispatch({type: GET_DATA})
    try{
        const response = await callback();
        const data = response.data[0];
        dispatch({
            type: GET_DATA_SUCCESS, payload: data
        })
    }
    catch(e){
        dispatch({type: GET_DATA_ERROR, error: e})
    }
}


//리듀서 만들기
export default function iceProduct(state=initialState , action: DataAction) {
    switch(action.type){
        case GET_DATAS:
            return {
                ...state,
                iceProducts: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_DATAS_SUCCESS:
            return {
                ...state,
                iceProducts: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            };
        case GET_DATAS_ERROR:
            return {
                ...state,
                iceProducts: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            };
        case GET_DATA:
            return {
                ...state,
                iceProduct: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                iceProduct: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            };
        case GET_DATA_ERROR:
            return {
                ...state,
                iceProduct: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }; 
        default:
            return state;       
            
    }
}