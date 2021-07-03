import React from "react"
import styles from "./Image.module.css"
import $ from "jquery"

const Image = (props: any) => {
    const fadeIn = (pobj: any) => {
        $(pobj.target).css('visibility','visible').hide().fadeIn(1000);
    }

    return (
        <div className={styles["image-container"]} style={{background: props.color}}>
            <img className={styles["image"]} loading="lazy" onLoad={fadeIn} src={props.src} />
        </div>
    )
}

export default Image;