import React from 'react';

import styles from './Item.module.css'

function Item(props: any) {
  return (
        <div className={styles["item-container"]}>
            <div className={styles["item-header"]}>
                <p>{props.header}</p>
            </div>
            <div className={styles["item-content"]}>
                <p>{props.content}</p>
                <p>{props.footer}</p>
            </div>
        </div>
  );
}

export default Item;
