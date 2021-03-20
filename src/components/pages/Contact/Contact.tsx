import React from 'react';
import Footer from '../../layout/Footer/Footer';
import Navbar from '../../layout/Navbar/Navbar';

import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles["contact-container"]}>
      <div className={styles["contact-banner"]}>
      <Navbar />
        <div style={{padding: '100px 250px 0 250px'}}>
          <p className={styles["contact-p"]}>Contact</p>
          <div>
            <p>Get in touch</p>
            <p>If you have any questions or want to collaborate please don't hesitate to get in touch.</p>
          </div>
          <div>
            <div>
              <p>Email</p>
              <p>hello@matthewkinsman.com</p>
            </div>
            <div>
              <p>Phone</p>
              <p>+61 424 792 708</p>
            </div>
            <div>
              <p>Enquiries</p>
              <p>Client brief form</p>
            </div>
          </div>
          <div>
            <p>Socials</p>
            
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
