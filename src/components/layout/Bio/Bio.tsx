import React from "react";
import images from "../../../images/Photos";
import $ from "jquery";
import styles from "./Bio.module.css";
import { Link } from "react-router-dom";

const Bio = () => {
  const fadeIn = (pobj: any) => {
    $(pobj.target).css('visibility','visible').hide().fadeIn(1000);
  }

  return (
    <div className="global-wrapper">
      <div className={styles["bio-grid"]}>
          <div>
              <h3 className={styles["bio-heading"]}>Bio</h3>
              <h4>
                A highly creative multidisciplinary designer who is driven to create products and services that are desirable for people, feasible for development and viable for business. Focused on championing a collaborative approach to validate solutions by employing diverse research methods and continuous improvement.
                <br /><br />
                I’m a rational thinker, attentive listener, measured speaker, team player and passionate go-getter.
                <br /><br />
                When I’m not making or trying to fix things I like to watch <a className="global-border-thin" href="https://www.icheckmovies.com/profiles/mskinsm/" target="_blank">films</a> (a lot of them), <Link className="global-border-thin" to="/otherwork">paint and draw</Link> (yeah I guess that’s still making things), view the occasional <a className="global-border-thin" href="https://www.reddit.com/r/AccidentalRenaissance/" target="_blank">reddit thread</a>, <a className="global-border-thin" href="https://www.youtube.com/watch?v=aSQzDC8RSeE&ab_channel=Munchies" target="_blank">cook</a> and <a className="global-border-thin" href="https://media.giphy.com/media/LQwJIMzxbHgjK/giphy.gif" target="_blank">eat</a>.</h4>
          </div>
          <div className={styles["bio-img-container"]}>
              <img src={images.about} alt="img" className={styles["bio-img"]} onLoad={fadeIn} />
          </div>
      </div>
    </div>
  );
}

export default Bio;
