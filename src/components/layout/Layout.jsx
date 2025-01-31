import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
