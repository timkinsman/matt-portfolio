import React from 'react'

import styles from './Tools.module.css'

import images from "../../../images/Tools"

const Tools = () => {
    return (
        <div className="global-wrapper">
            <p className="global-header">Tools</p>
            <div className={styles["tools-tools"]}>
                {images.map((img) => {
                    return (
                        <div className={styles["tools-img-container"]}>
                            <img src={img} alt="img.svg" className={styles["tools-img"]} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tools