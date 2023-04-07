import React, { Component } from "react";
import Slider from "react-slick";
import { iceCreamData2 } from "../apis/dataType";
import { API_URL } from "../config/apirul";
import './DetailSlide.scss'

type dataType = {
  data: iceCreamData2
}

export default class CenterMode extends Component<dataType> {
  
  render() {
    const {data} = this.props
    //console.log(data)
    const settings = {
      customPaging: function(i:number) {
        const imgNum = [data.p_img1, data.p_img2, data.p_img3, data.p_img4]
        console.log(`${API_URL}/${imgNum[i]}`)
        return (
          <a>
            <img src={`${API_URL}/${imgNum[i]}`} />
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
            <img src={`${API_URL}/${data.p_img1}`} />
          </div>
          {data.p_img2 !== null ?
          <div>
            <img src={`${API_URL}/${data.p_img2}`} />
          </div> : null
             }
          {data.p_img3 !== null ?
          <div>
            <img src={`${API_URL}/${data.p_img3}`} />
          </div> : null
          }
          {data.p_img4 !== null ?
          <div>
            <img src={`${API_URL}/${data.p_img4}`} />
          </div>: null
          }
        </Slider>
      </div>
    );
  }
}