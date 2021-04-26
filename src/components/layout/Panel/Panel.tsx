import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Panel.module.css';

//import arrow from '../../../images/arrow-down.svg'

import $ from 'jquery'

function Panel(props: any) {
  const handleOnMouseOver = (e: any) => {
    $("#mouse-over-image").attr("src", props.study.img).css({opacity: "1"})
  }

  const handleOnMouseOut = (e: any) => {
    $("#mouse-over-image").css({opacity: "0"});
  }

  return (
      <div className={styles["panel-container"]} style={{background: props.study.color}} id={props.id} onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
        <div className="global-main-container" style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row', paddingBottom: '60px'}}>
          <div>
              <h4>{props.study.title}</h4>
              <h1 className={styles["panel-left-slogan"]}>{props.study.slogan}</h1>
              <h4><Link className="global-border-thin" to={{pathname: '/study', hash: `#${props.study.redirect}`, state: { study: props.study }}}>View case study →</Link></h4>
          </div>
        </div>
      </div>
  );
}

export default Panel;