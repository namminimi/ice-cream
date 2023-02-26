import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./Contant2.scss"


const Contant2 = () => {
    const {ref, inView, entry} = useInView({
        threshold:0,
    })
    
    if(inView){
        entry?.target.classList.add("scChange")
    }else{
        entry?.target.classList.remove("scChange")
    }
    return (
        <div id="bg2">
            <div className='sc2' ref={ref}>
                <h1>반가워 옵저버다</h1>
            </div>
        </div>
    );
};

export default Contant2;