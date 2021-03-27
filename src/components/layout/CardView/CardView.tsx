import React from 'react';
import Card from '../Card/Card';

import styles from './CardView.module.css'

import studies from '../../../studies'

function CardView(props: {id: string}) {
  return (
    <div className="global-wrapper" id={props.id}>
        <div className={styles.div}>
          <p>Filter by</p>
          <p>/</p>
          <a>Capability ↓</a>
          <a>Industry ↓</a>
          <a>Client ↓</a>
        </div>
        <div className={styles.cardview}>
          {studies.map(study => {
            return <Card study={study} />
          })}
        </div>
    </div>
  );
}

export default CardView;
