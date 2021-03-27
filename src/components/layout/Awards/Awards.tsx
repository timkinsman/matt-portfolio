import React from 'react'

import styles from './Awards.module.css'

import images from '../../../images/Awards'

const Awards = () => {
    return (
        <div className="global-wrapper">
            <p className="global-header">Awards & Recognition</p>
            <div className={styles["awards-awards"]}>
                {images.map((img) => {
                    return (
                        <div className={styles["awards-img-container"]}>
                            <img src={img} alt="img.svg" className={styles["awards-img"]} />
                            <div>
                                <p className="global-footer">2016 Apple Watch</p>
                                <p className="global-footer">App of the Year</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Awards