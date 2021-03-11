import React from 'react';
import CardView from '../layout/CardView';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

import styles from './Work.module.css'

function Work() {
  return (
    <div className={styles["work-container"]}>
      <Navbar />
        <div className={styles["work-banner"]} />
      <Footer />
    </div>
  );
}

export default Work;
