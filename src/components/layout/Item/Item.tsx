import React from 'react';

import styles from './Item.module.css'

function Item(props: any) {
    const renderImg = (emoji: string) => {
        if(emoji){
            return <img className={styles['item-img']} src={emoji} />
        }
        return null
    }

    const renderLink = (link: string) => {
        if(link){
            return <span><a href={link} target="_blank">View website →</a></span>
        }
        return null
    }

    return (
            <div>
                {renderImg(props.emoji)}
                <h4 style={{margin: '4px 0'}}>{props.header}</h4>
                <p style={{opacity: "0.8"}}>{props.content}<br />{props.footer}</p>
                {renderLink(props.link)}
            </div>
    );
}

export default Item;
