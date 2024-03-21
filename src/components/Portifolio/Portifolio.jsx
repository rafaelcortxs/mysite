import React from "react";
import "./Portifolio.css";
import Uno from "../../img/port2.jpg"
function Portifolio() {
  return (
    <div className="portifolioContainer">
      <h2> Meus Sites </h2>
      <div className="portifolioItens">
        <img src={Uno} alt=""/>
        <img src={Uno} alt=""/>
        <img src={Uno} alt=""/>
        <img src={Uno} alt=""/>
      </div>
    <button className="portifolioButton"><i class='bx bxl-github'></i></button>
    </div>
  );
}

export default Portifolio;
