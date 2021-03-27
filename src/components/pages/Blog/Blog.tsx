import React from 'react';
import Footer from '../../layout/Footer/Footer';
import Navbar from '../../layout/Navbar/Navbar';

import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className="global-fadein">
      <div className="global-container">
        <Navbar />
        <div className="global-inner-container">
          <p className="global-title">Stuff</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Blog;
