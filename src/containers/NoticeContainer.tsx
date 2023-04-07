import axios from 'axios';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { API_URL } from '../config/apirul';
import { rootState } from '../moduls';
import {getNoticeDatasF } from '../moduls/iceProduct';
import NoticePage from '../pages/NoticePage';

const NoticeContainer = () => {
    const {loading, data, error} = useSelector((state:rootState)=>state.iceProduct.noticeLists)
    const dispatch = useDispatch<any>();

    const noticeData = async () => {
        const data = await axios.get(`${API_URL}/notice`)
        return data
    }
    useEffect(()=>{
        dispatch(getNoticeDatasF(noticeData))
    }, [dispatch])
    if(loading) return <div>로딩중입니다...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div> 
    return (
        <div>
            <NoticePage data={data}/>
        </div>
    );
};

export default NoticeContainer;