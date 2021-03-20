import React from 'react'

import styles from './Clients.module.css'

import images from "../../../images/Clients"

const Clients = () => {
    return (
        <div>
            <div className={styles["clients-header"]}>
                <p>Selected Clients</p>
                <div className={styles["clients-clients"]}>
                    {images.map((img) => {
                        return (
                            <div className={styles["clients-img-container"]}>
                                <img src={img} alt="img.svg" className={styles["clients-img"]} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Clients