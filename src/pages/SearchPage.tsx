import React from 'react';
import { Link } from 'react-router-dom';
import { iceCreamData2 } from '../apis/dataType';
import SearchBlock from '../components/SearchBlock';
import { API_URL } from '../config/apirul';

type SearchType = {
    data: iceCreamData2[],
    title: string | undefined
}


const SearchPage = ({data, title}:SearchType) => {
    console.log(title)
    console.log(data)
    return (
        <div className='iceCreamMenu inner2'>
            <div className='iceCreamProducts'>
                <SearchBlock/>
                <div className='productLists'>
                    <h2>검색결과 : {title}....{data.length}건 있습니다</h2>
                    <ul className='prosUls'>
                        {data.map(list =><li className='prosLis' key={list.p_no}><Link to={`/productDetail/${list.p_no}`}>
                            <div className='productList'>
                                <img src={`${API_URL}/${list.p_img1}`} alt="" />
                                <div className='productTitle'>
                                    <h4>{list.p_title}</h4>
                                </div>
                            </div>
                            </Link></li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;