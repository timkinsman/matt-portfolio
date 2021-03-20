import React from 'react';

import styles from './Bio.module.css'

function Bio() {
  return (
    <div className={styles["bio-container"]}>
        <div className={styles["bio-left"]}>
            <p className={styles["bio-header"]}>Bio</p>
            <p className={styles["bio-content"]}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.<br /><br />It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
        </div>
        <div className={styles["bio-right"]}>
            <img src="#" alt="img" className={styles["bio-img"]} />
        </div>
    </div>
  );
}

export default Bio;
