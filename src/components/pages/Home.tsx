import React from 'react';
import { Link } from 'react-router-dom';

import Panel from '../layout/Panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import styles from './Home.module.css';
import CardView from '../layout/CardView';

function Home() {
  return (
    <div>
        <div className={styles.landing}>
          <div className={styles.content}>
              <p className={styles.landingtext}>
                Hello, my name is <Link className={styles.link} to="/about">Matthew Kinsman</Link>,<br />
                I’m a multi-disciplinary experience<br />
                designer currently living in Melbourne<br />
                and working at <a className={styles.link} href="https://versa.agency" target="_blank">Versa Agency</a>.
              </p>
          </div>
          <div className={styles.spotifycontainer}>
            <FontAwesomeIcon icon={faSpotify} style={{color: '#1DB954'}} />
            <span style={{padding: '0 10px'}}>Blush, Vynehall</span>
          </div>
        </div>
        <Panel background="#71B1D8" />
        <Panel background="#0A252F" />
        <Panel background="#FC98BF" />
        <Panel background="#2C3163" />
        <CardView />
    </div>
  );
}

export default Home;
