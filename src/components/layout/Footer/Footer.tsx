import React from 'react';

import styles from './Footer.module.css';
import { Link } from "react-router-dom"

import $ from 'jquery'

import arrow from '../../../images/arrow-down.svg'

function Footer() {
  const handleOnClick = () => {
    $('html,body').animate({
        scrollTop: 0}, 'slow');
  }

  return (
    <div className={styles["footer-container"]}>
        <div className={styles["footer-outerdiv"]}>
          <div className={styles["footer-left"]}>
            <p className={styles["footer-p"]}>Go to</p>
            <div className={styles["footer-grid"]}>
              <Link className={styles["footer-a"]} to="/"><span className={styles["footer-span"]}>Home</span></Link>
              <Link className={styles["footer-a"]} to="/casestudies"><span className={styles["footer-span"]}>Case studies</span></Link>
              <Link className={styles["footer-a"]} to="/about"><span className={styles["footer-span"]}>About me</span></Link>
              <Link className={styles["footer-a"]} to="/whatido"><span className={styles["footer-span"]}>What I do</span></Link>
              <Link className={styles["footer-a"]} to="/otherwork">Other work</Link>
              <Link className={styles["footer-a"]} to="/contact"><span className={styles["footer-span"]}>Contact</span></Link>
            </div>
            <p className={styles["footer-small"]}>Developed by <span className={styles["footer-span"]}><a className={styles["footer-tim"]} href="https://timkinsman.com" target="_blank">Tim Kinsman</a></span></p>
          </div>
          <div>
            <p className={styles["footer-p"]}>Get in touch</p>
            <div className={styles["footer-grid"]}>
              <a className={styles["footer-a"]} href="mailto:mskinsm@gmail.com" target="_blank"><span className={styles["footer-span"]}>Email</span></a>
              <a className={styles["footer-a"]} href="https://www.facebook.com/mskinsm/" target="_blank"><span className={styles["footer-span"]}>Facebook</span></a>
              <a className={styles["footer-a"]} href="https://www.behance.net/matthewkinsman" target="_blank"><span className={styles["footer-span"]}>Behance</span></a>
              <a className={styles["footer-a"]} href="https://twitter.com/MatthewKinsman" target="_blank"><span className={styles["footer-span"]}>Twitter</span></a>
              <a className={styles["footer-a"]} href="https://www.linkedin.com/in/matthew-kinsman/" target="_blank"><span className={styles["footer-span"]}>LinkedIn</span></a>
              <a className={styles["footer-a"]} href="https://open.spotify.com/user/mskinsm" target="_blank"><span className={styles["footer-span"]}>Spotify</span></a>
            </div>
            <p className={`${styles["footer-p"]} ${styles["footer-small"]}`}>© 2021 Matthew Kinsman, Melbourne, Australia</p>
          </div>
          <div><p onClick={handleOnClick} className={styles["footer-a"]} style={{margin: '0 0 0 auto'}}><img style={{transform: 'rotate(180deg)'}} src={arrow} alt="🡡" /></p></div>
        </div>
    </div>
  );
}

export default Footer;
