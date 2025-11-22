import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import CartSidebar from "../pages/Products/CartSidebar";
import CartSidebar from "../pages/products/CartSidebar";

// Simple Layout with only Navbar and Footer
function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
      <CartSidebar />
    </>
  );
}

export default Layout;
