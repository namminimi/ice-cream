import { Cookies } from "react-cookie";


const cookies = new Cookies();



//쿠키생성
export const setCookie = (name:string, value:string, options: any) => {
    return cookies.set(name, value, {...options})
}

//쿠키생성
export const getCookie = (name:string) => {
    return cookies.get(name)
}

//쿠키생성
export const removeCookie = (name:string) => {
    return cookies.remove(name)
}