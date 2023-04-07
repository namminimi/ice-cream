import { AxiosError } from "axios";
import { Dispatch } from "redux";
import { BrandDatas, CartDatas, iceCreamData2, NoticeDatas } from "../api/dataType";

//액션타입
const GET_DATAS = "iceProduct/GET_DATAS" as const;
const GET_DATAS_SUCCESS = "iceProduct/GET_DATAS_SUCCESS" as const;
const GET_DATAS_ERROR = "iceProduct/GET_DATAS_ERROR" as const;

const GET_DATA = "iceProduct/GET_DATA" as const;
const GET_DATA_SUCCESS = "iceProduct/GET_DATA_SUCCESS" as const;
const GET_DATA_ERROR = "iceProduct/GET_DATA_ERROR" as const;

//검색액션타입
const GET_SEARCHDATAS = "GET_SEARCHDATAS" as const;
const GET_SEARCHDATAS_SUCCESS = "GET_SEARCHDATAS_SUCCESS" as const;
const GET_SEARCHDATAS_ERROR = "GET_SEARCHDATAS_ERROR" as const;

//브랜드별 액션 타입
const GET_BRANDDATAS = "GET_BRANDDATAS" as const
const GET_BRANDDATAS_SUCCESS = "GET_BRANDDATAS_SUCCESS" as const
const GET_BRANDDATAS_ERROR = "GET_BRANDDATAS_ERROR" as const

//공지사항 액션타입
const GET_NOTICEDATAS = "GET_NOTICEDATAS" as const
const GET_NOTICEDATAS_SUCCESS = "GET_NOTICEDATAS_SUCCESS" as const
const GET_NOTICEDATAS_ERROR = "GET_NOTICEDATAS_ERROR" as const

const GET_NOTICEDATA = "GET_NOTICEDATA" as const
const GET_NOTICEDATA_SUCCESS = "GET_NOTICEDATA_SUCCESS" as const
const GET_NOTICEDATA_ERROR = "GET_NOTICEDATA_ERROR" as const 

//장바구니 액션 타입
const GET_CARTDATA = "GET_CARTDATA" as const
const GET_CARTDATA_SUCCESS = "GET_CARTDATA_SUCCESS" as const
const GET_CARTDATA_ERROR = "GET_CARTDATA_ERROR" as const
///////////////////////////

//액션함수
export const getDatas = () => ({type: GET_DATAS})
export const getDatasSuccess = (data: iceCreamData2) => ({type: GET_DATAS_SUCCESS, payload: data})
export const getDatasError = (error: AxiosError) => ({type: GET_DATAS_ERROR, payload: error})

export const getData = () => ({type: GET_DATA})
export const getDataSuccess = (data: iceCreamData2) => ({type: GET_DATA_SUCCESS, payload: data})
export const getDataError = (error: AxiosError) => ({type: GET_DATA_ERROR, payload: error})
//검색 액션 함수
export const getSearchDatas = () => ({type: GET_SEARCHDATAS})
export const getSearchDatasSuccess = (data: iceCreamData2) => ({type: GET_SEARCHDATAS_SUCCESS, payload: data})
export const getSearchDatasError = (error: AxiosError) => ({type: GET_SEARCHDATAS_ERROR, payload: error})
//브랜드별 액션 함수
export const getBrandDatas = () => ({type: GET_BRANDDATAS})
export const getBrandDatasSuccess = (data: BrandDatas) => ({type: GET_BRANDDATAS_SUCCESS, payload: data})
export const getBrandDatasError = (error: AxiosError) => ({type: GET_BRANDDATAS_ERROR, payload: error})

//공지사항 액션함수
export const getNoticeDatas = () => ({type: GET_NOTICEDATAS})
export const getNoticeDatasSuccess = (data: NoticeDatas) => ({type: GET_NOTICEDATAS_SUCCESS, payload: data})
export const getNoticeDatasError = (error: AxiosError) => ({type: GET_NOTICEDATAS_ERROR, payload: error})

export const getNoticeData = () => ({type: GET_NOTICEDATA})
export const getNoticeDataSuccess = (data: NoticeDatas) => ({type: GET_NOTICEDATA_SUCCESS, payload: data})
export const getNoticeDataError = (error: AxiosError) => ({type: GET_NOTICEDATA_ERROR, payload: error})

//장바구니 액션함수
export const getCartData = () => ({type: GET_CARTDATA})
export const getCartDataSuccess = (data: CartDatas) => ({type: GET_CARTDATA_SUCCESS, payload: data})
export const getCartDataError = (error: AxiosError) => ({type: GET_CARTDATA_ERROR, payload: error})
///////////////

type DataAction = ReturnType<typeof getDatas>
| ReturnType<typeof getDatasSuccess>
| ReturnType<typeof getDatasError>
| ReturnType<typeof getData>
| ReturnType<typeof getDataSuccess>
| ReturnType<typeof getDataError>
| ReturnType<typeof getSearchDatas>
| ReturnType<typeof getSearchDatasSuccess>
| ReturnType<typeof getSearchDatasError>
| ReturnType<typeof getBrandDatas>
| ReturnType<typeof getBrandDatasSuccess>
| ReturnType<typeof getBrandDatasError>
| ReturnType<typeof getNoticeDatas>
| ReturnType<typeof getNoticeDatasSuccess>
| ReturnType<typeof getNoticeDatasError>
| ReturnType<typeof getNoticeData>
| ReturnType<typeof getNoticeDataSuccess>
| ReturnType<typeof getNoticeDataError>
| ReturnType<typeof getCartData>
| ReturnType<typeof getCartDataSuccess>
| ReturnType<typeof getCartDataError>

