import React from 'react'

import styles from './Socials.module.css'

import images from "../../../images/Socials"

import $ from 'jquery'

const Socials = () => {
    return (
        <div className="global-wrapper">
            <h3>Socials</h3>
            <div className={styles["socials-socials"]}>
                {images.map((img, i) => {
                    $(document).ready(function(){
                        $(`#a-${i}`).hover(
                            function(){$(`#img-${i}`).css("opacity", "0")},
                            function(){$(`#img-${i}`).css("opacity", "1")}
                        );
                    });

                    return (
                        <div className={styles["socials-img-container"]}>
                            <img id={`img-${i}`} src={img.img} alt="img.svg" className={styles["socials-img"]} />
                            <a className={`global-border-thinnest ${styles["socials-img-text"]}`} id={`a-${i}`} href={img.link} target="_blank">{img.text}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Socials