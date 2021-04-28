import React from "react";
import images from "../../../images/Awards";
import styles from "./Awards.module.css";

const Awards = () => {
    return (
        <div className="global-wrapper">
            <h3>Awards & Recognition</h3>
            <div className={styles["awards-awards"]}>
                {images.map((img, i) => {
                    return (
                        <div key={`Awards-${i}`} className={styles["awards-img-container"]}>
                            <img src={img} alt="img.svg" className={styles["awards-img"]} />
                            <div>
                                <p>2016 Apple Watch<br />App of the Year</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Awards;