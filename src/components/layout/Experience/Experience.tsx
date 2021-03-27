import React from 'react';
import Item from '../Item/Item';

import styles from './Experience.module.css'

function Experience() {
  return (
    <div className="global-wrapper">
      <p className="global-header">Experience</p>
      <div className={styles["experience-space-between"]}>
        <Item emoji="" header="Collect" content="Intern Graphic Desinger" footer="March 2015 - May 2015" />
        <Item emoji="" header="Sweat" content="Graphic Desinger" footer="July 2015 - January 2016" />
        <Item emoji="" header="Sweat" content="Senior Graphic Desinger" footer="January 2016 - February 2018" />
        <Item emoji="" header="Homely" content="User Experience Designer" footer="March 2018 - August 2018" />
        <Item emoji="" header="EatClub" content="User Experience" footer="March 2018 - August 2018" />
      </div>
    </div>
  );
}

export default Experience;
