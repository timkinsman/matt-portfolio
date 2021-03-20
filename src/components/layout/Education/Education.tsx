import React from 'react';
import Item from '../Item/Item';

import styles from './Education.module.css'

function Education() {
  return (
    <div>
        <p className={styles["education-header"]}>Education</p>
        <div className={styles["education-container"]}>
          <Item header="St. Michael's College" content="Year 8 - Year 12" footer="January 2005 - December 2010" />
          <Item header="TAFE" content="Certificate IV Visual Arts" footer="January 2011 - December 2011" />
          <Item header="UniSA" content="Bachelor of Design" footer="March 2012 - November 2014" />
        </div>
    </div>
  );
}

export default Education;
