import React from "react";
import styles from "./Image.module.scss";

const Image = (props: {size: string, src: string}) => {
    return (
        <div className={styles[`image-container-${props.size}`]}>
            <img src={props.src} />
        </div>
    )
}

export default Image;