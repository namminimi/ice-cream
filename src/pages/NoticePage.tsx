import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NoticeDatas } from '../apis/dataType';
import { rootState } from '../moduls';
import { getCookie } from '../util/cookie';
import "./NoticePage.scss"
import Pagination from '../components/Pagination';

type NoticeDataType = {
    data: NoticeDatas
}

const NoticePage = ({data}:NoticeDataType) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage, setPostPerPage] = useState(5); // 한페이지당 렌더링 되는 데이터수

    //페이지 숫자 계산
    const indexOfLast = currentPage * postsPerPage //페이지 마지막수 ex 1 * 10
    const indexOfFirst = indexOfLast - postsPerPage; // 페이지 첫번째 수 ex 10 - 10 = 0

    //데이터 몇번까지 자르기
    const currentPosts = (data: NoticeDatas | null) => {
        let currentPosts = (data as any).slice(indexOfFirst, indexOfLast)
        return currentPosts;
    }
    //console.log(data)
    const {isLogin} = useSelector((state:rootState) => state.loginM)
    //console.log(isLogin)
    const userId = getCookie("userId")
    //console.log(userId)
    const postLists = currentPosts(data)
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
                    {(postLists as any).map((note:any, index:number) =>
                        <tr key={note.w_no}>
                            <td>{note.w_no-4}</td>
                            <td><Link to={`/notice/${note.w_no}`}>{note.w_title}</Link></td>
                            <td>{note.w_username}</td>
                            <td>{note.w_date}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
                <div className='paging'>
                    <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={(data as any).length}
                    paginate={setCurrentPage}
                    currentPage={currentPage}/>
                </div>
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