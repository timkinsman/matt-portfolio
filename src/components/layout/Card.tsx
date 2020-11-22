import React from 'react';

import styles from './Card.module.css';

function Card(props: {background: string}) {
  return (
    <div className={styles.card} style={{background: props.background}}>
      
    </div>
  );
}

export default Card;
