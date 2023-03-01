import React, { Component } from "react";
import Slider from "react-slick";
import "./IceSlide.scss"



export default class IceSlide extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false
    };
    return (
      <div className="moreIce" >
        <Slider {...settings}>
          <div>
            <h3><img src="./images/ice-product1-removebg-preview.png"></img></h3>
          </div>
          <div>
            <h3><img src="./images/ice-product3-removebg-preview.png"></img></h3>
          </div>
          <div>
            <h3><img src="./images/ice-product4-removebg-preview.png"></img></h3>
          </div>
          <div>
            <h3><img src="./images/ice-product5-removebg-preview.png"></img></h3>
          </div>
          <div>
            <h3><img src="./images/ice-product6-removebg-preview.png"></img></h3>
          </div>
          <div>
            <h3><img src="./images/ice-product7-removebg-preview.png"></img></h3>
          </div>
        </Slider>
      </div>
    );
  }
}

