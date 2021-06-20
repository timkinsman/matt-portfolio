import React from "react";
import styles from "./Maintenance.module.css";

const Maintenance = () => {
    return (
        <div className={styles["maintenance-container"]}>
            <h1 style={{marginBottom: "30px", textAlign: "center"}}>Website under maintenance</h1>
            <p style={{textAlign: "center"}}>This website is currently undergoing maintenance... Come back shortly.</p>
        </div>
    )
}

export default Maintenance;