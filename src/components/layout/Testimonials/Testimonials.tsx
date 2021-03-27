import React from 'react'

import styles from './Testimonials.module.css'

const Testimonials = () => {
    return (
        <div className="global-wrapper">
            <div className="global-header">
                <p>Testimonials</p>
            </div>
            <div className={styles["testimonials-content"]}>
                <p>“Matt functioned as part of the team, helping to crystalise<br />our vision and delivering incredible results in a record time.”</p>
            </div>
            <div className={styles["testimonials-footer"]}>
                <p>Ben Sylvan</p>
                <p>‎Coordinator of Digital, City of Port Phillip</p>
            </div>
        </div>
    )
}

export default Testimonials