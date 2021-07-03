import React, { useEffect, useState } from "react";
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
import video from "../../../videos/Memoji.webm";
import arrowLight from "../../../images/arrow-down-light.svg";
import { DARK, LIGHT } from "../../../colors";

const Home = (props: any) => {
  useEffect(() => {
    document.addEventListener("scroll", onScroll, true);
    return () => { window.removeEventListener("scroll", onScroll) } 
  }, [])

  const getIndexByTitle = (pstrStudy: string) => {
    return studies.map(study => study.title).indexOf(pstrStudy);
  }
  
  const _objPanelOne = studies[getIndexByTitle("City of Port Phillip")]
  const _objPanelTwo = studies[getIndexByTitle("BankVic")]
  const _objPanelThree = studies[getIndexByTitle("Lumea")]
  const _objPanelFour = studies[getIndexByTitle("Bupa")]

  const handleOnClick = (pstrId: string) => {
    $('html,body').animate({scrollTop: $(pstrId).offset()?.top}, 'slow');
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

  const onScroll = () => {
    console.log("TEST")
    var background = "inherit"

    if(_scrollTop("#two", "#three")){
      background = _objPanelOne.color
    }else if(_scrollTop("#three", "#four")){
      background = _objPanelTwo.color
    }else if(_scrollTop("#four", "#five")){
      background = _objPanelThree.color
    }else if(_scrollTop("#five", "#six")){
      background = _objPanelFour.color
    }else{
      background = "inherit"
    }

    $("#home").css("background", background)
    $("#home").css("color", background === "inherit" ? "inherit" : isBright(background) ? "#000000" : "#FFFFFF")
  }

  const isBright = (pstrHex: string): Boolean => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(pstrHex);
    if(result){
      //0.2126 R + 0.7152 G + 0.0722 B
      //console.log((0.2126 * parseInt(result[1], 16)) + (0.7152 * parseInt(result[2], 16)) + (0.0722 * parseInt(result[3], 16)))
      return (0.2126 * parseInt(result[1], 16)) + (0.7152 * parseInt(result[2], 16)) + (0.0722 * parseInt(result[3], 16)) > 224 ? true : false
    }
    return true
  }

  const _scrollTop = (pstrId: string, pstrIdNext: string) => {
    const strDocTop = $(document).scrollTop();
    const idTop = $(pstrId).offset()?.top
    const idNextTop = $(pstrIdNext).offset()?.top
    const winHeight = $(window).height()

    if(strDocTop !== undefined && idTop !== undefined && idNextTop !== undefined && winHeight !== undefined){
      if(strDocTop >= (idTop - (winHeight / 2)) && strDocTop < (idNextTop - (winHeight / 2))){
        return true
      }
    }

    return false    
  }

  return (
    <div id="container" style={{background: props.portfolio.theme === "DARK" ? DARK : LIGHT, color: props.portfolio.theme === "DARK" ? "#FFFFFF" : "#000000" }}>
      <div id="home" style={{transition: "background 1s, color 1s"}} className="global-fadein" onMouseMove={handleOnMouseMove}>
        <div style={{opacity: 0, animationDelay : '2s'}} className={styles["home-visibility-hidden"]}>
          <Links />
          <Pagnation />
        </div>
        
        <div className={`${styles["home-banner"]} global-main-container`} id="one">
          <div className={styles["home-panel"]}>
            <Navbar selected="home" />

            <div style={{opacity: 0, animationDelay : '0.5s'}} className={`${styles["home-banner-content"]} ${styles["home-visibility-hidden"]}`}>
              <h1 className={styles["home-panel-text"]}>
                Hello, my name is <Link className="global-border-bold" to="/about">Matthew Kinsman</Link>,<br />
                I’m a senior product designer<br />
                currently living in Melbourne and<br />
                and working at <a className="global-border-bold" href="https://www.mindsethealth.com" rel="noreferrer" target="_blank">Mindset Health</a>.
              </h1>
              <div id="home-video" className={styles["video-container"]}>
                <video id="video" style={{height: "700px", width: "700px"}} autoPlay loop muted src={video} />
              </div>
            </div>

            <div className={styles["home-panel-bottom"]}>
              <div style={{opacity: 0, animationDelay : '1s'}} className={styles["home-visibility-hidden"]}>
                <Spotify />
              </div>
              
              <div style={{opacity: 0, animationDelay : '1.5s'}} className={`${styles["home-arrow"]} ${styles["home-visibility-hidden"]}`}>
                {props.portfolio.theme === "DARK" ? <a><img onClick={() => {props.updateTheme("LIGHT")}} alt="sun" src={sun} /></a> :
                <a><img onClick={() => {props.updateTheme("DARK")}} alt="moon" src={moon} /></a>}
                <a style={{marginLeft: "15px"}} onClick={() => handleOnClick("#two")}><img alt="arrow" src={props.portfolio.theme === "DARK" ? arrow : arrowLight} /></a>
              </div>
            </div>
          </div>
        </div>

        <Panel study={_objPanelOne} id="two" next="three" />
        <Panel study={_objPanelTwo} id="three" next="four" />
        <Panel study={_objPanelThree} id="four" next="five" />
        <Panel study={_objPanelFour} id="five" next="six" />

        <div className="global-container" style={{paddingTop: "120px"}}>
          <CardView filter="" id="six" />
          <Clients />
          <Awards />
          <Testimonials />
          <Footer />
        </div>
      
        <img className={styles["mouse-over-image"]} id="mouse-over-image-two" src={_objPanelOne.hover} alt={_objPanelOne.title} />
        <img className={styles["mouse-over-image"]} id="mouse-over-image-three" src={_objPanelTwo.hover} alt={_objPanelTwo.title} />
        <img className={styles["mouse-over-image"]} id="mouse-over-image-four" src={_objPanelThree.hover} alt={_objPanelThree.title} />
        <img className={styles["mouse-over-image"]} id="mouse-over-image-five" src={_objPanelFour.hover} alt={_objPanelFour.title} />
      </div>
    </div>
  );
}

const mapStateToProps = ( state: { portfolio: any; }, ownProps: any ) => {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, { 
  updateTheme
})(Home);
