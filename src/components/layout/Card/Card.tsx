import React from 'react';

import styles from './Card.module.css';

function Card(props: any) {
  return (
    <div className={styles["card"]} style={{background: props.background}}>
      <img src={props.img} alt="img" />
    </div>
  );
}

export default Card;
