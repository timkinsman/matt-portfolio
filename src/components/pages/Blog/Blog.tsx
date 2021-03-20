import React from 'react';
import Footer from '../../layout/Footer/Footer';
import Navbar from '../../layout/Navbar/Navbar';

import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className={styles["blog-container"]}>
      <div className={styles["blog-banner"]}>
        <Navbar />
        <div style={{padding: '100px 250px 0 250px'}}>
          <p className={styles["blog-p"]}>Stuff</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Blog;
