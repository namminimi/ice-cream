import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./Contant3.scss"






const Contant3 = () => {
    const {ref, inView, entry} = useInView({
        threshold:0,
    })
    if(inView){
        entry?.target.classList.add("scChange")
    }else{
        entry?.target.classList.remove("scChange")
    }
    return (
        <div id="bg3">
            <div className='sc3' ref={ref}>
                <h1>쓔우우우우우우우우ㅜ웅</h1>
            </div>
        </div>
    );
};

export default Contant3;