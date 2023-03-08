import React, { useState } from 'react';
import PopupDom from '../../components/PopupDom';
import PopupPage from '../../components/PopupPage';
import "./Join.scss"



const Join = () => {

    const [formData, setFormData]  = useState({
        m_name:"",
        m_password:"",
        m_passwordCh:"",
        m_id:"",
        m_nickname:"",
        m_birth:"",
        m_gender:"",
        m_phone:"",
        m_add1: "",
        m_add2: "",
        m_comnick:""
    })

    const [isNameMessage, setNameMessage] = useState("")
    const [isPassMessage, setPassMessage] = useState("")
    const [isPassChMessage, setPassChMessage] = useState("")
    const [isIdMessage, setIdMessage] = useState("")
    const [isNickMessage, setNickMessage] = useState("")
    const [isbirMessage, setbirMessage] = useState("")
    const [isPhoneMessage, setPhoneMessage] = useState("")

    //이름
    const nameInput = /^[a-zA-Z가-힣]{2,10}$/
    //아이디
    const idInput = /^[a-zA-Z0-9]{4,12}$/
    //비밀번호
    const passInput = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    //닉네임
    const nickNameInput = /^[a-zA-Z가-힣0-9]{2,10}$/
    //이메일
    const emailInput = /^[a-zA-Z0-9]{2,30}$/
    //생년월일
    const birthInput = /^[0-9]{8,9}$/
    //전화번호
    const phoneInput = /^[0-9]{10,11}$/
    

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
        if(name === "m_name"){ //이름 유효성 검사
            if(!nameInput.test(formData.m_name)){
                setNameMessage("정확한 이름을 입력해주세요")
            }else{
                setNameMessage("")
            } 
        }

        if(name === "m_password"){ //비밀번호 유효성 검사
            if(!passInput.test(formData.m_password)){
                setPassMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!")
            }else{
                setPassMessage("")
            } 
        }

        if(name === "m_passwordCh"){ //비밀번호확인 유효성 검사
            if(formData.m_password !== formData.m_passwordCh){
                setPassChMessage("비밀번호가 일치하지 않습니다")
            }else{
                setPassChMessage("비밀번호가 일치합니다")
            } 
        }

        if(name === "m_id"){ //아이디 유효성 검사
            if(!idInput.test(formData.m_id)){
                setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!")
            }else{
                setIdMessage("중복확인 해주세요")
            } 
        }

        if(name === "m_nickname"){ //유저닉네임 유효성 검사
            if(!nickNameInput.test(formData.m_nickname)){
                setNickMessage("닉네임은 2자~10자이하로 입력해주세요")
            }else{
                setNickMessage("중복확인 해주세요")
            } 
        }

        if(name === "m_birth"){ //생년월일 유효성 검사
            if(!birthInput.test(formData.m_birth)){
                setbirMessage("생년월일 7~8자 입력해주세요")
            }else{
                setbirMessage("")
            } 
        }

        if(name === "m_phone"){ //생년월일 유효성 검사
            if(!phoneInput.test(formData.m_phone)){
                setPhoneMessage("'-'제외한 숫자 10~11자 입력해주세요")
            }else{
                setPhoneMessage("")
            } 
        }
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
       /*  m_name:"",
        m_password:"",
        m_passwordCh:"",
        m_id:"",
        m_nickname:"",
        m_birth:"",
        m_gender:"",
        m_phone:"",
        m_add1: "",
        m_add2: "",
        m_comnick:"" */
        if(formData.m_name !== "" && formData.m_password !== "" && formData.m_password !== "" ){}
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
                                <td><input className='inputText' name="m_name " value={formData.m_name} type="text" onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td>아이디</td>
                                <td>
                                    <input className='inputText' name="m_id" value={formData.m_id} type="text" onChange={onChange}/>
                                    <button>중복확인</button>
                                </td>
                            </tr>
                            <tr>
                                <td>닉네임</td>
                                <td>
                                    <input className='inputText' name="m_nickname" value={formData.m_nickname} type="text" onChange={onChange}/>
                                    <button>중복확인</button>
                                </td>
                            </tr>
                            <tr>
                                <td>비밀번호</td>
                                <td><input className='inputText' name="m_password" value={formData.m_password} type="text" onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td>비밀번호확인</td>
                                <td><input className='inputText' name='m_passwordCh' value={formData.m_passwordCh} type="text" onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td>생년월일</td>
                                <td><input className='inputText' name="m_birth" value={formData.m_birth} type="text" placeholder='"-"를 제외한 생년월일 8자 입력해주세요. ex)19900513' onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td>성별</td>
                                <td>남 <input className='inputRadio' name="m_gender" value={formData.m_gender} type="radio" onChange={onChange}/> 여 <input className='inputRadio' name="m_gender" value={formData.m_gender} type="radio" onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td>전화번호</td>
                                <td><input className='inputText' name="m_phone" value={formData.m_phone} type="text" placeholder='"-"를 제외한 숫자를 입력해주세요.' onChange={onChange}/></td>
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
                                    <input className='inputText' name="m_comnick" value={formData.m_comnick} onChange={onChange} type="text"/>
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