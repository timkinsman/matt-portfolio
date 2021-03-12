import React from 'react';

import styles from './Panel.module.css';

function Panel(props: {background: string, id: string}) {
  return (
    <div className={styles.container} style={{background: props.background}} id={props.id}>
        <div className={styles.textcontainer}>
            <p className={styles.header}>City of Port Phillip</p>
            <p className={styles.body}>
              For the everyday member,<br />
              BankVic’s existing website was<br />
              confusing and complex.
            </p>
            <p className={styles.link}>View Case Study →</p>
        </div>
        <div className={styles.imgcontainer}>
            
        </div>
    </div>
  );
}

export default Panel;
