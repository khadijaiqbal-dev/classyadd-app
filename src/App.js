import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home.js";
import About from "./views/About.js";
import Ads from "./views/Ads.js";
import Congratulation from "./views/Congratulation";
import Blog from "./views/blog.js";
import Contact from "./views/Contact.js";
import Login from "./views/Login.js";
import Register from "./views/Register.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Ads" element={<Ads />} />
        <Route exact path="/Congratulation" element={<Congratulation />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
