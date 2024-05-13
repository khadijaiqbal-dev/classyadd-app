import React from "react";
import "./Congratulation.css";
import congratulation from "../assets/img/congratulation.png";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
function Congratulation() {
  return (
    <div>
      <div id="overlay">
        <div className="model">
          <div className="close-icon border-transparent  text-white">
            <GrClose />
          </div>
          <div className="congratulation">
            <div className="model-img">
              <img src={congratulation} />
              <div className="model-heading">
                <div className="row">
                  <div className="col-lg-12">
                    <h1 className="text-black pb-2"> Congratulations!</h1>
                    <p className="heading-caption">
                      you've been identified as an early bird.we are giving you
                      one month free trail with full access to iPurvey premimum
                      features.
                    </p>
                  </div>
                  <div>
                    <div className="true">
                      <div className="true-icon">
                        <AiOutlineCheck />
                      </div>
                      <p className="icon-heading">
                        Travel disruption monitoring
                      </p>
                    </div>
                    <div className="true">
                      <div className="true-icon">
                        <AiOutlineCheck />
                      </div>
                      <p className="icon-heading">
                        constumer notification of submitted claim
                      </p>
                    </div>
                    <div className="true">
                      <div className="true-icon">
                        <AiOutlineCheck />
                      </div>
                      <p className="icon-heading">
                        Automatic claim request to travel operator*
                      </p>
                    </div>
                  </div>
                  <div className="buttons">
                    <div className="row">
                      <div className="col-md-12">
                        <Link to="./">
                          <button className=" mb-3">
                            Get Started with Free trail
                          </button>
                        </Link>
                        <div>
                          <Link
                            className="text-decoration-none heading-caption fs-8 "
                            to="./"
                          >
                            Skip for Now!
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Congratulation;
