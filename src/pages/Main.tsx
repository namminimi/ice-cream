import React from 'react';
import Contant1 from '../components/Contant1';
import Contant2 from '../components/Contant2';
import Contant3 from '../components/Contant3';
import SimpleSlider from '../components/SimpleSlider';
import "./Main.scss"

const Main = () => {
    return (
        <div className='main'>
            <SimpleSlider/>
            <Contant1/>
            <Contant2/>
            <Contant3/>
        </div>
    );
};

export default Main;