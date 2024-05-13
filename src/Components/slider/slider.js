import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car from ".//../../assets/img/car.jpg.webp";
import "./slider.css";
import { AiTwotoneStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import dining from "..//../assets/img/dining.webp";
import house from "..//../assets/img/house.jpg.webp";
import mbljpg from "..//../assets/img/mbljpg.webp";

function CardSlider() {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 456) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="card-slider">
      <Slider {...settings}>
        <div className="card">
          <div className="slider-img">
            <img className="img-fluid" src={dining} />
          </div>
          <div className="slider-content">
            <div className="heart-icon">
              <p>car & vehicle</p>
              <div className="heart">
                {" "}
                <AiFillHeart />
              </div>
            </div>
            <p className="ads-color text-center"> house and swiming pool</p>
            <p className="ads-color text-center">khadija iqbal form new york</p>
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>
            <span>(3 Reviews)</span>
          </div>
        </div>
        <div className="card">
          <div className="slider-img">
            <img className="img-fluid" src={car} />
          </div>
          <div className="slider-content">
            <div className="heart-icon">
              <p>car & vehicle</p>
              <div className="heart">
                {" "}
                <AiFillHeart />
              </div>
            </div>
            <p className="ads-color text-center"> house and swiming pool</p>
            <p className="ads-color text-center">khadija iqbal form new york</p>
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>{" "}
            <span>
              <AiTwotoneStar />
            </span>{" "}
            <span>
              <AiTwotoneStar />
            </span>{" "}
            <span>
              <AiTwotoneStar />
            </span>
            <span>(3 Reviews)</span>
          </div>
        </div>
        <div className="card">
          <div className="slider-img">
            <img className="img-fluid" src={house} />
          </div>
          <div className="slider-content">
            <div className="heart-icon">
              <p>car & vehicle</p>
              <div className="heart">
                {" "}
                <AiFillHeart />
              </div>
            </div>
            <p className="ads-color text-center"> house and swiming pool</p>
            <p className="ads-color text-center">khadija iqbal form new york</p>
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>{" "}
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>{" "}
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>{" "}
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>
            <span>(3 Reviews)</span>
          </div>
        </div>
        <div className="card">
          <div className="slider-img">
            <img className="img-fluid" src={mbljpg} />
          </div>
          <div className="slider-content">
            <div className="heart-icon">
              <p>car & vehicle</p>
              <div className="heart">
                {" "}
                <AiFillHeart />
              </div>
            </div>
            <p className="ads-color text-center"> house and swiming pool</p>
            <p className="ads-color text-center">khadija iqbal form new york</p>
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>{" "}
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>{" "}
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>{" "}
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>
            <span>(3 Reviews)</span>
          </div>
        </div>
        <div className="card">
          <div className="slider-img">
            <img className="img-fluid" src={car} />
          </div>
          <div className="slider-content">
            <div className="heart-icon">
              <p>car & vehicle</p>
              <div className="heart">
                {" "}
                <AiFillHeart />
              </div>
            </div>
            <p className="ads-color text-center"> house and swiming pool</p>
            <p className="ads-color text-center">khadija iqbal form new york</p>
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>{" "}
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>{" "}
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>{" "}
            <span className="icon-yellow">
              <AiTwotoneStar />
            </span>
            <span>(3 Reviews)</span>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CardSlider;
