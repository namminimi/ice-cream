import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NoticeDatas } from '../api/dataType';
import { API_URL } from '../config/apirul';
import { getCookie } from '../util/cookie';
import "./NoticeDetail.scss"

type NoticeDataType = {
    data: NoticeDatas
}

const NoticeDetail = ({data}:NoticeDataType) => {
    const no = data.w_no
    const navigate = useNavigate()
    const onNoticeList = () => {
        navigate("/notice")
    }
    const userId = getCookie('userId')
    const onDelete = () => {
        axios.delete(`${API_URL}/deleteNotice/${no}`)
        .then(res=>{
            alert("삭제되었습니다")
            navigate("/notice")
        })
        .catch(e => console.log(e))
    }
    return (
        <div id='noticeDetailPage'>
            <div className='noticeDetailForm'>
                <div className='noticeDetailTitle'>
                    <h2>{data.w_title}</h2>
                    <div className='writer'>
                        <h4>작성자:</h4>
                        <p>{data.w_username}</p>
                    </div>
                    <div className='writerDate'>
                        <h4>날짜:</h4>
                        <p>{data.w_date}</p>
                    </div>
                </div>
                <div className='noticeText'>
                    <p>
                        {data.w_desc}
                    </p>
                </div>
                <div className='noticeDetailBtn'>
                    {userId === "admin" ?
                    <>
                        <Link to={`/editNotice/${data.w_no}`}><button type="button">수정하기</button></Link>
                        <button type='button' onClick={onDelete}>삭제하기</button>
                    </>: null
                    }
                    <button type='button' onClick={onNoticeList}>목록</button>
                </div>
            </div>
        </div>
    );
};

export default NoticeDetail;