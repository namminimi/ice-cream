import React, { useState } from 'react';
import { getCookie } from '../util/cookie';
import { NoticeDatas } from '../apis/dataType';
import "./WriteNotice.scss"
import axios from 'axios';
import { API_URL } from '../config/apirul';
import { useNavigate } from 'react-router-dom';

const WriteNotice = () => {
    let time = new Date()
    let year = time.getFullYear();
    let month = time.getMonth()+1;
    let date = time.getDate();
    console.log(date)
    console.log(year)
    console.log(month)
    

    const navigate = useNavigate();
    const [isText, setText] = useState<NoticeDatas>({
        w_title: "",
        w_desc: "",
        w_username: getCookie('userNickName'),
        w_date: `${year}-${month}-${date}`
    })

    const onChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = e.target
        setText({
            ...isText,
            [name] : value
        })
    }

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(isText.w_title !== "" && isText.w_desc !== ""){
            writeText()
        }
    }
    const writeText = () =>{
        console.log("작성 요청")
        axios.post(`${API_URL}/writeNotice`, isText)
        .then(res => {
            console.log(res)
            alert('작성이 완료되었습니다')
            navigate("/notice")
        })
        .catch(e=>console.log(e))
    }

    const onMove = () =>{
        navigate("/notice")
    }


    return (
        <div id='writeNotice'>
            <div className='writeForm'>
                <form onSubmit={onSubmit}>
                    <table className='writeTable'>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" placeholder='제목을 입력해주세요' name="w_title" value={isText.w_title} onChange={onChange}/>
                                    <input type="text" name='w_username' value={isText.w_username} onChange={onChange}/>
                                    <input type="text" name='w_date' value={isText.w_date} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea  name='w_desc' value={isText.w_desc} onChange={onChange}  placeholder="내용을 작성해주세요" ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='writeBtn'>
                        <button type="submit">작성하기</button>
                        <button type='button' onClick={onMove}>작성취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WriteNotice;