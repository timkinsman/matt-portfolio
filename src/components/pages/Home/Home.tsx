import React from "react";
import { Link } from "react-router-dom";
import Awards from "../../layout/Awards/Awards";
import CardView from "../../layout/CardView/CardView";
import Clients from "../../layout/Clients/Clients";
import Footer from "../../layout/Footer/Footer";
import Panel from "../../layout/Panel/Panel";
import Pagnation from "../../layout/Pagnation/Pagnation";
import Links from "../../layout/Links/Links";
import Navbar from "../../layout/Navbar/Navbar";
import Spotify from "../../layout/Spotify/Spotify";
import Testimonials from "../../layout/Testimonials/Testimonials";
import studies from "../../../studies";
import arrow from "../../../images/arrow-down.svg";
import $ from "jquery";
import styles from "./Home.module.css";

function Home() {
  const renderPanel = (pintIndex: number, pstrId: string, pstrNextId: string) => {
      return <Panel study={studies[pintIndex]} id={pstrId} next={pstrNextId} />
  }

  const handleOnClick = (pstrId: string) => {
    $('html,body').animate({
        scrollTop: $(pstrId).offset()?.top}, 'slow');
  }

  const handleOnMouseMove = (pobjEvent: any) => {
    $("#mouse-over-image-two").css({left: pobjEvent.clientX + 25, top: pobjEvent.clientY + 25});
    $("#mouse-over-image-three").css({left: pobjEvent.clientX + 25, top: pobjEvent.clientY + 25});
    $("#mouse-over-image-four").css({left: pobjEvent.clientX + 25, top: pobjEvent.clientY + 25});
    $("#mouse-over-image-five").css({left: pobjEvent.clientX + 25, top: pobjEvent.clientY + 25});
  }

  return (
    <div className="global-fadein" onMouseMove={handleOnMouseMove}>
      <Links />
      <Pagnation />
      
      <div className={`${styles["home-banner"]} global-main-container`} id="one">
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
      
      <img className={styles["mouse-over-image"]} id="mouse-over-image-two" src={studies[4].img} alt={studies[4].title} />
      <img className={styles["mouse-over-image"]} id="mouse-over-image-three" src={studies[0].img} alt={studies[0].title} />
      <img className={styles["mouse-over-image"]} id="mouse-over-image-four" src={studies[10].img} alt={studies[10].title} />
      <img className={styles["mouse-over-image"]} id="mouse-over-image-five" src={studies[1].img} alt={studies[1].title} />
    </div>
  );
}

export default Home;
