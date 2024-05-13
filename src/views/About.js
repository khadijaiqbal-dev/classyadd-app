import React from "react";
import Header from "../Components/Header";
import "./about.css";
import susan from "../assets/img/susan.jpg.webp";
import { AiOutlineCheck } from "react-icons/ai";
import girls from "../assets/img/girls.jpg.webp";
import Footer from "../Components/Footer/Footer";
function About() {
  return (
    <div>
      <Header title={"About Us"} title2="A world class classified company" />
      <div className=" container">
        <div className="row m-5">
          <div className="col-md-4">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              eveniet laudantium dignissimos atque labore excepturi perspiciatis
              ut fugit eius itaque iste quibusdam dolore consectetur
              reprehenderit. Illum molestiae nemo culpa optio.
            </p>
          </div>
          <div className="col-md-4">
            <p>
              Similique neque facere cum! Et esse natus qui fugiat temporibus
              voluptate debitis similique eos illum pariatur suscipit placeat
              omnis perferendis ab enim quis eligendi minima explicabo aperiam.
              Eaque minus itaque?
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className=" col-md-4 text-left border-primary">
            <h2 className="font-weight-light text-color "> Our team</h2>
            <div className="team-border mt-2"></div>
          </div>
        </div>
        <div className=" row">
          <div className=" col-12 col-md-6 col-lg-3 ">
            <div className="team-introduction">
              <div className="team-member-pic">
                <img className="img-fluid" src={susan} />
              </div>
              <div className="member-name">
                <p className="susan">Susan Horton</p>
                <p className="founder text-color">Founder</p>
              </div>
              <div className="member-bio-data">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum facilis, sint libero commodi tenetur ducimus
                  accusantium inventore.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-6 col-lg-3 ">
            <div className="team-introduction">
              <div className="team-member-pic">
                <img className="img-fluid" src={susan} />
              </div>
              <div className="member-name">
                <p className="susan">Susan Horton</p>
                <p className="founder text-color"> Founder</p>
              </div>
              <div className="member-bio-data">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum facilis, sint libero commodi tenetur ducimus
                  accusantium inventore.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-6 col-lg-3 ">
            <div className="team-introduction">
              <div className="team-member-pic">
                <img className="img-fluid" src={susan} />
              </div>
              <div className="member-name">
                <p className="susan">Susan Horton</p>
                <p className="founder text-color">Founder</p>
              </div>
              <div className="member-bio-data">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum facilis, sint libero commodi tenetur ducimus
                  accusantium inventore.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-6 col-lg-3 ">
            <div className="team-introduction">
              <div className="team-member-pic">
                <img className="img-fluid" src={susan} />
              </div>
              <div className="member-name">
                <p className="susan">Susan Horton</p>
                <p className="founder text-color">Founder</p>
              </div>
              <div className="member-bio-data">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum facilis, sint libero commodi tenetur ducimus
                  accusantium inventore.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-us-conatainer">
          <div className="row why-us-conatainer">
            <div className=" col- 12 col-md-6">
              <div className="girl-img">
                <img className="img-fluid" src={girls} />
              </div>
            </div>
            <div className=" col- 12 col-md-6">
              <div className="why-us">
                <h1 className="text-color">why us</h1>
                <p className="why-us-p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam voluptates a explicabo delectus sed labore dolor enim
                  optio odio at!
                </p>
                <p className="why-us-p">
                  Adipisci dolore reprehenderit est et assumenda veritatis, ex
                  voluptate odio consequuntur quo ipsa accusamus dicta laborum
                  exercitationem aspernatur reiciendis perspiciatis!
                </p>
                <div>
                  <div className="why-us-icon">
                    <AiOutlineCheck className="text-color " />{" "}
                    <span>Adipisci dolore reprehenderit</span>
                    <br></br>
                    <AiOutlineCheck className="text-color" />{" "}
                    <span>Adipisci dolore reprehenderit</span>
                    <br></br>
                    <AiOutlineCheck className="text-color" />{" "}
                    <span>Adipisci dolore reprehenderit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className=" col- 12 col-md-6">
            <div className="why-us">
              <h1 className="text-color">Customer Centered Co.</h1>
              <p className="why-us-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam voluptates a explicabo delectus sed labore dolor enim
                optio odio at!
              </p>
              <div>
                <div className="why-us-icon">
                  <AiOutlineCheck className="text-color" />{" "}
                  <span>Adipisci dolore reprehenderit</span>
                  <br></br>
                  <AiOutlineCheck className="text-color" />{" "}
                  <span>Adipisci dolore reprehenderit</span>
                  <br></br>
                  <AiOutlineCheck className="text-color" />{" "}
                  <span>Adipisci dolore reprehenderit</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" col- 12 col-md-6">
            <div className="girl-img">
              <img className="img-fluid" src={girls} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
