import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopupDom from '../../components/PopupDom';
import PopupPage from '../../components/PopupPage';
import { API_URL } from '../../config/apirul';
import "./Join.scss"





const Join = () => {
    type formDataType = {
        m_name: string,
        m_password: string,
        m_passwordCh: string,
        m_id: string,
        m_nickname: string,
        m_birth: string,
        m_gender: string,
        m_phone: string,
        m_add1: string,
        m_add2: string,
        m_comnick: string
    }
    const navigate = useNavigate()
    const [formData, setFormData]  = useState<formDataType>({
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

    const textArea = {
        lineHeight: "20px"
    }
    //메세지전달
    const [isNameMessage, setNameMessage] = useState<string>("")
    const [isPassMessage, setPassMessage] = useState<string>("")
    const [isPassChMessage, setPassChMessage] = useState<string>("")
    const [isIdMessage, setIdMessage] = useState<string>("")
    const [isNickMessage, setNickMessage] = useState<string>("")
    const [isbirMessage, setbirMessage] = useState<string>("")
    const [isPhoneMessage, setPhoneMessage] = useState<string>("")
    const [isaddMessage, setaddMessage] = useState<string>("")
    const [isComNickMessage, setComNickMessage] = useState<string>("")

    //중복확인 체크 요청 상태
    type CheckType = {
        isIdCh: boolean,
        isNickCh: boolean,
        isComNick: boolean
    }

    //중복체크 확인완료 상태
    type CheckOkType = {
        isIdChOk: boolean,
        isNickChOk: boolean,
        isComNickOk: boolean
    }

    const [isCheck, setCheck] = useState<CheckType>({
        isIdCh: false,
        isNickCh: false,
        isComNick: false
    })
    //중복체크 확인완료
    const [isCheckOk, setCheckOk] = useState<CheckOkType>({
        isIdChOk: false,
        isNickChOk: false,
        isComNickOk: false
    })

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
    const birthInput = /^[0-9]{7,8}$/
    //전화번호
    const phoneInput = /^[0-9]{10,11}$/
    //상세주소
    const addInput = /^[a-zA-Z가-핳 \\d`~!@#$%^&*()-_=+]{1,100}$/
    

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
            if(formData.m_password !== value){
                setPassChMessage("비밀번호가 일치하지 않습니다")
            }else{
                setPassChMessage("비밀번호가 일치합니다")
            } 
        }

        if(name === "m_id"){ //아이디 유효성 검사
            if(!idInput.test(formData.m_id)){
                setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!")
                setCheck({
                    ...isCheck,
                    isIdCh: false
                })
            }else{
                setIdMessage("중복확인 해주세요")
                setCheck({
                    ...isCheck,
                    isIdCh: true
                })
            } 
        }

        if(name === "m_nickname"){ //유저닉네임 유효성 검사
            if(!nickNameInput.test(formData.m_nickname)){
                setNickMessage("닉네임은 2자~10자이하로 입력해주세요")
                setCheck({
                    ...isCheck,
                    isNickCh: false
                })
            }else{
                setNickMessage("중복확인 해주세요")
                setCheck({
                    ...isCheck,
                    isNickCh: true
                })
            } 
        }

        if(name === "m_birth"){ //생년월일 유효성 검사
            if(!birthInput.test(formData.m_birth)){
                setbirMessage("생년월일 7~8자 입력해주세요")
            }else{
                setbirMessage("")
            } 
        }

        if(name === "m_phone"){ //전화번호 유효성 검사
            if(!phoneInput.test(formData.m_phone)){
                setPhoneMessage("'-'제외한 숫자 10~11자 입력해주세요")
            }else{
                setPhoneMessage("")
            } 
        }

        if(name === "m_add2"){ //상세주소 유효성 검사
            if(!addInput.test(formData.m_add2)){
                setaddMessage("상세주소 입력해주세요")
            }else{
                setaddMessage("")
            } 
        }

        if(name === "m_comnick"){ //추천아이디 유효성 검사
            if(formData.m_comnick === ""){
                setCheck({
                    ...isCheck,
                    isComNick: false
                })
            }else{
                setCheck({
                    ...isCheck,
                    isComNick: true
                })
            } 
        }
    }

    //아이디 중복확인
    const idCheck = () => {
        //아이디
        if(isCheck.isIdCh && formData.m_id !== "") {
            console.log('아이디 중복확인')
            axios.get(`${API_URL}/check/${formData.m_id}`)
            .then(res=>{
                console.log(res)
                if(res.data.m_id == formData.m_id) {
                    setIdMessage("아이디 중복입니다. 다른 아이디를 입력해주세요")
                }else {
                    setIdMessage("사용가능한 아이디입니다")
                    setCheckOk({
                        ...isCheckOk,
                        isIdChOk: true
                    })
                    setCheck({
                        ...isCheck,
                        isIdCh: false
                    })
                }
            })
            .catch(e=>console.log(e))
        }else{
            alert("아이디를 입력해주세요")
        }
        
    }
    //닉네임 중복확인
    const nickNameCheck = () =>{
        if(isCheck.isNickCh && formData.m_nickname !== "") {
            console.log('닉네임 중복확인')
            axios.get(`${API_URL}/check/${formData.m_nickname}`)
            .then(res=>{
                console.log(res)
                if(res.data.m_nickname == formData.m_nickname) {
                    setNickMessage("사용불가능한 닉네임입니다. 다른 닉네임을 입력해주세요")
                }else {
                    setNickMessage("사용가능한 닉네임입니다")
                    setCheckOk({
                        ...isCheckOk,
                        isNickChOk: true
                    })
                    setCheck({
                        ...isCheck,
                        isNickCh: false
                    })
                }
            })
            .catch(e=>console.log(e))
        }else{
            alert("닉네임을 입력해주세요")
        }
    }

    //등록된 추천인 확인
    const comNickNameCheck = () =>{
        if(isCheck.isComNick && formData.m_comnick !== "") {
            console.log('추천닉네임 확인')
            axios.get(`${API_URL}/check/${formData.m_comnick}`)
            .then(res=>{
                console.log(res)
                if(res.data.m_id !== formData.m_comnick) {
                    setComNickMessage("해당아이디는 없습니다")
                }else {
                    setComNickMessage("아이디가 확인되었습니다")
                    setCheckOk({
                        ...isCheckOk,
                        isComNickOk: true
                    })
                    setCheck({
                        ...isCheck,
                        isComNick: false
                    })
                }
            })
            .catch(e=>console.log(e))
        }else{
            alert("추천하실 닉네임을 입력해주세요")
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
        if(formData.m_name !== "" && formData.m_password !== "" && formData.m_passwordCh !== "" 
        && formData.m_id !== "" && formData.m_nickname !== "" && formData.m_birth !== ""
        && formData.m_gender !== "" && formData.m_phone !== ""  && formData.m_add1 !== "" && formData.m_add2 !== "" ){
            runJoin()
        }else {
            alert("입력란에 입력해주세요")
        }
    
    }
    const runJoin = () => {
        console.log("가입버튼")
        axios.post(`${API_URL}/join`, formData)
        .then(res=>{
            console.log(res)
            console.log("등록완료")
            alert("회원가입완료")
            navigate('/login')
        })
        .catch(e=>{
            console.log("에러발생")
            console.log(e)
        })
        
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
                                <td>
                                    <input className='inputText' name="m_name" value={formData.m_name} type="text" onChange={onChange}/>
                                    <div className='message' style={{...textArea}}>{isNameMessage}</div>
                                </td>
                            </tr>
                            <tr>
                                <td>아이디</td>
                                <td>
                                    <input className='inputText' name="m_id" value={formData.m_id} type="text" onChange={onChange}/>
                                    <button type="button" onClick={idCheck}>중복확인</button>
                                    <div className='message' style={{...textArea}}>{isIdMessage}</div>
                                </td>
                            </tr>
                            <tr>
                                <td>닉네임</td>
                                <td>
                                    <input className='inputText' name="m_nickname" value={formData.m_nickname} type="text" onChange={onChange}/>
                                    <button type="button" onClick={nickNameCheck} >중복확인</button>
                                    <div className='message' style={{...textArea}}>{isNickMessage}</div>
                                </td>
                            </tr>
                            <tr>
                                <td>비밀번호</td>
                                <td>
                                    <input className='inputText' name="m_password" value={formData.m_password} type="password" onChange={onChange}/>
                                    <div className='message' style={{...textArea}}>{isPassMessage}</div>
                                </td>
                            </tr>
                            <tr>
                                <td>비밀번호확인</td>
                                <td>
                                    <input className='inputText' name='m_passwordCh' value={formData.m_passwordCh} type="password" onChange={onChange}/>
                                    <div className='message' style={{...textArea}}>{isPassChMessage}</div>
                                </td>
                            </tr>
                            <tr>
                                <td>생년월일</td>
                                <td>
                                    <input className='inputText' name="m_birth" value={formData.m_birth} type="text" placeholder='"-"를 제외한 숫자8자 입력해주세요. ex)19900513' onChange={onChange}/>
                                    <div className='message' style={{...textArea}}>{isbirMessage}</div>
                                </td>
                            </tr>
                            <tr>
                                <td>성별</td>
                                <td>남 <input className='inputRadio' name="m_gender" value="남" type="radio" onChange={onChange}/> 여 <input className='inputRadio' name="m_gender" value="여" type="radio" onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td>전화번호</td>
                                <td>
                                    <input className='inputText' name="m_phone" value={formData.m_phone} type="text" placeholder='"-"를 제외한 숫자를 입력해주세요.' onChange={onChange}/>
                                    <div className='message' style={{...textArea}}>{isPhoneMessage}</div>
                                </td>
                            </tr>
                            <tr className='addForm'>
                                <td>주소</td>
                                <td>
                                    <input className='inputText' name='m_add1' type="text" value={formData.m_add1} onChange={onChange}/>
                                    <button type="button" onClick={openPostCode}>우편번호 검색</button>
                                    <input className='inputText' name='m_add2' type="text" value={formData.m_add2} onChange={onChange}  placeholder="상세주소"/>
                                    {isPopupOpen && (<button className='postCode_btn' onClick={()=>{closePostCode()}}>입력</button>)}
                                    <div className='message' style={{...textArea}}>{isaddMessage}</div>
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
                                    <button type="button" onClick={comNickNameCheck}>추천인 확인</button>
                                    <div className='message' style={{...textArea}}>{isComNickMessage}</div>
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