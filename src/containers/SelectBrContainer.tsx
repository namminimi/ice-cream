import axios from 'axios';
import React , {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config/apirul';
import { rootState } from '../moduls';
import { getBrandsDataF, getDatasF } from '../moduls/iceProduct';
import SelectBrPage from '../pages/SelectBrPage';
import Skeleton from '../components/Skeleton';


const SelectBrContainer = () => {
    const {brand} = useParams()
    const {loading, data, error} = useSelector((state:rootState) => state.iceProduct.iceProducts)
    const dispatch = useDispatch<any>();
    //console.log(brand)

    const selectData = async () => {
        const data = await axios.get(`${API_URL}/selectBr/${brand}`)
        return data 
    }

    useEffect(()=>{
        dispatch(getDatasF(selectData))
    }, [dispatch, brand])
    if(loading) return <Skeleton/>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    //console.log(data)
    return (
        <div>
            <SelectBrPage datas={data}/>
        </div>
    );
};

export default SelectBrContainer;