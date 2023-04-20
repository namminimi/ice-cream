const GET_SELECT = 'brand/GET_SELECT' as const

export const get_select = (brandList:string) => ({
    type: GET_SELECT,
    brandList: brandList
})

type BrandAction = ReturnType<typeof get_select>

export type IsBrandType = {
    id: number,
    brandList: string,
    isDone: boolean
}

type IsBrandState = IsBrandType[]

const isBrand: IsBrandState = [
    {id: 1, brandList: "전체", isDone: false},
    {id: 2, brandList: "롯대제과", isDone: false},
    {id: 3, brandList: "빙그레", isDone: false},
    {id: 4, brandList: "해태", isDone: false},
]


export default function brandSelect(state=isBrand, action: BrandAction){
    switch(action.type){
        case GET_SELECT:
            return state.map(br=>br.brandList === action.brandList ? {
                ...br,
                isDone: !br.isDone
            }:br.brandList !== action.brandList && br.isDone === true ?{
                ...br,
                isDone: !br.isDone
            }: br)
        default:
            return state;    
    }
}
