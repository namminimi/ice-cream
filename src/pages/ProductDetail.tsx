import React from 'react';
import { iceCreamData2 } from '../api/dataType';
import DetailSlide from '../components/DetailSlide';
import "./ProductDetail.scss"

type detailDataType = {
    data: iceCreamData2
}

const ProductDetail = ({data}:detailDataType) => {
    return (
        <div className='productDetailPage inner'>
            <div className='innerProduct'>
                <h2 className='b_title'>상세보기</h2>
                <p>{data.p_dsce}</p>
                <div className='buyProduct'>
                    <DetailSlide data={data}/>
                    <div className='b_table'>
                        <h2 style={{width: data.p_title.length >= 4 ? 
                            (data.p_title.length <= 7 ? "180px" : "300px" ): "90px"}}>{data.p_title}</h2>
                        <table className='bb_tables'>
                            <tbody>
                                <tr>
                                    <td>판매가:</td>
                                    <td>3000원</td>
                                </tr>
                                <tr>
                                    <td>수량:</td>
                                    <td>
                                        <input type="number" max="10" min="1"/>
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