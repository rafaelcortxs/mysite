import React from "react";
import "./about.css";

const about = () => {
  return (
    <div className="aboutContainer">
        <h2>Minhas Linguagens</h2>
      <div className="aboutItens">
        <div className="aboutItem">
          <div className="abouIcon">
          <i class='bx bxl-javascript' undefined ></i>
          </div>
          <h3>JavaScript</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, qui!
            Minus ipsam, iste labore libero excepturi atque iusto vitae, ullam
            unde similique cumque minima exercitationem numquam esse praesentium
            aliquid velit.
          </p>
          <button className="aboutButton">Ver Mais</button>
        </div>
        <div className="aboutItem">
          <div className="abouIcon">
          <i class='bx bxl-react' ></i>
          </div>
          <h3>React.js</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, qui!
            Minus ipsam, iste labore libero excepturi atque iusto vitae, ullam
            unde similique cumque minima exercitationem numquam esse praesentium
            aliquid velit.
          </p>
          <button className="aboutButton">CLICKME</button>
        </div>
        <div className="aboutItem">
          <div className="abouIcon">
          <i class='bx bxl-typescript'></i>
          </div>
          <h3>TypeScript</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, qui!
            Minus ipsam, iste labore libero excepturi atque iusto vitae, ullam
            unde similique cumque minima exercitationem numquam esse praesentium
            aliquid velit.
          </p>
          <button className="aboutButton">CLICKME</button>
        </div>
        <div className="aboutItem">
          <div className="abouIcon">
          <i class="ri-nextjs-fill"></i>
          </div>
          <h3>Next.js</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, qui!
            Minus ipsam, iste labore libero excepturi atque iusto vitae, ullam
            unde similique cumque minima exercitationem numquam esse praesentium
            aliquid velit.
          </p>
          <button className="aboutButton">CLICKME</button>
        </div>
      </div>
      
     
    
    </div>
  );
};

export default about;
