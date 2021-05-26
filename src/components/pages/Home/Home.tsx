import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Awards from "../../global/Awards/Awards";
import CardView from "../../global/CardView/CardView";
import Clients from "../../global/Clients/Clients";
import Footer from "../../global/Footer/Footer";
import Pagnation from "../../global/Pagnation/Pagnation";
import Links from "../../global/Links/Links";
import Navbar from "../../global/Navbar/Navbar";
import Testimonials from "../../global/Testimonials/Testimonials";
import Panel from "./Panel/Panel";
import Spotify from "./Spotify/Spotify";
import studies from "../../../studies";
import arrow from "../../../images/arrow-down.svg";
import moon from "../../../images/moon.svg";
import sun from "../../../images/sun.svg";
import $ from "jquery";
import styles from "./Home.module.css";
import { updateTheme } from "../../../actions";
import {connect} from "react-redux";
import video from "../../../videos/memeoji.mp4";
import arrowLight from "../../../images/arrow-down-light.svg";

const Home = (props: any) => {
  const getIndex = (pstrStudy: string) => {
    return studies.map(study => study.title).indexOf(pstrStudy);
  } 

  const renderPanel = (pintIndex: number, pstrId: string, pstrNextId: string) => {
      return <Panel study={studies[pintIndex]} id={pstrId} next={pstrNextId} />
  }

  const handleOnClick = (pstrId: string) => {
    $('html,body').animate({
        scrollTop: $(pstrId).offset()?.top}, 'slow');
  }

  const handleOnMouseMove = (pobjEvent: any) => {
    const moiTwo = {width: $("#mouse-over-image-two").width(), height: $("#mouse-over-image-two").height()}
    const moiThree = {width: $("#mouse-over-image-three").width(), height: $("#mouse-over-image-three").height()}
    const moiFour = {width: $("#mouse-over-image-four").width(), height: $("#mouse-over-image-four").height()}
    const moiFive = {width: $("#mouse-over-image-five").width(), height: $("#mouse-over-image-five").height()}

    if(moiTwo.width && moiThree.width && moiFour.width && moiFive.width && moiTwo.height && moiThree.height && moiFour.height && moiFive.height){
      $("#mouse-over-image-two").css({left: pobjEvent.clientX - (moiTwo.width / 2), top: pobjEvent.clientY - (moiTwo.height / 2)});
      $("#mouse-over-image-three").css({left: pobjEvent.clientX - (moiThree.width / 2), top: pobjEvent.clientY - (moiTwo.height / 2)});
      $("#mouse-over-image-four").css({left: pobjEvent.clientX - (moiFour.width / 2), top: pobjEvent.clientY - (moiTwo.height / 2)});
      $("#mouse-over-image-five").css({left: pobjEvent.clientX - (moiFive.width / 2), top: pobjEvent.clientY - (moiTwo.height / 2)});
    }
  }

  const _intIndexCOPP = getIndex("City of Port Phillip")
  const _intIndexBV = getIndex("BankVic")
  const _intIndexL = getIndex("Lumea")
  const _intIndexB = getIndex("Bupa")

  const fadeIn = (pstrId: string, pintDelay: number) => {
    $(pstrId).delay(pintDelay).css('visibility','visible').hide().fadeIn(2000); 
  }

  useEffect(() => {
    fadeIn("#staggerSecond", 500)
    fadeIn("#staggerThird", 1000)
    fadeIn("#staggerFourth", 1500)
    fadeIn("#staggerFifth", 2000)
  }, [])

  return (
    <div className="global-fadein" onMouseMove={handleOnMouseMove}>
      <div id="staggerFifth" className={styles["home-visibility-hidden"]}>
        <Links />
        <Pagnation />
      </div>
      
      <div className={`${styles["home-banner"]} global-main-container`} id="one">
        <div className={styles["home-panel"]}>
          <Navbar selected="home" />

          <div id="staggerSecond" className={`${styles["home-banner-content"]} ${styles["home-visibility-hidden"]}`}>
            <h1 className={styles["home-panel-text"]}>
              Hello, my name is <Link className="global-border-thick" to="/about">Matthew Kinsman</Link>,<br />
              I’m a senior product designer<br />
              currently living in Melbourne and<br />
              and working at <a className="global-border-thick" href="https://www.mindsethealth.com" rel="noreferrer" target="_blank">Mindset Health</a>.
            </h1>

            <video autoPlay loop muted style={{marginLeft: 'auto'}}>
              <source src={video} type="video/mp4" />
            </video>
          </div>

          <div className={styles["home-panel-bottom"]}>
            <div id="staggerThird" className={styles["home-visibility-hidden"]}>
              <Spotify />
            </div>
            
            <div id="staggerFourth" className={`${styles["home-arrow"]} ${styles["home-visibility-hidden"]}`}>
              {props.portfolio.theme === "DARK" ? <a><img onClick={() => props.updateTheme("LIGHT")} alt="sun" src={sun} /></a> :
              <a><img onClick={() => props.updateTheme("DARK")} alt="moon" src={moon} /></a>}
              <a style={{marginLeft: "15px"}} onClick={() => handleOnClick("#two")}><img alt="arrow" src={props.portfolio.theme === "DARK" ? arrow : arrowLight} /></a>
            </div>
          </div>
        </div>
      </div>

      {renderPanel(_intIndexCOPP, "two", "three") /**cityofportphillip */}
      {renderPanel(_intIndexBV, "three", "four") /**bankvic */}
      {renderPanel(_intIndexL, "four", "five") /**opencourts */}
      {renderPanel(_intIndexB, "five", "six") /**beyondblue */}

      <div className="global-container">
        <CardView filter="" id="six" />
        <Clients />
        <Awards />
        <Testimonials />
        <Footer />
      </div>
    
      <img className={styles["mouse-over-image"]} id="mouse-over-image-two" src={studies[_intIndexCOPP].hover} alt={studies[_intIndexCOPP].title} />
      <img className={styles["mouse-over-image"]} id="mouse-over-image-three" src={studies[_intIndexBV].hover} alt={studies[_intIndexBV].title} />
      <img className={styles["mouse-over-image"]} id="mouse-over-image-four" src={studies[_intIndexL].hover} alt={studies[_intIndexL].title} />
      <img className={styles["mouse-over-image"]} id="mouse-over-image-five" src={studies[_intIndexB].hover} alt={studies[_intIndexB].title} />
    </div>
  );
}

const mapStateToProps = ( state: { portfolio: any; } ) => {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, { 
  updateTheme
})(Home);
