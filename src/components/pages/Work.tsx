import React from 'react';
import CardView from '../layout/CardView';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

import styles from './Work.module.css'

function Work() {
  return (
    <div className={styles["work-container"]}>
      <div className={styles["work-banner"]}>
        <Navbar />
        <div style={{padding: '0 250px'}}>
          <p className={styles["work-p"]}>Work</p>
          <CardView id="null" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Work;
