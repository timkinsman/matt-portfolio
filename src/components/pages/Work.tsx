import React from 'react';
import CardView from '../layout/CardView';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

import styles from './Work.module.css'

function Work() {
  return (
    <div style={{background: "#211D23"}}>

      <div className={styles.container}>
        <div className={styles.landing}>    
          <Navbar color="#FFFFFF" />
          <div className={styles.content}></div>
        </div>
      </div>

      <CardView id="two" />

      <Footer color="#FFFFFF" />
    </div>
  );
}

export default Work;
