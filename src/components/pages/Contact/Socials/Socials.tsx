import React from "react";
import images from "../../../../images/Socials";
import $ from "jquery";
import styles from "./Socials.module.css";

const Socials = () => {
    return (
        <div className="global-wrapper">
            <h3 className="global-header">Socials</h3>
            <div className={styles["socials-socials"]}>
                {images.map((pobjImage: any, intIndex: number) => {
                    $(document).ready(function(){
                        $(`#a-${intIndex}`).hover(
                            function(){$(`#img-${intIndex}`).css("opacity", "0")},
                            function(){$(`#img-${intIndex}`).css("opacity", "1")}
                        );
                    });

                    return (
                        <div className={styles["socials-img-container"]}>
                            <img id={`img-${intIndex}`} src={pobjImage.img} alt="img.svg" className={styles["socials-img"]} />
                            <a className={`${styles["socials-img-text"]} global-border-light`} id={`a-${intIndex}`} href={pobjImage.link} target="_blank">{pobjImage.text}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Socials;