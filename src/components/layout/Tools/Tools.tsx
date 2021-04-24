import React from 'react'

import styles from './Tools.module.css'

import images from "../../../images/Tools"

const Tools = () => {
    return (
        <div className="global-wrapper">
            <h3>Tools</h3>
            <div className={styles["tools-tools"]}>
                {images.map((img) => {
                    return (
                        <div className={styles["tools-img-container"]}>
                            <img src={img.img} alt="img.svg" className={styles["tools-img"]} />
                            <p className={styles["tools-img-text"]}>{img.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tools