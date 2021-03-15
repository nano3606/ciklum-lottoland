import React from "react";
import { Carousel } from "antd";
const customCarousel = () => {
  return (
    <Carousel autoplay className="carousel">
      <div>
        <img src="/banner1.jpg"></img>
      </div>
      <div>
        <img src="/banner2.jpg"></img>
      </div>
      <div>
        <img src="/banner3.jpg"></img>
      </div>
    </Carousel>
  );
};

export default customCarousel;
