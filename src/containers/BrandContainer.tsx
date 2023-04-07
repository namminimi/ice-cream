import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import BrandLists from '../components/BrandLists';
import { rootState } from '../moduls';
import { useDispatch } from 'react-redux';
import { get_select } from '../moduls/brand';



const BrandContainer = () => {
    const brandList = useSelector((state:rootState)=> state.brandSelect)
    const dispatch = useDispatch()
    const onToggle = (brandList:string) => dispatch(get_select(brandList))
   //console.log(brandList)
    
    return (
        <div>
            <BrandLists data={brandList} onToggle={onToggle}/>
        </div>
    );
};

export default BrandContainer;