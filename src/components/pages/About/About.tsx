import React from "react";
import Awards from "../../layout/Awards/Awards";
import Bio from "../../layout/Bio/Bio";
import Clients from "../../layout/Clients/Clients";
import CurriculumVitae from "../../layout/CurriculumVitae/CurriculumVitae";
import Education from "../../layout/Education/Education";
import Experience from "../../layout/Experience/Experience";
import Footer from "../../layout/Footer/Footer";
import Navbar from "../../layout/Navbar/Navbar";
import styles from "./About.module.css";

function About() {
  return (
    <div className="global-fadein">
      <div className="global-main-container">
        <Navbar selected="about" />
        <div className="global-container">
          <p className="global-title">About me</p>
          <div className={`${styles["about-quote"]} global-wrapper`}>
            <h2>In design, “intuitive” is a synonym for “matches the user’s mental model.” The closer an interface fits that image, the easier it will be to learn, use and navigate. This is a concept with a lot of practical value.” – Erika Hall</h2>
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
