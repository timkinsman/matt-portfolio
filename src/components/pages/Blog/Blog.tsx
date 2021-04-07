import React from 'react';
import Footer from '../../layout/Footer/Footer';
import Navbar from '../../layout/Navbar/Navbar';

import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className="global-fadein">
      <div className="global-container">
        <Navbar selected="stuff" />
        <div className="global-inner-container">
          <p className="global-title">Other Work</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Blog;
