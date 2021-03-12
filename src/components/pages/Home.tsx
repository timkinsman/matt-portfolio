import React from 'react';
import { Link } from 'react-router-dom';

import Panel from '../layout/Panel';
import styles from './Home.module.css';
import CardView from '../layout/CardView';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Spotify from '../layout/Spotify';
import Pagnation from '../layout/Pagnation';
import Links from '../layout/Links';

function Home() {
  return (
    <div className={styles["home-page"]}>
      <Links />
      <Pagnation />
      
      <div className={styles["home-container"]} id="one">
        <div className={styles["home-div"]}>
          <Navbar />

          <div className={styles["home-content"]}>
              <p className={styles["home-text"]}>
                Hello, my name is <Link className={styles["home-link"]} to="/about">Matthew Kinsman</Link>,<br />
                I’m a multi-disciplinary experience<br />
                designer currently living in Melbourne<br />
                and working at <a className={styles["home-link"]} href="https://versa.agency" target="_blank">Versa Agency</a>.
              </p>
          </div>

          <Spotify />
        </div>
      </div>

      <Panel background="#71B1D8" id="two"/>
      <Panel background="#0A252F" id="three"/>
      <Panel background="#FC98BF" id="four"/>
      <Panel background="#2C3163" id="five"/>

      <div style={{padding: '0 450px'}}>
        <CardView id="six" />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
