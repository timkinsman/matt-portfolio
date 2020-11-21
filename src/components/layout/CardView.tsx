import React from 'react';

import styles from './CardView.module.css'

function CardView() {
  return (
    <div className={styles.container}>
        <div>Filter by    /    Capability ↓    Research ↓    Industry ↓    Client ↓</div>
        <div>Cards</div>
    </div>
  );
}

export default CardView;
