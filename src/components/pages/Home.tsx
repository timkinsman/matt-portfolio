import React from 'react';
import { Link } from 'react-router-dom';

import Panel from '../layout/Panel';
import styles from './Home.module.css';
import CardView from '../layout/CardView';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Spotify from '../layout/Spotify';
import Pagnation from '../layout/Pagnation';

function Home() {
  return (
    <div style={{background: "#211D23"}}>
      <Pagnation />
      
      <div className={styles.container} id="one">
        <div className={styles.landing}>
          <Navbar color="#FFFFFF" />

          <div className={styles.content}>
              <p className={styles.text}>
                Hello, my name is <Link className={styles.link} to="/about">Matthew Kinsman</Link>,<br />
                I’m a multi-disciplinary experience<br />
                designer currently living in Melbourne<br />
                and working at <a className={styles.link} href="https://versa.agency" target="_blank">Versa Agency</a>.
              </p>
          </div>

          <Spotify />
        </div>
      </div>

      <Panel background="#71B1D8" id="two"/>
      <Panel background="#0A252F" id="three"/>
      <Panel background="#FC98BF" id="four"/>
      <Panel background="#2C3163" id="five"/>

      <CardView id="six" />

      <Footer color="#FFFFFF" />
    </div>
  );
}

export default Home;
