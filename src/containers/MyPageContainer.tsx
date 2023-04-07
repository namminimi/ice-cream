import React from 'react';
import { useParams } from 'react-router-dom';
import MyPage from '../pages/MyPage';

const MyPageContainer = () => {
    const {id} = useParams();
    return (
        <div>
            <MyPage/>
        </div>
    );
};

export default MyPageContainer;