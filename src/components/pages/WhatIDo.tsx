import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

import styles from "./WhatIDo.module.css";

function WhatIDo() {
  return (
    <div className={styles["whatido-container"]}>
      <Navbar />
        <div className={styles["whatido-banner"]} />
      <Footer />
    </div>
  );
}

export default WhatIDo;
