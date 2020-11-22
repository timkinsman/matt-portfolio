import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

import styles from "./About.module.css";

function About() {
  return (
    <div>
      <Navbar color="#000000" />

      <div className={styles.container}>

        <div className={styles.content}>
          <p className={styles.header}>
            About Me
          </p>
          <p className={styles.body}>
            A highly creative multidisciplinary designer who is driven to create products and services that are desirable, feasible and viable. Focused on championing a collaborative approach to validate problems and solutions through applying diverse research methods and continuous testing.
          </p>
        </div>
        <div className={styles.content}>
          <p className={styles.header}>
          What I like
          </p>
          <p className={styles.body}>
          Sleep well. Drink scotch. Call home enough. Keep receipts. Tread carefully in the rain. Dream much. Put knives in toasters. Remember anything from below the age of 7. Think peanut butter goes with celery. Wash whites and colours together. Repeat ourselves. Allow 30 minutes after eating before swimming. Take many long walks.
          </p>
        </div>
        <div className={styles.content}>
          <p className={styles.header}>
          What I don’t like
          </p>
          <p className={styles.body}>
          Sleep well. Drink scotch. Call home enough. Keep receipts. Tread carefully in the rain. Dream much. Put knives in toasters. Remember anything from below the age of 7. Think peanut butter goes with celery. Wash whites and colours together. Repeat ourselves. Allow 30 minutes after eating before swimming. Take many long walks.
          </p>
        </div>
        <div className={styles.content}>
          <p className={styles.header}>
            Education
          </p>
          <div className={styles.gridcontainer}>
            <div className={styles.gridcontent}>
              <p>TAFE</p>
            </div>
            <div className={styles.gridcontent}>
              <p>Certificate IV Visual Arts</p>
              <p>January 2011 - December 2011</p>
            </div>
          </div>
          <div className={styles.gridcontainer}>
            <div className={styles.gridcontent}>
              <p>UniSA</p>
            </div>
            <div className={styles.gridcontent}>
              <p>Certificate IV Visual Arts</p>
              <p>January 2011 - December 2011</p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.header}>
            Experience
          </p>
        </div>
        <div className={styles.content}>
          <p className={styles.header}>
            Clients
          </p>
        </div>
        <div className={styles.content}>
          <p className={styles.header}>
          Curriculum Vitae
          </p>
        </div>
      </div>

      <Footer color="#000000" />
    </div>
  );
}

export default About;
