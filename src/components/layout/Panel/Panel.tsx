import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import styles from "./Panel.module.css";

function Panel(props: any) {
  const handleOnMouseOver = () => {
    $("#mouse-over-image-" + props.id).css({opacity: "1"})
  }

  const handleOnMouseOut = () => {
    $("#mouse-over-image-" + props.id).css({opacity: "0"});
  }

  return (
      <div className={styles["panel-container"]} style={{background: props.study.color}} id={props.id}>
        <div className={`${styles["panel-mouseover"]} global-main-container`} onMouseEnter={handleOnMouseOver} onMouseLeave={handleOnMouseOut}>
          <div onMouseEnter={handleOnMouseOut} onMouseLeave={handleOnMouseOver}>
              <h4>{props.study.title}</h4>
              <h1 className={styles["panel-left-slogan"]}>{props.study.slogan}</h1>
              <h4><Link className="global-border-thin" to={{pathname: "/study", hash: `#${props.study.redirect}`, state: { study: props.study }}}>View case study →</Link></h4>
          </div>
        </div>
      </div>
  );
}

export default Panel;