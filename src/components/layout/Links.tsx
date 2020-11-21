import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faFacebook, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons'

import styles from './Links.module.css';

function Links() {
  return (
    <div className={styles.container}>       
        <a className={styles.icon} href="#"><FontAwesomeIcon icon={faPaperPlane} /></a>
        <a className={styles.icon} href="#"><FontAwesomeIcon icon={faBehance} /></a>
        <a className={styles.icon} href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className={styles.icon} href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a className={styles.icon} href="#"><FontAwesomeIcon icon={faSpotify} /></a>
    </div>
  );
}

export default Links;
