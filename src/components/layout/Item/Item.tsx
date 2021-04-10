import React from 'react';

import styles from './Item.module.css'

function Item(props: any) {

    const renderImg = (emoji: string) => {
        if(emoji){
            return <img className={styles['item-img']} src={emoji} />
        }
        return null
    }

    return (
            <div>
                {renderImg(props.emoji)}
                <h4>{props.header}</h4>
                <p style={{opacity: "0.8"}}>{props.content}<br />{props.footer}</p>
            </div>
    );
}

export default Item;
