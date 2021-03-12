import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

import styles from "./WhatIDo.module.css";

function WhatIDo() {
  return (
    <div className={styles["whatido-container"]}>
      <div className={styles["whatido-banner"]}>
        <Navbar />
      </div>
      <Footer />
    </div>
  );
}

export default WhatIDo;
