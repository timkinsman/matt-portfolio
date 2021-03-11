import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className={styles["blog-container"]}>
      <Navbar />
        <div className={styles["blog-banner"]} />
      <Footer />
    </div>
  );
}

export default Blog;
