import React from "react";
import images from "../../../../images/Tools";
import $ from "jquery";
import styles from "./Tools.module.css";

const Tools = () => {
    return (
        <div className="global-wrapper">
            <h3>Tools</h3>
            <div className={styles["tools-tools"]}>
                {images.map((img, i) => {
                    $(document).ready(function(){
                        $(`#a-${i}`).hover(
                            function(){$(`#img-${i}`).css("opacity", "0")},
                            function(){$(`#img-${i}`).css("opacity", "1")}
                        );
                    });

                    return (
                        <div className={styles["tools-img-container"]}>
                            <img id={`img-${i}`} src={img.img} alt="img.svg" className={styles["tools-img"]} />
                            <a target="_blank" id={`a-${i}`} href={img.link} className={`${styles["tools-img-text"]} global-border-thinnest`}>{img.text}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tools;