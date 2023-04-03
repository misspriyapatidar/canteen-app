import React from "react";
import Slider from "react-slick";

import ava02 from "../../../assets/images/vaibhav parmar.png";
import ava03 from "../../../assets/images/Lavina.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Tasty food is a delightful experience for the senses. From the crispy texture of fried chicken to the gooey goodness of a chocolate brownie, there's something for everyone's taste buds. Whether it's savory or sweet, hot or cold, a delicious meal can make any day brighter."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Vaibhav Parmar</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Tasty food is a delightful experience for the senses. From the crispy texture of French fries to the gooey goodness of a chocolate brownie, there's something for everyone's taste buds. Whether it's savory or sweet, hot or cold, a delicious meal can make any day brighter."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Priya Patidar</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
