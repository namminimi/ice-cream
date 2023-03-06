import React, { useState } from 'react';
import PopupDom from '../../components/PopupDom';
import PopupPage from '../../components/PopupPage';
import "./Join.scss"



const Join = () => {

    const [formData, setFormData] = useState({
        m_add1: "",
        m_add2: ""
    })

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    //주소 팝업창 상태
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    //팝업창 열기
    const openPostCode = () => {
        console.log("열기")
        setIsPopupOpen(true)
    }
    //팝업창 닫기
    const closePostCode = () =>{
        console.log("닫기")
        setIsPopupOpen(false)
    }

    // 주소 넣기
    const onAddData = (data:any) => {
        console.log(data)
        setFormData({
            ...formData,
            m_add1: data.address
        })
    }

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div id="joinPage" className='inner'>
            <div className='joinForm'>
                <h2>회원가입</h2>
                <form onSubmit={onSubmit}>
                    <table className='joinTable'>
                        <tbody>
                            <tr>
                                <td>이름</td>
                                <td><input className='inputText' type="text"/></td>
                            </tr>
                            <tr>
                                <td>아이디</td>
                                <td>
                                    <input className='inputText' type="text"/>
                                    <button>중복확인</button>
                                </td>
                            </tr>
                            <tr>
                                <td>닉네임</td>
                                <td>
                                    <input className='inputText' type="text"/>
                                    <button>중복확인</button>
                                </td>
                            </tr>
                            <tr>
                                <td>비밀번호</td>
                                <td><input className='inputText' type="text"/></td>
                            </tr>
                            <tr>
                                <td>비밀번호확인</td>
                                <td><input className='inputText' type="text"/></td>
                            </tr>
                            <tr>
                                <td>생년월일</td>
                                <td><input className='inputText' type="text" placeholder='"-"를 제외한 생년월일 8자 입력해주세요. ex)19900513'/></td>
                            </tr>
                            <tr>
                                <td>성별</td>
                                <td>남 <input className='inputRadio' type="radio" /> 여 <input className='inputRadio' type="radio" /></td>
                            </tr>
                            <tr>
                                <td>전화번호</td>
                                <td><input className='inputText' type="text" placeholder='"-"를 제외한 숫자를 입력해주세요. '/></td>
                            </tr>
                            <tr className='addForm'>
                                <td>주소</td>
                                <td>
                                    <input className='inputText' name='m_add1' type="text" value={formData.m_add1} onChange={onChange}/>
                                    <button onClick={openPostCode}>우편번호 검색</button>
                                    <input className='inputText' name='m_add2' type="text" value={formData.m_add2} onChange={onChange}  placeholder="상세주소"/>
                                    <button className='postCode_btn' onClick={()=>{closePostCode()}}>입력</button>
                                    <div id='popupDom'>
                                        {isPopupOpen && (
                                            <PopupDom>
                                                <PopupPage onAddData={onAddData}></PopupPage>
                                            </PopupDom>
                                        )}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>추천인</td>
                                <td>
                                    <input className='inputText' type="text"/>
                                    <button>추천인 확인</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='commendText'> *추천인이 없으면 입력하지 않아도 됩니다</div>
                    <div className='joinFormBtn'>
                        <button type='submit'>가입하기</button>
                        <button type='reset'>취소</button>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Join;