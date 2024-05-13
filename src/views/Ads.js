import React from "react";
import Header from "../Components/Header";
import { AiTwotoneStar } from "react-icons/ai";
import house from "../assets/img/house.jpg.webp";
import { AiFillHeart } from "react-icons/ai";
import "./Ads.css";
import Slidercomponents from "../Components/Slidecomponents";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";
function Ads() {
  const [value, setValue] = useState(50);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Header title={"Ads Listing"} title2="Choose product you want" />
      <div className="ads-container mt-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <div className="d-block  listing vertical">
                    <img className="img-fluid d-block" src={house} />
                    <div className="lh-content">
                      <div className="real-estate">
                        <p>Real Estate</p>
                        <div className="heart-rounded">
                          <div className="ads-heart">
                            <AiFillHeart />
                          </div>
                        </div>
                      </div>
                      <h3 className="ads-color m-0">house and swiming pool</h3>
                      <address className="ads-color m-0">
                        khadija iqbal form new york
                      </address>
                      <p className="mb-0">
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="reviews">(3 Reviews)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-block  listing vertical">
                    <img className="img-fluid d-block" src={house} />
                    <div className="lh-content">
                      <div className="real-estate">
                        <p>Real Estate</p>
                        <div className="heart-rounded">
                          <div className="ads-heart">
                            <AiFillHeart />
                          </div>
                        </div>
                      </div>
                      <h3 className="ads-color m-0">house and swiming pool</h3>
                      <address className="ads-color m-0">
                        khadija iqbal form new york
                      </address>
                      <p className="mb-0">
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="reviews">(3 Reviews)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-block  listing vertical">
                    <img className="img-fluid d-block" src={house} />
                    <div className="lh-content">
                      <div className="real-estate">
                        <p>Real Estate</p>
                        <div className="heart-rounded">
                          <div className="ads-heart">
                            <AiFillHeart />
                          </div>
                        </div>
                      </div>
                      <h3 className="ads-color m-0">house and swiming pool</h3>
                      <address className="ads-color m-0">
                        khadija iqbal form new york
                      </address>
                      <p className="mb-0">
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="reviews">(3 Reviews)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-block  listing vertical">
                    <img className="img-fluid d-block" src={house} />
                    <div className="lh-content">
                      <div className="real-estate">
                        <p>Real Estate</p>
                        <div className="heart-rounded">
                          <div className="ads-heart">
                            <AiFillHeart />
                          </div>
                        </div>
                      </div>
                      <h3 className="ads-color m-0">house and swiming pool</h3>
                      <address className="ads-color m-0">
                        khadija iqbal form new york
                      </address>
                      <p className="mb-0">
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="reviews">(3 Reviews)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-block  listing vertical">
                    <img className="img-fluid d-block" src={house} />
                    <div className="lh-content">
                      <div className="real-estate">
                        <p>Real Estate</p>
                        <div className="heart-rounded">
                          <div className="ads-heart">
                            <AiFillHeart />
                          </div>
                        </div>
                      </div>
                      <h3 className="ads-color m-0">house and swiming pool</h3>
                      <address className="ads-color m-0">
                        khadija iqbal form new york
                      </address>
                      <p className="mb-0">
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="reviews">(3 Reviews)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-block  listing vertical">
                    <img className="img-fluid d-block" src={house} />
                    <div className="lh-content">
                      <div className="real-estate">
                        <p>Real Estate</p>
                        <div className="heart-rounded">
                          <div className="ads-heart">
                            <AiFillHeart />
                          </div>
                        </div>
                      </div>
                      <h3 className="ads-color m-0">house and swiming pool</h3>
                      <address className="ads-color m-0">
                        khadija iqbal form new york
                      </address>
                      <p className="mb-0">
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="reviews">(3 Reviews)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-block  listing vertical">
                    <img className="img-fluid d-block" src={house} />
                    <div className="lh-content">
                      <div className="real-estate">
                        <p>Real Estate</p>
                        <div className="heart-rounded">
                          <div className="ads-heart">
                            <AiFillHeart />
                          </div>
                        </div>
                      </div>
                      <h3 className="ads-color m-0">house and swiming pool</h3>
                      <address className="ads-color m-0">
                        khadija iqbal form new york
                      </address>
                      <p className="mb-0">
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="reviews">(3 Reviews)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-block  listing vertical">
                    <img className="img-fluid d-block" src={house} />
                    <div className="lh-content">
                      <div className="real-estate">
                        <p>Real Estate</p>
                        <div className="heart-rounded">
                          <div className="ads-heart">
                            <AiFillHeart />
                          </div>
                        </div>
                      </div>
                      <h3 className="ads-color m-0">house and swiming pool</h3>
                      <address className="ads-color m-0">
                        khadija iqbal form new york
                      </address>
                      <p className="mb-0">
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="icon-star text-warning">
                          <AiTwotoneStar />
                        </span>
                        <span className="reviews">(3 Reviews)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 filter ">
              <div className=" ">
                <h3 className="h5 text-black mb-3">Filter</h3>
                <form action="#" method="post">
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      placeholder="what ae you looking for?"
                      className="form-control mb-3"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      placeholder="what ae you looking for?"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      placeholder="what ae you looking for?"
                      className="form-control"
                    />
                  </div>
                </form>
              </div>
              <div className="mb-5">
                <form action="#" method="post">
                  <div className="form-group">
                    <p>Radius around selected destination</p>
                  </div>
                  <h2>{value}</h2>
                  <Slidercomponents value={value} handleChange={handleChange} />
                  <div>
                    <p>Caregory 'Real Estate' is selected </p>
                    <p className="fs-6 text-captalize">More filters</p>
                  </div>
                </form>
                <form action="/action_page.php">
                  <input
                    className="mr-3"
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label className="mx-2" for="vehicle1">
                    {" "}
                    Commercial
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Car"
                  />
                  <label className="mx-2" for="vehicle2">
                    {" "}
                    Industrial
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                  />
                  <label className="mx-2" for="vehicle3">
                    {" "}
                    Land
                  </label>
                </form>
                <div className="mt-5">
                  <p>More info</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti voluptatem placeat facilis, reprehenderit eius
                    officiis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="pagination">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
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
      </div>
      <Footer />
    </div>
  );
}
export default Ads;
