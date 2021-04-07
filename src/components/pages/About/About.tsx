import React from 'react';

import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';

import styles from "./About.module.css";
import Clients from '../../layout/Clients/Clients';
import Awards from '../../layout/Awards/Awards';
import CurriculumVitae from '../../layout/CurriculumVitae/CurriculumVitae';
import Bio from '../../layout/Bio/Bio';
import Education from '../../layout/Education/Education';
import Experience from '../../layout/Experience/Experience';

function About() {
  return (
    <div className="global-fadein">
      <div className="global-container">
        <Navbar selected="about" />
        <div className="global-inner-container">
          <p className="global-title">About me</p>
          <div className="global-wrapper">
            <p className={styles["about-quote"]}>“Intuitive design happens when current knowledge is the same as the target knowledge.” – Jarad Spool</p>
          </div>
          <Bio />
          <Education />
          <Experience />
          <Clients />
          <Awards />
          <CurriculumVitae />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
