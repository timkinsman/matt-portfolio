import React from 'react';
import CardView from '../../layout/CardView/CardView';
import Footer from '../../layout/Footer/Footer';
import Navbar from '../../layout/Navbar/Navbar';

import styles from './Work.module.css'

function Work() {
  return (
    <div className={styles["work-container"]}>
      <div className={styles["work-banner"]}>
        <Navbar />
        <div style={{padding: '100px 250px 0 250px'}}>
          <p className={styles["work-p"]}>Work</p>
          <CardView id="null" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Work;
