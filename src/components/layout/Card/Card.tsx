import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';

function Card(props: any) {
  return (
    <Link style={{opacity: '1'}} to={{pathname: '/study', hash: `#${props.study.redirect}`, state: { study: props.study }}}>
      <div className={styles["card"]} style={{background: props.study.color}}>
        <img src={props.study.img} alt="img" style={{height: '100%'}} />
        <div className={styles["card-content"]}>
          <h2 style={{margin: '0'}}>{props.study.title}</h2>
          <h4 style={{opacity: "0.8", margin: '0'}}>{props.study.industry} · {props.study.capabilites.join(", ")}</h4>
          <p style={{opacity: "0.8"}}>{props.study.cardSummary}</p>
          <h4 style={{margin: "auto 0 0 0"}}>View case study →</h4>
        </div>
      </div>
    </Link>
  );
}

export default Card;
