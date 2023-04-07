import axios from 'axios';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { iceCreamData2 } from '../apis/dataType';
import DetailSlide from '../components/DetailSlide';
import { API_URL } from '../config/apirul';
import { getCookie } from '../util/cookie';
import "./ProductDetail.scss"

type DetailDataType = {
    data: iceCreamData2
}

const ProductDetail = ({data}:DetailDataType) => {
    let priceDot = data.p_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //console.log(priceDot)
    let taste = data.p_taste.split(",")
    const userId = getCookie("userId")
    const [isOpen, setOpen] = useState(false)
    const [isDetailProduct, setDetailProduct] = useState({
        c_userId : userId,
        c_title: data.p_title,
        c_price: data.p_price,
        c_taste: taste[0],
        c_amount: 1,
        c_img: data.p_img1,
        c_point: data.p_point,
        c_brand: data.p_brand
    })
    
    const onChange = (e:React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target;
        setDetailProduct({
            ...isDetailProduct,
            [name] : value
        })
    }
    console.log(isDetailProduct.c_taste)
    console.log(isDetailProduct.c_amount)

    const onClose = () => {
        setOpen(false)
    }

    const onSubmit = () => {
        if(userId){
            axios.post(`${API_URL}/carts`, isDetailProduct)
            .then(res=>{
                console.log(res)
                setOpen(true)
            })
            .catch(e=>console.log(e))
        }else {
            alert("로그인 후에 이용해주세요")
        }
        
    }
    
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
                                    <td>{priceDot}원</td>
                                </tr>
                                <tr>
                                    <td>종류:</td>
                                    <td>
                                    <select style={{width:"100px"}} name="c_taste" value={isDetailProduct.c_taste} onChange={onChange}>
                                        {(taste as any).map((one:any, index:number)=> 
                                        <option value={one} id="ss">{one}</option>
                                        )}
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>수량:</td>
                                    <td>
                                        <input type="number" name="c_amount" value={isDetailProduct.c_amount} max={data.p_amount} min="1" onChange={onChange}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>적립포인트:</td>
                                    <td>{data.p_point}P</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className='buyBtn'>
                                        <button type="button">BUY</button>
                                        <button type="button" onClick={onSubmit}>장바구니 추가</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='moveCartAlert' style={{opacity: isOpen ? "1" : "0"}}>
                    <p>장바구니에 담았습니다</p>
                    <div className='moveCartBtns'>
                        <button type="button" onClick={onClose}>더 둘러보기</button>
                        <Link to={`/myPageCart/${userId}`}><button type="button" onClick={onClose}>장바구니로 이동</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;