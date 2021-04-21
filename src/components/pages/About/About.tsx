import React from 'react';

import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';

import Clients from '../../layout/Clients/Clients';
import Awards from '../../layout/Awards/Awards';
import CurriculumVitae from '../../layout/CurriculumVitae/CurriculumVitae';
import Bio from '../../layout/Bio/Bio';
import Education from '../../layout/Education/Education';
import Experience from '../../layout/Experience/Experience';

function About() {
  return (
    <div className="global-fadein">
        <Navbar selected="about" />
        <div className="global-inner-container">
          <p className="global-title">About me</p>
          <div className="global-wrapper" style={{paddingBottom: '0'}}>
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
  );
}

export default About;
