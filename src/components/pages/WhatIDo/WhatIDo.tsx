import React from 'react';
import Footer from '../../layout/Footer/Footer';
import Navbar from '../../layout/Navbar/Navbar';

import styles from "./WhatIDo.module.css";

function WhatIDo() {
  return (
    <div className={styles["whatido-container"]}>
      <div className={styles["whatido-banner"]}>
        <Navbar />
        <div style={{padding: '100px 250px 0 250px'}}>
          <p className={styles["whatido-p"]}>What I Do</p>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
