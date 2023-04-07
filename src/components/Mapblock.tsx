import { type } from 'os';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import "./Mapblock.scss"
import { AiFillCar, AiFillPhone, AiFillShop, AiOutlineWifi } from "react-icons/ai";
import {  BiTimeFive } from "react-icons/bi";

const { kakao } = window as any;
const MapDiv = styled.div`
    width: 500px;
    height: 400px;
`

const Mapblock = () => {
    useEffect(()=>{
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch('달천도담길 3-40', function(result:any, status:any) {
            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                const infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0;">아잉스크림</div>'
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        });    
    },[])

    const {ref, inView, entry} = useInView({
        threshold:0,
    })
    if(inView){
        entry?.target.classList.add("addressOn")
    }else{
        entry?.target.classList.remove("addressOn")
    }
    
    return (
        <div id="welcome" >
            <MapDiv id="map"/>
            <div className='storeAddress' ref={ref}>
                <div className='addressUlsan'>
                    <h3><AiFillShop></AiFillShop> 주소</h3>
                    <p>울산광역시 북구 달천도담길 3-40</p>
                </div>
                <div className='time'>
                    <h3><BiTimeFive></BiTimeFive> 영업시간</h3>
                    <p>월요일: 10:00 ~ 22:00<br/>
                    화요일: 10:00 ~ 22:00<br/>
                    수요일: 10:00 ~ 22:00<br/>
                    목요일: 10:00 ~ 22:00<br/>
                    금요일: 10:00 ~ 22:00<br/>
                    토요일: 10:00 ~ 22:00<br/>
                    일요일: 10:00 ~ 22:00<br/></p>
                </div>
                <div className='phone'>
                    <h3><AiFillPhone></AiFillPhone> 전화번호</h3>
                    <p>010-9173-2247</p>
                </div>
                <div>
                    <h3><AiFillCar></AiFillCar> 주차</h3>
                    <p>가능</p>
                </div>
                <div>
                    <h3><AiOutlineWifi></AiOutlineWifi> 와이파이</h3>
                    <p>있음</p>
                </div>
            </div>
        </div>
    );
};

export default Mapblock;

