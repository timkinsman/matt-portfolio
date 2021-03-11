import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles["contact-container"]}>
      <Navbar />
        <div className={styles["contact-banner"]} />
      <Footer />
    </div>
  );
}

export default Contact;
