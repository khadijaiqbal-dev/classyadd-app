import React from "react";
import "./slidercomponent.css";
// import { FaBlackberry } from "react-icons/fa";
function Slidercomponents({ value, handleChange }) {
  const inputStyle = {
    // background: "red",
    // color: "black",
    width: 280,
  };
  return (
    <div>
      <input
        type="range"
        defaultValue={value}
        onChange={handleChange}
        style={inputStyle}
      />
    </div>
  );
}
export default Slidercomponents;
