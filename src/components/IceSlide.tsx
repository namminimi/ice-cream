import React, { Component } from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "./IceSlide.scss"

/* const {ref, inView, entry} = useInView({
  threshold:0.1,
})
console.log(ref)
if(inView){
  entry?.target.classList.add("moreUp")
}else{
  entry?.target.classList.remove("moreUp")
} */

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
            <h3><img src="./images/ice2.png"></img></h3>
          </div>
          <div>
            <h3><img src="./images/ice2.png"></img></h3>
          </div>
          <div>
            <h3><img src="./images/ice2.png"></img></h3>
          </div>
          <div>
            <h3><img src="./images/ice2.png"></img></h3>
          </div>
          <div>
            <h3><img src="./images/ice2.png"></img></h3>
          </div>
          <div>
            <h3><img src="./images/ice2.png"></img></h3>
          </div>
        </Slider>
      </div>
    );
  }
}

