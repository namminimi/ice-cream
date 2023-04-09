import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./Contant1.scss"
import IceSlide from './IceSlide';


const Contant1 = () => {
    const {ref, inView, entry} = useInView({
        threshold:0.1,
    })
    //console.log(ref)
    if(inView){
        entry?.target.classList.add("scChange")
    }else{
        entry?.target.classList.remove("scChange")
    }
       
    return (
        <div id='bg1'>
            <div className='sc1' ref={ref}>
                <h1>사계절 즐겨먹는 아이스크림</h1>
                <br/>
                <h1>다양한 아이스크림들이 있어요</h1>
                <br/>
            </div>
            <h2>맛있는 아이스크림 같이 먹어봐요</h2>
            <IceSlide/>
        </div>
    );
};

export default Contant1;

