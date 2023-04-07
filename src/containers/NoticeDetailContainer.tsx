import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config/apirul';
import { rootState } from '../moduls';
import { getNoticeDataF } from '../moduls/iceProduct';
import NoticeDetail from '../pages/NoticeDetail';

const NoticeDetailContainer = () => {
    const {no} = useParams();
    const {loading, data, error} = useSelector((state:rootState) => state.iceProduct.noticeList)
    const dispatch = useDispatch<any>();

    const noticeData = async () => {
        const data = await axios.get(`${API_URL}/notice/${no}`)
        return data
    }

    useEffect(()=>{
        dispatch(getNoticeDataF(noticeData))
    }, [dispatch, no])
    if(loading) return <div>로딩중입니다...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    console.log(data)
    return (
        <div>
            <NoticeDetail data={data}/>
        </div>
    );
};

export default NoticeDetailContainer;