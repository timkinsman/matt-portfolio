import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

import styles from "./About.module.css";

function About() {
  return (
    <div className={styles["about-container"]}>
      <Navbar />
        <div className={styles["about-banner"]} />
      <Footer />
    </div>
  );
}

export default About;
