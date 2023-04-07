import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NoticeDatas } from '../api/dataType';
import { API_URL } from '../config/apirul';
import "./WriteNotice.scss"

type EditNoticeDataType = {
    data: NoticeDatas
}

const EditNotice = ({data}:EditNoticeDataType) => {
    const navigate = useNavigate()
    console.log(data)
    const [isEditNote, setEditNote] = useState({
        w_no: `${data.w_no}`,
        w_title: `${data.w_title}`,
        w_username: `${data.w_username}`,
        w_date: `${data.w_date}`,
        w_desc: `${data.w_desc}`
    })

    const onChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setEditNote({
            ...isEditNote,
            [name]: value
        })
    }
    console.log(isEditNote)
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(data.w_title !== "", data.w_desc !== "") {
            sendEdit()
        }else {
           alert("빈칸에 입력해주세요")
        }
    }
    const sendEdit = () => {
        
        axios.patch(`${API_URL}/editNotice`, isEditNote)
        .then(res => {
            console.log(res)
            alert("수정이 완료되었습니다")
            navigate("/notice")
        })
        .catch(e => console.log(e))
    }

    const onMove = () => {
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
                                    <input type="text" placeholder='제목을 입력해주세요' name="w_title" value={isEditNote.w_title} onChange={onChange}/>
                                    <input type="text" name='w_username' value={isEditNote.w_username} onChange={onChange}/>
                                    <input type="text" name='w_date' value={isEditNote.w_date} onChange={onChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea  name='w_desc' value={isEditNote.w_desc} onChange={onChange}  placeholder="내용을 작성해주세요" ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='writeBtn'>
                        <button type="submit">수정하기</button>
                        <button type='button' onClick={onMove}>수정취소</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditNotice;