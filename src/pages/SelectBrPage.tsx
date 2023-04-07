import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { iceCreamData2 } from '../apis/dataType';
import SearchBlock from '../components/SearchBlock';
import { API_URL } from '../config/apirul';
import BrandContainer from '../containers/BrandContainer';
import Pagination from '../components/Pagination';

type SelectDataType = {
    datas: iceCreamData2 | null
}

const SelectBrPage = ({datas}:SelectDataType) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage, setPostPerPage] = useState(12); // 한페이지당 렌더링 되는 데이터수

    //페이지 숫자 계산
    const indexOfLast = currentPage * postsPerPage //페이지 마지막수 ex 1 * 10
    const indexOfFirst = indexOfLast - postsPerPage; // 페이지 첫번째 수 ex 10 - 10 = 0

    //데이터 몇번까지 자르기
    const currentPosts = (data: iceCreamData2 | null) => {
        let currentPosts = (data as any).slice(indexOfFirst, indexOfLast)
        return currentPosts;
    }
    const postLists = currentPosts(datas)
    return (
        <div className='iceCreamMenu inner2'>
            <div className='iceCreamProducts'>
                <SearchBlock/>
                <h2>제품목록</h2>
                <BrandContainer/>
                <div className='productLists'>
                    <ul>
                        {(postLists as any).map((list:any) =><li key={list.p_no}><Link to={`/productDetail/${list.p_no}`}>
                            <div className='productList'>
                                <img src={`${API_URL}/${list.p_img1}`} alt="" />
                                <div className='productTitle'>
                                    <h4>{list.p_title}</h4>
                                </div>
                            </div>
                            </Link></li>)}
                    </ul>
                    <div className='paging'>
                        <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={(datas as any).length}
                        paginate={setCurrentPage}
                        currentPage={currentPage}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectBrPage;