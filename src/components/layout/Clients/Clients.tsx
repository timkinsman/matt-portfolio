import React from "react";
import images from "../../../images/Clients";
import styles from "./Clients.module.css";

const Clients = () => {
    const firstHalf = () => {
        return images.slice(0, Math.ceil(images.length / 2)).map((strImageSrc: string, intIndex: number) => {
            return (
                <div key={intIndex} className={styles["clients-img-container"]}>
                    <img src={strImageSrc} alt="img.svg" className={styles["clients-img"]} />
                </div>
            )
        })
    }

    const secondHalf = () => {
        return images.slice(-Math.ceil(images.length / 2)).map((strImageSrc, intIndex: number) => {
            return (
                <div key={intIndex} className={styles["clients-img-container"]}>
                    <img src={strImageSrc} alt="img.svg" className={styles["clients-img"]} />
                </div>
            )
        })
    }

    return (
        <div className="global-wrapper">
            <h3>Selected Clients</h3>
            <div className={styles["clients-container"]}>
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

export default Clients;