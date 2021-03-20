import React from 'react'

import styles from './Socials.module.css'

import images from "../../../images/Socials"

const Socials = () => {
    return (
        <div>
            <div className={styles["socials-header"]}>
                <p>Socials</p>
                <div className={styles["socials-socials"]}>
                    {images.map((img) => {
                        return (
                            <div className={styles["socials-img-container"]}>
                                <img src={img} alt="img.svg" className={styles["socials-img"]} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Socials