import React from 'react';

import Panel from '../layout/Panel';

import styles from './Home.module.css';

function Home() {
  return (
    <div>
        <div className={styles.landing}></div>
        <Panel background="#71B1D8" />
        <Panel background="#0A252F" />
        <Panel background="#FC98BF" />
        <Panel background="#2C3163" />
    </div>
  );
}

export default Home;
