import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="newsletter py-5">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-md-6">
              <h2>Newsletter</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-md-6">
              <form className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
                <input
                  type="submit"
                  value="Subscribe "
                  className="btn-white border-none"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" footer-black">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="footer-heading mb-4 ">About</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Provident rerum unde possimus molestias dolorem fuga, illo
                    quis fugiat!
                  </p>
                </div>
                <div className="col-md-3">
                  <h2 className="footer-heading mb-4 text-decoration-none">
                    Navigation
                  </h2>
                  <ul className=" list-unstyled footer-list">
                    <li> About us</li>
                    <li>Servce</li>
                    <li>Testimonial </li>
                    <li> contact</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h2 className="footer-heading mb-4 ">Follow Us</h2>

                  <Link className=" px-0 pr-3">
                    {" "}
                    <FaFacebookF />
                  </Link>
                  <Link className=" px-3 pr-3">
                    <AiOutlineTwitter />
                  </Link>
                  <Link className=" px-sm-3 p-md-0 pr-3">
                    <BiLogoInstagram />{" "}
                  </Link>
                  <Link className=" pr-3">
                    {" "}
                    <BiLogoLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <form method="post">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control border-secondary text-white !important bg-transparent bg-white"
                    placeholder="Search product...."
                  />
                  <button className="btn-primary text-white" type="button">
                    Search
                  </button>
                </div>
                <div className="input-group-append"></div>
              </form>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="border-top pt-5">
                <p>
                  Copyright ©2023 All rights reserved | This template is made
                  with by Colorlib
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
