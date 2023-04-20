import React from 'react';
import {IsMyPageType } from '../moduls/myPage';
import { Link } from 'react-router-dom';

type MyPageListType = {
    myPageList: IsMyPageType[]
    onToggle: (id:number) => void
    userId: string | undefined
}

const MypageList = ({myPageList, onToggle, userId}:MyPageListType) => {
    //console.log(myPageList)
    //console.log(userId)
    return (
        <div className='myPageList'>
            {window.innerWidth !== 476 ?
            <ul className='myPageUl'>
                {myPageList.map((mypage,index)=> <li key={mypage.id} onClick={()=>{onToggle(mypage.id)}}>
                    <Link to={`/${mypage.link}/${userId}`}><p style={{fontSize: mypage.isDone ? "30px" : "25px"}}>{mypage.text}</p></Link>
                    {myPageList.length-1 !== index ? <p>/</p> :null}
                </li>)}
            </ul>:
            <ul className='myPageUl'>
                {myPageList.map((mypage,index)=> <li key={mypage.id} onClick={()=>{onToggle(mypage.id)}}>
                    <Link to={`/${mypage.link}/${userId}`}><p style={{fontSize: mypage.isDone ? "25px" : "18px"}}>{mypage.text}</p></Link>
                    {myPageList.length-1 !== index ? <p>/</p> :null}
                </li>)}
            </ul>
            }
        </div>
    );
};

export default MypageList;