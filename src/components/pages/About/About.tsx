import React from 'react';

import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';

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
