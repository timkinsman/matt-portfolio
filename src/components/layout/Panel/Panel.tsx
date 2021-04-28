import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Panel.module.css';

//import arrow from '../../../images/arrow-down.svg'

import $ from 'jquery'

function Panel(props: any) {
  const handleOnMouseOver = (e: any) => {
    $("#mouse-over-image-" + props.id).css({opacity: "1"})
  }

  const handleOnMouseOut = (e: any) => {
    $("#mouse-over-image-" + props.id).css({opacity: "0"});
  }

  return (
      <div className={styles["panel-container"]} style={{background: props.study.color}} id={props.id}>
        <div className="global-main-container" style={{height: "-webkit-fill-available", margin: "60px 0", display: "flex", justifyContent: "flex-end", alignItems: "flex-start"}}  onMouseEnter={handleOnMouseOver} onMouseLeave={handleOnMouseOut}>
          <div onMouseEnter={handleOnMouseOut} onMouseLeave={handleOnMouseOver}>
              <h4>{props.study.title}</h4>
              <h1 className={styles["panel-left-slogan"]}>{props.study.slogan}</h1>
              <h4><Link className="global-border-thin" to={{pathname: '/study', hash: `#${props.study.redirect}`, state: { study: props.study }}}>View case study →</Link></h4>
          </div>
        </div>
      </div>
  );
}

export default Panel;