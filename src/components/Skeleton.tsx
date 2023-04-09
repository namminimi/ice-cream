import React from 'react';
import BrandContainer from '../containers/BrandContainer';
import SearchBlock from './SearchBlock';
import "./Skeleton.scss"
import "../pages/IceCreamProduct.scss"

const Skeleton = () => {
    return (
        <div className='iceCreamMenu inner2'>
            <div className='iceCreamProducts'>
                <SearchBlock/>
                <h2>제품목록</h2>
                <BrandContainer/>
                <div className='productLists'>
                    <ul className='skeleton-ListUl'>
                        { new Array(12).fill(1).map((a , i) => 
                        <li className='skeleton-List' key={i}>
                            <div className='skeleton-productList'>
                                <div className='skeleton-img'/>
                                <div className='skeleton-productTitle'>
                                    
                                </div>
                                <h4 className='skeleton-title'/>
                            </div>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;