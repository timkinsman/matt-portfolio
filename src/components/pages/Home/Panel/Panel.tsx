import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import styles from "./Panel.module.css";

function Panel(props: any) {
  const handleOnMouseOver = () => {
    $("#mouse-over-image-" + props.id).css({opacity: "1"})
    $('body').css('cursor', 'none');
  }

  const handleOnMouseOut = () => {
    $("#mouse-over-image-" + props.id).css({opacity: "0"});
    $('body').css('cursor', 'auto');
  }

  return (
      <div className={styles["panel-container"]} style={{background: props.study.color}} id={props.id}>
        <div className={`${styles["panel-mouseover"]} global-main-container`} onMouseEnter={handleOnMouseOver} onMouseLeave={handleOnMouseOut}>
          <div onMouseEnter={handleOnMouseOut} onMouseLeave={handleOnMouseOver}>
              <h3 style={{margin: "30px 0"}}>{props.study.title}</h3>
              <h1 className={styles["panel-left-slogan"]}>{props.study.thumbnail}</h1>
              <h4 style={{margin: "36px 0 0 0"}}><Link className="global-border-regular" to={{pathname: "/study", hash: `#${props.study.redirect}`, state: { study: props.study }}}>View case study →</Link></h4>
          </div>
        </div>
      </div>
  );
}

export default Panel;