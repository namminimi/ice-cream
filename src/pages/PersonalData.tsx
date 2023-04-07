import axios from 'axios';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { iceCreamData } from '../apis/dataType';
import PopupDom from '../components/PopupDom';
import PopupPage from '../components/PopupPage';
import { API_URL } from '../config/apirul';
import { setLogOut } from '../moduls/loginM';
import { removeCookie } from '../util/cookie';
import "./PersonalData.scss"

type PersonalDataType ={
    data: iceCreamData
    id: string | undefined
}

const PersonalData = ({data, id}:PersonalDataType) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //이름
    const nameInput = /^[a-zA-Z가-힣]{2,10}$/
    //닉네임
    const nickNameInput = /^[a-zA-Z가-힣0-9]{2,10}$/
    //전화번호
    const phoneInput = /^[0-9]{10,11}$/
    //상세주소
    const addInput = /^[a-zA-Z가-핳 \\d`~!@#$%^&*()-_=+]{1,100}$/

//타입지정
    type isAddrType = {
        e_add1: string,
        e_add2: string
    }
    type isEditType = {
        e_name: string,
        e_nameOpen: boolean,
        e_nickname: string,
        e_nicknameOpen: boolean,
        e_phone: string,
        e_phoneOpen: boolean,
        e_addressOpen: boolean,
    }
    type isOkEditType = {
        ok_name: string,
        ok_nickname: string,
        ok_phone: string,
        ok_address1: string,
        ok_address2: string,
        ok_id: string | undefined
    }

    //메세지전달
    const [isNameMessage, setNameMessage] = useState<string>("")
    const [isNickMessage, setNickMessage] = useState<string>("")
    const [isPhoneMessage, setPhoneMessage] = useState<string>("")
    const [isaddMessage, setaddMessage] = useState<string>("")

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

    
    //주소 상태
    const [isAddr, setAddr] = useState<isAddrType>({
        e_add1: "",
        e_add2: ""
    })
    //확인받기전 상태/on,off 상태
    const [isEdit, setEdit] = useState<isEditType>({
            e_name: "",
            e_nameOpen: false,
            e_nickname: "",
            e_nicknameOpen: false,
            e_phone: "",
            e_phoneOpen: false,
            e_addressOpen: false,
        })
    const [isOkEdit, setOkEdit] = useState<isOkEditType>({
        ok_name:`${data.m_name}`,
        ok_nickname: `${data.m_nickname}`,
        ok_phone: `${data.m_phone}`,
        ok_address1: `${data.m_add1}`,
        ok_address2: `${data.m_add2}`,
        ok_id: id
    })
    const [isChcheck, setChcheck] = useState({
        ch_name: false,
        ch_nickname: false,
        ch_phone: false,
        ch_address: false
    })    
    //인풋값 체인지/ 유효성 검사
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setEdit({
            ...isEdit,
            [name]: value
        })
        setAddr({
            ...isAddr,
            [name]: value
        })
        if(name === "e_name"){ //이름 유효성 검사
            if(!nameInput.test(isEdit.e_name)){
                setNameMessage("*정확한 이름을 입력해주세요")
            }else{
                setNameMessage("")
            } 
        }

        if(name === "e_nickname"){ //유저닉네임 유효성 검사
            if(!nickNameInput.test(isEdit.e_nickname)){
                setNickMessage("*닉네임은 2자~10자이하로 입력해주세요")
                setCheck({
                    ...isCheck,
                    isNickCh: false
                })
            }else{
                setNickMessage("*중복확인 해주세요")
                setCheck({
                    ...isCheck,
                    isNickCh: true
                })
            } 
        }


        if(name === "e_phone"){ //전화번호 유효성 검사
            if(!phoneInput.test(isEdit.e_phone)){
                setPhoneMessage("*'-'제외한 숫자 10~11자 입력해주세요")
            }else{
                setPhoneMessage("")
            } 
        }

        if(name === "e_add2"){ //상세주소 유효성 검사
            if(!addInput.test(isAddr.e_add2)){
                setaddMessage("*상세주소 입력해주세요")
            }else{
                setaddMessage("")
            } 
        }
    }

    //클릭했을때 수정 input칸이 생김,
    const onName =() => {
        if(!isEdit.e_nameOpen) {
            setEdit({
                ...isEdit,
                e_nameOpen:true
               })
        }else {
            setNameMessage("")
            setEdit({
                ...isEdit,
                e_nameOpen:false,
                e_name: ""
               })
        }
    }  
    const onNickName = () => {
        if(!isEdit.e_nicknameOpen) {
            setEdit({
                ...isEdit,
                e_nicknameOpen: true
            })
        }else{
            setNickMessage("")
            setEdit({
                ...isEdit,
                e_nicknameOpen: false,
                e_nickname:""
            })
        }
    }

    const onPhone = () => {
        if(!isEdit.e_phoneOpen) {
            setEdit({
                ...isEdit,
                e_phoneOpen: true
            })
        }else{
            setPhoneMessage("")
            setEdit({
                ...isEdit,
                e_phoneOpen: false,
                e_phone:""
            })
        }
    }

    const onAdd = () => {
        if(!isEdit.e_addressOpen) {
            setEdit({
                ...isEdit,
                e_addressOpen: true,
            })
        }else{
            setEdit({
                ...isEdit,
                e_addressOpen: false,
            })
            setaddMessage("")
            setAddr({
                ...isAddr,
                e_add1: "",
                e_add2: ""
            })
        }
    }

    
    //닉네임 중복확인
    const nickNameCheck = () =>{
        if(isCheck.isNickCh && isEdit.e_nickname !== "") {
            console.log('닉네임 중복확인')
            axios.get(`${API_URL}/check/${isEdit.e_nickname }`)
            .then(res=>{
                console.log(res)
                if(res.data.m_nickname == isEdit.e_nickname ) {
                    setNickMessage("사용불가능한 닉네임입니다. 다른 닉네임을 입력해주세요")
                }else {
                    setNickMessage("사용가능한 닉네임입니다")
                    setOkEdit({
                        ...isOkEdit,
                        ok_nickname: `${isEdit.e_nickname}`
                    })
                    setCheckOk({
                        ...isCheckOk,
                        isNickChOk: true
                    })
                    setChcheck({
                        ...isChcheck,
                        ch_nickname: true
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

    const checkName = () => {
        if(isEdit.e_name !== "" && nameInput.test(isEdit.e_name)) {
        setOkEdit({
            ...isOkEdit,
            ok_name: `${isEdit.e_name}` 
        })
        setNameMessage("확인되었습니다. 수정할 정보가 더 없으시면 수정하기 버튼을 클릭해주세요")
        setChcheck({
            ...isChcheck,
            ch_name: true
        })
        console.log(isOkEdit.ok_name)
        }else {
            alert("정확하게 입력해주세요")
        }
        
    }

    const checkPhone = () => {
        if(isEdit.e_phone !== "" && phoneInput.test(isEdit.e_phone)) {
        setOkEdit({
            ...isOkEdit,
            ok_phone: `${isEdit.e_phone}`
        })
        setPhoneMessage("확인되었습니다. 수정할 정보가 더 없으시면 수정하기 버튼을 클릭해주세요")
        setChcheck({
            ...isChcheck,
            ch_phone: true
        })
        }else {
            alert("정확하게 입력해주세요")
        }
        console.log(isOkEdit.ok_phone)
    }


    const checkAdd = () => {
        if(isAddr.e_add1 !== "" && isAddr.e_add2 !== ""  && addInput.test(isAddr.e_add2)) {
        setOkEdit({
            ...isOkEdit,
            ok_address1: `${isAddr.e_add1}`,
            ok_address2: `${isAddr.e_add2}` 
        })
        setaddMessage("확인되었습니다. 수정할 정보가 더 없으시면 수정하기 버튼을 클릭해주세요")
        setChcheck({
            ...isChcheck,
            ch_address: true
        })
        }else {
            alert("정확하게 입력해주세요")
        }
        console.log(isOkEdit.ok_address2)
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
        setAddr({
            ...isAddr,
            e_add1: data.address
        })
    }
    //수정요청
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(isChcheck.ch_name || isChcheck.ch_nickname || isChcheck.ch_address ||  isChcheck.ch_phone) {
            axios.post(`${API_URL}/finalCheck`, isOkEdit)
            .then(res => {
                console.log(res)
                alert("개인정보가 수정이 완료되었습니다. 다시 로그인 해주세요")
                removeCookie('userNickName')
                removeCookie('userId')
                dispatch(setLogOut())
                navigate("/login")
            })
            .catch(e=>console.log(e))
        }
    }
    console.log(isOkEdit)
    //console.log(data)
    const backMyPage = () => {
        navigate(`/mypage/${id}`)
    }
    return (
        <div id='personalData'>
            <div className='personalDataForm'>
                <h2>회원정보 수정</h2>
                <form onSubmit={onSubmit}>
                    <h2>기본정보</h2>
                    <table className='personalDataTable'>
                        <tbody>
                            <tr>
                                <td>
                                    <h3>이름</h3>
                                </td>
                                <td>
                                    <p>{data.m_name}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>아이디</h3>
                                </td>
                                <td>
                                    <p>{data.m_id}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>생년월일</h3>
                                </td>
                                <td>
                                    <p>{data.m_birth}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='personalDataTable2'>
                        <div className='e_name e_information'>
                            <h3>이름</h3>
                            <p>{data.m_name}</p>
                            <button type="button" onClick={onName} style={{color: isEdit.e_nameOpen ? "red" : "#333"}}>{isEdit.e_nameOpen ? "취소" : "변경"}</button>
                        </div>
                        {isEdit.e_nameOpen ?
                        <>
                        <div className='e_name e_information e_hidden'>
                            <h3>변경할 이름</h3>
                            <input type="text" name="e_name" placeholder='변경할 이름을 입력해주세요' value={isEdit.e_name} onChange={onChange}/>
                            <button type="button" onClick={checkName}>확인</button>
                        </div>
                        <div className='message'>{isNameMessage}</div></> : null
                        }
                        <div className='e_nickName e_information'>
                            <h3>닉네임</h3>
                            <p>{data.m_nickname}</p>
                            <button type="button" onClick={onNickName} style={{color: isEdit.e_nicknameOpen ? "red" : "#333"}}>{isEdit.e_nicknameOpen ? "취소" : "변경"}</button>
                        </div>
                        {isEdit.e_nicknameOpen ?
                        <>
                        <div className='e_name e_information e_hidden'>
                            <h3>변경할 닉네임</h3>
                            <input type="text" name="e_nickname" placeholder='변경할 닉네임을 입력해주세요' value={isEdit.e_nickname} onChange={onChange}/>
                            
                            <button type="button" onClick={nickNameCheck}>확인</button>
                        </div>
                        <div className='message'>{isNickMessage}</div></> : null
                        }
                        <div className='e_phone e_information'>
                            <h3>전화번호</h3>
                            <p>{data.m_phone}</p>
                            <button type="button" onClick={onPhone} style={{color: isEdit.e_phoneOpen ? "red" : "#333"}}>{isEdit.e_phoneOpen ? "취소" : "변경"}</button>
                        </div>
                        {isEdit.e_phoneOpen ?
                        <>
                        <div className='e_name e_information e_hidden'>
                            <h3>변경할 전화번호</h3>
                            <input type="text" name="e_phone" placeholder='변경할 전화번호를 입력해주세요' value={isEdit.e_phone} onChange={onChange}/>
                            <button type="button" onClick={checkPhone}>확인</button>
                        </div>
                        <div className='message' >{isPhoneMessage}</div></> : null
                        }
                        <div className='e_address e_information'>
                            <h3>주소</h3>
                            <p>{data.m_add1+"/"+data.m_add2}</p>
                            <button type="button" onClick={onAdd} style={{color: isEdit.e_addressOpen ? "red" : "#333"}}>{isEdit.e_addressOpen ? "취소" : "변경"}</button>
                        </div>
                        {isEdit.e_addressOpen ?
                        <div className='e_add'>
                            <h3>변경할 주소</h3>
                            <div className='addInputBtn'>
                                <input className='inputText' name='e_add1' placeholder='주소를 검색해주세요' type="text" value={isAddr.e_add1} onChange={onChange}/>
                                <button type="button" onClick={openPostCode}>우편번호 검색</button>
                            </div>
                            <div className='addBtnDiv'>
                                {isPopupOpen && (
                                    <button className='addBtn' onClick={()=>{closePostCode()}}>확인 및 검색창 닫기</button>)}
                            </div>
                            <div className='addInputBtn'>
                                <input className='inputText' name='e_add2' type="text" value={isAddr.e_add2} onChange={onChange}  placeholder="상세주소"/>
                                <button type="button" className='addBtn' onClick={checkAdd}>주소 확인</button>
                            </div>
                            <div className='message' >{isaddMessage}</div>
                            <div id='popupDom'>
                                {isPopupOpen && (
                                    <PopupDom>
                                        <PopupPage onAddData={onAddData}></PopupPage>
                                    </PopupDom>
                                )}
                            </div>
                        </div>:null     
                        }  
                    </div>
                    <div className='myPageEditBtn'>
                        <button type='submit'>수정하기</button>
                        <button type='button' onClick={backMyPage}>취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalData;