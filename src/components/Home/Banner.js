import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="container mt-4">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerCarousel"
            src="/picture/caro 1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="mb-4 pb-4 mt-0 ">
              <div className="mb-4 pb-4 mt-0">
                <div className="mb-4 pb-4 mt-0">
                  <h1 className="h1">Welcome to Mighigan's Best Golf Deals</h1>
                </div>
              </div>
           </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerCarousel"
            src="/picture/caro 2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="mb-4 pb-4 mt-0 ">
              <div className="mb-4 pb-4 mt-0">
                <div className="mb-4 pb-4 mt-0">
                  <h1 className="h1">Welcome to Mighigan's Best Golf Deals</h1>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bannerCarousel"
            src="/picture/caro 3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="mb-4 pb-4 mt-0 ">
              <div className="mb-4 pb-4 mt-0">
                <div className="mb-4 pb-4 mt-0">
                  <h1 className="h1">Welcome to Mighigan's Best Golf Deals</h1>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
