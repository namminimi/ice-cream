import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NoticeDatas } from '../apis/dataType';
import { rootState } from '../moduls';
import { getCookie } from '../util/cookie';
import "./NoticePage.scss"

type NoticeDataType = {
    data: NoticeDatas
}

const NoticePage = ({data}:NoticeDataType) => {
    //console.log(data)
    const {isLogin} = useSelector((state:rootState) => state.loginM)
    //console.log(isLogin)
    const userId = getCookie("userId")
    //console.log(userId)
    let ss = (data as any).reverse()
    //console.log(ss)
    return (
        <div id='noticePage'>
            <div className='noticeForm'>
                <h2>공지사항</h2>
                <table className='noticeTable'>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                    {(data as any).map((note:any, index:number) =>
                        <tr key={note.w_no}>
                            <td>{(data as any).length - index}</td>
                            <td><Link to={`/notice/${note.w_no}`}>{note.w_title}</Link></td>
                            <td>{note.w_username}</td>
                            <td>{note.w_date}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
                {isLogin && userId === "admin" ? 
                <div className='noticeBtn'>
                    <Link to={`/writeNotice`}><button type='button'>글쓰기</button></Link>
                </div> : null
                }
            </div>
        </div>
    );
};

export default NoticePage;