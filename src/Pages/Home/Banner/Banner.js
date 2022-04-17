import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jpg";
import banner3 from "../../../images/banner3.jpg";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Lens King</h3>
            <p>Make your journey awesome with my services.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Lens king</h3>
            <p>Trust and get full services</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Lens King</h3>
            <p>
             I will make my lens talk.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
