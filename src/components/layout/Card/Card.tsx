import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';

function Card(props: any) {
  return (
    <Link className={styles["card-link"]} to={{pathname: '/study', hash: `#${props.study.redirect}`, state: { study: props.study }}}>
      <div className={styles["card"]} style={{background: props.study.color}}>
        <img className={styles["card-img"]} src={props.study.img} alt="img" />
        <div className={styles["card-content"]}>
          <h2 className={styles["card-study-title"]}>{props.study.title}</h2>
          <h4 className={styles["card-study-industry"]}>{props.study.industry}</h4>
          <p className={styles["card-study-summary"]}>{props.study.cardSummary}</p>
          <h4  className={styles["card-study-link"]}><span className={styles["card-view-case"]}>View case study →</span></h4>
        </div>
      </div>
    </Link>
  );
}

export default Card;
