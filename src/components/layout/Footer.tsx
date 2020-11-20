import React from 'react';

import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.justify}>
            <a className={styles.link} href="#">Email</a>
            <a className={styles.link} href="#">Behanced</a>
            <a className={styles.link} href="#">LinkedIn</a>
            <a className={styles.link} href="#">Facebook</a>
            <a className={styles.link} href="#">Spotify</a>
        </div>
        <div className={styles.justify}>
            <p>© 2020 Matthew Kinsman, Melbourne, Australia</p>
        </div>
    </div>
  );
}

export default Footer;
