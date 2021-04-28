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

import arrow from '../../../images/arrow-down.svg'

function Home() {
  const renderPanel = (index: any, id: string, next: string) => {
      return <Panel study={studies[index]} id={id} next={next} />
  }

  const handleOnClick = (id: string) => {
    $('html,body').animate({
        scrollTop: $(id).offset()?.top}, 'slow');
  }

  const handleOnMouseMove = (e: any) => {
    $("#mouse-over-image").css({left: e.clientX + 25, top: e.clientY + 25});
  }

  return (
    <div className="global-fadein" onMouseMove={handleOnMouseMove}>
      <Links />
      <Pagnation />
      
      <div className="global-main-container" style={{height: '100vh'}} id="one">
        <div className={styles["home-panel"]}>
          <Navbar selected="home" />

          <h1 className={styles["home-panel-text"]}>
            Hello, my name is <Link className="global-border-thick" to="/about">Matthew Kinsman</Link>,<br />
            I’m a multi-disciplinary experience<br />
            designer currently living in Melbourne<br />
            and working at <a className="global-border-thick" href="https://versa.agency" target="_blank">Versa Agency</a>.
          </h1> 

          <div className={styles["home-panel-bottom"]}>
            <Spotify />
            
            <div className={styles["home-arrow"]}>
              <a onClick={() => handleOnClick("#two")}><img src={arrow} /></a>
            </div>
          </div>
        </div>
      </div>

      {renderPanel(4, "two", "three") /**cityofportphillip */}
      {renderPanel(0, "three", "four") /**bankvic */}
      {renderPanel(10, "four", "five") /**opencourts */}
      {renderPanel(1, "five", "six") /**beyondblue */}

      <div className="global-container">
        <CardView id="six" />
        <Clients />
        <Awards />
        <Testimonials />
        <Footer />
      </div>
      
      <img className={styles["mouse-over-image"]} style={{pointerEvents: "none", background: 'red'}} id="mouse-over-image" src="" alt="image" />
    </div>
  );
}

export default Home;
