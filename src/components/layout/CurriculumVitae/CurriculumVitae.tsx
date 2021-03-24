import React from 'react'

import styles from './CurriculumVitae.module.css'

const CurriculumVitae = () => {
    return (
        <div>
            <div className={styles["curriculum-vitae-header"]}>
                <p>Curriculum Vitae</p>
            </div>
            <div className={styles["curriculum-vitae-content"]}>
                <p>Request to view</p>
            </div>
        </div>
    )
}

export default CurriculumVitae