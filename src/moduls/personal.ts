import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { iceCreamData } from "../apis/dataType"

//회원정보 수정 액션 타입
const GET_PERSONAL_DATA = 'loginM/GET_PERSONAL_DATA' as const
const GET_PERSONAL_DATA_SUCCESS = 'loginM/GET_PERSONAL_DATA_SUCCESS' as const
const GET_PERSONAL_DATA_ERROR = 'loginM/GET_PERSONAL_DATA_ERROR' as const

//회원정보 수정 액션 생성 함수
export const getPersonalData = () => ({type:GET_PERSONAL_DATA})
export const getPersonalDataSuccess = (data: iceCreamData) => ({type:GET_PERSONAL_DATA_SUCCESS, payload: data})
export const getPersonalDataError = (error: AxiosError) => ({type:GET_PERSONAL_DATA_ERROR, payload: error})

type PersonAction = ReturnType<typeof getPersonalData>
| ReturnType<typeof getPersonalDataSuccess>
| ReturnType<typeof getPersonalDataError>


//초기값 상태
export type PersonCheckState = {
    personalDatas: {
        loading:boolean,
        data: null | iceCreamData,
        error: null | Error
    }
    
}

//초기값
const initialState: PersonCheckState = {
    personalDatas:{
        loading:false,
        data: null,
        error: null
    }
}

//회원정보 수정
export const getPersonalDataF = (callback: Function) => async (dispatch: Dispatch) => {
    dispatch({type: GET_PERSONAL_DATA})
    try{
        const response = await callback();
        const data = response.data;
        dispatch({
            type: GET_PERSONAL_DATA_SUCCESS, payload: data
        })
    }
    catch(e){
        dispatch({type: GET_PERSONAL_DATA_ERROR, error: e})
    }
}

//리듀서
export default function personal(state=initialState, action: PersonAction) {
    switch(action.type){
        case GET_PERSONAL_DATA:
            return {
                ...state,
                personalDatas: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_PERSONAL_DATA_SUCCESS:
            return {
                ...state,
                personalDatas: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_PERSONAL_DATA_ERROR:
            return {
                ...state,
                personalDatas: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }        
            
        default:
            return state        
    }
}