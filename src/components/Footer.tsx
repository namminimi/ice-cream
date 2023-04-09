import React from 'react';
import styled from 'styled-components';

const Footers = styled.footer`
    background-color: lightgray;
    width: 100%;
    height:150px;
    padding: 30px;
    margin-top: 50px;
    @media screen and (max-width: 476px) {
        height:100px;
    } 
`
const ProjectName = styled.h3`
    font-size: 20px;
    margin-bottom: 15px;
    @media screen and (max-width: 476px) {
        font-size: 15px;
    } 
`
const AdminName = styled.p`
    font-size: 20px;
    @media screen and (max-width: 476px) {
        font-size: 15px;
    } 
`

const Footer = () => {
    return (
        <Footers>
            <div className='inner'>
                <ProjectName>개별프로젝트: 아이스크림매장사이트</ProjectName>
                <AdminName>담당자: 남민섭</AdminName>
            </div>
        </Footers>
    );
};

export default Footer;