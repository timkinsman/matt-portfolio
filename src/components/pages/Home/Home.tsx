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

import studies from '../../../studies';

import $ from 'jquery'

function Home() {
  const renderPanel = (index: any, id: string) => {
      return <Panel study={studies[index]} id={id} />
  }

  const handleOnClick = (id: string) => {
    $('html,body').animate({
        scrollTop: $(id).offset()?.top}, 'slow');
  }

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
          <div className={styles["home-arrow"]}>
            <p className="global-link" onClick={() => handleOnClick("#two")}>🡣</p>
          </div>
        </div>
      </div>

      {renderPanel(4, "two") /**cityofportphillip */}
      {renderPanel(0, "three") /**bankvic */}
      {renderPanel(10, "four") /**opencourts */}
      {renderPanel(1, "five") /**beyondblue */}

      <div style={{padding: '0 457px'}}>
        <CardView id="six" />
        <Clients />
        <Awards />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
