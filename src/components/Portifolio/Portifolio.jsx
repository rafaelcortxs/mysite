import React from "react";
import "./Portifolio.css";
import Uno from "../../img/port2.jpg";
function Portifolio() {
  return (
    <div className="portifolioContainer">
      <h2> Meus Sites </h2>
      <div className="portifolioItens">
        <div className="Teste">
          <img src={Uno} alt="" />{" "}
          <button className="portifolioButton">
            <i class="bx bxl-github"></i>
          </button>
          <button className="portifolioButton2">
          <i class='bx bx-right-arrow-circle'></i>
          </button>
          <button className="portifolioButtonNew"> New </button>
        </div>
        
      </div>
    </div>
  );
}

export default Portifolio;
