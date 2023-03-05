import React from 'react';
import "./Login.scss"

const Login = () => {
    return (
        <div id="loginPage" className='inner'>
            <div className='loginForm'>
                <h2>로그인</h2>
                <form>
                    <table className='loginTable'>
                        <tbody>
                            <tr>
                                <td>아이디</td>
                                <td><input className='inputText' type="text"/></td>
                            </tr>
                            <tr>
                                <td>비밀번호</td>
                                <td>
                                    <input className='inputText' type="text"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='loginbtn'>
                        <button>로그인</button>
                        <button>회원가입</button>
                    </div>
                    <div className='findbtn'>
                        <p>아이디 찾기</p>
                        <p>비밀번호 찾기</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;