import React from "react";
// import Products from "./Products";
import Home from "./Home";
import Contact from "./Contact";
import Gallery from "./Gallery";
import About from "./About";
import WhatsAppPopup from "../../components/PopUp/WhatsAppPopup";
import ProdductCategories from "../ProductCategories/ProductCategories";
import ProductShowcase from "../products/ProductShowcase";
import Testimonial from "../Homepage/Testimonial";
import Faq from "../Homepage/Faq";
import Review from "../Homepage/Review";

function Homepage() {
  return (
    <div>
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      {/* <div id="products">
        <Products />
      </div> */}
      <div id="products">
        <ProductShowcase />
      </div>
      {/* <ProdductCategories /> */}

      <div id="gallery">
        <Gallery />
      </div>

      <Testimonial />
      <Review />
      <Faq />

      <div id="contact">
        <Contact />
      </div>

      <WhatsAppPopup />
    </div>
  );
}

export default Homepage;
