import React, { Component } from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

let text = "";
// let Swiper = window.Swiper;
export default class SwiperComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.swiper = new Swiper(this.refs.lun, {
      loop: true,
      autoplay: true,
      slideToClickedSlide: true, //点击滑到相应的silde

      centeredSlides: true, //设定为true时，active slide会居中
      // effect: "coverflow", //切换效果动画
      slidesPerView: 3, //切换效果动画
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
          switch (index) {
            case 0:
              text =
                "http://cdn.cmread.com/coverFile/396922504/5527c1c8ade2eb92056a5f40a6d13d0586402c397b75/cover180240.jpg";
              break;
            case 1:
              text =
                "http://cdn.cmread.com/coverFile/350022278/5527c1c8a1e2dfbe056a5f40dc91e805861d8861463c/cover180240.jpg";
              break;
            case 2:
              text =
                "http://cdn.cmread.com/coverFile/378061498/5527c1c8a793e58805538b469c05a7058625a9de8621/cover180240.jpg";
              break;
            case 3:
              text =
                "http://cdn.cmread.com/coverFile/482736767/5527c1c8aa93c38405538b4cb914d005c453606db69c/cover180240.png";
              break;
            case 4:
              text =
                "http://cdn.cmread.com/coverFile/456356705/5527c1c8ade2dfbe056a5f40f53b3b0590c30bf45f00/cover180240.jpg";
              break;
            case 5:
              text =
                "http://cdn.cmread.com/coverFile/464567667/5527c1c8abe2ee56056a5f4078620c05a615c6d50968/cover180240.jpg";
              break;
          }
          return (
            '<span class="' +
            className +
            '">' +
            "<img src=" +
            text +
            "/></span>"
          );
        }
      }
    });
  }

  componentWillUnmount() {
    if (this.swiper) {
      // 销毁swiper
      this.swiper.destroy();
      console.log("销毁swiper");
    }
  }

  render() {
    return (
      <div className="book-swiper" style={{ width: "800px", margin: 0 }}>
        <div className="swiper-container" ref="lun">
          <div className="swiper-wrapper">
            <div className="swiper-slide" data-id="0">
              <img
                src="http://cdn.cmread.com/coverFile/396922504/5527c1c8ade2eb92056a5f40a6d13d0586402c397b75/cover180240.jpg"
                className="book-img"
              />
            </div>
            <div className="swiper-slide" data-id="1">
              <img
                src="http://cdn.cmread.com/coverFile/350022278/5527c1c8a1e2dfbe056a5f40dc91e805861d8861463c/cover180240.jpg"
                className="book-img"
              />
            </div>
            <div className="swiper-slide" data-id="2">
              <img
                src="http://cdn.cmread.com/coverFile/378061498/5527c1c8a793e58805538b469c05a7058625a9de8621/cover180240.jpg"
                className="book-img"
              />
            </div>
            <div className="swiper-slide" data-id="3">
              <img
                src="http://cdn.cmread.com/coverFile/346866668/5527c1c8ade2eb92056a5f40a6d74105861c9abadf73/cover180240.jpg"
                className="book-img"
              />
            </div>
            <div className="swiper-slide" data-id="4">
              <img
                src="http://cdn.cmread.com/coverFile/456356705/5527c1c8ade2dfbe056a5f40f53b3b0590c30bf45f00/cover180240.jpg"
                className="book-img"
              />
            </div>
            <div className="swiper-slide" data-id="5">
              <img
                src="http://cdn.cmread.com/coverFile/464567667/5527c1c8abe2ee56056a5f4078620c05a615c6d50968/cover180240.jpg"
                className="book-img"
              />
            </div>
          </div>
          <div id="PgFather">
            <div className="swiper-pagination" id="body-left-pagination" />
          </div>
        </div>
      </div>
    );
  }
}
