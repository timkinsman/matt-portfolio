import React from 'react'

import styles from './Socials.module.css'

import images from "../../../images/Socials"

const Socials = () => {
    return (
        <div className="global-wrapper">
            <h3>Socials</h3>
            <div className={styles["socials-socials"]}>
                {images.map((img) => {
                    return (
                        <div className={styles["socials-img-container"]}>
                            <img src={img.img} alt="img.svg" className={styles["socials-img"]} />
                            <p className={styles["socials-img-text"]}>{img.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Socials