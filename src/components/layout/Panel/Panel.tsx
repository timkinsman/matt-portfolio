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
      <div className="global-main-container" style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row', paddingBottom: '60px'}}>
        <div className={styles["panel-left"]}>
            <h4>{props.study.title}</h4>
            <h1>{props.study.slogan}</h1>
            <h4><Link className="global-border-thin" to={{pathname: '/study', hash: `#${props.study.redirect}`, state: { study: props.study }}}>View Case Study →</Link></h4>
        </div>
        {/*<div className={styles["panel-arrow"]}>
          <a onClick={() => handleOnClick(`#${props.next}`)}><img src={arrow} /></a>
        </div> I like these*/}
      </div>
    </div>
  );
}

export default Panel;