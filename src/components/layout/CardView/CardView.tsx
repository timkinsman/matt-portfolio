import React from 'react';
import Card from '../Card/Card';

import styles from './CardView.module.css'

function CardView(props: {id: string}) {
  return (
    <div className={styles.container} id={props.id}>
        <div className={styles.filters}>
          Filter by    /    Capability ↓    Research ↓    Industry ↓    Client ↓
        </div>
        <div className={styles.cardview}>
          <Card background="#5DE3DB" />
          <Card background="#FFFFFF"  />
          <Card background="#FF3F84"  />
          <Card background="#821616"  />
          <Card background="#3C7EFF"  />
          <Card background="#A30CFF"  />
          <Card background="#EC1763"  />
          <Card background="#67C8FF"  />
          <Card background="#727ABE"  />
          <Card background="#FF2B77"  />
        </div>
    </div>
  );
}

export default CardView;
