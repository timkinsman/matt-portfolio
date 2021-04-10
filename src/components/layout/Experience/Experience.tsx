import React from 'react';
import Item from '../Item/Item';

import styles from './Experience.module.css'

function Experience() {
  return (
    <div className="global-wrapper">
      <h3>Experience</h3>
      <div className={styles["experience-grid"]}>
        <Item emoji="" header="Collect" content="Intern Graphic Designer" footer="March 2015 - May 2015" />
        <Item emoji="" header="Sweat" content="Graphic Designer" footer="July 2015 - January 2016" />
        <Item emoji="" header="Sweat" content="Senior Graphic Designer" footer="January 2016 - February 2018" />
        <Item emoji="" header="Homely" content="User Experience Designer" footer="March 2018 - August 2018" />
        <Item emoji="" header="EatClub" content="User Experience" footer="March 2018 - September 2018" />
        <Item emoji="" header="AKQA" content="Senior User Experience" footer="September 2018 - December 2018" />
        <Item emoji="" header="IE" content="Senior User Experience" footer="December 2018 - July 2019" />
        <Item emoji="" header="Versa" content="Senior User Experience" footer="August 2019 - Present" />
      </div>
    </div>
  );
}

export default Experience;
