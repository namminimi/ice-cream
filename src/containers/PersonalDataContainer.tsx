import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config/apirul';
import { rootState } from '../moduls';
import { getPersonalDataF } from '../moduls/personal';
import PersonalData from '../pages/PersonalData';

const PersonalDataContainer = () => {
    const {id} = useParams();
    console.log(id)
    const {loading, data, error} = useSelector((state:rootState)=> state.personal.personalDatas)
    const dispatch = useDispatch<any>();

    const personalData = async () => {
        const data = await axios.get(`${API_URL}/personal/${id}`)
        return data
    }
    useEffect(()=>{
        dispatch(getPersonalDataF(personalData))
    },[dispatch])
    if(loading) return <div>로딩중입니다.....</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    return (
        <div>
            <PersonalData data={data} id={id}/>
        </div>
    );
};

export default PersonalDataContainer;