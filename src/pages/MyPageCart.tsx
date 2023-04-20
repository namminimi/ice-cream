import axios from 'axios';
import React, {useState, useCallback} from 'react';
import { CartDatas } from '../apis/dataType';
import { API_URL } from '../config/apirul';
import "./MyPageCart.scss"
import MyPageSelectContainer from '../containers/MyPageSelectContainer';

type MyPageCartDataType = {
    data: CartDatas[]
    reDispatch : () => void
    userId:string | undefined
}

const MyPageCart = ({data, reDispatch, userId}:MyPageCartDataType) => {
    //console.log(userId)
    const [checkedList, setCheckedLists] = useState<(string | number)[]>([])
    let sum = 0
    const [isSum, setSum] = useState(0)
    const onIncrease = () =>{
        console.log(`인크리스 안 ${isSum} + ${sum}`)
        setSum(isSum + sum)
    }
    const onDecrease = () =>{
        setSum(isSum + sum)
        console.log(`디크리스 안 ${isSum} + ${sum}`)
    }
    
    //전체 체크 클릭시 발생
    const onCheckedAll = useCallback(
        (checked: boolean) => {
            //console.log(checked)
            if(checked) {
                //console.log(1111);
                const checkedListArray: any[] = [];
                data.forEach(list=> {
                    checkedListArray.push(list)
                })
                //console.log(checkedListArray)
                sum = 0
                checkedListArray.forEach(li => {
                    sum += li.c_price * li.c_amount
                    onIncrease()
                })
                
                setCheckedLists(checkedListArray)

            }else {
                console.log(checkedList)
                sum = 0
                onDecrease()
                setCheckedLists([])
            }
        }, [data]
    )
    //console.log(checkedList)
    
    //개별 체크 클릭시 발생
    const onCheckedElement = useCallback(
        (checked:boolean, list:any) => {
            if(checked){
                setCheckedLists([...checkedList, list])
                //console.log(checkedList)
                //console.log(list)
                const checkedArray: any [] = [];
                checkedArray.push(list)
                checkedArray.forEach((li: any) => {
                    //console.log(li)
                    sum += li.c_price * li.c_amount
                    onIncrease()
                })
                //console.log(sum)
            }else {
                setCheckedLists(checkedList.filter((el)=>el !== list))
                const filterList = checkedList.filter((el)=>el === list)
                //console.log(filterList)
                filterList.forEach((li: any)=>{
                    console.log(li)
                    sum -= li.c_price * li.c_amount
                    onDecrease()
                }) 
            }
            
        },[checkedList]
    )
    
console.log(checkedList)
    
    let daSum = 0
    let sumPrice:string= "";
    let sumPriceArray: string[] = [];
    data.forEach(da => {
        //console.log(da.c_price* da.c_amount)
        daSum = da.c_price * da.c_amount
        sumPrice = daSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        sumPriceArray.push(sumPrice)
    })

    let sumDot = isSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(Boolean(checkedList))
    const delCart = () => {
        (checkedList as (string | number)[]).forEach((li: any) => {
            //delList.push(li.c_no)
            let num = li.c_no
            axios.delete(`${API_URL}/delCart/${num}`)
            .then(res=>{
                console.log(res)
                reDispatch()
            })
            .catch(e=>console.log(e))
        })
    
        //console.log(delList)
       // if(delList !== undefined || delList !== null) { 
    }
   
    return (
        <div id="myPageCart" className='inner'>
            <div className='myPageCartForm'>
                <h2>마이페이지</h2>
                <MyPageSelectContainer userId={userId}/>
                <h3>내 장바구니</h3>
                <div className='myPageCartDivTable'>
                    <table className='myPageCartTable'>
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" name='allCheck' onChange={(e)=>onCheckedAll(e.target.checked)}
                                    checked = {checkedList.length === 0 ? false : checkedList.length === (data as any).length ? true : false}/>
                                </th>
                                <th>상품</th>
                                <th>가격(원)</th>
                                <th>수량</th>
                                <th>구매 시 적립포인트</th>
                                <th>구매하기</th>
                            </tr>
                        </thead>
                        <tbody>   
                            {data.map((lis: any, index:number)=>
                            <tr>
                                <td>
                                    <input type="checkbox" key={lis.c_no}  onChange={(e)=> onCheckedElement(e.target.checked, lis) }
                                    checked={checkedList.includes(lis) ? true : false}/>
                                </td>
                                <td className='myPageTitle'>
                                    <img src={`${API_URL}/${lis.c_img}`} alt="" width="200px" height="200px"/>
                                    <span>
                                        <h4>[{lis.c_brand}]</h4>
                                        <p>{lis.c_title}/{lis.c_taste}</p>
                                    </span>
                                </td>
                                <td>
                                    <p>{sumPriceArray[index]}</p>
                                </td>
                                <td>
                                    <p>{lis.c_amount}</p>
                                </td>
                                <td>
                                    <p>{lis.c_point}P</p>
                                </td>
                                <td>
                                    <button type='button'>구매하기</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                    <div className='cartBtn'>
                        <div className='cartDel'>
                            <button type="button" onClick={delCart}>선택항목 삭제하기</button>
                        </div>
                        <div className='cartSum'>
                            <p>총 상품금액: {sumDot}원</p>
                        </div>
                    </div>
                    <div className='cartBuy'>
                        <button>선택항목 구매하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPageCart;