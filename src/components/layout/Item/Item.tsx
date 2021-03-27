import React from 'react';

import styles from './Item.module.css'

function Item(props: any) {

    const renderImg = (emoji: string) => {
        if(emoji){
            return <img src={emoji} />
        }
        return null
    }

    return (
            <div>
                <div className="global-content">
                    {renderImg(props.emoji)}
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
