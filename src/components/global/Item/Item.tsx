import React from "react";
import styles from "./Item.module.css";

function Item(props: any) {
    const renderImg = (pstrEmojiSrc: string) => {
        if(pstrEmojiSrc){
            return <img className={styles["item-img"]} src={pstrEmojiSrc} />
        }
    }

    const renderLink = (pstrRedirectUrl: string) => {
        if(pstrRedirectUrl){
            return <span><a href={pstrRedirectUrl} target="_blank" className="global-border-thin">View website →</a></span>
        }
    }

    return (
            <div>
                {renderImg(props.emoji)}
                <h4 className={styles["item-header"]}>{props.header}</h4>
                <p className={styles["item-content"]}>{props.content}<br />{props.footer}</p>
                {renderLink(props.link)}
            </div>
    );
}

export default Item;
