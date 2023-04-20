const GET_MYPAGE_SELECT = 'myPage/GET_MYPAGE_SELECT' as const

export const get_myPage_select = (id:number) => ({
    type: GET_MYPAGE_SELECT,
    id:id
})

type MyPageAction = ReturnType<typeof get_myPage_select>

export type IsMyPageType = {
    id: number,
    text: string,
    link: string,
    isDone: boolean
}

type IsMyPageState = IsMyPageType[]

const isMyPage: IsMyPageState = [
    {id: 1, text: "장바구니", link: "myPageCart" ,isDone: false},
    {id: 2, text: "정보수정 및 회원 탈퇴", link: "myPage",isDone: false}
]

export default function myPageSelect(state=isMyPage, action: MyPageAction) {
    switch(action.type) {
        case GET_MYPAGE_SELECT:
            return state.map(mp => mp.id === action.id ? {
                ...mp,
                isDone: !mp.isDone
            }: mp.id !== action.id && mp.isDone === true ? {
                ...mp,
                isDone: !mp.isDone
            }: mp)
        default:
            return state;    
    }
}