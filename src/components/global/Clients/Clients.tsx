import React from "react";
import {connect} from "react-redux";
import images from "../../../images/Clients";
import imagesLight from "../../../images/Clients/Light"
import styles from "./Clients.module.css";

const Clients = (props: any) => {
    const firstHalf = (parrImages: Array<string>) => {
        return parrImages.slice(0, Math.ceil(parrImages.length / 2)).map((strImageSrc: string, intIndex: number) => {
            return (
                <div key={intIndex} className={styles["clients-img-container"]}>
                    <img src={strImageSrc} alt="img.svg" className={styles["clients-img"]} />
                </div>
            )
        })
    }

    const secondHalf = (parrImages: Array<string>) => {
        return parrImages.slice(-Math.ceil(parrImages.length / 2)).map((strImageSrc, intIndex: number) => {
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
                    {props.portfolio.theme === "DARK" ? firstHalf(images) : firstHalf(imagesLight)}
                </div>
                <div className={styles["clients-clients-second"]}>
                    {props.portfolio.theme === "DARK" ? secondHalf(images) : secondHalf(imagesLight)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( state: { portfolio: any; } ) => {
    return {
        portfolio: state.portfolio
    }
}
  
export default connect(mapStateToProps, null)(Clients);