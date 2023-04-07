import React, { useState } from 'react';

type paginationType = {
    postsPerPage: number;
    totalPosts: number;
    paginate: any;
    currentPage: number

}

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}: paginationType) => {
    const pageNumbers = [] //페이지 넘버 배열 설정
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push({id: i, isDone: false})
    }
    const [togState, setToState] = useState({
        togList: pageNumbers
    })
    //console.log(togState)

    const onToggle = (id:number) => {
        const newTog = togState.togList.map(tog => tog.id === id ? {
            ...tog,
            isDone: !tog.isDone
        }: tog.id !== id && tog.isDone === true ? {
            ...tog,
            isDone: !tog.isDone
        }: tog)

        setToState({
            ...togState,
            togList: newTog
        })
    }
    return (
        <div className='page'>
            <ul className='numberLists'>
                {togState.togList.map((number) =>
                <li key={number.id} className="numberList"
                style={{color: number.isDone ? "#FF4C29" : "#082032",
            borderBottom: number.isDone ? "3px solid #FF4C29" : "1px solid #082032"}}
                onClick={()=>{paginate(number.id)}}>
                    <span className='number' onClick={()=>{onToggle(number.id)}}>{number.id}</span>
                </li>
                )}
            </ul>
        </div>
    );
};

export default Pagination;