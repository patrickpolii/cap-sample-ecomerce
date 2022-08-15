import "./App.css";
import Header from "./components/Header"
import Home from "./components/Home"
import Services from "components/Services";

import About from "components/About";
import Contact from "components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Services/>
     
      <About/>
      <Contact/>   
      <Footer/>

      <div className="scroll-top">
        <img src="./images/arrow-up-outline.svg" alt="" />
      </div>
    </div>
  );
}

export default App;
