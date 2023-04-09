import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../../config/apirul';
import { rootState } from '../../moduls';
import { setId, setLogOut } from '../../moduls/loginM';
import { getCookie, removeCookie } from '../../util/cookie';
import "./EditPass.scss"

const EditPass = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userId = getCookie('userId')
    const {updateId} = useSelector((state: rootState) =>state.loginM)
    type EditPassType = {
        newPass: string,
        newPassCh: string,
        userId: string
    }

    

    const [editPassData, setEditPassData] = useState<EditPassType>({
        newPass: "",
        newPassCh: "",
        userId: updateId
    })
    console.log(editPassData.userId)

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEditPassData({
            ...editPassData,
            [name] : value
        })
        if(userId) {
            dispatch(setId(userId))
        }
    }

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(editPassData.newPass !== "" && editPassData.newPassCh !== ""){
            if(editPassData.newPass === editPassData.newPassCh){
                axios.patch(`${API_URL}/editpass`, editPassData)
                .then(res=>{
                    console.log(res)
                    if(res.data){
                        alert("패스워드가 변경되었습니다.")
                        removeCookie('userNickName')
                        removeCookie('userId')
                        dispatch(setLogOut())
                        navigate("/login")
                    }
                })
                .catch(e=>console.log(e))
            }
        }
        else {
            alert("입력란에 입력해주세요")
        }
    }
    return (
        <div id="editPassPage">
            <div className='editPassForm'>
                <h2>비밀번호 변경하기</h2>
                <form onSubmit={onSubmit}>
                    <table className='editPassTable'>
                        <tbody>
                            <tr>
                                <td>새로운 비밀번호</td>
                                <td>
                                    <input className='inputText' name="newPass" value={editPassData.newPass} type="password" onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>비밀번호 확인</td>
                                <td>
                                    <input className='inputText' name="newPassCh" value={editPassData.newPassCh} type="password" onChange={onChange}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='editPassbtn'>
                        <button type="submit">변경하기</button>
                    </div>
                    {userId ? null :
                    <div className='goLoginbtn'>
                        <Link to="/login"><p>로그인하러 가기</p></Link>
                    </div>
                    }
                </form>
            </div>
        </div>
    );
};

export default EditPass;