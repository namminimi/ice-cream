import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../moduls';
import { useDispatch } from 'react-redux';
import { get_myPage_select } from '../moduls/myPage';
import MypageList from '../components/MypageList';

type MyPageSelectContainerType = {
    userId: string | undefined
}

const MyPageSelectContainer = ({userId}:MyPageSelectContainerType) => {
    const myPageList = useSelector((state:rootState) => state.myPageSelect)
    const dispatch = useDispatch()
    const onToggle = (id:number) => dispatch(get_myPage_select(id))
    //console.log(userId)
    return (
        <div>
            <MypageList myPageList={myPageList} onToggle={onToggle} userId={userId}/>
        </div>
    );
};

export default MyPageSelectContainer;