import React from 'react';

import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';

import Clients from '../../layout/Clients/Clients';
import Awards from '../../layout/Awards/Awards';
import CurriculumVitae from '../../layout/CurriculumVitae/CurriculumVitae';
import Bio from '../../layout/Bio/Bio';
import Education from '../../layout/Education/Education';
import Experience from '../../layout/Experience/Experience';

import styles from "./About.module.css"

function About() {
  return (
    <div className="global-fadein">
      <div className="global-main-container">
        <Navbar selected="about" />
        <div className="global-container">
          <p className="global-title">About me</p>
          <div className={`${styles["about-quote"]} global-wrapper`}>
            <h2>“Intuitive design happens when current knowledge is the same as the target knowledge.” – Jarad Spool</h2>
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
