import React, { Component } from "react";
import Slider from "react-slick";
import './DetailSlide.scss'



export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function(i:number) {
        return (
          <a>
            <img src={`images/롯데제과/product${i + 1}.png`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="detailSlide">
        <Slider {...settings}>
          <div>
            <img src={`images/롯데제과/product1.png`} />
          </div>
          <div>
            <img src={`images/롯데제과/product2.png`} />
          </div>
          <div>
            <img src={`images/롯데제과/product3.png`} />
          </div>
          <div>
            <img src={`images/롯데제과/product4.png`} />
          </div>
        </Slider>
      </div>
    );
  }
}