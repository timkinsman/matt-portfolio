import React from "react";
import images from "../../../images/Photos";
import $ from "jquery";
import styles from "./Bio.module.css";

const Bio = () => {
  const fadeIn = (pobj: any) => {
    $(pobj.target).css('visibility','visible').hide().fadeIn(1000);
  }

  return (
    <div className="global-wrapper">
      <div className={styles["bio-grid"]}>
          <div>
              <h3 className={styles["bio-heading"]}>Bio</h3>
              <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.<br /><br />A highly creative multidisciplinary designer who is driven to create products and services that are desirable, feasible and viable. Focused on championing a collaborative approach to validate solutions through applying diverse research methods and testing.<br /><br /><br /></h4>
          </div>
          <div className={styles["bio-img-container"]}>
              <img src={images.about} alt="img" className={styles["bio-img"]} onLoad={fadeIn} />
          </div>
      </div>
    </div>
  );
}

export default Bio;
