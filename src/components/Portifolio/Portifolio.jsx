import React from "react";
import "./Portifolio.css";
import Uno from "../../img/port2.jpg";
function Portifolio() {
  return (
    <div className="portifolioContainer">
      <h2> Meus Projetos </h2>
      <div className="portifolioItens">
        <div className="Teste">
          <img src={Uno} alt="" />{" "}
          <button className="portifolioButton">
            <i class="bx bxl-github"></i>
          </button>
          <button className="portifolioButton2">
            <i class="bx bx-right-arrow-circle"></i>
          </button>
          <button className="portifolioButtonNew"> New </button>
          <button className="portifolioButtonNew2"> Uno Restyling </button>
        </div>
        <div className="Teste">
          <img src={Uno} alt="" />{" "}
          <button className="portifolioButton">
            <i class="bx bxl-github"></i>
          </button>
          <button className="portifolioButton2">
            <i class="bx bx-right-arrow-circle"></i>
          </button>
          <button className="portifolioButtonNew"> New </button>
          <button className="portifolioButtonNew2"> Uno Restyling </button>
        </div>
        <div className="Teste">
          <img src={Uno} alt="" />{" "}
          <button className="portifolioButton">
            <i class="bx bxl-github"></i>
          </button>
          <button className="portifolioButton2">
            <i class="bx bx-right-arrow-circle"></i>
          </button>
          <button className="portifolioButtonNew"> New </button>
          <button className="portifolioButtonNew2"> Uno Restyling </button>
        </div>

        <div class="terminal-loader">
          <div class="terminal-header">
            <div class="terminal-title">Status</div>
            <div class="terminal-controls">
              <div class="control close"></div>
              <div class="control minimize"></div>
              <div class="control maximize"></div>
            </div>
          </div>
          <div class="text">in production...</div>
        </div>
      </div>
    </div>
  );
}

export default Portifolio;
