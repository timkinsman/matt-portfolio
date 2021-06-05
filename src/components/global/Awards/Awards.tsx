import React from "react";
import {connect} from "react-redux";
import {images, imagesLight} from "../../../images/Awards";
import styles from "./Awards.module.css";

const Awards = (props: any) => {
    const render = (parrAwards: Array<string>) => {
        return parrAwards.map((pstrImg: string, pintIndex: number) => {
            return (
                <div key={pintIndex} className={styles["awards-img-container"]}>
                    <img src={pstrImg} alt="img.svg" className={styles["awards-img"]} />
                    <div>
                        <p>Apple Watch<br />App of the Year</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="global-wrapper">
            <h3 className="global-header">Awards & Recognition</h3>
            <div className={styles["awards-awards"]}>
                {props.portfolio.theme === "DARK" ? render(images) : render(imagesLight)}
            </div>
        </div>
    )
}

const mapStateToProps = ( state: { portfolio: any; } ) => {
    return {
      portfolio: state.portfolio
    }
  }
  
  export default connect(mapStateToProps, null)(Awards);