//////////////////////////

//상태 타입
export type DataState = {
    iceProducts: {
        loading: boolean;
        data: null | iceCreamData2;
        error: null | Error;
    },
    iceProduct: {
        loading: boolean;
        data: null | iceCreamData2;
        error: null | Error;
    },
    searchResult: {
        loading: boolean;
        data: null | iceCreamData2;
        error: null | Error;
    },
    brandsList: {
        loading: boolean;
        data: null | BrandDatas;
        error: null | Error;
    }
    noticeLists: {
        loading: boolean;
        data: null | NoticeDatas;
        error: null | Error;
    }
    noticeList: {
        loading: boolean;
        data: null | NoticeDatas;
        error: null | Error;
    }
    cartList: {
        loading: boolean;
        data: null | CartDatas;
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
    searchResult: {
        loading: false,
        data: null,
        error: null
    },
    brandsList: {
        loading: false,
        data: null,
        error: null
    },
    noticeLists: {
        loading: false,
        data: null,
        error: null
    },
    noticeList: {
        loading: false,
        data: null,
        error: null
    },
    cartList: {
        loading: false,
        data: null,
        error: null
    }
}
////////////////////////
/* type CallbackType = {
    callback: () => void
} */

//thunk함수
export const getDatasF = (callback:Function) => async (dispatch: Dispatch) =>{
    dispatch({type: GET_DATAS})
    try{
        const response = await callback();
        const data = response.data
        //console.log(data)
        setTimeout(()=>{
            dispatch({
                type: GET_DATAS_SUCCESS, payload: data
            })
        },7000)
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
//검색데이터
export const getSearchDataF = (callback:Function) => async (dispatch: Dispatch) => {
    dispatch({type: GET_SEARCHDATAS})
    try{
        const response = await callback();
        const data = response.data;
        dispatch({
            type: GET_SEARCHDATAS_SUCCESS, payload: data
        })
    }
    catch(e){
        dispatch({type: GET_SEARCHDATAS_ERROR, error: e})
    }
}
//브랜드별 리스트
export const getBrandsDataF = (callback:Function) => async (dispatch: Dispatch) => {
    dispatch({type: GET_BRANDDATAS})
    try{
        const response = await callback();
        const data = response.data;
        //console.log(data)
        dispatch({
            type: GET_BRANDDATAS_SUCCESS, payload: data
        })
    }
    catch(e){
        dispatch({type: GET_BRANDDATAS_ERROR, error: e})
    }
}
/* //브랜드 선택
export const getBrandsDatasF = (callback:Function) => async (dispatch: Dispatch) => {
    dispatch({type: GET_BRANDDATAS})
    try{
        const response = await callback();
        const data = response.data;
        console.log(data)
        dispatch({
            type: GET_BRANDDATAS_SUCCESS, payload: data
        })
    }
    catch(e){
        dispatch({type: GET_BRANDDATAS_ERROR, error: e})
    }
} */
//공지사항 
export const getNoticeDatasF = (callback:Function) => async (dispatch: Dispatch) => {
    dispatch({type: GET_NOTICEDATAS})
    try{
        const response = await callback();
        const data = response.data;
        console.log(data)
        dispatch({
            type: GET_NOTICEDATAS_SUCCESS, payload: data
        })
    }
    catch(e){
        dispatch({type: GET_NOTICEDATAS_ERROR, error: e})
    }
}
export const getNoticeDataF = (callback:Function) => async (dispatch: Dispatch) => {
    dispatch({type: GET_NOTICEDATA})
    try{
        const response = await callback();
        const data = response.data[0];
        console.log(data)
        dispatch({
            type: GET_NOTICEDATA_SUCCESS, payload: data
        })
    }
    catch(e){
        dispatch({type: GET_NOTICEDATA_ERROR, error: e})
    }
}
//장바구니
export const getCartDataF = (callback:Function) => async (dispatch: Dispatch) => {
    dispatch({type: GET_CARTDATA})
    try{
        const response = await callback();
        const data = response.data;
        console.log(data)
        dispatch({
            type: GET_CARTDATA_SUCCESS, payload: data
        })
    }
    catch(e){
        dispatch({type: GET_CARTDATA_ERROR, error: e})
    }
}



////////////////////////////////////////////


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
            //검색 데이터
        case GET_SEARCHDATAS:
            return {
                ...state,
                searchResult: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_SEARCHDATAS_SUCCESS:
            return {
                ...state,
                searchResult: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_SEARCHDATAS_ERROR:
            return {
                ...state,
                searchResult: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
            //브랜드별 리스트
        case GET_BRANDDATAS:
            return {
                ...state,
                brandsList: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_BRANDDATAS_SUCCESS:
            return {
                ...state,
                brandsList: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_BRANDDATAS_ERROR:
            return {
                ...state,
                brandsList: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }   
            //공지사항         
        case GET_NOTICEDATAS:
            return {
                ...state,
                noticeLists: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_NOTICEDATAS_SUCCESS:
            return {
                ...state,
                noticeLists: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_NOTICEDATAS_ERROR:
            return {
                ...state,
                noticeLists: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
            //공지선택
        case GET_NOTICEDATA:
            return {
                ...state,
                noticeList: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_NOTICEDATA_SUCCESS:
            return {
                ...state,
                noticeList: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_NOTICEDATA_ERROR:
            return {
                ...state,
                noticeList: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            } 
            //장바구니 
        case GET_CARTDATA:
            return {
                ...state,
                cartList: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_CARTDATA_SUCCESS:
            return {
                ...state,
                cartList: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_CARTDATA_ERROR:
            return {
                ...state,
                cartList: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }   
        default:
            return state;       
            
    }
}
