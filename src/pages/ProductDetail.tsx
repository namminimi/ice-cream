import React from 'react';
import { iceCreamData2 } from '../api/dataType';
import DetailSlide from '../components/DetailSlide';
import "./ProductDetail.scss"

type detailDataType = {
    datas: iceCreamData2
}

const ProductDetail = ({datas}:detailDataType) => {
    return (
        <div className='productDetailPage inner'>
            <div className='innerProduct'>
                <h2 className='b_title'>상세보기</h2>
                <div className='buyProduct'>
                    <DetailSlide />
                    <div className='b_table'>
                        <h2>{datas.p_title}</h2>
                        <table className='bb_tables'>
                            <tbody>
                                <tr>
                                    <td>판매가:</td>
                                    <td>3000원</td>
                                </tr>
                                <tr>
                                    <td>수량:</td>
                                    <td>
                                        <input type="number"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>적립포인트:</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className='buyBtn'>
                                        <button type="submit">BUY</button>
                                        <button type="button">장바구니</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;