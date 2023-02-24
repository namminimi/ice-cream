import React from 'react';
import styled from 'styled-components';


const ImgCover = styled.div`
    width: 100%;
    height: 700px;
`

const MainImg = styled.div`
    background-image: url("images/banner4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 84.7vh;
    margin-top: 154px;
`



//슬라이드 추가할것
const MainBlock = () => {
    return (
        <ImgCover>
            {/* <MainImg/> */}
            
        </ImgCover>
    );
};

export default MainBlock;