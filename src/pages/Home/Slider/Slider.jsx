import React from "react";

const Slider = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full h-2/3">
            <img
              src="https://i.ibb.co/Lx99rh3/volunteers-collecting-food-donations-medium-shot.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-2/3">
            <img
              src="https://i.ibb.co/4sj6sxn/Screenshot-2023-11-06-072123.png"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full h-2/3">
            <img
              src="https://i.ibb.co/KwkTVTC/young-man-delivering-package-customer-home-delivery.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
