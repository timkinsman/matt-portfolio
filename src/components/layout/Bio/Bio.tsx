import React from 'react';

import styles from './Bio.module.css'

import images from '../../../images/Photos'

function Bio() {
  return (
    <div className={styles["bio-space-between"]}>
        <div>
            <p className="global-header" style={{marginTop: '0'}}>Bio</p>
            <p className="global-content">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.<br /><br />It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
        </div>
        <div>
            <img src={images.about} alt="img" className={styles["bio-img"]} />
        </div>
    </div>
  );
}

export default Bio;
