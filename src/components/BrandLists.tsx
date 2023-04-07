import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IsBrandState } from '../moduls/brand';

type BrandDataType = {
    data: IsBrandState
    onToggle: (brandList:string) => void
}


const BrandLists = ({data, onToggle}:BrandDataType) => {
    console.log(data)
    
    
    return (
        <div className='brand'>
            <ul>
            {data.map(br =><li key={br.brandList}  
            onClick={()=>{onToggle(br.brandList)}}>
                    <Link to={`/iceCreamList/${br.brandList}`}><p style={{fontSize: br.isDone ? "30px" : "20px"}}>
                        {br.brandList}</p></Link>
                    <p>/</p>
                </li>
            )}
            </ul> 
        </div>
    );
};

export default BrandLists;