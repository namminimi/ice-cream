import axios from 'axios';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config/apirul';
import { rootState } from '../moduls';
import { getCartDataF } from '../moduls/iceProduct';
import MyPageCart from '../pages/MyPageCart';

const CartContainer = () => {
    const {id} = useParams();
    const {loading, data, error} = useSelector((state:rootState)=>state.iceProduct.cartList)
    const dispatch = useDispatch<any>();
    //console.log(id)

    const cartDates = async () =>{
        const data = await axios.get(`${API_URL}/sendCart/${id}`)
        return data
    }

    const reDispatch = () => {
        dispatch(getCartDataF(cartDates))
    }

    useEffect(()=>{
        dispatch(getCartDataF(cartDates))
    },[dispatch, id])
    if(loading) return <div>로딩중입니다...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    return (
        <div>
            <MyPageCart data={data} reDispatch={reDispatch} userId={id}/>
        </div>
    );
};

export default CartContainer;