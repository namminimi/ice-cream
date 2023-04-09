import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/apirul';
import "./FindId.scss"

const FindId = () => {
    type FindIdType = {
        findName: string,
        findPhone: string
    }

    const [isInfo, setInfo] = useState<string>("")
    const [findIdData, setFindIdData] = useState<FindIdType>({
        findName: "",
        findPhone: ""
    })

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFindIdData({
            ...findIdData,
            [name] : value
        })
    }

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(findIdData.findName !== "" && findIdData.findPhone !== ""){
            axios.post(`${API_URL}/findId`, findIdData)
            .then(res=>{
                console.log(res)
                if(res.data == "조회불가"){
                    alert("요청하신 정보는 없습니다. 다시입력해주세요")
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
        <div id="findIdPage" >
            <div className='findIdForm'>
                <h2>아이디찾기</h2>
                {isInfo ? 
                <div className='findText'>
                    <p> 회원님의 아이디는 {isInfo}입니다.</p>
                    <div className='findedId'>
                    <Link to="/findPass"><button type="button">비밀번호 찾기</button></Link>
                        <Link to="/login"><button type="button">로그인하러가기</button></Link>
                    </div>
                </div>:
                <form onSubmit={onSubmit}>
                    <table className='findIdTable'>
                        <tbody>
                            <tr>
                                <td>이름</td>
                                <td>
                                    <input className='inputText' name="findName" value={findIdData.findName} type="text" onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>전화번호</td>
                                <td>
                                    <input className='inputText' name="findPhone" value={findIdData.findPhone} placeholder='"-"를 제외한 숫자를 입력해주세요.' type="text" onChange={onChange}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='findIdbtn'>
                        <button type="submit">아이디 찾기</button>
                    </div>
                    <div className='findpassbtn'>
                        <Link to="/findPass"><p>비밀번호 찾기</p></Link>
                    </div>
                </form>
                }
            </div>
        </div>
    );
};

export default FindId;