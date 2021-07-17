import React from "react"
import { useState } from "react";
import Image from "../Image/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import left from "../../../../images/ctrl-left.svg";
import right from "../../../../images/ctrl-right.svg";
import styles from "./Carousel.module.css"

const Carousel = (props: any) => {
    const [_index, _setIndex] = useState(0)

    return (
        <div>
            <div className={styles["carousel-container"]}>
                <Image src={props.images(props.keys[_index]).default} color={props.color} />
                <div className={styles["carousel-ctrl"]}>
                    <a style={{margin: "0 0 0 25px"}} onClick={() => _index === 0 ? _setIndex(props.keys.length - 1) : _setIndex(_index - 1)}><img src={left} ></img></a>
                    <a style={{margin: "0 25px 0 auto"}} onClick={() => _index ===  props.keys.length - 1 ? _setIndex(0) : _setIndex(_index + 1)}><img src={right} ></img></a>
                </div>
            </div>
            <div className={styles["carousel-pagnation-container"]}>
                {props.keys.map((key: string, index: number) => {
                    return <a style={{fontSize: "10px", opacity: index == _index ? "1" : "0.4"}} onClick={() => _setIndex(index)}><FontAwesomeIcon icon={faCircle} /></a> 
                })}
            </div>
        </div>
    )
}

export default Carousel;