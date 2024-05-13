import React from "react";
import { Link } from "react-router-dom";
// import { IoIosArrowDown} from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import "./Header.css";
function Header({ title, page, title2 }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <header>
      <div
        className={
          page === "home"
            ? "backimg  site-blocks-cover overlay aos-init aos-animate overlay "
            : "backimg  site-blocks-cover overlay aos-init aos-animate overlay nav-header"
        }
      >
        <div className="site-navbar container py-0 bg-white">
          <div className="row align-items-center nav-items">
            <div className=" col-6 col-xl-2">
              <h1 className=" site-logo">
                <Link to="/" className="text-black text-decoration-none ">
                  Classy
                  <span className="ads-color">ADS </span>
                </Link>
              </h1>
            </div>
            <div className="col-12 col-md-10 d-none d-xl-block">
              <div className="site-navigation  d-inline position-relative text-right">
                <ul className="site-menu d-md-flex ">
                  <li className="text-decoration-none">
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/Ads">ADS</Link>
                  </li>
                  <li className="hover-nav">
                    <Link to="/About" className="about">
                      About
                    </Link>
                    <IoIosArrowDown className="down-arrow" />
                    <div className=" about-dropdown">
                      <ul>
                        <li className="text-decoration-none py-2 text-blue">
                          The company
                        </li>
                        <li className="text-decoration-none  py-2 text-blue">
                          The Leadership
                        </li>
                        <li className="text-decoration-none py-2  text-blue">
                          Philosophy
                        </li>
                        <li className="text-decoration-none py-2  text-blue">
                          Careers
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/Contact" className="contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/Login">
                      <span className="border-left pl-xl-4">Log In</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/Register" className="">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="rounded text-white post-btn pt-3">
                      +Post an Ad
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="menu-button d-inline-block d-xl-none ml-auto  col-6 text-right!important toggle-button"
              onClick={toggleSidebar}
            >
              <AiOutlineMenu />
            </div>
          </div>
          {isSidebarOpen && (
            <div className="site-mobile-menu d-xl-none">
              <div className="site-mobile-menu-body">
                <div className="fasle" onClick={closeSidebar}>
                  <AiOutlineClose />
                </div>
                <ul className="site-nav-wrap">
                  <li className="active">
                    <Link to="/home" className="text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/ads" className="text-decoration-none">
                      Ads
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/about" className="text-decoration-none">
                      About
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/blog" className="text-decoration-none">
                      Blog
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/contact" className="text-decoration-none">
                      Contact
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/login" className="text-decoration-none">
                      LoG In
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/" className="text-decoration-none">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="rounded text-white post-btn pt-3">
                      +Post an Ad
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className="container" onClick={closeSidebar}>
            <div className="row align-items-center justify-content-center text-center header-content">
              <div className="col-md-12">
                <div className=" justify-content-center mb-4">
                  <div className="col-md-12 text-center text-white header-heading">
                    <h1 className="mt-5">{title}</h1>
                    <p className="">{title2}</p>
                  </div>
                </div>
                {page === "home" ? (
                  <div className="form-search-wrap">
                    <form method="post">
                      <div className="row align-items-center">
                        <div className="col-lg-12 mb-4 mb-xl-0 col-xl-4">
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="What are you looking for?"
                          />
                        </div>
                        <div className="col-lg-12 mb-4 mb-xl-0 col-xl-3">
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="What are you looking for?"
                          />
                        </div>
                        <div className="col-lg-12 mb-4 mb-xl-0 col-xl-3">
                          <input
                            type="text"
                            className="form-control rounded"
                            placeholder="What are you looking for?"
                          />
                        </div>
                        <div className="col-lg-12 col-xl-2 ml-auto text-right">
                          <input
                            type="submit"
                            className=" form-control btn-block rounded  search-btn"
                            value="search"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
