import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles["contact-container"]}>
      <div className={styles["contact-banner"]}>
        <Navbar />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
