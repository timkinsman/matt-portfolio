import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Panel.module.css';

function Panel(props: any) {
  return (
    <div className={styles.container} style={{background: props.background}} id={props.id}>
        <div className={styles.textcontainer}>
            <p className={styles.header}>{props.title}</p>
            <p className={styles.body}>
              {props.slogan}
            </p>
            <Link className={styles.link} to={`/works/${props.redirect}`}>View Case Study →</Link>
        </div>
        <div className={styles.imgcontainer}>
            
        </div>
    </div>
  );
}

export default Panel;
