import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/apirul';

const FindPass = () => {
    type FindPassType = {
        findId: string,
        findName: string,
        findPhone: string
    }

    const [isInfo, setInfo] = useState<string>("")
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
                    alert("요청하신 정보는 없습니다. 다시입려해주세요")
                }else{
                    console.log(res)
                    setInfo(res.data[0].m_id)
                }
                
            })
            .catch(e=>console.log(e))
        }else {
            alert("입력란에 입력해주세요")
        }
    }
    return (
        <div id="findIdPage" className='inner'>
            <div className='findIdForm'>
                <h2>비밀번호 찾기</h2>
                {isInfo ? 
                <div className='findText'>
                    <p> 회원님의 아이디는 {isInfo}입니다.</p>
                    <div className='findedId'>
                        <button type="button">비밀번호 찾기</button>
                        <Link to="/login"><button type="button">로그인하러가기</button></Link>
                    </div>
                </div>:
                <form onSubmit={onSubmit}>
                    <table className='findIdTable'>
                        <tbody>
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
                    <div className='findIdbtn'>
                        <button type="submit">아이디 찾기</button>
                    </div>
                    <div className='findpassbtn'>
                        <p>비밀번호 찾기</p>
                    </div>
                </form>
                }
            </div>
        </div>
    );
};

export default FindPass;