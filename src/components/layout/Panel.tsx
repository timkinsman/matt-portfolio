import React from 'react';

import styles from './Panel.module.css';

function Panel(props: {background: string}) {
  return (
    <div className={styles.container} style={{background: props.background}}>
        <div className={styles.content}>
            <p>City of Port Phillip</p>
            <p>For the everyday member, BankVic’s existing website was confusing and complex.</p>
            <p>View Case Study</p>
        </div>
        <div className={styles.content}>
            img
        </div>
    </div>
  );
}

export default Panel;
