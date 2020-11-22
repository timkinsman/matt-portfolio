import React from 'react';

import styles from './Footer.module.css';

function Footer(props: {color: string}) {
  return (
    <div className={styles.container}>
        <div className={styles.justify}>
            <a className={styles.link} style={{color: props.color}} href="#">Email</a>
            <a className={styles.link} style={{color: props.color}} href="#">Behanced</a>
            <a className={styles.link} style={{color: props.color}} href="#">LinkedIn</a>
            <a className={styles.link} style={{color: props.color}} href="#">Facebook</a>
            <a className={styles.link} style={{color: props.color}} href="#">Spotify</a>
        </div>
        <div className={styles.justify}>
            <p style={{color: props.color}}>© 2020 Matthew Kinsman, Melbourne, Australia</p>
        </div>
    </div>
  );
}

export default Footer;
