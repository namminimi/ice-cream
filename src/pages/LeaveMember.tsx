import axios from 'axios';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apirul';
import { setLogOut } from '../moduls/loginM';
import { removeCookie } from '../util/cookie';
import './LeaveMember.scss'

type LeaveMemberType = {
    isMemberState: boolean,
    userId: string,
    setMemberState: any
}

const LeaveMember = ({isMemberState, userId, setMemberState}:LeaveMemberType) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLeave, setLeave] = useState({
        userId: userId,
        password:""
    })

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setLeave({
            ...isLeave,
            password: e.target.value
        })
    }

    const endBtn = () =>{
        axios.post(`${API_URL}/end`, isLeave)
        .then(res=>{
            console.log(res)
            if(res.data.m_id === `${userId}`) {
                axios.delete(`${API_URL}/deleteMember/${userId}`)
                .then(res=>{
                    console.log(1111)
                    console.log(res)
                    removeCookie('userNickName')
                    removeCookie('userId')
                    dispatch(setLogOut())
                    alert('이용해주셔서 감사합니다')
                    navigate("/")
                })
                .catch(e => console.log(e))
            }
        })
        .catch(e=>console.log(e))
    }
    const backBtn = () =>{
        setMemberState(false)
    }
    return (
        <div id='leaveMemberDiv' style={{display: isMemberState ? "block" : "none"}}>
            <div className='leaveMemberForm'>
                <h2>회원 탈퇴하시겠습니까?</h2>
                <p>비밀번호를 입력해주세요</p>
                <input type="password" name='password' placeholder='비밀번호를 입력해주세요' value={isLeave.password} onChange={onChange}/>
                <div className='leaveMemberBtn'>
                    <button onClick={endBtn}>확인</button>
                    <button onClick={backBtn}>취소</button>
                </div>
            </div>
        </div>
    );
};

export default LeaveMember;