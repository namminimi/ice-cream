import React, {useState} from 'react';
import "./AddProduct.scss"
import { iceCreamData2 } from '../api/dataType';
import axios from 'axios';
import { API_URL } from '../config/apirul';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [isAddPro, setAddPro] = useState<iceCreamData2>({
        p_title:"",
        p_dsce: "",
        p_img1: "",
        p_img2: "",
        p_img3: "",
        p_img4: "",
        p_brand:"",
        p_taste: "",
        p_price: 0,
        p_amount: 0,
        p_point: 0
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setAddPro({
            ...isAddPro,
            [name] : value
        })
    }

    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name} = e.target
        const imageFormData = new FormData();
        imageFormData.append('file', e.target.files![0])
        axios.post(`${API_URL}/upload`, imageFormData, {
            headers: {'content-Type':'multipart/formdata'}
        }).then(res=>{
            console.log(res)
            setAddPro({
                ...isAddPro,
                [name]: `upload/products/${res.data.imgUrl}`
            })
            console.log(isAddPro)
        })
        .catch(e => console.log(e))
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(isAddPro.p_title !== "" && isAddPro.p_dsce !== "" && isAddPro.p_brand !== "" &&
        isAddPro.p_amount !== 0 && isAddPro.p_img1 !== "" && isAddPro.p_taste !== "" && 
        isAddPro.p_price !== 0){
            addProduct()
        }
        
    }
    const addProduct = () =>{
        axios.post(`${API_URL}/addIce`, isAddPro)
        .then(res=>{
            console.log(res)
            alert("등록되었습니다")
            navigate("/iceCreamList/전체")
        })
        .catch(e => console.log(e))
    }
    return (
        <div id='addProduct' >
            <form onSubmit={onSubmit}>
                <h2>상품등록</h2>
                <table className='addProductTable'>
                    <tbody>
                        <tr>
                            <td>상품명:</td>
                            <td>
                                <input type="text" name='p_title' value={isAddPro.p_title}
                                placeholder='상품명을 입력해주세요.' onChange={onChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>상품내용:</td>
                            <td>
                                <textarea name="p_dsce" placeholder='상품내용을 입력해주세요.' onChange={onChange}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>이미지1:</td>
                            <td colSpan={2}>
                                <input type="file" name='p_img1' onChange={onChangeImage}/>
                                {isAddPro.p_img1 && <div>
                                    <img src={`${API_URL}/${isAddPro.p_img1}`} alt=""
                                    width="100px" />
                                    </div>}
                            </td>
                        </tr>
                        <tr>
                            <td>이미지2:</td>
                            <td colSpan={2}>
                                <input type="file" name='p_img2' onChange={onChangeImage}/>
                                {isAddPro.p_img2 && <div>
                                    <img src={`${API_URL}/${isAddPro.p_img2}`} alt=""
                                    width="100px" />
                                    </div>}
                            </td>
                        </tr>
                        <tr>
                            <td>이미지3:</td>
                            <td colSpan={2}>
                                <input type="file" name='p_img3' onChange={onChangeImage}/>
                                {isAddPro.p_img3 && <div>
                                    <img src={`${API_URL}/${isAddPro.p_img3}`} alt=""
                                    width="100px" />
                                    </div>}
                            </td>
                        </tr>
                        <tr>
                            <td>이미지4:</td>
                            <td colSpan={2}>
                                <input type="file" name='p_img4' onChange={onChangeImage}/>
                                {isAddPro.p_img4 && <div>
                                    <img src={`${API_URL}/${isAddPro.p_img4}`} alt=""
                                    width="100px"/>
                                    </div>}
                            </td>
                        </tr>
                        <tr>
                            <td>제조사:</td>
                            <td>
                                <input type="text" name='p_brand' placeholder='제조사를 입력해주세요.' onChange={onChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>맛종류:</td>
                            <td>
                                <input type="text" name='p_taste' placeholder='맛종류을 입력해주세요.' onChange={onChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>가격:</td>
                            <td>
                                <input type="text" name='p_price' placeholder='가격을 입력해주세요.' onChange={onChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>수량:</td>
                            <td>
                                <input type="text" name='p_amount' placeholder='수량을 입력해주세요.' onChange={onChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>포인트:</td>
                            <td>
                                <input type="text" name='p_point' placeholder="포인트를 입력해주세요." onChange={onChange}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='addProBtn'>
                        <button type='submit'>등록</button>
                        <button type='button'>취소</button>
                    </div>
            </form>
        </div>
    );
};

export default AddProduct;