import React from "react";
import Header from "../Components/Header";
import Submit from "../Components/submit/submit";
import "../assets/css/login.css";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError('Email is invalid. Please include the "@" symbol.');
    } else {
      setError("");

      console.log(email);
    }
  };
  return (
    <>
      <Header title={"Register"} />

      <div className="container">
        <div className="login-container">
          <div className="row  justify-content-center mt-5 ">
            <div className="col-md-7 mb-5 bg-white">
              <form onSubmit={handleSubmit}>
                <label className="text-black mt-3 mb-3">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control bg-white "
                />
                {error && <div className="error">{error}</div>}
                <label className="text-black mt-3 mb-3">password</label>
                <input
                  type="password"
                  id="password"
                  class="form-control mb-3"
                ></input>
                <label className="text-black mt-3 mb-3">Re-Type password</label>
                <input
                  type="password"
                  id="password"
                  class="form-control mb-3"
                ></input>
                <span className="mt-3 mb-3">No account yet?</span>
                <span className="text-color">Register</span>
                <div className="mt-3  mb-3">
                  <Link to="./Register">
                    <Submit Submit={"Sign in"} style={"buttonstyle"} />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
