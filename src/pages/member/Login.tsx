import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/apirul';
import { setLogin } from '../../moduls/loginM';
import { setCookie } from '../../util/cookie';
import "./Login.scss"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    type loginType = {
        logId: string,
        logPass: string
    }

    const [loginData, setLoginData] = useState<loginType>({
        logId: "",
        logPass: ""
    })

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name] : value
        })
    }
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(loginData.logId === '' || loginData.logPass === ''){
            alert('아이디와 비밀번호를 입력해주세요')
        }else {
            axios.post(`${API_URL}/login`, loginData)
            .then(result=>{
                if(result.data == "로그인 실패"){
                    alert("로그인 실패하였습니다")
                }else {
                    const {m_id, m_nickname} = result.data[0];
                    if(m_id && m_nickname){
                        alert("로그인하였습니다")
                        let expires = new Date();
                        expires.setMinutes(expires.getMinutes()+60)
                        //쿠키생성
                        setCookie('userId', `${m_id}`, {path: '/', expires});
                        setCookie('userNickName', `${m_nickname}`, {path: '/', expires})
                        dispatch(setLogin());
                        navigate("/")
                    }
                }
            })
            .catch(e=>{
                console.log(e)
            })
        }
    }
    return (
        <div id="loginPage" >
            <div className='loginForm'>
                <h2>로그인</h2>
                <form onSubmit={onSubmit}>
                    <table className='loginTable'>
                        <tbody>
                            <tr>
                                <td>아이디</td>
                                <td><input className='inputText' name="logId" value={loginData.logId} type="text" onChange={onChange}/></td>
                            </tr>
                            <tr>
                                <td>비밀번호</td>
                                <td>
                                    <input className='inputText' name="logPass" value={loginData.logPass} type="password" onChange={onChange}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='loginbtn'>
                        <button type="submit">로그인</button>
                        <Link to="/join"><button type="button">회원가입</button></Link>
                    </div>
                    <div className='findbtn'>
                    <Link to="/findId"><p>아이디 찾기</p></Link>
                    <Link to="/findPass"><p>비밀번호 찾기</p></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;