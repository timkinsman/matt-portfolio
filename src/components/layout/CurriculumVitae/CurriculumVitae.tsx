import React from 'react'

import styles from './CurriculumVitae.module.css'

const CurriculumVitae = () => {
    return (
        <div className="global-wrapper">
            <p className="global-header">Curriculum Vitae</p>
            <a className={styles["curriculum-vitae-a"]} href="mailto:mskinsm@gmail.com?subject=CV request">Request to view</a>
        </div>
    )
}

export default CurriculumVitae