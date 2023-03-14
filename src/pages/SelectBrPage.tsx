import React from 'react';
import { Link } from 'react-router-dom';
import SearchBlock from '../components/SearchBlock';
import { API_URL } from '../config/apirul';
import BrandContainer from '../containers/BrandContainer';

type SelectDataType = {
    datas: any
}

const SelectBrPage = ({datas}:SelectDataType) => {
    return (
        <div className='iceCreamMenu inner2'>
            <div className='iceCreamProducts'>
                <SearchBlock/>
                <h2>제품목록</h2>
                <BrandContainer/>
                <div className='productLists'>
                    <ul>
                        {datas.map((list:any) =><Link to={`/productDetail/${list.p_no}`}><li key={list.p_no}>
                            <div className='productList'>
                                <img src={`${API_URL}/${list.p_img1}`} alt="" />
                                <div className='productTitle'>
                                    <h4>{list.p_title}</h4>
                                </div>
                            </div>
                        </li></Link>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SelectBrPage;