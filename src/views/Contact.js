import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Submit from "../Components/submit/submit";
import "../assets/css/submit.css";
import "../assets/css/contact.css";
function Contact() {
  return (
    <>
      <Header title={"Contact Us"} />
      <div className="contact-form">
        <div className="container">
          <div className="row m-0 m-md-4">
            <div className="col-md-7 mt-5">
              <form action="#" className="p-5 bg-white">
                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black " for="fname">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="fname "
                      className="form-control"
                    ></input>
                  </div>
                  <div className="col-md-6">
                    <label className="text-black " for="fname">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="fname "
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black py-2 " for="email">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="email "
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black py-2 " for="subject">
                      subject
                    </label>
                    <input
                      type="text"
                      id="subject "
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black  py-2" for="message">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="write your notes or question here..."
                    ></textarea>
                  </div>
                </div>
                <div className="mt-3"></div>
                <Submit Submit={"Send message"} style={"buttonstyle"} />
              </form>
            </div>
            <div className="col-md-5 mt-5">
              <div className="p-4 mb-3 bg-white">
                <p className="mb-0 font-weight-bold"></p>
                <p className="mb-4 text-color">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
                <p className="mb-0 font-weight-bold">Phone</p>
                <p className="mb-4">
                  <Link to="./" className="text-color">
                    +1 232 3235 324
                  </Link>
                </p>
                <p className="mb-0 font-weight-bold">Email Address</p>
                <p className="mb-0">
                  <Link to="./" className="text-color">
                    youremail@domain.com
                  </Link>
                </p>
              </div>
              <div className="p-4 mb-3 bg-white">
                <p className="mb-0 font-weight-bold"></p>
                <p className="mb-4">More Info</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  ad iure porro mollitia architecto hic consequuntur. Distinctio
                  nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos
                  qui, libero neque sed nulla.
                </p>
                <div>
                  <Submit Submit={"Learn More"} style={"buttonstyle"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
