import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Panel.module.css';

function Panel(props: any) {
  return (
    <div className={styles["panel-container"]} style={{background: props.study.color}} id={props.id}>
        <div className={styles["panel-left"]}>
            <p className={styles["panel-header"]}>{props.study.title}</p>
            <p className={styles["panel-body"]}>
              {props.study.slogan}
            </p>
            <Link className={styles["panel-link"]}  to={{pathname: '/study', hash: `#${props.study.redirect}`, state: { study: props.study }}}>View Case Study →</Link>
        </div>
        <div>
            
        </div>
    </div>
  );
}

export default Panel;