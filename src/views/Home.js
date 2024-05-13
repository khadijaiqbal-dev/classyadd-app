import React from "react";
// import { IoMdAdd } from "react-icons/io";
import { HiOutlineHomeModern } from "react-icons/hi2";
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
// import car from "../assets/img/car.jpg.webp";
import CardSlider from "../Components/slider/slider";
import house from "../assets/img/house.jpg.webp";
import { AiTwotoneStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import girls from "../assets/img/girls.jpg.webp";
import Testimonial from "../Components/Testimonial/Testimonial";
import BlogPost from "../Components/BlogPost/BlogPost";

import "./Home.css";

function Home() {
  return (
    <div>
      <Header
        title={"Largest Classifieds In The World"}
        page="home"
        title2={"You can buy, sell anything you want."}
      />
      <div className="container">
        <div className="overlap-category mb-5">
          <div className="row  align-items-stretch no-gutters">
            <div className="col-sm-6 com-md-4 mb-4 mb-lg-0 col-lg-2 p-0">
              <Link to="/" className="popular-category h-100 text-center">
                <span className="icon">
                  <span className="flaticon-house">
                    <HiOutlineHomeModern />
                  </span>
                </span>
                <span className="caption mb-2 d-block text-center">
                  Real Estate
                </span>
                <span className="number text-center ">9,865</span>
              </Link>
            </div>
            <div className="col-sm-6 com-md-4 mb-4 mb-lg-0 col-lg-2 p-0">
              <Link to="/" className="popular-category h-100 ">
                <span className="icon">
                  <span className="flaticon-house">
                    <HiOutlineHomeModern />
                  </span>
                </span>
                <span className="caption mb-2 d-block">Real Estate</span>
                <span className="number">9,865</span>
              </Link>
            </div>
            <div className="col-sm-6 com-md-4 mb-4 mb-lg-0 col-lg-2 p-0">
              <Link to="/" className="popular-category h-100">
                <span className="icon">
                  <span className="flaticon-house">
                    <HiOutlineHomeModern />
                  </span>
                </span>
                <span className="caption mb-2 d-block">Real Estate</span>
                <span className="number">9,865</span>
              </Link>
            </div>
            <div className="col-sm-6 com-md-4 mb-4 mb-lg-0 col-lg-2 p-0">
              <Link to="/" className="popular-category h-100">
                <span className="icon">
                  <span className="flaticon-house">
                    <HiOutlineHomeModern />
                  </span>
                </span>
                <span className="caption mb-2 d-block">Real Estate</span>
                <span className="number">9,865</span>
              </Link>
            </div>
            <div className="col-sm-6 com-md-4 mb-4 mb-lg-0 col-lg-2 p-0">
              <Link to="/" className="popular-category h-100">
                <span className="icon">
                  <span className="flaticon-house">
                    <HiOutlineHomeModern />
                  </span>
                </span>
                <span className="caption mb-2 d-block">Real Estate</span>
                <span className="number">9,865</span>
              </Link>
            </div>
            <div className="col-sm-6 com-md-4 mb-4 mb-lg-0 col-lg-2 p-0">
              <Link to="/" className="popular-category h-100">
                <span className="icon">
                  <span className="flaticon-house">
                    <HiOutlineHomeModern />
                  </span>
                </span>
                <span className="caption mb-2 d-block">Real Estate</span>
                <span className="number">9,865</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="featured-Ads">
          <h3 className="Featured-heading d-block">Featured Ads</h3>
          <div>
            <CardSlider />
          </div>
        </div>
        <div className="popular-product text-center mt-4">
          <div className="container">
            <div className="popular-heading">
              <h2> popular product</h2>
              <p>Lorem Ipsum Dolor Sit Amet</p>
              <div className="product-line"></div>
            </div>
            <div className="product-img">
              <div className="row">
                <div className="col-md-6 mb-lg-4 col-lg-4">
                  <div className="  listing-item ">
                    <div className="listing-image">
                      <img className="img-fluid" src={house} />
                    </div>
                    <div className="listing-item-content ">
                      <p className=" product-button text-white">
                        car & vehicle
                      </p>
                      <p className=" text-start fs-5 text-white m-0">
                        Red Luxuary car
                      </p>
                      <div className=" product-heart d-flex">
                        <p className=" text-start text-white">
                          New Orange,New York
                        </p>
                      </div>
                    </div>
                    <div className="product-heart-icon">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-lg-4 col-lg-4">
                  <div className="  listing-item ">
                    <div className="listing-image">
                      <img className="img-fluid" src={house} />
                    </div>
                    <div className="listing-item-content ">
                      <p className=" product-button text-white">
                        car & vehicle
                      </p>
                      <p className=" text-start fs-5 text-white m-0">
                        Red Luxuary car
                      </p>
                      <div className=" product-heart d-flex">
                        <p className=" text-start text-white">
                          New Orange,New York
                        </p>
                      </div>
                    </div>
                    <div className="product-heart-icon">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-lg-4 col-lg-4">
                  <div className="  listing-item ">
                    <div className="listing-image">
                      <img className="img-fluid" src={house} />
                    </div>
                    <div className="listing-item-content ">
                      <p className=" product-button text-white">
                        car & vehicle
                      </p>
                      <p className=" text-start fs-5 text-white m-0">
                        Red Luxuary car
                      </p>
                      <div className=" product-heart d-flex">
                        <p className=" text-start text-white">
                          New Orange,New York
                        </p>
                      </div>
                    </div>
                    <div className="product-heart-icon">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-lg-4 col-lg-6">
                  <div className="  listing-item ">
                    <div className="listing-image">
                      <img className="img-fluid" src={house} />
                    </div>
                    <div className="listing-item-content ">
                      <p className=" product-button text-white">
                        car & vehicle
                      </p>
                      <p className=" text-start fs-5 text-white m-0">
                        Red Luxuary car
                      </p>
                      <div className=" product-heart d-flex">
                        <p className=" text-start text-white">
                          New Orange,New York
                        </p>
                      </div>
                    </div>
                    <div className="product-heart-icon">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-lg-4 col-lg-6">
                  <div className="  listing-item ">
                    <div className="listing-image">
                      <img className="img-fluid" src={house} />
                    </div>
                    <div className="listing-item-content ">
                      <p className=" product-button text-white">
                        car & vehicle
                      </p>
                      <p className=" text-start fs-5 text-white m-0">
                        Red Luxuary car
                      </p>
                      <div className=" product-heart d-flex">
                        <p className=" text-start text-white">
                          New Orange,New York
                        </p>
                      </div>
                    </div>
                    <div className="product-heart-icon">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="treding-today">
          <div className="row">
            <div className="col-12">
              <h2>Trending Today</h2>
              <div className="today-line text-start"></div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="d-block d-md-flex listing">
                <img className="img-fluid d-block img" src={house} />
                <div className="lh-content">
                  <span className="category">Real Estate</span>
                  <p>Don St, Brooklyn, New York</p>
                  <p className="mb-0">
                    <span className="icon-yellow">
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>
                      <AiTwotoneStar />
                    </span>
                    <span>(3 Reviews)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-block d-md-flex listing">
                <img className="img-fluid d-block img" src={house} />
                <div className="lh-content">
                  <span className="category">Real Estate</span>
                  <p>Don St, Brooklyn, New York</p>
                  <p className="mb-0">
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
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-block d-md-flex listing">
                <img className="img-fluid d-block img" src={house} />
                <div className="lh-content">
                  <span className="category">Real Estate</span>
                  <p>Don St, Brooklyn, New York</p>
                  <p className="mb-0">
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
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-block d-md-flex listing">
                <img className="img-fluid d-block img" src={house} />
                <div className="lh-content">
                  <span className="category">Real Estate</span>
                  <p>Don St, Brooklyn, New York</p>
                  <p className="mb-0">
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
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-block d-md-flex listing">
                <img className="img-fluid d-block img" src={house} />
                <div className="lh-content">
                  <span className="category">Real Estate</span>
                  <p>Don St, Brooklyn, New York</p>
                  <p className="mb-0">
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
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-block d-md-flex listing">
                <img className="img-fluid d-block img" src={house} />
                <div className="lh-content">
                  <span className="category">Real Estate</span>
                  <p>Don St, Brooklyn, New York</p>
                  <p className="mb-0">
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
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <div className="our-blog ">
        <div className="container">
          <div className="popular-heading  Blog text-center">
            <h2 className="pt-5">Our Blog</h2>
            <p>See Our Daily News & Updates</p>
            <div className="product-line"></div>
          </div>
          <div className="row mb-3 align-items-stretch">
            <div className=" col-md-6 col-lg-4 mb-4 mb-lg-4">
              <BlogPost
                image={girls}
                title={"Many people selling online"}
                author={"Mark Spiker"}
                publishedDate={" Jan 18, 2019"}
                category={"New"}
                detail={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius."
                }
              />
            </div>
            <div className=" col-md-6 col-lg-4 mb-4 mb-lg-4">
              <BlogPost
                image={girls}
                title={"Many people selling online"}
                author={"Mark Spiker"}
                publishedDate={" Jan 18, 2019"}
                category={"New"}
                detail={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius."
                }
              />
            </div>
            <div className=" col-md-6 col-lg-4 mb-4 mb-lg-4">
              <BlogPost
                image={girls}
                title={"Many people selling online"}
                author={"Mark Spiker"}
                publishedDate={" Jan 18, 2019"}
                category={"New"}
                detail={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius."
                }
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 text-center">
              <button className="our-blog-button"> View All Post</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
