import Navbar from "./components/NavBar/navbar";
import Hero from "./components/Hero/hero";
import Tecnologias from "./components/Tecnologias/tecnologias";
import Portifolio from "./components/Portifolio/Portifolio";
import About from "./components/About/about";
import Footer from "./components/Footer/Footer";



import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tecnologias />
      <Portifolio/>
      <About />
      <Footer/>
   
    </>
  );
}

export default App;
