import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Panel.module.css';

import arrow from '../../../images/arrow-down.svg'

import $ from 'jquery'

function Panel(props: any) {
  const handleOnClick = (id: string) => {
    $('html,body').animate({
        scrollTop: $(id).offset()?.top}, 'slow');
  }

  return (
    <div className={styles["panel-container"]} style={{background: props.study.color}} id={props.id}>
        <div className={styles["panel-left"]}>
            <p className={styles["panel-header"]}>{props.study.title}</p>
            <p className={styles["panel-body"]}>
              {props.study.slogan}
            </p>
            <Link className={styles["panel-link"]} to={{pathname: '/study', hash: `#${props.study.redirect}`, state: { study: props.study }}}>View Case Study →</Link>
        </div>
        <div style={{position: 'relative'}}>
          <div className={styles["panel-arrow"]}>
            <p className="global-link" onClick={() => handleOnClick(`#${props.next}`)}><img src={arrow} alt="🡣" /></p>
          </div>
        </div>
    </div>
  );
}

export default Panel;