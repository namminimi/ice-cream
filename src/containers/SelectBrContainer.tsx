import axios from 'axios';
import React , {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config/apirul';
import { rootState } from '../moduls';
import { getDatasF } from '../moduls/iceProduct';
import SelectBrPage from '../pages/SelectBrPage';

const SelectBrContainer = () => {
    const {brand} = useParams()
    const {loading, data, error} = useSelector((state:rootState) => state.iceProduct.iceProducts)
    const dispatch = useDispatch<any>();

    const selectData = async () => {
        const data = await axios.get(`${API_URL}/selectBr/${brand}`)
        return data 
    }

    useEffect(()=>{
        dispatch(getDatasF(selectData))
    }, [dispatch, brand])
    if(loading) return <div>로딩중입니다...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    return (
        <div>
            <SelectBrPage datas={data}/>
        </div>
    );
};

export default SelectBrContainer;