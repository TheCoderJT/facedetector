import React from "react";
import Tilt from "react-tilt";
import "./logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }}>
        <div className="Tilt-inner flex justify-center items-center h-100">
          <img className="w-75 h-75" src={brain} alt="brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
