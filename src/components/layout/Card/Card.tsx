import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';

function Card(props: any) {
  return (
    <div className={styles["card"]} style={{background: props.study.color}}>
      <img src={props.study.img} alt="img" style={{height: '100%'}} />
      <div className={styles["card-content"]}>
        <h3 style={{marginTop: '0'}}>{props.study.title}</h3>
        <h4 style={{opacity: "0.8", margin: '0'}}>{props.study.industry} · {props.study.capabilites.join(", ")}</h4>
        <h4 style={{opacity: "0.8"}}>{props.study.shortsummary}</h4>
        <p style={{margin: "auto 0 0 0"}}><Link to={{pathname: '/study', hash: `#${props.study.redirect}`, state: { study: props.study }}}>View case study →</Link></p>
      </div>
    </div>
  );
}

export default Card;
