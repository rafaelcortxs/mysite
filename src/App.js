import Navbar from "./components/NavBar/navbar";
import Hero from "./components/Hero/hero";
import Tecnologias from "./components/Tecnologias/tecnologias";
import About from "./components/About/about";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tecnologias/>
      <About />
    </>
  );
}

export default App;
