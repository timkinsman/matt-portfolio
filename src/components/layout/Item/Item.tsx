import React from 'react';

import styles from './Item.module.css'

function Item(props: any) {
    const renderImg = (emoji: string) => {
        if(emoji){
            return <img className={styles['item-img']} src={emoji} />
        }
        return null
    }

    const renderTitle = (link: string) => {
        if(link){
            return <h4 style={{marginBottom: '0'}}><a href={link} target="_blank" style={{marginBottom: '0'}}>{props.header}</a></h4>
        }
        return <h4 style={{marginBottom: '0'}}>{props.header}</h4>
    }

    return (
            <div>
                {renderImg(props.emoji)}
                {renderTitle(props.link)}
                <p style={{margin: '5px 0', opacity: "0.8"}}>{props.content}<br />{props.footer}</p>
            </div>
    );
}

export default Item;
