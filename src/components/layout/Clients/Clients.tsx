import React from 'react'

import styles from './Clients.module.css'

import images from "../../../images/Clients"

const Clients = () => {
    const firstHalf = () => {
        return images.slice(0, Math.ceil(images.length / 2)).map((img) => {
            console.log(img)
            return (
                <div className={styles["clients-img-container"]}>
                    <img src={img} alt="img.svg" className={styles["clients-img"]} />
                </div>
            )
        })
    }

    const secondHalf = () => {
        return images.slice(-Math.ceil(images.length / 2)).map((img) => {
            return (
                <div className={styles["clients-img-container"]}>
                    <img src={img} alt="img.svg" className={styles["clients-img"]} />
                </div>
            )
        })
    }

    return (
        <div className="global-wrapper">
            <p className="global-header">Selected Clients</p>
            <div style={{position: 'relative'}}>
                <div className={styles["clients-clients"]}>
                    {firstHalf()}
                </div>
                <div className={styles["clients-clients-second"]}>
                    {secondHalf()}
                </div>
            </div>
        </div>
    )
}

export default Clients