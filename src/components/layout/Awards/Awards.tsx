import React from 'react'

import styles from './Awards.module.css'

import images from '../../../images/Awards'

const Awards = () => {
    return (
        <div>
            <div className={styles["awards-header"]}>
                <p>Awards & Recognition</p>
                <div className={styles["awards-awards"]}>
                    {images.map((img) => {
                        return (
                            <div className={styles["awards-img-container"]}>
                                <img src={img} alt="img.svg" className={styles["awards-img"]} />
                                <div className={styles["awards-p"]}>
                                    <p>2016 Apple Watch</p>
                                    <p>App of the Year</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Awards