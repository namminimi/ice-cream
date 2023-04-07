import axios from 'axios';
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dispatch } from 'redux';
import { iceCreamData2 } from '../apis/dataType';
import { API_URL } from '../config/apirul';
import { rootState } from '../moduls';
import { getSearchDataF } from '../moduls/iceProduct';
import SearchPage from '../pages/SearchPage';

const SearchContainer = () => {
    const dispatch = useDispatch<any>();
    const {title} = useParams();

    console.log(title)

    const {loading, data, error} = useSelector((state:rootState) => state.iceProduct.searchResult)

 
    
    const searchData = async () => {
        const data = await axios.get(`${API_URL}/search/${title}`)
        console.log(data)
        return data
    }

    useEffect(()=>{
        dispatch(getSearchDataF(searchData))
    },[dispatch, title])
    if(loading) return <div>로딩중입니다.....</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    return (
        <div>
            <SearchPage data={data} title={title}/>
        </div>
    );
};

export default SearchContainer;