import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Panel.module.css';

function Panel(props: any) {
  return (
    <div className={styles.container} style={{background: props.study.color}} id={props.id}>
        <div className={styles.textcontainer}>
            <p className={styles.header}>{props.study.title}</p>
            <p className={styles.body}>
              {props.study.slogan}
            </p>
            <Link className={styles.link}  to={{pathname: '/study', hash: `#${props.study.redirect}`, state: { study: props.study }}}>View Case Study →</Link>
        </div>
        <div className={styles.imgcontainer}>
            
        </div>
    </div>
  );
}

export default Panel;