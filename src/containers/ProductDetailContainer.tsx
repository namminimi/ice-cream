import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config/apirul';
import { rootState } from '../moduls';
import { getDataF } from '../moduls/iceProduct';
import ProductDetail from '../pages/ProductDetail'; 

const mm = {
    margin: "300px",
    marginLeft: "800px",
    color: "#fff"
  }

const ProductDetailContainer = () => {
    const {no} = useParams();
    const {loading, data, error} = useSelector((state:rootState) => state.iceProduct.iceProduct)
    const dispatch = useDispatch<any>()

    const detailData = async () => {
        const data = await axios.get(`${API_URL}/productDetails/${no}`)
        console.log(data)
        return data
    }

    useEffect(()=>{
        dispatch(getDataF(detailData))
    },[dispatch, no])
    if(loading) return <div style={{...mm}}>로딩중입니다...</div>
    if(error) return <div style={{...mm}}>에러가 발생했습니다.</div>
    if(!data) return <div style={{...mm}}>데이터가 없습니다.</div>
    console.log(data)
    return (
        <div>
            <ProductDetail data={data}/>
        </div>
    );
};

export default ProductDetailContainer;