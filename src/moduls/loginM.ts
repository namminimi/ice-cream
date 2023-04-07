import { iceCreamData } from "../apis/dataType";
//액션 타입
const SET_LOGIN = 'SET_LOGIN' as const
const SET_LOGOUT = 'SET_LOGOUT' as const
const SET_SETID = 'SET_SETID' as const


//////////

//액션 생성 함수
export const setLogin = () => ({type: SET_LOGIN})
export const setLogOut = () => ({type: SET_LOGOUT})
export const setId = (id: iceCreamData) => ({type: SET_SETID, id:id})


///////////////////////////////////////

type LoginAction = ReturnType<typeof setLogin>
| ReturnType<typeof setLogOut>
| ReturnType<typeof setId>

//초기값 상태
export type LoginCheckState = {
    isLogin: boolean,
    updateId: null | string  
}

//초기값
const initialState: LoginCheckState = {
    isLogin: false,
    updateId: ""
}



//리듀서
export default function loginM(state=initialState, action: LoginAction) {
    switch(action.type){
        case SET_LOGIN:
            return {
                ...state,
                isLogin: true
         
            }
        case SET_LOGOUT:
            return {
                ...state,
                isLogin: false

                
            }
        case SET_SETID:
            return {
                ...state,
                updateId: action.id
    
            }
        default:
            return state        
    }
}