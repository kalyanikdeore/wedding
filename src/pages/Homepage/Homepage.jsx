import React from "react";
import Products from "./Products";
import Home from "./Home";
import Contact from "./Contact";
import Gallery from "./Gallery";
import About from "./About";
import WhatsAppPopup from "../../components/PopUp/WhatsAppPopup";

function Homepage() {
  return (
    <div>
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="products">
        <Products />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <WhatsAppPopup />
    </div>
  );
}

export default Homepage;
