import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';

function Card(props: any) {
  return (
    <Link to={{pathname: '/study', hash: `#${props.study.redirect}`, state: { study: props.study }}}>
      <div className={styles["card"]} style={{background: props.study.color}}>
        <img src={props.study.img} alt="img" />
      </div>
    </Link>
  );
}

export default Card;
