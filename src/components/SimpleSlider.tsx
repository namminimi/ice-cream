import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.scss"
import styled from "styled-components";


const SlideStyle = styled.div`
  margin-top: 154px; 
  height: 856px;
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
  width: 100%;
  height: 858px;
  background-image: url("images/banner2.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
`
const SecondImg = styled.img`
  text-align: center;
  width: 100%;
  height:858px;
  background-image: url("images/banner7.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
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
              <img src="images/banner4.jpg" alt="" width="100%" height="856px"/>
          </div>
          <div>
              <img src="images/banner5.jpg" alt="" width="100%" height="856px"/>
          </div>
        </Slider>
      </SlideStyle>
    );
  }
}