import React from 'react';
import "./Join.scss"



const Join = () => {
 
    return (
        <div id="joinPage" className='inner'>
            <div className='joinForm'>
                <h2>회원가입</h2>
                <form>
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
                            <tr>
                                <td>주소</td>
                                <td><input className='inputText' type="text"/></td>
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
                </form>
                <div className='commendText'> *추천인이 없으면 입력하지 않아도 됩니다</div>
            </div>
        </div>
    );
};

export default Join;