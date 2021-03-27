import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';

function Card(props: any) {
  return (
    <Link to={{pathname: '/study', hash: `#${props.study.redirect}`, state: { study: props.study }}} className={styles["card"]} style={{background: props.study.color}}>
      <img src={props.study.img} alt="img" />
      <div className={styles["card-content"]}>
        <p className="global-content" style={{fontSize: '32px', margin: '0'}}>{props.study.title}</p>
        <p className="global-footer">{props.study.industry} · {props.study.capabilites}</p>
        <p className="global-footer">{props.study.shortsummary}</p>
      </div>
    </Link>
  );
}

export default Card;
