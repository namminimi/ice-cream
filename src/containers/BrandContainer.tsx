import axios from 'axios';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import BrandLists from '../components/BrandLists';
import { API_URL } from '../config/apirul';
import { rootState } from '../moduls';
import { getBrandsDataF } from '../moduls/iceProduct';


const mm = {
    margin: "300px 900px",
    width: "100%",
    color: "black"
  }

const BrandContainer = () => {
    const {loading, data, error} = useSelector((state:rootState)=> state.iceProduct.brandsList)
    const dispatch = useDispatch<any>();

    const brandDatas = async () => {
        const data= await axios.get(`${API_URL}/brand`)
        console.log(data)
        return data
    }
    
    useEffect(()=>{
        dispatch(getBrandsDataF(brandDatas))
    },[dispatch])
    if(loading) return <div style={{...mm}}>로딩중입니다</div>
    if(error) return <div style={{...mm}}>에러가 발생했습니다</div>
    if(!data) return <div style={{...mm}}>데이터가 없습니다</div>
    console.log(data)
    return (
        <div>
            <BrandLists data={data}/>
        </div>
    );
};

export default BrandContainer;