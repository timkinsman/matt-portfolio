import React from "react";
import Footer from "../../global/Footer/Footer";
import Navbar from "../../global/Navbar/Navbar";

function Blog() {
  return (
    <div className="global-fadein">
      <div className="global-main-container">
        <Navbar selected="stuff" />
        <div className="global-container">
          <p className="global-title">Other Work</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Blog;
