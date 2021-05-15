import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../../images/arrow-down.svg";
import $ from "jquery";
import styles from "./Footer.module.css";
import { updateTheme } from "../../../actions";
import {connect} from "react-redux";

const Footer = (props: any) => {

  const handleOnClickArrow = () => {
    $("html,body").animate({
        scrollTop: 0}, "slow");
  }

  const handleOnClickTheme = () => {
      switch(props.portfolio.theme){
        case "LIGHT":
          props.updateTheme("DARK")
          break;
        case "DARK":
          props.updateTheme("LIGHT")
          break;
      }
  }

  return (
    <div>
        <div className={styles["footer-border"]} />
        <div className={styles["footer-container"]}>
          <div className={styles["footer-grid"]}>
            <div>
              <h3>Go to</h3>
              <div className={styles["footer-grid"]}>
                <h4><Link to="/" className="global-border-thin">Home</Link></h4>
                <h4><Link to="/casestudies" className="global-border-thin">Case studies</Link></h4>
                <h4><Link to="/about" className="global-border-thin">About me</Link></h4>
                <h4><Link to="/whatido" className="global-border-thin">What I do</Link></h4>
                <h4><Link to="/otherwork" className="global-border-thin">Other work</Link></h4>
                <h4><Link to="/contact" className="global-border-thin">Contact</Link></h4>
              </div>
            </div>
            <div>
              <h3>Social</h3>
              <div className={styles["footer-grid"]}>
                <h4><a href="mailto:mskinsm@gmail.com" target="_blank" className="global-border-thin">Email</a></h4>
                <h4><a href="https://www.facebook.com/mskinsm/" target="_blank" className="global-border-thin">Facebook</a></h4>
                <h4><a href="https://www.behance.net/matthewkinsman" target="_blank" className="global-border-thin">Behance</a></h4>
                <h4><a href="https://twitter.com/MatthewKinsman" target="_blank" className="global-border-thin">Twitter</a></h4>
                <h4><a href="https://www.linkedin.com/in/matthew-kinsman/" target="_blank" className="global-border-thin">LinkedIn</a></h4>
                <h4><a href="https://open.spotify.com/user/mskinsm" target="_blank" className="global-border-thin">Spotify</a></h4>
              </div>
            </div>
          </div>
          <div className={styles["footer-grid-bottom"]}>
            <h4>© 2021 Matthew Kinsman, Melbourne, Australia</h4>
            <h4>Developed by <a className="global-border-thin" href="https://timkinsman.com" target="_blank">Tim Kinsman</a></h4>
          </div>
          <div className={styles["footer-arrow"]}>
            <a className="global-arrow" onClick={handleOnClickArrow}><img style={{transform: "rotate(180deg)"}} src={arrow} /></a>
          </div>
          <div className={styles["footer-theme"]}>
            <a onClick={handleOnClickTheme}>{props.portfolio.theme === "DARK" ? "LIGHT" : "DARK"}</a>
          </div>
        </div>
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
})(Footer);