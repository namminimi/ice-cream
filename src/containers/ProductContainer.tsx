import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { API_URL } from '../config/apirul';
import { rootState } from '../moduls';
import IceCreamProduct from '../pages/IceCreamProduct';
import { getDatasF } from '../moduls/iceProduct'
import Skeleton from '../components/Skeleton';


const mm = {
    margin: "300px 900px",
    width: "100%",
    color: "black"
  }

const ProductContainer = () => {
    const {loading, data, error} = useSelector((state:rootState) => state.iceProduct.iceProducts)
    const dispatch = useDispatch<any>(); 

    const iceCreamDatas = async () => {
        const data = await axios.get(`${API_URL}/products`)
        //console.log(data)
        return data;
    }

    //console.log(data)
    useEffect(()=>{
        dispatch(getDatasF(iceCreamDatas))
    },[dispatch])
    if(loading) return <Skeleton/>
    if(error) return <div style={{...mm}}>에러가 발생했습니다</div>
    if(!data) return <div style={{...mm}}>데이터가 없습니다</div>
    return (
        <div>
            <IceCreamProduct datas={data} loading={loading}/>
        </div>
    );
};

export default ProductContainer;