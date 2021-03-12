import React from 'react';
import Footer from '../layout/Footer';
import Links from '../layout/Links';
import Navbar from '../layout/Navbar';

import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className={styles["blog-container"]}>
      <div className={styles["blog-banner"]}>
        <Navbar />
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
