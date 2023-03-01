import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./Contant2.scss"


const Contant2 = () => {
    const {ref, inView, entry} = useInView({
        threshold:0,
    })
    
    if(inView){
        entry?.target.classList.add("sc2Change")
    }else{

        entry?.target.classList.remove("sc2Change")
    }
    return (
        <div id="bg2" >
            <h2><span>저희 아잉스크림은요!!!</span></h2>
            <div className='inBg2'>
                <div className='page2IceImgs'>
                    <div className='page2IceImg iceImg1'>
                        <img src="images/ice24.jpg" alt=""/>
                        <div className='page2Text' >
                            <h2>다양한 맛을 즐길 수 있어요</h2>
                        </div>
                    </div>
                    <div className='page2IceImg iceImg2'>
                        <img src="images/mart1.jpg" alt=""/>
                        <div className='page2Text' >
                            <h2>전 세계 아이스크림을 즐길 수 있어요</h2>
                        </div>
                    </div>
                    <div className='page2IceImg iceImg2'>
                        <img src="images/mart2.jpg" alt="" />
                        <div className='page2Text'>
                            <h2>매장에서도 아이스크림을 여유롭게 즐길 수 있어요 </h2>
                        </div>
                    </div>
                </div>
                <div className='sc2' ref={ref}>
                    <h1>어때? 기분전환 겸 아이스크림 먹으러 올래?</h1>
                </div>
            </div>
        </div>
    );
};

export default Contant2;