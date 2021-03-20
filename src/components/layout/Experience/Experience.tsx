import React from 'react';
import Item from '../Item/Item';

import styles from './Experience.module.css'

function Experience() {
  return (
    <div>
      <p className={styles["experience-header"]}>Experience</p>
      <div className={styles["experience-container"]}>
        <Item header="Collect" content="Intern Graphic Desinger" footer="March 2015 - May 2015" />
        <Item header="Sweat" content="Graphic Desinger" footer="July 2015 - January 2016" />
        <Item header="Sweat" content="Senior Graphic Desinger" footer="January 2016 - February 2018" />
        <Item header="Homely" content="User Experience Designer" footer="March 2018 - August 2018" />
        <Item header="EatClub" content="User Experience" footer="March 2018 - August 2018" />
      </div>
    </div>
  );
}

export default Experience;
