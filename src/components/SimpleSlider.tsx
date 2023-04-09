import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.scss"
import styled from "styled-components";


const SlideStyle = styled.div`
  margin-top: 145px; 
  height: 856px;
  @media screen and (max-width: 1800px) {
      margin-top: 145px; 
    }
  @media screen and (max-width: 1650px) {
    margin-top: 135px; 
  }
  @media screen and (max-width: 1460px) {
    margin-top: 125px; 
  }
  @media screen and (max-width: 1260px) {
    margin-top: 115px;
    height: 895px; 
  }
  @media screen and (max-width: 980px) {
    margin-top: 105px; 
  }
  @media screen and (max-width: 762px) {
    margin-top: 95px; 
    height: 500px;
  }
  @media screen and (max-width: 476px) {
    height: 400px;
  }        
`
const FirstDiv = styled.div`
  background-color: #FAB363;
  text-align: center;
  
`
const SecondDiv = styled.div`
  background-color: #593233;
  text-align: center;
`

const FirstImg = styled.img`
  text-align: center;
  width: 100vw;
  height: 858px;
  background-image: url("images/banner2.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  @media screen and (max-width: 1260px) {
    height: 895px; 
  }
  @media screen and (max-width: 762px) {
    height: 500px;
  }
  @media screen and (max-width: 476px) {
    height: 400px;
  }
`
const SecondImg = styled.img`
  text-align: center;
  width: 100vw;
  height:858px;
  background-image: url("images/banner7.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  @media screen and (max-width: 1260px) {
    height: 895px; 
  }
  @media screen and (max-width: 762px) {
    height: 500px;
  }
  @media screen and (max-width: 476px) {
    height: 400px;
  }
`
const ThiredImg = styled.img`
  text-align: center;
  width: 100vw;
  height:856px;
  background-image: url("images/banner4.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
  @media screen and (max-width: 1260px) {
    height: 895px; 
  }
  @media screen and (max-width: 762px) {
    height: 500px;
  }
  @media screen and (max-width: 476px) {
    height: 400px;
  }
`
const FourthImg = styled.img`
  text-align: center;
  width: 100%;
  height:856px;
  background-image: url("images/banner5.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
  @media screen and (max-width: 1260px) {
    height: 895px; 
  }
  @media screen and (max-width: 762px) {
    height: 500px;
  }
  @media screen and (max-width: 476px) {
    height: 400px;
  }
`


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      
    };
    return (
      <SlideStyle className="mainSlide">
        <Slider {...settings}>
          <FirstDiv>
              <FirstImg/>
          </FirstDiv>
          <SecondDiv>
              <SecondImg/>
          </SecondDiv>
          <div>
              <ThiredImg/>
          </div>
          <div>
              <FourthImg/>
          </div>
        </Slider>
      </SlideStyle>
    );
  }
}