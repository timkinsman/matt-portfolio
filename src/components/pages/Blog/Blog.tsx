import React from "react";
import Footer from "../../layout/Footer/Footer";
import Navbar from "../../layout/Navbar/Navbar";

function Blog() {
  return (
    <div className="global-fadein">
      <Navbar selected="stuff" />
      <div className="global-container">
        <p className="global-title">Other Work</p>
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
