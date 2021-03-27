import React from 'react';

import styles from './Footer.module.css';
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className={styles["footer-container"]}>
        <div className={styles["footer-outerdiv"]}>
          <div className={styles["footer-left"]}>
            <p className={styles["footer-p"]}>Go to</p>
            <div className={styles["footer-grid"]}>
              <Link className={styles["footer-a"]} to="/">Home</Link>
              <Link className={styles["footer-a"]} to="/whatido">What I Do</Link>
              <Link className={styles["footer-a"]} to="/work">Work</Link>
              {/*<Link className={styles["footer-a"]} to="/blog">Stuff</Link>*/}
              <Link className={styles["footer-a"]} to="/about">About Me</Link>
              <Link className={styles["footer-a"]} to="/contact">Contact</Link>
            </div>
            <p className={styles["footer-small"]}>Developement by <a className={styles["footer-tim"]} href="https://timkinsman.com" target="_blank">Tim Kinsman</a></p>
          </div>
          <div>
            <p className={styles["footer-p"]}>Get in touch</p>
            <div className={styles["footer-grid"]}>
              <a className={styles["footer-a"]} href="mailto:mskinsm@gmail.com" target="_blank">Email</a>
              <a className={styles["footer-a"]} href="https://www.facebook.com/mskinsm/" target="_blank">Facebook</a>
              <a className={styles["footer-a"]} href="https://www.behance.net/matthewkinsman" target="_blank">Behance</a>
              <a className={styles["footer-a"]} href="https://twitter.com/MatthewKinsman" target="_blank">Twitter</a>
              <a className={styles["footer-a"]} href="https://www.linkedin.com/in/matthew-kinsman/" target="_blank">LinkedIn</a>
              <a className={styles["footer-a"]} href="https://open.spotify.com/user/mskinsm" target="_blank">Spotify</a>
            </div>
            <p className={`${styles["footer-p"]} ${styles["footer-small"]}`}>© 2021 Matthew Kinsman, Melbourne, Australia</p>
          </div>
          <div><p onClick={() => window.scrollTo(0, 0)} className={styles["footer-a"]} style={{margin: '0 0 0 auto', fontSize: '30px'}}>↑</p></div>
        </div>
    </div>
  );
}

export default Footer;
