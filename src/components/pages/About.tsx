import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

import styles from "./About.module.css";

function About() {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["about-banner"]}>
        <Navbar />
      </div>
      <Footer />
    </div>
  );
}

export default About;
