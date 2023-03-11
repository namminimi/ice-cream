import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../../config/apirul';
import { setId } from '../../moduls/loginM';
import "./FindPass.scss"

const FindPass = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    type FindPassType = {
        findId: string,
        findName: string,
        findPhone: string
    }

    const [findPassData, setfindPassData] = useState<FindPassType>({
        findId: "",
        findName: "",
        findPhone:""
    })

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setfindPassData({
            ...findPassData,
            [name] : value
        })
    }

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(findPassData.findName !== "" && findPassData.findPhone !== ""){
            axios.post(`${API_URL}/findPass`, findPassData)
            .then(res=>{
                console.log(res)
                if(res.data == "조회불가"){
                    alert("요청하신 정보는 없습니다. 다시입력해주세요")
                }else{
                    console.log(res.data[0].m_id)
                    dispatch(setId(res.data[0].m_id))
                    navigate("/editPass")
                }
            })
            .catch(e=>console.log(e))
        }else {
            alert("입력란에 입력해주세요")
        }
    }
    return (
        <div id="findPassPage" className='inner'>
            <div className='findPassForm'>
                <h2>비밀번호 찾기</h2>
                <form onSubmit={onSubmit}>
                    <table className='findPassTable'>
                        <tbody>
                            <tr>
                                <td>아이디</td>
                                <td>
                                    <input className='inputText' name="findId" value={findPassData.findId} type="text" onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>이름</td>
                                <td>
                                    <input className='inputText' name="findName" value={findPassData.findName} type="text" onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>전화번호</td>
                                <td>
                                    <input className='inputText' name="findPhone" value={findPassData.findPhone} placeholder='"-"를 제외한 숫자를 입력해주세요.' type="text" onChange={onChange}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='findPassbtn'>
                        <button type="submit">비밀번호 찾기</button>
                    </div>
                    <div className='findIdbtn'>
                        <Link to="/findId"><p>아이디 찾기</p></Link>
                        <Link to="/login"><p>로그인하러 가기</p></Link>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default FindPass;