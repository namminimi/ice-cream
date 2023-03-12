import React from 'react';
import { API_URL } from '../config/apirul';
import "./IceCreamProduct.scss"

type dataType = {
    data: any
}

const IceCreamProduct = ({data}:dataType) => {
    console.log(data)
    return (
        <div className='iceCreamMenu inner2'>
            <div className='iceCreamProducts'>
                <div className='productSearch'>
                    <input type="text" placeholder='검색어를 입력해주세요'/>
                    <span>Search</span>
                </div>
                <h2>제품목록</h2>
                <div className='brand'>
                    <p>롯데제과</p>
                    <p>/</p>
                    <p>빙그레</p>
                    <p>/</p>
                    <p>해태</p> 
                </div>
                <div className='productLists'>
                    <ul>
                        {data.map((list:any) => <li key={list.p_no}>
                            <div className='productList'>
                                <img src={`${API_URL}/${list.p_img1}`} alt="" />
                                <div className='productTitle'>
                                    <h4>{list.p_title}</h4>
                                </div>
                            </div>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default IceCreamProduct;