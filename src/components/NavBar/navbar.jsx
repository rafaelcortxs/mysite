import React, { useState } from "react";
import "./Navbar.css";

const navbar = () => {
  return (
    <>
      <nav className="navWrapper">
        <div className="navContent">
          <img className="logo" src="" alt="" />
          <ul>
  
            <li>
              <a className="menuItem"> Home </a>
            </li>
            <li>
              <a className="menuItem"> Home </a>
            </li>
            <li>
              <a className="menuItem"> Home </a>
            </li>
            <button className="menuContact" onClick={() => {}}>
              Hire Me
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
