import React from "react";
import EU from "../../img/eu.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroContent">
        <h2>
          {" "}
          Lorem <span>Desenvolvedor Web</span> Lorem ipsum dolor sit amet. Lorem
          ipsum dolor sit amet.
        </h2>
        <button className="heroButton"> Entre em Contato </button>
      </div>
    </div>
  );
};

export default Hero;
