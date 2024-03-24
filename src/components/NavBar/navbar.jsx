import React, { useState } from "react";
import "./Navbar.css";

const navbar = () => {
  return (
    <>
      <nav className="navWrapper">
        <div className="navContent">
          <div className="logo"><a href="">Rafael Cortes</a></div>  
          <ul>
  
            <li>
              <a className="menuItem"> Home </a>
            </li>
            <li>
              <a className="menuItem"> Portifólio </a>
            </li>
            <li>
              <a className="menuItem"> Tecnologias </a>
            </li>
            <button className="menuContact" onClick={() => {}}>
              Entre Em Contato
            </button>
          </ul>
          <button className="menuMobile" onClick={() => {}}>
            <span>
            <i class='bx bx-chat'></i>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default navbar;
