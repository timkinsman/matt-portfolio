import React from 'react';
import { Link } from 'react-router-dom';

import Panel from '../../layout/Panel/Panel';
import CardView from '../../layout/CardView/CardView';
import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';
import Spotify from '../../layout/Spotify/Spotify';
import Pagnation from '../../layout/Pagnation/Pagnation';
import Links from '../../layout/Links/Links';

import styles from './Home.module.css';
import Clients from '../../layout/Clients/Clients';
import Awards from '../../layout/Awards/Awards';
import Testimonials from '../../layout/Testimonials/Testimonials';

function Home() {
  return (
    <div className="global-fadein">
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
        <div style={{padding: '75px 0'}}>
          <CardView id="six" />
          <Clients />
          <Awards />
          <Testimonials />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
